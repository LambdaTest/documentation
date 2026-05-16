---
id: favro-integration
title: TestMu AI Integration with Favro
hide_title: true
sidebar_label: Favro
description: The TestMu AI Favro Integration allows you to create a task directly to your specified Favro dashboard from TestMu AI platform. Share your UI observations and input with your teammates anytime, by capturing a screenshot, even in the middle of your test session.
keywords:
  - TestMu AI automation
  - favro integration
  - favro
  - kanban
  - bug reporting
url: https://www.testmuai.com/support/docs/favro-integration/
site_name: TestMu AI
slug: favro-integration/
canonical: https://www.testmuai.com/support/docs/favro-integration/
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
          "name": "Favro Integration",
          "item": `${BRAND_URL}/support/docs/favro-integration/`
        }]
      })
    }}
></script>

# Favro Integration

* * *

Favro is a project management and collaboration tool set up by serial deep tech entrepreneurs. It works under an agile methodology that helps in planning, execution, collaboration, and creation to enhance the workflow of your organization. You can create your dashboard where you can track your various projects, interact, respond to ideas, handle projects with your teammates using multiple kanbans, timelines, and sheets. 

The <BrandName /> Favro Integration allows you to create a task directly to your specified Favro dashboard from <BrandName /> platform. Share your UI observations and input with your teammates anytime, by [capturing a screenshot](https://www.lambdatest.com/full-page-screen-capture), even in the middle of your test session. You can annotate the screenshot & highlight your issue or input. The fields populated by you when marking as bug through <BrandName /> are displayed as information on Favro for that testing instance.

## How To Integrate Favro With Your <BrandName /> Account?

* * *

**Step 1:** Login to your <BrandName /> account. You would need to have Admin or User level access to see and install integrations.

**Step 2:** Select **'Integration'** from the left navigation menu bar. This will guide you to a screen where you will find a list of 3rd party applications, available to integrate with your <BrandName /> account.

**Step 3:** Click on **'ADD'** under the block that says 'Favro'.

<img loading="lazy" src={require('../assets/images/favro-integration/Screenshot-234.webp').default} alt="<BrandName /> Integrations"  width="1366" height="508" className="doc_img"/>

**Step 4:** Once you click on add, you'll redirected to the below screen. This will ask you to enter your e-mail address and API token.

<img loading="lazy" src={require('../assets/images/favro-integration/Screenshot-195.webp').default} alt="Installing Favro <BrandName /> integration" width="1162" height="329" className="doc_img"/>

>* **What is my Favro E-mail? **   
>In this field you need to specify the **email id** through which you sign into your **Favro** account. 
>* ** What is an API Token?**   
>When two different applications interact with each other, a server-to-server communication is established. API token is needed for authenticating user identity from one server to another, by fetching user-owned resources available on the server from where the communication is initiated. API token has been a necessity for maintaining security and data integrity of any application. They are just as vital to an end user as they are to an application. API tokens are relevant if an end user logs in an application through a 2-step verification process.    
>If you are logging into **Favro** for the first time, then you can generate a token for yourself by just entering a name of your choice.

**Step 5:** Login your favro account and navigate to **'My Profile'** on the left.

<img loading="lazy" src={require('../assets/images/favro-integration/Screenshot-199.webp').default} alt="Logging into Favro account"  width="1366" height="478"className="doc_img"/>

**Step 6:** Navigate to **'API Token'** on the left in the My Profile section. 

<img loading="lazy" src={require('../assets/images/favro-integration/Screenshot-200.webp').default} alt="User profile section <BrandName />" width="1050" height="508" className="doc_img"/>

**Step 7:** Click on the **'Create New Token'** button. 

<img loading="lazy" src={require('../assets/images/favro-integration/Screenshot-201.webp').default} alt="Creating access token" width="986" height="344" className="doc_img"/>

**Step 8:** Enter a name in the provided field and hit the **'Create Token'** button.

<img loading="lazy" src={require('../assets/images/favro-integration/Screenshot-236.webp').default} alt="Creating API token" width="1051" height="374" className="doc_img"/>

**Step 9:** Once your API token is generated, copy the same by clicking on**'Copy to clipboard'**.

<img loading="lazy" src={require('../assets/images/favro-integration/Screenshot-203.webp').default} alt="Using API Token" width="1010" height="364" className="doc_img"/>

**Step 10:** Then enter your e-mail address and paste the API token into the field provided at <BrandName /> & hit the **'Install'** button. If you are using **'Self hosted' **Favro instance, instead of API token, you would just have to add your favro login password.

<img loading="lazy" src={require('../assets/images/favro-integration/Screenshot-204.webp').default} alt="Favro App Installation" width="1073" height="334" className="doc_img"/>

If you are not logged into Favro then you will be redirected to the below screen. Kindly login to your account via gmail or create your account by given option.

<img loading="lazy" src={require('../assets/images/favro-integration/Screenshot-192.webp').default} alt="Fsvro Sign Up" width="807" height="605" className="doc_img"/>

Go to **'Integrations'** again and you will be able to notice a **'green tick'** indicating that Favro is successfully installed. You are all set to experience **'one-click bug logging'** to share your issues directly from your <BrandName /> account to your teammates on Favro project.

<img loading="lazy" src={require('../assets/images/favro-integration/Screenshot-235.webp').default} alt="<BrandName /> Integrations" width="1366" height="487" className="doc_img"/>  

## How To Log Your First Bug Through Favro Integration?

* * *

>**Note:** If you are using Favro for the first time, then make sure to create a project for yourself. It is a pre-requisite in order to push screenshots from your <BrandName /> account.

**Step 1:** Go for any of the test from the left navigation menu. For demo, we will be taking '**Real Time Test**' option.

**Step 2:** Present a URL of the web-app you need to test in the dialog box. After that, select any configuration for browser and operating system of your choice & hit '**Start**'.

<img loading="lazy" src={require('../assets/images/favro-integration/Screenshot-221.webp').default} alt="Testing Configuration" width="653" height="298"  pxclassName="doc_img"/>

**Step 3:** After the VM is launched and operable. You can perform testing on your web-app for finding bugs. If a bug gets revealed, then you need to click on the **'Bug icon'** from the left panel for capturing a screenshot of the same. 

<img loading="lazy" src={require('../assets/images/favro-integration/Screenshot-220.webp').default} alt="Mark As Bug" width="1147" height="468" className="doc_img"/>

**Step 4:** After a screenshot is captured, you can annotate any issue or a task with an **'in-built image editor'**. Once you are done highlighting the bug, click on the button that says **'Mark as Bug'**.

<img loading="lazy" src={require('../assets/images/favro-integration/Screenshot-219.webp').default} alt="Highlighting Bugs" width="1085" height="545" className="doc_img"/>

**Step 5:** After clicking on **'Mark as Bug'** button a form would open up. Fill the fields as per your requirement.
>* You can select which **organization** should the ticket go under.
* You can choose from the **collection** to create dashboards to manage your tasks.
* You can choose from the** widgets** to design your workspace.
* You can specify the testing phase in the **widget column**. 
* You can give suitable** title** for your test.
* You also get to post a **description** to help relate the cause of the issue.

At the bottom of the form you will find a button **'Create Issue'**. 

<img loading="lazy" src={require('../assets/images/favro-integration/Screenshot-222.webp').default} alt="Creating Bugs" width="1336" height="612" className="doc_img"/>

**Step 6:** After you click on **'Create Issue'**, you will be able to observe it being successfully marked through a single click effort. You will get **'prompt messages'** on top of your Virtual Machine indicating the progress of bug logging. After few seconds you will be notified with a prompt message **'Bug successfully marked'** indicating that the screenshot has been pushed to your workspace.

<img loading="lazy" src={require('../assets/images/favro-integration/Capture15.webp').default} alt="Bug Marking" width="347" height="75" className="doc_img"/>

**Step 7:** Visit your dashboard. You will be able to notice the logged issue right away! All the data you provided through TestMu AI would already be presented in it. <BrandName /> automatically includes test environment details and related screenshots in the screenshot as attachments.

<img loading="lazy" src={require('../assets/images/favro-integration/Screenshot-230.webp').default} alt="screenshot testing dashboard" width="1365" height="579" className="doc_img"/>

Click on the **'Testing'** Widget Column and you will find all the data that you provided through TestMu AI already presented in it.

<img loading="lazy" src={require('../assets/images/favro-integration/Screenshot-231.webp').default} alt="screenshot testing demo" width="1366" height="577" className="doc_img"/>

<BrandName /> automatically includes test environment details and related screenshots in the card as attachments.

<img loading="lazy" src={require('../assets/images/favro-integration/Screenshot-232.webp').default} alt="Screenshot Testing ID" width="1366" height="588" className="doc_img"/>

You can add your team members by navigating to **'Members'** on the top-left.

<img loading="lazy" src={require('../assets/images/favro-integration/Screenshot-233.webp').default} alt="team members" width="1366" height="577" className="doc_img"/>

## How To Remove Favro Integration?

* * *

>You can work with one integration at a time. So if you would want to integrate to a similar 3rd party application, then you would have to **'remove'** your current integration. Here is how you can do that.

**Step 1:** Login to your <BrandName /> account.

**Step 2:** Select 'Settings' from the left navigation menu bar & click on 'Integrations'. This will guide you to a screen where you will find 3rd party applications, available to integrate with your <BrandName /> account.

**Step 3:** Click on **'Remove'**. You can find the Remove button right under the **'Favro'** block which would be highlighted with a green tick.

<img loading="lazy" src={require('../assets/images/favro-integration/Screenshot-211.webp').default} alt="Image" width="1338" height="503" className="doc_img"/>

That was all you need to know for <BrandName /> + Favro Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**available on chat**</span> to help you out with any roadblock regarding our product. Happy testing! 

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
        Favro Integration
      </span>
    </li>
  </ul>
</nav>
