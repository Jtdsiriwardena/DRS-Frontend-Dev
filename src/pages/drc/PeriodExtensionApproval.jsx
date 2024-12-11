/* 
Purpose: This template is used for the 2.13 - Period Extension Approval.
Created Date: 2024-12-02
Created By: Naflan (naflanm084@gmail.com)
Last Modified Date : 2024 - 12 - 06
Modified Date: 2024-12-03
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
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import GlobalStyle from "../../assets/prototype/GlobalStyle.jsx"; // Import styles

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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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

  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("/").map(Number);
    return new Date(year, month - 1, day);
  };

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
          createdOnDate >= from &&
          createdOnDate <= to &&
          dueDate >= from &&
          dueDate <= to
        );
      });

      setFilteredData(filtered);
      setCurrentPage(1); // Reset page to 1 after filtering
    }
  };

  const handleSelectRow = (caseId) => {
    setSelectedRows((prev) =>
      prev.includes(caseId)
        ? prev.filter((id) => id !== caseId)
        : [...prev, caseId]
    );
  };

  const handlePrevNext = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6">
      {/* Title */}
      <h2
        className={`${GlobalStyle.headingLarge} ${GlobalStyle.bold}`}
        style={{ fontFamily: GlobalStyle.fontPoppins }}
      >
        Period Extension Approval
      </h2>

      {/* Filter Section */}
      <div className="flex items-center justify-end gap-4 mt-20 mr-2 mb-14">
        <div className="flex flex-col mb-4">
          <div className={`${GlobalStyle.datePickerContainer}`}>
            <label className={GlobalStyle.remarkTopic}>Date</label>
            <DatePicker
              selected={fromDate}
              onChange={handleFromDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="dd/MM/yyyy"
              className={GlobalStyle.inputText}
            />
            <DatePicker
              selected={toDate}
              onChange={handleToDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="dd/MM/yyyy"
              className={GlobalStyle.inputText}
            />
          </div>
        </div>
        <button onClick={handleFilter} className={GlobalStyle.buttonPrimary}>
          Filter
        </button>
      </div>

      {/* Table */}
      <div className={GlobalStyle.tableContainer}>
        <table className={GlobalStyle.table}>
          <thead className={`${GlobalStyle.thead}`}>
            <tr>
              <th scope="col" className={GlobalStyle.tableHeader}>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setSelectedRows(
                      e.target.checked
                        ? currentData.map((row) => row.caseId)
                        : []
                    )
                  }
                />
              </th>
              <th scope="col" className={GlobalStyle.tableHeader}>
                Case ID
              </th>
              <th scope="col" className={GlobalStyle.tableHeader}>
                Arrears Amount
              </th>
              <th scope="col" className={GlobalStyle.tableHeader}>
                Account No
              </th>
              <th scope="col" className={GlobalStyle.tableHeader}>
                DRC
              </th>
              <th scope="col" className={GlobalStyle.tableHeader}>
                Requested By
              </th>
              <th scope="col" className={GlobalStyle.tableHeader}>
                Created On
              </th>
              <th scope="col" className={GlobalStyle.tableHeader}>
                Extension Period (Months)
              </th>
              <th scope="col" className={GlobalStyle.tableHeader}>
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {currentData.map((row, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0
                    ? GlobalStyle.tableRowEven
                    : GlobalStyle.tableRowOdd
                }`}
              >
                <td className={GlobalStyle.tableData}>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.caseId)}
                    onChange={() => handleSelectRow(row.caseId)}
                  />
                </td>
                <td className={GlobalStyle.tableData}>{row.caseId}</td>
                <td className={GlobalStyle.tableData}>{row.arrearsAmount}</td>
                <td className={GlobalStyle.tableData}>{row.accountNo}</td>
                <td className={GlobalStyle.tableData}>{row.drc}</td>
                <td className={GlobalStyle.tableData}>{row.requestedBy}</td>
                <td className={GlobalStyle.tableData}>{row.createdOn}</td>
                <td className={GlobalStyle.tableData}>{row.extensionPeriod}</td>
                <td className={GlobalStyle.tableData}>{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => handlePrevNext("prev")}
          disabled={currentPage === 1}
          className={`${GlobalStyle.navButton} ${
            currentPage === 1 ? "cursor-not-allowed" : ""
          }`}
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => handlePrevNext("next")}
          disabled={currentPage === totalPages}
          className={`${GlobalStyle.navButton} ${
            currentPage === totalPages ? "cursor-not-allowed" : ""
          }`}
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-16">
        <button
          className="px-6 py-2 text-white bg-red-700 rounded-md hover:bg-red-600 w-32"
          onClick={() => alert("Rejected")}
        >
          Reject
        </button>
        <button
          className="px-6 py-2 text-white bg-green-600 rounded-md hover:bg-green-500 w-32"
          onClick={() => alert("Approved")}
        >
          Approve
        </button>
      </div>
    </div>
  );
};

export default PeriodExtensionApproval;

