/**
 * Wrapper around the original theme Tabs (Docusaurus "wrap" swizzle). It does NOT copy or import any
 * theme internals, so it works with whichever @docusaurus/theme-classic version is installed.
 * Both additions are only active for queryString-backed tab groups:
 *
 * 1) The URL is kept as just `?framework=...`, never `?framework=...#section-anchor`.
 *    Docusaurus updates the query param with react-router's history.replace, which PRESERVES the
 *    current #hash. A deferred post-render effect strips the hash with native history.replaceState
 *    (no route change, no scroll-to-top). It only acts when the query param is present, so plain
 *    `#section` deep-links are left untouched.
 *
 * 2) Opt-in `scrollToTab` prop: when the page is opened with `?<key>=<value>` (or a PUSH navigation
 *    changes that query, e.g. a sidebar link while already on the page) and <value> is one of THIS
 *    group's tabs, the tab list is scrolled into view just below the navbar. The browser only
 *    scrolls to a #hash, so a bare `?framework=junit` link used to open the right tab but leave the
 *    reader at the top of a very long page. The scroll is repeated a few times because content
 *    above the tabs keeps changing height while the page hydrates; any user scroll/keypress/touch
 *    cancels it. Tab clicks (history REPLACE) and TOC clicks (same query) never move the page.
 *    Tabs without `scrollToTab` are rendered exactly as the original (no extra DOM).
 */
import React, {useEffect, useRef} from 'react';
import OriginalTabs from '@theme-original/Tabs';
import {useHistory, useLocation} from '@docusaurus/router';

function childValues(children) {
  const values = [];
  React.Children.forEach(children, (child) => {
    if (child && child.props && child.props.value !== undefined) {
      values.push(String(child.props.value));
    }
  });
  return values;
}

export default function Tabs(props) {
  const {queryString = false, groupId, scrollToTab = false} = props;
  const location = useLocation();
  const history = useHistory();
  const containerRef = useRef(null);
  const lastSearch = useRef(null);
  const queryKey = queryString
    ? typeof queryString === 'string'
      ? queryString
      : groupId
    : null;

  // (1) keep `?key=value` free of a trailing #hash
  useEffect(() => {
    if (!queryKey || typeof window === 'undefined') {
      return undefined;
    }
    const frame = window.requestAnimationFrame(() => {
      const hasParam = new URLSearchParams(window.location.search).has(queryKey);
      if (hasParam && window.location.hash) {
        window.history.replaceState(
          window.history.state,
          '',
          window.location.pathname + window.location.search,
        );
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [queryKey, location.key]);

  // (2) opt-in: bring this tab group into view for `?key=value` URLs
  useEffect(() => {
    // Runs on mount, and whenever the query string changes through a real
    // navigation (PUSH). A tab click only REPLACEs the URL; a TOC click keeps
    // the same query - neither moves the page.
    const isFirstRun = lastSearch.current === null;
    const searchChanged = lastSearch.current !== location.search;
    lastSearch.current = location.search;
    if (!isFirstRun && !(searchChanged && history.action === 'PUSH')) {
      return undefined;
    }
    if (!scrollToTab || !queryKey || typeof window === 'undefined') {
      return undefined;
    }
    const wanted = new URLSearchParams(window.location.search).get(queryKey);
    if (wanted === null || !childValues(props.children).includes(wanted)) {
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

  if (!scrollToTab) {
    return <OriginalTabs {...props} />;
  }
  return (
    <div ref={containerRef}>
      <OriginalTabs {...props} />
    </div>
  );
}
