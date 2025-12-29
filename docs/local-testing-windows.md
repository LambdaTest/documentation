---
id: local-testing-windows
title: Local Testing For Windows
hide_title: true
sidebar_label: Local Testing For Windows
description: This documentation will help you perform Localhost testing on Windows OS via TestMu AI tunnel .Test private server URLs, locally hosted web-apps and websites on 3000+ real browsers on secure TestMu AI cloud infrastructure.
keywords:
  - local testing
  - TestMu AI tunnel Features
  - local testing for windows
  - push issues to clubhouse
  - local cross browser testing
url: https://www.lambdatest.com/support/docs/local-testing-windows/
site_name: LambdaTest
slug: local-testing-windows/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com/"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Local Testing Windows",
          "item": "https://www.lambdatest.com/support/docs/local-testing-for-windows/"
        }]
      })
    }}
></script>

# Local Testing For Windows

***

LambdaTest tunnel feature allows you to test your private server URLs or locally hosted web-apps or websites on 3000+ real browsers through LambdaTest. You can test plain HTML, CSS, PHP, Python, or other similar web files saved on your local system, over combinations of operating systems, browsers, and screen resolutions that are available on LambdaTest. You can leverage the new LambdaTest tunnel binary for corporate firewalls and proxy settings without any restrictions. LambdaTest tunnel follows various protocols such as Web Socket, HTTPS, SSH(Secure Shell), etc. to help you establish a secure and unique tunnel connection through corporate firewalls between your system and LambdaTest cloud servers.

