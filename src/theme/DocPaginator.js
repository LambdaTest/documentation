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
      <div className="Doc_bottom_Cta">
        <div className="Doc_cta">
          <div className='right_sec'>
            <h2>Test across 3000+ combinations of browsers, real devices & OS.</h2>
            <DemoPopup />
          </div>
          <img loading="lazy" src="https://www.lambdatest.com/blog/wp-content/uploads/2024/05/DocBottomImg.png" alt="Book Demo" title="Book Demo" width="887" height="477" className='left_sec'></img>
        </div>
      </div>
      <h2 className='main_heading_support'>Help and Support</h2>
      
      
          <HelpFulArticle />
      
      
      
      <h2 className='main_heading_support' style={{marginTop:"40px"}}>Related Articles</h2> </>}
      <OriginalComp {...props} />
      <footer>
        <div className="doc_footer">
          {/* <a role="button" tabindex="0" href='https://www.lambdatest.com/'><img loading="lazy" src="/support/img/logo.svg" className='footer_light_logo' width="147" height="26" alt="LambdaTest" /> <img loading="lazy" src="/support/img/logo_dark.svg" className='footer_dark_logo' width="300" height="51" alt="LambdaTest" /></a> */}
          <p>&copy; {new Date().getFullYear()} LambdaTest Inc. All rights reserved.</p>
          <div className='side_footer_link'>
            <a role="button" tabIndex="0" href='https://status.lambdatest.io/'>Status</a>
            <a role="button" tabIndex="0" href='https://www.lambdatest.com/legal/terms-of-service'>Terms</a>
            <a role="button" tabIndex="0" href='https://www.lambdatest.com/legal/privacy'>Privacy</a>
            <a role="button" tabIndex="0" href='https://www.lambdatest.com/trust/security'>Security</a>
            <a role="button" tabIndex="0" href='https://www.lambdatest.com/pricing'>Pricing</a>
            <a role="button" tabIndex="0" href='https://www.lambdatest.com/blog/'>Blog</a>
          </div>
        </div>

      </footer>

    </>
  );
}