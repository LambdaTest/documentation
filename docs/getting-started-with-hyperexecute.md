---
id: getting-started-with-hyperexecute
title: Getting started with Hyperexecute
hide_title: true
sidebar_label: HyperExecute 
description: Get started with HyperExecute on LambdaTest for faster web automation tests using Matrix and Auto-Split strategies. Test with Selenium languages at high speeds.
keywords:
  - lambdatest automation
  - lambdatest hyperexecute
  - hyperexecute automation grid
  - hyperexecute grid online
  - online hyperexecute grid
  - hyperexecute automation grid online
  - lambdatest hypterest tutorial
  - hyperexecute getting started
  - lambdatest hyperexecute getting started
  - hyperexecute automation testing
  - hyperexecute matrix execution
  - hyperexecute autosplit execution
  - hyperexecute auto-split execution
image: /assets/images/og-images/Getting-Started-with-Lambdatest-Automation.jpg
url: https://www.lambdatest.com/support/docs/getting-started-with-hyperexecute
site_name: LambdaTest
slug: getting-started-with-hyperexecute/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Getting Started With HyperExecute on LambdaTest",
          "item": "https://www.lambdatest.com/support/docs/getting-started-with-hyperexecute"
        }]
      })
    }}
></script>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Started with HyperExecute 
* * *
HyperExecute is an AI Powered Test Orchestration Cloud Platform, enabling test automation teams worldwide to achieve an accelerated time to market by providing JIT (Just-in-time) testing infrastructure that offers enhanced test execution speeds, smart test orchestration, detailed execution logs and much more.

