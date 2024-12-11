import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

const PrototypeB = () => {
  const [fromDate, setFromDate] = useState(null);  //for date
  const [toDate, setToDate] = useState(null); // for date
  const [error, setError] = useState(""); // for error message
  const [searchQuery, setSearchQuery] = useState(""); // for searching
  const navigate = useNavigate(); // for navigate

  // validation for date
  const handleFromDateChange = (date) => {
    if (toDate && date > toDate) {
      setError("The 'From' date cannot be later than the 'To' date.");
    } else {
      setError("");
      setFromDate(date);
    }
  };

  // validation for date
  const handleToDateChange = (date) => {
    if (fromDate && date < fromDate) {
      setError("The 'To' date cannot be earlier than the 'From' date.");
    } else {
      setError("");
      setToDate(date);
    }
  };

  //dummy data for table
  const data = [
    {
      id: "#R100",
      status: "up",
      accountNo: "#12548796",
      serviceType: "PEO",
      amount: "2,500",
      agent: "CMS",
      rtom: "AD",
      createdDate: "28 Jan, 12:30 AM",
      lastPaidDate: "28 Nov, 12:30 AM",
    },
    {
      id: "#R101",
      status: "down",
      accountNo: "#12548796",
      serviceType: "LTE",
      amount: "11,500",
      agent: "Prompt",
      rtom: "DM",
      createdDate: "25 Jan, 10:40 PM",
      lastPaidDate: "25 Nov, 10:40 PM",
    },
    {
      id: "#R101",
      status: "down",
      accountNo: "#12548796",
      serviceType: "LTE",
      amount: "11,500",
      agent: "Prompt",
      rtom: "DM",
      createdDate: "25 Jan, 10:40 PM",
      lastPaidDate: "25 Nov, 10:40 PM",
    },
    {
      id: "#R101",
      status: "down",
      accountNo: "#12548796",
      serviceType: "LTE",
      amount: "11,500",
      agent: "Prompt",
      rtom: "DM",
      createdDate: "25 Jan, 10:40 PM",
      lastPaidDate: "25 Nov, 10:40 PM",
    },
    {
      id: "#R101",
      status: "down",
      accountNo: "#12548796",
      serviceType: "LTE",
      amount: "11,500",
      agent: "Prompt",
      rtom: "DM",
      createdDate: "25 Jan, 10:40 PM",
      lastPaidDate: "25 Nov, 10:40 PM",
    },
  ];

  //search fuction
  const filteredData = data.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`p-4 ${GlobalStyle.fontPoppins}`}>

      {/* case count Bar */}
      <div className={`${GlobalStyle.caseCountBar}`}>
  <div className="flex">
    <span className={GlobalStyle.countBarTopic}>Case count</span>
  </div>
  <div className={GlobalStyle.countBarSubTopicContainer}>
    <div className={GlobalStyle.countBarMainBox}>
      <span>Total:</span>
      <p className={GlobalStyle.countBarMainTopic}>1259</p>
    </div>
    <div className={GlobalStyle.countBarSubBox}>
      <span>5,000 - 10,000</span>
      <p className={GlobalStyle.countBarSubTopic}>100</p>
    </div>
    <div className={GlobalStyle.countBarSubBox}>
      <span>10,000 - 25,000</span>
      <p className={GlobalStyle.countBarSubTopic}>250</p>
    </div>
    <div className={GlobalStyle.countBarSubBox}>
      <span>25,000 - 50,000</span>
      <p className={GlobalStyle.countBarSubTopic}>800</p>
    </div>
    <div className={GlobalStyle.countBarSubBox}>
      <span>50,000 - 100,000</span>
      <p className={GlobalStyle.countBarSubTopic}>61</p>
    </div>
    <div className={GlobalStyle.countBarSubBox}>
      <span>&gt; 100,000</span>
      <p className={GlobalStyle.countBarSubTopic}>98</p>
    </div>
  </div>
