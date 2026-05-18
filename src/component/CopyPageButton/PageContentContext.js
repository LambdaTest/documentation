import { createContext, useContext, useRef, useCallback } from 'react';

const PageContentContext = createContext(null);

export function usePageContent() {
  return useContext(PageContentContext);
}

export default PageContentContext;
