/* Purpose: 3.4 F2-Function
Created Date: 2024-12-03
Created By: Vihanga Eshan Jayarathna (vihangaeshan2002@gmail.com)
Last Modified Date: 2024-12-03
Modified By: Vihanga Eshan Jayarathna (vihangaeshan2002@gmail.com)
Version: React v18.3.1
UI Number: 3.4
Dependencies: Tailwind CSS
Related Files:
Notes: This template uses Tailwind CSS. */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStyle from "../../assets/prototype/GlobalStyle";

const Lodlog = () => {
  const navigate = useNavigate();
  const [selection, setSelection] = useState("");

  const cases = [
    { id: "4500", amount: 4500, status: "Create" },
    { id: "2300", amount: 2300, status: "Create" },
    { id: "2300", amount: 2300, status: "Create" },
  ];

  const handleOpenClick = () => {
    if (selection === "lod") {
      navigate("/drc/LOD_Creation");
    } else if (selection === "reminder") {
      navigate("/drc/FR_Creation");
    } else {
      alert("Please select a valid option.");
    }
  };

  return (
    <div>
      {/* Page Title */}
      <h1 className={`${GlobalStyle.headingLarge} mb-5`}>F2 Function</h1>

      {/* Summary Section */}
      <div className={`${GlobalStyle.caseCountBar}`}>
        <div className={GlobalStyle.countBarSubTopicContainer}>
          <div className={GlobalStyle.countBarMainBox}>
            <span>Total:</span>
            <p className={GlobalStyle.countBarMainTopic}>1259</p>
          </div>
          {/* Semicolon Separator */}
          <div className="text-3xl font-bold text-gray-600 flex items-center justify-center">
            :
          </div>
          <div className={GlobalStyle.countBarMainBox}>
            <span>LOD</span>
            <p className={GlobalStyle.countBarSubTopic}>2000</p>
          </div>
          <div className={GlobalStyle.countBarMainBox}>
            <span>Final Reminder</span>
            <p className={GlobalStyle.countBarSubTopic}>2000</p>
          </div>
        </div>
      </div>

      {/* Export Button */}
      <div className="mt-6 text-right mb-5">
        <button className={GlobalStyle.buttonPrimary}>
          Export All
        </button>
      </div>

      {/* Case List Table */}
      <div className={GlobalStyle.tableContainer}>
        <table className={GlobalStyle.table}>
          <thead className={GlobalStyle.thead}>
              <tr>
                <th scope="col" className={GlobalStyle.tableHeader}>
                  <input
                    type="checkbox"
                    className=""
                    onChange={(e) => {
                      console.log(e.target.checked);
                    }}
                  />
                </th>
                <th scope="col" className={GlobalStyle.tableHeader}>Case ID</th>
                <th scope="col" className={GlobalStyle.tableHeader}>Amount</th>
                <th scope="col" className={GlobalStyle.tableHeader}>Status</th>
                <th scope="col" className={GlobalStyle.tableHeader}></th>
              </tr>
            </thead>
            <tbody>
              {cases.map((caseItem, index) => (
                <tr key={index} className={index % 2 === 0 ? GlobalStyle.tableRowEven : GlobalStyle.tableRowOdd}>
                  <td className={GlobalStyle.tableData}>
                    <input
                      type="checkbox"
                      className=""
                      onChange={(e) =>
                        console.log(
                          `Checkbox for Case ID: ${caseItem.id} is ${
                            e.target.checked ? "checked" : "unchecked"
                          }`
                        )
                      }
                    />
                  </td>
                  <td className={GlobalStyle.tableData}>{caseItem.id}</td>
                  <td className={GlobalStyle.tableData}>{caseItem.amount}</td>
                  <td className={GlobalStyle.tableData}></td>
                  <td className={GlobalStyle.tableData}>
                    <button className={GlobalStyle.buttonPrimary}>
                      {caseItem.status}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Dropdown Section */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center">
            <label htmlFor="f2-selection" className={`${GlobalStyle.headingMedium} mr-4`}>
              F2 Selection:
            </label>
            <select
              id="f2-selection"
              className={`${GlobalStyle.selectBox} mr-4`}
              value={selection}
              onChange={(e) => setSelection(e.target.value)}
            >
              <option value="">Select Option</option>
              <option value="lod">LOD</option>
              <option value="reminder">Final Reminder</option>
            </select>
            <button
              className={GlobalStyle.buttonPrimary}
              onClick={handleOpenClick}
            >
              Open
            </button>
          </div>
        </div>
      </div>
  );
};

export default Lodlog;
