---
id: teamwork-integration
title: Teamwork Integration With TestMu AI
hide_title: false
sidebar_label: Teamwork
description: TestMu AI helps you to push bugs directly in Teamwork project with details like task list, assignee, title and description with a single click.
keywords:
  - testmu ai integrations
  - push issues to clubhouse
  - free cross browser testing tool
  - cross platform testing tools
  - check browser compatibility online
  - testmu ai teamwork integration
  - integrate teamwork with testmu ai
  - create issue in teamwork from testmu ai
  - teamwork integration with testmu ai
  - create teamwork issues from teamwork
  - bug tracking tools
  - project management tools
url: https://www.testmuai.com/support/docs/teamwork-integration/
site_name: LambdaTest
slug: teamwork-integration/
canonical: https://www.testmu.ai/support/docs/teamwork-integration/
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
          "name": "Teamwork Integration",
          "item": `${BRAND_URL}/support/docs/teamwork-integration/`
        }]
      })
    }}
></script>
Teamwork Projects is a cloud-based project management tool that tracks project operations and business functionality. It is available on iOS, Android, Google Chrome, and the Web. <BrandName /> allows users to push bugs directly to the project.

<BrandName /> integrates with Teamwork Projects, allowing users to file issues directly to their chosen project, assign them to teammates, and attach necessary screenshots during a test session.

> Teamwork Integration with <BrandName /> is available for freemium as well as premium plan.

## Integrate Teamwork from your <BrandName /> Account

**Step 1:** Login to your <BrandName /> account. You should have Admin or User level access to see and install integrations.

**Step 2:** Click on Settings -> Integrations -> Project Management.

**Step 3:** Click on **Connect** button of `Teamwork` block.

**Step 4:** Now, provide your Teamwork API Token and Teamwork site address to establish integration with <BrandName /> and click on **install** button.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/integration/project-management/teamwork/teamwork-integration.mp4').default} type="video/mp4" />
</video>

:::info Fetch your Teamwork API Token

- Visit your Teamwork account -> **Edit my details** button.
- You will find the "**API Token**" under the section **API & Mobile**. Copy your API token.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/integration/project-management/teamwork/api-key.mp4').default} type="video/mp4" />
</video>

:::

## Lodge your First Bug

> Note: If you are using Teamwork for the first time, then make sure to create a project for yourself. It is a pre-requisite in order to push screenshots from your <BrandName /> account.

**Step 1:** Start with any type of testing, for the demo purpose we are going with the **Real Time Testing**.

**Step 2:** Enter your Project URL and configure for browser and operating system of your choice & hit **Start**.

**Step 3:** After the VM is launched and operable. You can perform testing on your web-app for finding bugs. If a bug gets revealed, then you need to click on the Bug icon from the left panel for capturing a screenshot of the same.

**Step 4:** After clicking on "Mark as Bug" button a Teamwork specific form would open up. Fill the fields as per your requirement.
- Select which project should the ticket go under.
- Set which Task List should the bug go under.
- Set the priority of the issue.
- Mention the Title as well to easily organize your bugs.
- Write a description to help relate the cause of the issue or the task.

**Step 5:** Click on **Mark as Bug** button. Now go to your dashboard and check a ticket will be created for the same.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/integration/project-management/teamwork/lodge-bug.mp4').default} type="video/mp4" />
</video>

## Uninstall Teamwork Integration

**Step 1:** Login to your <BrandName /> account. You should have Admin or User level access to see and install integrations.

**Step 2:** Click on Settings -> Integrations -> Project Management.

**Step 3:** Click on the **Remove** button.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/integration/project-management/teamwork/uninstall-teamwork.mp4').default} type="video/mp4" />
</video>

> That was all you need to know for <BrandName /> + Teamwork Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**available on chat**</span> to help you out with any roadblock regarding our product. Happy testing!

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
        Teamwork Integration
      </span>
    </li>
  </ul>
</nav>
