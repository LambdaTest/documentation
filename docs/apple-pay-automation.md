---
id: apple-pay-automation
title: Apple Pay Automation on Real Devices
sidebar_label: Apple Pay Automation
description: Learn how to automate Apple Pay flows on iOS public devices, including capabilities, payment injection, passcode entry, and limitations.
keywords:
  - Apple Pay
  - iOS
  - automation
  - testing
  - payment
slug: /apple-pay-automation
---
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Apple Pay Automation on Real Devices

**Apple Pay** is Apple’s secure digital wallet and payment system that enables purchases, one-click checkouts, and adds an extra layer of protection for financial transactions. In real-world apps and websites, Apple Pay is widely used for simplifying checkout experiences, reducing friction, and improving user trust.

For **testing payment flows**, validating Apple Pay becomes critical. Automation of Apple Pay ensures you can reliably test end-to-end purchase scenarios, confirm that payment sheets open correctly, details are pre-filled, and transactions are processed securely—without relying on production cards.

With LambdaTest, you can automate Apple Pay flows on **real iOS devices**. From provisioning Wallet with sandboxed test cards, to injecting payment details, confirming payments, and entering the passcode, LambdaTest provides a seamless way to run and validate Apple Pay scenarios as part of your automation suite.

> To enable it for your organization, please contact us via <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat support**</span> or you can also drop a mail to **support@lambdatest.com**.<br />

---
## Use Cases

- **Checkout Validation**: Ensure your in-app or web checkout flow works seamlessly with Apple Pay as a payment method.
- **End-to-End Payment Testing**: Validate that Apple Pay sheets open correctly, test cards are provisioned, and transactions are processed end-to-end.
- **CI/CD Integration**: Run Apple Pay scenarios as part of continuous integration pipelines to catch payment flow issues early.
- **Cross-Network Stability**: Test across Visa, MasterCard, and other networks to ensure consistent user experiences.
- **Security & Compliance**: Confirm that sensitive flows like passcode entry and secure card handling behave as expected during automation.

---
 **Supported Plans & Devices**



---
## Capabilities

| Capability                  | Type       | Default | Required / Optional | Description                                                                                 |
|----------------------------|------------|---------|---------------------|---------------------------------------------------------------------------------------------|
| **applePay**                | Boolean    | true    | Mandatory           | Enables Apple Pay provisioning including Wallet, Sandbox card, AssistiveTouch, and Passcode on supported real iOS devices. |
| **applePayCardType**        | Array      | None    | Mandatory           | Specify preferred payment networks (e.g., ["Visa", "Mastercard"]) to improve stability. |

---

## Apple Pay Workflow in Automation Test

### Step 1: Upload Your App to LambdaTest

1. **Uploading Your App** – Follow the detailed steps in our [Upload Your Application](https://www.lambdatest.com/support/docs/upload-your-application/) guide.
2. Once uploaded, **note the App ID** returned by the API or dashboard.
3. Use this **App ID** in the `"app"` capability in your automation script.

---
### Step 2: Add Desired Capabilities

To enable Apple Pay automation, include the following capability in your automation session as highlighted in the Capabilities:

---
<Tabs>
  <TabItem value="android" label="Android" default>
    <CodeBlock className="language-java">
{`desired_caps = {
    "deviceName": "Galaxy S25",
    "platformName": "Android",
    "platformVersion": "16",
    "isRealMobile": True,
    "app": "YOUR_APP_ID",
    "build": "Sample Build",
    "name": "Sample Test",
    // highlight-next-line
    "enableApplePay": true,
    // highlight-next-line
    "applePayCardType": ["Visa", "Mastercard"],
}`}
    </CodeBlock>
  </TabItem>

  <TabItem value="ios" label="iOS">
    <CodeBlock className="language-java">
{`desired_caps = {
    "deviceName": "iPhone 16",
    "platformName": "iOS",
    "platformVersion": "18",
    "isRealMobile": True,
    "app": "YOUR_APP_ID",
    "build": "Sample Build",
    "name": "Sample Test",
    // highlight-next-line
    "applePay": true,
    // highlight-next-line
    "applePayCardType": ["Visa", "Mastercard"],
}`}
    </CodeBlock>
  </TabItem>
</Tabs>

:::info

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.lambdatest.com/capabilities-generator/). For more details, please refer to our guide on [**Desired Capabilities in Appium**](https://www.lambdatest.com/support/docs/desired-capabilities-in-appium/).

:::

---

### Step 3: Confirm Apple Pay Payment

- To confirm Apple Pay payment at the payment step, add a hook to confirm and complete the payment.
- This can be done using LambdaTest hooks. A sample script is provided below to trigger confirmation of the Apple Pay payment step:

<CodeBlock className="language-java">
```java
driver.executeScript("lambda_executor: {\"action\": \"applePay\", \"arguments\": {\"confirmPayment\": \"true\"}}");
```
</CodeBlock>

---

### Step 4: Enter Passcode to Complete Payment

- After confirming the Apple Pay payment, the device will prompt for the passcode to securely authorize the transaction. Your automation script must handle this prompt by entering the passcode using Appium's keyboard input methods to simulate the user securely confirming the payment.
  
- Below is a sample **Java** code snippet demonstrating how to send the passcode using Appium:

```java
driver.getKeyboard().sendKeys("123456");
```

> **Note:** The default passcode is `123456` unless configured differently on the device. This step is essential to simulate secure confirmation and complete the Apple Pay transaction during automation.