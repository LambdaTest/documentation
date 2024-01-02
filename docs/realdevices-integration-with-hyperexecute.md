---
id: real-devices-integration-with-hyperexecute
title: Real Devices
hide_title: true
sidebar_label: Hyperexecute Real Devices Testing
description: Maximize real device testing with HyperExecute! Accelerate test orchestration and intelligence on real devices with LambdaTest's support. 
keywords:
    - hyperexecute integrations
    - hyperexecute integrations with products
    - products
    - real devices
    - mobile testing
    - mobile testing on Hyperexecute
    - mobile testing on lambdatest
    - fast mobile testing
    - mobile automation

url: https://www.lambdatest.com/support/docs/realdevices-integration-with-hyperexecute/
site_name: LambdaTest
slug: real-devices-integration-with-hyperexecute/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Katalon Integration with HyperExecute",
          "item": "https://www.lambdatest.com/support/docs/katalon-integration-with-hyperexecute/"
        }]
      })
    }}
></script>

# Real Devices Integration with HyperExecute

Till now you have executed your test scripts on the [Real Device Automation](https://www.lambdatest.com/support/docs/appium-python-pytest/). This Document will not only explain to you about how to use Real Devices on Hyperexecute but also the superpower you just unlocked with Hyperexecute - Test Orchestration and Intelligence.

HyperExecute is a smart test orchestration platform to run end-to-end tests at the fastest speed possible. HyperExecute lets you achieve an accelerated time to market by providing a test infrastructure that offers optimal speed, test orchestration, and detailed execution logs.

**Let's first take a look at the different ways of executing tests on Hyperexecute:**

## 1\. Triggering a job on Hyperexecute  
In order to trigger a job on hyperexecute, it requires the [HyperExecute CLI](https://www.lambdatest.com/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) and a set of instructions inside the [HyperExecute Yaml](https://www.lambdatest.com/support/docs/deep-dive-into-hyperexecute-yaml/) file. When you trigger the CLI command, it connects with the Hyperexecute APIs which then distributes the tests across different machines/nodes for parallel execution as shown in the diagram below:
<img loading="lazy" src={require('../assets/images/he-real-devices/rd1.png').default} alt="Image"  className="doc_img"/>


## 2\. Real Devices Test Execution on Hyperexecute
In case of Real devices test execution the test scripts from the machines run the actual tests on connected real devices as shown in the diagram below:
<img loading="lazy" src={require('../assets/images/he-real-devices/rd2.png').default} alt="Image"  className="doc_img"/>

## 3\. Triggering through local machine
When you are triggering your test cases from the local machine the flow of data is as shown in the diagram below:
<img loading="lazy" src={require('../assets/images/he-real-devices/rd3.png').default} alt="Image"  className="doc_img"/>

## 4\. Triggering through Jenkins
In order to execute a job on Hyperexecute via Jenkins, you would need to perform 2 simple steps :  
<img loading="lazy" src={require('../assets/images/he-real-devices/rd4.png').default} alt="Image"  className="doc_img"/>   


You can read more about it [here](https://www.lambdatest.com/support/docs/hyperexecute-integration-with-ci-cd-tools/).  When you want the job to be initiated from the Jenkins Pipeline, it would look as shown in the diagram below: 
<img loading="lazy" src={require('../assets/images/he-real-devices/rd5.png').default} alt="Image"  className="doc_img"/>  

## 5\. How to Trigger Real Device tests on Hyperexecute ?
All of the above 4 parts were under the assumption that you have set up and executed your test scripts on the Standard [Real Device Automation](https://www.lambdatest.com/support/docs/appium-python-pytest/) offering, hence we had left the APP ID part out, just to make sure you get a hold of the basic flow first. There are multiple ways for you to experience Hyperexecute. However, we have listed down a few ways which are divided into two parts - **Manual and Advanced Usage.**

There are two ways that you can upload your Application:

1. **Generate your appId:** When you are running your test scripts directly on [Real Device Automation](https://www.lambdatest.com/support/docs/appium-python-pytest/), you need to upload the APK/IPA first, which can be done using a simple [cURL command](https://www.lambdatest.com/support/docs/appium-python-pytest/#1-upload-your-application). This can be further done in two ways as explained in the [official documentation](https://www.lambdatest.com/support/docs/appium-python-pytest/#1-upload-your-application). When running your test scripts via HyperExecute, you can use the **_Upload Via URL_** so that the same could be easily replicated every time your APK is updated at the URL you have provided in the cURL command. As a response of this cURL command you will get the APP ID of the format as mentioned below **_“lt://APP123456789123456789”_** 


2. **Provide a custom appId:** Alternatively you can provide any name of your choice as the appId. All you need to do is **_Upload Via URL and provide the parameter “custom_id” in the cURL command._** Here’s a link to the [official documentation](https://www.lambdatest.com/support/docs/app-testing-apis/#uploading-your-application).

***
> **Please note: For both the usage examples here we have used the Pytest Sample repository which you can access** [**here**](https://github.com/LambdaTest/HyperExecute-appium-python-pytest)**. The YAML files are specifically configured for this repo and needs minor tweaks in case you want to run another test script.**


## **Manual Usage**

First of all you would need a [**Hyperexecute YAML**](https://www.lambdatest.com/support/docs/deep-dive-into-hyperexecute-yaml/) to start with. This is the configuration file for running on Hyperexecute. You can simply pass the appId as shown below:


```bash
version: 0.2
runson: android
concurrency: 1
env:
  APP_IDS: lt://APP123456789123456789
pre:
  - echo ${APP_IDS}
testDiscovery:
  type: raw
  mode: static
  command: grep -nri 'class' tests -ir --include=\*.py | sed 's/:.*//'
testRunnerCommand: pytest -s $test
framework:
  name: appium
  args:
    appId: lt://APP123456789123456789
  ```

  First of all, please ensure that the [Hyperexecute CLI](https://www.lambdatest.com/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) sits in the root directory of your test repository. Now, to execute your test script all you need to do is run the command as provided below :

  ```bash 
  ./hyperexecute --user <your_username> --key <your_access_key> --config <your_yaml_file_name> 
  ```  
You’re all set to experience Hyperexecute!


## **Advanced Usage**

Hyperexecute has a way to pass variables in the Hyperexecute Yaml using Hyperexecute CLI flags. We can use a shell script to automate this entire process - upload the app and pass the appId using vars flag and set the value as environment variables. The scripts can use those environment variables in the capabilities to pass the appID. 

Further, we have divided the scripts into two sections - **Bash Script to be used in Linux or MacOS devices and Powershell Script that can be used in a Microsoft OS.**

***
> **Please note: You will need to update the Username, Access Key , APP_URL and APP_NAME as per your use case. Here, for simplicity we have used the APP_NAME variable for the custom_id naming convention. The upload url will remain the same.**

## **Bash Script**

**Approach 1. Upload From App URL (Bash)**

```bash
#!/bin/bash
# Set the LambdaTest username and access key
USERNAME="abc"
ACCESS_KEY="abcdefghijklmnopqrstuvwxyz123456789"

# Set the URL and app name

UPLOAD_URL="https://manual-api.lambdatest.com/app/upload/realDevice"
APP_URL="<APP_URL>"
APP_NAME="Proverbial_App"

# Make the curl request and save the response

response=$(curl -s -u "$USERNAME:$ACCESS_KEY" -X POST "$UPLOAD_URL" -F "url=:${APP_URL}" -F "name=${APP_NAME}" -F “custom_id=${APP_NAME}”)

# Check if the response contains an app_id

if [[ $response == *app_url* ]]; then
  
  # Parse the app_id and app_url from the response
  app_url=$(echo "$response" | sed -n 's/.*"app_url":"\([^"]*\).*/\1/p')
  
  # Print the app_url and open it in a browser
  echo "App URL: $app_url"
  
  # Pass the app_url value to hyperexecute
  ./hyperexecute --user $USERNAME --key $ACCESS_KEY
else
  # Print the error message
  echo "Error: $(echo "$response" | grep -oP '(?<="message":")[^"]*')"
fi
```

**Approach 2. Upload from local file path (Bash)**

```bash
#!/bin/bash
# Set the LambdaTest username and access key
USERNAME="abc"
ACCESS_KEY="abcdefghijklmnopqrstuvwxyz123456789"

# Set the URL and app name

UPLOAD_URL="https://manual-api.lambdatest.com/app/upload/realDevice"
APP_PATH="<APP_PATH>"
APP_NAME="Proverbial_App"

# Make the curl request and save the response

response=$(curl -s -u "$USERNAME:$ACCESS_KEY" -X POST "$UPLOAD_URL" -F "appFile=:${APP_PATH}" -F "name=${APP_NAME}" -F “custom_id=${APP_NAME}”)

# Check if the response contains an app_id

if [[ $response == *app_url* ]]; then
  
  # Parse the app_id and app_url from the response
  app_url=$(echo "$response" | sed -n 's/.*"app_url":"\([^"]*\).*/\1/p')
  
  # Print the app_url and open it in a browser
  echo "App URL: $app_url"
  
  # Pass the app_url value to hyperexecute
  ./hyperexecute --user $USERNAME --key $ACCESS_KEY --vars APP_ID="$app_url"
else
  # Print the error message
  echo "Error: $(echo "$response" | grep -oP '(?<="message":")[^"]*')"
fi
```

## **PowerShell Script**

**Approach 1. Upload from App URL (Powershell)**


```bash
# Set the LambdaTest username and access key
$USERNAME="abc"
$ACCESS_KEY="abcdefghijklmnopqrstuvwxyz123456789"

# Set the URL and app name
$UPLOAD_URL="https://manual-api.lambdatest.com/app/upload/realDevice"
$APP_URL="https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk"
$APP_NAME="Proverbial_App"

# Create a hashtable with the form data
$formData = @{
  url = ":$APP_URL"
  name = $APP_NAME

  custom_id = $APP_NAME
}

# Create a credential object with the API credentials
$cred = New-Object System.Management.Automation.PSCredential ($USERNAME, ($ACCESS_KEY | ConvertTo-SecureString -AsPlainText -Force))

# Make the web request and save the response
$response = Invoke-WebRequest -Uri $UPLOAD_URL -Method POST -Credential $cred -ContentType "multipart/form-data" -Body $formData

# Check if the response contains an app_url
if ($response.Content -like "*app_url*") {
  
  # Parse the app_id and app_url from the response
  $app_url = $response.Content | Select-String -Pattern '"app_url":"([^"]+)"' | ForEach-Object { $_.Matches.Groups[1].Value }
  
  # Print the app_url and open it in a browser
  Write-Host "App URL: $app_url"
  
  # Pass the app_url value to hyperexecute
  .\hyperexecute --user $USERNAME --key $ACCESS_KEY --vars APP_ID="$app_url"
} else {
  # Print the error message
  $error_message = $response.Content | Select-String -Pattern '"message":"([^"]+)"' | ForEach-Object { $_.Matches.Groups[1].Value }
  Write-Host "Error: $error_message"
}


```
**Approach 2. Upload from local file path (Powershell)**

```bash
# Set the LambdaTest username and access key
$USERNAME="abc"
$ACCESS_KEY="abcdefghijklmnopqrstuvwxyz123456789"

# Set the URL and app name
$UPLOAD_URL="https://manual-api.lambdatest.com/app/upload/realDevice"
$APP_PATH="D:\test\app.apk"
$APP_NAME="Proverbial_App"

# Create a hashtable with the form data
$formData = @{
  appFile = ":$APP_PATH"
  name = $APP_NAME

  custom_id = $APP_NAME
}

# Create a credential object with the API credentials
$cred = New-Object System.Management.Automation.PSCredential ($USERNAME, ($ACCESS_KEY | ConvertTo-SecureString -AsPlainText -Force))

# Make the web request and save the response
$response = Invoke-WebRequest -Uri $UPLOAD_URL -Method POST -Credential $cred -ContentType "multipart/form-data" -Body $formData

# Check if the response contains an app_url
if ($response.Content -like "*app_url*") {
  
  # Parse the app_id and app_url from the response
  $app_url = $response.Content | Select-String -Pattern '"app_url":"([^"]+)"' | ForEach-Object { $_.Matches.Groups[1].Value }
  
  # Print the app_url and open it in a browser
  Write-Host "App URL: $app_url"
  # Pass the app_url value to hyperexecute
  .\hyperexecute --user $USERNAME --key $ACCESS_KEY --vars APP_ID="$app_url"
} else {
  # Print the error message
  $error_message = $response.Content | Select-String -Pattern '"message":"([^"]+)"' | ForEach-Object { $_.Matches.Groups[1].Value }
  Write-Host "Error: $error_message"
}
```
**Please note:** The [**Hyperexecute YAML**](https://www.lambdatest.com/support/docs/deep-dive-into-hyperexecute-yaml/) in this case would be slightly different than before since the appId would be passed as environment variables here. Below is a sample for your reference: 

```bash
version: 0.2
runson: android
concurrency: 1
pre:
  - echo ${APP_ID}
testDiscovery:
  type: raw
  mode: static
  command: grep -nri 'class' tests -ir --include=\*.py | sed 's/:.*//'

testRunnerCommand: pytest -s $test
framework:
  name: appium
  args:
    appId: ${APP_ID}

```
## **Support**

We at Lambdatest take pride in our Support system. We ensure that we do the heavy lifting while our customers can focus on the test scripts and strategy. As a first step in the POC, our support engineers conduct a working session over Zoom or Gmeet to understand your use case and provide you with the right configuration to execute your test cases on Hyperexecute. Our support engineers are always available over slack, mail and calls to ensure that we provide you with the right kind of support and set you up for a win. 

Please feel free to give us a shout if you have any questions or require any assistance.


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
       HyperExecute Integration With Katalon
      </span>
    </li>
  </ul>
</nav>