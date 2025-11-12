---
id: smartui-appium-sdk
title: Integrate SmartUI SDK with Appium Tests
sidebar_label: Appium
description: In this documentation, learn how integrate your Appium automated tests with LambdaTest's SmartUI.
keywords:
  - Visual Regression
  - Visual Regression Testing Guide
  - Visual Regression Test Automation
  - Visual Regression Automation Testing
  - Running Visual Regression Tests
  - Visual Regression Testing Online
  - Run Visual Regression
  - Visual Regression Run Specific Test
  - Visual Regression Testing Environment
  - How to Run Visual Regression Tests
url: https://www.lambdatest.com/support/docs/smartui-appium-sdk/
slug: smartui-appium-sdk/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Smart Visual Testing",
          "item": "https://www.lambdatest.com/support/docs/smartui-appium-sdk/"
        }]
      })
    }}
></script>
Appium is an open-source tool for automating mobile application testing. It allows developers and testers to write tests for native, hybrid, and mobile web applications across multiple platforms, such as iOS and Android, using a single codebase.

The LambdaTest SmartUI SDK supports multiple programming languages for running Appium automation tests on mobile browsers. <br /> Below is the list of supported languages:

<div className='lt_row lt_framework_list_row'>
  <div className='lt_col lt_framework_wrapper'>
    <img loading="lazy" src={require('../assets/images/getting-started/java-icon.webp').default} alt="Java" width="200" height="200" className='language-icon no-zoom'/>
    <ul className='lt_framework_list'>
      <li><a href="/support/docs/smartui-appium-java-sdk/" target="_blank" style={{color: '#0a69da', textDecoration: 'underline'}} >Java</a></li>
    </ul>
  </div>

  <div className='lt_col lt_framework_wrapper'>
    <img loading="lazy" src={require('../assets/images/getting-started/color-js.webp').default} alt="Javascript" width="181" height="200" className='language-icon no-zoom'/>
    <ul className='lt_framework_list'>
      <li><a href="/support/docs/smartui-appium-hooks/" target="_blank" style={{color: '#0a69da', textDecoration: 'underline'}}>JavaScript</a></li>
    </ul>
  </div>

  <div className='lt_col lt_framework_wrapper'>
    <img loading="lazy" src={require('../assets/images/getting-started/python-icon.webp').default} alt="Python" width="200" height="200" className='language-icon no-zoom'/>
    <ul className='lt_framework_list'>
      <li><a href="/support/docs/smartui-appium-hooks/" target="_blank" style={{color: '#0a69da', textDecoration: 'underline'}}>Python</a></li>
    </ul>
  </div>

  <div className='lt_col lt_framework_wrapper'>
     <img loading="lazy" src={require('../assets/images/getting-started/ruby-icon.webp').default} alt="Ruby" width="200" height="200" className='language-icon no-zoom'/>
      <ul className='lt_framework_list'>
        <li><a href="/support/docs/smartui-appium-hooks/" target="_blank" style={{color: '#0a69da', textDecoration: 'underline'}}>Ruby</a></li>
    </ul>
  </div>

  <div className='lt_col lt_framework_wrapper'>
    <img loading="lazy" src={require('../assets/images/getting-started/c-sharp-icon.webp').default} alt="C#" width="200" height="200" className='language-icon no-zoom'/>
    <ul className='lt_framework_list'>
      <li><a href="/support/docs/smartui-appium-hooks/" target="_blank" style={{color: '#0a69da', textDecoration: 'underline'}}>C#</a></li>
    </ul>
  </div>
</div>

<div className='lt-framework-list-footer'>
  <p>We support all languages and frameworks that are compatible with Appium, so in case your favorite isn't in the table.<br/>Don't worry, you can still run the test. <span className='doc__lt' onClick={() => window.openLTChatWidget()}>Contact Us</span> for any help.</p>
</div>

## Next Steps

After selecting your preferred language, refer to the specific documentation for detailed integration steps:

- **[Java SDK](/support/docs/smartui-appium-java-sdk)** - Complete guide with best practices and troubleshooting
- **[Appium Hooks](/support/docs/smartui-appium-hooks)** - For JavaScript, Python, Ruby, and C# implementations

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) - Solutions for common issues
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) - Handle dynamic content in mobile apps
- [Baseline Management](/support/docs/smartui-baseline-management) - Manage your test baselines
- [Running Your First Project](/support/docs/smartui-running-your-first-project) - Get started with SmartUI