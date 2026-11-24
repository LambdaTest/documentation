import React from 'react';
import Link from '@theme-original/DocSidebarItem/Link';
import AiIcon from '../AiIcon';

export default function LinkWrapper(props) {
  const hasAiIcon = props?.item?.customProps?.icon === 'ai';
  const beta = props?.item?.customProps?.beta;
  if (!beta && !hasAiIcon) {
    return <Link {...props} />;
  }
  const originalLabel = props.item.label;
  const labelWithBadge = (
    <>
      {originalLabel}
      {hasAiIcon && <AiIcon />}
      {beta && (
        <span className="newTagColor" style={{ marginLeft: '6px', verticalAlign: 'middle' }}>
          Beta
        </span>
      )}
    </>
  );
  return <Link {...props} item={{ ...props.item, label: labelWithBadge }} />;
}
