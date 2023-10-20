import React, { useState } from "react";
import "./ImageList.css";

const ImageList = ({ images }) => {
  const perPageItems = 10;   
  const allPages = 5;
  const [currentPage, setCurrentPage] = useState(1);

  //function for Previous Page
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  //function for Next Page
  const handleNext = () => {
    if (currentPage < allPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  //logic for images load in per pages
  const startIndex = (currentPage - 1) * perPageItems;
  const endIndex = startIndex + perPageItems;

  const imagesToDisplay = images.slice(startIndex, endIndex);

  return (
    <div>
      //image display
      <div className="container">
        {imagesToDisplay.map((image) => (
          <img src={image.src.medium} alt={image.alt_description}
            className="main"
            key={image.id}
          />
          
        ))}

      </div>

      <div className="btn">

        <button onClick={handlePrev} disabled={currentPage === 1}>
          Previous Page</button>

        <span style={{color:'white'}}>Page {currentPage}</span>

        <button
          onClick={handleNext}
          disabled={currentPage === allPages || endIndex >= images.length}
        >
          Next Page</button>

      </div>
    </div>
  );
};

export default ImageList;
