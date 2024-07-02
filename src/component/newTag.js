const React = require('react');

export default function NewTag({ value, color, bgColor }) {
    return (
        <span style={{
            backgroundColor: '#FBEFFF',
            color: '#1F2328',
            fontWeight: 'bold',
            fontSize: '12px',
            padding: '4px 8px',
            borderRadius: '20px'
        }}>
            {value}
        </span>
    )
}
