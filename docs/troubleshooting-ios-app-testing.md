---
id: troubleshooting-ios-apps
title: How to build .app file for iOS App testing on Simulators
hide_title: true
sidebar_label: Troubleshooting iOS App Testing
description: Facing issues in uploading .app files on Simulators? Here is a quick guide to troubleshoot it.
keywords:
- how to upload .app files on ios simulators
- how to upload .app files on simulators
- how to upload .app files for ios simulator testing
url: https://www.testmuai.com/support/docs/troubleshooting-ios-app-testing/
site_name: TestMu AI
slug: troubleshooting-ios-app-testing/
canonical: https://www.testmuai.com/support/docs/troubleshooting-ios-app-testing/
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
          "name": "Troubleshooting iOS App Testing",
          "item": `${BRAND_URL}/support/docs/troubleshooting-ios-app-testing/`
        }]
      })
    }}
></script>

# Troubleshooting iOS App Testing
***

While uploading .app files on Simulators, you may come across an error on the <BrandName /> platform - *No .app found inside zip*. In such cases, you may need to re-evaluate how you're building your iOS applications. To upload and test `. apps` files on Simulators, your iOS app need to be build for Simulators. 

Shown below are the steps for converting your `.app` file to a `.zip` file.

1. Download and install [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12).

2. Open your testing project in Xcode.

 <img loading="lazy" src={require('../assets/images/troubleshoot-ios-testing/project-file.webp').default} alt="Integrating <BrandName /> With Testsigma" width="1281" height="722" className="doc_img"/>

3. Head to **File** and click **Show in Finder** option to open the .app file once your build runs successfully.

 <img loading="lazy" src={require('../assets/images/troubleshoot-ios-testing/show-in-finder.webp').default} alt="Integrating <BrandName /> With Testsigma" width="1281" height="722" className="doc_img"/>

4. Compress the `.app` file into a `.zip` file.

 <img loading="lazy" src={require('../assets/images/troubleshoot-ios-testing/zip-file.webp').default} alt="Integrating <BrandName /> With Testsigma" width="1281" height="722" className="doc_img"/>

Your `.zip` file is now ready for upload on <BrandName /> servers.

>**Note**: If you are unable to install the iOS zip file on the <BrandName /> platform, you need to remove the arm64 architecture from both your project and the pod project.<br /> <br />
To do so, go to the **Build Settings** of your project. From **Excluded Architecture** dropdown, add any iOS Simulator SDK with value arm64 .<br /><br />
<img loading="lazy" src={require('../assets/images/troubleshoot-ios-testing/6.webp').default} alt="Integrating <BrandName /> With Testsigma" width="1281" height="722" className="doc_img"/>

That’s all! In case you have any questions or need any additional information, you could reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24X7 Chat Support**</span> or mail us directly at support@testmuai.com.
