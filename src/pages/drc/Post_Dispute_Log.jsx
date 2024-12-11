/*Purpose: 6.3 Post Dispute Log
Created Date: 2024-12-03
Created By: Janendra Chamodi (apjanendra@gmail.com)
Last Modified Date: 2024-12-04
Modified By: ChatGPT
Version: React v18
UI Number: 6.3
Dependencies: Tailwind CSS
Notes: This template uses Tailwind CSS. */

import GlobalStyle from "../../assets/prototype/GlobalStyle";

const FltLodLog = () => {
  const logs = [
    { caseID: "001", amount: "20000", status: "Open", channel: "Online", remark: "Pending Review", submittedBy: "John Doe", submittedDTM: "2024-12-02" },
    { caseID: "002", amount: "20000", status: "Open", channel: "Branch", remark: "Follow-up Needed", submittedBy: "Jane Doe", submittedDTM: "2024-12-01" },
  ];

  return (
    <div className={GlobalStyle.fontPoppins}>
      <h2 className={`${GlobalStyle.headingLarge} mb-5`}>Post Dispute Log</h2>
      <div className={GlobalStyle.tableContainer}>
        <table className={GlobalStyle.table}>
          <thead className={GlobalStyle.thead}>
            <tr>
               <th scope="col" className={GlobalStyle.tableHeader}>Case ID</th>
               <th scope="col" className={GlobalStyle.tableHeader}>Amount (LKR)</th>
               <th scope="col" className={GlobalStyle.tableHeader}>Status</th>
               <th scope="col" className={GlobalStyle.tableHeader}>Channel</th>
               <th scope="col" className={GlobalStyle.tableHeader}>Remark</th>
               <th scope="col" className={GlobalStyle.tableHeader}>Submitted By</th>
               <th scope="col" className={GlobalStyle.tableHeader}>Submitted Date</th>
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
                <td className={GlobalStyle.tableData}>{log.channel}</td>
                <td className={GlobalStyle.tableData}>{log.remark}</td>
                <td className={GlobalStyle.tableData}>{log.submittedBy}</td>
                <td className={GlobalStyle.tableData}>{log.submittedDTM}</td>
              </tr>
            ))}
            {logs.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-4">
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
