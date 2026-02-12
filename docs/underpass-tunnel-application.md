---
id: underpass-tunnel-application
title: Using TestMu AI Underpass | A Desktop Application For Localhost Testing
hide_title: true
sidebar_label: Underpass Application For Secure Tunnel
description: With TestMu AI Underpass, you can perform cross browser testing of locally hosted web applications on 3000+ browsers for both mobile &amp; desktop, without executing any command from your terminal.
keywords:
  - local app testing
  - testmu ai local testing
  - testmu ai local tunnel
  - lambda tunnel
  - local app testing for macos
  - underpass tunnel application
  - tunnel application
  - underpass testmu ai
url: https://www.testmuai.com/support/docs/underpass-tunnel-application/
site_name: TestMu AI
slug: underpass-tunnel-application/
canonical: https://www.testmuai.com/support/docs/underpass-tunnel-application/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "LambdaTest Underpass",
          "item": `${BRAND_URL}/support/docs/underpass-tunnel-application/`
        }]
      })
    }}
></script>

# <BrandName /> Underpass Application For Secure Tunnel

***
With <BrandName /> Underpass, you can perform [cross browser testing](https://www.lambdatest.com) of locally hosted web applications on 3000+ browsers for both mobile & desktop, without executing any command from your terminal. <BrandName /> Underpass is a desktop application to help you establish an SSH(Secure Shell) tunnel between your operating system & our cloud servers, all through GUI.

<div className="ytframe"> 
<div className="youtube" data-embed="UmjWxnw1T6Q">
    <div className="play-button"></div>
</div>
</div>


## Downloading & Installing The Underpass Tunnel Application
<!-- Change these links -->
* * *

| Important Links |
|-----------------|
| [Download Underpass For Windows](https://downloads.lambdatest.com/underpass/master/UnderPass.exe) |
| [Download Underpass For macOS](https://downloads.lambdatest.com/underpass/master/UnderPass.dmg) |
| [Download Underpass For Linux](https://downloads.lambdatest.com/underpass/master/UnderPass.AppImage) |

You can also download the Underpass tunnel application from the <BrandName /> web-application. Login to your <BrandName /> account, and hit the button to configure tunnel. After that, switch to the tab "Download App" and click the button which says "Download Tunnel App". This will download the binary file using which you can perform browser compatibility testing over your locally hosted web-applications or websites.

<img loading="lazy" src={require('../assets/images/underpass-tunnel-application/underpass_download.png').default} alt="<BrandName /> Underpass" width="1345" height="624" className="doc_img"/>

After downloading the Tunnel App, also known as the Underpass, you need to run it. You may get a prompt from your operating system asking you to allow Underpass through the firewall on your system.

<img loading="lazy" src={require('../assets/images/underpass-tunnel-application/underpass-2.webp').default} alt="<BrandName /> Underpass" width="527" height="381" className="doc_img"/>

> Note: If you are using a Linux operating system, you need to give app executable permission using the command:

`chmod +x UnderPass.AppImage`

## Launching Underpass and the secure Tunnel
* * *


#### Launching Underpass on Linux 

Make sure you’ve given the permissions to the Underpass executable file through the command highlighted in the above note. If you have, you can run the application by either double clicking it or by running the below command in terminal:

`./UnderPass.AppImage`

#### Launching Underpass on Windows

Once Underpass is downloaded and installed, simply launch Underpass through the start menu or a shortcut.

#### Launching Underpass on MacOS

Once Underpass is downloaded and installed, simply launch Underpass through the Launchpad (Applications page).

### Launching Tunnel
***

To use <BrandName /> Underpass, you need to begin by logging in with your preferred login method. Underpass supports login through Email and Password, Google, GitHub or your organisation SSO. 

<img loading="lazy" src={require('../assets/images/underpass-tunnel-application/underpass_login.jpg').default} alt="<BrandName /> Underpass" width="788" height="595" className="doc_img"/>

After logging in, you will be presented with the home screen of Underpass. Here, you can change the tunnel name manually or using the arrow button to generate a random name. You can click launch to launch the tunnel.

<img loading="lazy" src={require('../assets/images/underpass-tunnel-application/underpass_home.jpg').default} alt="<BrandName /> Underpass" width="788" height="595" className="doc_img"/>


> On Windows, you may get another prompt from your firewall defender to allow LT, which is a binary file for Lambda Tunnel. Earlier, you used to trigger the LT file through your command line or terminal. Now, as you allow LT(Lambda Tunnel) the permissions, the Underpass will take care of the rest of the execution.

Next, you just have to wait for a couple seconds while the tunnel loads. You can see the logs as well.

<img loading="lazy" src={require('../assets/images/underpass-tunnel-application/underpass_launching.jpg').default} alt="<BrandName /> Underpass" width="527" height="381" className="doc_img"/>

You have successfully established an Secure Shell connection by running the Underpass application. You will find the status as Running.

<img loading="lazy" src={require('../assets/images/underpass-tunnel-application/underpass_tunnel_running.jpg').default} alt="<BrandName /> Underpass" width="779" height="532" className="doc_img"/>

By clicking over the Logs button, you can find messages populated from through command line.

<img loading="lazy" src={require('../assets/images/underpass-tunnel-application/underpass_logs2.png').default} alt="<BrandName /> Underpass" width="771" height="527" className="doc_img"/>

> **Note:** If you don’t specify any advanced configurations while launching the tunnel, you may receive few warnings stating the environment & configuration files aren’t found. Don’t worry though, in such cases you will be automatically routed through default configurations.

Now, if you go back to <BrandName /> web-application, you will find an active tunnel connection being reflected with the same name as your Underpass tunnel application.

<img loading="lazy" src={require('../assets/images/underpass-tunnel-application/underpass_samename.jpg').default} alt="<BrandName /> Underpass" width="1348" height="616" className="doc_img"/>

## How to add Advanced Configurations?
* * *
You can also specify **advanced configurations** such as proxy details, environment label, info API port, local server port and more before you launch the Underpass tunnel application.

<img loading="lazy" src={require('../assets/images/underpass-tunnel-application/underpass_advanced.jpg').default} alt="<BrandName /> Underpass" width="773" height="546" className="doc_img"/>

As you click on **Show Advanced Configurations**, you get the below screen.

<img loading="lazy" src={require('../assets/images/underpass-tunnel-application/underpass_advanced_screen.jpg').default} alt="<BrandName /> Underpass" width="307" height="515" className="doc_img"/>

### Local Testing By MITM(Man-In-The-Middle)
* * *
The MITM(Man-in-the-middle) toggle enables you to test websites using self-signed certificates on your local system or internal network. It happens very often that you may try to test a website on localhost which may not have valid SSL certificates before the website is made live. In such cases, you may receive the below error.

<img loading="lazy" src={require('../assets/images/underpass-tunnel-application/invalid-ssl.webp').default} alt="<BrandName /> Underpass" width="1266" height="657" className="doc_img"/>

You can test such websites by leveraging the MITM toggle under advanced configurations of the Underpass tunnel application. Here is a screenshot of the same website that was throwing an error earlier but can now be tested by enabling the MITM toggle.

<img loading="lazy" src={require('../assets/images/underpass-tunnel-application/bypass-ssl.webp').default} alt="<BrandName /> Underpass" width="1069" height="687" className="doc_img"/>

### Accessing A Local Directory
* * *
With Underpass application, you can easily access a local folder or directory in your computer. All you need to do is paste the address of folder in the field "LOCAL DIRECTORY" under the advanced configurations.

<img loading="lazy" src={require('../assets/images/underpass-tunnel-application/underpass_localfiles.jpg').default} alt="<BrandName /> Underpass" width="776" height="506" className="doc_img"/>

Now, when you launch the tunnel and run a Real time test over <BrandName />, you will find the files located under the local folder whose path was specified by you under the advanced configurations.

Note: You need to specify `local-folder.lambdatest.com` as the testing URL in the real time testing.


<img loading="lazy" src={require('../assets/images/underpass-tunnel-application/real-time.webp').default} alt="<BrandName /> Underpass" width="1259" height="696" className="doc_img"/>

## Monitoring Tunnel Logs For Troubleshooting
* * *
Through Underpass tunnel application, we’ve tried our best to provide you a bug-free experience. However, in any rare scenario, if you come across any issues around <BrandName /> Underpass, you can share the tunnel logs with our 24/7 support, and we will help you out at once. 

To view the tunnel logs instantly, click on **Logs** after selecting a tunnel in the **View Tunnels** tab. You can now copy the logs using the copy button on the right hand side.

<img loading="lazy" src={require('../assets/images/underpass-tunnel-application/underpass_logs.png').default} alt="<BrandName /> Underpass" width="779" height="532" className="doc_img"/>

You can find the tunnel logs stored in the following location:

* On macOS: `~/Library/Application Support/Underpass/logs`
* On Windows: `C:\Users\%USERNAME%\AppData\Local\Underpass\logs`
* On Linux: `~/.config/Underpass/logs`

>
That was all for <BrandName /> Underpass tunnel application, in case you have any questions, feel free to share them with us through our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or drop us an email to [support@testmu.ai](mailto:support@testmu.ai). Happy testing! 🙂

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        <BrandName /> Underpass
      </span>
    </li>
  </ul>
</nav>
