import OriginalComp from '@theme-original/DocPaginator';
import React from 'react';
import { useState, useEffect } from 'react';
import HelpFulArticle from '../component/HelpFulArticle';

export default function DocPaginator(props) {
  const [showFeedback, setShowFeedback] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.pathname === '/support/docs/') {
        setShowFeedback(false);
      }
    }
  }, [])

  return (
    <>
      {showFeedback && <HelpFulArticle />}
      <div className="social_button">
        <button onClick={() => window.openLTChatWidget()} className="chat_btn"><img loading="lazy" src="/support/img/Chat.svg" alt="" role="presentation" title='Chat with Us' className='' width="16" height="16" />Chat with Us</button>
        <a role="button" tabindex="0" href="https://community.lambdatest.com/" target="_blank" className="btnlink">Ask the Community</a>
        {/* <a href="https://accounts.lambdatest.com/register" target="_blank"  className="btnlink">Start Free Testing</a> */}
      </div>
      <OriginalComp {...props} />
      <footer>
        <div className="doc_footer">
          <a role="button" tabindex="0" href='https://www.lambdatest.com/'><img loading="lazy" src="/support/img/logo.svg" className='footer_light_logo no-zoom' width="147" height="26" alt="LambdaTest" /> <img loading="lazy" src="/support/img/logo_dark.svg" className='footer_dark_logo no-zoom' width="300" height="51" alt="LambdaTest" /></a>
          <p>&copy; {new Date().getFullYear()} LambdaTest Inc. All rights reserved.</p>
          <a role="button" tabindex="0" href='https://status.lambdatest.io/'>Status</a>
          <a role="button" tabindex="0" href='https://www.lambdatest.com/legal/terms-of-service'>Terms</a>
          <a role="button" tabindex="0" href='https://www.lambdatest.com/legal/privacy'>Privacy</a>
          <a role="button" tabindex="0" href='https://www.lambdatest.com/trust/security'>Security</a>
          <a role="button" tabindex="0" href='https://www.lambdatest.com/pricing'>Pricing</a>
          <a role="button" tabindex="0" href='https://www.lambdatest.com/blog/'>Blog</a>
        </div>

      </footer>
    </>
  );
}