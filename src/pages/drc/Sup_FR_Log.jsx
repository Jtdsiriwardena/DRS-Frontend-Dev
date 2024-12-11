/*Purpose: 3.8 Sup - Final Reminder Log
Created Date: 2024-12-03
Created By: Janendra Chamodi (apjanendra@gmail.com)
Last Modified Date: 2024-12-03
Modified By: Janendra Chamodi (apjanendra@gmail.com)
Version: React v18
ui number : 3.8
Dependencies: Tailwind css
Related Files: 
Notes: This template uses tailwind css. */

import { useNavigate } from 'react-router-dom';

const FltLodLog = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/drc/CR_Update_FR');
  };

  const logs = [
    { batchNo: "FR001", caseNo: "C002", createdBy: "A.B.Perera", createdDTM: "2024.11.05" },
    { batchNo: "FR001", caseNo: "C017", createdBy: "A.B.Perera", createdDTM: "2024.11.05" },
    { batchNo: "FR001", caseNo: "C032", createdBy: "A.B.Perera", createdDTM: "2024.11.05" },
  ];

  return (
    <div>
      <h2 className="text-[40px] font-bold mb-6">Final Reminder Submission Log</h2>
      <div className="overflow-hidden rounded-lg shadow-md border border-[#0087FF] border-opacity-15 bg-[#77BFFF] bg-opacity-25">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-[#718EBF] uppercase bg-gray-50 bg-opacity-75">
            <tr>
              <th scope="col" className="px-6 py-3">Final Reminder Batch No</th>
              <th scope="col" className="px-6 py-3">Case No</th>
              <th scope="col" className="px-6 py-3">Created By</th>
              <th scope="col" className="px-6 py-3">Created DTM</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white bg-opacity-75" : "bg-gray-50 bg-opacity-50"
                } border-b`}
              >
                <td className="px-6 py-4">{log.batchNo}</td>
                <td className="px-6 py-4">{log.caseNo}</td>
                <td className="px-6 py-4">{log.createdBy}</td>
                <td className="px-6 py-4">{log.createdDTM}</td>
                <td className="px-6 py-4">
                  <button
                    className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                    onClick={handleNavigation}
                  >
                    Open
                  </button>
                </td>
              </tr>
            ))}
            {logs.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No results found
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
