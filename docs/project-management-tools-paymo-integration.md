---
id: project-management-tools-paymo-integration
title: Paymo Integration
hide_title: true
sidebar_label: Paymo
description: TestMu AI helps you manage your bugs in Paymo by moving them to project in a single click with details like task list, assignee, title and description in Paymo project.
keywords:
  - testmu ai integrations
  - push issues to paymo
  - free cross browser testing tool
url: https://www.testmu.ai/support/docs/paymo-integration
site_name: LambdaTest
slug: paymo-integration
canonical: https://www.testmu.ai/support/docs/paymo-integration/

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
          "name": "Paymo Integration",
          "item": `${BRAND_URL}/support/docs/paymo-integration/`
        }]
      })
    }}
></script>

# Paymo Integration

---

> Paymo is an online project management application that helps your team work better by getting everyone on the same page. Preferred by freelancers, small and medium businesses across globe, Paymo is dedicated to helping business in their planning, task management, and integrated time tracking. <BrandName /> integration with Paymo helps to manage your bugs in Paymo by moving them into a project through a single click effort. All the details you provide in <BrandName /> like task list, assignee, title and description would automatically be presented in the project on Paymo.

The <BrandName /> Paymo integration helps you in filing issues to your project in Paymo directly from <BrandName /> platform. With one-click integration you can push annotated issues to the project of your choice, assign it to the required team mate, and attach necessary screenshots. You can do all that while in the middle of a test session in <BrandName /> platform. The fields populated by you when marking as bug through <BrandName /> are displayed as information on the Paymo for a testing instance.

**Paymo Integration with <BrandName />, like all of the integrations to 3rd party applications, is available for freemium as well as premium plan.**

## How To Establish Integration With Paymo From Your <BrandName /> Account?

---

**Step 1:** Login to your <BrandName /> account. You would need to have Admin or User level access to see and install integrations.

**Step 2:** Select **‘Integrations’** from the left navigation menu bar. This will guide you to a screen where you will find a list of 3rd party applications, available to integrate with your <BrandName /> account.

**Step 3:** Click on **‘ADD’** under the block that says **‘Paymo’.**

<img loading="lazy" src={require('../assets/images/project-management-tools-paymo-integration/paymo-integration.webp').default} alt="pymo integration" className="doc_img" width="1344" height="642"/>

**Step 4:** Once you click on install, you will be redirected to the below screen. You will be asked to provide your **Paymo API Token** credentials in the highlighted fields to establish integration with <BrandName />.

<img loading="lazy" src={require('../assets/images/project-management-tools-paymo-integration/paymo-api-token.webp').default} alt="api token" className="doc_img" width="1365" height="644"/>

> **What is an API token?**  
> When two different applications interact with each other, a server-to-server communication is established. API token is needed for authenticating user identity from one server to another, by fetching user-owned resources available on the server from where the communication is initiated. API token has been a necessity for maintaining security and data integrity of any application. They are just as vital to an end user as they are to an application. API tokens are relevant if an end user logs in an application through a 2-step verification process.

**Step 5:** You can find your API token from your **Paymoapp** instance. If you have not generated one before, you can generate an API token by going to the **settings.** The settings icon will be visible once you hover the mouse on the bottom left side where your name and display image is placed. We have highlighted the part you need to hover in red. Click on the settings icon.

<img loading="lazy" src={require('../assets/images/project-management-tools-paymo-integration/paymo-instance.webp').default} alt="instance" className="doc_img" width="1361" height="655"/>

**Step 6:** As you click on settings icon, go to **"Your Settings".**

<img loading="lazy" src={require('../assets/images/project-management-tools-paymo-integration/paymo-settings.webp').default} alt="settings" className="doc_img" width="1365" height="650"/>

**Step 7:** Scroll down to the bottom of the page and you will find a section for **"APP PASSWORDS(API KEYS)".** Mention any input you like in the box & click on **‘Generate’.**

<img loading="lazy" src={require('../assets/images/project-management-tools-paymo-integration/paymo-generatepassword.webp').default} alt="generate password" className="doc_img" width="1365" height="656"/>

**Step 8:** As you click on **‘Generate’,** your API key will be pop-up on your screen. Copy the API key now as it won’t be visible once you click **OK.**

<img loading="lazy" src={require('../assets/images/project-management-tools-paymo-integration/paymo-apppassword.webp').default} alt="app password" className="doc_img" width="1365" height="651"/>

You can keep a note of this API token with you for future authentication. Although, in case you forget to do so, or you end up neglecting it due to some reason. Then there is no need to panic! You can create a new token by defining a new label. You can also **delete** a previously declared API Key, in case you feel that your API Key has been placed in some wrong hands. You can delete an API Key by hovering over the label and clicking on the **bin** icon.

