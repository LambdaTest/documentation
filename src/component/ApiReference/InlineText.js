import React, { useMemo } from 'react';

/**
 * Renders text with simple markdown formatting:
 * - `backticks` become inline code
 * - **asterisks** become bold text
 *
 * Limitations:
 * - Does not support nested patterns
 * - Other markdown (links, italic, etc.) not supported
 */
export default function InlineText({ text }) {
  const parts = useMemo(() => {
    if (!text) return null;
    return text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
  }, [text]);

  if (!parts) return null;

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('`') && part.endsWith('`')) {
          return (
            <code
              key={i}
              style={{
                background: 'var(--ifm-color-emphasis-100)',
                border: '1px solid var(--ifm-color-emphasis-200)',
                borderRadius: '4px',
                padding: '1px 5px',
                fontSize: '12px',
                fontFamily: 'monospace',
                color: 'var(--ifm-color-emphasis-700)',
              }}
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
