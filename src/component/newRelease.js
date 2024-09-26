const React = require('react');

export default function NewReleaseTag({ value, color, bgColor }) {
    return (
        <span className='newReleaseColor'>
            {value}
        </span>
    )
}
