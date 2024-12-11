/* 
Purpose: This template is used for the 2.11 Sup - Mediation Board Response log.
Created Date: 2024-12-02
Created By: Naflan (naflanm084@gmail.com)
Last Modified Date: 2024-12-03
Modified By:  Naflan (naflanm084@gmail.com)
Version: node v18.18.0
ui number : v1.0.1
Dependencies: tailwind css
Related Files:
Notes: 
*/


import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import DatePicker from "react-datepicker";

const MediationBoardResponseLog = () => {
  // Sample data for the table
  const randomdata = [
    { status: "Settled", caseId: "Case1235", lastResponse: "10/12/2024", drc: "99999", assignedRO: "K.L.Gamage" },
    { status: "Pending", caseId: "Case1236", lastResponse: "15/11/2024", drc: "99998", assignedRO: "J.D.Perera" },
    { status: "In Progress", caseId: "Case1237", lastResponse: "20/11/2024", drc: "99997", assignedRO: "A.M.Silva" },
    { status: "Closed", caseId: "Case1238", lastResponse: "25/10/2024", drc: "99996", assignedRO: "P.L.Jayasinghe" },
    { status: "Resolved", caseId: "Case1239", lastResponse: "05/11/2024", drc: "99995", assignedRO: "M.N.Kumara" },
    { status: "Pending", caseId: "Case1240", lastResponse: "05/11/2024", drc: "99994", assignedRO: "M.N.Dulan" },
    { status: "Pending", caseId: "Case1241", lastResponse: "05/11/2024", drc: "99993", assignedRO: "M.N.json" },
  ];

  const [filteredData, setFilteredData] = useState(randomdata || []);
  const [selectedStatus, setSelectedStatus] = useState("Settled");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

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

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleFilter = () => {
    const from = fromDate ? new Date(fromDate.setHours(0, 0, 0, 0)) : null;
    const to = toDate ? new Date(toDate.setHours(0, 0, 0, 0)) : null;

    const filtered = randomdata.filter(row => {
        const lastResponseDate = new Date(
            row.lastResponse.split("/").reverse().join("-")
        );
        const matchesStatus = selectedStatus ? row.status === selectedStatus : true;
        const matchesDate =
            (!from || lastResponseDate >= from) &&
            (!to || lastResponseDate <= to);

        return matchesStatus && matchesDate;
    });

    setFilteredData(filtered);
    setCurrentPage(1);
};

  return (
    <div className="p-6 bg-white rounded-lg shadow-md bg-opacity-80">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">Mediation Board Response Log</h2>

      {/* Filter Section */}
      <div className="flex gap-4 items-center mb-6">
        <h1>Status:</h1>
        <select className="py-1 border-2 border-[#0056A2] border-opacity-30 rounded-lg bg-white text-left"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          {/* <option value="">Select</option> */}
          <option value="Settled">Settled</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>
        <div className="flex flex-col mb-4">
            <div className="flex gap-4 items-center p-1 rounded border border-gray-300 bg-blue-50 bg-opacity-50 w-fit">
            <label className="text-gray-600 font-medium">Date </label>
            <DatePicker
                selected={fromDate}
                onChange={handleFromDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="From:"
                className="border rounded w-40 h-10 p-2 text-sm text-gray-700 bg-white bg-opacity-75"
            />
            <DatePicker
                selected={toDate}
                onChange={handleToDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="To:"
                className="border rounded w-40 h-10 p-2 text-sm text-gray-700 bg-white bg-opacity-75"
            />
            </div>
            {error && <span className="text-red-500 mt-2">{error}</span>}
        </div>
        <button className="px-5 py-1 text-white bg-[#00256A] rounded-lg hover:bg-blue-900 transition-all" onClick={handleFilter}>
          Filter
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg shadow-md border border-[#0087FF] border-opacity-15 bg-[#77BFFF] bg-opacity-25">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-[#718EBF] uppercase bg-gray-50 bg-opacity-75">
            <tr>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Case ID</th>
              <th scope="col" className="px-6 py-3">Last Response On</th>
              <th scope="col" className="px-6 py-3">DRC</th>
              <th scope="col" className="px-6 py-3">Assigned RO</th>
            </tr>
          </thead>
          
          <tbody>
            {currentRows.map((row, index) => (
              <tr key={index} className="text-center">
                <td className="px-6 py-4">{row.status}</td>
                <td className="px-6 py-4">{row.caseId}</td>
                <td className="px-6 py-4">{row.lastResponse}</td>
                <td className="px-6 py-4">{row.drc}</td>
                <td className="px-6 py-4">{row.assignedRO}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 p-4">
        {/* Previous Page Link */}
        <button
          onClick={() => handlePageChange("prev")}
          className="flex items-center gap-2 px-2 py-2 text-[#00256A] border-2 border-[#00256A] rounded-full hover:bg-blue-100 transition-all"
          disabled={currentPage === 1}
        >
            <FaArrowLeft />
        </button>
        <span className="text-gray-500">
            {currentPage} of {totalPages}
        </span>

        {/* Next Page Link */}
        
        <button
          onClick={() => handlePageChange("next")}
          className="flex items-center gap-2 px-2 py-2 text-[#00256A] border-2 border-[#00256A] rounded-full hover:bg-blue-100 transition-all"
          disabled={currentPage === totalPages}
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Export Button */}
      <div className="flex justify-end mt-6">
        <button className="px-5 py-1 text-white bg-[#00256A] rounded-lg hover:bg-blue-900 transition-all">
          Export
        </button>
      </div>
    </div>
  );
};

export default MediationBoardResponseLog;
