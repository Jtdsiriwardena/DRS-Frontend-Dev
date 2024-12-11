// Purpose: This template is used for the agent registration page.
// Created Date: 2024-12-02
// Created By: Chathundi Sakumini (sakuminic@gmail.com)
// Last Modified Date: 2024-12-03
// Modified By: 
// Version: 
// Dependencies: React
// Related Files: bulk.jsx, individual.jsx
// Notes: completed individual.jsx using plugin with tailwind styles

import React, { useState } from 'react';

const IncidentRegister = () => {
  const [formData, setFormData] = useState({
    accountNo: '',
    actionType: '',
    calendarMonth: '1',
    date: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center font-poppins">
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">Incident Register</h1>

        <div className="relative bg-[#E1E4F5] rounded-lg p-6 max-w-2xl">
          <h2 className="text-3xl font-semibold mb-6">Incident Details</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {/* Account Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account No
                </label>
                <input
                  type="text"
                  className="w-[371px] h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.accountNo}
                  onChange={(e) =>
                    setFormData({ ...formData, accountNo: e.target.value })
                  }
                />
              </div>

              {/* Action Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Action
                </label>
                <select
                  className="w-[371px] h-12 px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.actionType}
                  onChange={(e) =>
                    setFormData({ ...formData, actionType: e.target.value })
                  }
                >
                  <option value="">Action Type</option>
                  <option value="type1">Type 1</option>
                  <option value="type2">Type 2</option>
                </select>
              </div>

              {/* Calendar Month */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Calendar Month
                </label>
                <input
                  type="number"
                  min="1"
                  max="12"
                  className="w-16 h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.calendarMonth}
                  onChange={(e) =>
                    setFormData({ ...formData, calendarMonth: e.target.value })
                  }
                />
              </div>

              {/* Date without Icon */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  className="w-[371px] h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-5 py-1 text-white bg-[#00256A] rounded-lg hover:bg-blue-900 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IncidentRegister;
