# Testing Locally Hosted Apps For App Automation

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Using the TestMu AI tunnel, you can test locally and privately hosted apps across various real Android and iOS devices on the TestMu AI Appium test automation platform. TestMu AI tunnel uses protocols like **Web Socket, HTTPS/TCP** and more to let you build a secure and unique tunnel connection between your local system and TestMu AI cloud servers.

In this documentation, learn how to configure TestMu AI tunnel to test locally or privately hosted apps while performing mobile app automation.

To test apps locally, you will need to configure:

1. Connection with TestMu AI tunnel.

2. Test scripts to run via TestMu AI tunnel.

## Setting Up Connection With TestMu AI Tunnel

Shown below are the steps to configure the connection with TestMu AI tunnel.

1. Download the binary file based on your operating system.

- Windows **[64 Bit](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip) | [32 Bit](https://downloads.lambdatest.com/tunnel/v3/windows/32bit/LT_Windows.zip)**
- macOS **[64 Bit](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip) | [32 Bit](https://downloads.lambdatest.com/tunnel/v3/mac/32bit/LT_Mac.zip)**
- Linux **[64 Bit](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip) | [32 Bit](https://downloads.lambdatest.com/tunnel/v3/linux/32bit/LT_Linux.zip)**

2. Extract the downloaded binary file.

3. Navigate to the Command Prompt and point to the directory/folder where you extracted the binary file.

4. Run the below command in the terminal.

```js
./LT --user {user's login email} --key {user's access key} --tunnelName {user's tunnel name}
```

## Configuring Test Scripts

After configuring the connection with TestMu AI tunnel, you will need to set the capability `tunnel` to `True`.

| Key    | Values     | Description          | Desired Capability |
| ------ | ---------- | -------------------- | ------------------ |
| tunnel | true/false | Configure the tunnel | `"tunnel" : True,` |

You can also add the `tunnel` capability using TestMu AI Capability Generator.

> In case you have any questions or need any additional information, drop them at our **24X7 Chat Support** or mail us directly at support@testmuai.com.
