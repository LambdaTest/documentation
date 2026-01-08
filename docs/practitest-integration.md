---
id: practitest-integration
title: PractiTest Integration with TestMu AI
hide_title: false
sidebar_label: PractiTest
description: TestMu AI provides integrations with PractiTest to help you log bugs directly from the middle of your test session on TestMu AI to your PractiTest.
keywords:
  - testmu ai integrations
  - push issues to PractiTest
  - free cross browser testing tool
url: https://www.testmu.ai/support/docs/practitest-integration
site_name: LambdaTest
slug: practitest-integration
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
          "name": "PractiTest Integration",
          "item": `${BRAND_URL}/support/docs/practitest-integration/`
        }]
      })
    }}
></script>

[PractiTest](https://www.practitest.com/) is a QA and test management solution to provide users with better control of their testing and development process. Enabling organizations to guarantee visibility and communication with relevant stakeholders. It also helps project development teams to streamline and manage their testing processes while providing management with a clear and simple view of their project status at all times.

<BrandName />'s integration with PractiTest will further help to log bugs to your projects on PractiTest. You can easily find and report any cross browser compatibility issues to your team instantly.

## Integrate PractiTest from your <BrandName /> Account

**Step 1:** Login to your <BrandName /> account. You should have Admin or User level access to see and install integrations.

**Step 2:** Click on Settings -> Integrations -> Project Management.

**Step 3:** Click on **Connect** button of PractiTest block.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/practitest-integration/1.mp4').default} type="video/mp4" />
</video>

**Step 4:** Now, provide your PractiTest API Token and Teamwork site address to establish integration with <BrandName /> and click on install button.

:::tip How to Get your API Token

Visit your PractiTest Dashboard -> Settings -> API Tokens.
<img loading="lazy" src={require('../assets/images/practitest-integration/1.jpeg').default} alt="PractiTest Integration" width="1024" height="617" className="doc_img"/>
:::

## Lodge your First Bug

**Step 1:** Start with any type of testing, for the demo purpose we are going with the **Real Time Testing**.

**Step 2:** Enter your **Project URL** and configure for **browser** and **operating system** of your choice & hit Start.

**Step 3:** After the VM is launched and operable. You can perform testing on your web-app for finding bugs. If a bug gets revealed, then you need to click on the Bug icon from the left panel for capturing a screenshot of the same.

**Step 4:** After clicking on "**Mark as Bug**" button a PractiTest specific form would open up. Fill the fields as per your requirement.

- Select which project should the ticket go under.
- Set which Task List should the bug go under.
- Set the priority of the issue.
- Mention the Title as well to easily organize your bugs.
- Write a description to help relate the cause of the issue or the task.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/practitest-integration/2.mp4').default} type="video/mp4" />
</video>

## Uninstall PractiTest Integration

**Step 1:** Login to your <BrandName /> account. You should have Admin or User level access to see and install integrations.

**Step 2:** Click on Settings -> Integrations -> Project Management.

**Step 3:** Click on the **Remove** button.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/practitest-integration/3.mp4').default} type="video/mp4" />
</video>

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        PractiTest Integration
      </span>
    </li>
  </ul>
</nav>


  
