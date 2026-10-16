import React from 'react';
import Category from '@theme-original/DocSidebarItem/Category';
import AiIcon from '../AiIcon';

const ICONS = {
  ai: AiIcon,
};

export default function CategoryWrapper(props) {
  const iconKey = props?.item?.customProps?.icon;
  const Icon = iconKey && ICONS[iconKey];
  if (!Icon) {
    return <Category {...props} />;
  }
  const labelWithIcon = (
    <>
      {props.item.label}
      <Icon />
    </>
  );
  return <Category {...props} item={{ ...props.item, label: labelWithIcon }} />;
}
