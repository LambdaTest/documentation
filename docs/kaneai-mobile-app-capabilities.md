---
id: kane-ai-mobile-app-capabilities
title: KaneAI Mobile App Capabilities
hide_title: true
toc_max_heading_level: 2
sidebar_label: Mobile Authoring Capabilities
description: Use advanced KaneAI mobile-app authoring capabilities, including biometric authentication, camera image injection, and screenshot-block control.
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai mobile app
  - biometrics
  - image injection
  - video injection
url: https://www.testmuai.com/support/docs/kane-ai-mobile-app-capabilities/
site_name: TestMu AI
slug: kane-ai-mobile-app-capabilities/
canonical: https://www.testmuai.com/support/docs/kane-ai-mobile-app-capabilities/
---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

# KaneAI Mobile App Capabilities
***

KaneAI mobile app authoring supports advanced capabilities for authoring mobile app tests: disabling the screenshot block, biometric authentication, image injection, and video injection. You enable each one from advanced settings before you author your test.

<img loading="lazy" src={require('../assets/images/kane-ai/mobile-app-features/image1.jpg').default} alt="KaneAI Mobile App Capabilities" className="doc_img img_center"/>

## Prerequisites
***

:::note
An active KaneAI mobile app authoring session. Each capability is enabled from **Advanced Settings** when you start or edit the session.
:::

## Disable Screenshot Block
***

If your app blocks screenshots and you want to author tests without that hindrance, use this capability. It disables the screenshot block check added in the application so you can author test cases in <BrandName />.

Enable it from advanced settings before you author your test on KaneAI. For more details, see [Disable Screenshot Block](/support/docs/disable-screenshot-block/).

## Biometrics Authentication
***

Biometric authentication verifies a user's identity from their unique biological characteristics, and native applications often use it for secure sign-in. This capability lets you test your application's biometric authentication functionality across devices and platforms.

Enable it from advanced settings before you author your test on KaneAI. For more details, see [Biometric Authentication](/support/docs/biometric-authentication/).

## Image Injection
***

Camera image injection lets you author tests with **image capturing, QR code scanning**, and **barcode scanning** functionality in your app across **real devices** on <BrandName />.

Enable it from advanced settings before you author your test on KaneAI. Once enabled, use the image-injection "slash" command in-session before you select the option that triggers the camera API in your application workflow. For more details, see [Camera Image Injection](/support/docs/camera-image-injection/).

<img loading="lazy" src={require('../assets/images/kane-ai/mobile-app-features/image2.jpg').default} alt="Image Injection" className="doc_img img_center"/>

## Video Injection
***

Video injection lets you test video-based functionality such as **live streaming, real-time video capture,** and **video processing** in your app across **real devices** on <BrandName />.

Enable it from advanced settings before you author your test on KaneAI. Once enabled, use the video-injection "slash" command in-session before you select the option that triggers the camera API in your application workflow. For more details, see the [Video Injection](/support/docs/video-injection/).

## Video Explanation
***

Watch this walkthrough to see these capabilities used in KaneAI authoring:

**[Watch how mobile app advanced capabilities can be leveraged in KaneAI authoring](https://app.trupeer.ai/view/SZxMvBbih)**

## Next Steps
***

Continue with these guides:

- Author mobile tests with the [KaneAI Command Guide](/support/docs/kane-ai-command-guide/).
- Resolve authoring issues with the [Error Handling KaneAI](/support/docs/error-handling-kaneai/).
