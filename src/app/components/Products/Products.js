import React, { useState } from 'react';
import './Products.css';
import { useEffect } from 'react';

function  Products({ products, filterFlag }) {
  const [selectedCategories, setSelectedCategories] = useState([])
   const [selectedRatings, setSelectedRatings] = useState([]);

  const clearFilters = () => {
  setSelectedCategories([]);
};

  const toggle = (categoryName) =>{
    setSelectedCategories(prev => selectedCategories.includes(categoryName) ? prev.filter(c => c !== categoryName) : [...prev, categoryName])
  }
  const toggleRating = (ratingValue) => {
  setSelectedRatings((prev) =>
    prev.includes(ratingValue)
      ? prev.filter((r) => r !== ratingValue)
      : [...prev, ratingValue]
  );
};
  const itemsToDisplay = Array.isArray(products)
  ? products.filter((p) => {
      const categoryMatch =
        selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const ratingMatch =
        selectedRatings.length === 0 || selectedRatings.some((r) => p.rating?.rate >= r);
      return categoryMatch && ratingMatch;
    })
  : [];
  
  return (
    <div className="products-wrapper">
      {filterFlag && (
        <div className="filter-tab">
          <h2>Filters</h2>
          <div>
          <h5>Category</h5>
            <label>
              <input
                type="checkbox"
                checked={selectedCategories.includes("men's clothing")}
                onChange={() => toggle("men's clothing")}
                />
                  Men's Clothing
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedCategories.includes("jewelery")}
                onChange={() => toggle("jewelery")}
              />
              Jewelery
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedCategories.includes("electronics")}
                onChange={() => toggle("electronics")}
              />
              Electronics
            </label>
            {selectedCategories.length > 0 && (
                <div>
                  <button onClick={clearFilters}>Clear All Filters</button>
                </div>
              )}
          </div>
          <div>
           <h5>Rating</h5>
          <label>
            <input
              type="checkbox"
              checked={selectedRatings.includes(4)}
              onChange={() => toggleRating(4)}
            />
            4 stars & above
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedRatings.includes(3)}
              onChange={() => toggleRating(3)}
            />
            3 stars & above
          </label>
          {selectedRatings.length > 0 && (
            <div>
              <button onClick={() => setSelectedRatings([])}>Clear Rating Filters</button>
            </div>
          )}
          </div>
        </div>
      )}

      <div className="grid-container">

          {Array.isArray(itemsToDisplay) ? (
            itemsToDisplay.map((product) => (
              <div className="grid-item" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>Signup or login to see the price</p>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
      </div>
    </div>
  );
}

export default Products;
