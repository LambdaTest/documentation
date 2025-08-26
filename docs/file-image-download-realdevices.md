---
id: file-image-download-realdevices
title: File & Image Download on Real Devices
sidebar_label: File & Image Download
description: Learn how to manually test file and image download workflows on real Android and iOS devices using LambdaTest, including configuration steps, workflows, and supported platforms.
keywords:
  - File Download
  - Image Download
  - iOS
  - Android
  - Real Devices
  - testing
slug: file-image-download-realdevices/
site_name: LambdaTest
url: https://www.lambdatest.com/support/docs/file-image-download-realdevices/
---
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# File and Image Download on Real Devices

The **File & Image Download** feature allows testers to validate workflows where apps generate or save files/images directly on real Android and iOS devices. This is useful for scenarios like downloading reports, saving invoices, validating exported media, or checking document workflows during live testing.  

By using this feature on **LambdaTest Real Devices**, you can securely download files from a device to your local machine for verification, ensuring end-to-end coverage of file-handling scenarios.  

---

## Use Cases

- **Invoice & Report Validation**: Test apps that generate files such as invoices, reports, or receipts.  
- **Media Export**: Validate workflows where images or videos are saved to device storage.  
- **Document Downloads**: Confirm that app-triggered downloads work correctly on real devices.  
- **Cross-Platform Parity**: Ensure file handling works consistently across Android and iOS.  

---


## Supported Devices

| Platform | OS Version |
|----------|------------|
| Android  | 9 and above |
| iOS      | 13 and above | 

---

## Configuring File & Image Download for Manual Testing

### Step 1: Start a Manual Session
Log in to [**LambdaTest App Live**](https://accounts.lambdatest.com/dashboard), upload your app, and select a real device (Android or iOS).  

### Step 2: Trigger File or Image Generation
Inside your app, perform any workflow that generates, saves, or downloads a file.This could be actions such as:  
- Downloading a **report, invoice, or receipt**  
- Saving an **image or screenshot**  
- Exporting **CSV/PDF files**  
- Downloading any other generated file from your app’s workflow  

Once the file generation action is completed, the files will automatically be stored in the device’s default locations.  

:::info 
- On **Android (OS 9+)**: Files are stored in the **Downloads** folder.  
- On **iOS (13+)**: Files are stored in the **Chrome**/**DCIM** folders.  
:::

---

### Step 3: Access Files & Media
From the **right-hand session toolbar**, click the **Files & Media** icon to open the file management panel.  

Here you will see two tabs:  
- **Upload** – Allows you to upload files from your local system into the device.  
- **Download** – Displays all files available on the real device (from supported folders).  

This panel provides a clear overview of files and media available for interaction during your test.
![File Download](../assets/images/real-device-app-testing/File-Download.png)    

### Step 4: Download Files
Once files are Downloaded, simply click the **Download Files** button.  

This action automatically retrieves all files from the device’s supported folders and bundles them into a single `.zip` archive. The `.zip` is then saved to your local system, ensuring you can access and validate every file generated during the test session.  


### Step 5: Validate Download
Once downloaded, open the `.zip` on your system and verify file contents against your test requirements.  

:::tip
- The **combined max file size** per session download is **100 MB**.  
:::

---
