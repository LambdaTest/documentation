import React from 'react';

const METHOD_COLORS = {
  GET: '#2AB673',
  POST: '#0070F3',
  PUT: '#F5A623',
  DELETE: '#E5484D',
  DEL: '#E5484D',
  PATCH: '#8E4EC6',
};

export default function MethodBadge({ method, small }) {
  const color = METHOD_COLORS[method.toUpperCase()] || '#999';
  const label = method.toUpperCase() === 'DELETE' ? 'DEL' : method.toUpperCase();

  const size = small
    ? { padding: '2px 4px', fontSize: '8.8px', borderRadius: '6px' }
    : { padding: '4px 10px', fontSize: '12px', borderRadius: '14px' };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...size,
        backgroundColor: color,
        color: '#FFFFFF',
        fontWeight: 700,
        fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, sans-serif",
        lineHeight: 1.2,
        letterSpacing: '0.3px',
        flexShrink: 0,
        textAlign: 'center',
        textTransform: 'uppercase',
      }}
    >
      {label}
    </span>
  );
}
