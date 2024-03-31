import React, { useState } from 'react';
import './Suitable.css';

function SuitableFor({ handleChange }) {
  const [showAllOptions, setShowAllOptions] = useState(false);

  const toggleShowAllOptions = () => {
    setShowAllOptions(!showAllOptions);
  };

  return (
    <div className='suitable'>
      <h2 className="sidebar-title">Suitable For</h2>

      {/* Toggle button */}
      <button className="suitable-for-button" onClick={toggleShowAllOptions}>
        {showAllOptions ? 'Hide Options' : 'Show All Options'}
      </button>

      {/* Suitable for dropdown */}
      {showAllOptions && (
        <div>
          <select
            id="suitable-for-dropdown"
            onChange={handleChange}
            name="suitableFor"
          >
            <option value="">All</option>
            <option value="formal">Formal Wear</option>
            <option value="casual">Casual Wear</option>
            <option value="sportswear">Sportswear</option>
            <option value="loungewear">Loungewear</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default SuitableFor;
