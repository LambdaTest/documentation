const React = require('react');

export default function BugFixTag({ value, color, bgColor }) {
    return (
        <span className='bugFixTagColor'>
            {value}
        </span>
    )
}
