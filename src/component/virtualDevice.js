const React = require('react');

export default function VirtualDeviceTag({ value, color, bgColor }) {
    return (
        <span className='virtualDeviceColor'>
            {value}
        </span>
    )
}
