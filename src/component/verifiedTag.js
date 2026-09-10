const React = require('react');

export default function VerifiedTag({ value = 'Verified' }) {
    return (
        <span className='verifiedTagColor'>
            <svg className='verifiedTagIcon' width='12' height='12' viewBox='0 0 16 16' fill='none' aria-hidden='true'>
                <path d='M13.5 4.5L6.5 11.5L2.5 7.5' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'/>
            </svg>
            {value}
        </span>
    )
}
