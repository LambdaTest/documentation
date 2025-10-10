import React from 'react'

export default function SmartUIHooksSupportedLanguage() {
    return (
        <>
            <div className="lt_framework_list_row">
                <div className="lt_row">
                    <div className="lt_col lt_framework_wrapper">
                        <img loading="lazy" src={require('../../../assets/images/getting-started/selenium.png').default} alt="Selenium" width="200" height="200" className="language-icon no-zoom"/>
                        <ul className="lt_framework_list"><li><a href="/support/docs/selenium-visual-regression/">Selenium</a></li></ul>
                    </div>
                    <div className="lt_col lt_framework_wrapper">
                        <img loading="lazy" src={require('../../../assets/images/getting-started/playwright.png').default} alt="Playwright" width="200" height="200" className="language-icon no-zoom"/>
                        <ul className="lt_framework_list"><li><a href="/support/docs/playwright-visual-regression/">Playwright</a></li></ul>
                    </div>
                    <div className="lt_col lt_framework_wrapper">
                        <img loading="lazy" src={require('../../../assets/images/getting-started/puppeteer.png').default} alt="Puppeteer" width="200" height="200" className="language-icon no-zoom"/>
                        <ul className="lt_framework_list"><li><a href="/support/docs/puppeteer-visual-regression/">Puppeteer</a></li></ul>
                    </div>
                    <div className="lt_col lt_framework_wrapper">
                        <img loading="lazy" src={require('../../../assets/images/getting-started/k6.png').default} alt="K6" width="200" height="200" className="language-icon"/>
                        <ul className="lt_framework_list"><li><a href="/support/docs/smartui-k6-setup/">K6</a></li></ul>
                    </div>
                    <div className="lt_col lt_framework_wrapper">
                        <img loading="lazy" src={require('../../../assets/images/getting-started/cypress_logo.png').default} alt="Cypress" width="200" height="200" className="language-icon no-zoom"/>
                        <ul className="lt_framework_list"><li><a href="/support/docs/smart-ui-cypress/">Cypress</a></li></ul>
                    </div>
                    <div className="lt_col lt_framework_wrapper">
                        <img loading="lazy" src={require('../../../assets/images/getting-started/appium.jpeg').default} alt="Appium" width="200" height="200" className="language-icon no-zoom"/>
                        <ul className="lt_framework_list"><li><a href="/support/docs/smartui-appium-hooks/">Appium</a></li></ul>
                    </div>
                    <div className="lt_col lt_framework_wrapper">
                        <img loading="lazy" src={require('../../../assets/images/getting-started/espresso.png').default} alt="Espresso" width="200" height="200" className="language-icon"/>
                        <ul className="lt_framework_list"><li><a href="/support/docs/espresso-visual-regression/">Espresso</a></li></ul>
                    </div>
                    <div className="lt_col lt_framework_wrapper">
                        <img loading="lazy" src={require('../../../assets/images/getting-started/xcui.jpeg').default} alt="XCUI" width="200" height="200" className="language-icon no-zoom"/>
                        <ul className="lt_framework_list"><li><a href="/support/docs/xcui-visual-regression/">XCUI</a></li></ul>
                    </div>
                </div>
            </div> 
        </>
    )
}
