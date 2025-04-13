// import React, { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import ToolsSection from './ToolsSection';

// const ToolsDropdown = () => {
//   const [showToolsSection, setShowToolsSection] = useState(false);
//   const dropdownRef = useRef(null);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowToolsSection(false);
//       }
//     };

//     if (showToolsSection) {
//       document.addEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [showToolsSection]);

//   const toggleSubMenu = (e) => {
//     e.preventDefault();
//     setShowToolsSection(!showToolsSection);
//   };

//   return (
//     <li className="dropdown megamenu-fw" ref={dropdownRef}>
//       <Link
//         to="#"
//         className="dropdown-toggle"
//         onClick={toggleSubMenu}
//       >
//         Tools
//       </Link>
//       {showToolsSection && (
//         <div className="dropdown-menu megamenu-content">
//           <ToolsSection />
//         </div>
//       )}
//     </li>
//   );
// };

// export default ToolsDropdown;

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const ToolsSection = () => {
  // Your existing ToolsSection component
  const [activeTab, setActiveTab] = useState("frequentlyUsed");

  const tools = {
    frequentlyUsed: [
      { id: "websiteScanner", name: "Website Scanner", icon: "🕷️" },
      { id: "networkScanner", name: "Network Scanner", icon: "N" },
      { id: "subdomainFinder", name: "Subdomain Finder", icon: "🔍" },
      { id: "portScanner", name: "Port Scanner", icon: "👁️" },
    ],
    reconTools: [
      { id: "dnsEnum", name: "DNS Enumeration", icon: "D" },
      { id: "whois", name: "WHOIS Lookup", icon: "W" },
    ],
    vulnerabilityScanners: [
      { id: "sqlInjection", name: "SQL Injection", icon: "S" },
      { id: "xssScanner", name: "XSS Scanner", icon: "X" },
    ],
  };

  const categories = [
    { id: "frequentlyUsed", name: "Frequently used" },
    { id: "reconTools", name: "Recon tools" },
    { id: "vulnerabilityScanners", name: "Vulnerability scanners" },
  ];

  return (
    <div className="tools-section">
      <div className="tools-sidebar">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`sidebar-item ${
              activeTab === category.id ? "active" : ""
            }`}
            onClick={() => setActiveTab(category.id)}
          >
            {category.name}
          </div>
        ))}
      </div>
      <div className="tools-content">
        <div className="tools-grid">
          {tools[activeTab].map((tool) => (
            <Link to={`/tool-details/${tool.id}`} key={tool.id} className="tool-card">
              <div className="tool-icon">{tool.icon}</div>
              <div className="tool-name">{tool.name}</div>
              <div className="free-badge">✓</div>
            </Link>
          ))}
        </div>
        <div className="tools-footer">
          <div className="free-version">
            <span className="free-icon">✓</span> try light version for free
          </div>
          <Link to="/all-tools" className="explore-all">
            Explore all 24 tools →
          </Link>
        </div>
      </div>
    </div>
  );
};

const ToolsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <li className="dropdown-container" ref={dropdownRef}>
      <a href="#" className="dropdown-toggle" onClick={toggleDropdown}>
        Tools
      </a>
      {isOpen && (
        <div className="dropdown-content">
          <ToolsSection />
        </div>
      )}
    </li>
  );
};

export default ToolsDropdown;
