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
import PeriodExtensionApproval from "../pages/drc/PeriodExtensionApproval";
import DRCLog from "../pages/drc/DrcLog";
import AssignedDRCLog from "../pages/drc/AssignedDRCLog";
import ReAssignDRC from "../pages/drc/ReAssignDRC";
import AssignDRC from "../pages/drc/AssignDRC";
import DRCApproval from "../pages/drc/DRCApproval";
import Pending from "../pages/drc/Pending";
import MediationBoardSendingRequests from "../pages/drc/MediationBoardSendingRequest";
import MediationBoardAccept from "../pages/drc/MediationBoardAccept";
import MediationBoardResponseLog from "../pages/drc/MediationBoardResponseLog";
import Logs from "../pages/drc/logs";
import FtlLodList from "../pages/lod/ftl_lod/ftl_lod/List";
import FtlLodLog from "../pages/lod/ftl_lod/ftl_lod_log/FltLodLog";
import Litigation from "../pages/lod/ftl_lod/litigation/Litigation";
import LitigationLog from "../pages/lod/ftl_lod/litigation/LitigationLog";
import PostLitigationLog from "../pages/lod/ftl_lod/litigation/PostLitigationLog";
import LitigationSubmission from "../pages/lod/ftl_lod/litigation/LitigationSubmission";
import LitigationPage from "../pages/lod/ftl_lod/litigation/LitigationPage";
import LODLog from "../pages/lod/digital_signature_lod/lod/LodLog";
import FinalReminderLog from "../pages/lod/digital_signature_lod/final_reminder/FRLog";
import ListLOdSubmission from "../pages/lod/ftl_lod/ftl_lod/list/ListOfLodSubmission";
import ListLOdSubmitedCases from "../pages/lod/ftl_lod/ftl_lod/list/ListOfSubmittedCases";
import Adjustments from "../pages/settlement/monitor_settlement/Adjusments";
import IncidentDetails from "../pages/incident/log/details";
import IncidentFileDownload from "../pages/incident/log/file-download";
import IncidentUploadLog from "../pages/incident/log/upload-log";
import CaseDetails from "../pages/incident/log/CaseDetails";
import CaseList from "../pages/incident/log/CaseList";
import Welcome from "../pages/incident/log/WelcomePage";
import OpenPendingCases from "../pages/incident/log/OpenPendingCases";
import CR_Update_LOD from "../pages/drc/CR_Update_LOD";
import CR_Update from "../pages/drc/CR_Update";
import CR_Update_FR from "../pages/drc/CR_Update(FR)";
import Dispute_Log from "../pages/drc/Dispute_Log";
import Dispute_Submission from "../pages/drc/Dispute_Submission";
import F2 from "../pages/drc/F2";
import FR_Creation from "../pages/drc/FR_Creation";
import LOD_Creation from "../pages/drc/LOD_Creation";
import Post_Dispute_Log from "../pages/drc/Post_Dispute_Log";
import Sup_FR_Log from "../pages/drc/Sup_FR_Log";
import Sup_LOD_Log from "../pages/drc/Sup_LOD_Log";
import DirectLOD from "../pages/incident/log/DirectLOD"
import LODPreview from "../pages/lod/ftl_lod/ftl_lod/PreviewOfFtlLod"
import DownloadLOD from "../pages/lod/ftl_lod/ftl_lod/DownloadCreateFtlLod"
import DRCcaseList from "../pages/drc/DRCcaseList";

