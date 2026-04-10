import React, { useState } from 'react';

const METHOD_BG = {
  GET: '#2AB673',
  POST: '#0070F3',
  PUT: '#F5A623',
  DELETE: '#E5484D',
  DEL: '#E5484D',
  PATCH: '#8E4EC6',
};

function MethodPill({ method }) {
  const m = method.toUpperCase();
  const label = m === 'DELETE' ? 'DEL' : m;
  const bg = METHOD_BG[m] || '#999';
  return (
    <div className="h-[1lh] flex items-center shrink-0">
      <span className="method-nav-pill flex items-center w-8">
        <span
          className="px-1 py-0.5 rounded-md text-[0.55rem] leading-tight font-bold text-white"
          style={{ backgroundColor: bg }}
        >
          {label}
        </span>
      </span>
    </div>
  );
}

function GroupToggleIcon({ open }) {
  return (
    <svg
      width="8"
      height="24"
      viewBox="0 -9 3 24"
      className={`transition-transform text-gray-400 overflow-visible group-hover:text-gray-600 dark:text-gray-600 dark:group-hover:text-gray-400 w-2 h-[1lh] -mr-0.5 duration-75 ${open ? 'rotate-90' : ''}`}
    >
      <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function ApiSidebar({ apis, selectedEndpoint, onSelectEndpoint }) {
  const [collapsedGroups, setCollapsedGroups] = useState({});

  function toggleGroup(key) {
    setCollapsedGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function isActive(endpoint) {
    return (
      selectedEndpoint?.method === endpoint.method &&
      selectedEndpoint?.path === endpoint.path
    );
  }

  function renderEndpoint(endpoint, apiName, groupName, apiBaseUrl) {
    const active = isActive(endpoint);
    return (
      <li
        key={`${endpoint.method}-${endpoint.path}`}
        className="relative scroll-m-4 first:scroll-m-20 list-none"
      >
        <a
          className={`group flex items-start pr-3 py-1.5 cursor-pointer gap-x-3 text-left rounded-xl w-full outline-offset-[-1px] no-underline hover:no-underline ${
            active
              ? 'bg-primary/10 text-primary [text-shadow:-0.2px_0_0_currentColor,0.2px_0_0_currentColor] dark:text-primary-light dark:bg-primary-light/10'
              : 'hover:bg-gray-600/5 dark:hover:bg-gray-200/5 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300'
          }`}
          style={{ textDecoration: 'none' }}
          style={{ paddingLeft: '1.75rem' }}
          onClick={(e) => {
            e.preventDefault();
            onSelectEndpoint({ ...endpoint, group: groupName, baseUrl: apiBaseUrl });
          }}
          href="#"
        >
          <MethodPill method={endpoint.method} />
          <div className="flex-1 flex min-w-0 items-start gap-x-2.5">
            <div className="flex min-w-0 flex-1 flex-wrap items-center gap-1.5 [word-break:break-word]">
              <span className="min-w-0 max-w-full break-words">{endpoint.name}</span>
            </div>
          </div>
        </a>
      </li>
    );
  }

  return (
    <div className="text-sm relative">
      {apis.map((api, apiIdx) => (
        <div key={api.name} className={apiIdx === 0 ? '' : 'mt-6 lg:mt-8'}>
          <div className="sidebar-group-header flex items-center gap-2.5 pl-4 mb-3.5 lg:mb-2.5 font-semibold text-gray-700 dark:text-gray-300 text-xs">
            <h5 className="tracking-wide normal-case">{api.name}</h5>
          </div>

          <ul className="sidebar-group space-y-px list-none pl-0 m-0">
            {api.groups.map((group) => {
              const groupKey = `${api.name}::${group.name}`;
              const isCollapsed = collapsedGroups[groupKey] === true;
              const hasEndpoints = group.endpoints && group.endpoints.length > 0;

              if (group.noHeading) {
                return (
                  <React.Fragment key={groupKey}>
                    {hasEndpoints &&
                      group.endpoints.map((ep) =>
                        renderEndpoint(ep, api.name, api.name, api.baseUrl)
                      )}
                  </React.Fragment>
                );
              }

              return (
                <li key={groupKey} className="space-y-px list-none">
                  <button
                    className="group flex items-start pr-3 py-1.5 cursor-pointer gap-x-3 text-left break-words hyphens-auto rounded-xl w-full outline-offset-[-1px] border-0 bg-transparent appearance-none hover:bg-gray-600/5 dark:hover:bg-gray-200/5 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                    style={{ paddingLeft: '1rem' }}
                    onClick={() => toggleGroup(groupKey)}
                    aria-expanded={!isCollapsed}
                    aria-label={`Toggle ${group.name} section`}
                  >
                    <div className="flex-1 flex items-center gap-2 justify-start">{group.name}</div>
                    <GroupToggleIcon open={!isCollapsed} />
                  </button>

                  {!isCollapsed && hasEndpoints && (
                    <ul className="space-y-px list-none pl-0 m-0">
                      {group.endpoints.map((ep) =>
                        renderEndpoint(ep, api.name, group.name, api.baseUrl)
                      )}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
