import OriginalComp from '@theme-original/DocPaginator';
import React from 'react';
import { useState, useEffect } from 'react';
import DemoPopup from '../component/DemoPopup';
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
      {showFeedback && <>
      <div className="kane_cli_cta">
        <div className="kane_cli_cta_box">
          <div className='kane_cli_cta_content'>
            <h2>Terminal First Testing With Kane CLI</h2>
            <p>Natural language browser &amp; mobile app tests right from terminal.</p>

            <DemoPopup preselectedProductType="Kane-CLI" />
            
          </div>
          <img loading="lazy" src="https://assets.testmu.ai/resources/images/Terminal-KaneCLIIcon.svg" alt="" aria-hidden="true" className='kane_cli_cta_icon no-zoom'></img>
          <img loading="lazy" src="https://assets.testmu.ai/resources/images/Terminal-KaneCLI.png" alt="Kane CLI terminal" title="Kane CLI" className='kane_cli_cta_terminal no-zoom'></img>
        </div>
      </div>

      <h2 className='main_heading_support'>Help and Support</h2>
      
      
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