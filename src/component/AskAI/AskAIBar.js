import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useAIChat } from './AIChatContext';
import styles from './AskAIBar.module.css';

export default function AskAIBar() {
  const { isOpen, closePanel } = useAIChat();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape' && isOpen) closePanel();
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closePanel]);

  // When AI panel opens: narrow only .main-wrapper (NOT #__docusaurus) so the navbar
  // stays full-width and fills the area above the drawer — eliminating the visual gap.
  // Also toggle a body class so CSS can hide the right panel and show inline code examples.
  useEffect(() => {
    const mw = document.querySelector('.main-wrapper');
    if (isOpen) {
      document.body.classList.add('ai-panel-open');
      if (mw) {
        mw.style.transition = 'padding-right 0.25s ease';
        mw.style.boxSizing = 'border-box';
        mw.style.paddingRight = '420px';
      }
    } else {
      document.body.classList.remove('ai-panel-open');
      if (mw) {
        mw.style.paddingRight = '0px';
      }
    }
    return () => {
      document.body.classList.remove('ai-panel-open');
      if (mw) {
        mw.style.paddingRight = '0px';
        mw.style.transition = '';
        mw.style.boxSizing = '';
      }
    };
  }, [isOpen]);

  async function handleSubmit(e) {
    e.preventDefault();
    const q = input.trim();
    if (!q || loading) return;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: q }]);
    setLoading(true);
    try {
      const teamId = process.env.REACT_APP_DOCSBOT_TEAM_ID || '';
      const botId = process.env.REACT_APP_DOCSBOT_BOT_ID || '';
      const res = await fetch(`https://api.docsbot.ai/teams/${teamId}/bots/${botId}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q, full_source: false }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.answer || 'Sorry, I could not find an answer.' }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Something went wrong. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  }

  if (typeof document === 'undefined') return null;


  const drawer = (
    <>
      <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}>
        {/* Header */}
        <div className={styles.drawerHeader}>
          <div className={styles.drawerTitle}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ED5F00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3L9.5 8.5L4 11l5.5 2.5L12 19l2.5-5.5L20 11l-5.5-2.5z" />
              <path d="M19 3l-1 2.5L15.5 7l2.5 1 1 2.5 1-2.5L23 7l-2.5-1z" />
            </svg>
            <span>Assistant</span>
          </div>
          <div className={styles.drawerActions}>
            <button className={styles.iconBtn} title="Expand" aria-label="Expand">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            </button>
            <button className={styles.iconBtn} onClick={closePanel} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className={styles.drawerMessages}>
          {messages.length === 0 && (
            <div className={styles.emptyHint}>
              Responses are generated using AI and may contain mistakes.
            </div>
          )}
          {messages.map((m, i) => (
            <div key={i} className={m.role === 'user' ? styles.userMsg : styles.assistantMsg}>
              <div className={styles.msgBubble}>{m.content}</div>
            </div>
          ))}
          {loading && (
            <div className={styles.assistantMsg}>
              <div className={`${styles.msgBubble} ${styles.typing}`}>Thinking…</div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className={styles.drawerInputArea}>
          <form onSubmit={handleSubmit} className={styles.drawerForm}>
            <textarea
              ref={inputRef}
              rows={2}
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSubmit(e); } }}
              className={styles.drawerInput}
            />
            <div className={styles.drawerFormFooter}>
              <button type="button" className={styles.attachBtn} aria-label="Attach">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66L9.41 17.41a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                </svg>
              </button>
              <button type="submit" className={styles.drawerSendBtn} disabled={!input.trim() || loading} aria-label="Send">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" />
                </svg>
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className={styles.drawerFooter}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <a href="https://www.lambdatest.com/contact-us" target="_blank" rel="noopener noreferrer">
            Contact support
          </a>
        </div>
      </div>
    </>
  );

  return ReactDOM.createPortal(drawer, document.body);
}
