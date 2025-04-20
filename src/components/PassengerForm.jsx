import { useState } from "react";
import { useNavigate } from 'react-router';
import { saveToLocalStorage } from "../features/searchSlice";

export default function PassengerForm() {
  const [passenger, setPassenger] = useState({
    name: "",
    age: "",
    gender: "male",
    email: "",
    phone: "",
    idType: "Aadhar Card",
    idNumber: "",
    specialRequest: "",
    agree: false
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPassenger({ ...passenger, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passenger.agree) {
      saveToLocalStorage("passengerDetail",passenger)
      navigate('/payment')
    } else {
      alert("Please accept the terms and conditions to proceed.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto p-6 my-10 bg-white shadow-lg rounded-2xl space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800 text-center">Passenger Details</h2>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          name="name"
          value={passenger.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., John Doe"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Age</label>
          <input
            type="number"
            name="age"
            value={passenger.age}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="e.g., 28"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Gender</label>
          <select
            name="gender"
            value={passenger.gender}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={passenger.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="e.g., example@mail.com"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={passenger.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="e.g., 9876543210"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">ID Proof Type</label>
          <select
            name="idType"
            value={passenger.idType}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="Aadhar Card">Aadhar Card</option>
            <option value="PAN Card">PAN Card</option>
            <option value="Driving License">Driving License</option>
            <option value="Passport">Passport</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">ID Number</label>
          <input
            type="text"
            name="idNumber"
            value={passenger.idNumber}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Special Request (Optional)</label>
        <textarea
          name="specialRequest"
          value={passenger.specialRequest}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
          placeholder="Let us know if you need any assistance..."
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="agree"
          checked={passenger.agree}
          onChange={handleChange}
          className="h-4 w-4 text-blue-600"
        />
        <label className="text-gray-700 text-sm">
          I agree to the terms and conditions and privacy policy.
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
      >
        Continue to Payment
      </button>
    </form>
  );
}
