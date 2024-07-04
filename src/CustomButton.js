import React from 'react';
import './CustomButton.css';  // Import the CSS file for styling

const CustomButton = ({ onClick, label }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default CustomButton;
