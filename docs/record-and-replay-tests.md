---
id: record-and-replay
title: How to Record and Replay Tests using LT Debug
hide_title: true
sidebar_label: LT Debug
description: Learn how to use LT Debug to replay or retest user flow as an automated test on 3000+ browser and OS combinations.
keywords:
  - lt debug
  - record replay tests
  - chrome devtools recorder
  - lt debug 2

url: https://www.testmuai.com/support/docs/record-and-replay-tests/
site_name: LambdaTest
slug: record-and-replay-tests/
canonical: https://www.testmu.ai/support/docs/record-and-replay-tests/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

# Record and Replay Tests using LT Debug 2.0
---

With LT Debug 2.0, you now have the ability to record user interactions through the Chrome Recorder Panel and replay or retest them as automated tests on a cloud grid on over 3000+ real browsers and operating system combinations. This eliminates the need to download code or manually run tests on your local machine, thus streamlining and optimizing your testing process.

<div className="ytframe"> 
<div className="youtube" data-embed="vSpgplIYSUQ">
    <div className="play-button"></div>
</div>
</div>

## Prerequisites
---

1. Install the [LT Debug Chrome Extension](https://chrome.google.com/webstore/detail/lt-debug/kofahhnmgobkidipanhejacffiigppcd).
2. Login to your <BrandName /> Account via LT Debug Dashboard. Don't have an account, [sign up for free](https://accounts.lambdatest.com/register).

<img loading="lazy" src={require('../assets/images/record-replay/login.png').default} alt="image"  className="doc_img" width="1341" height="498"/><br/><br/>

## Recording User Interactions with Chrome Recorder
---

1. To initiate a recording in Chrome DevTools, first, open the developer tools panel by inspecting the webpage.

<img loading="lazy" src={require('../assets/images/record-replay/inspect.png').default} alt="image"  className="doc_img" width="1341" height="498"/><br/><br/>

2. Once the panel is open, navigate to the **Recorder** tab. 

<img loading="lazy" src={require('../assets/images/record-replay/recorder.png').default} alt="image"  className="doc_img" width="1341" height="498"/><br/><br/>

3. From there, select **Create a new recording**.

<img loading="lazy" src={require('../assets/images/record-replay/createrec.png').default} alt="image"  className="doc_img" width="1341" height="498"/><br/><br/>

4. Now click **Start recording** to begin capturing user interactions on the page.

<img loading="lazy" src={require('../assets/images/record-replay/start.png').default} alt="image"  className="doc_img" width="1341" height="498"/><br/><br/>

5. Once you have completed recording the user flow in Chrome DevTools, you can end the recording process by clicking on **End recording**. 

<img loading="lazy" src={require('../assets/images/record-replay/end.png').default} alt="image"  className="doc_img" width="1341" height="498"/><br/><br/>

## Recording and Replaying Tests on <BrandName />
---

After ending the recording process in Chrome DevTools, you will notice a <BrandName /> button appear on the screen. 

1. To replay or retest the recorded user flow on <BrandName />, simply click on the <BrandName /> button. 

<br/><img loading="lazy" src={require('../assets/images/record-replay/lt.png').default} alt="image"  className="doc_img" width="1341" height="498"/><br/><br/>

2. Configure your test capabilities like Browser/OS Version, Build Name, and Test Name, etc, on which you wish to run the recorded interactions, and click **Start Test**.

<img loading="lazy" src={require('../assets/images/record-replay/caps.png').default} alt="image"  className="doc_img" width="1341" height="498"/><br/><br/>

3. Once the test successful runs, it will generate the test IDs and a link to <BrandName /> Automation Dashboard.

<img loading="lazy" src={require('../assets/images/record-replay/dash.png').default} alt="image"  className="doc_img" width="1341" height="498"/><br/><br/>

4. To view your record automated test results, visit the [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/build).

<img loading="lazy" src={require('../assets/images/record-replay/results.png').default} alt="image"  className="doc_img" width="1341" height="498"/>

---

