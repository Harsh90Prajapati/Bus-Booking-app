import { Link } from "react-router";
import { FaBus , FaTicketAlt } from "react-icons/fa";

import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-normal md:text-xl  font-bold">
          <FaBus /> BusBooking
        </Link>
        <div className="flex gap-4">
          <Link to="/" className="hover:underline flex justify-center gap-1 text-sm md:text-base items-center "><RiCustomerService2Fill /><span className="hidden sm:block">Help</span></Link>
          <Link to="#" className="hover:underline flex justify-center gap-1 text-sm md:text-base items-center "><FaTicketAlt /><span className="hidden sm:block">My Bookings</span></Link>
          <Link to="#" className="hover:underline flex justify-center gap-1 text-sm md:text-base items-center "><MdOutlineAccountCircle /><span className="hidden sm:block">Login</span></Link>
        </div>
      </div>
    </nav>
  );
}