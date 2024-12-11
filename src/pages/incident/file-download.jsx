/* Purpose: This template is used for the 1.3 - Incident File Download
Created Date: 2024-12-03
Created By: Sanjaya (sanjayaperera80@gmail.com)
Last Modified Date: 2024-12-03
Modified By: Sanjaya (sanjayaperera80@gmail.com)
Version: node 20
ui number : v1.0.1
Dependencies: tailwind css
Related Files: (routes)
Notes:  */

import React from "react";
import { Download } from "lucide-react";

const Button = ({ children, className, ...props }) => (
  <button className={`px-4 py-2 rounded ${className}`} {...props}>
    {children}
  </button>
);

const Table = ({ children }) => <table className="w-full">{children}</table>;
const TableHeader = ({ children }) => <thead>{children}</thead>;
const TableBody = ({ children }) => <tbody>{children}</tbody>;
const TableRow = ({ children }) => <tr>{children}</tr>;
const TableHead = ({ children }) => (
  <th className="p-2 text-left">{children}</th>
);
const TableCell = ({ children }) => <td className="p-2">{children}</td>;

export default function IncidentFileDownload() {
  return (
    <div className="p-6 max-w-[1200px] mx-auto">
      <h1 className="text-3xl font-semibold mb-8">
        Proceed Incident File Download
      </h1>

      <div className="border rounded-lg overflow-hidden bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date & time</TableHead>
              <TableHead>Created Time</TableHead>
              <TableHead>Created By</TableHead>
              <TableHead>File Name</TableHead>
              <TableHead className="w-[100px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>2024.11.04</TableCell>
              <TableCell>1 pm</TableCell>
              <TableCell>ABCD</TableCell>
              <TableCell>Unit Collection 11.05.csv</TableCell>
              <TableCell>
                <Button className="p-2">
                  <Download className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
