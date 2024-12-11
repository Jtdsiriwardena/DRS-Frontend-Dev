/*
Purpose: 
Created Date: 2024-12-3
Created By: Chamath Jayasanka - chamathjayasanka20@gmail.com
Last Modified Date: 2024-12-03
Modified By: Chamath Jayasanka - chamathjayasanka20@gmail.com
Version: node 11
ui number : 
Dependencies: tailwind css
Related Files: 
Notes: 

*/


import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CaseList = () => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

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
      id: "RC001",
      status: "FTL",
      accountNo: "01115678",
      serviceType: "PEO TV",
      amount: "54,000",
      agent: "CMS",
      rtom: "AD",
      createdDate: "11/12/2024",
      lastPaidDate: "11/12/2024",
    },
    {
      id: "RC002",
      status: "Write Off",
      accountNo: "8765946",
      serviceType: "LTE",
      amount: "-",
      agent: "Prompt",
      rtom: "GM",
      createdDate: "23/4/2023",
      lastPaidDate: "23/4/2023",
    },
  ];

  const filteredData = data.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 py-8 mt-16 font-poppins">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Case List</h1>

      {/* Filter Section */}
      <div className="p-6 rounded-lg mb-6">
        <div className="flex gap-4 mb-4">
          <select className="w-64 px-4 py-2 border rounded-lg">
            <option value="">RTOM</option>
            <option value="RTOM1">RTOM1</option>
          </select>

          <select className="w-64 px-4 py-2 border rounded-lg">
            <option value="">DRC</option>
            <option value="DRC1">DRC1</option>
          </select>

          <select className="w-64 px-4 py-2 border rounded-lg">
            <option value="">Arrears Band</option>
            <option value="Band1">Band 1</option>
          </select>
        </div>

        <div className="flex gap-4 items-center p-2 border border-gray-300 bg-opacity-50 w-fit">
          <label className="text-gray-600 font-medium">Date </label>
          <DatePicker
            selected={fromDate}
            onChange={handleFromDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/MM/yyyy"
            className="border rounded w-40 h-10 p-2 text-sm text-gray-700"
          />
          <DatePicker
            selected={toDate}
            onChange={handleToDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/MM/yyyy"
            className="border rounded w-40 h-10 p-2 text-sm text-gray-700"
          />
        </div>
        {error && <span className="text-red-500 mt-2">{error}</span>}

        <div className="flex justify-end mt-4">
          <button className="px-5 py-1 text-white bg-[#00256A] rounded-lg hover:bg-blue-900 transition-all">Filter</button>
        </div>
      </div>

      

      {/* Table Section */}
      <div className="overflow-hidden rounded-lg shadow-md border border-[#0087FF] border-opacity-15 bg-[#77BFFF] bg-opacity-25">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-[#718EBF] uppercase bg-gray-50 bg-opacity-75">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Account No</th>
              <th className="px-6 py-3">Service Type</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Agent</th>
              <th className="px-6 py-3">RTOM</th>
              <th className="px-6 py-3">Created Date</th>
              <th className="px-6 py-3">Last Paid Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4">{row.id}</td>
                <td className="px-6 py-4">{row.status}</td>
                <td className="px-6 py-4">{row.accountNo}</td>
                <td className="px-6 py-4">{row.serviceType}</td>
                <td className="px-6 py-4">{row.amount}</td>
                <td className="px-6 py-4">{row.agent}</td>
                <td className="px-6 py-4">{row.rtom}</td>
                <td className="px-6 py-4">{row.createdDate}</td>
                <td className="px-6 py-4">{row.lastPaidDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <div className="relative flex flex-col items-center mt-4">
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

        <div className="absolute right-0 top-0">
          <button className="px-5 py-1 text-white bg-[#00256A] rounded-lg hover:bg-blue-900 transition-all">Export</button>
        </div>
      </div>
    </div>
  );
};

export default CaseList;
