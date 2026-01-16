---
id: gesture-support-ios
title: Gesture Supported for iOS Devices
sidebar_label: Gestures
description: Learn about various kind of gestures which we support for iOS devices on our real devices, and how to use the following.
keywords:
  - Gestures
  - iOS
  - manual testing
  - App Live
  - Custom Gestures
  - Double tap
  - Triple tap
slug: gesture-support-ios
canonical: https://www.testmu.ai/support/docs/gesture-support-ios/
site_name: LambdaTest
url: https://www.testmu.ai/support/docs/gesture-support-ios/
---
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

# iOS Gestures on Real Devices
When testing iOS apps on **<BrandName /> Real Devices**, certain native gestures like double‑tap, triple‑tap, or multi‑finger interactions may be required to complete test flows.

To make this easier, <BrandName /> provides keyboard shortcuts that simulate these **gestures** without needing physical multi‑touch input. These shortcuts work on both **macOS** and **Windows**, allowing you to trigger gestures instantly during manual sessions.

---
# Supported Gestures & Shortcuts

<Tabs className="docs__val">
  <TabItem value="macos" label="macOS" default>
    <div className="lambdatest__codeblock">
      <table>
        <thead>
          <tr>
            <th>iOS Gesture</th>
            <th>Shortcut</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Two-Finger Triple-Tap</td>
            <td>⌘ + ⇧</td>
          </tr>
          <tr>
            <td>Single-Finger Double-Tap</td>
            <td>⌘</td>
          </tr>
          <tr>
            <td>Single-Finger Triple-Tap</td>
            <td>⌥</td>
          </tr>
        </tbody>
      </table>
    </div>
  </TabItem>

  <TabItem value="windows" label="Windows">
    <div className="lambdatest__codeblock">
      <table>
        <thead>
          <tr>
            <th>iOS Gesture</th>
            <th>Shortcut</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Two-Finger Triple-Tap</td>
            <td>Ctrl + Shift</td>
          </tr>
          <tr>
            <td>Single-Finger Double-Tap</td>
            <td>Ctrl</td>
          </tr>
          <tr>
            <td>Single-Finger Triple-Tap</td>
            <td>Alt</td>
          </tr>
        </tbody>
      </table>
    </div>
  </TabItem>
</Tabs>
---
## Additional Links

- [Manual Testing on Real Devices](/support/docs/app-testing-on-real-devices/)
- [Apple Pay Manual Testing Guide](/support/docs/apple-pay-manual/)
- [Assistive Touch](/support/docs/assistive-touch-on-real-ios-devices/)


