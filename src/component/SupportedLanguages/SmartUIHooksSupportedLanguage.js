import React from 'react'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function SmartUIHooksSupportedLanguage() {
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
                    {label: 'K6', value: 'K6'},
                    {label: 'Cypress', value: 'Cypress'},
                    {label: 'Appium', value: 'Appium' },
                    {label: 'Espresso', value: 'Espresso' },
                ]}>
                    <TabItem value="Selenium">
                        <div className="lt_row">
                            <div className="lt_col lt_framework_wrapper">
                                <img loading="lazy" src={require('../../../assets/images/getting-started/selenium.png').default} alt="Java" width="200" height="200" className="language-icon no-zoom"/>
                                <ul className="lt_framework_list"><li><a href="/support/docs/selenium-visual-regression/">Selenium</a></li></ul>
                            </div>
                        </div>
                    </TabItem>

                    <TabItem value="Playwright">
                        <div className="lt_row">
                            <div className="lt_col lt_framework_wrapper">
                                <img loading="lazy" src={require('../../../assets/images/getting-started/playwright.png').default} alt="Javascript" width="200" height="200" className="language-icon no-zoom"/>
                                <ul className="lt_framework_list"><li><a href="/support/docs/playwright-visual-regression/">Playwright</a></li></ul>
                            </div>
                        </div>
                    </TabItem>
                    
                    <TabItem value="Puppeteer">
                        <div className="lt_row ">
                            <div className="lt_col lt_framework_wrapper">
                                <img loading="lazy" src={require('../../../assets/images/getting-started/puppeteer.png').default} alt="JavaScript" width="200" height="200" className="language-icon no-zoom"/>
                                <ul className="lt_framework_list"><li><a href="/support/docs/puppeteer-visual-regression/">Puppeteer</a></li></ul>
                            </div>
                        </div>
                    </TabItem>

                    <TabItem value="K6">
                        <div className="lt_row ">
                            <div className="lt_col lt_framework_wrapper">
                                <img loading="lazy" src={require('../../../assets/images/getting-started/k6.png').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
                                <ul className="lt_framework_list"><li><a href="/support/docs/smartui-k6-setup/">K6</a></li></ul>
                            </div>
                        </div>
                    </TabItem>
                    
                    <TabItem value="Cypress">
                        <div className="lt_row ">
                            <div className="lt_col lt_framework_wrapper">
                                <img loading="lazy" src={require('../../../assets/images/getting-started/cypress_logo.png').default} alt="JavaScript" width="200" height="200" className="language-icon no-zoom"/>
                                <ul className="lt_framework_list"><li><a href="/support/docs/smart-ui-cypress/">Cypress</a></li></ul>
                            </div>
                        </div>
                    </TabItem>

                    <TabItem value="Appium">
                        <div className="lt_row ">
                            <div className="lt_col lt_framework_wrapper">
                                <img loading="lazy" src={require('../../../assets/images/getting-started/appium.jpeg').default} alt="JavaScript" width="200" height="200" className="language-icon no-zoom"/>
                                <ul className="lt_framework_list"><li><a href="/support/docs/appium-visual-regression/">Appium</a></li></ul>
                            </div>
                        </div>
                    </TabItem>

                    <TabItem value="Espresso">
                        <div className="lt_row ">
                            <div className="lt_col lt_framework_wrapper">
                                <img loading="lazy" src={require('../../../assets/images/getting-started/espresso.png').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
                                <ul className="lt_framework_list"><li><a href="/support/docs/espresso-visual-regression/">Espresso</a></li></ul>
                            </div>
                        </div>
                    </TabItem>
                </Tabs>
            </div> 
        </>
    )
}
