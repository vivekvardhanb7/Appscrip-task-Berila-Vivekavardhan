import React, { useState } from 'react';
import './Fabric.css';

function Fabric({ handleChange }) {
  const [showAllFabrics, setShowAllFabrics] = useState(false);

  const toggleShowAllFabrics = () => {
    setShowAllFabrics(!showAllFabrics);
  };

  return (
    <div className='fabric'>
      <h2 className="sidebar-title">Fabric</h2>

      {/* Toggle button */}
      <button className="fabric-button" onClick={toggleShowAllFabrics}>
        {showAllFabrics ? 'Hide Fabrics' : 'Show All Fabrics'}
      </button>

      {/* Fabric dropdown */}
      {showAllFabrics && (
        <div>
          <select
            id="fabric-dropdown"
            onChange={handleChange}
            name="fabric"
          >
            <option value="">All</option>
            <option value="cotton">Cotton</option>
            <option value="polyester">Polyester</option>
            <option value="silk">Silk</option>
            <option value="wool">Wool</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default Fabric;
