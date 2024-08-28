import React from 'react';

const DocCard = ({ heading, link }) => {
  const cardStyle = {
    width: '48%', // Each card will take up approximately 50% of the width (with some margin)
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textDecoration: 'none',
    color: 'black',
    margin: '10px', // Margin to create spacing between cards
    transition: 'box-shadow 0.3s ease',
    boxSizing: 'border-box', // Ensures padding is included in the width
  };

  return (
    <div style={cardStyle}>
      <a href={link} >
        <h3>{heading}</h3>
      </a>
    </div>
  );
};

export default DocCard;
