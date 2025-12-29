---
id: project-management-tools-bitbucket-integration
title: Bitbucket Integration
hide_title: true
sidebar_label: Bitbucket
description: TestMu AI provides integrations with Bitbucket to help you log bugs directly from the middle of your test session on TestMu AI to your Bitbucket repository.
keywords:
  - testmu ai integrations
  - push issues to bitbucket
  - free cross browser testing tool
url: https://www.lambdatest.com/support/docs/bitbucket-integration/
site_name: LambdaTest
slug: bitbucket-integration/

---

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
          "name": "Bitbucket Integration",
          "item": "https://www.lambdatest.com/support/docs/bitbucket-integration/"
        }]
      })
    }}
></script>

# Bitbucket Integration
***
Bitbucket – A web-based repository hosting service owned by Atlassian for facilitating version control in development projects. It supports the project with a revision control system based on either Git or Mercurial. It is free to use, though they also offer a commercial plan. With Bitbucket, you can perform **access control** to your source-code, **workflow control** to impose a project workflow. Easy code revaluation through pull requests offering in-line annotation & Integration with Jira for end-to-end development tracing.

The LambdaTest Bitbucket Integration allows you to create an issue directly in your repository from LambdaTest platform. Push an issue to your respective repository anytime, even in the middle of your test session. The fields populated by you when marking as a bug through LambdaTest are displayed as information on the issue in the repository for a testing instance.

**Bitbucket Integration with LambdaTest, like all of our other integrations to 3rd party applications, is available for freemium as well as premium plan.**

## How To Integrate Bitbucket With Your LambdaTest Account?
***
**Step 1:** Login to your LambdaTest account. You would need to have Admin or User level access to see and install integrations.

**Step 2:** Select **‘Integrations’** from the left navigation menu bar. This will guide you to a screen where you will find a list of 3rd party applications, available to integrate with your LambdaTest account.

**Step 3:** Click on **‘Add’** under the block that says ‘Bitbucket’.

<img loading="lazy" src={require('../assets/images/project-management-tools-bitbucket-integration/add-bitbucket.webp').default} alt="add bitbucket"  className="doc_img" width="1347" height="648"/>

**Note:** Make sure you have an account signed up with Bitbucket before you begin the integration. If you don’t have then you will be redirected to a screen where you can create one. If you already have an account setup for any of the Atlassian tools then you may use the same credentials as that one.

<img loading="lazy" src={require('../assets/images/project-management-tools-bitbucket-integration/bitbucket-signup.webp').default} alt="signup"  className="doc_img" width="1365" height="652"/>

**Step 4.** Once you click on the sign up button, you will be asked to provide a unique username. After providing the username, you need to click **‘Continue’.**

<img loading="lazy" src={require('../assets/images/project-management-tools-bitbucket-integration/bitbucket-form.webp').default} alt="form"  className="doc_img"  width="1365" height="722"/>

**Step 5.** As you press "ADD" button, you will be directed to an authentication page. Here you will need to grant LambdaTest the access to your user-owned resources on Bitbucket. Hit on the blue button that says **"Grant access".**

<img loading="lazy" src={require('../assets/images/project-management-tools-bitbucket-integration/bitbucket-grantaccess.webp').default} alt="grant access"  className="doc_img" width="1362" height="585"/>

**Why we ask for your login credentials?**

