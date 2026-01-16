---
id: appium-bitrise
title: How to integrate your Appium tests with Bitrise 
hide_title: true
sidebar_label: Bitrise - Appium
description: Integrate TestMu AI with Bitrise CI to get started with Appium app automation across a wide range of real Android and iOS devices.
keywords:
- testmu ai bitrise
- bitrise with testmu ai
- manual app testing bitrise
- appium testing with bitrise ci
- appium bitrise
- app testing with bitrise 
- app automation bitrise
url: https://www.testmu.ai/support/docs/bitrise-integration/
site_name: LambdaTest
slug: bitrise-integration/
canonical: https://www.testmu.ai/support/docs/bitrise-integration/
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
          "name": "Running Appium Tests In Bitrise CI",
          "item": `${BRAND_URL}/support/docs/bitrise-integration/`
        }]
      })
    }}
></script>

# Running Appium Tests In Bitrise CI 
***

Bitrise offers a mobile CI/CD platform as a service (PaaS) to accelerate the automation of your software development projects. It provides different mobile-first features like exhaustive mobile stack coverage, store code anywhere in cloud or on-premise, and zero hardware setup that make building, testing, and deploying faster and easier.

Using <BrandName /> with Bitrise, you can effortlessly perform [Appium testing](https://www.lambdatest.com/appium-mobile-testing) of your mobile apps on an [online device farm](https://www.lambdatest.com/online-device-farm) of 3000+ real devices and OS versions.

## Prerequisites
***

1. Ensure you have access to <BrandName /> [real device cloud](https://www.lambdatest.com/real-device-cloud). If not, please [contact sales](https://www.lambdatest.com/contact-us).

2. A Bitrise account.

3. A GitHub / BitBucket / GitLab or other repository to connect with Bitrise.

## Configuring The App Build In Bitrise CI
***

1. Login to your Bitrise account.

2. From Dashboard, click **Add New App on web UI**.

<img loading="lazy" src={require('../assets/images/bitrise-integration/newapp.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

3. In the **Choose Account** section, select the privacy of your app and click **Next**.

<img loading="lazy" src={require('../assets/images/bitrise-integration/next.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

4. Choose a source code provider (GitHub, BitBucket, GitLab or others). 

<img loading="lazy" src={require('../assets/images/bitrise-integration/vcs.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

5. You will be now asked to authenticate your source code provider with Bitrise.

<img loading="lazy" src={require('../assets/images/bitrise-integration/authorize-bitrise.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

On successful authentication, you'll receive a confirmation message. 

<img loading="lazy" src={require('../assets/images/bitrise-integration/cta.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

6. Now again click **Next**.

<img loading="lazy" src={require('../assets/images/bitrise-integration/nextafter.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

7. Select your repository from the version control system.

<img loading="lazy" src={require('../assets/images/bitrise-integration/chooserepo.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

8. From the Setup repository access section, click **No, auto-add SSH key** to add your SSH keys.

<img loading="lazy" src={require('../assets/images/bitrise-integration/auto-SSH.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

9. Enter your branch name and click **Next**. Your app will be configured and this will take few minutes.

<img loading="lazy" src={require('../assets/images/bitrise-integration/next2.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

10. In **Project build configuration**:

* Specify module and click **Next**.

<img loading="lazy" src={require('../assets/images/bitrise-integration/module.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

* Specify variant and click **Next**.

<img loading="lazy" src={require('../assets/images/bitrise-integration/variant.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

11. A build information will show up. Click **Confirm**.

<img loading="lazy" src={require('../assets/images/bitrise-integration/confirmandroid.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

12. Choose and upload your App icon. Then click **Choose Image and Proceed**.

<img loading="lazy" src={require('../assets/images/bitrise-integration/appicon.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

13. From the **Webhook setup**, register or skip Webhook registration. In this case, let's select **Register a Webhook for me!**

<img loading="lazy" src={require('../assets/images/bitrise-integration/webhook.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

14. Now click on the message that says - *We've kicked off your first test build for you!*

<img loading="lazy" src={require('../assets/images/bitrise-integration/cta-2.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

Your app build will now trigger and start running. 

## Generating The App URL
***

1. Once your build process is completed, click **Edit workflow**.

<img loading="lazy" src={require('../assets/images/bitrise-integration/edit-workflow.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

2. Click + icon under **Android Unit Test**.

<img loading="lazy" src={require('../assets/images/bitrise-integration/android-unit.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

3. A search steps box will appear. Enter *<BrandName /> Upload* and click <BrandName /> Upload card.

<img loading="lazy" src={require('../assets/images/bitrise-integration/lt-upload.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

4. In **Input variables** category:

* Provide your App path.

<img loading="lazy" src={require('../assets/images/bitrise-integration/apppath.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

* In **<BrandName /> username**, click Select secret variable.

<img loading="lazy" src={require('../assets/images/bitrise-integration/keyuservar.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

* Enter the key (it can be anything), your <BrandName /> username and click **Add new**.

<img loading="lazy" src={require('../assets/images/bitrise-integration/username.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

* In **<BrandName /> access key**, click Select secret variable.

<img loading="lazy" src={require('../assets/images/bitrise-integration/keysecvar.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

* Enter the key (it can be anything), your <BrandName /> access key and click **Add new**.

<img loading="lazy" src={require('../assets/images/bitrise-integration/key.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

* Provide an App name.

<img loading="lazy" src={require('../assets/images/bitrise-integration/app-name.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

* Enter your Custom Id (optional).

<img loading="lazy" src={require('../assets/images/bitrise-integration/customid.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

5. After that, click **Ctrl+S**.

<img loading="lazy" src={require('../assets/images/bitrise-integration/ctrls.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

6. From the breadcrumb navigation, click on the Repo name.

<img loading="lazy" src={require('../assets/images/bitrise-integration/path.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

7. A build will be shown that you just run. Click on the build.

<img loading="lazy" src={require('../assets/images/bitrise-integration/clickbuild.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

You'll be taken to the build interface as shown below.

<img loading="lazy" src={require('../assets/images/bitrise-integration/builddashboard.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

8. Scroll down and click on three dots adjacent to the <BrandName /> icon.

<img loading="lazy" src={require('../assets/images/bitrise-integration/threedots.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

9. Scroll a bit more and you'll see an App URL.

<img loading="lazy" src={require('../assets/images/bitrise-integration/appurl.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

You're done! With this App URL, you can now perform Mobile App Automation. This app will also be available under **Real Time Testing > Real Time > App Testing** in the uploaded apps section.

<img loading="lazy" src={require('../assets/images/bitrise-integration/realtime.webp').default} alt="Image" width="521" height="431"  className="doc_img"/>
