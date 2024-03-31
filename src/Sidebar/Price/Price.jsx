import React, { useState } from 'react';
import './Price.css';
import Input from "../../components/Input";

const Price = ({ handleChange }) => {
  const [showAllPrices, setShowAllPrices] = useState(false);

  const toggleShowAllPrices = () => {
    setShowAllPrices(!showAllPrices);
  };

  return (
    <div className="price">
      <h2 className="sidebar-title price-title">SEGMENT</h2>

      {/* Toggle button */}
      <button className="price-button" onClick={toggleShowAllPrices}>
        {showAllPrices ? 'Hide Prices' : 'Show All Prices'}
      </button>

      {/* Dropdown container */}
      <div className="price-dropdown">
        {/* Individual price options */}
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={50}
          title="$0 - 50"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="$100 - $150"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Price;
