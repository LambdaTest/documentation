---
id: project-management-tools-gitlab-integration
title: GitLab Integration:TestMu AI
hide_title: true
sidebar_label: GitLab
description: TestMu AI provides integrations with GitLab to help you log bugs directly from the middle of your test session on TestMu AI to your GitLab repository.
keywords:
  - testmu ai integrations
  - push issues to gitlab
  - free cross browser testing tool
url: https://www.lambdatest.com/support/docs/gitlab-integration/
site_name: LambdaTest
slug: gitlab-integration/
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
          "name": "GitLab Integration",
          "item": "https://www.lambdatest.com/support/docs/gitlab-integration/"
        }]
      })
    }}
></script>

# GitLab Integration
***
>GitLab is a web-based Git-repository manager with the purpose of facilitating entire DevOps lifecycle. It helps in the collaboration of different teams working on a project. Ensuring Development, QA, Security, Operations and Product team to sync simultaneously on the same project. GitLab helps in bringing your product a lot faster in the market by reducing the time taken to complete a release cycle in a very significant manner.

The LambdaTest GitLab Integration allows you to create a card directly in your repository from LambdaTest platform. Push an issue to your respective repository anytime, even in the middle of your test session. The fields populated by you when marking as a bug through LambdaTest are displayed as information on the bug in GitLab repository for that testing instance.

**GitLab Integration with LambdaTest, like all of our other integrations to 3rd party applications, is available for freemium as well as premium plan.**

## How To Integrate GitLab With Your LambdaTest Account?
***
**Step 1:** Login to your LambdaTest account. You would need to have Admin or User level access to see and install integrations.

**Step 2:** Select **‘Integrations’** from the left navigation menu bar. This will guide you to a screen where you will find a list of 3rd party applications, available to integrate with your LambdaTest account.

**Step 3:** Here under the ‘Project Management’ Section, you’ll find GitLab. Click on Gitlab block.

<img loading="lazy" src={require('../assets/images/project-management-tools-gitlab-integration/Gitlab-Integrations-Project-Management.webp').default} alt="project management"  className="doc_img" width="1345" height="625"/>

**Step 4:** Once you click on install, you’ll be redirected to a screen. There would 2 options available for you to choose in order to **authenticate GitLab.**

### 1. Via OAuth
***
1. Select the radio button on **‘Via OAuth’** and hit **‘Next’.**

<img loading="lazy" src={require('../assets/images/project-management-tools-gitlab-integration/authenticate-oauth.webp').default} alt="authenticate"  className="doc_img" width="1365" height="651"/>

2. You will be redirected to GitLab login page where you will be asked to provide your login credentials.

<img loading="lazy" src={require('../assets/images/project-management-tools-gitlab-integration/gitlab-login.webp').default} alt="login"  className="doc_img"  width="1345" height="625"/>

3. If you are new to GitLab and want to sign up then you can do so with your GitHub account as well. Once you click on the **‘GitHub’** button you will be redirected to an authorization page. There you will authorize GitLab APIs to fetch your user owned resources from GitHub APIs.

<img loading="lazy" src={require('../assets/images/project-management-tools-gitlab-integration/gitlab-integration.webp').default} alt="gitlab api"  className="doc_img" width="1365" height="675"/>

4. After you login, you will have to authorize LambdaTest to use your account. Click on the green button that says **‘Authorize’.**

<img loading="lazy" src={require('../assets/images/project-management-tools-gitlab-integration/gitlab-authorize.webp').default} alt="authorize"  className="doc_img" width="1365" height="725"/>

---

* **Why do you need to login?**

