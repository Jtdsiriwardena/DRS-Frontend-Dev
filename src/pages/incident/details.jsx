/* Purpose: This template is used for the 1.4 - Incident filter - Proccessing forward incidents
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

const Button = ({ children, className, ...props }) => (
  <button className={`px-4 py-2 rounded ${className}`} {...props}>
    {children}
  </button>
);

const Checkbox = ({ id, checked, onChange }) => (
  <input
    type="checkbox"
    id={id}
    checked={checked}
    onChange={onChange}
    className="h-4 w-4"
  />
);

const Table = ({ children }) => (
  <table className="min-w-full text-sm text-left text-gray-500">
    {children}
  </table>
);
const TableHeader = ({ children }) => (
  <thead className="text-xs text-[#718EBF] uppercase bg-gray-50 bg-opacity-75">
    {children}
  </thead>
);
const TableBody = ({ children }) => <tbody>{children}</tbody>;
const TableRow = ({ children, isEven }) => (
  <tr
    className={`${
      isEven ? "bg-white bg-opacity-75" : "bg-gray-50 bg-opacity-50"
    } border-b`}
  >
    {children}
  </tr>
);
const TableHead = ({ children }) => <th className="px-6 py-3">{children}</th>;
const TableCell = ({ children }) => <td className="px-6 py-4">{children}</td>;

const Tabs = ({ children }) => <div className="space-y-6">{children}</div>;
const TabsList = ({ children }) => <div className="flex">{children}</div>;
const TabsTrigger = ({ children, isActive, onClick }) => (
  <button
    className={`flex-1 py-2 ${isActive ? "bg-white" : "bg-gray-100"}`}
    onClick={onClick}
  >
    {children}
  </button>
);
const TabsContent = ({ children, isActive }) => (
  <div className={isActive ? "" : "hidden"}>{children}</div>
);

const ranges = [
  { label: "5,000 - 10,000", count: "100" },
  { label: "10,000 - 25,000", count: "250" },
  { label: "25,000 - 50,000", count: "800" },
  { label: "50,000 - 100,000", count: "61" },
  { label: "> 100,000", count: "98" },
];

export default function IncidentDetails() {
  const [selectAll, setSelectAll] = useState(false);
  const [activeTab, setActiveTab] = useState("open");

  return (
    <div className="p-6 max-w-[1200px] mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold">Incident Details</h1>
        <Button className="px-5 py-1 text-white bg-[#00256A] rounded-lg hover:bg-blue-900 transition-all">
          Export
        </Button>
      </div>

      <Tabs>
        <TabsList>
          <TabsTrigger
            isActive={activeTab === "open"}
            onClick={() => setActiveTab("open")}
          >
            Open Incidents
          </TabsTrigger>
          <TabsTrigger
            isActive={activeTab === "rejected"}
            onClick={() => setActiveTab("rejected")}
          >
            Rejected Incidents
          </TabsTrigger>
        </TabsList>

        <TabsContent isActive={activeTab === "open"}>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Open Pending Cases</h2>
              <div className="text-4xl font-bold text-[#002B5B]">1259</div>
            </div>

            <div className="grid grid-cols-5 gap-4">
              {ranges.map((range) => (
                <div
                  key={range.label}
                  className="bg-white p-4 rounded-lg text-center"
                >
                  <div className="text-sm text-gray-600 mb-2">
                    {range.label}
                  </div>
                  <div className="text-xl font-semibold">{range.count}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Updated Table Section */}
          <div className="overflow-hidden rounded-lg shadow-md border border-[#0087FF] border-opacity-15 bg-[#77BFFF] bg-opacity-25 ">
            <Table className="min-w-full text-sm text-left text-gray-500">
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <Checkbox
                      id="selectAll"
                      checked={selectAll}
                      onChange={(e) => setSelectAll(e.target.checked)}
                    />
                  </TableHead>
                  <TableHead>ID</TableHead>
                  <TableHead>Account No.</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    id: "RC001",
                    account: "0115678",
                    action: "Arrears Collect",
                    amount: "54,000",
                    status: "open",
                  },
                  {
                    id: "RC001",
                    account: "8765946",
                    action: "Arrears Collect",
                    amount: "-",
                    status: "-",
                  },
                  {
                    id: "RC001",
                    account: "3754918",
                    action: "Arrears Collect",
                    amount: "43,750",
                    status: "-",
                  },
                ].map((row, index) => (
                  <TableRow key={row.account} isEven={index % 2 === 0}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.account}</TableCell>
                    <TableCell>{row.action}</TableCell>
                    <TableCell className="text-red-500">{row.amount}</TableCell>
                    <TableCell>{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center gap-2">
              <Checkbox id="selectAllIncidents" />
              <label htmlFor="selectAllIncidents">Select All incidents</label>
            </div>
            <Button className="px-5 py-1 text-white bg-[#00256A] rounded-lg hover:bg-blue-900 transition-all">
              Proceed
            </Button>
          </div>
        </TabsContent>

        <TabsContent isActive={activeTab === "rejected"}>
          <div className="h-[200px] flex items-center justify-center text-gray-500">
            No rejected incidents found
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
