const React = require('react');

export default function RealDeviceTag({ value, color, bgColor, solid }) {
    return (
        <span className={solid ? 'realDeviceColor realDeviceSolid' : 'realDeviceColor'}>
            {value}
        </span>
    )
}
