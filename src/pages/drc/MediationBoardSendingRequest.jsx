/* Purpose : This template is used for the 2.9.1 - Mediation Board Sending Requests
Created Date : 2024 - 12 - 02
Created By : U.H.Nandali Linara (nadalilinara5@gmail.com)
Last Modified Date : 2024 - 12 - 06
Modified Date : 2024 - 12 - 03
Created By : U.H.Nandali Linara (nadalilinara5@gmail.com)
Version : v20.16.0
ui number : 
Dependencies : tailwind css
Related Files : (routes)
 */

import { useState } from "react";
import DatePicker from "react-datepicker";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import GlobalStyle from "../../assets/prototype/GlobalStyle.jsx"; // Import GlobalStyle

export default function MediationBoardSendingRequests() {
  const navigate = useNavigate();
  const initialData2 = [
    {
      CaseID: "C001",
      CreatedDate: "2024-11-05",
      ActionType: "Action",
      DRC: "CMS",
      Requesteddate: "2024-11-05",
    },
    {
      CaseID: "C002",
      CreatedDate: "2024-11-06",
      ActionType: "Review",
      DRC: "TCM",
      Requesteddate: "2024-11-06",
    },
    {
      CaseID: "C002",
      CreatedDate: "2024-11-06",
      ActionType: "Review",
      DRC: "CMS",
      Requesteddate: "2024-11-06",
    },
    {
      CaseID: "C002",
      CreatedDate: "2024-11-06",
      ActionType: "Review",
      DRC: "RE",
      Requesteddate: "2024-11-06",
    },
  ];

  const [drcFilter, setDrcFilter] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData, setFilteredData] = useState(initialData2);

  const applyFilters = () => {
    const filtered = initialData2.filter((item) => {
      const isDrcMatch = drcFilter
        ? item.DRC.toLowerCase().includes(drcFilter.toLowerCase())
        : true;

      const itemDate = new Date(item.CreatedDate); // Use CreatedDate for filtering
      const isDateInRange =
        (!startDate || itemDate >= startDate) &&
        (!endDate || itemDate <= endDate);

      return isDrcMatch && isDateInRange;
    });

    setFilteredData(filtered);
  };

  return (
    <div>
      {/* Header with GlobalStyle */}
      <h1 className={GlobalStyle.headingLarge + " " + GlobalStyle.bold + " mb-5 mt-[30px]"}>
        Mediation Board Sending Requests
      </h1>

      {/* Filter Section */}
      <div className="flex justify-end gap-10 my-8">
        <div className="flex gap-4">
          <h1 className="flex items-center text-[20px] font-[600]">Status</h1>
          <select
            className={GlobalStyle.selectBox + " w-[206px] h-[60px]"}
            value={drcFilter}
            onChange={(e) => setDrcFilter(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Select
            </option>
            <option value="TCM">Requested</option>
            <option value="CMS">Collected</option>
          </select>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col mb-4">
            <div className="flex items-center gap-4 p-2 bg-opacity-50 border border-gray-300 rounded bg-blue-50 w-fit">
              <label className="font-medium text-gray-600">Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/mm/yyyy"
                placeholderText="dd/mm/yyyy"
                className={GlobalStyle.inputText + " w-40 h-10 p-2 text-sm text-gray-700"}
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/MM/yyyy"
                className={GlobalStyle.inputText + " w-40 h-10 p-2 text-sm text-gray-700"}
              />
            </div>
          </div>
        </div>
        <button
          onClick={applyFilters}
          className={GlobalStyle.buttonPrimary + " w-[150px] h-[60px]"}
        >
          Filter
        </button>
      </div>

      <div className={GlobalStyle.tableContainer}>
        <table className={GlobalStyle.table}>
          <thead className={GlobalStyle.thead}>
            <tr>
              <th className={GlobalStyle.tableHeader}>Case ID</th>
              <th className={GlobalStyle.tableHeader}>Created Date</th>
              <th className={GlobalStyle.tableHeader}>Action Type</th>
              <th className={GlobalStyle.tableHeader}>DRC</th>
              <th className={GlobalStyle.tableHeader}>Requested Date</th>
              <th className={GlobalStyle.tableHeader}></th>
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
                <td className={GlobalStyle.tableData}>{row.CaseID}</td>
                <td className={GlobalStyle.tableData}>{row.CreatedDate}</td>
                <td className={GlobalStyle.tableData}>{row.ActionType}</td>
                <td className={GlobalStyle.tableData}>{row.DRC}</td>
                <td className={GlobalStyle.tableData}>{row.Requesteddate}</td>
                <td>
                  <button
                    onClick={() => navigate("/drs/MediationBoardAccept")}
                    className={GlobalStyle.buttonPrimary + " w-[95px] h-[35px]"}
                  >
                    Open
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={GlobalStyle.navButtonContainer}>
        <button
          className={GlobalStyle.navButton}
          onClick={() => navigate("")}
        >
          <FaArrowLeft />
        </button>

        <button
          className={GlobalStyle.navButton}
          onClick={() => navigate("")}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
