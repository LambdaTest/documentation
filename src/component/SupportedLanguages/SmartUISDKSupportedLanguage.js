import React from 'react'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function SmartUISDKSupportedLanguage() {
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
                    {label: 'TestCafe', value: 'TestCafe'},
                    {label: 'Cypress', value: 'Cypress'},
                    {label: 'Appium', value: 'Appium' },
                    {label: 'WebdriverIO', value: 'WebdriverIO' },
                ]}>
                    <TabItem value="Selenium">
                        <div className="lt_row">
                            <div className="lt_col lt_framework_wrapper">
                                <img loading="lazy" src={require('../../../assets/images/getting-started/java-icon.webp').default} alt="Java" width="200" height="200" className="language-icon no-zoom"/>
                                <ul className="lt_framework_list"><li><a href="/support/docs/smartui-selenium-java-sdk/">Java</a></li></ul>
                            </div>
                            <div className="lt_col lt_framework_wrapper">
                                <img loading="lazy" src={require('../../../assets/images/getting-started/color-js.webp').default} alt="JavaScript" width="200" height="200" className="language-icon no-zoom"/>
                                <ul className="lt_framework_list"><li><a href="/support/docs/smartui-selenium-js-sdk/">JavaScript</a></li></ul>
                            </div>
                            <div className="lt_col lt_framework_wrapper">
                                <img loading="lazy" src={require('../../../assets/images/getting-started/c-sharp-icon.webp').default} alt="C#" width="200" height="200" className="language-icon no-zoom"/>
                                <ul className="lt_framework_list"><li><a href="/support/docs/smartui-selenium-csharp-sdk/">C#</a></li></ul>
                            </div>
                            <div className="lt_col lt_framework_wrapper">
                                <img loading="lazy" src={require('../../../assets/images/getting-started/python-icon.webp').default} alt="Python" width="200" height="200" className="language-icon no-zoom"/>
                                <ul className="lt_framework_list"><li><a href="/support/docs/smartui-selenium-python-sdk/">Python</a></li></ul>
                            </div>
                            <div className="lt_col lt_framework_wrapper">
                                <img loading="lazy" src={require('../../../assets/images/getting-started/ruby-icon.webp').default} alt="Ruby" width="200" height="200" className="language-icon no-zoom"/>
                                <ul className="lt_framework_list"><li><a href="/support/docs/smartui-selenium-ruby-sdk/">Ruby</a></li></ul>
                            </div>
                        </div>
                    </TabItem>

                    <TabItem value="Playwright">
                        <div className="lt_row">
                            <div className="lt_col lt_framework_wrapper">
                                <img loading="lazy" src={require('../../../assets/images/getting-started/color-js.webp').default} alt="Javascript" width="200" height="200" className="language-icon no-zoom"/>
                                <ul className="lt_framework_list"><li><a href="/support/docs/smartui-playwright-sdk/">JavaScript</a></li></ul>
                            </div>
                            <div className="lt_col lt_framework_wrapper">
                                <img loading="lazy" src={require('../../../assets/images/getting-started/python-icon.webp').default} alt="Python" width="200" height="200" className="language-icon no-zoom"/>
                                <ul className="lt_framework_list"><li><a href="/support/docs/smartui-playwright-python-sdk/">Python</a></li></ul>
                            </div>
                            <div className="lt_col lt_framework_wrapper"><ul className="lt_framework_list"><li></li></ul></div>
                            <div className="lt_col lt_framework_wrapper"><ul className="lt_framework_list"><li></li></ul></div>
                            <div className="lt_col lt_framework_wrapper"><ul className="lt_framework_list"><li></li></ul></div>
                            <div className="lt_col lt_framework_wrapper"><ul className="lt_framework_list"><li></li></ul></div>
                        </div>
                    </TabItem>
                    
                    <TabItem value="Puppeteer">
                        <div className="lt_row ">
                            <div className="lt_col lt_framework_wrapper">
                                <img loading="lazy" src={require('../../../assets/images/getting-started/color-js.webp').default} alt="JavaScript" width="200" height="200" className="language-icon no-zoom"/>
                                <ul className="lt_framework_list"><li><a href="/support/docs/smartui-puppeteer-sdk/">Puppeteer</a></li></ul>
                            </div>
                        </div>
                    </TabItem>

                    <TabItem value="TestCafe">
                        <div className="lt_row ">
                            <div className="lt_col lt_framework_wrapper">
                                <img loading="lazy" src={require('../../../assets/images/getting-started/testcafe.png').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
                                <ul className="lt_framework_list"><li><a href="/support/docs/smartui-testcafe-sdk/">TestCafe</a></li></ul>
                            </div>
                        </div>
                    </TabItem>
                    
                    <TabItem value="Cypress">
                        <div className="lt_row ">
                            <div className="lt_col lt_framework_wrapper">
                                <img loading="lazy" src={require('../../../assets/images/getting-started/cypress_logo.png').default} alt="JavaScript" width="200" height="200" className="language-icon no-zoom"/>
                                <ul className="lt_framework_list"><li><a href="/support/docs/smartui-cypress-sdk/">Cypress</a></li></ul>
                            </div>
                        </div>
                    </TabItem>

                    <TabItem value="Appium">
                        <div className="lt_row ">
                            <div className="lt_col lt_framework_wrapper">
                                <img loading="lazy" src={require('../../../assets/images/getting-started/appium.jpeg').default} alt="JavaScript" width="200" height="200" className="language-icon no-zoom"/>
                                <ul className="lt_framework_list"><li><a href="/support/docs/smartui-appium-sdk/">Appium</a></li></ul>
                            </div>
                        </div>
                    </TabItem>

                    <TabItem value="WebdriverIO">
                        <div className="lt_row ">
                            <div className="lt_col lt_framework_wrapper">
                                <img loading="lazy" src={require('../../../assets/images/getting-started/webdriverio.png').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
                                <ul className="lt_framework_list"><li><a href="/support/docs/smartui-wdio-sdk/">WebdriverIO</a></li></ul>
                            </div>
                        </div>
                    </TabItem>
                </Tabs>
            </div> 
        </>
    )
}
