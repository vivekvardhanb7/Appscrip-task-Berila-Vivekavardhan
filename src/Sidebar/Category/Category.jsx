import React, { useState } from 'react';
import './Category.css';
import Input from "../../components/Input";

function Category({ handleChange }) {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const toggleShowAllCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  return (
    <div className='category'>
      <h2 className="sidebar-title">CATEGORY</h2>

      <button className="category-button" onClick={toggleShowAllCategories}>
        {showAllCategories ? 'Hide Categories' : 'Show All Categories'}
      </button>

      {showAllCategories && (
        <div className="category-dropdown">
          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test" />
            <span className="checkmark"></span>All
          </label>
          <Input
            handleChange={handleChange}
            value="sneakers"
            title="Sneakers"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="flats"
            title="Flats"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="sandals"
            title="Sandals"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="heels"
            title="Heels"
            name="test"
          />
        </div>
      )}
    </div>
  );
}

export default Category;
