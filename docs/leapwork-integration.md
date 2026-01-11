---
id: leapwork-integration
title: How to Perform Automation Testing with LEAPWORK and TestMu AI
hide_title: true
sidebar_label: Leapwork
description: In our latest attempt to make life easy for testers, TestMu AI integrates with LeapWork to make your automation flows more seamless than ever before.
keywords:
- TestMu AI Leapwork
- Leapwork Integration
- TestMu AI Leapwork Integration
- Codeless Automation Testing
- Codeless Automation Tool
- Leapwork Test Automation
- Leapwork Automation Requirement
- Codeless Automation
- Leapwork Automation
- Leapwork Automation Tool
- Leapwork Automation Testing Tool
- Leapwork Automation Platform

url: https://www.testmu.ai/support/docs/leapwork-integration-with-testmu
site_name: LambdaTest
slug: leapwork-integration-with-testmu
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "LEAPWORK LambdaTest Integration",
          "item": `${BRAND_URL}/support/docs/leapwork-integration-with-testmu/`
        }]
      })
    }}
></script>

# LEAPWORK Integration with <BrandName />
* * *
[LEAPWORK](https://www.leapwork.com/) is a test automation platform that provides easy and completely visual codeless automation. With LEAPWORK, you can build test automation cases without writing a single line of code, transform those test cases into an automation flow for faster and greater coverage. It also provides seamless integration to various CI/CD and DevOps tools.

<BrandName /> has integrated with LEAPWORK to make your test automation more seamless than before. Now, you will be able to perform cross browser testing for over 3000+ browsers, devices, and operating systems at the click of a few buttons. Test automation was never so easy!

## How To Integrate <BrandName /> With LEAPWORK?
-----------------------------------------------------------------------------------------------------------------------------
LEAPWORK assigns ‘Agents’, or available machines, for you to execute automation flows. These ‘agents’ can then be used to set up ‘Schedules’ or run automation flows. In order to integrate LEAPWORK with <BrandName />, you will need to create an agent with web-only capabilities for <BrandName />.

**Step 1:** In LEAPWORK Studio, go to the ‘Agents’ section and select 'New'.

<img loading="lazy" src={require('../assets/images/Leapwork/Leapwork-1.webp').default} alt="New Leapwork Agent" width="1364" height="727" className="doc_img"/>

**Step 2:** Choose Agent type '<BrandName />' from the drop-down menu.

<img loading="lazy" src={require('../assets/images/Leapwork/LW-4.webp').default} alt="Leapwork <BrandName /> integration" width="1366" height="726" className="doc_img"/>

**Step 3:** Log in to your '<BrandName />' profile. If you haven’t done that already, sign up right [here](https://accounts.lambdatest.com/dashboard).

**Step 4:** Go to your profile in the top-right corner. Fetch the username and access token key for the next step.

<img loading="lazy" src={require('../assets/images/Leapwork/LW-5.webp').default} alt="Fetch username and access key" width="1350" height="650" className="doc_img"/>

**Step 5:** Go back to LEAPWORK Studio, where we selected <BrandName /> in Step 2, and this window popped up.

<img loading="lazy" src={require('../assets/images/Leapwork/LW-7.webp').default} alt="Leapwork Agent Settings" width="335" height="581" className="doc_img"/>

As you already know, <BrandName /> provides cross browser testing on more than 2000 devices, browsers, and operating systems. You can choose to perform manual as well as automated browser testing on our cloud-based platform.

This is where you-

  * Provide a title for the Agent, e.g., '<BrandName />' or anything that you like.
  * Provide the IP address, machine name, or DNS name for the <BrandName />’s Hub
  * Specify <BrandName /> Port – the default is 80.
  * Enter your <BrandName /> username and access (refer- Step 4.)
  * Specify the desired "Platform & OS." A drop-down will appear once you navigate to that section.
  * For the selected platform, specify the platform version from the drop-down list on which you would like to execute the test.
  * Specify the browser from the drop-down list on which you would like to execute the test.
  * You can specify the browser version if the test has to be executed on a specific version. Otherwise, you can select ‘latest,’ which will automatically run the test case on the latest available browser version.
  * Specify the desired screen resolution to be used while executing automation flows on <BrandName />’s machine.
  * Lastly, the description is completely optional. You can add some text here to keep the created Agent in mind.

**Step 6:** Enter your Hostname (hub), Username, and Access Key in the highlighted sections. This is the most important part, you can enter the rest of the options according to your requirements. Under the Hostname, you just need to enter the following address-

Hub.lambdatest.com

<img loading="lazy" src={require('../assets/images/Leapwork/LW-6.webp').default} alt="Leapwork Agent Settings Section" width="318" height="563" className="doc_img"/>

**Step 7:** After entering all the desired specifications, navigate to 'Test connection', and click it. If the environment was set up properly, Studio would display 'Successfully connected' in green.

<img loading="lazy" src={require('../assets/images/Leapwork/LW-8.webp').default} alt="Leapwork Automation Test Connection" width="317" height="566" className="doc_img"/>

Now you can go ahead and save the <BrandName /> environment in the studio, which can be used anytime for scheduling your automation flows.

In case you face any problems during the integration, or have any other questions, reach out to us on our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span>.

Happy testing! 🙂

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="/support/docs/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">LEAPWORK <BrandName /> Integration</span>
    </li>
  </ul>
</nav>
