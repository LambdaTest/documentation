# ACCELQ Integration

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

ACCELQ is an AI Native Codeless automation testing and management platform. It enables you automate web, mobile, API, database, and packaged applications.

By integrating TestMu AI with ACCELQ, you can perform web and mobile app automation on an online device farm of 3000+ real browsers, devices, and OS combinations, and accelerate your end-to-end digital testing efforts.

## Prerequisites

1. Make sure you have a TestMu AI account.  If you don't have an account yet, sign up for free.

2. To integrate TestMu AI with ACCELQ, you will need a TestMu AI username and access key.

3. Install the ACCELQ Agent Dashboard.

## Integrating TestMu AI From ACCELQ Agent Dashboard

1. Open your ACCELQ Agent Dashboard.

2. Once you are in the target agent, click **Edit Configuration**.

3. You need to use the external device provider for web, mobile, or both platforms. For example, if you wish to perform web browser automation, select **Use external device provider for Web**.

4. Now enter your TestMu AI username and access key and save/restart the ACCELQ Agent.

### Executing The Tests

1. Once the agent is operable, you can choose browser, device and OS combinations from the list that TestMu AI support.

2. From the Run modal, select the agent from the AGENT/HOST section. After that, choose browser and device from the corresponding sections.

## Capturing Views For Mobile Automation

1. From the **Record View** dialog box, click **Cloud Provider**.

2. Select *TestMu AI* from the **Provider** dropdown. Enter your TestMu AI username and access key, and click **Authenticate**.

3. Once the authentication is successful, you can select the real devices that is fetched from the TestMu AI platform.

4. In the **App Url**, provider your TestMu AI App URL.

5. Now click **Start Capture** and it will launch your test session on the selected device.
