# Appium Testing - Virtual Device On HyperExecute

This page outlines how to execute your Appium tests on HyperExecute using TestNG with YAML 0.2
> HyperExecute uses [YAML 0.2](/support/docs/hyperexecute-yaml-version0.2/) to perform the tests using Appium.

## Prerequisites

To run the Tests on HyperExecute from your Local System, you are required:

- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Your lambdatest [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- Setup the Environmental Variable
- Ensure you have Appium’s [Java client library](https://github.com/appium/java-client) installed.
- Access to an **Android** app (.apk or .aab file)

**Sample repo**
All the code samples in this documentation can be found on **TestMu AI's Github Repository**. You can either download or clone the repository to quickly run your tests.  View on GitHub

> If you do not have any **.apk** file, you can run your sample tests on TestMu AI by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk)

### Download HyperExecute CLI

The *HyperExecute CLI* is used for triggering tests on HyperExecute. It is recommend to download the HyperExecute CLI binary on the host system to perform the tests on HyperExecute. The CLI download site for various platforms is displayed below:

| Platform | HyperExecute CLI download location |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

### Setup Environment Variable
Export the environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [TestMu AI Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).
Run the below mentioned commands in the terminal to setup the CLI and the environment variables.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

## Steps to Run Your Test

### Step 1: Upload your Application
Upload your _android_ application (.apk file) to the TestMu AI servers using our REST API. You need to provide your Username and AccessKey in the format `Username:AccessKey` in the cURL command for authentication. Make sure to add the path of the appFile in the cURL request. Here is an example cURL request to upload your app using our REST API:

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/upload/virtualDevice' --form 'name="Android_App"' --form 'appFile=@""'
`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/virtualDevice" -F "appFile=@"""
`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/upload/virtualDevice' \\
--form 'name="Android_App"' \\
--form 'url="https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk"'`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/upload/virtualDevice" --header "Content-Type: application/x-www-form-urlencoded" --data-urlencode "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" --data-urlencode "name=Proverbial_App"`}

> Response of above cURL will be a **JSON** object containing the `App URL` of the format - ``lt://APP123456789123456789`` and will be used in the next step.

### Step 2: Configure your Test Script
Write Your Automation Script in the client language of your choice from the ones supported by Appium. An automation script for the sample applications have been provided below.

Here is a sample automation script in Java for the sample app downloaded above. Ensure to update the `app_url`, `username` and `accesskey` in the below code.

```java reference title="AndroidEmulator.java"
https://github.com/LambdaTest/hyperexecute-appium-testng/blob/android-emulator/src/main/java/AndroidEmulator.java
```

### Step 3: Update your XML file
Create `.XML` file in order to run your test and define device capabilities. Please find sample code below for the same.

```xml reference title="android-emulator.xml"
https://github.com/LambdaTest/hyperexecute-appium-testng/blob/android-emulator/src/test/java/android-emulator.xml
```

### Step 4: Configure YAML and Execute your Script
```yaml reference title="android-emulator.yaml"
https://github.com/LambdaTest/hyperexecute-appium-testng/blob/android-emulator/yaml/hyp-android-emulator.yaml
```

### Step 5: Execute your Test Suite
> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key in the step 2.

    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}
