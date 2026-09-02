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
                    <li><a href="/support/docs/testng-on-hyperexecute-grid/">TestNG</a></li>
                    <li><a href="/support/docs/junit-on-hyperexecute-grid/">JUnit</a></li>
                    <li><a href="/support/docs/cucumber-on-hyperexecute-grid/">Cucumber</a></li>
                  </ul>
                </div>
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/color-js.webp').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/webdriverio-on-hyperexecute-grid/">WebdriverIO</a></li>
                    <li><a href="/support/docs/protractor-on-hyperexecute-grid/">Protractor</a></li>
                    <li><a href="/support/docs/nightwatch-on-hyperexecute-grid/">Nightwatch</a></li>
                    <li><a href="/support/docs/hyperexecute-bidi-testing/">BiDi</a></li>
                  </ul>
                </div>
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/c-sharp-icon.webp').default} alt="C#" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/nunit-on-hyperexecute-grid/">NUnit</a></li>
                    <li><a href="/support/docs/specflow-on-hyperexecute-grid/">SpecFlow</a></li>
                  </ul>
                </div>
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/python-icon.webp').default} alt="Python" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/pyunit-on-hyperexecute-grid/">PyUnit</a></li>
                    <li><a href="/support/docs/pytest-on-hyperexecute-grid/">PyTest</a></li>
                    <li><a href="/support/docs/robot-on-hyperexecute-grid/">Robot</a></li>
                    <li><a href="/support/docs/behave-on-hyperexecute-grid/">Behave</a></li>
                  </ul>
                </div>
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/ruby-icon.webp').default} alt="Ruby" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/ruby-on-hyperexecute-grid/">Ruby</a></li>
                    <li><a href="/support/docs/capybara-on-hyperexecute-grid/">Capybara</a></li>
                  </ul>
                </div>
              </div>
            </TabItem>
          
            <TabItem value="Puppeteer">
              <div className="lt_row ">
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/color-js.webp').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/jest-on-hyperexecute/">Jest</a></li>
                    <li><a href="/support/docs/mocha-on-hyperexecute/">Mocha</a></li>
                    <li><a href="/support/docs/codecept-on-hyperexecute/">CodeceptJs</a></li>
                  </ul>
                </div>
              </div>
            </TabItem>

            <TabItem value="Playwright">
              <div className="lt_row">
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/python-icon.webp').default} alt="Python" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/pytest-on-hyperexecute/">PyTest</a></li>
                    <li><a href="/support/docs/playwright-python-on-hyperexecute/">Python</a></li>
                  </ul>
                </div>
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/color-js.webp').default} alt="Javascript" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/playwright-vanillajs-on-hyperexecute/">VanillaJs</a></li>
                    <li><a href="/support/docs/codecept-on-hyperexecute/">CodeceptJs</a></li>
                    <li><a href="/support/docs/playwright-jest-on-hyperexecute/">Jest</a></li>
                  </ul>
                </div>
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/java-icon.webp').default} alt="Java" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/playwright-junit-on-hyperexecute/">JUnit</a></li>
                  </ul>
                </div>
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/c-sharp-icon.webp').default} alt="C#" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/playwright-dotnet-on-hyperexecute/">.Net</a></li>
                  </ul>
                </div>
              </div>
            </TabItem>
            
            <TabItem value="Cypress">
              <div className="lt_row ">
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/cypress_logo.png').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="/support/docs/cypressv9-on-hyperexecute/">Cypress v9</a></li>
                    <li><a href="/support/docs/cypressv10-on-hyperexecute/">Cypress v10</a></li>
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
                    <li><a href="/support/docs/hyperexecute-webapp-appium-testing/">Web Application</a></li>
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