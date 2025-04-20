import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  createBooking,
  resetBookingState,
} from "../features/booking/bookingSlice";
import {
  fetchBusSeats,
  saveToLocalStorage,
  setSelectedBus,
} from "../features/searchSlice";
import SeatSelector from "../components/SeatSelector";
import AppDownloadSection from "../components/AppDownload";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function SeatSelection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const { seats, selectedBus, results } = useSelector((state) => state.bus);
  const { booking, status: bookingStatus } = useSelector((state) => state.booking);

  const [selectedSeats, setSelectedSeats] = useState([]);

  const busId = searchParams.get("busId");
  const boardingPointId = searchParams.get("boardingPointId");
  const dropingPointId = searchParams.get("dropingPointId");
  const busKey = searchParams.get("busKey");
  const busIndex = searchParams.get("busIndex");

  const busDetail = results?.data?.tripDetails?.[busIndex];

  useEffect(() => {
    if (!busId || !boardingPointId || !dropingPointId || !busKey) return;

    saveToLocalStorage("busDetail", busDetail);
    dispatch(setSelectedBus(busKey));

    dispatch(
      fetchBusSeats({
        requestId: busId.toString(),
        boardingPointId: boardingPointId.toString(),
        dropingPointId,
        busKey,
      })
    ).unwrap().catch((err) => alert("Search failed: " + err));

    return () => dispatch(resetBookingState());
  }, [dispatch, busId, boardingPointId, dropingPointId, busKey, busDetail]);

  useEffect(() => {
    if (bookingStatus === "succeeded" && booking) {
      navigate("/confirm", {
        state: {
          bus: selectedBus,
          booking,
          selectedSeats,
        },
      });
    }
  }, [bookingStatus, booking, navigate, selectedBus, selectedSeats]);

  const handleSeatSelection = (seats) => setSelectedSeats(seats);

  // eslint-disable-next-line no-unused-vars
  const handlePassengerSubmit = (passengerInfo) => {
    dispatch(
      createBooking({
        busId,
        seats: selectedSeats,
        passengerInfo,
      })
    );
  };

  if (!seats || !selectedBus) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No bus selected</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto p-4 mt-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <SeatSelector
            seats={seats?.data?.seatLayout}
            onSelect={handleSeatSelection}
            busDetail={busDetail}
          />
        </motion.div>
      </main>
      <AppDownloadSection />
    </div>
  );
}
