const React = require('react');

export default function VirtualDeviceTag({ value, color, bgColor, solid }) {
    return (
        <span className={solid ? 'virtualDeviceColor virtualDeviceSolid' : 'virtualDeviceColor'}>
            {value}
        </span>
    )
}