Feel more confident than ever, before deploying any UI specific change into Production. Test your development thoroughly with LambdaTest tunnel and experience the flexibility to securely test your website on 3000+ browsers and their assorted versions, running on real OS code for cross-platform and [cross browser compatibility](https://www.lambdatest.com/feature), even before it gets deployed over the Production environment.

> Here is all you need to know about LambdaTest tunnel from configuring a secure connection to executing test cases on your locally hosted web-apps.

You can download the binary file responsible for establishing a tunnel connection between your local device and our testing cloud by clicking on the downloadable link below.

| [DOWNLOAD LambdaTest tunnel ZIP FOR WINDOWS 64 BIT](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip) |
|--------------------------------------------------------------------------------------------------------------------------|

This file is supported for the below listed windows:

* Windows 11
* Windows 10
* Windows 8.1
* Windows 8
* Windows 7
* Windows XP

## Configuring Connection With LambdaTest tunnel
***
**Step 1**:  Click the button **‘Configure Tunnel’**. Download the binary zip file by clicking the **‘Download Link’**. Press the **‘Copy’**  button in the form that opens up to copy the complete string to your system’s clipboard.

<img loading="lazy" src={require('../assets/images/local-testing-windows/local-windows-1.webp').default} alt="tunnel configuration for localhost testing on winws" width="1346" height="622" className="doc_img"/>

>**What is this zip file for?**   
This zip file contains the tunnel binary which will help in establishing a secure tunnel connection to LambdaTest cloud servers so you could test your locally hosted web pages over thousands of browsers and operating systems for desktop and mobile using LambdaTest.

**Step 2**:  Extract the downloaded zip file. Go to **‘Command Prompt’**  and route your pointer to the same directory where you extracted the zip file.

<img loading="lazy" src={require('../assets/images/local-testing-windows/local-windows-2.webp').default} alt="extracting binary zip file" width="988" height="487" className="doc_img"/>

**Step 3**:  Paste the copied string to execute the downloaded binary file. The command will look like:
```
LT --user {user's login email} --key {user's access key} --tunnelName {user's tunnel name}
```

So for example, if your user login email is example@lambdatest.com, user key is 123456789abcdefghijklmnopqrstuv and tunnel name is LambdaTest, the command would be:

```
LT --user example@lambdatest.com --key 123456789abcdefghijklmnopqrstuv --tunnelName LambdaTest
```
<img loading="lazy" src={require('../assets/images/local-testing-windows/local-windows-3.webp').default} alt="Access key for tunnel activation" width="1179" height="472" className="doc_img"/>

>**Note:**  After you execute the command, Windows may ask for user permission. Make sure you have administrator access to **‘Allow’** the file to run successfully.   
In a few seconds, after you execute the command, a tunnel connection will be established. You will receive a message inside your command prompt mentioning **‘You can start testing now’**.

<img loading="lazy" src={require('../assets/images/local-testing-windows/tunnel_launched.webp').default} alt="start localhost testing on Windows" width="970" height="313"  className="doc_img"/>

## Testing Locally Hosted Web Pages Using LambdaTest tunnel
***
**Step 1**:  Make sure you turn on XAMPP or any other web hosting tool to provide you an Apache test environment. If you are using XAMPP, Press the **‘Start’**  button for **Apache**  under **‘Actions’**. If you also want to test the back-end functionality for your website then Press the **‘Start’**  button for **‘MySQL’**  as well.

<img loading="lazy" src={require('../assets/images/local-testing-windows/local-windows-5.webp').default} alt="Xampp Control Panel" width="970" height="313" className="doc_img"/>

**Step 2**:  Navigate to **‘Real Time Testing’**  menu. Enter the localhost URL you want to test in the text field provided and Select the tunnel via which you want to run the test.

<img loading="lazy" src={require('../assets/images/local-testing-windows/local-windows-6.webp').default} alt="realtime localhost testing" width="1355" height="613" className="doc_img"/>

**Step 3**:  Select the test configuration of your choice. You can select from various major browsers & their assorted versions to perform a test session. After selecting the configuration, click on the **‘Start’**  button.

<img loading="lazy" src={require('../assets/images/local-testing-windows/local-windows-7.webp').default} alt="local testing configuration" width="1355" height="613" className="doc_img"/>

Once you press the **‘Start’**  button, your test will start and you will be navigated to your localhost URL.

<img loading="lazy" src={require('../assets/images/local-testing-windows/local-windows-8.webp').default} alt="Starting Xampp" width="1099" height="519" className="doc_img"/>

>**NOTE:**  If `http://localhost:{port}`  does not work then try with either `http://localhost.lambdatest.com:{port}`  or your machine’s private IP `http://{IP}:{port}`.

## Testing Locally Hosted Web Pages On Android
***
**Step 1:**  Go to **‘Real Time Test’**  from the left navigation menu and click on the **‘Mobile’**  icon. This will guide you to a screen where you can perform cross browser testing for your website on mobile OS. Select the icon for **‘Android’**  and choose from a variety of Android mobile devices to start testing.

<img loading="lazy" src={require('../assets/images/local-testing-windows/local-windows-9.webp').default} alt="Localhost Testing on Android" width="1347" height="623" className="doc_img"/>

**Step 2:**  After choosing your configurations, click on the **‘Start’**  button to launch the VM (Virtual Machine). You will be able to access you locally hosted web pages.

<img loading="lazy" src={require('../assets/images/local-testing-windows/local-windows-10.webp').default} alt="Launching VM for localhost testing" width="585" height="604" className="doc_img"/>

## Testing Locally Hosted Web Pages On iOS
***
**Step 1:**  Go to **‘Real Time Test’**  from the left navigation menu and click on the **‘Mobile’**  icon. This will guide you to a screen where you can perform cross browser testing for your website on mobile OS. Select the icon for **‘Apple’**  and choose from a variety of iOS devices to start testing.

<img loading="lazy" src={require('../assets/images/local-testing-windows/local-windows-11.webp').default} alt="Local testing on iOS" width="1347" height="617" className="doc_img"/>

**Step 2:**  After choosing your configurations, press the **‘Start’**  button to launch the VM. You will be able to access you locally hosted web pages.

<img loading="lazy" src={require('../assets/images/local-testing-windows/local-windows-12.webp').default} alt="Configuration for localhost testing on iOS" width="1095" height="626" className="doc_img"/>

>**NOTE:** If `http://localhost:{port}`  does not work then try with either `http://localhost.lambdatest.com:{port}`  or your machine’s private IP `http://{IP}:{port}`.

>Notice how the font changed from Android to iOS or rather from Google Chrome to Mozilla Firefox, in the above images of local testing on Android & iOS. That right there is a cross browser compatibility issue!

## Testing Local Folder Files Using LambdaTest tunnel
***
>**Note:**  If you were already running a test session through tunnel then you will have to terminate the existing tunnel connection in cmd before you re-establish it for a new directory.

**Step 1:**  Navigate to **‘Configure Tunnel’**  button.

<img loading="lazy" src={require('../assets/images/local-testing-windows/local-windows-13.webp').default} alt="Testing Local folder on LambdaTest" width="1342" height="608" className="doc_img"/>

**Step 2:**  Click on **‘Folder’**  button and copy the string on your system’s clipboard.

<img loading="lazy" src={require('../assets/images/local-testing-windows/local-windows-14.webp').default} alt="access key to test locally hosted website" width="1343" height="559" className="doc_img"/>

**Step 3:**  After you establish a tunnel connection, go to LambdaTest and navigate to **Real Time test**. Enter `local-folder.lambdatest.com`  in URL bar. The list of all files/folders present under the selected directory will be displayed in the browser. Select the test configuration(OS, Browser and screen resolution) of your choice. Click on the **‘Start’**  button.

<img loading="lazy" src={require('../assets/images/local-testing-windows/local-windows-15.webp').default} alt="start local website testing" width="1365" height="595" className="doc_img"/>

Once the VM (Virtual Machine) is launched, you will be able to access your local folders on a testing environment hosted by our cloud servers.

<img loading="lazy" src={require('../assets/images/local-testing-windows/folder.webp').default} alt="Access local folder for testing" width="1123" height="608" className="doc_img"/>

>**Note:**  Similarly, if you want to run any file in the specified directory, you need to give URL as `local-folder.lambdatest.com/filename`.   
For example: If you have a file `'test.html'`  in your folder. You need to give URL as `local-folder.lambdatest.com/test.html`  to run the same file.   
In this way, you can run any HTML, PHP, Python or similar web files present in any folder of your system, directly in LambdaTest browser.

## Terminating the LambdaTest tunnel Connection

A secure tunnel connection is maintained unless you explicitly disconnect it. You can disconnect the tunnel in following ways:

**Option 1:**  You can kill the process by using **‘Ctrl+C’**  in Windows command prompt.
You will receive the below highlighted message **‘Tunnel stopped successfully’**  indicating the termination on Tunnel Connection.

<img loading="lazy" src={require('../assets/images/local-testing-windows/tunnel_stopped.webp').default} alt="Stopping tunnel" width="977" height="292" className="doc_img"/>

**Option 2:**  You can also disconnect it using the option provided in the user interface. In the top right corner of LambdaTest interface, you will find a tunnel icon. Click on this icon and then click **x**  to terminate the LambdaTest tunnel.

<img loading="lazy" src={require('../assets/images/local-testing-windows/close tunnel.webp').default} alt="disconnecting LambdaTest tunnel" width="1349" height="622" className="doc_img"/> 

## Geolocation Testing through VPN with LambdaTest tunnel
***
Test the performance of your web-app through different [geographic locations](https://www.lambdatest.com/blog/geolocation-testing-through-vpn-on-lambdatest/) using VPN in LambdaTest tunnel. Make sure your website delivers well to your targeted audience from all around the globe.

>**How can Geolocation Testing help you?**    
**1. SERPs – Search Engine Result Pages:**  For a website that is targeting an audience from different parts of the globe. It is always recommended to have a constant check on SERPs to address your website according to the respective trends of different geographies. This is extremely necessary for clothing brands. Traditional wearing differs from one country to another.   
**2. GDPR compliance – General Data Protection Rule Compliance:**  Payment Gateways may differ from one geography to another due to different GDPR compliance for different geographies.   
**3. Billing:**  Your billing page should support currency conversion with respect to the IP. So if a user from the US would show up at your website then he/she should be billed in USD, similarly if one is visiting from France then the bill should be presented in Euros.   
**4. Google Ads:**  They also differ from one geographic region to another. You need to check through IPs of different geolocations regarding which ads are visible and in what manner?    
**5. Bandwidth:**  4G may or may not be available to every one of your targeted geography and even if it is available. The available bandwidth will usually be different. Meaning some countries would provide a faster download speed in 4G as compared to others. So you need to be mindful of the content optimization according to your targeted geolocations. Testing from IPs belonging to different geolocations will help you get a realistic view of page loading speed. A faster page loading will not only help in pleasing your customers, but it would also help in ranking higher in SERPs.   
**How can you test from an IP of a different Geolocation?**    
This is where a VPN comes to rescue! VPN – Virtual Private Network – It helps in expanding a private network through a public network. Initially, VPNs were introduced and used among large enterprises, defense organizations, banking companies, etc. to keep their data secure. A VPN created a pathway through which people working in large organizations could access the data they want, remotely, in a secure manner. The data is securely transmitted through the process of Cryptography. In Cryptography, the data is encrypted from the sender’s end and then it gets decrypted with the help of a unique key on the receiver’s end.   
Times have changed and with it the popularity of VPN too! These days VPNs are so widely available that they are used by almost every one of us. Some use it to surf the internet without worrying about the restrictions applied to their GeoIP. Some use it for the purpose of maintaining anonymity. Some use it without even realizing the meaning of a VPN.   
Remember though, not all VPNs will work in the same manner. Few may provide you considerably more geolocations to choose from as compared to others. Few may provide less number of geolocations but more number of dynamic GeoIPs with respect to others. There are many more parameters related to the comparison.

Use the following arguments in your command line.

|ARGUMENTS|EXAMPLE|DESCRIPTION|
| --- | --- | --- |
|`--key`|123asd123|Helps Lambdatest to map a tunnel connection with the right user.|
|`--proxy-host`|abc.wonderproxy.com|Full hostname for the proxy you’d like to use.|
|`--proxy-port`|12345|The port declared by you for fetching the proxy.|
|`--proxy-user`|abcdefg|WonderProxy username of the user.|
|`--proxy-pass`|hijklmnop|WonderProxy password of the user.|

Here is how the format of full command would look like:

```
LT --user {user login email} --key {user key} --proxy-host {full proxy hostname} --proxy-user {proxy username} --proxy-pass {proxy password} --proxy-port {port number}
```

Example of full command:
```
LT --user example@lambdatest.com --key 123asd123 --proxy-host abc.wonderproxy.com --proxy-user abcdefg --proxy-pass hijklmnop --proxy-port 12345
```
## Command References
***
Following is the list of command arguments which can be used as modifiers while executing the binary file:

|COMMAND|DESCRIPTION|
| --- | --- |
|`--user`|Registered email ID of the user.|
|`--key`|User access key for the user.|
|`--tunnelName`|(optional) Name of the tunnel.|
|`--port`|(optional) Local port to connect tunnel.|
|`--proxy-host`|Full hostname for the proxy you’d like to use.|
|`--proxy-port`|The port declared by you for fetching the proxy.|
|`--proxy-user`|WonderProxy username of the user.|
|`--proxy-pass`|WonderProxy password of the user.|

## Regenerating Your Access Key Or Access Token
***
>**What is an Access Key?**   
>An Access Key is a unique string used for the identification of your account.    
As we offer a cloud-based platform to host a testing ecosystem to everyone around the globe. Access key plays a crucial role in authenticating your LambdaTest account while mapping a secure tunnel connection for hosting your locally stored web pages online. They work as your IDs when you gain access to our cloud servers.   
If you ever misplace your Access key into the hands of someone you don’t trust. You can always regenerate it by navigating to your LambdaTest Profile > Account Settings > [Password & Security](https://accounts.lambdatest.com/security/username-accesskey).

You can find your Access Key while performing any type of testing. Go to **Credentials** in the left sidebar and click the copy icon next to Access Key to retrieve it.

<img loading="lazy" src={require('../assets/images/local-testing-windows/creds.webp').default} alt="Finding access key" width="1344" height="617" className="doc_img"/> 

For instance, if you go to **‘Real Time Test’**, you will observe a button that says **‘Configure Tunnel’**  on the top-right area of the page. Click on that button and a form would open up through it, providing you with a string containing your access key. You will find the access key in the area underlined below.

<img loading="lazy" src={require('../assets/images/local-testing-windows/local-windows-20.webp').default} alt="REaltime Test for locally hosted webpages" width="1344" height="617" className="doc_img"/>

You can also find your **‘Access Key’**  by going to **‘Settings’**  in the left navigation menu and routing to **‘Profile’**. Also, you can regenerate your **‘Access Key’**  by clicking on tilt arrow button.

<img loading="lazy" src={require('../assets/images/local-testing-windows/local-windows-21.webp').default} alt="Access key in profile" width="1348" height="618" className="doc_img"/>

**LambdaTest tunnel Update:**  Earlier, when our LambdaTest tunnel binary was updated with a new version, we requested our users to re-download the binary file for uninterrupted [cross browser testing](https://www.lambdatest.com) experience of locally hosted web pages. Not anymore! We have now updated the LambdaTest tunnel binary in a way that it auto-updates to the latest version every time you execute the LambdaTest tunnel from cmd/terminal.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
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
        Local Testing Windows
      </span>
    </li>
  </ul>
</nav>