</div>


        {/* card box*/}
      <div className={`${GlobalStyle.cardContainer}`}>
        <p className="mb-2"><strong>Case ID:</strong></p>
        <p className="mb-2"><strong>Customer Ref:</strong> </p>
        <p className="mb-2"><strong>Account no:</strong> </p>
        <p className="mb-2"><strong>Arrears Amount:</strong> </p>
        <p className="mb-2"><strong>Last Payment Date:</strong> </p>
      </div>

      {/* remark box */}
      <div className="mb-6">
        <label className={GlobalStyle.remarkTopic}>Remark</label>
        <textarea
          value=""
          className={`${GlobalStyle.remark}`}
          rows="5"
        ></textarea>
      </div>

      <h1 className="flex">Date picker</h1>
      <br/>
      {/* Date Picker Section */}
      <div className="flex flex-col mb-4">
        <div className={GlobalStyle.datePickerContainer}>
          <label className={GlobalStyle.dataPickerDate}>Date </label>
          <DatePicker
            selected={fromDate}
            onChange={handleFromDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/MM/yyyy"
            className={GlobalStyle.inputText}
          />
          <DatePicker
            selected={toDate}
            onChange={handleToDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/MM/yyyy"
            className={GlobalStyle.inputText}
          />
        </div>
        {error && <span className={GlobalStyle.errorText}>{error}</span>}
      </div>
      <br/>
      <h1 className={`${GlobalStyle.headingLarge}`}>Table</h1>
      <h1 className={GlobalStyle.headingMedium}>Table heading</h1>
      <h1 className={GlobalStyle.headingSmall}>Table data</h1>
      <br />

      {/* Search Bar Section */}
      <div className="mb-4 flex justify-start">
        <div className={GlobalStyle.searchBarContainer}>
          <input
            type="text"
            placeholder=""
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={GlobalStyle.inputSearch}
          />
          <FaSearch className={GlobalStyle.searchBarIcon} />
        </div>
      </div>

      {/* Table Section */}
      <div className={GlobalStyle.tableContainer}>
        <table className={GlobalStyle.table}>
          <thead className={GlobalStyle.thead}>
            <tr>
              <th scope="col" className={GlobalStyle.tableHeader}>
                ID
              </th>
              <th scope="col" className={GlobalStyle.tableHeader}>
                Status
              </th>
              <th scope="col" className={GlobalStyle.tableHeader}>
                Account No
              </th>
              <th scope="col" className={GlobalStyle.tableHeader}>
                Service Type
              </th>
              <th scope="col" className={GlobalStyle.tableHeader}>
                Amount
              </th>
              <th scope="col" className={GlobalStyle.tableHeader}>
                Agent
              </th>
              <th scope="col" className={GlobalStyle.tableHeader}>
                RTOM
              </th>
              <th scope="col" className={GlobalStyle.tableHeader}>
                Created Date
              </th>
              <th scope="col" className={GlobalStyle.tableHeader}>
                Last Paid Date
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr
                key={row.id}
                className={index % 2 === 0 ? GlobalStyle.tableRowEven : GlobalStyle.tableRowOdd}
              >
                <td className={GlobalStyle.tableData}>{row.id}</td>
                <td className={GlobalStyle.tableData}>
                  <span
                    className={`${
                      row.status === "up" ? "text-green-500" : "text-red-500"
                    } font-bold`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className={GlobalStyle.tableData}>{row.accountNo}</td>
                <td className={GlobalStyle.tableData}>{row.serviceType}</td>
                <td className={GlobalStyle.tableData}>{row.amount}</td>
                <td className={GlobalStyle.tableData}>{row.agent}</td>
                <td className={GlobalStyle.tableData}>{row.rtom}</td>
                <td className={GlobalStyle.tableData}>{row.createdDate}</td>
                <td className={GlobalStyle.tableData}>{row.lastPaidDate}</td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan="9" className={GlobalStyle.errorText}>
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Navigation Buttons */}
      <div className={GlobalStyle.navButtonContainer}>
        <button
          onClick={() => navigate("/")}
          className={GlobalStyle.navButton}
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => navigate("/next")}
          className={GlobalStyle.navButton}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PrototypeB;
