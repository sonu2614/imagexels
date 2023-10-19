import React, { useState } from "react";
import "./ImageList.css";

const ImageList = ({ images }) => {
  const itemsPerPage = 10;
  const totalPages = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const imagesToDisplay = images.slice(startIndex, endIndex);

  return (
    <div>
      <div className="container">
        {imagesToDisplay.map((image) => (
          <img src={image.urls.small} alt={image.alt_description}
            className="main"
            key={image.id}
          />
        ))}
      </div>

      <div className="pagination">

        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous Page</button>

        <span>Page {currentPage}</span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages || endIndex >= images.length}
        >
          Next Page</button>

      </div>
    </div>
  );
};

export default ImageList;
