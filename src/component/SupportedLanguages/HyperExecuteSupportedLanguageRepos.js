import React from 'react'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function HyperExecuteSupportedLanguageRepos() {
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
          ]}>
            <TabItem value="Selenium">
              <div className="lt_row">
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/java-icon.webp').default} alt="Java" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="https://github.com/LambdaTest/testng-selenium-hyperexecute-sample/tree/main/" target="_blank">TestNG</a></li>
                    <li><a href="https://github.com/LambdaTest/junit-selenium-hyperexecute-sample/" target="_blank">JUnit</a></li>
                    <li><a href="https://github.com/LambdaTest/cucumber-selenium-hyperexecute-sample.git/" target="_blank">Cucumber</a></li>
                  </ul>
                </div>
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/color-js.webp').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="https://github.com/LambdaTest/WebdriverIO-HyperExecute-Sample.git" target="_blank">WebdriverIO</a></li>
                    <li><a href="https://github.com/LambdaTest/Protractor-HyperExecute-Sample.git" target="_blank">Protractor</a></li>
                    <li><a href="https://github.com/LambdaTest/Hyperexecute-Nightwatch-Sample.git" target="_blank">Nightwatch</a></li>
                    <li><a href="https://github.com/LambdaTest/hyperexecute-bidi-sample.git" target="_blank">BiDi</a></li>
                  </ul>
                </div>
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/c-sharp-icon.webp').default} alt="C#" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="https://github.com/LambdaTest/nunit-selenium-hyperexecute-sample.git" target="_blank">NUnit</a></li>
                    <li><a href="https://github.com/LambdaTest/specflow-selenium-hyperexecute-sample.git" target="_blank">SpecFlow</a></li>
                  </ul>
                </div>
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/python-icon.webp').default} alt="Python" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="https://github.com/LambdaTest/pyunit-selenium-hyperexecute-sample.git" target="_blank">PyUnit</a></li>
                    <li><a href="https://github.com/LambdaTest/pytest-selenium-hyperexecute-sample.git" target="_blank">PyTest</a></li>
                    <li><a href="https://github.com/LambdaTest/robot-selenium-hyperexecute-sample.git" target="_blank">Robot</a></li>
                    <li><a href="https://github.com/LambdaTest/behave-selenium-hyperexecute-sample.git" target="_blank">Behave</a></li>
                  </ul>
                </div>
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/ruby-icon.webp').default} alt="Ruby" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="https://github.com/LambdaTest/Ruby-HyperExecute-Sample.git" target="_blank">Ruby</a></li>
                    <li><a href="https://github.com/LambdaTest/Capybara-HyperExecute-Sample.git" target="_blank">Capybara</a></li>
                  </ul>
                </div>
              </div>
            </TabItem>
          
            <TabItem value="Playwright">
              <div className="lt_row">
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/java-icon.webp').default} alt="Java" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="https://github.com/LambdaTest/hyperexecute-java-playwright-sample.git" target="_blank">JUnit</a></li>
                  </ul>
                </div>
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/color-js.webp').default} alt="Javascript" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="https://github.com/LambdaTest/HyperExecute-Playwright-Vanilla-Javascript.git" target="_blank">VanillaJs</a></li>
                    <li><a href="https://github.com/LambdaTest/HyperExecute-Playwright-CodeceptJs.git" target="_blank">CodeceptJs</a></li>
                    <li><a href="https://github.com/LambdaTest/HyperExecute-Playwright-Jest.git" target="_blank">Jest</a></li>
                  </ul>
                </div>
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/c-sharp-icon.webp').default} alt="C#" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="https://github.com/LambdaTest/dotnet_playwright_hyperexecute_sample" target="_blank">.Net</a></li>
                  </ul>
                </div>
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/python-icon.webp').default} alt="Python" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="https://github.com/LambdaTest/hyperexecute-playwright-python-sample.git" target="_blank">Python</a></li>
                    <li><a href="https://github.com/LambdaTest/hyperexecute-playwright-pypi-sample.git" target="_blank">PyTest</a></li>
                  </ul>
                </div>
              </div>
            </TabItem>

            <TabItem value="Puppeteer">
              <div className="lt_row ">
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/color-js.webp').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="https://github.com/LambdaTest/hyperexecute-puppeteer-jest-sample.git" target="_blank">Jest</a></li>
                    <li><a href="https://github.com/LambdaTest/hyperexecute-puppeteer-mocha-sample.git" target="_blank">Mocha</a></li>
                    <li><a href="https://github.com/LambdaTest/pyunit-selenium-hyperexecute-sample.git" target="_blank">CodeceptJs</a></li>
                  </ul>
                </div>
              </div>
            </TabItem>
            
            <TabItem value="Cypress">
              <div className="lt_row ">
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/cypress_logo.png').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="https://github.com/LambdaTest/hyperexecute-cypress-v9-sample" target="_blank">Cypress v9</a></li>
                    <li><a href="https://github.com/LambdaTest/hyperexecute-cypress-v10-sample" target="_blank">Cypress v10</a></li>
                  </ul>
                </div>
              </div>
            </TabItem>
            
            <TabItem value="Appium">
              <div className="lt_row ">
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/appium.jpeg').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="https://github.com/LambdaTest/hyperexecute-appium-testng/" target="_blank">Mobile Application</a></li>
                    <li><a href="https://github.com/LambdaTest/hyperexecute-appium-testng/tree/android-emulator" target="_blank">Emulator</a></li>
                  </ul>
                </div>
              </div>
            </TabItem>
            
            <TabItem value="Espresso">
              <div className="lt_row ">
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/espresso.png').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="https://github.com/LambdaTest/hyperexecute-real-device-espresso" target="_blank">Espresso</a></li>
                  </ul>
                </div>
              </div>
            </TabItem>
            
            <TabItem value="Maestro">
              <div className="lt_row ">
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/maestro.png').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="https://github.com/LambdaTest/hyperexecute-maestro-sample-test" target="_blank">Maestro</a></li>
                    <li><a href="https://github.com/LambdaTest/hyperexecute-maestro-sample-test/tree/android-emulator" target="_blank">Emulator</a></li>
                    <li><a href="https://github.com/LambdaTest/hyperexecute-maestro-sample-test/tree/ios-simulator" target="_blank">Simulator</a></li>
                  </ul>
                </div>
              </div>
            </TabItem>
            
            <TabItem value="XCUI">
              <div className="lt_row ">
                <div className="lt_col lt_framework_wrapper">
                  <img loading="lazy" src={require('../../../assets/images/getting-started/xcui.jpeg').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
                  <ul className="lt_framework_list">
                    <li><a href="https://github.com/LambdaTest/hyperexecute-xcui-sample" target="_blank">XCUI</a></li>
                  </ul>
                </div>
              </div>
            </TabItem>
        </Tabs>
      </div> 
    </>
  )
}