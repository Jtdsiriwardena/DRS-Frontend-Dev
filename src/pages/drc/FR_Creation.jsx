/*Purpose: 3.7 Final Reminder
Created Date: 2024-12-03
Created By: Vihanga Eshan Jayarathna(vihangaeshan2002@gmail.com)
Last Modified Date: 2024-12-03
Modified By: Vihanga Eshan Jayarathna(vihangaeshan2002@gmail.com)
Version: React v18.3.1
ui number : 3.7
Dependencies: Tailwind css
Related Files: 
Notes: This template uses tailwind css. */

import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const FRLog = () => {

  const navigate = useNavigate();

  const handleFinalReminderCreation = () => {
    navigate('/drc/Sup_FR_Log');
  };

  const [selectedCases, setSelectedCases] = useState([]);
  const [enteredCount, setEnteredCount] = useState("");

  const cases = [
    { id: "C002", amount: 4500, failReason: "" },
    { id: "C024", amount: 2300, failReason: "" },
    { id: "C056", amount: 1254, failReason: "" },
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
    <div className=" p-6">
      {/* Title */}
      <h2 className="text-[40px] font-bold mb-6">Final Reminder</h2>

      {/* Top Row with Dropdown and Reminder Badge */}
      <div className="flex items-center justify-between mb-4 ">
        {/* Dropdown */}
        <div className="flex gap-4">
        <h1>Final Reminder</h1>
        <select className="py-1 border-2 border-[#0056A2] border-opacity-30 rounded-lg bg-white text-left">
          <option>select</option>
          <option>select 1</option>
          <option>select 2</option>
          <option>select 3</option>
        </select>
      </div>

        {/* Reminder Count Badge */}
        <div>
          <span className="bg-[#002342] text-white px-4 py-2 rounded-lg text-lg">
            Final Reminders: 2000
          </span>
        </div>
      </div>

      {/* Table Section */}
<div className="overflow-hidden rounded-lg shadow-md border border-[#0087FF] border-opacity-15 bg-[#77BFFF] bg-opacity-25 mt-4">
  <table className="min-w-full text-sm text-left text-gray-500">
    <thead className="text-xs text-[#718EBF] uppercase bg-gray-50 bg-opacity-75">
      <tr>
        <th scope="col" className="px-6 py-3">
          <input type="checkbox" onChange={handleCheckboxChange} />
        </th>
        <th scope="col" className="px-6 py-3">Case ID</th>
        <th scope="col" className="px-6 py-3">Amount</th>
        <th scope="col" className="px-6 py-3">Fail Reason</th>
      </tr>
    </thead>
    <tbody>
      {cases.map((caseItem, index) => (
        <tr
          key={caseItem.id}
          className={`${
            index % 2 === 0 ? "bg-white bg-opacity-75" : "bg-gray-50 bg-opacity-50"
          } border-b`}
        >
          <td className="px-6 py-4 text-center">
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange(caseItem.id)}
              checked={selectedCases.includes(caseItem.id)}
            />
          </td>
          <td className="px-6 py-4 text-center">{caseItem.id}</td>
          <td className="px-6 py-4 text-center">{caseItem.amount}</td>
          <td className="px-6 py-4 text-center">{caseItem.failReason || "-"}</td>
        </tr>
      ))}
      {cases.length === 0 && (
        <tr>
          <td colSpan="4" className="text-center py-4">
            No cases found
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

      {/* Actions */}
      <div className="mt-6 flex justify-end items-center gap-4">
        <input
          type="number"
          placeholder="Enter Count"
          className="border border-black p-2 rounded-md bg-gray-200"
          value={enteredCount}
          onChange={handleCountChange}
        />
        <button
      className="bg-[#002342] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      onClick={handleFinalReminderCreation}
    >
      Create Final Reminder
    </button>

      </div>
    </div>
  );
};

export default FRLog;