The purpose of logging in is to bypass the authentication that is applied when two different applications interact using their respective APIs. GitLab APIs uses OAuth 2.0’s [authorization code grant flow](https://tools.ietf.org/html/rfc6749#section-4.1) for generating access tokens on user’s behalf.

* **What is an Access token?**

Access tokens are strings with authorization key required to access an API. They are issued to the client server and are usually opaque. They are used for requesting access to protected, user-specific resources. Access tokens are vital from a security point of view & can be generated in different formats, depending upon security requirements specified on the resource server.

---

That’s it! Go to Integrations again and you will be able to notice a **green tick** indicating that GitLab is successfully **installed**. You can now experience bug logging in a fly from any of your running test session in Lambdatest to your repository directly by a single click.

**Note:** Make sure you already have a project in your Gitlab account before you integrate to avoid any issues

### 2. Using Personal Access Token
***
1. Select the radio button on **‘Cloud’** and click **‘Install’**. Here you’ll need to enter your Gitlab API token to validate integration with LambdaTest.

<img loading="lazy" src={require('../assets/images/project-management-tools-gitlab-integration/Gitlab-Integrations-Project-Management-APIs.webp').default} alt="project management api" className="doc_img" width="1350" height="622"/>
 
2. Login to your Gitlab account. Go to the profile icon on the top-right corner and click on ‘Settings’.

<img loading="lazy" src={require('../assets/images/project-management-tools-gitlab-integration/gitlab-setting.webp').default} alt="setting"  className="doc_img" width="1366" height="627"/>

3. Click the ‘Access Tokens’ from the menu on the left.

<img loading="lazy" src={require('../assets/images/project-management-tools-gitlab-integration/gitlab-accesstoken.webp').default} alt="access token"  className="doc_img"  width="1366" height="627"/>

4. **"Add a personal access token"** by providing a name for the application. Keep the name that is easy for you to remember as you access token will be derived from it. You can also set an expiry date for that token. Also, select the checkboxes for **‘api’, ‘read_user’ & read_repository** as scopes. These scopes will define the access to authenticate API over Basic OAuth for their respective personal token. After selecting the scopes hit the green button to **"Create personal access token".**

<img loading="lazy" src={require('../assets/images/project-management-tools-gitlab-integration/personal-accesstoken.webp').default} alt="personal access token"  className="doc_img" width="1365" height="693"/>

---
* **What is a Personal Access Token?**

In scenarios where OAuth is excessively utilized, Personal Access Tokens comes to aid in accessing the API. While generating a token, make sure you provide a description that is easy to remember, as your Personal Access Token will be derived from it. Treat this token just as you would treat your own password! Access tokens are strings with authorization key required to access an API. They are issued to the client server and are usually opaque. They are used for requesting access to protected, user-specific resources. Access tokens are vital from a security point of view & can be generated in different formats, depending upon security requirements specified on the resource server.

---

After you click on **"Create personal access token",** you will get a prompt message saying **"Your new personal access token has been created".** You will find it under the highlighted field.

<img loading="lazy" src={require('../assets/images/project-management-tools-gitlab-integration/Gitlab-Integrations-Project-Management-enter.webp').default} alt="create token"  className="doc_img" width="1348" height="627"/>

Your **API token** is now ready. Copy the token & store it safely with you, as you will not be able to find it again. Paste the copied token into LambdaTest GitLab Authentication.

<img loading="lazy" src={require('../assets/images/project-management-tools-gitlab-integration/gitlab-apitoken.webp').default} alt="api token"  className="doc_img" width="1346" height="620"/>

That’s it! Go to Integrations again and you will be able to notice a **green tick** indicating that GitLab is successfully installed. You can now experience bug logging in a fly from any of your running test session in Lambdatest to your repository directly by a single click.

<img loading="lazy" src={require('../assets/images/project-management-tools-gitlab-integration/gitlab-integrationcomplete.webp').default} alt="integration complete"  className="doc_img" width="1348" height="627"/>

## Logging Your First Bug Through GitLab Integration?
***
---

**NOTE:** You need to have a project created on Gitlab before you perform one click bug logging through LambdaTest. If a project is not created then you will face the below error message when logging a bug.

<img loading="lazy" src={require('../assets/images/project-management-tools-gitlab-integration/gitlab-errormessage.webp').default} alt="error message"  className="doc_img" width="370" height="145"/>

---

**Step 1:** Go for any of the test from the left navigation menu. For demo, we will be taking **"Real Time Test"** option.

**Step 2:** Present a URL of the web-app you need to test in the dialog box. After that, select any configuration for browser and operating system of your choice & click **‘Start‘.**

<img loading="lazy" src={require('../assets/images/project-management-tools-gitlab-integration/realtime-test.webp').default} alt="realtime test"  className="doc_img" width="1365" height="660"/>

**Step 3:** After the VM is launched and operable. You can perform testing on your web-app for finding bugs. If a bug gets revealed, then you need to click on the **Mark as Bug** from the left panel for [capturing a screenshot](https://www.lambdatest.com/full-page-screen-capture) of the same. We have highlighted that option with yellow in the below image.

<img loading="lazy" src={require('../assets/images/project-management-tools-gitlab-integration/mark-bug.webp').default} alt="mark as bug"  className="doc_img" width="1358" height="619"/>

**Step 4:** After a screenshot is captured, you can annotate any issue or a task with an in-built image editor. Once you are done highlighting the bug, click on the button that says **"Mark as Bug".**

<img loading="lazy" src={require('../assets/images/project-management-tools-gitlab-integration/image-editor.webp').default} alt="image editor"  className="doc_img" width="1164" height="562"/>

**Step 5:** After clicking on **"Mark as Bug"** button a GitLab specific form would open up. Fill the fields as per your requirement.

 - You can select which **Projects** should the observation be marked under.
 - You can select a relevant **Label** for the same UI observation.
 - You can give a title to the bug through the field **Title.**
 - You also get to post a **Description** to help relate the cause of the issue or the card.

<img loading="lazy" src={require('../assets/images/project-management-tools-gitlab-integration/gitlab-form.webp').default} alt="form"  className="doc_img" width="368" height="491"/>

**Step 6:** Click on **"Create Bug"** & observe it being successfully marked through a single click effort. Once you hit the button, you will get **prompt messages** on top of your Virtual Machine indicating the progress of bug logging. You will get a prompt message in few seconds mentioning **"Bug marked successfully"** indicating that the bug has been pushed to the desired GitLab repository.

<img loading="lazy" src={require('../assets/images/project-management-tools-gitlab-integration/create-bug.webp').default} alt="create a bug"  className="doc_img" width="1340" height="162"/>

**Step 7:** Visit the project you marked your bugs to. You will notice that the number of issues has increased!

<img loading="lazy" src={require('../assets/images/project-management-tools-gitlab-integration/gitlab-issues.webp').default} alt="issues"  className="doc_img" width="1349" height="618"/>

**Step 8.** Click on **‘Issues’,** in the next scene, you’ll find your bug along with the list of all the issues logged in the project.

<img loading="lazy" src={require('../assets/images/project-management-tools-gitlab-integration/gitlab-issue-list.webp').default} alt="issues list"  className="doc_img" width="1347" height="625"/>

**Step 9.** Click on the description of bug and you will be redirected to the detail page of the bug. You will find all the data that you provided through Lambdatest already presented in the bug. LambdaTest automatically includes test environment details and related screenshots in the repository as attachments.

<img loading="lazy" src={require('../assets/images/project-management-tools-gitlab-integration/lambda-gitlab.webp').default} alt="screenshot in the repo"  className="doc_img" width="1350 " height="611"/>

## How To Uninstall GitLab Integration?
***
You can work with one integration at a time. So if you would want to integrate to some 3rd party application of the similar type, other than the GitLab then you would have to uninstall your present integration. Here is how you can do it.

**Step 1:** Login to your LambdaTest account.

**Step 2:** Select **‘Settings’** from the left navigation menu bar & click on **‘Integrations’.** This will guide you to the same screen from where you initiated **GitLab installation.** You will find Gitlab in the ‘My Integrations’ section.

**Step 3:** To remove the GitLab integration, click on **‘Remove’.** You can find the **Remove** button right next to **GitLab** icon

<img loading="lazy" src={require('../assets/images/project-management-tools-gitlab-integration/gitlab-uninstall.webp').default} alt="uninstall"  className="doc_img" width="1348 " height="623 "/>

That was all you need to know for LambdaTest + GitLab Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always available on <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**chat**</span> to help you out with any roadblock regarding our product. Happy testing!

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
        GitLab Integration
      </span>
    </li>
  </ul>
</nav>
