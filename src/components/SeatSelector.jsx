import React, { useState } from 'react';
import { FaToilet } from 'react-icons/fa';
import { GiSteeringWheel } from 'react-icons/gi';
import clsx from 'clsx';
import { useNavigate } from 'react-router';


const SeatSelectorCard = ({busDetail,seats}) => {
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSelect = (seatId) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seatId)
        ? prevSeats.filter((id) => id !== seatId) // Deselect if already selected
        : [...prevSeats, seatId] // Add if not selected
    );
  };

  const cityData = [
    { city: "Delhi", code: 3 },
    { city: "Mumbai", code: 1 },
    { city: "Bengaluru", code: 2 },
    { city: "Chennai", code: 4 },
    { city: "Hyderabad", code: 5 },
    { city: "Kolkata", code: 6 },
    { city: "Pune", code: 7 },
    { city: "Ahmedabad", code: 8 },
    { city: "Lucknow", code: 102 },
    { city: "Jaipur", code: 103 },
    { city: "Patna", code: 104 },
    { city: "Bhopal", code: 105 },
    { city: "Chandigarh", code: 106 },
    { city: "Indore", code: 107 },
    { city: "Nagpur", code: 108 },
    { city: "Coimbatore", code: 109 },
    { city: "Kochi", code: 110 },
    { city: "Thiruvananthapuram", code: 111 },
    { city: "Surat", code: 112 },
    { city: "Visakhapatnam", code: 113 },
    { city: "Varanasi", code: 114 },
    { city: "Amritsar", code: 115 },
    { city: "Dehradun", code: 116 },
    { city: "Ranchi", code: 117 },
    { city: "Guwahati", code: 118 },
    { city: "Bhubaneswar", code: 119 }
  ];
console.log(cityData?.find((ele)=>ele?.code===+busDetail?.fromCity)?.city,"seatsData")
  return (
    <div className="w-full max-w-6xl mx-auto bg-white shadow-md rounded-xl p-4 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2">
        <div>
          <h2 className="text-xl font-semibold text-green-600">IntrCity SmartBus</h2>
          <p className="text-sm text-gray-500">{cityData?.find((ele)=>ele?.code===+busDetail?.fromCity)?.city} -{cityData?.find((ele)=>ele?.code===+busDetail?.toCity)?.city}</p>
        </div>
        <div className="text-sm text-gray-600 flex gap-4">
          <span>🕓 {busDetail?.arrivalTime} → {busDetail?.departureTime} ({busDetail?.duration})</span>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">User's Choice</span>
          <FaToilet title="Washroom" />
        </div>
      </div>

      
      <div className="flex border-b text-sm">
        {["Available Seats"].map((tab, idx) => (
          <div key={idx} className={clsx("px-4 py-2 cursor-pointer", idx === 0 && "border-b-2 border-blue-600 font-semibold")}>
            {tab}
          </div>
        ))}
      </div>

      <div className="gap-4">
        <div>
          <h3 className="text-sm text-gray-600 mb-2">Lower Deck (1)</h3>
          <div className="grid grid-cols-10 gap-2 bg-gray-100 p-2 rounded">
            <GiSteeringWheel className="text-gray-600 text-sm sm:text-lg col-span-1" />
            {seats?.map((seat) => {
        const isSelected = selectedSeats === seat.seatKey;
        const isBooked = seat.booked;

        return (
          <img
            key={seat.seatKey}
            width="30"
            height="30"
            src="https://img.icons8.com/office/40/car-seat.png"
            alt="car-seat"
            className={clsx(
              "rounded p-1 transition-all duration-150",
              isBooked && "bg-red-400 cursor-not-allowed",
              !isBooked && isSelected && "bg-green-500",
              !isBooked && !isSelected && "bg-gray-300 hover:bg-green-100 cursor-pointer"
            )}
            onClick={() => {
              if (!isBooked) handleSelect(seat.seatKey);
            }}
          />
        );
      })}
          </div>
        </div>

      </div>

      <div className="grid grid-cols-2 gap-4 border-t pt-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-1">Boarding Point</h4>
          <p className="text-sm text-gray-600">{busDetail?.boardingDetails[0]?.boardingAddress}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-1">Dropping Point</h4>
          <p className="text-sm text-gray-600">{busDetail?.droppingDetails[0]?.droppingAddress}</p>
        </div>
      </div>

      {/* Price Summary */}
      <div className="flex justify-between items-center mt-4 border-t pt-4">
        <div>
          <p className="text-lg font-bold text-green-600">₹{busDetail?.fareMasters[0]?.totalAmount * 85}</p>
        </div>
        <button onClick={()=>navigate('/passenger')} className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600">
          Continue Booking
        </button>
      </div>
    </div>
  );
};

export default SeatSelectorCard;
