---
id: teamcity-plugin
title: TeamCity Plugin Integration
hide_title: true
sidebar_label: TeamCity Plugin
description: Learn how to execute tests directly on the TestMu AI platform, and test your local, dev, or stage environments securely using the TestMu AI TeamCity plugin.
keywords:
- TeamCity Plugin
- TeamCity Integration with Selenium
- TeamCity Tntegration
- TeamCity TestMu AI
- TeamCity TestMu AI Integration
- TeamCity Tutorial
- Selenium Testing with TeamCity

url: https://www.testmuai.com/support/docs/teamcity-plugin/
site_name: LambdaTest
slug: teamcity-plugin/
canonical: https://www.testmuai.com/support/docs/teamcity-plugin/
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
          "name": "Teamcity Plugin",
          "item": `${BRAND_URL}/support/docs/teamcity-plugin/`
        }]
      })
    }}
></script>

# TeamCity Plugin Integration

The TeamCity plugin will help you to manage your <BrandName /> credentials, write and execute tests directly on the <BrandName /> platform, and test your local, internal, dev, or stage environments securely with the help of Lambda Tunnel.

## Downloading The TeamCity Plugin From Marketplace

Visit the [JetBrains marketplace](https://plugins.jetbrains.com/) and enter "<BrandName />" in the search bar.

<img loading="lazy" src={require('../assets/images/teamcity-plugin/teamcity-plugin-13-768x401.webp').default} alt="jetbrain" width="768" height="432" className="doc_img"/>

You will need to clear the filter (set as default by JetBrains) to view the result, as shown in the image below.

<img loading="lazy" src={require('../assets/images/teamcity-plugin/teamcity-plugin-20-604x270.webp').default} alt="marketplace" width="768" height="314" className="doc_img"/>

Once you do, you can see the <BrandName /> Plugin appearing in the search results.

<img loading="lazy" src={require('../assets/images/teamcity-plugin/teamcity-plugin-15-1-768x348.webp').default} alt="marketplace" width="604" height="270" className="doc_img"/>

Select the <BrandName /> test result and click on Get button to download the <BrandName />’s TeamCity Plugin.

<img loading="lazy" src={require('../assets/images/teamcity-plugin/teamcity-plugin-16-768x257.webp').default} alt="teamcity plugin" width="604" height="270" className="doc_img"/>


## Installing the TeamCity plugin
* * *
To install the TeamCity plugin, you need to download the compressed zip file from [here](https://plugins.jetbrains.com/plugin/download?rel=true&updateId=105571). Once downloaded, follow the below steps to upload the plugin on your TeamCity server.

1. Go to your server **Administration** and then to **Plugins List**

<img loading="lazy" src={require('../assets/images/teamcity-plugin/server-administration.webp').default} alt="teamcity plugin" width="930" height="727" className="doc_img"/>

2. Now inorder to add the <BrandName />’s TeamCity plugin, choose the option Upload ZIP file and upload the earlier downloaded zip file.

<img loading="lazy" src={require('../assets/images/teamcity-plugin/lambdatest-plugins.webp').default} alt="teamcity plugin" width="768" height="348" className="doc_img"/>

3. You will need to restart your TeamCity server. Once done, the <BrandName /> TeamCity plugin will be shown, as an *External plugin*, as shown below.

<img loading="lazy" src={require('../assets/images/teamcity-plugin/lambdatest-plugins-list.webp').default} alt="teamcity plugin" width="768" height="311" className="doc_img"/>

That's it. The <BrandName /> TeamCity plugin has been added in your TeacmCity Server successfully.

## Configuring Project To Use <BrandName /> TeamCity Plugin
* * *
For demo purpose, we have used this sample Github repository. Below are the steps on how to configure the project:

1. In this sample TeamCity server project, we have used two basic steps as a part of the test, based on the Github repo.

<img loading="lazy" src={require('../assets/images/teamcity-plugin/teamcity-server-project.webp').default} alt="teamcity github" width="768" height="602" className="doc_img"/>

2. Now to configure your *Build Features*, visit the **Build Features** from the left bar and click on the button to **Add Build Feature**.

<img loading="lazy" src={require('../assets/images/teamcity-plugin/build-feature.webp').default} alt="build feature" width="768" height="345" className="doc_img"/>

3. In the drop down box that appears, choose the **<BrandName />** feature.

<img loading="lazy" src={require('../assets/images/teamcity-plugin/lambdatest-features.webp').default} alt="lambdatest feature" width="768" height="302" className="doc_img"/>

4. Now a window will appear where you can configure the <BrandName /> feature. Insert your <BrandName /> username and access key into it and save the feature. You can fetch your username and access key from your <BrandName /> [profile](https://accounts.lambdatest.com/detail/profile).

<img loading="lazy" src={require('../assets/images/teamcity-plugin/configure-lambdatest-feature.webp').default} alt="lambdatest profile" width="768" height="345" className="doc_img"/>

5. Upon saving, you can see that the <BrandName /> build feature has been added in your project.

<img loading="lazy" src={require('../assets/images/teamcity-plugin/lt-build-features.webp').default} alt="teamcity project" width="768" height="345" className="doc_img"/>

That’s it. Your project has been successfully configured to run tests using the <BrandName /> TeamCity plugin.

## Executing The Test On <BrandName />
* * *
Upon executing the project, you can see the test status and the automation report directly on your [automation dashboard](https://automation.lambdatest.com/timeline/).

<img loading="lazy" src={require('../assets/images/teamcity-plugin/test-execution.webp').default} alt="automation dashboard" width="768" height="345" className="doc_img"/>

## Configuring Lambda Tunnel For Local Testing
* * *
To test your locally or privately hosted website, or your dev or stage environments securely, you can make use of [Lambda Tunnel](/docs/testing-locally-hosted-pages/). To activate the Tunnel in your project, while adding the <BrandName /> build feature, make sure to tick the **Enable LAMBDATEST TUNNEL** option.

<img loading="lazy" src={require('../assets/images/teamcity-plugin/enable-lambda-tunnel.webp').default} alt="lambda tunnel" width="768" height="345" className="doc_img"/>

If you want to save the Tunnel binary file in a specific location, you provide its path in the **LAMBDATEST TUNNEL Path** option. If not provided, ‘checkout directory’ will be chosen to download and install the Lambda Tunnel Binary.

Also, you can also customize this tunnel based on your requirements, using the Tunnel modifiers. For example, we have used the *–tunnelName* modifier to customize the Tunnel connection name.

`--tunnelName TeamCity`

To know more about the Tunnel modifiers, please refer [here](/docs/lambda-tunnel-modifiers/).

## Testing Privately Hosted Site Using <BrandName /> TeamCity Plugin
* * *
After the above configuration of Lambda Tunnel in your project’s Build Features, you can now execute your local projects and test your localhost, dev, or even stage environments securely with just a click.

Once you run your tests, you can see the Lambda Tunnel getting activated during your test execution, on the toolbar of your <BrandName />’s automation dashboard, as shown below.

<img loading="lazy" src={require('../assets/images/teamcity-plugin/automation-testing-dashboard.webp').default} alt="automation tunnel" width="768" height="345" className="doc_img"/>

* * *

That's it folks! If you have any doubt or questions, feel free to contact our experts at <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or mail us at [support@testmuai.com](mailto:support@testmuai.com). Happy testing! 🙂

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
        Teamcity Plugin
      </span>
    </li>
  </ul>
</nav>
