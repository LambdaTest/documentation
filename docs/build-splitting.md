---
id: build-split
title: Build Inactivity Time
hide_title: true
sidebar_label: Build Inactivity Time
description: Learn how to use Build Splitting functionality to effectively organize and manage your tests at different time intervals.
keywords:
  - build split
  - build splitting
  - automation build preference
  - build inactivity time

url: https://www.testmuai.com/support/docs/build-inactivity-time/
site_name: TestMu AI
slug: build-inactivity-time/
canonical: https://www.testmuai.com/support/docs/build-inactivity-time/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import { CookieTrackingSignup } from '@site/src/component/CookieTracking';

# Setting Up the Build Inactivity Time [Build Splitting]
---

Build Splitting, or Build Inactivity Time, is a feature that allows you to organize tests more efficiently. It allows you to track your progress by identifying tests that are run at specific intervals. You can use the Build Splitting feature to set a time interval after which the system will wait for the defined time and mark the build as completed. Any new builds you run after this time period will be created as a new build.


## How it works?
---

Previously, when you ran a build on <BrandName />, all tests were merged into the same build, making it difficult to identify those tests that were run at specific intervals. As a result, we have introduced Build Splitting logic, which helps you organize your tests better.

Build Splitting logic requires you to set Build Inactivity Time. For instance, if the Build Inactivity Time is set to 5 minutes, the system will wait 5 minutes after the last test is completed before marking the build as complete. Upon completion of the build before the inactivity time, the test will be run in the existing build. However, if you run a test (even with the same name) after the specified inactivity time (i.e., 5 minutes), it will come under the new build.

## How to set the Build Inactivity Time?
---

:::info Note
1. By default, the build inactivity time is six hours.
2. Every user within the organization can set their own build inactivity time.
:::

To use the Build Splitting functionality, follow the below steps:

1. Log in to your <BrandName /> account. Don't have an account, <a href="https://accounts.lambdatest.com/register" onClick={CookieTrackingSignup}>sign up for free</a>.


2. From the top-right corner, click on the Profile avatar, and navigate to **Profile > Product Preferences**.

3. Under the **Automation Build Preference**, select the **Build Inactivity Time** to choose
your preferences.

<img loading="lazy" src={require('../assets/images/build-split/inactivity.png').default} alt="image"  className="doc_img" width="1341" height="498"/><br/><br/>


Once you have set the build inactivity time, a confirmation notification will pop-up stating: *Build Time updated successfully.*

<img loading="lazy" src={require('../assets/images/build-split/popup.png').default} alt="image"  className="doc_img" width="1341" height="498"/><br/><br/>


---
