const React = require('react');

export default function NewTag({ value, color, bgColor }) {
    return (
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
    )
}
