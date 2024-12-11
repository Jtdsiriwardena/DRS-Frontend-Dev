import { Link, useLocation } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { IoIosListBox } from "react-icons/io";
import { FaGavel } from "react-icons/fa";
import { MdOutlineMail, MdMonitor } from "react-icons/md";
import profilePic from "../assets/images/profile.jpg";
import { useState, useEffect } from "react";

const Sidebar = ({ onHoverChange }) => {
  const location = useLocation();
  const [hoveredItems, setHoveredItems] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [activePath, setActivePath] = useState([]);

   // Menu structure with nested subtopics
  const menuItems = [
    { icon: MdSpaceDashboard, label: "Dashboard", link: "/", subItems: [] },
    {
      icon: IoIosListBox,
      label: "Incident",
      subItems: [
        {
          label: "Register",
          subItems: [
            { label: "Individual", link: "/incident/register/individual" },
            { label: "Bulk", link: "/incident/register/bulk" },
          ],
        },
        { label: "Log", link: "/incident/log" },
      ],
    },
    {
      icon: FaGavel,
      label: "DRC",
      subItems: [
        { label: "Mediation Board", link: "/drc/mediation-board" },
        { label: "Period Extension", link: "/drc/period-extension" },
        { label: "Log", link: "/drc/log" },
      ],
    },
    {
      icon: MdOutlineMail,
      label: "Letter of Demand",
      subItems: [
        {
          label: "FTL LOD",
          subItems: [
            { label: "List", link: "/lod/ftl-list" },
            { label: "Log", link: "/lod/ftl-log" },
            { label: "Litigation", link: "/lod/litigation" },
          ],
        },
        {
          label: "Digital Signature LOD",
          subItems: [
            { label: "LOD Log", link: "/lod/digital-signature-log" },
            { label: "Final Reminder Log", link: "/lod/final-reminder-log" },
          ],
        },
      ],
    },
    {
      icon: MdMonitor,
      label: "Settlement",
      subItems: [
        {
          label: "Monitor Settlement",
          subItems: [{ label: "Adjustments", link: "/settlement/adjustments" }],
        },
      ],
    },
  ];

   // find the active path based on the current route
  const findActivePath = (items, path) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].link === path) return [i];
      if (items[i].subItems) {
        const subPath = findActivePath(items[i].subItems, path);
        if (subPath) return [i, ...subPath];
      }
    }
    return null;
  };

  // Update the active path whenever the route changes
  useEffect(() => {
    const active = findActivePath(menuItems, location.pathname);
    setActivePath(active || []);
  }, [location.pathname]);

  // Handle hover events at different levels
  const handleHover = (level, index) => {
    const updatedHoveredItems = [...hoveredItems];
    updatedHoveredItems[level] = index;
    updatedHoveredItems.splice(level + 1);
    setHoveredItems(updatedHoveredItems);
  };

  // Recursive function to render nested sub-items
  const renderSubItems = (subItems, level) => {
    return (
      <ul className="ml-8 mt-2 space-y-2">
        {subItems.map((subItem, subIndex) => {
          const isActive = activePath[level] === subIndex && activePath.length === level + 1;
          return (
            <li
              key={subIndex}
              onMouseEnter={() => handleHover(level, subIndex)}
              onMouseLeave={() => handleHover(level, null)}
            >
              <Link
                to={subItem.link || "#"}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition ${
                  isActive ? "bg-blue-300 shadow-lg" : "hover:bg-blue-300"
                }`}
              >
                {subItem.label}
              </Link>
              {hoveredItems[level] === subIndex &&
                subItem.subItems &&
                subItem.subItems.length > 0 && (
                  <div className="ml-4">{renderSubItems(subItem.subItems, level + 1)}</div>
                )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div
      className={`fixed top-20 left-4 h-[calc(100%-6rem)] bg-[#002342] text-white flex flex-col py-10 transition-all duration-500 shadow-lg rounded-2xl font-poppins`}
      onMouseEnter={() => {
        setIsHovered(true);
        onHoverChange(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onHoverChange(false);
      }}
      style={{ width: isHovered ? "16rem" : "5rem" }}
    >
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
          <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
        </div>
        {isHovered && (
          <>
            <h2 className="mt-4 text-lg font-bold">Kamal</h2>
            <p className="text-sm text-blue-300">Manager</p>
          </>
        )}
      </div>

      {/* Menu Items */}
      <ul className="flex flex-col gap-4 px-4">
        {menuItems.map((item, index) => {
          const isActiveMain = activePath[0] === index;
          return (
            <li
              key={index}
              onMouseEnter={() => handleHover(0, index)}
              onMouseLeave={() => handleHover(0, null)}
            >
              <Link
                to={item.link || "#"}
                className={`flex items-center gap-x-4 px-3 py-2 rounded-lg text-base font-medium transition ${
                  isActiveMain ? "bg-blue-400 shadow-lg" : "hover:bg-blue-400"
                }`}
              >
                <item.icon className="w-6 h-6" />
                {isHovered && <span>{item.label}</span>}
              </Link>
              {hoveredItems[0] === index && item.subItems && (
                <div>{renderSubItems(item.subItems, 1)}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