<img loading="lazy" src={require('../assets/images/project-management-tools-paymo-integration/paymo-apitoken.webp').default} alt="api token" className="doc_img" width="1363" height="651"/>

**Step 9:** Paste the API token into the field provided at <BrandName /> & hit the **‘Next’** button. You are all set to experience **one-click bug** logging to share your issues directly from your <BrandName /> account to your project on Paymo.

<img loading="lazy" src={require('../assets/images/project-management-tools-paymo-integration/paymo-buglogging.webp').default} alt="bug logging" className="doc_img" width="1365" height="650"/>

That’s it! Go to Integrations again and you will be able to notice a **green tick** indicating that Paymo is successfully **installed.**

<img loading="lazy" src={require('../assets/images/project-management-tools-paymo-integration/paymo-installed.webp').default} alt="installed" className="doc_img" width="1365" height="646"/>

## How To Log Your First Bug Through Paymo Integration?

---

**Step 1:** Go for any of the test from the left navigation menu. For demo, we will be taking **"Real Time Test"** option.

**Step 2:** Present a URL of the web-app you need to test in the dialog box. After that, select any configuration for browser and operating system of your choice & click **‘Start‘.**

<img loading="lazy" src={require('../assets/images/project-management-tools-paymo-integration/paymo-realtimetest.webp').default} alt="real time test" className="doc_img" width="1365" height="660"/>

**Step 3:** After the VM is launched and operable. You can perform testing on your web-app for finding bugs. If a bug gets revealed, then you need to click on the **camera icon** from the left panel for [capturing a screenshot](https://www.lambdatest.com/full-page-screen-capture) of the same. We have highlighted that controller button in the below image.

<img loading="lazy" src={require('../assets/images/project-management-tools-paymo-integration/paymo-findbugs.webp').default} alt="find bug" className="doc_img" width="1348" height="619"/>

**Step 4:** After a screenshot is captured, you can annotate any issue or a task with an **in-built image editor.** Once you are done highlighting the bug, click on the button that says **"Mark as Bug".**

<img loading="lazy" src={require('../assets/images/project-management-tools-paymo-integration/paymo-markbug.webp').default} alt="mark bug" className="doc_img" width="1320" height="618"/>

**Step 5:** After clicking on **"Mark as Bug"** button a Paymo specific form would open up. Fill the fields as per your requirement.

> - You can select which **project** should the ticket go under, along with the **Issue type.**

- You can set which **Task List** should the bug go under.
- You can assign the bug to a colleague by populating the field **‘Member‘.**
- You can mention the **Title** as well to easily organize your bugs.
- You also get to post a **description** to help relate the cause of the issue or the task.

<img loading="lazy" src={require('../assets/images/project-management-tools-paymo-integration/paymo-createissue.webp').default} alt="create issue" className="doc_img" width="1360" height="647"/>

**Step 6:** Click on **"Create Bug"** & observe it being successfully marked through a single click effort. Once you hit the button, you will get **prompt messages** on top of your Virtual Machine indicating the progress of bug logging. You will get a prompt message in few seconds mentioning **"Bug successfully marked"** indicating that the issue has been successfully pushed to the respective workspace.

<img loading="lazy" src={require('../assets/images/project-management-tools-paymo-integration/paymo-bugmarked.webp').default} alt="bug marked" className="doc_img" width="347" height="75"/>

**Step 7:** Visit your Paymo dashboard. You will be able to notice the logged issue right away by going to the particular project and task list you assigned it to! All the data you provided through TestMu AI would already be presented in it. <BrandName /> automatically includes test environment details and related screenshots in the ticket as attachments.

<img loading="lazy" src={require('../assets/images/project-management-tools-paymo-integration/paymo-dashboard.webp').default} alt="dashboard" className="doc_img" width="1365" height="653"/>

## How To REMOVE Paymo Integration?

---

> You can work with one integration at a time. So if you would want to integrate to a similar 3rd party application, then you would have to **remove** your current integration. Here is how you can do that.

**Step 1:** Login to your <BrandName /> account.

**Step 2:** Select **‘Settings’** from the left navigation menu bar & click on **‘Integrations’.** This will guide you to a screen where you will find 3rd party applications, available to integrate with your <BrandName /> account.

**Step 3:** Click on **‘REMOVE’.** You can find the **remove** button right under the **‘Paymo’** block which would be highlighted with a **green tick.**

<img loading="lazy" src={require('../assets/images/project-management-tools-paymo-integration/paymo-remove.webp').default} alt="pymo remove" className="doc_img" width="1358" height="642"/>

> That was all you need to know for <BrandName /> + Paymo Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always available on <span className="doc\_\_lt" onClick={() => window.openLTChatWidget()}>**chat**</span> to help you out with any roadblock regarding our product. Happy testing!

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
        Paymo Integration
      </span>
    </li>
  </ul>
</nav>
