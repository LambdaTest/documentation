> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Detox is a popular end-to-end testing framework for React Native applications. This documentation will help you run your Detox tests on TestMu AI HyperExecute using your local system setup.


Detox testing on TestMu AI is supported via HyperExecute on **Android real devices** and **iOS simulators**.


## Prerequisites

Before you begin, ensure you have the following:

- A TestMu AI account. You can get your **Username** and **Access Key** from your [Account Settings](https://accounts.lambdatest.com/detail/profile).
- [Node.js](https://nodejs.org/en/download) and **npm** installed on your local system.
- A React Native application with Detox tests configured, or use the [sample repository](https://github.com/LambdaTest/LT-detox) referenced in this guide.

## Run a Sample Project
### Step 1: Clone Sample Repository

**Detox repo**
Download or Clone the Detox sample from TestMu AI’s GitHub Repository

 View on GitHub


### Step 2: Download the CLI in your Project
Download the HyperExecute CLI and copy it into the root folder of the downloaded sample repository.

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |

### Step 3: Execute your Test Suite
From the project root directory, execute the below CLI command in your terminal:



    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}



> **NOTE :** In case of macOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.





You've successfully triggered the Detox tests on HyperExecute. Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status.

## Configure your own Project

### Step 1: Download the CLI in your Project
Download the HyperExecute CLI and copy it into the root folder.

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |

### Step 2: Configure YAML in your Test Suite
Use the sample YAML below to configure your execution:

```yaml reference title="hyperexecute.yaml"
https://github.com/LambdaTest/LT-detox/blob/main/yaml/hyperexecute.yaml
```

> 📘 To explore more configuration options and tailor settings to your project needs, check out the [YAML documentation](/support/docs/hyperexecute-yaml-parameters/).

### Step 3: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status.



You can click on **View Test** from the **HyperExecute logs**, which will take you to the [App Automation dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build). There, you can access detailed **device logs**, **crash logs**, and **Metadata** for your test. You’ll also be able to watch a **video recording** of the Test sessions for better **debugging** and **analysis**.

## Advanced Configuration

HyperExecute supports the following capabilities for your Detox test runs. Add the relevant keys to your `hyperexecute.yaml` file.

### Tunnel

Test applications hosted on your local or private network by routing traffic through a secure TestMu AI Tunnel. Enable it by setting the top-level `tunnel` flag in your YAML:

```yaml
tunnel: true
```

You can further customize the tunnel behavior (arguments, scope, and more) using `tunnelOpts`. Learn more in the [Tunnel Configuration](/support/docs/hyperexecute-how-to-configure-tunnel/) guide.

### Dedicated Proxy

Route your test traffic through a dedicated proxy server with a fixed IP that your network administrators can whitelist, giving controlled access to network-restricted resources. This feature is enabled for your account by the TestMu AI support team. Learn more in the [Dedicated Proxy](/support/docs/dedicated-proxy/) guide.

### IP Geolocation

Run your tests as if from a specific geographic location by passing a supported two-letter country code, letting you validate region-based content and geo-restricted features. Learn more in the [IP Geolocation on Real Devices](/support/docs/ip-geolocation-on-real-devices-app/) guide, and refer to the [supported country codes](/support/docs/appium-ip-geolocation/).

> For any query or doubt, please feel free to contact us via **24×7 chat support** or you can also drop a mail to **support@testmuai.com**.