Bitbucket APIs uses OAuth 2.0’s [authorization code grant flow](https://tools.ietf.org/html/rfc6749#section-4.1) for generating access tokens on user’s behalf.

**What is an Access token?**

Access tokens are strings with authorization key required to access an API. They are issued to the client-server and are usually opaque. They are used for requesting access to protected, user-specific resources. Access tokens are vital from a security point of view & can be generated in different formats, depending upon security requirements specified on the resource server.

That is it, you will be notified with a prompt message on top mentioning that Bitbucket is successfully installed. If you look at your Integrations again and you will be able to notice a **green tick** indicating the same. You can now experience bug logging in a fly from any of your running test session in Lambdatest to your respective repository directly by a single click.

<img loading="lazy" src={require('../assets/images/project-management-tools-bitbucket-integration/bitbucket-integration.webp').default} alt="Integration"  className="doc_img" width="1357" height="650"/>

## Logging Your First Bug Through Bitbucket Integration?
***
**Note:** Enable the **Issue tracker** in your respective Bitbucket repository. For enabling the Issue tracker:

 - Visit your repository.
 - Go to **Settings.**
 - After settings, click on **Issue tracker.** You will find it under **FEATURES.**
 - Select the button for **Public issue tracker** & click **Save.**

<img loading="lazy" src={require('../assets/images/project-management-tools-bitbucket-integration/bitbucket-bug.webp').default} alt="bug"  className="doc_img" width="1365" height="647"/>

**Step 1:** Go for any of the test from the left navigation menu. For demo, we will be taking **"Real Time Test"** option.

**Step 2:** Present a URL of the web-app you need to test in the dialog box. After that, select any configuration for browser and operating system of your choice & click **‘Start‘.**

<img loading="lazy" src={require('../assets/images/project-management-tools-bitbucket-integration/bitbucket-realtimetest.webp').default} alt="real time test"  className="doc_img"width="1365" height="660"/>

**Step 3:** After the VM is launched and operable. You can perform testing on your web-app for finding bugs. If a bug gets revealed, then you need to click on the **Bug icon** from the left panel for [capturing a screenshot](https://www.lambdatest.com/full-page-screen-capture) of the same. We have highlighted that option with yellow in the below image.

<img loading="lazy" src={require('../assets/images/project-management-tools-bitbucket-integration/bitbucket-testing.webp').default} alt="testing"  className="doc_img" width="1348" height="619"/>

**Step 4:** After a screenshot is captured, you can annotate any issue or a task with an **in-built image editor.** Once you are done highlighting the bug, click on the button that says **"Mark as Bug".**

<img loading="lazy" src={require('../assets/images/project-management-tools-bitbucket-integration/bitbucket-markbug.webp').default} alt="mark bug"  className="doc_img" width="1320" height="618"/>

When marking as bug, make sure that you have a repository already created into your Bitbucket account. If you don’t have one then you will be encountered with an error message as displayed in the below image.

<img loading="lazy" src={require('../assets/images/project-management-tools-bitbucket-integration/bitbucket-errormessage.webp').default} alt="error message"  className="doc_img" width="1365" height="652"/>

**Step 5:** If you are up and ready with a repository, then once you click on **"Mark as Bug"** button a Bitbucket specific form would open up. Fill the fields as per your requirement.

 - You can choose out of your **‘Repositories’,** for logging your UI observation.
 - You can set the appropriate **‘Label’** for the same.
 - You can assign it to a colleague by populating the field **‘Assignee’.**
 - You also get to post a **‘Description’** to help relate the cause of the issue or the task.

<img loading="lazy" src={require('../assets/images/project-management-tools-bitbucket-integration/bitbucket-demo.webp').default} alt="demo"  className="doc_img" width="1365" height="767"/>

**Step 6:** Click on **"Create Bug"** & observe it being successfully marked through a single click effort. Once you hit the button, you will get **prompt messages** on top of your Virtual Machine indicating the progress of bug logging. You will get a prompt message in few seconds mentioning **"Bug successfully marked"** indicating that the UI observation has been pushed to your Bitbucket repository.

<img loading="lazy" src={require('../assets/images/project-management-tools-bitbucket-integration/bitbucket-markedbug.webp').default} alt="marked bug"  className="doc_img" width="347" height="75"/>

**Step 7:** Visit your repository. You will be able to notice the logged issue right away under the Issues tab on the left.

<img loading="lazy" src={require('../assets/images/project-management-tools-bitbucket-integration/bitbucket-issues.webp').default} alt="issues"  className="doc_img" width="1400" height="733"/>

**Step 8:** Click on the **"Issue title."** All the data you provided through LambdaTest would already be presented in it. LambdaTest automatically includes test environment details and related screenshots under your work in Bitbucket. You will also find a clickable link that will open the screenshot attachment.

<img loading="lazy" src={require('../assets/images/project-management-tools-bitbucket-integration/bitbucket-integrationdemo.webp').default} alt="Integration demo"  className="doc_img" width="1365" height="649"/>

## How To Remove Bitbucket Integration?
***
You can work with one integration at a time. So if you would want to integrate to a similar 3rd party application, then you would have to **remove** your current integration. Here is how you can do that.

**Step 1:** Login to your LambdaTest account.

**Step 2:** Select ‘Integration’ from the left navigation menu bar. This will guide you to a screen where you will find 3rd party applications, available to integrate with your LambdaTest account.

**Step 3:** Click on ‘REMOVE’. You can find the remove button right under the **‘Bitbucket’** block which would be highlighted with a green tick.

<img loading="lazy" src={require('../assets/images/project-management-tools-bitbucket-integration/bitbucket-remove.webp').default} alt="remove"  className="doc_img" width="1349" height="653"/>

That was all you need to know for LambdaTest + Bitbucket Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always available on <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**chat**</span> to help you out with any roadblock regarding our product. Happy testing!

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
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
        Bitbucket Integration
      </span>
    </li>
  </ul>
</nav>
