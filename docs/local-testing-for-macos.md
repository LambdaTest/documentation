---
id: local-testing-for-macos
title: Legacy Binary For macOS
sidebar_label: Legacy Binary For macOS
description: This document will help you modify your open file limit temporarily or permanently while using a proxy with TestMu AI for seamless cross browser testing.
keywords:
  - proxy settings
  - set open file limit
  - open file limit testmu ai
  - testmu ai proxy settings
  - testmu ai proxy profile
url: https://www.testmuai.com/support/docs/local-testing-for-macos/
site_name: TestMu AI
slug: local-testing-for-macos/
canonical: https://www.testmuai.com/support/docs/local-testing-for-macos/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

***
<BrandName /> tunnel feature allows you to test your private server URLs or locally hosted web-apps or websites through <BrandName /> cloud servers. Through our TCP with TLS 1.2 secure connection features, you can also test plain HTML, CSS, PHP, Python or other similar web files saved on your local system, on combinations of operating systems, browsers, and screen resolutions that are available on <BrandName />.

Feel more confident than ever, before deploying any UI specific change into Production. Test your development thoroughly with TCP with TLS 1.2 secure connection hosted by <BrandName /> tunnel. Experience the flexibility to securely test your website on 3000+ browsers and their assorted versions, running on real OS code for cross platform and [cross browser compatibility](https://www.lambdatest.com/feature), even before it gets deployed over the production environment.

> **Note**: From November 2, 2020 onwards, we have deprecated our existing tunnel binary. In order to setup the new version, you can refer to [new tunnel binary for macOS](/docs/local-testing-macos/).


You can download the binary file responsible for establishing a TCP with TLS 1.2 secure connection between your local device and our testing cloud by clicking on the downloadable link below.

<div className="download_btn mb-10">
<a href="https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip">Download <BrandName /> Tunnel For macOS</a>
</div>

This file is supported for the below listed macOS:

* macOS Big Sur
* macOS Catalina
* macOS Mojave
* macOS High Sierra
* macOS Sierra
* OS X El Capitan
* OS X Yosemite
* OS X Mavericks
* OS X Mountain Lion
* OS X Lion

## Configuring TCP with TLS 1.2 Secure Connection with <BrandName /> Tunnel
* * *
**Step 1**: Click the button "Configure Tunnel". Download the binary zip file by clicking the "Download Link". Also, hit the ‘Copy’ button in the form that opens up to copy the complete string to your system’s clipboard.

<img loading="lazy" src={require('../assets/images/local-testing-for-macos/For-mac-1.webp').default} alt="Image"  className="doc_img"/>

**What is this zip file for?**

This zip file will help in establishing a secure connection to <BrandName /> cloud servers so you can test your locally hosted web pages using a TCP with TLS 1.2 secure connection.

**Step 2**: Extract the downloaded zip file. Go to terminal and route your pointer to the same directory where you extracted the zip file.

<img loading="lazy" src={require('../assets/images/local-testing-for-macos/extracting-zip-file-for-local-testing-on-macos.webp').default} alt="Image"  className="doc_img"/>

**Step 3**: Paste the copied string to execute the downloaded binary file. The command will look like:

`LT --user {user's login email} --key {user's access key} --cui`

So for example, if your user login email is `example@lambdatest.com` and your user key is 123asd123, the command would be:

`LT --user example@lambdatest.com --key 123asd123 --cui`

<img loading="lazy" src={require('../assets/images/local-testing-for-macos/For-mac-3.webp').default} alt="Image"  className="doc_img"/>

**Note:** After you execute the command, you may be asked for user permission. Make sure you have administrator access to allow the file to run successfully.

In a few seconds, after you execute the command, a TCP with TLS 1.2 secure connection will be established. You will receive a message inside your command prompt mentioning "Secure connection established, you may start your tests now".

<img loading="lazy" src={require('../assets/images/local-testing-for-macos/For-mac-4.webp').default} alt="Image"  className="doc_img"/>

## Testing Locally Hosted Web Pages Using <BrandName /> tunnel

* * *

**Step 1**: Navigate to 'Real Time Testing' menu and enter the localhost URL you want to test in the text field provided to enter URL.

**Step 2**: Select the tunnel via which you want to run the test.

<img loading="lazy" src={require('../assets/images/local-testing-for-macos/For-mac-5.webp').default} alt="Image"  className="doc_img"/>

**Step 3**: Select the test configuration of your choice. You can select from various major browsers & their assorted versions to perform a test session. You may also choose from a variety of Operating System & screen resolutions to check the RWD(Responsive Web Design) of the website when rendering on different resolutions.

<img loading="lazy" src={require('../assets/images/local-testing-for-macos/For-mac-6.webp').default} alt="Image"  className="doc_img"/>

**Step 4**: Make sure you turn on XAMPP or any other web hosting tool to provide you an Apache test environment. If you are using XAMPP, hit ‘Start’ for Apache under ‘Services’. If you also want to test the back-end functionality for your website then make sure you hit the ‘Start’ button for MySQL as well.

<img loading="lazy" src={require('../assets/images/local-testing-for-macos/starting-xampp.webp').default} alt="Image"  className="doc_img"/>

**Step 5**: Once you are done selecting your configurations and hosting a web server. Hit the ‘Start’ button in Real Time Test. Your test will start and you will be navigated to your localhost URL.

<img loading="lazy" src={require('../assets/images/local-testing-for-macos/real-time-testing-lambdatest.webp').default} alt="Image"  className="doc_img"/>

>**Important Note:** Some Safari browsers, on both Mac machines and iOS browsers, doesn’t support automatic resolution of URL string "localhost". Therefore if you test on URLs like "`http://localhost/`" or "`http://localhost:8080`" etc, you would get an error in these browsers. A possible solution is to replace the string "`localhost`" with machine IP address. For example if you wanted to test "`http://localhost/dashboard`" or "`http://localhost/dashboard:8080`", and your machine IP is 192.168.2.6 you can instead test on "`http://192.168.2.6/dashboard`" or "`http://192.168.2.6/dashboard:8080`".

## Testing Local Folder Files Using <BrandName /> tunnel

* * *

>**Note:** If you were already running a test session through tunnel then you will have to terminate the existing TCP with TLS 1.2 secure connection in cmd before you re-establish it for a new directory.

**Step 1**: If you want to test the local folders and files stored in your system, pass an additional argument 'dir' with the directory/folder in double quotes name as you run the command on the terminal to establish a TCP with TLS 1.2 secure connection with <BrandName /> tunnel.

Sample format:

`LT --user {user login email} --key {user key} --dir {"directory/folder name"}`

**Example:** Let us consider your user login email to be "example@lambdatest.com" with your user key as ‘123asd123’ and you want to test files in the ‘Downloads’ folder, then the command would be:

`LT --user example@lambdatest.com --key 123asd123 --dir "/home/lambda/Downloads"`

**Step 2**: After you establish a TCP with TLS 1.2 secure connection, go to <BrandName /> and navigate to Real Time test. Enter "local-folder.lambdatest.com" in URL bar. The list of all files/folders present under the selected directory will be displayed in the browser. Select the test configuration(OS, Browser and screen resolution) of your choice.

<img loading="lazy" src={require('../assets/images/local-testing-for-macos/For-mac-9.webp').default} alt="Image"  className="doc_img"/>

**Step 3**: Hit the ‘Start’ button. Once the VM(Virtual Machine) is launched, you will be able to access your local folders on a testing environment hosted by our cloud servers.

<img loading="lazy" src={require('../assets/images/local-testing-for-macos/localhost-test-environment.webp').default} alt="Image"  className="doc_img"/>

**Note:** Similarly, if you want to run any file in the specified directory, you need to give URL as local-folder.lambdatest.com/filename.

**For example**: If you have a file ‘test.html’ in your folder. You need to give URL as "local-folder.lambdatest.com/test.html" to run the same file. In this way, you can run any HTML, PHP, Python or similar web files present in any folder of your system, directly in <BrandName /> browser.

## Terminating The Secure Connection

* * *

A secure tunnel connection is maintained unless you explicitly disconnect it. You can disconnect the tunnel in following ways:

**Option 1**: You can kill the process by using Ctrl+C in the terminal.  
You will receive the below highlighted messages indicating the termination of the TCP with TLS 1.2 secure connection.

<img loading="lazy" src={require('../assets/images/local-testing-for-macos/For-mac-11.webp').default} alt="Image"  className="doc_img"/>

**Option 2**: You can also disconnect it using the option provided in the user interface. In the top right corner of <BrandName /> interface, you will find a button that says "Tunnel active:". This button displays the number of active tunnels. As you click on it, you will find your tunnel name along with an ‘x’. Hit the ‘x’ to terminate the secure tunnel.

<img loading="lazy" src={require('../assets/images/local-testing-for-macos/For-mac-12.webp').default} alt="Image"  className="doc_img"/>

## Geolocation Testing Through VPN with <BrandName /> tunnel

* * *

Test the performance of your web-app through different [geographic locations](https://www.lambdatest.com/blog/geolocation-testing-through-vpn-on-lambdatest/) using VPN in <BrandName /> tunnel. Make sure your website delivers well to your targeted audience from all around the globe.

Use the following arguments in your command line.

| ARGUMENTS | EXAMPLES | DESCRIPTION |
|---------|-------|-------------|
| –proxy-host | abc.wonderproxy.com | Full hostname for the proxy you’d like to use. |
| –key | 123asd123 | Helps Lambdatest to map a TCP with TLS 1.2 secure connection with the right user. |
| –proxy-port | 12345 | The port declared by you for fetching the proxy. |
| –proxy-pass | hijklmnop | WonderProxy password of the user. |
| –proxy-user | abcdefg | WonderProxy username of the user. |

Here is how the format of full command would look like:

`LT --user {user login email} --key {user key} --proxy-host {full proxy hostname} --proxy-user {proxy username} --proxy-pass {proxy password} --proxy-port {port number}`

Example of full command:

`LT --user example@lambdatest.com --key 123asd123 --proxy-host abc.wonderproxy.com --proxy-user abcdefg --proxy-pass hijklmnop --proxy-port 12345`

### How Can Geolocation Testing Help You?
***

**1. SERPs** – Search Engine Result Pages: For a website that is targeting audience from different parts of globes. It is always recommended to have a constant check on SERPs to address you website according to the respective trends of different geographies. This is extremely necessary for clothing brands. Traditional wearing differs from one country to another.

**2. GDPR compliance** – General Data Protection Rule Compliance: Payment Gateways may differ from one geography to another due to different GDPR compliance for different geographies.

**3. Billing:** Your billing page should support currency conversion with respect to the IP. So if a user from US would show up at your website then he/she should be billed in USD, similarly if one is visiting from France then the bill should be presented in Euros.

**4. Google Ads:** They also differ from one geographic region to another. You need to check through IPs of different geolocations regarding which ads are visible and in what manner?

**5. Bandwidth:** 4G may or may not be available to every one of your targeted geography and even if it is available. The available bandwidth will usually be different. Meaning some countries would provide a faster download speed in 4G as compared to others. So you need to be mindful about the content optimization according to your targeted geolocations. Testing from IPs belonging to different geolocations will help you get a realistic view for page loading speed. A faster page loading will not only help in pleasing your customers, it would also help in ranking higher in SERPs.

### How Can You Test From An IP Of A Different Geolocation?
***

This is where a VPN comes to rescue! VPN – Virtual Private Network – It helps in expanding a private network through a public network. Initially VPNs were introduced and used among large enterprises, defense organization, banking companies etc. to keep their data secure. A VPN created a pathway through which people working in large organizations could access the data they want, remotely, in a secured manner. The data is securely transmitted through the process of Cryptography. In Cryptography, the data is encrypted from the sender’s end and then it gets decrypted with the help of a unique key on the receivers end.

Time have changed and with it the popularity of VPN too! These days VPNs are so widely available that they are used by almost everyone of us. Some use it to surf the internet without worrying about the restrictions applied for their GeoIP. Some use it for the purpose of maintaining anonymity. Some use it without even realizing the meaning of a VPN.

Remember though, not all VPNs will work in the same manner. Few may provide you considerably more geolocations to choose from as compared to others. Few may provide less number of geolocations but more number of dynamic GeoIPs with respect to others. There are many more parameters related to comparison.

## Command References
* * *
Following is the list of command arguments which can be used as modifiers while executing the binary file:

| Command | Description |
|---------|-------------|
| –user | Registered email ID of the user. |
| –key | User access key for the user. |
| –tunnelName | (optional) Name of the tunnel. |
| –port | 	(optional) Local port to connect tunnel. |
| –proxy-host | Full hostname for the proxy you’d like to use. |
| –proxy-port | The port declared by you for fetching the proxy. |
| –proxy-user | WonderProxy username of the user. |
| –proxy-pass | WonderProxy username of the user. |

## Changing Your Access Key

* * *

**What is an Access Key?**

An Access Key is a unique string used for the identification of your account.

As we offer a cloud-based platform to host a testing ecosystem to everyone around the globe. Access key plays a crucial role in mapping a TCP with TLS 1.2 secure connection for hosting your locally stored web pages online. They work as your IDs when you gain access to our cloud servers.

If you ever misplace your Access key into the hands of someone you don’t trust. You can always redefine it by clicking the button for "**Regenerate Access Key**".

Access Key is pivotal for establishing a TCP with TLS 1.2 secure connection through <BrandName /> tunnel to test your locally hosted web-pages or web-apps.

Find your Access Key while performing any type of testing, from the left navigation menu. You will find a button that says "Configure Tunnel". Click on that button & a string containing your access key will be presented.

<img loading="lazy" src={require('../assets/images/local-testing-for-macos/For-mac-13.webp').default} alt="Image"  className="doc_img"/>

For instance, if you go to Real-Time Test, you will observe a button that says "Configure Tunnel" on the top-right area of the page. Click on that button and a form would open up through it, providing you with a string containing your access key. You will find the access key in the area underlined below.

<img loading="lazy" src={require('../assets/images/local-testing-for-macos/For-mac-14.webp').default} alt="Image"  className="doc_img"/>

You can also find your Access Key by going to ‘Settings’ in the left navigation menu and routing to ‘Profile’.

<img loading="lazy" src={require('../assets/images/local-testing-for-macos/For-mac-15.webp').default} alt="Image"  className="doc_img"/>

>**<BrandName /> tunnel Update:** Earlier, when our <BrandName /> tunnel binary was updated with a new version, we requested our users to re-download the binary file for uninterrupted cross browser testing experience of locally hosted web pages. Not anymore! We have now updated the <BrandName /> tunnel binary in a way that it auto-updates to the latest version every time you execute the <BrandName /> tunnel from cmd/terminal.
