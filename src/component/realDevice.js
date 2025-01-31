const React = require('react');

export default function RealDeviceTag({ value, color, bgColor }) {
    return (
        <span className='realDeviceColor'>
            {value}
        </span>
    )
}
