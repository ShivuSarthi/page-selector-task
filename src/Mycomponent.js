import React, { useState } from "react";
import "./MyComponent.css";

const MyComponent = () => {
  const [allSelected, setAllSelected] = useState(false);
  const [selectedPages, setSelectedPages] = useState({
    page1: false,
    page2: false,
    page3: false,
    page4: false
  });

  const handleAllChange = () => {
    const newValue = !allSelected;
    setAllSelected(newValue);
    setSelectedPages({
      page1: newValue,
      page2: newValue,
      page3: newValue,
      page4: newValue
    });
  };

  const handlePageChange = (page) => {
    setSelectedPages((prev) => ({
      ...prev,
      [page]: !prev[page]
    }));
  };

  const handleDone = () => {
    const selected = Object.keys(selectedPages)
      .filter((page) => selectedPages[page])
      .map((page) => page.replace("page", "Page "));
    alert(`Selected Pages: ${selected.join(", ")}`);
  };

  return (
    <div className="page-selector">
      <div className="page-selector-header">
        <label>
          All pages
          <input
            type="checkbox"
            checked={allSelected}
            onChange={handleAllChange}
          />
        </label>
      </div>
      <div className="page-selector-list">
        {Object.keys(selectedPages).map((page, index) => (
          <label key={index}>
            Page {index + 1}
            <input
              type="checkbox"
              checked={selectedPages[page]}
              onChange={() => handlePageChange(page)}
            />
          </label>
        ))}
      </div>
      <button className="page-selector-button" onClick={handleDone}>
        Done
      </button>
    </div>
  );
};

export default MyComponent;
