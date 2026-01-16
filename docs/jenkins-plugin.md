---
id: jenkins-plugin
title: TestMu AI Integration With Jenkins
hide_title: true
sidebar_label: Jenkins Plugin
description: TestMu AI now integrates with Jenkins to boost your go-to market delivery. Perform automated cross browser testing with TestMu AI to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines. 
keywords:
  - testmu ai integrations
  - testmu ai integrations with ci/cd tools
  - ci/cd tools
  - continuous integration
  - continuous delivery
  - continuous integration tools
  - Jenkins 
  - jenkins tutorial 
url: https://www.testmu.ai/support/docs/jenkins-with-testmu/
site_name: LambdaTest
slug: jenkins-with-testmu
canonical: https://www.testmu.ai/support/docs/jenkins-with-testmu/
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
          "name": "Jenkins Plugin",
          "item": `${BRAND_URL}/support/docs/jenkins-with-testmu/`
        }]
      })
    }}
></script>

# Jenkins Plugin for Integration With <BrandName />

* * *

Jenkins is a widely popular Continuous Integration (CI) tool. It is free to use, open-source software written in Java. Jenkins helps to boost your release agility by providing Continuous Integration services. You can trigger these services by a web application server or merely using a command line to hasten the deployment pipeline & release migration activities. Jenkins's popularity offers thousands of plugins to fast track your productivity. One such plugin to help you pace up automated cross browser testing is the <BrandName /> Jenkins plugin. With <BrandName /> Jenkins plugin, you will easily automate your Selenium test scripts by connecting your Jenkins CI instance to <BrandName /> [Selenium grid](https://www.lambdatest.com/blog/why-selenium-grid-is-ideal-for-automated-browser-testing/). <BrandName /> Selenium grid will offer you a comprehensive library of 3000+ browsers and browser versions so you could achieve a higher test coverage while performing automation testing using the Selenium test suite.

> <BrandName /> Jenkins plugin will help you to:
>
>*   Configure your <BrandName /> credentials for your Jenkins jobs.
>*   Set up and tear down the Lambda Tunnel binary file to perform automated cross browser testing even on your locally hosted web apps
>*   Embed all the test results such as video logs, network logs, and screenshots of every step performed through <BrandName /> with your Jenkins job results.

## Prerequisites

* * *

*   A <BrandName /> account
*   An existing Jenkins CI server (version 2.138.2+)
*   A Jenkins User with root access.

## Installing the Jenkins Plugin

* * *

Download <BrandName /> Jenkins plugin to run your Selenium tests with Jenkins on <BrandName />. You need to be granted administrator-level access before proceeding with Jenkins installation.

Make sure to have no active build jobs in execution or queue before heading forward with the <BrandName /> Jenkins plugin installation.

1.  Click **Manage Jenkins**, then **Manage Plugins**.
2.  Click the **Available** tab.
3.  In the **Filter** box, type <BrandName />.
4.  You will encounter a list of plugins where you need to select **<BrandName />**.
5.  To install <BrandName /> Jenkins plugin, you would have to select the checkbox in front of <BrandName />. After successful installation of the plugin, you will be able to find the <BrandName /> Jenkins plugin under your installed plugins

<img loading="lazy" src={require('../assets/images/jenkins-plugin/1.webp').default} alt="Jenkins Plugin"  className="doc_img" width="966" height="419"/>

Sometimes your recently installed plugins fail to synchronize with your available plugins on Jenkins. If you don't find <BrandName /> plugin under your available plugins, you can force Jenkins to refresh the list by simply clicking the **Check Now** button to fetch the latest plugins from the Jenkins update center.

## How To Configure Your <BrandName /> Credentials?

* * *

After installing the <BrandName /> Jenkins plugin to perform automated cross browser testing, you would need to configure the <BrandName /> credentials in your Jenkins CI server for integrating your Selenium WebDriver tests with Jenkins. You would need to work with Jenkins UI to proceed with the configuration.

## To Configure <BrandName /> Credentials Using Jenkins UI

* * *

Follow these steps to configure <BrandName /> with Jenkins:

1.  On the Home page of Jenkins, click **Credentials**.
2.  Under **Credentials** click **System**. System page displays.
3.  In the System, click **Global credentials** (Unrestricted) domain. **Global credentials** page opens.
4.  Click **Add Credentials**. Add Credentials page opens.
5.  Enter the relevant data in the fields and click **Verify Credentials**. After verification, click the **OK** button. Jenkins will generate the ID, which is visible on the **Credential** page.
6.  Save your changes.

<img loading="lazy" src={require('../assets/images/jenkins-plugin/2.webp').default} alt="Jenkins Plugin"  className="doc_img" width="1280" height="688"/>

