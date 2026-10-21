---
id: jira-self-hosted-integration
title: Self-Hosted Jira Integration | TestMu AI
hide_title: true
sidebar_label: Self-Hosted Jira
description: TestMu AI and Self-hosted Jira integration allow you to integrate your self-hosted Jira instance and create the issues directly from the TestMu AI platform to your Jira dashboard. 
keywords:
    - Jira Data Center OAuth 2.0
    - Jira Data Center integration
    - Jira Personal Access Token
    - TestMu AI integrations
    - Push issues to Jira
    - Free Cross Browser Testing Tool
    - cross platform testing tools
    - check browser compatibility online
    - TestMu AI self hosted Jira integration
    - integrate Jira with TestMu AI
    - Free Cross Browser Testing Tool
    - Create Issue in Jira from TestMu AI
    - self hosted Jira integration with TestMu AI
    - Create Jira Issues from TestMu AI
    - bug tracking tools
    - project management tools
url: https://www.testmuai.com/support/docs/jira-self-hosted-integration/
site_name: TestMu AI
slug: jira-self-hosted-integration/
canonical: https://www.testmuai.com/support/docs/jira-self-hosted-integration/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Jira Self-Hosted Integration",
          "item": `${BRAND_URL}/support/docs/jira-self-hosted-integration/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/jira-self-hosted-integration/"
    },
    "headline": "Self-Hosted Jira Integration",
    "description": "TestMu AI and Self-hosted Jira integration allow you to integrate your self-hosted Jira instance and create the issues directly from the TestMu AI platform to your Jira dashboard.",
    "url": "https://www.testmuai.com/support/docs/jira-self-hosted-integration/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Integration",
    "keywords": [
      "TestMu AI integrations",
      "Push issues to Jira",
      "Free Cross Browser Testing Tool"
    ],
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "dateModified": "2026-10-19T12:00:00+05:30"
  }) }}
/>

# Self-Hosted Jira Integration
* * *

Many organizations consistently choose to self host their application as it gives them complete control of almost everything. If you want to place Jira behind your corporate firewall and restrict access to someone who isn't on your private network, you can do the same. 

<BrandName />-Jira integration allows you to integrate your self-hosted Jira instance and create the issues directly from the <BrandName /> platform. You can send annotated issues to the project of your choice, assign them to a colleague, and add a screenshot straight from the <BrandName /> platform.

## How To Integrate Self-Hosted Jira With <BrandName />

* * *

You can integrate your self-hosted Jira with the <BrandName /> platform. To view and install integrations, you would need to have admin or user-level access. 

**Step 1**: Login to your <BrandName /> account and select **'Integrations'** from the left menu bar. You will be taken to the integration page where you'll find third-party apps available to integrate. Under **'Bug Tracker'**, click **'Connect'** on the **'Jira'** card.

<img loading="lazy" src={require('../assets/images/jira-self-hosted-integration/jira-sh-integrations.webp').default} alt="Jira card under Bug Tracker on the Integrations page"  className="doc_img" width="1568" height="505"/>

**Step 2**: The **'Setup Jira'** panel opens. Under **'Instance Type'**, select **'Self Hosted'**.

<img loading="lazy" src={require('../assets/images/jira-self-hosted-integration/jira-sh-setup.webp').default} alt="Setup Jira panel with Self Hosted selected"  className="doc_img" width="1064" height="1143"/>

**Step 3**: Under **'Sign-in method'**, choose how <BrandName /> signs in to your Jira:

* **Personal Access Token**: Enter your Jira URL, email and a Jira Personal Access Token, then click **'Install'**.
* **OAuth 2.0** (Jira Data Center 8.22 and later): Follow [Connect Jira Data Center with OAuth 2.0](#connect-jira-data-center-with-oauth-20) below.

**Step 4**: Visit the Integration page, you'll find the Jira integration under the category **'My Integrations'**. 

<img loading="lazy" src={require('../assets/images/jira-self-hosted-integration/jira-sh-my-integrations.webp').default} alt="Jira connected under My Integrations"  className="doc_img" width="1568" height="463"/>

:::note
<BrandName /> reaches your Jira from the IP addresses listed in the **'Instructions'** panel of the setup screen. If your Jira is behind a firewall, allow these IP addresses.
:::

## Connect Jira Data Center With OAuth 2.0

* * *

With OAuth 2.0, you sign in to Jira and allow access once. <BrandName /> never stores your Jira password, and renews the access automatically.

**Before you begin**

* Jira Data Center 8.22 or later, served over `https://`.
* A Jira administrator to create the application link in Jira.

**Step 1**: In Jira, a Jira administrator goes to **Administration → Applications → Application links → Create link**, selects **External application**, and then **Incoming**.

**Step 2**: Enter a name for the link, and set:

* **Redirect URL**: `https://integrations.lambdatest.com/jira/auth/callback`. For the EU data center, use `https://eu-integrations.lambdatest.com/jira/auth/callback`. The setup screen in <BrandName /> also shows the Redirect URL for your account in the **'Instructions'** panel.
* **Permission**: **Write**.

Save the link and copy the **Client ID** and **Client secret** that Jira shows.

**Step 3**: In <BrandName />, go to **'Integrations'**, click **'Jira'**, select **'Self Hosted'**, and choose **'OAuth 2.0'** as the sign-in method. Enter your Jira URL, the **Client ID** and the **Client secret**, then click **'Install'**.

<img loading="lazy" src={require('../assets/images/jira-self-hosted-integration/jira-dc-oauth-setup.webp').default} alt="Self Hosted Jira setup with the OAuth 2.0 sign-in method"  className="doc_img" width="1092" height="1093"/>

