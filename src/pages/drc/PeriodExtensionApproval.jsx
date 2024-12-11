/* 
Purpose: This template is used for the 2.13 - Period Extension Approval.
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PeriodExtensionApproval = () => {
  const randomdata = [
    {
      caseId: "ID001",
      arrearsAmount: "10,000",
      accountNo: "0712345678",
      drc: "Name",
      requestedBy: "Name",
      createdOn: "10/11/2024",
      extensionPeriod: 2,
      date: "13/01/2025",
    },
    {
      caseId: "ID002",
      arrearsAmount: "15,000",
      accountNo: "0712345679",
      drc: "Name",
      requestedBy: "Name",
      createdOn: "01/12/2024",
      extensionPeriod: 3,
      date: "15/02/2025",
    },
  ];

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [error, setError] = useState("");
  const [data, setData] = useState(randomdata || []);
  const [filteredData, setFilteredData] = useState(randomdata || []);
  const [selectedRows, setSelectedRows] = useState([]);

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
  /* Converts the dd/MM/yyyy string format to a JavaScript Date object. */
  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("/").map(Number);
    return new Date(year, month - 1, day); // Month is 0-indexed
  };
  /* Handles the filtering of the data based on the selected dates. */
  const handleFilter = () => {
    if (!fromDate || !toDate) {
      setError("Please select both 'From' and 'To' dates.");
      return;
    }

    if (fromDate && toDate) {
      const from = new Date(fromDate);
      const to = new Date(toDate);

      const filtered = data.filter((row) => {
        const createdOnDate = parseDate(row.createdOn);
        const dueDate = parseDate(row.date);

        return (
          createdOnDate >= from && createdOnDate <= to && 
          dueDate >= from && dueDate <= to
        );
      });

      setFilteredData(filtered);
    }
  };

  const handleSelectRow = (caseId) => {
    setSelectedRows((prev) =>
      prev.includes(caseId)
        ? prev.filter((id) => id !== caseId)
        : [...prev, caseId]
    );
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md bg-opacity-80">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">Period Extension Approval</h2>

      {/* Filter Section */}
      <div className="flex gap-4 items-center justify-end mb-6 mr-2">
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
        <button
          onClick={handleFilter}
          className="px-5 py-1 text-white bg-[#00256A] rounded-lg hover:bg-blue-900 transition-all"
        >
          Filter
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg shadow-md border border-[#0087FF] border-opacity-15 bg-[#77BFFF] bg-opacity-25">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-[#718EBF] uppercase bg-gray-50 bg-opacity-75">
            <tr>
              <th scope="col" className="px-6 py-3">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setSelectedRows(
                      e.target.checked
                        ? filteredData.map((row) => row.caseId)
                        : []
                    )
                  }
                />
              </th>
              <th scope="col" className="px-6 py-3">Case ID</th>
              <th scope="col" className="px-6 py-3">Arrears Amount</th>
              <th scope="col" className="px-6 py-3">Account No</th>
              <th scope="col" className="px-6 py-3">DRC</th>
              <th scope="col" className="px-6 py-3">Requested By</th>
              <th scope="col" className="px-6 py-3">Created On</th>
              <th scope="col" className="px-6 py-3">Extension Period (Months)</th>
              <th scope="col" className="px-6 py-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((row) => (
              <tr key={row.caseId} className="text-center">
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.caseId)}
                    onChange={() => handleSelectRow(row.caseId)}
                  />
                </td>
                <td className="px-6 py-4">{row.caseId}</td>
                <td className="px-6 py-4">{row.arrearsAmount}</td>
                <td className="px-6 py-4">{row.accountNo}</td>
                <td className="px-6 py-4">{row.drc}</td>
                <td className="px-6 py-4">{row.requestedBy}</td>
                <td className="px-6 py-4">{row.createdOn}</td>
                <td className="px-6 py-4">{row.extensionPeriod}</td>
                <td className="px-6 py-4">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <button
          className="px-6 py-2 bg-red-700 text-white rounded-md hover:bg-red-600"
          disabled={selectedRows.length === 0}
        >
          Reject
        </button>
        <button
          className="px-5 py-1 text-white bg-[#00256A] rounded-lg hover:bg-blue-900 transition-all"
          disabled={selectedRows.length === 0}
        >
          Approve
        </button>
      </div>
    </div>
  );
};

export default PeriodExtensionApproval;
