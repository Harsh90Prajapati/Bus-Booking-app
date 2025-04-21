import React, { useEffect, useState } from "react";
import AppDownloadSection from "../components/AppDownload";
import { loadFromLocalStorage } from "../features/searchSlice";

const BookingConfirmation = () => {
  const [data, setData] = useState('');
  const [busDetail, setBusDetail] = useState({});
  const [passenger , setPassenger] = useState('')

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
    { city: "Bhubaneswar", code: 119 },
  ];

  useEffect(() => {
    const formData = loadFromLocalStorage("formData");
    const busData = loadFromLocalStorage("busDetail");
    const passengerData = loadFromLocalStorage("passengerDetail");

    setData(formData || {});
    setBusDetail(busData || {});
    setPassenger(passengerData || {})
  }, []);

  const fromCityName = cityData.find((ele) => ele.code === +busDetail?.fromCity)?.city || "N/A";
  const toCityName = cityData.find((ele) => ele.code === +busDetail?.toCity)?.city || "N/A";

  const boardingAddress = busDetail?.boardingDetails?.[0]?.boardingAddress || "Boarding address not available";
  const droppingAddress = busDetail?.droppingDetails?.[0]?.droppingAddress || "Dropping address not available";

  return (
    <div className="h-fit p-3 sm:p-0">
       <h1 className="text-xl sm:text-2xl font-bold text-center mt-2 text-green-400 border-b">Your Booked Bus Ticket</h1>
      <div className="w-full md:max-w-2xl md:mx-auto rounded-2xl shadow-md border p-4 my-10">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="text-left">
              <h2 className="text-xl font-bold">{fromCityName}</h2>
              <p className="text-sm text-gray-500">{boardingAddress}</p>
            </div>
            <div className="flex flex-col items-center">
            <img width="40" height="40" src="https://img.icons8.com/ultraviolet/40/bus2.png" alt="bus2"/>
              <span className="text-xs text-gray-500">Bus</span>
            </div>
            <div className="text-right">
              <h2 className="text-xl font-bold">{toCityName}</h2>
              <p className="text-sm text-gray-500">{droppingAddress}</p>
            </div>
          </div>

          <div className="flex justify-between text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <img width="30" height="30" src="https://img.icons8.com/plasticine/100/apple-clock.png" alt="apple-clock" />
              <span>{data}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4" />
              <span>Departure: {busDetail.departureTime}</span>
            </div>
          </div>

          <div className="flex justify-between items-center border-t pt-3 text-sm">
            <div>
              <p className="font-medium">{busDetail.vehicleType}</p>
              <p className="text-blue-500">{busDetail.busType}</p>
            </div>
            <div className="text-right">
              <p className="font-medium">Duration</p>
              <p>{busDetail.duration}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
          <div className="border-t pt-3 text-sm">
            <p className="font-medium mb-1">Passenger Detail</p>
            <ul className="space-y-1">
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 text-gray-500" />
                <span>{passenger.name}</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 text-gray-500" />
                <span>{passenger.age} years</span>
              </li>
            </ul>
          </div>
          <div>
          <img width="40" height="40" src="https://img.icons8.com/office/40/ok--v1.png" alt="ok--v1"/>
          </div>
          </div>
        </div>
      </div>
      <AppDownloadSection />
    </div>
  );
};

export default BookingConfirmation;
