---
id: appium-app-performance
title: Application Performance Analytics
# hide_title: true
sidebar_label: App Performance Analytics
description: Learn more about the metrics that are crucial in tracking the performance of your app. 
keywords:
- regular expression lambdatest
- regular expression app automation

url: https://www.lambdatest.com/support/docs/appium-app-performance-analytics/
site_name: LambdaTest
slug: appium-app-performance-analytics/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "App Automation: Regular Expression",
          "item": "https://www.lambdatest.com/support/docs/regular-expression/"
        }]
      })
    }}
></script>


When it comes to building an application, tracking its performance is crucial. You can follow the performance of your applications with LambdaTest's Real Device cloud platform on metrics like CPU consumption, network usage and many more. Go through the page below to understand each metric that LambdaTest provides you with.

## Metrics

### 1. CPU Consumption

The CPU is responsible for carrying out all the operations in a mobile device. As it is a shared resource, high usage by a single app can affect other running services. 

Moreover, high CPU usage can also cause high battery usage. You can work around this by identifying and addressing areas of high CPU usage. This will increase the efficiency of your app and reduce its overall resource utilisation. Reducing the CPU consumption of your application improves performance and provides the user with a smoother experience. 

LambdaTest provides you with two metrics in a time-series format representing the following:

1. **System CPU Usage (%)**: The total percentage of CPU being used by the entire system

2. **App CPU Usage (%)**: The share of “System CPU usage” being used by the AUT.

***

### 2. Memory Consumption

Memory or RAM is one of the most critical resources in a mobile device. Identifying areas where your application is consuming more than expected memory is essential. 

You can also identify areas of your application that may be causing memory leaks. Memory leaks can cause your application to consume more and more memory over time, leading to decreased performance and eventually causing the application to crash. 

LambdaTest provides you with three metrics in a time-series format representing the following:

1. Memory Consumed by the system (in MB) throughout the session
2. Memory Consumed by your application (in MB) throughout the session
3. Memory Available for use (in MB) throughout the session

***

### 3. Battery 

A high-performing app could also drain the mobile device's battery quickly, affecting the overall usage of the device and its performance. 

You can monitor the battery drained while using your app and subsequently optimize the features that may contribute to a lot of battery drain, improving the battery life of devices running your app.

***

### 4. Temperature

You can identify elements that cause the battery to overheat by monitoring the battery temperatures while using your app. 

This might help you decide which features to optimise first to save energy and prolong the battery life of the devices running your app.

Users won't have to worry about their smartphone overheating or encountering performance issues due to a heated battery, improving the user experience.

***

### 5. Rendering (Frame Rate)

Rendering performance is a typical performance issue that any app faces. Rendering is measured at different stages in the app’s lifecycle to ensure that users do not have a bad experience with the app. 

LambdaTest provides the frames rate or FPS (frames per second) observed throughout the session.

***

### 6. Network Usage

Tracking the amount of data your app sends and receives can help you understand how it uses the network. By looking at this data over time, you can see when and how your app sends data and use it to make code changes to improve its performance. 

You can use your application to monitor how much data it operates on an actual device, which can help you identify and optimise areas of high network usage. 

LambdaTest provides the following information to capture network usage better:
1. Network download size throughout the session in time-series
2. Network upload size throughout the session in time-series

***

### 7. ANR (Application Not Responding)

Sometimes, your application stops responding, and you receive a pop-up to wait or close the app. Knowing what part of the application's life cycle results in an ANR and in which condition is critical. 

Such instances can ruin the user experience, especially when inputting any information. 

LambdaTest provides information on the number of times your app faced ANR and a dump of logs to find more details quickly. However, this feature is supported only for Android devices for now. 

***

### 8. Application Start-up Time

A faster startup time means a better user experience. By identifying and addressing bottlenecks in the startup process, you can improve the overall performance of your app. 

This can result in a more responsive and smoother user experience. Currently, you can view the cold start-up time and hot start-up time separately, with cold start-up time being supported for Android devices.

***

## Starting a Performance Session

### Track the Metrics via App Automation

You can track the performance metrics for your application inside an app automation test. The data will be captured at the test level and shown on the test details page. 

Just add the following capability inside your test, and set it to `true`.

```bash
"appProfiling" : true;
```

> **Note**: The `appProfiling` flag is supported for Appium tests on iOS and Android devices. However, it is only supported on devices with an Android version of 9 or above. 

A sample output of this test will look like: 

<img loading="lazy" src={require('../assets/images/appium-app/2.png').default} alt="cmd" width="768" height="373" className="doc_img"/>


***

> Got any questions?<br/>
> Please reach out at our <span className="doc\_\_lt" onClick={() => window.openLTChatWidget()}>**24x7 Chat Support**</span> or you could also mail us at [support@lambdatest.com](https://support.lambdatest.com/).

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
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
       Appium App Performance Analytics
      </span>
    </li>
  </ul>
</nav>

