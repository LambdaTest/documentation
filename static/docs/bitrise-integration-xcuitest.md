# Running XCUITests In Bitrise CI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Bitrise offers a mobile CI/CD platform as a service (PaaS) to accelerate the automation of your software development projects. It provides different mobile-first features like exhaustive mobile stack coverage, store code anywhere in cloud or on-premise, and zero hardware setup that make building, testing, and deploying faster and easier.

Using TestMu AI with Bitrise, you can effortlessly perform [XCUI testing](https://www.testmuai.com/xcuitest-app-testing/) of your mobile apps on an [online device farm](https://www.testmuai.com/online-device-farm/) of real Android devices.

## Prerequisites

1. Ensure you have access to TestMu AI [real device cloud](https://www.testmuai.com/real-device-cloud/). If not, please [contact sales](https://www.testmuai.com/contact-us/).

2. A Bitrise account.

3. A GitHub / BitBucket / GitLab or other repository to connect with Bitrise.

**Note**
If you are getting started with Bitrise CI, please refer to our documentation on [running Appium tests in Bitrise CI](/support/docs/bitrise-integration/).

## Configuring The TestMu AI App Automate - XCUI Step In Bitrise

1. Use the search bar to find **TestMu AI App Automate - XCUITest**.

2. Click **TestMu AI App Automate- XCUITest** card.

3. In **Input Variables**, enter **App ipa path** and **Test suite ipa path**.

> You can add a public link if your files are accessible through public link. In case, you don't an apk link handy, you can use TestMu AI’s sample application Proverbial for running your first test.
* [Proverbial iOS](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa)
* [XCUITest Suite](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios_xcuitest.ipa)

* In **TestMu AI username**, click Select secret variable.

4. Provide the list of device and operating system version on which you wish to run your tests.

Other options:

| Key | Value | Capability Description
| -------- | -----| ------------ |
| Device List   |  TYPE: STRING DEFAULT: Untitled `"iPhone 12-14", "iPhone 6S-13"`|  Add the devices here on which the test will be executed. Devices are comma separated.   |
|Build Name  |   TYPE: STRING DEFAULT: Untitled `iOS Small Run` |  You can group your tests like a job containing multiple tests. |
| Queue Timeout |  TYPE: STRING DEFAULT: 600 `300` | Enter the time in seconds after which you want your build to timeout from queue.  |
| Idle Timeout |  TYPE: STRING DEFAULT: 120 `120` | Enter the time in seconds for maximum running time on a test in the build. |
| Tunnel |  TYPE: BOOLEAN `True`OR `False` | To test local applications with TestMu AI. |
| Tunnel name |  TYPE: STRING `RabbitHole` | Name of the tunnel. |
| Device logs |  TYPE: BOOLEAN DEFAULT: FALSE`True`OR `False`| Enable Device Logs that will show information on the actions performed by the device. |
| Network logs |   TYPE: BOOLEAN DEFAULT: FALSE`True`OR `False` | Enable Network Logs that will show the information on the data transmitted & received by the device. |
| Video |   TYPE: BOOLEAN DEFAULT: TRUE`True`OR `False` | Video recording of the screen. |

[XCUI Testing On TestMu AI](/support/docs/getting-started-with-xcuitest/#capabilities-supported)

[Automation Capabilities Generator For Selenium and Appium](https://www.testmuai.com/capabilities-generator/)

5. Click **⌘ + S** to save the step.

6. Let’s go back to the Build and click on `Rebuild` to Build the Step.

7. Once the build process is complete, visit **TestMu AI App Automation Dashboard** to view your test results.
