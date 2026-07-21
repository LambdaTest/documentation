import React from 'react';
import Link from '@theme-original/DocSidebarItem/Link';

function AiIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{ flexShrink: 0, marginLeft: '8px', verticalAlign: 'text-bottom' }}
    >
      <path
        fill="#ff6c37"
        d="M12 2l2.09 5.26L19.5 9l-5.41 1.74L12 16l-2.09-5.26L4.5 9l5.41-1.74L12 2z"
      />
      <path
        fill="#ff6c37"
        d="M18.5 14l.95 2.55L22 17.5l-2.55.95L18.5 21l-.95-2.55L15 17.5l2.55-.95L18.5 14z"
      />
    </svg>
  );
}

export default function LinkWrapper(props) {
  const customProps = props?.item?.customProps || {};
  const hasAiIcon = customProps.icon === 'ai';
  const beta = customProps.beta;

  if (!hasAiIcon && !beta) {
    return <Link {...props} />;
  }

  const label = (
    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
      {props.item.label}
      {hasAiIcon && <AiIcon />}
      {beta && (
        <span className="newTagColor" style={{ marginLeft: '6px', verticalAlign: 'middle' }}>
          Beta
        </span>
      )}
    </span>
  );

  return <Link {...props} item={{ ...props.item, label }} />;
}