:::tip
The **'Allow untrusted certificate (self-signed or internal CA)'** option is off by default. Tick it only if your Jira uses a self-signed certificate or one issued by your internal certificate authority. Use it only for a Jira you trust, because certificate checks are skipped for this connection.
:::

**Step 4**: You are redirected to Jira. Sign in if asked, review the access, and click **'Allow'**.

<img loading="lazy" src={require('../assets/images/jira-self-hosted-integration/jira-dc-oauth-consent.webp').default} alt="Jira Data Center consent page with the Allow button"  className="doc_img" width="810" height="620"/>

**Step 5**: Back in <BrandName />, select the Jira projects you want to use and click **'Integrate Projects & Install'**. Jira now appears under **'My Integrations'**.

:::note
Issues are created in Jira as the Jira user who clicked **'Allow'**, with that user's Jira permissions. If you plan to [share the connection with your organization](/support/docs/jira-integration/#share-your-jira-integration-across-your-organization), connect with a Jira account meant for the team.
:::

### View Connection Details

On the Jira card under **'My Integrations'**, click the ellipsis (•••) and select **'Info'**. For an OAuth 2.0 connection, the drawer shows **Auth method** as **OAuth 2.0**, **Deployment** as **Jira Data Center**, the **Server certificate** setting, and the access token status with the time it was last renewed.

<img loading="lazy" src={require('../assets/images/jira-self-hosted-integration/jira-dc-oauth-connection-info.webp').default} alt="Jira Data Center OAuth 2.0 connection details"  className="doc_img" width="1039" height="1148"/>

### Reconnect an Expired Connection

The connection stops working when the access is revoked in Jira (for example, under **Authorized Applications** in the Jira user's profile), or when it has not been used for longer than the refresh token lifetime your Jira administrator set (90 days by default). The drawer then shows **Needs attention**, the access token shows **Expired**, and the connection owner receives an email.

<img loading="lazy" src={require('../assets/images/jira-self-hosted-integration/jira-dc-oauth-expired.webp').default} alt="Expired Jira Data Center OAuth 2.0 connection"  className="doc_img" width="1039" height="1148"/>

To fix it, open the drawer, click **'Reconnect'**, and click **'Allow'** in Jira. Your projects and organization sharing stay as they were. Only the person who installed the connection can reconnect it.

To use a different Client ID, Client secret or certificate setting, remove the integration and connect again.

## How To Mark Your Bug Through Self-Hosted Jira Integration?

* * *

Once you have established <BrandName />-Jira integration, you can directly mark and push your bugs from <BrandName /> to your Jira dashboard. 

**Step 1**: Select the test that you want to perform from the left menu bar. For demonstration, we will perform Real-time testing. 

**Step 2**: Enter the test URL of the website/web app in the URL field. Select the browser and OS combinations that you wish to perform the test on and then click on **'Start'**. 

<img loading="lazy" src={require('../assets/images/jira-integration/7.png').default} alt="Start a Real Time test"  className="doc_img" width="1365" height="624"/>

**Step 3**: A <BrandName /> virtual machine will fire up where you can perform real-time testing of your websites and web-apps to find bugs/issues. If you encounter a bug, click the Bug icon from the left panel for [capturing a screenshot](https://www.testmuai.com/full-page-screen-capture/) of the same. 

<img loading="lazy" src={require('../assets/images/jira-integration/8.png').default} alt="Bug icon in the test session"  className="doc_img" width="1365" height="624"/>

**Step 4**: Once the screenshot is captured, you can annotate any bugs or a task with an in-built image editor. After highlighting the bug, click the **bug icon** beside **'Jira'**. 

<img loading="lazy" src={require('../assets/images/jira-integration/9.png').default} alt="Mark as Bug with Jira"  className="doc_img" width="1365" height="624"/>

**Step 5**: A Jira-specific form opens. Fill in the fields as per your requirement:

*   Select the **'Project'** to which your ticket will go under, and the **'Issue Type'**.
*   Assign the bug to a teammate by populating the field **'Assignee'**.
*   Fill the **'Summary'** about the bug's details.

<img loading="lazy" src={require('../assets/images/jira-integration/10.png').default} alt="Jira issue form"  className="doc_img" width="1365" height="624"/>

**Step 6**: Click **'Mark As Bug'**. In a few seconds, you'll see the message **'Your bug has been logged successfully'**.

<img loading="lazy" src={require('../assets/images/jira-integration/11.png').default} alt="Bug logged successfully"  className="doc_img" width="1365" height="624"/>

**Step 7**: Visit the Jira dashboard and you'll find your marked bugs right away. All the data such as test environment details, screenshots that you provided through <BrandName /> will be present there.

## How To Remove Self-Hosted Jira Integration?

* * *

> You can integrate one bug-tracking tool at a time. If you want to integrate to a similar third party application, then need to remove your current integration. Here is how to do that.

**Step 1:** Login to your <BrandName /> account.

**Step 2:** Navigate to **'Integrations'** tab from the left menu bar.

**Step 3:** Under **'My Integrations'**, click the ellipsis (•••) on the **'Jira'** card and select **'Remove'**.

<img loading="lazy" src={require('../assets/images/jira-self-hosted-integration/jira-sh-remove.webp').default} alt="Remove option in the Jira card menu"  className="doc_img" width="1568" height="463"/>

 You will receive the confirmation message upon the successful uninstallation of Jira Self Hosted integration.

> That's all you need to know for <BrandName /> + Jira Self Hosted Integration. If you have any questions for us, please feel free to let us know. Our experts are always <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**available on chat**</span> to help you out. Happy testing!

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
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
        Jira Self-Hosted Integration
      </span>
    </li>
  </ul>
</nav>
