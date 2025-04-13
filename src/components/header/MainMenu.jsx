import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HashLink as Link } from "react-router-hash-link";
import ToolsSection from "./ToolsSection";
import ToolsDropdown from "./ToolsDropdown";

const MainMenu = ({ isOpen, closeMenu, toggleSubMenu, toggleMegaMenu }) => {
  const toolCategories = [
    {
      id: "recon",
      name: "Recon tools",
      tools: [
        {
          id: "website",
          name: "Website Scanner",
          icon: "🕷️",
          color: "#f8b26a",
        },
        { id: "network", name: "Network Scanner", icon: "N", color: "#f8b26a" },
        {
          id: "subdomain",
          name: "Subdomain Finder",
          icon: "🔍",
          color: "#7dd3fc",
        },
        { id: "port", name: "Port Scanner", icon: "👁️", color: "#7dd3fc" },
      ],
    },
    {
      id: "vulnerability",
      name: "Vulnerability scanners",
      tools: [
        { id: "url", name: "URL Fuzzer", icon: "//", color: "#7dd3fc" },
        {
          id: "wordpress",
          name: "WordPress Scanner",
          icon: "W",
          color: "#f8b26a",
        },
      ],
    },
    {
      id: "exploit",
      name: "Exploit tools",
      tools: [
        { id: "sql", name: "SQL Injector", icon: "💉", color: "#7dd3fc" },
        { id: "xss", name: "XSS Tester", icon: "X", color: "#f8b26a" },
      ],
    },
  ];

  // State to track the active category
  const [activeCategory, setActiveCategory] = useState("recon");

  return (
    <>
      <div
        className={`collapse navbar-collapse collapse-mobile ${
          isOpen ? "show" : ""
        }`}
        id="navbar-menu"
      >
        <img src="/img/logo/logo.png" alt="Logo" />
        <button type="button" className="navbar-toggle" onClick={closeMenu}>
          <i className="fa-solid fa-times"></i>
        </button>
        <ul className="nav navbar-nav navbar-center">
          {/* <li className="dropdown">
            <Link
              to={void 0}
              className="dropdown-toggle active"
              onClick={toggleSubMenu}
            >
              Home
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/#">Creative Agency</Link>
              </li>
              <li>
                <Link to="/home-2#">Digital Agency</Link>
              </li>
              <li>
                <Link to="/home-3#">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/business#">Consulting Business</Link>
              </li>
              <li className="dropdown">
                <Link
                  to={void 0}
                  className="dropdown-toggle"
                  onClick={toggleSubMenu}
                >
                  Home Dark Version
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/home-1-dark#">Creative Agency</Link>
                  </li>
                  <li>
                    <Link to="/home-2-dark#">Digital Agency</Link>
                  </li>
                  <li>
                    <Link to="/home-3-dark#">Digital Marketing</Link>
                  </li>
                  <li>
                    <Link to="/business-dark#">Consulting Business</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li> */}
          <li>
            {/* <Link to="/home-3-dark#">Home</Link> */}
            <Link to="/#home">Home</Link>
          </li>
          {/* <li className="dropdown megamenu-fw">
            <Link
              to={void 0}
              className="dropdown-toggle"
              onClick={toggleSubMenu}
            >
              Tools
            </Link>
            <div className="dropdown-menu megamenu-content">
              <div className="bg-gray-50 p-4 rounded-lg w-full max-w-6xl mx-auto shadow-sm">
              
                <div className="mb-6">
                  <div className="bg-blue-50 text-blue-600 font-medium py-3 px-6 rounded-full inline-block mb-4">
                    Frequently used
                  </div>
                </div>

      
                <div className="mb-6">
                  {toolCategories.map((category) => (
                    <button
                      key={category.id}
                      className={`text-left py-3 block w-full text-gray-700 font-medium border-l-4 ${
                        activeCategory === category.id
                          ? "border-blue-500 font-semibold"
                          : "border-transparent"
                      } pl-4 mb-2 hover:bg-gray-100 transition-all`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>

        
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {toolCategories
                    .find((cat) => cat.id === activeCategory)
                    ?.tools.map((tool) => (
                      <div key={tool.id} className="relative group">
                        <div
                          className="flex flex-col items-center justify-center h-32 rounded-lg shadow-sm hover:shadow-md transition-all"
                          style={{ backgroundColor: tool.color + "20" }} // Adding transparency to the color
                        >
                          <div
                            className="w-12 h-12 rounded-lg flex items-center justify-center text-white mb-2 text-xl"
                            style={{ backgroundColor: tool.color }}
                          >
                            {tool.icon}
                          </div>
                          <span className="text-sm font-medium">
                            {tool.name}
                          </span>
                        </div>
                        <div className="absolute -top-1 -right-1">
                          <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center text-white text-xs">
                            <span>✓</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center text-green-500">
                    <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center text-white text-xs mr-2">
                      <span>✓</span>
                    </div>
                    try light version for free
                  </div>
                  <a
                    href="#"
                    className="text-gray-700 flex items-center hover:text-blue-600"
                  >
                    Explore all 24 tools
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </li> */}

          {/* <li className="dropdown megamenu-fw">
            <Link
              to={void 0}
              className="dropdown-toggle"
              onClick={toggleSubMenu}
            >
              Tools
            </Link>
            <ToolsSection />
          </li> */}

          <ToolsDropdown />

          {/* <li className="dropdown">
            <Link
              to={void 0}
              className="dropdown-toggle"
              onClick={toggleSubMenu}
            >
              Services
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/services-details#">Marketing Strategy</Link>
              </li>
              <li>
                <Link to="/services-details#">Enterprise Consulting</Link>
              </li>
              <li>
                <Link to="/services-details#">Growth Tracking</Link>
              </li>
              <li>
                <Link to="/services-details#">Social Media Marketing</Link>
              </li>
              <li>
                <Link to="/services-details#">Keyword Research</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link
              to={void 0}
              className="dropdown-toggle"
              onClick={toggleSubMenu}
            >
              Blog
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/blog-standard#">Blog Standard</Link>
              </li>
              <li>
                <Link to="/blog-with-sidebar#">Blog With Sidebar</Link>
              </li>
              <li>
                <Link to="/blog-2-column#">Blog Grid Two Column</Link>
              </li>
              <li>
                <Link to="/blog-3-column#">Blog Grid Three Column</Link>
              </li>
              <li>
                <Link to="/blog-single#">Blog Single</Link>
              </li>
              <li>
                <Link to="/blog-single-sidebar#">Blog Single With Sidebar</Link>
              </li>
            </ul>
          </li> */}
          <li>
            <Link to="/#whyus">Why Web Scanner</Link>
          </li>
          <li>
            <Link to="/#features">Services</Link>
          </li>
          <li>
            <Link to="/#pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/#contact">Contact us</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MainMenu;
