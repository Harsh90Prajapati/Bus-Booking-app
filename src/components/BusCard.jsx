
import { useNavigate } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function BusCard({ bus, id,index }) {
  const navigate = useNavigate();
  console.log(bus,"busdata")

  return (
    <motion.div
      
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.01 }}
      className="bg-white rounded-lg shadow-md p-4 mb-6"
    >
      {/* Top Section */}
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <img
            src="https://img.icons8.com/dusk/64/bus--v1.png"
            alt="Bus"
            className="w-8 h-8"
          />
          <span className="font-semibold text-blue-700 text-lg">
            {bus.name || "IntrCity SmartBus"}
          </span>
          <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
            {bus.busType}
          </span>
        </div>
      </div>

      {/* Time & Route */}
      <div className="flex justify-between items-center border-y py-3 text-sm">
        <div>
          <p className="font-semibold text-lg">{bus.departureTime}</p>
          <p className="text-gray-600">{bus.fromcity}</p>
        </div>
        <div className="text-center text-gray-500">
          <p className="text-sm">{bus.duration}</p>
          <hr className="w-12 mx-auto my-1 border-t-2 border-gray-300" />
        </div>
        <div className="text-right">
          <p className="font-semibold text-lg">{bus.arrivalTime}</p>
          <p className="text-gray-600">{bus.tocity}</p>
        </div>
      </div>

      {/* Tags and Rating */}
      <div className="flex items-center gap-3 mt-2 text-sm">
        <span className="bg-green-500 text-white px-2 py-1 rounded flex items-center gap-1 text-xs">
          ⭐ {bus.rating || "4.2"}
        </span>
        <span className="text-gray-700 flex items-center">{bus.AC ? <img width="20" height="20" src="https://img.icons8.com/fluency/48/air-conditioner.png" alt="air-conditioner"/> : <img width="20" height="20" src="https://img.icons8.com/fluency/48/fan.png" alt="fan"/>}, Washroom</span>
        <span className="text-blue-500 underline cursor-pointer text-xs">
          View Full Route
        </span>
      </div>

      {/* Pricing and Seats */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-4 text-sm text-center">
        <div>
          <p className="font-semibold">Seater ({bus.seaterCount || 3})</p>
          <p className="text-gray-800 font-bold">
            ₹{bus.fareMasters[0]?.totalAmount*85 || 1519}
          </p>
        </div>
        <div>
          <p className="font-semibold">Sleeper ({bus.sleeperCount || 7})</p>
          <p className="text-gray-800 font-bold">
            ₹{bus.fareMasters?.basciAmount || 1519}
          </p>
        </div>
        <div>
          <p className="font-semibold">Private Sleeper ({bus.privateSleeperCount || 7})</p>
          <p className="text-gray-800 font-bold">
            ₹{bus.fareMasters?.totalAmount || 1759}
          </p>
        </div>
        <div className="flex flex-col justify-center items-end text-xs text-gray-600 col-span-full md:col-span-1 md:text-right">
          Seats Available:{" "}
          <span className="font-semibold">{bus.availableSeats || 17} Seat(s)</span>
        </div>
      </div>

      {/* Bottom Tabs and Button */}
      <div className="mt-4 flex justify-between items-center">
        <div className="flex gap-4 text-xs text-gray-600">
          <button className="hover:underline">Available Seats</button>
          <button className="hover:underline">Amenities</button>
          <button className="hover:underline">Booking Policy</button>
        </div>
        <button
          className="bg-green-600 text-white px-4 py-2 text-sm rounded hover:bg-green-700"
          onClick={() => navigate(`/seats?busId=${id}&busIndex=${index}&boardingPointId=${bus?.boardingDetails[0]?.boardingId}&dropingPointId=${bus?.droppingDetails[0]?.droppingId}&busKey=${bus?.busKey}`)}
        >
          Select Seats
        </button>
      </div>
    </motion.div>
  );
}
