import React from 'react'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function HyperExecuteSupportedLanguageDocs() {
  return (
    <>
      <div className= "lt_framework_list_row">
        <Tabs
          groupId="languages"
          defaultValue= 'Selenium'
          values={[
            {label: 'Selenium', value: 'Selenium'},
            {label: 'Playwright', value: 'Playwright'},
            {label: 'Puppeteer', value: 'Puppeteer'},
            {label: 'Cypress', value: 'Cypress'},
            {label: 'Appium', value: 'Appium' },
            {label: 'Espresso', value: 'Espresso' },
            {label: 'Maestro', value: 'Maestro' },
            {label: 'XCUI', value: 'XCUI' },
            {label: 'Performance', value: 'Performance' },
            {label: 'API', value: 'API' },
          ]}>
            <TabItem value="Selenium">
              <div className="lt_row">
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/java-icon.webp').default} alt="Java" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/hyperexecute-selenium-testing/#java">TestNG</a></li>
                    <li><a href="/support/docs/hyperexecute-selenium-testing/#java">JUnit</a></li>
                    <li><a href="/support/docs/hyperexecute-selenium-testing/#java">Cucumber</a></li>
                  </ul>
                </div>
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/color-js.webp').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/hyperexecute-selenium-testing/#javascript">WebdriverIO</a></li>
                    <li><a href="/support/docs/hyperexecute-selenium-testing/#javascript">Protractor</a></li>
                    <li><a href="/support/docs/hyperexecute-selenium-testing/#javascript">Nightwatch</a></li>
                    <li><a href="/support/docs/hyperexecute-bidi-testing/">BiDi</a></li>
                  </ul>
                </div>
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/c-sharp-icon.webp').default} alt="C#" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/hyperexecute-selenium-testing/#c">NUnit</a></li>
                    <li><a href="/support/docs/hyperexecute-selenium-testing/#c">SpecFlow</a></li>
                  </ul>
                </div>
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/python-icon.webp').default} alt="Python" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/hyperexecute-selenium-testing/#python">PyUnit</a></li>
                    <li><a href="/support/docs/hyperexecute-selenium-testing/#python">PyTest</a></li>
                    <li><a href="/support/docs/hyperexecute-selenium-testing/#python">Robot</a></li>
                    <li><a href="/support/docs/hyperexecute-selenium-testing/#python">Behave</a></li>
                  </ul>
                </div>
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/ruby-icon.webp').default} alt="Ruby" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/hyperexecute-selenium-testing/#ruby">Ruby</a></li>
                    <li><a href="/support/docs/hyperexecute-selenium-testing/#ruby">Capybara</a></li>
                  </ul>
                </div>
              </div>
            </TabItem>
          
            <TabItem value="Puppeteer">
              <div className="lt_row ">
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/color-js.webp').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/hyperexecute-puppeteer-testing/#run-a-puppeteer-test-in-your-runner">Jest</a></li>
                    <li><a href="/support/docs/hyperexecute-puppeteer-testing/#run-a-puppeteer-test-in-your-runner">Mocha</a></li>
                    <li><a href="/support/docs/hyperexecute-puppeteer-testing/#run-a-puppeteer-test-in-your-runner">CodeceptJs</a></li>
                  </ul>
                </div>
              </div>
            </TabItem>

            <TabItem value="Playwright">
              <div className="lt_row">
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/python-icon.webp').default} alt="Python" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/playwright-integration-with-hyperexecute/#python">PyTest</a></li>
                    <li><a href="/support/docs/playwright-integration-with-hyperexecute/#python">Python</a></li>
                  </ul>
                </div>
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/color-js.webp').default} alt="Javascript" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/playwright-integration-with-hyperexecute/#javascript">VanillaJs</a></li>
                    <li><a href="/support/docs/hyperexecute-puppeteer-testing/#run-a-puppeteer-test-in-your-runner">CodeceptJs</a></li>
                    <li><a href="/support/docs/playwright-integration-with-hyperexecute/#javascript">Jest</a></li>
                  </ul>
                </div>
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/java-icon.webp').default} alt="Java" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/playwright-integration-with-hyperexecute/#java">JUnit</a></li>
                  </ul>
                </div>
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/c-sharp-icon.webp').default} alt="C#" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/playwright-integration-with-hyperexecute/#c--net">.Net</a></li>
                  </ul>
                </div>
              </div>
            </TabItem>
            
            <TabItem value="Cypress">
              <div className="lt_row ">
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/cypress_logo.png').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/cypress-integration-with-hyperexecute/#run-a-cypress-test-in-hyperexecute">Cypress v9</a></li>
                    <li><a href="/support/docs/cypress-integration-with-hyperexecute/#run-a-cypress-test-in-hyperexecute">Cypress v10</a></li>
                  </ul>
                </div>
              </div>
            </TabItem>
            
            <TabItem value="Appium">
              <div className="lt_row ">
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/appium.jpeg').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/hyperexecute-appium-testing/">Mobile Application</a></li>
                    <li><a href="/support/docs/hyperexecute-appium-testing/#appium-webapp-testing">Web Application</a></li>
                  </ul>
                </div>
              </div>
            </TabItem>
            
            <TabItem value="Espresso">
              <div className="lt_row ">
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/espresso.png').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/hyperexecute-espresso-testing/">Espresso</a></li>
                  </ul>
                </div>
              </div>
            </TabItem>
            
            <TabItem value="Maestro">
              <div className="lt_row ">
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/maestro.png').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/hyperexecute-maestro-testing/">Maestro</a></li>
                  </ul>
                </div>
              </div>
            </TabItem>
            
            <TabItem value="XCUI">
              <div className="lt_row ">
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/xcui.jpeg').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/hyperexecute-xcui-testing/">XCUI</a></li>
                  </ul>
                </div>
              </div>
            </TabItem>

            <TabItem value="Performance">
              <div className="lt_row">
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/jmeter.png').default} alt="JMeter" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/hyperexecute-run-jmeter-tests/">JMeter</a></li>
                  </ul>
                </div>
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/gattling.png').default} alt="Gattling" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/hyperexecute-gattling-testing/">Gattling</a></li>
                  </ul>
                </div>
              </div>
            </TabItem>

            <TabItem value="API">
              <div className="lt_row">
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/api.png').default} alt="API" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/hyperexecute-api-testing/">API</a></li>
                  </ul>
                </div>
              </div>
            </TabItem>
        </Tabs>
      </div> 
    </>
  )
}