It requires a [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/) file which contains all the necessary instructions and a [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution [`Job`](/support/docs/hyperexecute-concepts/#1-jobs).

<img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/hyperexecute.png').default} alt="Image"  className="doc_img"/>

> See our [Guided walkthrough](/support/docs/hyperexecute-guided-walkthrough/) to learn more. 
You can also find us on the [Microsoft Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/lambdatestinc1584019832435.hyper_execute?exp=ubp8&tab=Overview).

<div className="support_main">
  <a href="/support/docs/hyperexecute-running-your-first-job/">
    <div className="support_inners">
      <h3>Running Your First Job on HyperExecute</h3>
      <p>A step-by-step walkthrough of how to run your first job on the HyperExecute Platform.</p>
    </div>
  </a>
   <a href="/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/">
    <div className="support_inners"> 
      <h3>HyperExecute CLI</h3>
      <p>Understand how you can initiate jobs using our CLI from your local setup or CI/CD pipelines.</p>
    </div>
  </a>
   <a href="/support/docs/deep-dive-into-hyperexecute-yaml/">
    <div className="support_inners">
      <h3>HyperExecute YAML</h3>
      <p>Learn about the different configurations & creating a YAML suited for your needs.</p>
    </div>
  </a>
  <a href="/support/docs/hyperexecute-concepts/">
    <div className="support_inners">
      <h3>Concepts</h3>
      <p>Everything you need to know about HyperExecute concepts and how it works.</p>
    </div>
  </a>
  <a href="/support/docs/key-features-of-hyperexecute/">
    <div className="support_inners">
      <h3>Key Features</h3>
      <p>Learn about the different features and how you can use them in your project.</p>
    </div>
  </a>
  <a href="/support/docs/hyperexecute-vs-traditional-test-grids/">
    <div className="support_inners">
      <h3>HyperExecute vs Traditional Test grids</h3>
      <p>Understand how we expedite test execution as compared to traditional grids.</p>
    </div>
  </a>
  <a href="/support/docs/hyperexecute-private-cloud-setup/">
    <div className="support_inners">
      <h3>HyperExecute Private Cloud</h3>
      <p>Learn how to setup HyperExecute Private Cloud for your organization.</p>
    </div>
  </a>
  <a href="/support/docs/integration-with-hyperexecute/">
    <div className="support_inners">
      <h3>Integrations</h3>
      <p>Know how to setup with your CI/CD, Project management tools and LambdaTest products.</p>
    </div>
  </a>
</div>

<!-- Here are all the languages and frameworks supported by HyperExecute Grid. -->

<div className= "lt_framework_list_row">
<p></p>
<p> </p>
<Tabs
  groupId="languages"
  defaultValue= 'Selenium'
  values={[
    {label: 'Selenium', value: 'Selenium'},
    {label: 'Puppeteer', value: 'Puppeteer'},
     {label: 'Playwright', value: 'Playwright'},
     {label: 'Cypress', value: 'Cypress'},
     {label: 'Appium', value: 'Appium' },
     {label: 'Espresso', value: 'Espresso' },
     {label: 'Maestro', value: 'Maestro' },
     {label: 'XCUI', value: 'XCUI' },
  ]}>

<TabItem value="Selenium">
<div className="lt_row">
<div className="lt_col lt_framework_wrapper">
 <img loading="lazy" src={require('../assets/images/getting-started/java-icon.webp').default} alt="Java" width="200" height="200" className="language-icon no-zoom"/>
  <ul className="lt_framework_list">
    <li>
      <a href="/support/docs/testng-on-hyperexecute-grid/">TestNG</a>
    </li>
    <li>
      <a href="/support/docs/junit-on-hyperexecute-grid/">JUnit</a>
    </li>
    <li>
      <a href="/support/docs/cucumber-on-hyperexecute-grid/">Cucumber</a>
    </li>
  </ul>
</div>
<div className="lt_col lt_framework_wrapper">
  <img loading="lazy" src={require('../assets/images/getting-started/color-js.webp').default} alt="JavaScript" width="200" height="200" className="language-icon no-zoom"/>
  <ul className="lt_framework_list">
    <li>
      <a href="/support/docs/webdriverio-on-hyperexecute-grid/">WebdriverIO</a>
    </li>
    <li>
      <a href="/support/docs/protractor-on-hyperexecute-grid/">Protractor</a>
    </li>
    <li>
      <a href="/support/docs/nightwatch-on-hyperexecute-grid/">Nightwatch</a>
    </li>
  </ul>
</div>
<div className="lt_col lt_framework_wrapper">
 <img loading="lazy" src={require('../assets/images/getting-started/c-sharp-icon.webp').default} alt="C#" width="200" height="200" className="language-icon no-zoom"/>
  <ul className="lt_framework_list">
    <li>
      <a href="/support/docs/nunit-on-hyperexecute-grid/">NUnit</a>
    </li>
    <li>
      <a href="/support/docs/specflow-on-hyperexecute-grid/">SpecFlow</a>
    </li>
  </ul>
</div>
<div className="lt_col lt_framework_wrapper">
  <img loading="lazy" src={require('../assets/images/getting-started/python-icon.webp').default} alt="Python" width="200" height="200" className="language-icon no-zoom"/>
  <ul className="lt_framework_list">
    <li>
      <a href="/support/docs/pyunit-on-hyperexecute-grid/">PyUnit</a>
    </li>
    <li>
      <a href="/support/docs/pytest-on-hyperexecute-grid/">PyTest</a>
    </li>
    <li>
      <a href="/support/docs/robot-on-hyperexecute-grid/">Robot</a>
    </li>
    <li>
      <a href="/support/docs/behave-on-hyperexecute-grid/">Behave</a>
    </li>
  </ul>
</div>
<div className="lt_col lt_framework_wrapper">
  <img loading="lazy" src={require('../assets/images/getting-started/ruby-icon.webp').default} alt="Ruby" width="200" height="200" className="language-icon no-zoom"/>
  <ul className="lt_framework_list">
    <li>
      <a href="/support/docs/ruby-on-hyperexecute-grid/">Ruby</a>
    </li>
    <li>
      <a href="/support/docs/capybara-on-hyperexecute-grid/">Capybara</a>
    </li>
  </ul>
</div>
</div>
</TabItem>

<TabItem value="Puppeteer">
<div className="lt_row ">
    <div className="lt_col lt_framework_wrapper">
      <img loading="lazy" src={require('../assets/images/getting-started/color-js.webp').default} alt="JavaScript" width="200" height="200" className="language-icon no-zoom"/>
      <ul className="lt_framework_list">
        <li>
          <a href="/support/docs/jest-on-hyperexecute/">Jest</a>
        </li>
        <li>
          <a href="/support/docs/mocha-on-hyperexecute/">Mocha</a>
        </li>
         <li>
          <a href="/support/docs/codecept-on-hyperexecute/">CodeceptJs</a>
        </li>
      </ul>
    </div>
    </div>
</TabItem>

<TabItem value="Playwright">
<div className="lt_row">
<div className="lt_col lt_framework_wrapper">
  <img loading="lazy" src={require('../assets/images/getting-started/python-icon.webp').default} alt="Python" width="200" height="200" className="language-icon no-zoom"/>
      <ul className="lt_framework_list">
        <li>
          <a href="/support/docs/pytest-on-hyperexecute/">PyTest</a>
        </li>
        <li>
          <a href="/support/docs/playwright-python-on-hyperexecute/">Python</a>
        </li>
      </ul>
    </div>
    <div className="lt_col lt_framework_wrapper">
  <img loading="lazy" src={require('../assets/images/getting-started/color-js.webp').default} alt="Javascript" width="200" height="200" className="language-icon no-zoom"/>
      <ul className="lt_framework_list">
        <li>
          <a href="/support/docs/playwright-vanillajs-on-hyperexecute/">VanillaJs</a>
        </li>
        <li>
          <a href="/support/docs/playwright-codeceptjs-on-hyperexecute/">CodeceptJs</a>
        </li>
        <li>
          <a href="/support/docs/playwright-jest-on-hyperexecute/">Jest</a>
        </li>
      </ul>
    </div>
    <div className="lt_col lt_framework_wrapper">
  <img loading="lazy" src={require('../assets/images/getting-started/java-icon.webp').default} alt="Java" width="200" height="200" className="language-icon no-zoom"/>
      <ul className="lt_framework_list">
        <li>
          <a href="/support/docs/playwright-junit-on-hyperexecute/">JUnit</a>
        </li>
      </ul>
    </div>
     <div className="lt_col lt_framework_wrapper">
  <img loading="lazy" src={require('../assets/images/getting-started/c-sharp-icon.webp').default} alt="C#" width="200" height="200" className="language-icon no-zoom"/>
      <ul className="lt_framework_list">
        <li>
          <a href="/support/docs/playwright-dotnet-on-hyperexecute/">.Net</a>
        </li>
      </ul>
    </div>
     <div className="lt_col lt_framework_wrapper">
      <ul className="lt_framework_list">
        <li>
        </li>
        <li>     
        </li>
      </ul>
    </div>
     <div className="lt_col lt_framework_wrapper">
      <ul className="lt_framework_list">
        <li>
        </li>
        <li>     
        </li>
      </ul>
    </div>
     <div className="lt_col lt_framework_wrapper">
      <ul className="lt_framework_list">
        <li>
        </li>
        <li>     
        </li>
      </ul>
    </div>
     <div className="lt_col lt_framework_wrapper">
      <ul className="lt_framework_list">
        <li>
        </li>
        <li>     
        </li>
      </ul>
    </div>
     <div className="lt_col lt_framework_wrapper">
      <ul className="lt_framework_list">
        <li>
        </li>
        <li>     
        </li>
      </ul>
    </div>
    </div>
</TabItem>

<TabItem value="Cypress">
<div className="lt_row ">
    <div className="lt_col lt_framework_wrapper">
      <img loading="lazy" src={require('../assets/images/getting-started/cypress_logo.png').default} alt="JavaScript" width="200" height="200" className="language-icon no-zoom"/>
      <ul className="lt_framework_list">
        <li>
          <a href="/support/docs/cypressv9-on-hyperexecute/">Cypress v9</a>
        </li>
        <li>
          <a href="/support/docs/cypressv10-on-hyperexecute/">Cypress v10</a>
        </li>
      </ul>
    </div>
    </div>
</TabItem>

<TabItem value="Appium">
<div className="lt_row ">
    <div className="lt_col lt_framework_wrapper">
      <img loading="lazy" src={require('../assets/images/getting-started/appium.jpeg').default} alt="JavaScript" width="200" height="200" className="language-icon no-zoom"/>
      <ul className="lt_framework_list">
        <li>
          <a href="/support/docs/hyperexecute-appium-testing/">Mobile Application</a>
        </li>
        <li>
          <a href="/support/docs/hyperexecute-webapp-appium-testing/">Web Application</a>
        </li>
      </ul>
    </div>
    </div>
</TabItem>

<TabItem value="Espresso">
<div className="lt_row ">
    <div className="lt_col lt_framework_wrapper">
      <img loading="lazy" src={require('../assets/images/getting-started/espresso.png').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
      <ul className="lt_framework_list">
        <li>
          <a href="/support/docs/hyperexecute-espresso-testing/">Espresso</a>
        </li>
      </ul>
    </div>
    </div>
</TabItem>

<TabItem value="Maestro">
<div className="lt_row ">
    <div className="lt_col lt_framework_wrapper">
      <img loading="lazy" src={require('../assets/images/getting-started/maestro.png').default} alt="JavaScript" width="200" height="200" className="language-icon no-zoom"/>
      <ul className="lt_framework_list">
        <li>
          <a href="/support/docs/hyperexecute-maestro-testing/">Maestro</a>
        </li>
      </ul>
    </div>
    </div>
</TabItem>

<TabItem value="XCUI">
<div className="lt_row ">
    <div className="lt_col lt_framework_wrapper">
      <img loading="lazy" src={require('../assets/images/getting-started/xcui.jpeg').default} alt="JavaScript" width="200" height="200" className="language-icon no-zoom"/>
      <ul className="lt_framework_list">
        <li>
          <a href="/support/docs/hyperexecute-xcui-testing/">XCUI</a>
        </li>
      </ul>
    </div>
    </div>
</TabItem>

</Tabs>
</div>


<div className="lt-framework-list-footer">
    <p>In case your favorite framework or tool isn't listed here, just give us a <span className="doc__lt" onClick={() => window.openLTChatWidget()}>Shout Out Here</span>.
    <br/>In case of any other problems, feel free to <span className="doc__lt" onClick={() => window.openLTChatWidget()}>Contact Us</span>.</p>
  </div>

> HyperExecute supports multiple languages and testing frameworks. See the comprehensive list & samples [here](/support/docs/hyperexecute-supported-languages-and-frameworks/).

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
       Languages and Frameworks Supported By HyperExecute Grid
      </span>
    </li>
  </ul>
</nav>

