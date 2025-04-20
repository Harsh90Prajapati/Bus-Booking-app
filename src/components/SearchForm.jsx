import { useState } from "react";
import { useNavigate } from "react-router";
import { FaSearch, FaExchangeAlt } from "react-icons/fa";
import { saveToLocalStorage } from "../features/searchSlice";
// // import axios from "axios";
// import { useDispatch } from "react-redux";
// import { fetchBuses } from "../features/searchSlice";

export default function SearchForm() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [fromQuery, setFromQuery] = useState("");
  const [toQuery, setToQuery] = useState("");
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const navigate = useNavigate();


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

  const filteredFromCities = cityData.filter(city =>
    city.city.toLowerCase().includes(fromQuery.toLowerCase())
  );

  const filteredToCities = cityData.filter(city =>
    city.city.toLowerCase().includes(toQuery.toLowerCase())
  );

  const handleSwap = () => {
    const tempCode = from;
    const tempQuery = fromQuery;
    setFrom(to);
    setFromQuery(toQuery);
    setTo(tempCode);
    setToQuery(tempQuery);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDate = date.split("-").reverse().join("-");
    saveToLocalStorage("formData",formattedDate)
    navigate(`/search?origin=${from.toString()}&destination=${to.toString()}&travelDate=${formattedDate}`);
  
    // dispatch(fetchBuses({
    //   origin: from.toString(),
    //   destination: to.toString(),
    //   travelDate: formattedDate
    // }))
    // .unwrap()
    // .then((res) => {
    // })
    // .catch((err) => {
    //   alert("Search failed: " + err);
    // });
  };
  const handleFromInputChange = (e) => {
    setFromQuery(e.target.value);
    setShowFromDropdown(true);
  };
  const handleToInputChange = (e) => {
    setToQuery(e.target.value);
    setShowToDropdown(true);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md relative">
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        {/* From Input */}
        <div className="flex-1 relative">
          <label className="block text-gray-700 mb-2">From</label>
          <input
            type="text"
            value={fromQuery}
            onChange={handleFromInputChange}
            className="w-full p-2 border rounded"
            placeholder="Enter city"
            required
          />
           {showFromDropdown && filteredFromCities.length > 0 && (
            <ul className="absolute z-10 bg-white border w-full mt-1 rounded max-h-40 overflow-y-auto">
              {filteredFromCities.map((city, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setFrom(city.code);
                    setFromQuery(city.city);
                    setShowFromDropdown(false); // hide dropdown on select
                  }}
                >
                  {city.city}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Swap Button */}
        <button
          type="button"
          onClick={handleSwap}
          className="self-end hidden sm:block mb-2 p-2 bg-gray-100 rounded-full"
        >
          <FaExchangeAlt />
        </button>

        {/* To Input */}
        <div className="flex-1 relative">
          <label className="block text-gray-700 mb-2">To</label>
          <input
            type="text"
            value={toQuery}
            onChange={handleToInputChange}
            className="w-full p-2 border rounded"
            placeholder="Enter city"
            required
          />
          {showToDropdown && filteredToCities.length > 0 && (
            <ul className="absolute z-10 bg-white border w-full mt-1 rounded max-h-40 overflow-y-auto">
              {filteredToCities.map((city, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setTo(city.code);
                    setToQuery(city.city);
                    setShowToDropdown(false); // hide dropdown on select
                  }}
                >
                  {city.city}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Date Input */}
        <div className="flex-1">
          <label className="block text-gray-700 mb-2">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded flex items-center justify-center gap-2"
      >
        <FaSearch /> Search Buses
      </button>
    </form>
  );
}
