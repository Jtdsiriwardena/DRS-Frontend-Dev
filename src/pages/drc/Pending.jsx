/* Purpose: This template is used for the 1.11 - Distribution Preparation (Bulk Upload) page.
Created Date: 2024-12-03
Created By: Geeth (eshaneperera@gmail.com)
Last Modified Date : 2024 - 12 - 06
Modified Date: 2024-12-03
Modified By: Geeth(eshaneperera@gmail.com)
Version: node 20
ui number : v1.0.1
Dependencies: tailwind css
Related Files: (routes)
Notes:  */

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import GlobalStyle from "../../assets/prototype/GlobalStyle.jsx";

const Pending = () => {
  const navigate = useNavigate();
  const services = [
    { type: "PEO TV", count: 4500 },
    { type: "LTE", count: 4500 },
    { type: "Fiber", count: 4500 },
    { type: "Copper", count: 4500 },
    { type: "Service A", count: 4500 },
    { type: "Service B", count: 4500 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentServices = services.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(services.length / recordsPerPage);

  const handlePrevNext = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleIconClick = (service) => {
    navigate("/drc/assigndrc", {
      state: { serviceType: service.type, count: service.count },
    });
  };

  return (
    <div className={GlobalStyle.fontPoppins}>
    <div className="flex flex-col flex-1">
      <main className="p-6">
        <div>
          <h1 className={GlobalStyle.headingLarge}>
            Open Pending Cases
          </h1>
        </div>

        {/* Summary Cards */}
        <div className="flex justify-center pt-16 pb-16 space-x-8">
          {["Total", "Rejects"].map((item, index) => (
            <div
              key={index}
              className={`${GlobalStyle.flexCenter} ${GlobalStyle.shadowBox}`}
              style={{
                backgroundColor: "#00256A",
                borderRadius: "25px",
                width: "170px",
                height: "90px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                className={`${GlobalStyle.textSmall} text-white`}
                style={{
                  fontSize: "18px",
                }}
              >
                {item}
              </p>
              <p
                className={`${GlobalStyle.textLarge} ${GlobalStyle.bold} text-white`}
                style={{
                  fontSize: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "-25px",
                }}
              >
                {index === 0 ? 1259 : 0}
              </p>
            </div>
          ))}
        </div>

        {/* Table Section */}
        <div className={GlobalStyle.tableContainer}>
          <table className={GlobalStyle.table}>
            <thead className={GlobalStyle.thead}>
              <tr>
                <th scope="col" className={GlobalStyle.tableHeader}>Service Type</th>
                <th scope="col" className={GlobalStyle.tableHeader}>No of Count</th>
                <th scope="col" className={GlobalStyle.tableHeader}></th>
              </tr>
            </thead>
            <tbody>
              {currentServices.map((service, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? GlobalStyle.tableRowEven
                      : GlobalStyle.tableRowOdd
                  }
                  style={{ height: "50px" }}  // Increased row height
                >
                  <td
                    className={`${GlobalStyle.tableData} ${GlobalStyle.paragraph}`}
                  >
                    {service.type}
                  </td>
                  <td
                    className={`${GlobalStyle.tableData} ${GlobalStyle.paragraph}`}
                  >
                    {service.count}
                  </td>
                  <td className={GlobalStyle.tableData}>
                    <button
                      onClick={() => handleIconClick(service)}
                      className={`${GlobalStyle.bold} text-2xl text-blue-500`}
                      style={{ transform: "scale(1.5)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}  // Increased folder icon width
                        height={15} // Increased folder icon height
                        fill="none"
                      >
                        <path
                          fill="#001120"
                          d="M3.57 24a2.99 2.99 0 0 1-2.167-.88C.802 22.531.5 21.825.5 21V3c0-.825.3-1.531.903-2.118A2.998 2.998 0 0 1 3.57 0h9.21l3.069 3h12.279c.844 0 1.567.294 2.169.882.601.588.902 1.294.9 2.118H3.57v15L7.253 9H33.5l-3.952 12.863a2.933 2.933 0 0 1-1.131 1.556 3.082 3.082 0 0 1-1.824.581H3.57Z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
              {currentServices.length === 0 && (
                <tr>
                  <td colSpan="3" className="py-4 text-center">
                    No results found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className={GlobalStyle.navButtonContainer}>
          <button
            onClick={() => handlePrevNext("prev")}
            disabled={currentPage === 1}
            className={`${GlobalStyle.navButton} ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => handlePrevNext("next")}
            disabled={currentPage === totalPages}
            className={`${GlobalStyle.navButton} ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
          >
            <FaArrowRight />
          </button>
        </div>
      </main>
    </div>
    </div>
  );
};

export default Pending;

