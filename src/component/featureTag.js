const React = require('react');

export default function FeatureTag({ value, color, bgColor }) {
    return (
        <span className='featureColor'>
            {value}
        </span>
    )
}