Once you successfully add your credentials, then Jenkins will generate an ID. To retrieve this ID for <BrandName /> Credentials, you would have to go to Jenkins home page and click on **Credentials** from the left navigation menu.

From the Jenkins home page, click **Credentials** from the left menu. You can copy the ID for <BrandName /> credentials.

## Configuring The Build Environment Through Jenkins UI

* * *

To enable Lambda Tunnel to perform tests on your locally hosted web application or website: Visit the tab for **Build Environment** and mark the tick on the box left to **LAMBDATEST**.

<img loading="lazy" src={require('../assets/images/jenkins-plugin/3.webp').default} alt="Jenkins Plugin"  className="doc_img" width="934" height="624"/>

That is all you need for performing automated cross browser testing on your locally hosted web pages or web files using the <BrandName /> Jenkins plugin with Lambda Tunnel. In the next section, you will learn how to enable the Lambda Tunnel.

## Configure <BrandName /> Tunnel

* * *

Here we will look at the process of enabling Lambda Tunnel to test your locally hosted web apps. Visit the tab for **Build Environment** and mark the tick on the box left to **LAMBDATEST**.

<img loading="lazy" src={require('../assets/images/jenkins-plugin/4.webp').default} alt="Jenkins Plugin"  className="doc_img" width="922" height="617"/>

1.  We would recommend keeping the <BrandName /> Local Path empty; that way, the plugin will automatically download the LT binary file. However, if you wish to use a binary by downloading externally, you need to provide the file's location as the '<BrandName /> Local Path.' But if your Jenkins works on the master-slave configuration set up, then it would be best to leave the path empty for allowing the plugin to download the relevant binary file for the operating system of your local machine.
2.  You can configure additional settings with Lambda Tunnel by using the option to Use Local Tunnel.

## Environment Variable For <BrandName /> Jenkins Plugin
|Environment Variables|Description|
|--- |--- |
|$LT_USERNAME|Your <BrandName /> username.|
|$LT_ACCESS_KEY|Your <BrandName /> Access key.|
|$LT_GRID_URL|Your <BrandName /> hub URL|
|$LT_PLATFORM|OS you wish to test your website with.|
|$LT_BROWSER_NAME|Name of the browser on which you wish to test.|
|$LT_BROWSER_VERSION|Particular browser version on which you wish to test.|
|$LT_RESOLUTION|Specify the screen resolution.|
|$LT_BUILD_NAME|Represents a particular build name.|
|$LT_BUILD_NUMBER|Represents a particular build number.|
|$LT_BROWSERS|An array of combinations.|
|$LT_TUNNEL_NAME|Name of your Lambda Tunnel for local testing.|


Using the above variables you will receive an output in the below format.

```javascript
sample Output $LT_BROWSERS:
[
   {
       "operatingSystem": "win10", //OS you wish to test your website with.
       "browserName": "Chrome",    //Name of the browser on which you wish to test.
       "browserVersion": "71.0",   //Particular browser version on which you wish to test.
       "resolution": "1024x768"    //Specify the screen resolution.
   },
   {
       "operatingSystem": "win8",   //OS you wish to test your website with.
       "browserName": "Firefox",    //Name of the browser on which you wish to test.
       "browserVersion": "63.0",    //Particular browser version on which you wish to test.
       "resolution": "1024x768"     //Specify the screen resolution.
   }
```

## Running Your First Test

* * *

To run your first test using Jenkins <BrandName /> plugin, you need to set a test build. You can perform that easily through Jenkins UI by clicking on **Build Now**. 

<img loading="lazy" src={require('../assets/images/jenkins-plugin/5.webp').default} alt="Jenkins Plugin"  className="doc_img" width="1263" height="678"/>

As you click on **Build Now**, you will find a new build generating under the build history.

<img loading="lazy" src={require('../assets/images/jenkins-plugin/6.webp').default} alt="Jenkins Plugin"  className="doc_img" width="1267" height="681"/>

If you click on the build you will find the logs for console output. You will also notice <BrandName /> icon on the left which will provide you in-depth details regarding your Selenium test through an i-frame.

<img loading="lazy" src={require('../assets/images/jenkins-plugin/7.webp').default} alt="Jenkins Plugin"  className="doc_img" width="1275" height="526"/>

When you click on the <BrandName /> Report icon from the left side, a report table with details for the Selenium test will load. 

<img loading="lazy" src={require('../assets/images/jenkins-plugin/8.webp').default} alt="Jenkins Plugin"  className="doc_img" width="1264" height="621"/>

Kudos! You successfully executed your Selenium test suite using Jenkins with <BrandName /> plugin.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_ self" href={`${BRAND_URL}/support/docs/`}>Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">Jenkins Plugin</span>
    </li>
  </ul>
</nav>
