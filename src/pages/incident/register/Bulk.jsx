// Purpose: This template is used for the agent registration page.
// Created Date: 2024-12-02
// Created By: Chathundi Sakumini (sakuminic@gmail.com)
// Last Modified Date: 2024-12-03
// Modified By: 
// Version: 
// Dependencies: React
// Related Files: bulk.jsx(1.1.1), individual.jsx(1.1.2)
// Notes: completed bulk.jsx(1.1.1) using plugin with tailwind styles

const Upload = () => {
  return (
    <div
      className="flex flex-col items-center pt-16 font-poppins"
      style={{ opacity: 0.95 }}
    >
      {/* Title */}
      <h1 className="mb-6 text-5xl font-bold text-black">File Upload</h1>

      {/* Container */}
      <div className="w-full max-w-3xl p-12 bg-blue-50 rounded-lg shadow-md">
        {/* Action Type Dropdown */}
        <div className="mb-6 flex justify-center">
          <select
            id="actionType"
           className=" px-6 py-1 border-2 border-[#0056A2] border-opacity-30 rounded-lg bg-white text-left "
          >
            <option value="" disabled selected>
              ACTION TYPE
            </option>
            <option value="upload">Action 1</option>
            <option value="download">Action 2</option>
          </select>
        </div>

        {/* File Input */}
        <div className="mb-6 flex items-center justify-center">
          <label
            htmlFor="file"
            className="px-6 py-3 text-black bg-white border border-black rounded-l-lg cursor-pointer hover:bg-gray-100 w-40 text-center font-bold"
          >
            File
          </label>
          <input
            type="file"
            id="file"
            className="hidden"
          />
          <input
            type="text"
            placeholder="No file chosen"
            readOnly
            className="block w-full px-5 py-3 bg-gray-200 text-gray-600 border-2 border-[#0056A2] border-opacity-30 rounded-r-lg"
            style={{ height: "calc(3rem + 2px)", width: "calc(100% - 10rem)" }}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-5 py-1 text-white bg-[#00256A] rounded-lg hover:bg-blue-900 transition-all"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
