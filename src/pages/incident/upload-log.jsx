/* Purpose: This template is used for the 1.2 Sup - Bulk Upload LOG.
Created Date: 2024-12-03
Created By: Sanjaya (sanjayaperera80@gmail.com)
Last Modified Date: 2024-12-03
Modified By: Sanjaya (sanjayaperera80@gmail.com)
Version: node 20
ui number : v1.0.1
Dependencies: tailwind css
Related Files: (routes)
Notes:  */

import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Button = ({ children, className, ...props }) => (
  <button className={`px-4 py-2 rounded ${className}`} {...props}>
    {children}
  </button>
);

const Calendar = ({ selected, onSelect }) => (
  <div className="p-2 bg-white rounded shadow">
    <input type="date" onChange={(e) => onSelect(new Date(e.target.value))} />
  </div>
);

const Table = ({ children }) => <table className="w-full">{children}</table>;
const TableHeader = ({ children }) => <thead>{children}</thead>;
const TableBody = ({ children }) => <tbody>{children}</tbody>;
const TableRow = ({ children }) => <tr>{children}</tr>;
const TableHead = ({ children }) => (
  <th className="p-2 text-left">{children}</th>
);
const TableCell = ({ children }) => <td className="p-2">{children}</td>;

export default function IncidentUploadLog() {
  const [date, setDate] = useState(null);
  const [status, setStatus] = useState("all");
  const [filteredData, setFilteredData] = useState([]);

  const data = [
    {
      date: "2024.11.04",
      createdTime: "1 pm",
      uploadedBy: "ABCD",
      status: "Pending",
      fileName: "Unit Collection 11.05.csv",
      type: "Incident creation",
    },
    {
      date: "2024.11.05",
      createdTime: "3 pm",
      uploadedBy: "XYZ",
      status: "Completed",
      fileName: "Unit Report 11.05.csv",
      type: "Incident report",
    },
  ];

  const handleFilter = () => {
    const filtered = data.filter((item) => {
      const statusMatch =
        status === "all" || item.status.toLowerCase() === status.toLowerCase();
      const dateMatch =
        !date || new Date(item.date).toDateString() === date.toDateString();
      return statusMatch && dateMatch;
    });
    setFilteredData(filtered);
  };

  return (
    <div className="p-6 max-w-[1200px] mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Incident Upload Log</h1>

      <div className="flex gap-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="font-medium">Status:</span>
          <select
            className="w-[180px] px-3 py-2 bg-white border rounded"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-medium">Date:</span>
          <div className="flex items-center">
            <FaCalendarAlt className="mr-2 h-4 w-4" />
            <input
              type="date"
              className="w-[240px] px-3 py-2 bg-white border rounded"
              onChange={(e) => setDate(new Date(e.target.value))}
            />
          </div>
        </div>

        <Button
          className="px-5 py-1 text-white bg-[#00256A] rounded-lg hover:bg-blue-900 transition-all"
          onClick={handleFilter}
        >
          Filter
        </Button>
      </div>

      <div className="border rounded-lg overflow-hidden bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date & time</TableHead>
              <TableHead>Created Time</TableHead>
              <TableHead>Uploaded By</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>File Name</TableHead>
              <TableHead>Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {(filteredData.length > 0 ? filteredData : data).map(
              (item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.createdTime}</TableCell>
                  <TableCell>{item.uploadedBy}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>{item.fileName}</TableCell>
                  <TableCell>{item.type}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-end mt-6">
        <Button className="px-5 py-1 text-white bg-[#00256A] rounded-lg hover:bg-blue-900 transition-all">
          Go Forward
        </Button>
      </div>
    </div>
  );
}
