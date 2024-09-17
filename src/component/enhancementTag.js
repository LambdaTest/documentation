const React = require('react');

export default function EnhancementTag({ value, color, bgColor }) {
    return (
        <span className='enhancementColor'>
            {value}
        </span>
    )
}
