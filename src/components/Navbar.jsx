import { FaSearch, FaBell, FaCog } from "react-icons/fa";
import profileImage from "../assets/images/profile.jpg";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white px-6 py-4 flex justify-between items-center text-white shadow-md fixed top-0 left-0 w-full z-50 font-poppins">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="DRS SLTMOBITEL Logo" className="h-10 w-auto" />
      </div>

      {/* Search Bar, Notification, and Profile */}
      <div className="flex items-center gap-6">

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search for something"
            className="px-4 py-2 pl-10 w-64 rounded-full bg-blue-200 text-sm text-blue-900 placeholder:text-blue-600 outline-none focus:ring focus:ring-blue-400"
          />
          <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-600" />
        </div>

        {/* Notification Icon */}
        <div className="relative">
          <FaBell className="w-6 h-6 text-green-500 bg-white rounded-full p-1 shadow-md cursor-pointer" />
          <div className="absolute top-0 right-0 bg-red-500 w-3 h-3 rounded-full"></div>
        </div>

        {/* Settings Icon */}
        <FaCog className="w-6 h-6 text-blue-500 bg-white rounded-full p-1 shadow-md cursor-pointer" />

        {/* Profile Picture */}
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
          <img src={profileImage} alt="User Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
