import React, { useState } from 'react';
import { FiHeart, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import './Nav.css';
import { SiApacheairflow } from 'react-icons/si';

const Nav = ({ handleInputChange, query }) => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav>
      <div className="simple">
        <SiApacheairflow className="icons" />
      </div>
      <div className="headers">
        <h5>SHOP</h5>
        <h5>SKILLS</h5>
        <h5>STORIES</h5>
        <h5>ABOUT</h5>
        <h5>CONTACT US</h5>
      </div>
      <div className="nav-container">
        {showSearch ? (
          <input
            className="search-input"
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder="Enter your search shoes."
          />
        ) : (
          <FiSearch
            className="search-icon"
            onClick={toggleSearch}
            title="Search"
          />
        )}
      </div>
      <div className="profile-container">
        <FiHeart className="nav-icons" />
        <FiShoppingCart className="nav-icons" />
        <FiUser className="nav-icons" />
        
      </div>
      
    </nav>
  );
};

export default Nav;
