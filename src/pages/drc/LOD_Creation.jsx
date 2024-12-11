/*Purpose: 3.5 LOD
Created Date: 2024-12-03
Created By: Vihanga Eshan Jayarathna(vihangaeshan2002@gmail.com)
Last Modified Date: 2024-12-03
Modified By: Vihanga Eshan Jayarathna(vihangaeshan2002@gmail.com)
Version: React v18.3.1
ui number : 3.5
Dependencies: Tailwind css
Related Files: 
Notes: This template uses tailwind css. */

import { useState } from "react";

import { useNavigate } from 'react-router-dom';

const DrcLog = () => {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/drc/Sup_LOD_Log');
  };

  const [selectedCases, setSelectedCases] = useState([]);
  const [enteredCount, setEnteredCount] = useState("");

  const cases = [
    { id: "C004", amount: 4500, failReason: "" },
    { id: "C128", amount: 2300, failReason: "" },
    { id: "C342", amount: 1254, failReason: "" },
  ];

  const handleCheckboxChange = (caseId) => {
    setSelectedCases((prev) =>
      prev.includes(caseId)
        ? prev.filter((id) => id !== caseId)
        : [...prev, caseId]
    );
  };

  const handleCountChange = (e) => {
    setEnteredCount(e.target.value);
  };



  return (
    <div className=" p-6 ">
      {/* Title */}
      <h2 className="text-[40px] font-bold mb-6">LOD</h2>

      {/* Dropdown and Badge */}
      <div className="flex items-center justify-between mb-4">
        <select
          className="w-52 p-2 border border-gray-300 rounded-md bg-gray-200"
          defaultValue="LOD"
        >
          <option value="LOD">LOD</option>
          <option value="Another Option">Another Option</option>
        </select>
        <span className="bg-[#002342] text-white px-8 py-4 rounded-lg text-lg">
          LOD: 2000
        </span>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg shadow-md border border-[#0087FF] border-opacity-15 bg-[#77BFFF] bg-opacity-25">
        <table  className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-[#718EBF] uppercase bg-gray-50 bg-opacity-75">
            <tr>
            <th scope="col" className="px-6 py-3">
              <input type="checkbox" className="w-5 h-5 accent-blue-500"
                    onChange={(e) => {
                   
                    console.log(e.target.checked);
                    }}
                />
              </th>
              <th scope="col" className="px-6 py-3">Case ID</th>
              <th scope="col" className="px-6 py-3">Amount</th>
              <th scope="col" className="px-6 py-3">Fail Reason</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((index) => (
              <tr
              key={index}
              className={`${
                index % 2 === 0
                  ? "bg-white bg-opacity-75"
                  : "bg-gray-50 bg-opacity-50"
              } border-b`}
            >
                <td scope="col" className="px-6 py-3">
                  <input
                    type="checkbox" className="w-5 h-5 accent-blue-500"
                    onChange={() => handleCheckboxChange(index)}
                    checked={selectedCases.includes(index.id)}
                  />
                </td>
                <td scope="col" className="px-6 py-3">
                  {index.id}
                </td>
                <td scope="col" className="px-6 py-3">
                  {index.amount}
                </td>
                <td scope="col" className="px-6 py-3">
                  {index.failReason || "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        <button className="px-4 py-2 border bg-dark-blue rounded-l hover:bg-gray-300 text-black">
          &lt;
        </button>
        <button className="px-4 py-2 border-t border-b hover:bg-gray-300 text-black">
          1
        </button>
        <button className="px-4 py-2 border rounded-r bg-dark-blue hover:bg-gray-300 text-black">
          &gt;
        </button>
      </div>

      {/* Actions */}
      <div className="mt-6 flex justify-end items-center gap-4">
        <input
          type="number"
          placeholder="Enter Count"
          className="border border-gray-300 p-2 rounded-md bg-gray-200"
          value={enteredCount}
          onChange={handleCountChange}
        />
        <button

      className="bg-[#002342] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      onClick={handleNavigation}
    >
      Create LOD
    </button>

      </div>
    </div>
  );
};

export default DrcLog;
