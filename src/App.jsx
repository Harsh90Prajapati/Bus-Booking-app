import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import SeatSelection from "./pages/SeatSelection";
import Navbar from "./components/Navbar";
import BookingConfirmation from "./pages/BookingConfirmation";
import Footer from "./components/Footer";
import PassengerForm from "./components/PassengerForm";
import PaymentComponent from "./components/Payment";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search?" element={<SearchResults />} />
        <Route path="/seats?" element={<SeatSelection />} />
        <Route path="/passenger" element={<PassengerForm />} />
        <Route path="/confirm" element={<BookingConfirmation />} />
        <Route
          path="/payment"
          element={
            <PaymentComponent
              busName="IntrCity SmartBus"
              seats={["A1", "A2"]}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}
