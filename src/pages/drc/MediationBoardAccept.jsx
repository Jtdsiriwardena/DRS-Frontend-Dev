/* Purpose : This template is used for the 2.9.2 - Mediation Board Sending Requests
Created Date : 2024 - 12 - 03
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
import GlobalStyle from "../../assets/prototype/GlobalStyle.jsx";

export default function MediationBoardAccept() {
  const negotiationDetails = [
    {
      date: "2024.11.04",
      Negotiation: "------",
      remark: "------",
    },
    {
      date: "2024.11.05",
      Negotiation: "------",
      remark: "------",
    },
    {
      date: "2024.11.06",
      Negotiation: "------",
      remark: "------",
    },
  ];

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h1 className={`${GlobalStyle.headingLarge} ${GlobalStyle.bold} mb-5 mt-[30px]`}>
        Mediation Board Accept
      </h1>
      <main className="flex-1 p-16 mx-9 rounded-lg shadow">
        {/* Section with background color added */}
        <div className={`${GlobalStyle.cardContainer} bg-[#77BFFF] bg-opacity-25 border-[#0087FF] border-opacity-15`}>
          <p>Case ID : </p>
          <p>Customer Ref : </p>
          <p>Account No : </p>
          <p>Arrears Amount : </p>
          <p>Last Payment Date : </p>
        </div>

        <div className="mt-10 mb-6">
          <h2 className={`${GlobalStyle.headingMedium} ${GlobalStyle.bold}`}>
            Negotiation Details
          </h2>
          <div className={`${GlobalStyle.tableContainer}`}>
            <table className={`${GlobalStyle.table} ${GlobalStyle.textGray}`}>
              <thead className={`${GlobalStyle.thead}`}>
                <tr>
                  <th scope="col" className={GlobalStyle.tableHeader}>
                    Date
                  </th>
                  <th scope="col" className={GlobalStyle.tableHeader}>
                    Negotiation
                  </th>
                  <th scope="col" className={GlobalStyle.tableHeader}>
                    Remark
                  </th>
                </tr>
              </thead>
              <tbody>
                {negotiationDetails.map((detail, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? GlobalStyle.tableRowEven : GlobalStyle.tableRowOdd}`}
                  >
                    <td className={GlobalStyle.tableData}>{detail.date}</td>
                    <td className={GlobalStyle.tableData}>{detail.Negotiation}</td>
                    <td className={GlobalStyle.tableData}>{detail.remark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col mt-12 ">
          <h2 className={`${GlobalStyle.headingMedium} ${GlobalStyle.bold}`}>
            Mediation Board Accept
          </h2>
          <div className="flex items-center ml-10 space-x-6">
            <label className="flex items-center justify-center space-x-2">
              <span className={`${GlobalStyle.fontPoppins} ${GlobalStyle.headingMedium}`}>Yes</span>
              <input
                type="radio"
                name="mediationBoard"
                value="Yes"
                checked={selectedOption === "Yes"}
                onChange={handleChange}
                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
            </label>
            <label className="flex items-center justify-center space-x-2">
              <span className={`${GlobalStyle.fontPoppins} ${GlobalStyle.headingMedium}`}>No</span>
              <input
                type="radio"
                name="mediationBoard"
                value="No"
                checked={selectedOption === "No"}
                onChange={handleChange}
                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
            </label>
          </div>
        </div>
        <div className="flex items-end justify-end gap-5">
          <button className={`${GlobalStyle.buttonPrimary} bg-[#ED3E3E] hover:bg-[#f03737] transition-all w-[147px] h-[43px] text-white`}>
            Withdraw
          </button>

          <button className={`${GlobalStyle.buttonPrimary} bg-[#00256A] hover:bg-blue-900 transition-all w-[147px] h-[43px] text-white`}>
            Submit
          </button>
        </div>
      </main>
    </div>
  );
}
