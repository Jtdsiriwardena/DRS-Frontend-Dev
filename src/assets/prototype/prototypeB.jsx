import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TableComponent = () => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleFromDateChange = (date) => {
    if (toDate && date > toDate) {
      setError("The 'From' date cannot be later than the 'To' date.");
    } else {
      setError("");
      setFromDate(date);
    }
  };

  const handleToDateChange = (date) => {
    if (fromDate && date < fromDate) {
      setError("The 'To' date cannot be earlier than the 'From' date.");
    } else {
      setError("");
      setToDate(date);
    }
  };

  const data = [
    {
      id: "#R100",
      status: "up",
      accountNo: "#12548796",
      serviceType: "PEO",
      amount: "2,500",
      agent: "CMS",
      rtom: "AD",
      createdDate: "28 Jan, 12:30 AM",
      lastPaidDate: "28 Nov, 12:30 AM",
    },
    {
      id: "#R101",
      status: "down",
      accountNo: "#12548796",
      serviceType: "LTE",
      amount: "11,500",
      agent: "Prompt",
      rtom: "DM",
      createdDate: "25 Jan, 10:40 PM",
      lastPaidDate: "25 Nov, 10:40 PM",
    },
  ];

  const filteredData = data.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 font-poppins">
      <h1 className="flex">Date picker</h1>
      <br/>
      {/* Date Picker Section */}
      <div className="flex flex-col mb-4">
        <div className="flex gap-4 items-center p-2 rounded border border-gray-300 bg-blue-50 bg-opacity-50 w-fit">
          <label className="text-gray-600 font-medium">Date </label>
          <DatePicker
            selected={fromDate}
            onChange={handleFromDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/MM/yyyy"
            className="border rounded w-40 h-10 p-2 text-sm text-gray-700 bg-white bg-opacity-75"
          />
          <DatePicker
            selected={toDate}
            onChange={handleToDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/MM/yyyy"
            className="border rounded w-40 h-10 p-2 text-sm text-gray-700 bg-white bg-opacity-75"
          />
        </div>
        {error && <span className="text-red-500 mt-2">{error}</span>}
      </div>
      <br/>
      <h1 className="flex">Table</h1>
      <br />

      {/* Search Bar Section */}
      <div className="mb-4 flex justify-end">
        <div className="relative">
          <input
            type="text"
            placeholder=""
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 pl-10 w-64 rounded-full border border-blue-400 bg-blue-200 text-sm text-blue-900 placeholder:text-blue-600 outline-none focus:ring focus:ring-blue-400 focus:border-blue-500 opacity-80"
          />
          <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-600" />
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-hidden rounded-lg shadow-md border border-[#0087FF] border-opacity-15 bg-[#77BFFF] bg-opacity-25">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-[#718EBF] uppercase bg-gray-50 bg-opacity-75">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Account No
              </th>
              <th scope="col" className="px-6 py-3">
                Service Type
              </th>
              <th scope="col" className="px-6 py-3">
                Amount (LKR)
              </th>
              <th scope="col" className="px-6 py-3">
                Agent
              </th>
              <th scope="col" className="px-6 py-3">
                RTOM
              </th>
              <th scope="col" className="px-6 py-3">
                Created Date
              </th>
              <th scope="col" className="px-6 py-3">
                Last Paid Date
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0
                    ? "bg-white bg-opacity-75"
                    : "bg-gray-50 bg-opacity-50"
                } border-b`}
              >
                <td className="px-6 py-4">{row.id}</td>
                <td className="px-6 py-4">
                  {row.status === "up" ? (
                    <span className="text-green-500">&#8593;</span>
                  ) : (
                    <span className="text-blue-500">&#8595;</span>
                  )}
                </td>
                <td className="px-6 py-4">{row.accountNo}</td>
                <td className="px-6 py-4">{row.serviceType}</td>
                <td className="px-6 py-4 text-red-500">{row.amount}</td>
                <td className="px-6 py-4">{row.agent}</td>
                <td className="px-6 py-4">{row.rtom}</td>
                <td className="px-6 py-4">{row.createdDate}</td>
                <td className="px-6 py-4">{row.lastPaidDate}</td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan="9" className="text-center py-4">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center gap-6 p-4">
        {/* Previous Page Link */}
        <button
          className="flex items-center gap-2 px-2 py-2 text-[#00256A] border-2 border-[#00256A] rounded-full hover:bg-blue-100 transition-all"
          onClick={() => navigate("/prototypeA")}
        >
          <FaArrowLeft />
        </button>
        {/* Next Page Link */}
        <button
          className="flex items-center gap-2 px-2 py-2 text-[#00256A] border-2 border-[#00256A] rounded-full hover:bg-blue-100 transition-all"
          onClick={() => navigate("/prototypeB")}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TableComponent;
