const React = require('react');

export default function NewTag({ value, color, bgColor }) {
    return (
        <span className='newTagColor'>
            {value}
        </span>
    )
}
