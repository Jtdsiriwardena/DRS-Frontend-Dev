/*Purpose: 6.1 Dispute Log
Created Date: 2024-12-03
Created By: Dilmith Siriwardena (jtdsiriwardena@gmail.com)
Last Modified Date: 2024-12-03
Modified By: Dilmith Siriwardena (jtdsiriwardena@gmail.com)
Version: React v18
ui number : 6.1
Dependencies: Tailwind CSS
Related Files: 
Notes: This template uses Tailwind CSS */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStyle from "../../assets/prototype/GlobalStyle";

const FltLodLog = () => {
  const navigate = useNavigate();

  const handleOpenClick = () => {
    navigate("/drc/Dispute_Submission");
  };

  const [caseID, setCaseID] = useState("");
  const [status, setStatus] = useState("");

  const logs = [
    { caseID: "001", amount: "20000", status: "Open" },
    { caseID: "002", amount: "15000", status: "Closed" },
    { caseID: "003", amount: "30000", status: "Pending" },
  ];

  const handleFilter = () => {};

  return (
    <div className={GlobalStyle.fontPoppins}>
      <h2 className={GlobalStyle.headingLarge}>Dispute Log</h2>

      {/* Filters */}
      <div className="flex justify-end mb-8">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Case ID"
            value={caseID}
            onChange={(e) => setCaseID(e.target.value)}
            className={GlobalStyle.inputText}
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className={GlobalStyle.selectBox}
          >
            <option value="">Status</option>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
            <option value="Pending">Pending</option>
          </select>
          <button onClick={handleFilter} className={GlobalStyle.buttonPrimary}>
            Filter
          </button>
        </div>
      </div>

      <div className={GlobalStyle.tableContainer}>
        <table className={GlobalStyle.table}>
          <thead className={GlobalStyle.thead}>
            <tr>
              <th scope="col" className={GlobalStyle.tableHeader}>
                Case ID
              </th>
              <th scope="col" className={GlobalStyle.tableHeader}>
                Amount
              </th>
              <th scope="col" className={GlobalStyle.tableHeader}>
                Status
              </th>
              <th scope="col" className={GlobalStyle.tableHeader}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0
                    ? "bg-white bg-opacity-75"
                    : "bg-gray-50 bg-opacity-50"
                } border-b`}
              >
                <td className={GlobalStyle.tableData}>{log.caseID}</td>
                <td className={GlobalStyle.tableData}>{log.amount}</td>
                <td className={GlobalStyle.tableData}>{log.status}</td>
                <td className={GlobalStyle.tableData}>
                  <button
                    className={GlobalStyle.buttonPrimary}
                    onClick={handleOpenClick}
                  >
                    Open
                  </button>
                </td>
              </tr>
            ))}
            {logs.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No logs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FltLodLog;
