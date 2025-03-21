const React = require('react');

export default function IOSDeviceTag({ value, color, bgColor }) {
    return (
        <span className='iosDeviceColor'>
            {value}
        </span>
    )
}
