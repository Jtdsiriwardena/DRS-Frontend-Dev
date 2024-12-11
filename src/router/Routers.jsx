import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import PrototypeA from "../assets/prototype/prototypeA";
import PrototypeB from "../assets/prototype/prototypeB";
import Individual from "../pages/incident/register/Individual";
import Bulk from "../pages/incident/register/Bulk";
import IncidentLog from "../pages/incident/log/IncidentLog";
import RejectIncidents from "../pages/incident/log/RejectIncidents";
import RejectLog from "../pages/incident/log/RejectLog";
import MediationBoard from "../pages/drc/MediationBoard";
import PeriodExtension from "../pages/drc/PeriodExtension";
import DRCLog from "../pages/drc/DrcLog";
import FtlLodList from "../pages/lod/ftl_lod/List";
import FtlLodLog from "../pages/lod/ftl_lod/FltLodLog";
import Litigation from "../pages/lod/ftl_lod/Litigation";
import LODLog from "../pages/lod/digital_signature_lod/lod/LodLog";
import FinalReminderLog from "../pages/lod/digital_signature_lod/final_reminder/FRLog";
import Adjustments from "../pages/settlement/monitor_settlement/Adjusments";

import IncidentDetails from "../pages/incident/details";
import IncidentFileDownload from "../pages/incident/file-download";
import IncidentUploadLog from "../pages/incident/upload-log";

import CaseDetails from "../pages/incident/log/CaseDetails";
import CaseList from "../pages/incident/log/CaseList";
import Welcome from "../pages/incident/log/WelcomePage";
import OpenPendingCases from "../pages/incident/log/OpenPendingCases";


function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/prototypeA" element={<PrototypeA />} />
      <Route path="/prototypeB" element={<PrototypeB />} />
      <Route path="/incident/register/individual" element={<Individual />} />
      <Route path="/incident/register/bulk" element={<Bulk />} />
      <Route path="/incident/log" element={<IncidentLog />} />
      <Route path="/incident/log/rejectincidents" element={<RejectIncidents />} />
      <Route path="/incident/log/rejectlog" element={<RejectLog/>} />
      <Route path="/drc/mediation-board" element={<MediationBoard />} />
      <Route path="/drc/period-extension" element={<PeriodExtension />} />
      <Route path="/drc/log" element={<DRCLog />} />
      <Route path="/lod/ftl-list" element={<FtlLodList />} />
      <Route path="/lod/ftl-log" element={<FtlLodLog />} />
      <Route path="/lod/litigation" element={<Litigation />} />
      <Route path="/lod/digital-signature-log" element={<LODLog />} />
      <Route path="/lod/final-reminder-log" element={<FinalReminderLog />} />
      <Route path="/settlement/adjustments" element={<Adjustments />} />

      <Route path="/pages/incident/details" element={<IncidentDetails />} />
      <Route
        path="/pages/incident/file-download"
        element={<IncidentFileDownload />}
      />
      <Route
        path="/pages/incident/upload-log"
        element={<IncidentUploadLog />}
      />

      <Route path="/incident/log/case-details" element={<CaseDetails />} />
      <Route path="/incident/log/case-list" element={<CaseList />} />
      <Route path="/incident/log/welcome" element={<Welcome />} />
      <Route path="/incident/log/open-pending-cases" element={<OpenPendingCases />} />


    </Routes>
  );
}

export default Routers;
