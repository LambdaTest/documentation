---
id: mark-as-bug-in-automation-testing
title: Mark as Bug in Automation Testing
sidebar_label: File a Bug From a Session
description: Log bugs from automation test sessions directly to Jira, Trello, and other project management tools.
keywords:
  - mark as bug automation testing
  - log bug from selenium session
  - jira integration bug reporting
  - automation test bug tracking
  - report bug from test session
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/mark-as-bug-in-automation-testing/
site_name: TestMu AI
slug: mark-as-bug-in-automation-testing/
canonical: https://www.testmuai.com/support/docs/mark-as-bug-in-automation-testing/
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
          "name": "Mark As Bug In Automation Testing",
          "item": `${BRAND_URL}/support/docs/mark-as-bug-in-automation-testing/`
        }]
      })
    }}
></script>

# Mark as Bug in Automation Testing

* * *

>You can skip the steps of capturing a screenshot, annotating it, and logging onto a separate tool to create a task. TestMu AI does it all for you.  
>**Mark as Bug** is a feature that lets you highlight any UI observation from your test sessions on TestMu AI and share it with your colleagues on their favorite project management or bug tracking tools such as Jira, Trello, Hive, Paymo, and more. You can choose the assignee who handles your reported task or bug. You can also mention a description to help them understand the issue. You can do all of this while testing on TestMu AI, without hopping to any other platform or tool.

**Note:** Mark as Bug is available across every type of testing on TestMu AI. Below are the various types of testing we offer:
* **Real Time Testing:** Test your web-app with live interaction by running it on VMs hosted by TestMu AI cloud server.
* **Screenshot Testing:** Automated bulk screenshot testing on 25 (browsers + OS) combinations in a single test session.
* **Responsive Testing:** Perform cross-browser testing across a variety of mobile and desktop devices to ensure your website renders well across different viewports. Run responsive testing on 46 devices in a single test session.
* **Automation Testing:** Perform automated cross-browser testing with our on-cloud Selenium Grid. Execute parallel testing to reduce your test cycles. Our Selenium Grid is compatible with every [test automation](https://www.testmuai.com/automation-testing/) framework that supports Selenium.
* **Smart UI Testing:** Automated visual regression testing that performs a pixel-to-pixel comparison between multiple images and highlights any UI deviations such as padding, icon, text, and more with respect to the baseline images.

**Did You Know?**

TestMu AI offers more than 2000 real browsers and browser versions on every type of testing so you can maximize test coverage of your cross-browser testing.

## How to Mark as Bug in Automation Testing
---
Log a bug directly from the automation test session to your integrated project management tool.

1. Visit the **Automation** tab from the left navigation menu to go to the automation console. Go to **AUTOMATION LOGS**.

<img loading="lazy" src={require('../assets/images/uploads/automation-dashboard.webp').default} alt="real time testing" width="1919" height="902" className="doc_img"/>

2. In the automation logs, you can access various logs of your test script execution such as network logs, command logs, and more. By default, you are routed to **SUMMARY**. In summary, you will find a button to **Create Issue**.

<img loading="lazy" src={require('../assets/images/mark-as-bug-in-automation-testing/mark-in-bug-summary.webp').default} alt="automation logs" width="1919" height="903" className="doc_img"/>

As you click on the **bug** icon, an integration-specific form opens up. Fill the fields as needed. For instance, if you have installed the TestMu AI + JIRA integration, you can fill the below fields:
>* Select which **project** should the bug go under.
>* Select the **assignee** for that particular task.
>* Select the **issue type** of the bug.
>* Post a **summary** to help relate the cause of the bug.

<img loading="lazy" src={require('../assets/images/mark-as-bug-in-automation-testing/3.webp').default} alt="mark as bug" width="1365" height="653" className="doc_img"/>

All the fields you populate reflect directly in your respective project based on the integration you have configured with your TestMu AI account. In the above case, the changes reflect on the respective JIRA instance.

Similarly, you can find the mark as bug button in **EXCEPTION** and **COMMAND** logs.
* Exception logs 

<img loading="lazy" src={require('../assets/images/mark-as-bug-in-automation-testing/4.webp').default} alt="automation" width="1361" height="627" className="doc_img"/>

* Command Logs 

<img loading="lazy" src={require('../assets/images/mark-as-bug-in-automation-testing/5.webp').default} alt="command logs" width="1918" height="906" className="doc_img"/>

**Got any questions?**  
Share them with our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or drop a mail at support@testmuai.com.

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
        Mark As Bug In Automation Testing
      </span>
    </li>
  </ul>
</nav>