function Routers() {
  return (
    <Routes>

       {/* eliment & prototype UI routes */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/prototypeA" element={<PrototypeA />} />
      <Route path="/prototypeB" element={<PrototypeB />} />


       {/*  incident UI routes */}
      <Route path="/incident/register/individual" element={<Individual />} />
      <Route path="/incident/register/bulk" element={<Bulk />} />
      <Route path="/incident/log" element={<IncidentLog />} />

      <Route path="/incident/log/rejectincidents" element={<RejectIncidents />} />

      <Route path="/incident/log/rejectincidents"element={<RejectIncidents />}/>

      <Route path="/incident/log/rejectlog" element={<RejectLog />} />
      <Route path="/incident/log/directlod" element={<DirectLOD />}/>
      <Route path="/incident/log/rejectlog" element={<RejectLog />} />
      <Route path="/incident/log/welcome" element={<Welcome />} />
      <Route path="/incident/log/open-pending-cases" element={<OpenPendingCases />}  />
      <Route path="/incident/log/case-details" element={<CaseDetails />} />

      <Route path="/pages/incident/file-download" element={<IncidentFileDownload />}/>
      <Route path="/pages/incident/upload-log"element={<IncidentUploadLog />}/>
      <Route path="/pages/incident/details" element={<IncidentDetails />} />
      <Route path="/pages/incident/log/file-download" element={<IncidentFileDownload />} />   
      <Route path="/pages/incident/log/upload-log" element={<IncidentUploadLog />}  />

      <Route path="/incident/log/case-details/:id" element={<CaseDetails />} />
      <Route path="/case-list" element={<CaseList />} />
      
      
     { /*<Route path="/pages/incident/details" element={<IncidentDetails />} />
         <Route path="/pages/incident/log/details" element={<IncidentDetails />} />
         <Route path="/incident/log/open-pending-cases" element={<OpenPendingCases />} />
         <Route path="/incident/log/open-pending-cases"element={<OpenPendingCases />}/>
         <Route path="/incident/log/case-list" element={<CaseList />} />
         <Route path="/incident/log/welcome" element={<Welcome />} />
         <Route path="/incident/log/rejectincidents" element={<RejectIncidents />} />
         <Route path="/incident/log/rejectincidents" element={<RejectIncidents />}/>
     */}



       {/* DRC UI routes */}
      <Route path="/drc/mediation-board" element={<MediationBoard />} />
      <Route path="/drc/period-extension" element={<PeriodExtensionApproval />} />
      <Route path="/drc/log" element={<DRCLog />} />
      <Route path="/drc/assigned-DRC-log" element={<AssignedDRCLog />} />
      <Route path="/drc/re-assign-DRC" element={<ReAssignDRC />} />
      <Route path="/drc/assigndrc" element={<AssignDRC />} />
      <Route path="/drc/drcapproval" element={<DRCApproval />} />
      <Route path="/drc/pending" element={<Pending />} />
      <Route path="/drc/MediationBoardSendingRequests" element={<MediationBoardSendingRequests />} />
      <Route path="/drs/MediationBoardAccept" element={<MediationBoardAccept />} />
      <Route path="/drs/MediationBoardResponseLog" element={<MediationBoardResponseLog />} />
      <Route path="/drs/logs" element={<Logs />} />
      <Route path="/drc/case-list" element={<DRCcaseList/>} />

      <Route path="/lod/ftl-list" element={<FtlLodList />} />
      <Route path="/lod/ftl-log" element={<FtlLodLog />} />
      <Route path="/lod/litigation" element={<Litigation />} />
      <Route path="/lod/ftl_lod/litigation/LitigationLog" element={<LitigationLog />} />
      <Route path="/lod/ftl_lod/litigation/PostLitigationLog" element={<PostLitigationLog />} />
      <Route path="/lod/ftl_lod/litigation/LitigationSubmission" element={<LitigationSubmission />} />
      <Route path="/lod/ftl_lod/litigation/LitigationPage" element={<LitigationPage />} />
      <Route path="/lod/digital-signature-log" element={<LODLog />} />
      <Route path="/lod/final-reminder-log" element={<FinalReminderLog />} />
      <Route path="/lod/ftllod/ftllod/list/listlodsubmission" element={<ListLOdSubmission />} />
      <Route path="/lod/ftllod/ftllod/list/listofsubmittedcases" element={<ListLOdSubmitedCases />} />
      <Route path="/settlement/adjustments" element={<Adjustments />} />
      <Route path="/pages/incident/log/details" element={<IncidentDetails />} />
      <Route path="/pages/incident/log/file-download" element={<IncidentFileDownload />} />
      <Route path="/pages/incident/log/upload-log" element={<IncidentUploadLog />} />
      <Route path="/incident/log/case-details" element={<CaseDetails />} />
      <Route path="/incident/log/case-list" element={<CaseList />} />
      <Route path="/incident/log/welcome" element={<Welcome />} />
      <Route path="/incident/log/open-pending-cases" element={<OpenPendingCases />} />
      <Route path="/drc/CR_Update_LOD" element={<CR_Update_LOD />} />
      <Route path="/drc/CR_Update" element={<CR_Update />} />
      <Route path="/drc/CR_Update_FR" element={<CR_Update_FR />} />
      <Route path="/drc/Dispute_Log" element={<Dispute_Log />} />
      <Route path="/drc/Dispute_Submission" element={<Dispute_Submission />} />
      <Route path="/drc/F2" element={<F2 />} />
      <Route path="/drc/FR_Creation" element={<FR_Creation />} />
      <Route path="/drc/LOD_Creation" element={<LOD_Creation />} />
      <Route path="/drc/Post_Dispute_Log" element={<Post_Dispute_Log />} />
      <Route path="/drc/Sup_FR_Log" element={<Sup_FR_Log />} />
      <Route path="/drc/Sup_LOD_Log" element={<Sup_LOD_Log />} />

      <Route path="/drc/mediation-board" element={<MediationBoard />} />
      <Route path="/drc/log" element={<DRCLog />} />

      <Route path="/drc/CR_Update_LOD" element={< CR_Update_LOD/>} />
      <Route path="/drc/CR_Update" element={< CR_Update/>} />
      <Route path="/drc/CR_Update_FR" element={< CR_Update_FR/>} />
      <Route path="/drc/Dispute_Log" element={< Dispute_Log/>} />
      <Route path="/drc/Dispute_Submission" element={< Dispute_Submission/>} />
      <Route path="/drc/FR_Creation" element={< FR_Creation/>} />
      <Route path="/drc/LOD_Creation" element={< LOD_Creation/>} />
      <Route path="/drc/Post_Dispute_Log" element={< Post_Dispute_Log/>} />
      <Route path="/drc/Sup_FR_Log" element={< Sup_FR_Log/>} />
      <Route path="/drc/Sup_LOD_Log" element={< Sup_LOD_Log/>} />



       {/* lod UI routes */}
      <Route path="/lod/ftl-list" element={<FtlLodList />} />
      <Route path="/lod/ftl-log" element={<FtlLodLog />} />
      <Route path="/lod/litigation" element={<Litigation />} />
      <Route path="/lod/digital-signature-log" element={<LODLog />} />
      <Route path="/lod/final-reminder-log" element={<FinalReminderLog />} />
      <Route path="/lod/ftl-log/preview" element={<LODPreview />} />
      <Route path="/lod/ftllod/ftllod/downloadcreateftllod" element={<DownloadLOD />} />

      {/* settlement UI routes */}
      <Route path="/settlement/adjustments" element={<Adjustments />} />
        

    </Routes>
  );
}

export default Routers;
