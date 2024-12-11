import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Routers from "../router/Routers";
import CaseList from "../pages/incident/log/CaseList";
import CaseDetails from "../pages/incident/log/CaseDetails";

const Layout = () => {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  return (
    <div className="relative min-h-screen bg-fixed bg-cover bg-center">
      <div
        className="absolute inset-0 bg-black opacity-30"
        style={{
          backgroundImage: `url('/src/assets/images/bg.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative flex z-10">
        <Sidebar onHoverChange={setIsSidebarHovered} />
        <div
          className={`transition-all duration-500`}
          style={{
            marginLeft: isSidebarHovered ? "16rem" : "5rem",
            width: isSidebarHovered ? "calc(100% - 16rem)" : "calc(100% - 5rem)",
          }}
        >
          <Navbar />
          
          <div className="p-20">
            <Routers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
