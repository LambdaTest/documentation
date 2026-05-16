import React from 'react';

const DocCard = ({ heading, link, description }) => {
  const cardStyle = {
    width: '100%',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textDecoration: 'none',
    color: 'black',
    transition: 'box-shadow 0.3s ease',
    boxSizing: 'border-box',
  };

  const descStyle = {
    fontSize: '14px',
    color: '#666',
    marginTop: '8px',
    lineHeight: '1.5',
  };

  return (
    <div style={cardStyle}>
      <a href={link}>
        <h3>{heading}</h3>
      </a>
      {description && <p style={descStyle}>{description}</p>}
    </div>
  );
};

export default DocCard;
