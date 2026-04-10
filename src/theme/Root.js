import React from 'react';
import { AIChatProvider } from '../component/AskAI/AIChatContext';
import AskAIBar from '../component/AskAI/AskAIBar';

export default function Root({ children }) {
  return (
    <AIChatProvider>
      {children}
      <AskAIBar />
    </AIChatProvider>
  );
}
