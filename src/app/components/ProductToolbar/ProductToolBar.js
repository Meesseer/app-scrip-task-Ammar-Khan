import React, { useState } from 'react';
import './ProductToolBar.css';

function ProductToolBar( { products, filterFlag, setFilterFlag} ) {
  const [recommendedFlag, setrecommendedFlag] = useState(false);

  const toggleFilter = () => {
    setFilterFlag((prev) => !prev);
  };

  const toggleRecommended = () => {
    setrecommendedFlag((prev) => !prev);
  };

  return (
    <div className='tool-bar'>
      <div className='tool-border'></div>
      <div className='tool-content'>
        <h6>{products.length-1} ITEMS</h6>

        <div className='filter-section' onClick={toggleFilter} style={{ cursor: 'pointer' }}>
          <i className={`arrow ${filterFlag ? 'left' : 'right'}`}></i>
          <span className='filter-text'>
            {filterFlag ? 'Hide Filter' : 'Show Filter'}
          </span>
        </div>

        <div className='suggestion-section' onClick={toggleRecommended} style={{ cursor: 'pointer' }}>
          <span className='suggestion-text'>RECOMMENDED</span>
          <i className={`arrow ${recommendedFlag ? 'up' : 'down'}`}></i>
          {recommendedFlag && (
            <div className='dropdown-menu'>
              <ul>
                <li>Recommended</li>
                <li>Newest First</li>
                <li>Popular</li>
                <li>Price: High to Low</li>
                <li>Price: Low to High</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className='tool-border'></div>
    </div>
  );
}

export default ProductToolBar;
