/* Purpose: This template is used for the 1.5 - Incident filter - Reject Incidents page.
Created Date: 2024-12-02
Created By: Chamithu (chamithujayathilaka2003@gmail.com)
Last Modified Date: 2024-12-02
Modified By: Chamithu (chamithujayathilaka2003@gmail.com)
Version: node 20
ui number : v1.0.1
Dependencies: tailwind css
Related Files: (routes)
Notes: */
import React, { useState } from 'react';
import { FaDownload, FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importing icons
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const RejectIncidents = () => {
  const [source, setSource] = useState('');
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [selectedIncidents, setSelectedIncidents] = useState([]);
  const [incidentStatus, setIncidentStatus] = useState('Rejected'); // Default to "Rejected" status

  const incidents = [
    { id: 'RC001', accountNo: '0115678', reason: 'Credit Class = VIP', date: '01-Jan-2024', status: 'Rejected' },
    { id: 'RC002', accountNo: '8765946', reason: 'Customer Type = SLT', date: '15-Jan-2024', status: 'Rejected' },
    { id: 'RC003', accountNo: '3754918', reason: 'Customer Segment = 2467', date: '05-Feb-2024', status: 'Rejected' },
  ];

  const handleReject = (id) => {
    alert(`Reject clicked for ID: ${id}`);
  };

  const handleRejectAll = () => {
    alert('Reject All clicked');
  };

  const handleMoveForward = () => {
    alert('Move Forward clicked');
  };

  const handleCheckboxChange = (id) => {
    setSelectedIncidents((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter(item => item !== id)
        : [...prevSelected, id]
    );
  };

  const filteredIncidents = incidents.filter((incident) => {
    return incident.status === incidentStatus;
  });

  const handleFromDateChange = (date) => {
    if (dateTo && date > dateTo) {
      alert("The 'From' date cannot be later than the 'To' date.");
    } else {
      setDateFrom(date);
    }
  };

  const handleToDateChange = (date) => {
    if (dateFrom && date < dateFrom) {
      alert("The 'To' date cannot be earlier than the 'From' date.");
    } else {
      setDateTo(date);
    }
  };

  return (
    <div className="p-6 min-h-screen opacity-80 font-poppins">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-[40px] font-semibold mb-8">Rejected Incident Details</h2>

        {/* Open Incidents and Reject Incidents Buttons */}
        <div className="flex mb-0">
          <button
            className="bg-blue-50 text-black px-8 py-3 rounded-tl-lg rounded-tr-lg shadow hover:bg-[#1a3b55] hover:text-white"
            onClick={() => setIncidentStatus('Open')}
          >
            Open Incidents
          </button>
          <button
            className="bg-blue-50 text-black font-bold px-8 py-3 rounded-tl-lg rounded-tr-lg shadow hover:bg-[#1a3b55] hover:text-white"
            onClick={() => setIncidentStatus('Rejected')}
          >
            Reject Incidents
          </button>
        </div>

        {/* Filter Section */}
        <div className="bg-blue-50 p-6 rounded-b-lg mb-8">
          <div className="flex flex-wrap items-center gap-6 mb-0">
            <div className="flex items-center gap-2">
              <label className="text-lg font-bold text-black">Source:</label>
              <select
                className="block w-32 h-10 rounded-md border border-black shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={source}
                onChange={(e) => setSource(e.target.value)}
              >
                <option value="">Select</option>
                <option value="source1">Source 1</option>
                <option value="source2">Source 2</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-700">From:</label>
              <DatePicker
                selected={dateFrom}
                onChange={handleFromDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/MM/yyyy"
                className="border rounded w-40 h-10 p-2 text-sm text-gray-700 bg-white bg-opacity-75"
              />
            </div>

            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-700">To:</label>
              <DatePicker
                selected={dateTo}
                onChange={handleToDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/MM/yyyy"
                className="border rounded w-40 h-10 p-2 text-sm text-gray-700 bg-white bg-opacity-75"
              />
            </div>

            <button
              className="bg-[#002342] text-white px-8 py-2 rounded-lg shadow hover:bg-[#1a3b55]"
              onClick={handleRejectAll}
            >
              Filter
            </button>
          </div>
        </div>

        {/* Table */}
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-sm text-[#718EBF] uppercase bg-gray-50 bg-opacity-75">
            <tr>
              <th className="px-6 py-3">Select</th>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Account No.</th>
              <th className="px-6 py-3">Reason</th>
              <th className="px-6 py-3">Rejected On</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredIncidents.map((incident, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b`}
              >
                <td className="px-6 py-4 flex justify-center items-center">
                  <input
                    type="checkbox"
                    checked={selectedIncidents.includes(incident.id)}
                    onChange={() => handleCheckboxChange(incident.id)}
                    className="form-checkbox w-6 h-6"
                  />
                </td>
                <td className="px-6 py-4 text-blue-600 hover:underline cursor-pointer">{incident.id}</td>
                <td className="px-6 py-4">{incident.accountNo}</td>
                <td className="px-6 py-4">{incident.reason}</td>
                <td className="px-6 py-4">{incident.date}</td>
                <td className="px-6 py-4">{incident.status}</td>
                <td className="px-6 py-4">
                  <button
                    className="bg-[#002342] text-white px-4 py-2 rounded-lg shadow hover:bg-[#1a3b55]"
                    onClick={() => handleReject(incident.id)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Download, Reject All, Move Forward Buttons */}
        <div className="mt-8 flex justify-end items-center gap-6">
          <div className="flex items-center">
            <FaDownload size={30} className="text-blue-600 cursor-pointer" />
          </div>
          <button
            className="bg-[#A1302A] text-white px-8 py-2 rounded-lg shadow hover:bg-[#8d2a25]"
            onClick={handleRejectAll}
          >
            Reject All
          </button>
          <button
            className="bg-[#002342] text-white px-8 py-2 rounded-lg shadow hover:bg-[#1a3b55]"
            onClick={handleMoveForward}
          >
            Move Forward
          </button>
        </div>

        {/* Pagination Section */}
        <div className="mt-6 flex justify-center items-center gap-6">
          <button
            className="flex items-center gap-2 px-2 py-2 text-[#00256A] border-2 border-[#00256A] rounded-full hover:bg-blue-100 transition-all"
          >
            <FaArrowLeft />
          </button>
          <div className="px-3 py-2 border-2 border-[#00256A] rounded-full text-[#00256A]">
            1
          </div>
          <button
            className="flex items-center gap-2 px-2 py-2 text-[#00256A] border-2 border-[#00256A] rounded-full hover:bg-blue-100 transition-all"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RejectIncidents;
