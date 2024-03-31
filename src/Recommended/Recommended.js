import React, { useState } from "react";
import "./Recommended.css";
import Sidebar from "../Sidebar/Sidebar";

const Recommended = ({ toggleSidebarVisibility, handleClick }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [showFilterText, setShowFilterText] = useState("SHOWFILTER");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
    setShowFilterText(isSidebarVisible ? "> SHOWFILTER" : "< HIDEFILTER");
    toggleSidebarVisibility(); // Call the toggleSidebarVisibility function passed as prop
  };

  return (
    <>
      <div className="recommended-container">
        <div className="left-section">
          <span className="item-count">3425 ITEMS</span>
          <div className="show-filter" onClick={toggleSidebar}>
            <u>{showFilterText}</u>
          </div>
        </div>
        <div className="right-section">
          <div className="recommended-flex">
            <select
              className="recommended-dropdown"
              onChange={handleSelectChange}
              value={selectedOption}
            >
              <option value="">RECOMMENDED</option>
              <option value="Nike">NEWEST FIRST</option>
              <option value="Adidas">POPULAR</option>
              <option value="Puma">PRICE : HIGH TO LOW</option>
              <option value="Vans">PRICE : LOW TO HIGH</option>
            </select>
            <span className="dropdown-arrow">▼</span>
          </div>
        </div>
      </div>
      {isSidebarVisible && <Sidebar />}
    </>
  );
};

export default Recommended;
