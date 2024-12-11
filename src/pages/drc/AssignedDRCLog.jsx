// Purpose: This template is used for the Assigned DRC Log page (1.16).
// Created Date: 2024-12-02
// Created By: H.P.R Chandrasekara (hprchandrasekara@gmail.com)
// Last Modified Date: 2024-12-06
// Modified Date: 2024-12-03
// Modified By: H.P.R Chandrasekara (hprchandrasekara@gmail.com)
// Version: node 11
// ui number : 1.15
// Dependencies: tailwind css
// Related Files:  app.js (routes)
// Notes:.

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GlobalStyle from "../../assets/prototype/GlobalStyle.jsx";
import { Link } from "react-router-dom";

export default function AssignedDRCLog() {
  // Initial Data
  const initialData1 = [
    {
      drc: "TCM",
      range1: "67",
      range2: "34",
      range3: "65",
      range4: "578",
      range5: "100",
    },
    {
      drc: "CMS",
      range1: "67",
      range2: "56",
      range3: "245",
      range4: "789",
      range5: "12",
    },
    {
      drc: "ACCIV",
      range1: "67",
      range2: "56",
      range3: "245",
      range4: "789",
      range5: "12",
    },
    {
      drc: "VISIONCOM",
      range1: "67",
      range2: "56",
      range3: "245",
      range4: "789",
      range5: "12",
    },
    {
      drc: "PROMPT",
      range1: "67",
      range2: "56",
      range3: "245",
      range4: "789",
      range5: "12",
    },
    {
      drc: "RE",
      range1: "67",
      range2: "56",
      range3: "245",
      range4: "789",
      range5: "12",
    },
  ];

  const initialData2 = [
    {
      drc: "TCM",
      service: "Peo-TV",
      amount: "150",
      date: "2024-11-05",
      assignedBy: "ABCD",
      approvedBy: "ABCD",
    },
    {
      drc: "CMS",
      service: "Internet",
      amount: "200",
      date: "2024-11-10",
      assignedBy: "EFGH",
      approvedBy: "EFGH",
    },
    {
      drc: "ACCIV",
      service: "Mobile",
      amount: "100",
      date: "2024-11-20",
      assignedBy: "IJKL",
      approvedBy: "IJKL",
    },
  ];

  // State Variables
  const [drcFilter, setDrcFilter] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData1, setFilteredData1] = useState(initialData1);
  const [filteredData2, setFilteredData2] = useState(initialData2);

  // Handle Filtering Logic
  const applyFilters = () => {
    // Filter data1 based on DRC filter
    const filtered1 = initialData1.filter((item) =>
      drcFilter
        ? item.drc.toLowerCase().includes(drcFilter.toLowerCase())
        : true
    );

    // Filter data2 based on DRC and date range filters
    const filtered2 = initialData2.filter((item) => {
      const itemDate = new Date(item.date);
      const isDrcMatch = drcFilter
        ? item.drc.toLowerCase().includes(drcFilter.toLowerCase())
        : true;
      const isDateInRange =
        (!startDate || itemDate >= startDate) &&
        (!endDate || itemDate <= endDate);

      return isDrcMatch && isDateInRange;
    });

    setFilteredData1(filtered1);
    setFilteredData2(filtered2);
  };

  return (
    <div className={GlobalStyle.fontPoppins}>
      <h1 className={`${GlobalStyle.headingLarge}`}>
        Assigned DRC Log
      </h1>

      {/* Filter Section */}
      <div className="flex justify-end gap-10 my-8">
  <div className="flex gap-4 items-center">
    <h1 className={`${GlobalStyle.headingMedium} `}>DRC</h1>
    <select
      className={GlobalStyle.selectBox}
      value={drcFilter}
      onChange={(e) => setDrcFilter(e.target.value)}
      style={{ height: "45px" }} // Added inline style for height
    >
      <option value="" disabled selected>
        DRC
      </option>
      <option value="CMS">CMS</option>
      <option value="TCM">TCM</option>
      <option value="RE">RE</option>
      <option value="CO LAN">CO LAN</option>
      <option value="ACCIVA">ACCIVA</option>
      <option value="VISONCOM">VISONCOM</option>
      <option value="PROMPT">PROMPT</option>
    </select>
  </div>



  <div className="flex flex-col items-center mb-4">
        <div className={GlobalStyle.datePickerContainer}>
          <label className={GlobalStyle.dataPickerDate}>Date </label>
  
  <DatePicker
    selected={startDate}
    onChange={(date) => setStartDate(date)}
    dateFormat="dd/MM/yyyy"
    placeholderText="dd/mm/yyyy"  // Updated placeholder
    className={GlobalStyle.inputText}
  />
  
  <DatePicker
    selected={endDate}
    onChange={(date) => setEndDate(date)}
    dateFormat="dd/MM/yyyy"
    placeholderText="dd/mm/yyyy"  // Updated placeholder
    className={GlobalStyle.inputText}
  />
</div>

          </div>
        
        <button
  onClick={applyFilters}
  className={GlobalStyle.buttonPrimary}
  style={{ width: "150px", height: "45px", padding: "8px 16px" }}
>
  Filter
</button>


      </div>

      {/* Table for Data1 */}
      <div className={`${GlobalStyle.tableContainer} mb-14 mx-24`}>
        <table className={GlobalStyle.table}>
          <thead className={`${GlobalStyle.thead}`}>
            <tr className="border border-[#0087FF] border-opacity-15">
              <th
                rowSpan="2"
                scope="col"
                className={`${GlobalStyle.tableHeader}`}
              >
                DRC
              </th>
              <th colSpan="5" scope="col" className={`${GlobalStyle.tableHeader}`}>
                Case Amount (LKR)
              </th>
            </tr>
            <tr className="border border-[#0087FF] border-opacity-15">
              <th className={GlobalStyle.tableHeader}>5,000 - 10,000</th>
              <th className={GlobalStyle.tableHeader}>10,000 - 25,000</th>
              <th className={GlobalStyle.tableHeader}>25,000 - 50,000</th>
              <th className={GlobalStyle.tableHeader}>50,000 - 100,000</th>
              <th className={GlobalStyle.tableHeader}>100,000+</th>
            </tr>
          </thead>
          <tbody>
  {filteredData1.map((item, index) => (
    <tr
      key={index}
      className={index % 2 === 0 ? GlobalStyle.tableRowEven : GlobalStyle.tableRowOdd}
    >
      <td className={GlobalStyle.tableData}>
        <Link to={`/drc/case-list`} className={GlobalStyle.link}>
          {item.drc}
        </Link>
      </td>
      <td className={GlobalStyle.tableData}>{item.range1}</td>
      <td className={GlobalStyle.tableData}>{item.range2}</td>
      <td className={GlobalStyle.tableData}>{item.range3}</td>
      <td className={GlobalStyle.tableData}>{item.range4}</td>
      <td className={GlobalStyle.tableData}>{item.range5}</td>
    </tr>
  ))}
</tbody>
        </table>
      </div>

      {/* Table for Data2 */}
      <div className={`${GlobalStyle.tableContainer} mb-14 mx-24`}>
        <table className={GlobalStyle.table}>
          <thead className={`${GlobalStyle.thead}`}>
            <tr className="border border-[#0087FF] border-opacity-15">
              <th
                rowSpan="2"
                scope="col"
                className={`${GlobalStyle.tableHeader}`}
              >
                DRC
              </th>
              <th className={GlobalStyle.tableHeader}>Service</th>
              <th className={GlobalStyle.tableHeader}>Amount </th>
              <th className={GlobalStyle.tableHeader}>Date</th>
              <th className={GlobalStyle.tableHeader}>Assigned By</th>
              <th className={GlobalStyle.tableHeader}>Approved By</th>
            </tr>
          </thead>
          <tbody>
            {filteredData2.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? GlobalStyle.tableRowEven : GlobalStyle.tableRowOdd}
              >
                <td className={GlobalStyle.tableData}>{item.drc}</td>
                <td className={GlobalStyle.tableData}>{item.service}</td>
                <td className={GlobalStyle.tableData}>{item.amount}</td>
                <td className={GlobalStyle.tableData}>{item.date}</td>
                <td className={GlobalStyle.tableData}>{item.assignedBy}</td>
                <td className={GlobalStyle.tableData}>{item.approvedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
