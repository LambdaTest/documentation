---
id: har-log-viewer
title: HAR Log Viewer With Waterfall for Selenium Testing
hide_title: true
sidebar_label: HAR Log Viewer With Waterfall
description: Learn how to use HAR Log Viewer With Waterfall for Selenium automation testing on TestMu AI.
keywords:
- har log viewer with waterfall
- har log viewer
- har log viewer with waterfall lambdatest
- har log viewer network logs
- har log viewer with waterfall selenium
url: https://www.lambdatest.com/support/docs/har-log-viewer-with-waterfall/
site_name: LambdaTest
slug: har-log-viewer-with-waterfall/
---

# HAR Log Viewer With Waterfall for Selenium Testing
***

LambdaTest Web Automation provides the HAR (HTTP Archive) Log Viewer with Waterfall that helps you analyze the performance of web pages for your Selenium automation tests. 

It provides a visual representation of how resources on a webpage are loaded and interact over time. The key component of this feature is the "waterfall" view, which graphically displays the sequence and duration of requests as a web page loads.

## How to Use HAR Log Viewer With Waterfall on LambdaTest?
***

To get the network logs using HAR Log Viewer With Waterfall, you need to pass `network.full.har = true` in your test scripts.

Once you run the tests, navigate to the Web Automation Dashboard to see the HAR Log Viewer With Waterfall in action.

<img loading="lazy" src={require('../assets/images/har_waterfall.png').default} alt="add" width="1342" height="643" className="doc_img"/>

In the above view, each resource (like an HTML file, a CSS stylesheet, JavaScript file, or an image) is represented as a horizontal bar. The length of the bar indicates the time taken to load that resource. The sequence in which these bars are arranged reflects the order in which the browser requested these resources. This graphical representation allows developers and testers to quickly identify bottlenecks or performance issues in the page loading process.

## Use Cases for HAR Log Viewer With Waterfall
***

- **Performance Optimization**: By analyzing the waterfall chart, developers can pinpoint resources that take longer to load and optimize them. This might involve compressing images, minifying CSS and JavaScript files, or implementing better caching strategies.
- **Diagnosing Load Order Issues**: Sometimes, the order in which resources load can impact the performance. Developers can use the HAR viewer to rearrange the loading sequence for efficiency, like ensuring critical CSS and JavaScript load first.
- **Network Issues Identification**: Slow loading times can also be due to network issues. The HAR Log Viewer can help identify if the delay is server-side (long time to first byte) or network-related (slow download time).
- **Performance Monitoring Over Time**: By regularly analyzing HAR logs, teams can monitor the performance of their web pages over time. This is crucial for detecting performance degradation or improvements following updates or changes to the site.
- **Third-Party Resource Management**: Many websites rely on third-party resources (like ads, analytics scripts, etc.). The HAR viewer helps in identifying the impact of these resources on overall page load time and optimizing their loading strategy.
- **Comparative Analysis**: By comparing HAR files before and after optimization efforts, developers can quantitatively measure the effectiveness of their changes in reducing load times and improving user experience.
- **Understanding Browser Behavior**: Different browsers can behave differently in terms of resource loading. By analyzing HAR files from different browsers, developers can understand these nuances and optimize for cross-browser compatibility.
- **Compliance and Testing**: Ensuring that a site loads efficiently under various conditions (like slow network speeds) is essential for compliance with web performance standards. HAR logs can be used to test and ensure compliance under these scenarios.


