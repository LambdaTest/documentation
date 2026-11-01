/**
 * Swizzled (ejected) Tabs — faithful copy of @docusaurus/theme-classic Tabs,
 * with ONE addition: for queryString-backed tab groups, the URL is kept as just
 * `?framework=...` and never `?framework=...#section-anchor`.
 *
 * Docusaurus updates the query param with react-router's history.replace, which
 * PRESERVES the current #hash. A post-render effect (deferred to the next frame,
 * so it runs after that replace and after the browser's initial scroll) strips
 * the hash via native history.replaceState — silently, with no route change or
 * scroll-to-top. It only acts when the query param is actually present, so plain
 * `#section` deep-links (with no `?framework=`) are left untouched. This fires on
 * initial load (cleaning inbound `?framework=x#anchor` URLs) and on tab change.
 */
import React, {cloneElement, useEffect, useRef} from 'react';
import clsx from 'clsx';
import {
  useScrollPositionBlocker,
  useTabs,
  sanitizeTabsChildren,
} from '@docusaurus/theme-common/internal';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {useHistory, useLocation} from '@docusaurus/router';
import styles from './styles.module.css';

function TabList({
  className,
  block,
  selectedValue,
  selectValue,
  tabValues,
  queryString,
}) {
  const tabRefs = [];
  const {blockElementScrollPositionUntilNextRender} =
    useScrollPositionBlocker();
  const handleTabChange = (event) => {
    const newTab = event.currentTarget;
    const newTabIndex = tabRefs.indexOf(newTab);
    const newTabValue = tabValues[newTabIndex].value;
    if (newTabValue !== selectedValue) {
      blockElementScrollPositionUntilNextRender(newTab);
      selectValue(newTabValue);
    }
  };
  const handleKeydown = (event) => {
    let focusElement = null;
    switch (event.key) {
      case 'Enter': {
        handleTabChange(event);
        break;
      }
      case 'ArrowRight': {
        const nextTab = tabRefs.indexOf(event.currentTarget) + 1;
        focusElement = tabRefs[nextTab] ?? tabRefs[0];
        break;
      }
      case 'ArrowLeft': {
        const prevTab = tabRefs.indexOf(event.currentTarget) - 1;
        focusElement = tabRefs[prevTab] ?? tabRefs[tabRefs.length - 1];
        break;
      }
      default:
        break;
    }
    focusElement?.focus();
  };
  return (
    <ul
      role="tablist"
      aria-orientation="horizontal"
      className={clsx(
        'tabs',
        {
          'tabs--block': block,
        },
        className,
      )}>
      {tabValues.map(({value, label, attributes}) => (
        <li
          role="tab"
          tabIndex={selectedValue === value ? 0 : -1}
          aria-selected={selectedValue === value}
          key={value}
          ref={(tabControl) => {
            tabRefs.push(tabControl);
          }}
          onKeyDown={handleKeydown}
          onClick={handleTabChange}
          {...attributes}
          className={clsx('tabs__item', styles.tabItem, attributes?.className, {
            'tabs__item--active': selectedValue === value,
          })}>
          {label ?? value}
        </li>
      ))}
    </ul>
  );
}
function TabContent({lazy, children, selectedValue}) {
  const childTabs = (Array.isArray(children) ? children : [children]).filter(
    Boolean,
  );
  if (lazy) {
    const selectedTabItem = childTabs.find(
      (tabItem) => tabItem.props.value === selectedValue,
    );
    if (!selectedTabItem) {
      return null;
    }
    return cloneElement(selectedTabItem, {
      className: clsx('margin-top--md', selectedTabItem.props.className),
    });
  }
  return (
    <div className="margin-top--md">
      {childTabs.map((tabItem, i) =>
        cloneElement(tabItem, {
          key: i,
          hidden: tabItem.props.value !== selectedValue,
        }),
      )}
    </div>
  );
}
function TabsComponent(props) {
  const tabs = useTabs(props);
  const {queryString = false, groupId} = props;
  const {selectedValue} = tabs;
  // Keep queryString-backed tab URLs as just `?<key>=<value>` — never
  // `?<key>=<value>#section-anchor`. Runs after react-router's history.replace
  // (which preserves the #hash) via a deferred frame, so this strip wins the
  // race; also runs on initial load to clean inbound `?<key>=x#anchor` URLs
  // (after the browser has already scrolled to the anchor). Gated on the query
  // param being present, so plain `#section` deep-links are left untouched.
  useEffect(() => {
    if (!queryString || typeof window === 'undefined') {
      return undefined;
    }
    const key = typeof queryString === 'string' ? queryString : groupId;
    if (!key) {
      return undefined;
    }
    const frame = window.requestAnimationFrame(() => {
      const hasParam = new URLSearchParams(window.location.search).has(key);
      if (hasParam && window.location.hash) {
        window.history.replaceState(
          window.history.state,
          '',
          window.location.pathname + window.location.search,
        );
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [queryString, groupId, selectedValue]);
  // Opt-in (`scrollToTab` prop): when the page is opened with `?<key>=<value>` and
  // <value> is one of THIS group's tabs, bring the tab list into view. The browser
  // only scrolls to a #hash, so a bare `?framework=junit` link used to open the
  // right tab but leave the reader at the top of a very long page. The scroll is
  // repeated a few times because content above the tabs keeps changing height
  // while the page hydrates and images load; any user scroll/keypress/touch
  // cancels it so we never fight the reader.
  const containerRef = useRef(null);
  const {scrollToTab = false} = props;
  const location = useLocation();
  const history = useHistory();
  const lastSearch = useRef(null);
  useEffect(() => {
    // Runs on mount (page opened with the URL) and whenever the query string
    // changes through a real navigation (PUSH, e.g. a sidebar link to
    // `?framework=junit` while already on this page). A tab click only REPLACEs
    // the URL and a TOC click keeps the same query, so neither moves the page.
    const isFirstRun = lastSearch.current === null;
    const searchChanged = lastSearch.current !== location.search;
    lastSearch.current = location.search;
    if (!isFirstRun && !(searchChanged && history.action === 'PUSH')) {
      return undefined;
    }
    if (!scrollToTab || !queryString || typeof window === 'undefined') {
      return undefined;
    }
    const key = typeof queryString === 'string' ? queryString : groupId;
    const wanted = key
      ? new URLSearchParams(window.location.search).get(key)
      : null;
    // `selectedValue` can still be the default tab on this first render, so check
    // that the URL value belongs to this group rather than comparing to it.
    if (wanted === null || !tabs.tabValues.some((t) => t.value === wanted)) {
      return undefined;
    }
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
    };
    const events = ['wheel', 'touchstart', 'keydown', 'mousedown'];
    events.forEach((e) => window.addEventListener(e, cancel, {passive: true}));
    const scrollToGroup = () => {
      const el = containerRef.current;
      if (cancelled || !el) {
        return;
      }
      const navbar = document.querySelector('.navbar');
      const offset = (navbar ? navbar.offsetHeight : 60) + 12;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({top: Math.max(0, top), behavior: 'auto'});
    };
    const frame = window.requestAnimationFrame(scrollToGroup);
    const timers = [250, 700, 1500].map((ms) =>
      window.setTimeout(scrollToGroup, ms),
    );
    return () => {
      window.cancelAnimationFrame(frame);
      timers.forEach((t) => window.clearTimeout(t));
      events.forEach((e) => window.removeEventListener(e, cancel));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);
  return (
    <div ref={containerRef} className={clsx('tabs-container', styles.tabList)}>
      <TabList {...tabs} {...props} />
      <TabContent {...tabs} {...props} />
    </div>
  );
}
export default function Tabs(props) {
  const isBrowser = useIsBrowser();
  return (
    <TabsComponent
      // Remount tabs after hydration
      // Temporary fix for https://github.com/facebook/docusaurus/issues/5653
      key={String(isBrowser)}
      {...props}>
      {sanitizeTabsChildren(props.children)}
    </TabsComponent>
  );
}
