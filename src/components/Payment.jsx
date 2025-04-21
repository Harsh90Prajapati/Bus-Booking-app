import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { loadFromLocalStorage } from "../features/searchSlice";
import { useNavigate } from 'react-router';




const PaymentComponent = ({  busName, seats, }) => {
    const { selectedBus } = useSelector((state) => state.bus);
    console.log(selectedBus,"selectedBus")
    const [busDetail,setBusDetail]=useState({})
    const navigate = useNavigate();
  console.log(busDetail,"selectedBus")
  const price = busDetail?.fareMasters?.[0]?.basicAmount
  ? busDetail.fareMasters[0].basicAmount * 85
  : 0;
  const savings = 68;
  const gst = 34;
  const amount = (price - savings);
  const total = (amount + gst)

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

 

  useEffect(()=>{
    setBusDetail(loadFromLocalStorage('busDetail'))
  },[])


  
    return (
        <div className="h-fit py-6 px-2">
          <h1 className="text-xl sm:text-2xl text-center font-semibold">Please Confirm Your Payment</h1>
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl overflow-hidden border my-10 ">
          {/* Journey Info */}
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{cityData?.find((ele)=>ele?.code===+busDetail?.fromCity)?.city} </h3>
                <p className="text-sm text-gray-500">{busDetail?.arrivalTime}</p>
              </div>
              <div className="text-xl">→</div>
              <div>
                <h3 className="text-lg font-semibold">{cityData?.find((ele)=>ele?.code===+busDetail?.toCity)?.city}</h3>
                <p className="text-sm text-gray-500">{busDetail?.departureTime}</p>
              </div>
            </div>
            <p className="text-blue-600 text-sm mt-2">100% Instant Refund 12 hours before departure</p>
          </div>
    
          <div className="p-4 space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Bus Name</span>
              <span className="font-medium">{busName}</span>
            </div>
            <div className="flex justify-between">
              <span>Seats Selected</span>
              <span className="font-medium">{seats?.join(", ")}</span>
            </div>
            <div className="flex justify-between">
              <span>Trip Fare</span>
              <span>₹{price}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Savings Card Discount</span>
              <span>-₹{savings}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Fare Total</span>
              <span>₹{amount}</span>
            </div>
            <div className="flex justify-between">
              <span>GST</span>
              <span>₹{gst}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Use IC Cash</span>
              </label>
              <a href="#" className="text-blue-600 font-medium">Sign In Now</a>
            </div>
          </div>
    
          {/* Total */}
          <div className="flex flex-col w-full items-end">
          <div className="p-4 w-full border-t text-lg font-semibold flex justify-between">
            <span>Net Payable Amount</span>
            <span className="text-green-700">₹{total}</span>
          </div>
          <button onClick={()=>navigate('/confirm')} className="bg-green-500 text-white px-4 py-2  m-2 rounded shadow hover:bg-green-600">
          Confirm Payment
          </button>
          </div>
        </div>
        </div>
      );
    };

export default PaymentComponent;
