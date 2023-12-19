const React = require('react');

const NewTag = ({ value, color, bgColor }) => (
    <span style={{
        backgroundColor: bgColor,
        color: color,
        fontWeight: 'bold',
        fontSize: '12px',
        padding: '4px 8px',
        borderRadius: '20px'
    }}>
        {value}
    </span>
);

module.exports = NewTag;
