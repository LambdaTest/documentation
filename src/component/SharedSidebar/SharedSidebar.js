import React from 'react';

const TOP_LINKS = [
  {
    label: 'Status',
    href: 'https://status.lambdatest.io/',
    icon: 'https://d3gk2c5xim1je2.cloudfront.net/v7.1.0/solid/signal.svg',
  },
  {
    label: 'Community',
    href: 'https://community.lambdatest.com/',
    icon: 'https://d3gk2c5xim1je2.cloudfront.net/v7.1.0/solid/users.svg',
  },
  {
    label: 'Blog',
    href: 'https://www.lambdatest.com/blog/',
    icon: 'https://d3gk2c5xim1je2.cloudfront.net/v7.1.0/solid/newspaper.svg',
  },
];

function MaskIcon({ url }) {
  return (
    <svg
      className="h-4 w-4 secondary-opacity bg-gray-400 dark:bg-gray-500 group-hover:bg-gray-900 dark:group-hover:bg-gray-300"
      style={{
        WebkitMaskImage: `url(${url})`,
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskImage: `url(${url})`,
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
      }}
    />
  );
}

export default function SharedSidebar({ children }) {
  return (
    <aside
      id="sidebar-content"
      className="hidden sticky shrink-0 w-[18rem] lg:flex flex-col left-0 top-[7rem] bottom-0 right-auto border-r border-gray-100 dark:border-white/10 transition-transform duration-100"
      style={{ top: '6rem', height: 'calc(100vh - 6rem)' }}
    >
      <div
        className="flex-1 pl-4 pr-5 pt-5 pb-4 overflow-y-auto stable-scrollbar-gutter"
        id="navigation-items"
        style={{ maskImage: 'linear-gradient(transparent, black 32px)' }}
      >
        <div className="text-sm relative">
          <div className="pl-2" />
          <ul className="list-none pl-0 m-0">
            {TOP_LINKS.map(({ label, href, icon }) => (
              <li key={label} className="list-none">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline hover:no-underline nav-anchor pl-4 group flex items-center lg:text-sm lg:leading-6 mb-3 gap-3.5 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <MaskIcon url={icon} />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
          {children && (
            <div>{children}</div>
          )}
        </div>
      </div>
    </aside>
  );
}
