import React from 'react';
import Link from '@theme-original/DocSidebarItem/Link';

export default function LinkWrapper(props) {
  const beta = props?.item?.customProps?.beta;
  if (!beta) {
    return <Link {...props} />;
  }
  const originalLabel = props.item.label;
  const labelWithBadge = (
    <>
      {originalLabel}
      <span className="newTagColor" style={{ marginLeft: '6px', verticalAlign: 'middle' }}>
        Beta
      </span>
    </>
  );
  return <Link {...props} item={{ ...props.item, label: labelWithBadge }} />;
}
