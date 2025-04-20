import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import BusCard from "../components/BusCard";
import JourneyAssistance from "../components/Journey";
import { fetchBuses } from "../features/searchSlice";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { results, status, error } = useSelector((state) => state.bus);
  const origin = searchParams.get("origin");
  const destination = searchParams.get("destination");
  const travelDate = searchParams.get("travelDate");
  const [filters, setFilters] = useState({
    busType: "",
    departureTime: "",
    priceSort: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(
      fetchBuses({
        origin: origin,
        destination: destination,
        travelDate: travelDate,
      })
    )
      .unwrap()
      .then((res) => {
        console.log(res);
        // navigate(`/search?origin=${from.toString()}&destination=${to.toString()}&travelDate=${formattedDate}`);
      })
      .catch((err) => {
        alert("Search failed: " + err);
      });
  }, [destination, dispatch, origin, searchParams, travelDate]);

  const filteredResults = results?.data?.tripDetails
    ?.filter((bus) => {
      if (filters.busType === "AC" && !bus.AC) return false;
      if (filters.busType === "Non-AC" && bus.AC) return false;

      if (filters.departureTime) {
        // eslint-disable-next-line no-unsafe-optional-chaining
        const [time, meridian] = bus.departureTime?.split(" "); 
        const hour = parseInt(time?.split(":")[0]);

        if (filters.departureTime === "morning") {
          if (meridian !== "AM") return false;
        } else if (filters.departureTime === "evening") {
          if (meridian !== "PM" || hour >= 6) return false;
        } else if (filters.departureTime === "night") {
          if (meridian !== "PM" || hour < 6) return false;
        }
      }

      return true;
    })
    .sort((a, b) => {
      if (filters.priceSort === "lowtohigh") {
        return a.fareMasters.totalAmount - b.fareMasters.totalAmount;
      } else if (filters.priceSort === "hightolow") {
        return b.fareMasters.totalAmount - a.fareMasters.totalAmount;
      }
      return 0;
    });

  if (status === "loading")
    return (
      <p className="h-screen flex items-center justify-center">
        <img
          width="100"
          height="100"
          src="https://img.icons8.com/bubbles/100/bus.png"
          alt="bus"
        />
        Loading buses...
      </p>
    );
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Filter Controls */}
      <div className="flex flex-wrap text-xs sm:text-base gap-4 mb-6">
        <select
          name="busType"
          value={filters.busType}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">All Bus Types</option>
          <option value="AC">AC</option>
          <option value="Non-AC">Non-AC</option>
        </select>

        <select
          name="departureTime"
          value={filters.departureTime}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Any Time</option>
          <option value="morning">Morning (Before 12PM)</option>
          <option value="evening">Evening (12PM - 6PM)</option>
          <option value="night">Night (After 6PM)</option>
        </select>

        <select
          name="priceSort"
          value={filters.priceSort}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Sort by Price</option>
          <option value="lowtohigh">Low to High</option>
          <option value="hightolow">High to Low</option>
        </select>
      </div>

      {filteredResults?.length > 0 ? (
        filteredResults.map((bus, index) => (
          <BusCard
            key={index}
            index={index}
            bus={bus}
            id={results?.data?.requestId}
          />
        ))
      ) : (
        <p>No buses found with current filters.</p>
      )}

      <JourneyAssistance />
    </div>
  );
}
