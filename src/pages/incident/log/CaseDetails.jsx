/*
Purpose: 
Created Date: 2024-12-3
Created By: Chamath Jayasanka - chamathjayasanka20@gmail.com
Last Modified Date: 2024-12-03
Modified By: Chamath Jayasanka - chamathjayasanka20@gmail.com
Version: node 11
ui number : 
Dependencies: tailwind css
Related Files: 
Notes: 

*/

import React from 'react';
import AccordionSection from './AccordionSection';  


const CaseDetails = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="w-full mx-auto p-8 rounded-lg shadow-lg relative">
        
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Case Details</h1>
          <div className="grid grid-cols-2 gap-6 text-gray-600">
            <div className="space-y-2">
              <p><strong>Account No</strong>: 12345</p>
              <p><strong>Customer Ref</strong>: CR123</p>
              <p><strong>Area</strong>: RTOM</p>
              <p><strong>Arrears Amount</strong>: $1,500</p>
              <p><strong>Action Type</strong>: Follow-up</p>
              <p><strong>Remark</strong>: Pending payment</p>
            </div>
            <div className="space-y-2">
              <p><strong>Case ID</strong>: 001</p>
              <p><strong>Created Date</strong>: 2024-12-01</p>
              <p><strong>Days Count</strong>: 30</p>
              <p><strong>Current Status</strong>: Open</p>
              <p><strong>Last Payment Date</strong>: 2024-11-15</p>
              <p><strong>Last BSS Reading Date</strong>: 2024-11-10</p>
            </div>
          </div>
        </header>
      
        <section>
          <AccordionSection title="DRC">DRC Details</AccordionSection>
          <AccordionSection title="RO - Negotiate | Arrears">Negotiation Details</AccordionSection>
          <AccordionSection title="RO - Negotiate | CPE">CPE Details</AccordionSection>
          <AccordionSection title="RO - Customer Updated Data">Customer Update Details</AccordionSection>
          <AccordionSection title="Mediation Board">Mediation Board Details</AccordionSection>
          <AccordionSection title="Settlement">Settlement Details</AccordionSection>
          <AccordionSection title="Payment">Payment Details</AccordionSection>
          <AccordionSection title="Commission | Arrears Collection">Commission Details</AccordionSection>
          <AccordionSection title="Commission | CPE Collection">CPE Collection Details</AccordionSection>
          <AccordionSection title="LOD">LOD Details</AccordionSection>
          <AccordionSection title="Dispute">Dispute Details</AccordionSection>
          <AccordionSection title="Write OFF">Write OFF Details</AccordionSection>
        </section>
      
        
        <div className="text-right mt-8">
          <button className="px-5 py-1 text-white bg-[#00256A] rounded-lg hover:bg-blue-900 transition-all">
            Download
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default CaseDetails;
