import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import { setInitialReferrer } from '../component/CookieTracking';

export default function Root({ children }) {
  const location = useLocation();

  useEffect(() => {
    setInitialReferrer();
  }, [location.pathname]);

  return <>{children}</>;
}
