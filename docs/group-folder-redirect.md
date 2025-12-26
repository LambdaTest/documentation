---
id: group-folder-redirects
title: Group Folder Redirect for iOS Apps in Appium Tests
sidebar_label: Group Folder Redirect
description: Learn how to enable Group Folder Redirect for iOS apps during Appium testing on LambdaTest Real Device Cloud.
keywords:
  - lambdatest automation
  - ios app automation
  - group folder redirect
  - appium ios file system testing
  - private app container automation
url: https://www.lambdatest.com/support/docs/group-folder-redirects/
site_name: LambdaTest
slug: group-folder-redirects/
---

import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RealDeviceTag from '../src/component/realDevice';

# Group Folder Redirect for iOS Apps
<RealDeviceTag value="Real Device" /> 
LambdaTest now supports **Group Folder Redirect** for iOS apps during automation testing with Appium.  
This feature ensures your app uses its **private container directory** instead of the **shared app group container**, which becomes inaccessible after **app resigning** on Real Devices.

---

 ## Use Cases 

- Ensure your app maintains **file system access** after being re-signed on Real Devices.  
- Prevent issues when your app relies on the **shared App Group container**, which becomes inaccessible after resigning.  
- Guarantee consistent **storage and retrieval of files** by using the app’s private container.  

---

## Steps to Enable Group Folder Redirect

### 1. Upload Your Application
- Upload your iOS app to LambdaTest following standard procedures.  
- Refer to the [**Upload your Application**](/support/docs/application-setup-via-api/#upload-your-application) documentation for detailed instructions.  
- Note the **App ID** returned after uploading — you will use this in your automation scripts.

---

### 2. Configure Desired Capabilities
Include the `groupFolderRedirectEnabled` capability in your Appium desired capabilities and set it to `True`.  

<Tabs>
  <TabItem value="ios" label="iOS">
    <CodeBlock className="language-java">
{`desired_caps = {
    "deviceName":"iPhone 16",
    "platformName":"iOS",
    "platformVersion":"18",
    "isRealMobile": True,
    "app":"YOUR_APP_URL",
    "build":"Sample Build",
    "name":"Sample Test",
    #highlight-next-line
    "groupFolderRedirectEnabled": True
}`}
    </CodeBlock>
  </TabItem>
</Tabs>

---

### 3. Run Your Automation Test
Launch your Appium test, the app will automatically use its private container for all file operations without any code changes.

---

:::info
- LambdaTest launches an **instrumented version** of your app with **Group Folder Redirect** support.  
- All file system operations that previously relied on the App Group container now use the **private container**.  
- Your tests remain compatible and functional, even after app resigning.
:::
