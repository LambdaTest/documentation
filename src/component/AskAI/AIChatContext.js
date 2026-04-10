import React, { createContext, useContext, useState, useCallback } from 'react';

const AIChatContext = createContext(null);

export function AIChatProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const togglePanel = useCallback(() => setIsOpen((prev) => !prev), []);
  const openPanel = useCallback(() => setIsOpen(true), []);
  const closePanel = useCallback(() => setIsOpen(false), []);

  const addMessage = useCallback((role, content, sources) => {
    setMessages((prev) => [...prev, { role, content, sources, id: Date.now() }]);
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
  const context = useContext(AIChatContext);
  if (!context) {
    throw new Error('useAIChat must be used within an AIChatProvider');
  }
  return context;
}

export default AIChatContext;
