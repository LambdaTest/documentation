import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

const AIChatContext = createContext(null);

export function AIChatProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const msgIdRef = useRef(0);

  const togglePanel = useCallback(() => setIsOpen((prev) => !prev), []);
  const openPanel = useCallback(() => setIsOpen(true), []);
  const closePanel = useCallback(() => setIsOpen(false), []);

  const addMessage = useCallback((role, content, sources) => {
    setMessages((prev) => [...prev, { role, content, sources, id: ++msgIdRef.current }]);
  }, []);

  const clearMessages = useCallback(() => setMessages([]), []);

  return (
    <AIChatContext.Provider
      value={{
        isOpen,
        togglePanel,
        openPanel,
        closePanel,
        messages,
        addMessage,
        clearMessages,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AIChatContext.Provider>
  );
}

export function useAIChat() {
  return useContext(AIChatContext);
}

export function useAIChatSafe() {
  const context = useContext(AIChatContext);
  return context || { openPanel: () => {}, closePanel: () => {}, togglePanel: () => {}, isOpen: false };
}

export default AIChatContext;
