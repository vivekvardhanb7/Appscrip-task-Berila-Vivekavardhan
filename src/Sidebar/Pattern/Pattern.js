
import React, { useState } from 'react';
import './Patern.css';

function Pattern({ handleChange }) {
  const [showAllPatterns, setShowAllPatterns] = useState(false);

  const toggleShowAllPatterns = () => {
    setShowAllPatterns(!showAllPatterns);
  };

  return (
    <div className='pat'>
      <h2 className="sidebar-title">Pattern</h2>

      <button className="pattern-button" onClick={toggleShowAllPatterns}>
        {showAllPatterns ? 'Hide Patterns' : 'Show All Patterns'}
      </button>

      {showAllPatterns && (
        <div>
          <select
            id="pattern-dropdown"
            onChange={handleChange}
            name="pattern"
          >
            <option value="">All</option>
            <option value="stripes">Stripes</option>
            <option value="checks">Checks</option>
            <option value="floral">Floral</option>
            <option value="geometric">Geometric</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default Pattern;
