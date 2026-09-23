import OriginalComp from '@theme-original/DocPaginator';
import React from 'react';
import { useState, useEffect } from 'react';
import DemoPopup from '../component/DemoPopup';
import HelpFulArticle from '../component/HelpFulArticle';

// Agent Assurance and Agent Testing are their own product lines, so the Kane CLI
// terminal-testing CTA is off-message on their docs. These three prefixes cover
// every agent-assurance-*, rook-* and agent-testing-* page (35 docs, no false
// positives) and pick up new rook-* pages automatically.
const AGENT_DOC_PREFIXES = ['agent-assurance-', 'rook-', 'agent-testing-'];

// The rest of the Agent Testing line is named too generically to match by prefix
// (`test-` would also catch Test Manager docs such as test-case-archive), so those
// slugs are listed explicitly. Regenerate from sidebars.js after adding a page:
// the union of AgentAssuranceSidebar and AgentTestingSidebar doc ids, minus the
// ids already covered by AGENT_DOC_PREFIXES.
const AGENT_DOC_SLUGS = new Set([
  'architecture-and-how-evaluation-works',
  'chat-agent',
  'chat-agent-api-integration',
  'getting-started-with-agent-testing-platform',
  'image-analyzer',
  'inbound-phone-agent',
  'outbound-phone-agent',
  'phone-agent',
  'test-amazon-connect-bots',
  'test-amazon-lex-bots',
  'test-bland-agents',
  'test-copilot-studio-agents',
  'test-elevenlabs-agents',
  'test-langgraph-agents',
  'test-livekit-agents',
  'test-pipecat-agents',
  'test-retell-agents',
  'test-synthflow-agents',
  'test-twilio-ivr',
  'test-vapi-agents',
  'test-vertex-agent-builder-agents',
  'test-voiceflow-agents',
  'test-watsonx-assistant-bots',
  'testing-your-first-ai-agent',
  'video-agent',
  'voice-agent',
]);

function isAgentProductDoc(pathname) {
  const slug = pathname.replace(/\/+$/, '').split('/').pop();
  return AGENT_DOC_SLUGS.has(slug) || AGENT_DOC_PREFIXES.some((p) => slug.startsWith(p));
}

export default function DocPaginator(props) {
  const [showFeedback, setShowFeedback] = useState(true);
  // Separate from showFeedback on purpose: the CTA is suppressed on the agent
  // docs, but Help and Support and Related Articles must still render there.
  const [showKaneCta, setShowKaneCta] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      if (pathname === '/support/docs/') {
        setShowFeedback(false);
      }
      if (isAgentProductDoc(pathname)) {
        setShowKaneCta(false);
      }
    }
  }, [])


  return (
    <>
      {showFeedback && <>
      {showKaneCta && <div className="kane_cli_cta">
        <div className="kane_cli_cta_box">
          <div className='kane_cli_cta_content'>
            <h2>Terminal First Testing With Kane CLI</h2>
            <p>Natural language browser &amp; mobile app tests right from terminal.</p>

            <DemoPopup preselectedProductType="Kane-CLI" />
            
          </div>
          <img loading="lazy" src="https://assets.testmu.ai/resources/images/Terminal-KaneCLIIcon.svg" alt="" aria-hidden="true" className='kane_cli_cta_icon no-zoom'></img>
          <img loading="lazy" src="https://assets.testmu.ai/resources/images/Terminal-KaneCLI.png" alt="Kane CLI terminal" title="Kane CLI" className='kane_cli_cta_terminal no-zoom'></img>
        </div>
      </div>}

      {/* The CTA supplies the gap above this heading, so restore it when hidden. */}
      <h2 className='main_heading_support' style={showKaneCta ? undefined : {marginTop:"40px"}}>Help and Support</h2>
      
      
          <HelpFulArticle />
      
      
      
      <h2 className='main_heading_support' style={{marginTop:"40px"}}>Related Articles</h2> </>}
      <OriginalComp {...props} />
      <footer>
        <div className="doc_footer">
        
          <p>&copy; {new Date().getFullYear()} TestMu AI Inc. All rights reserved.</p>
          <div className='side_footer_link'>
            <a role="button" tabIndex="0" href='https://status.lambdatest.io/'>Status</a>
            <a role="button" tabIndex="0" href='https://www.testmuai.com/legal/terms-of-service/'>Terms</a>
            <a role="button" tabIndex="0" href='https://www.testmuai.com/legal/privacy/'>Privacy</a>
            <a role="button" tabIndex="0" href='https://www.testmuai.com/trust/security/'>Security</a>
            <a role="button" tabIndex="0" href='https://www.testmuai.com/pricing/'>Pricing</a>
            <a role="button" tabIndex="0" href='https://www.testmuai.com/blog/'>Blog</a>
          </div>
        </div>

      </footer>

    </>
  );
}