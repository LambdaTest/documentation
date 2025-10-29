---
id: local-testing-for-windows
title: Legacy Binary For Windows
sidebar_label: Legacy Binary For Windows
description: LambdaTest Tunnel feature allows you to test your private server URLs or locally hosted web-apps or websites through LambdaTest cloud servers.
keywords:
  - local app testing
  - lambdatest local testing
  - lambdatest local tunnel
  - lambdatest Tunnel
  - local app testing for windows
url: https://www.lambdatest.com/support/docs/local-testing-for-windows/
site_name: LambdaTest
slug: local-testing-for-windows/
---
***
LambdaTest Tunnel feature allows you to test your private server URLs or locally hosted web-apps or websites through LambdaTest cloud servers. Through our TCP with TLS 1.2 secure connection tunneling features, you can also test plain HTML, CSS, PHP, Python or other similar web files saved on your local system, on combinations of operating systems, browsers, and screen resolutions that are available on LambdaTest.

Feel more confident than ever, before deploying any UI specific change into Production. Test your development thoroughly with TCP with TLS 1.2 secure connection network protocol hosted by LambdaTest Tunnel. Experience the flexibility to securely test your website on 3000+ browsers and their assorted versions, running on real OS code for cross platform and [cross browser compatibility](https://www.lambdatest.com/feature), even before it gets deployed over production environment.

> **Note**: From November 2, 2020 onwards, we have deprecated our existing tunnel binary. In order to setup the new version, you can refer to [new tunnel binary for Windows](/docs/local-testing-windows/).

You can download the binary file responsible for establishing a TCP with TLS 1.2 secure connection between your local device and our testing cloud by clicking on the downloadable link below.

<div className="download_btn mb-10">
<a href="https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip">Download LambdaTest Tunnel For Windows</a>
</div>


This file is supported for the below listed windows:

* Windows 10
* Windows 8.1
* Windows 8
* Windows 7
* Windows XP

## Configuring TCP with TLS 1.2 secure connection with LambdaTest Tunnel 
* * *
**Step 1**: Click the button **"Configure Tunnel"**. Download the binary zip file by clicking the **"Download Link"**. Also, hit the ‘Copy’ button in the form that opens up to copy the complete string to your system’s clipboard.

<img loading="lazy" src={require('../assets/images/local-testing-for-windows/For-windows-1.webp').default} alt="Image"  className="doc_img"/>

**What is this zip file for?**

This zip file will help in establishing a secure connection to LambdaTest cloud servers so you could test your locally hosted web pages in a TCP with TLS 1.2 secure connection environment.

**Step 2**: Extract the downloaded zip file. Go to **cmd(Command Prompt)** and route your pointer to the same directory where you extracted the zip file.

<img loading="lazy" src={require('../assets/images/local-testing-for-windows/For-windows-2.webp').default} alt="Image"  className="doc_img"/>

**Step 3**: Paste the copied string to execute the downloaded binary file. The command will look like:

`LT --user {user's login email} --key {user's access key} --cui`

So for example, if your user login email is example@lambdatest.com and your user key is 123asd123, the command would be:

`LT --user example@lambdatest.com --key 123asd123 --cui`

<img loading="lazy" src={require('../assets/images/local-testing-for-windows/For-windows-3.webp').default} alt="Image"  className="doc_img"/>

---
**Note:** After you execute the command, Windows may ask for user permission. Make sure you have administrator access to allow the file to run successfully.

In a few seconds, after you execute the command, a TCP with TLS 1.2 secure connection will be established. You will receive a message inside your command prompt mentioning "**Secure connection established, you may start your tests now**".

<img loading="lazy" src={require('../assets/images/local-testing-for-windows/For-windows-4.webp').default} alt="Image"  className="doc_img"/>

---

## Testing locally hosted web pages using LambdaTest Tunnel
* * *
**Step 1**: Navigate to **‘Real Time Testing’** menu and enter the localhost URL you want to test in the text field provided to enter URL.

**Step 2**: Select the tunnel via which you want to run the test.

<img loading="lazy" src={require('../assets/images/local-testing-for-windows/For-windows-5.webp').default} alt="Image"  className="doc_img"/>

**Step 3**: Select the test configuration of your choice. You can select from various major browsers & their assorted versions to perform a test session. You may also choose from a variety of Operating System & screen resolutions to check the RWD(Responsive Web Design) of the website when rendering on different resolutions.

<img loading="lazy" src={require('../assets/images/local-testing-for-windows/For-windows-6.webp').default} alt="Image"  className="doc_img"/>

**Step 4**: Make sure you turn on XAMPP or any other web hosting tool to provide you an Apache test environment. If you are using XAMPP, hit **‘Start’** for Apache under **‘Actions’**. If you also want to test the back-end functionality for your website then make sure you hit the ‘Start’ button for MySQL as well.

<img loading="lazy" src={require('../assets/images/local-testing-for-windows/For-windows-7.webp').default} alt="Image"  className="doc_img"/>

**Step 5**: Once you are done selecting your configurations and hosting a web server. Hit the ‘**Start**’ button in **Real Time Test**. Your test will start and you will be navigated to your localhost URL.

<img loading="lazy" src={require('../assets/images/local-testing-for-windows/start-localhost-testing-using-lambda-tunnel.webp').default} alt="Image"  className="doc_img"/>

> **IMPORTANT NOTE**: Some browsers doesn’t support automatic resolution of the URL string "localhost". Therefore if you test on URLs like `http://localhost/` or "`http://localhost:8080`" etc, you would get an error in these browsers. A possible solution is to use "localhost.lambdatest.com" or replace the string "localhost" with machine IP address. For example if you wanted to test `http://localhost/dashboard` or, and your machine IP is 192.168.2.6 you can instead test on "`http://192.168.2.6/dashboard`".

## Testing Local Folder Files Using LambdaTest Tunnel
* * *
>**Note:** If you were already running a test session through tunnel then you will have to terminate the existing TCP with TLS 1.2 secure connection in cmd before you re-establish it for a new directory.

**Step 1:** If want to test the local folders and files stored in your system, pass an additional argument ‘dir’ with the directory/folder name in double quotes as you run the command on Windows cmd to establish a TCP with TLS 1.2 secure connection with LambdaTest Tunnel.

**Sample format:**

`LT --user {user login email} --key {user key} --dir {"directory/folder name"}`

**Example:** Let us consider your user login email to be "example@lambdatest.com" with your user key as ‘123asd123’ and you want to test files in the ‘Downloads’ folder, then the command would be:

`LT --user example@lambdatest.com --key 123asd123 --dir "/home/lambda/Downloads"`

**Step 2:** After you establish a TCP with TLS 1.2 secure connection, go to LambdaTest and navigate to Real Time test. Enter "local-folder.lambdatest.com" in URL bar. The list of all files/folders present under the selected directory will be displayed in the browser. Select the test configuration(OS, Browser and screen resolution) of your choice.

<img loading="lazy" src={require('../assets/images/local-testing-for-windows/For-windows-9.webp').default} alt="Image"  className="doc_img"/>

**Step 3:** Hit the **‘Start’** button. Once the VM(Virtual Machine) is launched, you will be able to access your local folders on a testing environment hosted by our cloud servers.

<img loading="lazy" src={require('../assets/images/local-testing-for-windows/access-local-folders-on-testing-environment.webp').default} alt="Image"  className="doc_img"/>

**Note:** Similarly, if you want to run any file in the specified directory, you need to give URL as local-folder.lambdatest.com/filename.

**For example:** If you have a file ‘test.html’ in your folder. You need to give URL as "local-folder.lambdatest.com/test.html" to run the same file.

In this way, you can run any HTML, PHP, Python or similar web files present in any folder of your system, directly in LambdaTest browser.

#### Testing Locally Hosted Web Pages On Android
* * *
**Step 1:** Go to "**Real Time Test**" from the left navigation menu and click on the **mobile** icon. This will guide you to a screen where you can perform cross browser testing for your website on mobile OS. Select the icon for Android and choose from a variety of **Android** mobile devices to start testing.

<img loading="lazy" src={require('../assets/images/local-testing-for-windows/For-windows-11.webp').default} alt="Image"  className="doc_img"/>

**Step 2:** After choosing your configurations, hit the ‘Start’ button to launch the VM. You will be able to access you locally hosted web pages.

<img loading="lazy" src={require('../assets/images/local-testing-for-windows/start-localhost-testing-ios.webp').default} alt="Image"  className="doc_img"/>

#### Testing Locally Hosted Web Pages On iOS
* * *

**Step 1:** Go to **"Real Time Test"** from the left navigation menu and click on the mobile icon. This will guide you to a screen where you can perform cross browser testing for your website on mobile OS. Select the icon for Apple and choose from a variety of iOS devices to start testing.

**Note:** To test your locally hosted web pages on iOS, you need to mention "`http://localhost.lambdatest.com`" or simply mention your machine IP as the URL in the below-highlighted box. For example if you wanted to test "`http://localhost/dashboard`" or "`http://localhost/dashboard:8080`", and your machine IP is 192.168.2.6 you can instead test on "`http://localhost.lambdatest.com/dashboard`" or "`http://192.168.2.6/dashboard`".

<img loading="lazy" src={require('../assets/images/local-testing-for-windows/For-windows-13.webp').default} alt="Image"  className="doc_img"/>

**Step 2:** After choosing your configurations, hit the ‘**Start**’ button to launch the VM. You will be able to access you locally hosted web pages.

<img loading="lazy" src={require('../assets/images/local-testing-for-windows/start-ios-localhost-testing.webp').default} alt="Image"  className="doc_img"/>

_Notice how the font changed from Android to iOS or rather from Google Chrome to Mozilla Firefox, in the above images of local testing on Android & iOS. That right there is a cross browser compatibility issue!_

#### Terminating the TCP with TLS 1.2 secure connection
* * *
A secure tunnel connection is maintained unless you explicitly disconnect it. You can disconnect the tunnel in following ways:

**Option 1:** You can kill the process by using Ctrl+C in Windows command prompt.
You will receive the below highlighted messages indicating the termination on TCP with TLS 1.2 secure connection.

<img loading="lazy" src={require('../assets/images/local-testing-for-windows/For-windows-15.webp').default} alt="Image"  className="doc_img"/>

**Option 2:** You can also disconnect it using the option provided in the user interface. In the top right corner of LambdaTest interface, you will find a button that's says **"Tunnel active"**. This button displays the number of active tunnels. As you click on it, you will find your tunnel name along with an 'x'. Hit the 'x' to terminate the TCP with TLS 1.2 secure connection.

<img loading="lazy" src={require('../assets/images/local-testing-for-windows/For-windows-16.webp').default} alt="Image"  className="doc_img"/>

#### Geolocation Testing through VPN with LambdaTest Tunnel
* * *
Test the performance of your web-app through different **geographic locations** using VPN in LambdaTest Tunnel. Make sure your website delivers well to your targeted audience from all around the globe.

**How can Geolocation Testing help you?**

1. **SERPs:** – Search Engine Result Pages: For a website that is targeting audience from different parts of globes. It is always recommended to have a constant check on SERPs to address you website according to the respective trends of different geographies. This is extremely necessary for clothing brands. Traditional wearing differs from one country to another.

2. **GDPR compliance:** – General Data Protection Rule Compliance: Payment Gateways may differ from one geography to another due to different GDPR compliance for different geographies.

3. **Billing:** Your billing page should support currency conversion with respect to the IP. So if a user from US would show up at your website then he/she should be billed in USD, similarly if one is visiting from France then the bill should be presented in Euros.

4. **Google Ads:** They also differ from one geographic region to another. You need to check through IPs of different geolocations regarding which ads are visible and in what manner?

5. **Bandwidth:** 4G may or may not be available to every one of your targeted geography and even if it is available. The available bandwidth will usually be different. Meaning some countries would provide a faster download speed in 4G as compared to others. So you need to be mindful about the content optimization according to your targeted geolocations. Testing from IPs belonging to different geolocations will help you get a realistic view for page loading speed. A faster page loading will not only help in pleasing your customers, it would also help in ranking higher in SERPs.

**How can you test from an IP of a different Geolocation?**

This is where a VPN comes to rescue! VPN – Virtual Private Network – It helps in expanding a private network through a public network. Initially VPNs were introduced and used among large enterprises, defense organization, banking companies etc. to keep their data secure. A VPN created a pathway through which people working in large organizations could access the data they want, remotely, in a secured manner. The data is securely transmitted through the process of Cryptography. In Cryptography, the data is encrypted from the sender’s end and then it gets decrypted with the help of a unique key on the receivers end.

Times have changed and with it the popularity of VPN too! These days VPNs are so widely available that they are used by almost everyone of us. Some use it to surf the internet without worrying about the restrictions applied for their GeoIP. Some use it for the purpose of maintaining anonymity. Some use it without even realizing the meaning of a VPN.

Remember though, not all VPNs will work in the same manner. Few may provide you considerably more geolocations to choose from as compared to others. Few may provide less number of geolocations but more number of dynamic GeoIPs with respect to others. There are many more parameters related to comparison.

Use the following arguments in your command line.

| Argument | Example | Description |
|----------|---------|-------------|
| --key | 123asd123 | Helps Lambdatest to map a TCP with TLS 1.2 secure connection with the right user. |
| --proxy-host | abc.wonderproxy.com | Full hostname for the proxy you’d like to use. |
| --proxy-port | 12345 | The port declared by you for fetching the proxy. |
| --proxy-user | abcdefg | WonderProxy username of the user. |
| --proxy-pass | hijklmnop | WonderProxy password of the user. |

Here is how the format of full command would look like:

`<b>LT --user {user login email} --key {user key} --proxy-host {full proxy hostname} --proxy-user {proxy username} -proxy-pass {proxy password} -proxy-port {port number}</b>`

Example of full command:

`<b>LT --user example@lambdatest.com --key 123asd123 --proxy-host abc.wonderproxy.com --proxy-user abcdefg --proxy-pass hijklmnop --proxy-port 12345</b>`

#### Command References
Following is the list of command arguments which can be used as modifiers while executing the binary file:

| Command | Description |
|----------|-------------|
| --user | Registered email ID of the user. |
| --key | User access key for the user. |
| --tunnelName | (optional) Name of the tunnel. |
| --port | (optional) Local port to connect tunnel. |
| --proxy-host | Full hostname for the proxy you’d like to use. |
| --proxy-port | The port declared by you for fetching the proxy. |
| --proxy-user | WonderProxy username of the user. |
| --proxy-pass | WonderProxy password of the user. |

## Changing Your Access Key

**What is an Access Key?**

An Access Key is a unique string used for the identification of your account.

As we offer a cloud-based platform to host a testing ecosystem to everyone around the globe. Access key plays a crucial role in mapping a TCP with TLS 1.2 secure connection environment for hosting your locally stored web pages online. They work as your IDs when you gain access to our cloud servers.

If you ever misplace your Access key into the hands of someone you don’t trust. You can always redefine it by clicking the button for "**Regenerate Access Key**".

**Access Key** is pivotal for establishing a TCP with TLS 1.2 secure connection through LambdaTest Tunnel to test your locally hosted web-pages or web-apps.

Find your Access Key while performing any type of testing, from the left **navigation menu**. You will find a button that says "**Configure Tunnel**". Click on that button & a string containing your access key will be presented.

<img loading="lazy" src={require('../assets/images/local-testing-for-windows/For-windows-17.webp').default} alt="Image"  className="doc_img"/>

For instance, if you go to **Real-Time Test**, you will observe a button that says "**Configure Tunnel**" on the top-right area of the page. Click on that button and a form would open up through it, providing you with a string containing your access key. You will find the access key in the area underlined below.

<img loading="lazy" src={require('../assets/images/local-testing-for-windows/For-windows-18.webp').default} alt="Image"  className="doc_img"/>

You can also find your Access Key by going to ‘**Settings**’ in the left navigation menu and routing to ‘**Profile**’.

<img loading="lazy" src={require('../assets/images/local-testing-for-windows/lambda-sshtunnel-access-key.webp').default} alt="Image"  className="doc_img"/>

**LambdaTest Tunnel Update:** Earlier, when our LambdaTest Tunnel binary was updated with a new version, we requested our users to re-download the binary file for uninterrupted cross browser testing experience of locally hosted web pages. Not anymore! We have now updated the LambdaTest Tunnel binary in a way that it auto-updates to the latest version every time you execute the LambdaTest Tunnel from cmd/terminal.
