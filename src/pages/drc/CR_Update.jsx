/* Purpose: 3.12.1 Customer Response for final reminder
Created Date: 2024-12-03
Created By: Dilmith Siriwardena (jtdsiriwardena@gmail.com)
Last Modified Date: 2024-12-03
Modified By: Janendra Chamodi (apjanendra@gmail.com)
Version: React v18
ui number : 3.12.1
Dependencies: Tailwind CSS
Related Files: 
Notes: This template uses Tailwind CSS */

import { useState } from "react";

const List = () => {
  // Set default state to "dispute"
  const [selectedOption, setSelectedOption] = useState("dispute");

  return (
    <div className="min-h-screen p-6">
      {/* Title */}
      <h1 className="text-[40px] font-bold mb-6">Update Customer Response</h1>
      <div className="max-w-4xl mx-auto bg-blue-100 p-8 rounded-lg shadow-lg">

        {/* Customer Info Section */}
        <div className="bg-white p-4 rounded-lg shadow mb-6 border border-black">
          <p className="mb-2">
            <strong>Case ID:</strong>
          </p>
          <p className="mb-2">
            <strong>Customer Ref:</strong>
          </p>
          <p className="mb-2">
            <strong>Account No:</strong>
          </p>
          <p className="mb-2">
            <strong>Arrears Amount:</strong>
          </p>
          <p>
            <strong>Last Payment Date:</strong>
          </p>
        </div>

        {/* Response Type Section */}
        <div className="flex items-center space-x-6 ml-40">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="response"
              value="dispute"
              className="hidden"
              onChange={() => setSelectedOption("dispute")}
              checked={selectedOption === "dispute"}
            />
            <span
              className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                selectedOption === "dispute" ? "border-black bg-[#002342]" : "border-gray-600"
              }`}
            >
              {selectedOption === "dispute" && (
                <span className="w-2 h-2 bg-white rounded-full"></span>
              )}
            </span>
            <span className="ml-2 font-bold text-gray-900">Dispute</span>
          </label>

          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="response"
              value="settlement"
              className="hidden"
              onChange={() => setSelectedOption("settlement")}
              checked={selectedOption === "settlement"}
            />
            <span
              className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                selectedOption === "settlement" ? "border-black bg-[#002342]" : "border-gray-600"
              }`}
            >
              {selectedOption === "settlement" && (
                <span className="w-2 h-2 bg-white rounded-full"></span>
              )}
            </span>
            <span className="ml-2 font-bold text-gray-900">Settlement</span>
          </label>
        </div>

        {/* Conditional Rendering */}
        {selectedOption === "dispute" && (
          <div className="mb-6 mt-6">
            {/* Remark Section */}
            <label htmlFor="remark" className="font-bold block mb-2">
              Remark
            </label>
            <textarea
              id="remark"
              rows="4"
              className="w-96 rounded-lg p-4 focus:outline-none focus:ring focus:ring-blue-300 border border-black ml-40"
              placeholder="Enter your remark here"
            ></textarea>

            {/* Submit Button */}
            <div className="text-right mt-4">
              <button className="bg-[#002342] text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
                Submit
              </button>
            </div>
          </div>
        )}

        {selectedOption === "settlement" && (
          <div className="text-right mt-6">
            {/* Create Settlement Plan Button */}
            <button className="bg-[#002342] text-white px-6 py-2 rounded-md hover:bg-green-600 transition">
              Create Settlement Plan
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
