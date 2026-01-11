---
id: charles-proxy
title: Setting Up Charles Proxy
hide_title: true
sidebar_label: Setting Up Charles Proxy
description: This article will guide you on how to setup Charles Proxy for the tests run on TestMu AI platform through TestMu AI Tunnel.
keywords:
  - Charles Proxy
  - Network Logs With Charles Proxy
  - Network Logs
  - TestMu AI Tunnel
  - TestMu AI with Charles Proxy
  - Charles Proxy With TestMu AI
  - TestMu AI Cloud Platform
url: https://www.testmu.ai/support/docs/charles-proxy
site_name: LambdaTest
slug: charles-proxy
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Migration",
          "item": `${BRAND_URL}/support/docs/charles-proxy/`
        }]
      })
    }}
></script>

# Setting Up Charles Proxy Through <BrandName /> Tunnel

---

This article will guide you on how to setup Charles Proxy for the tests run on <BrandName /> platform through <BrandName /> Tunnel.

## Objective

---

By the end of this article, you will be able to :

- Configure **<BrandName /> Tunnel** and setup **Charles Proxy** for your tests through the created tunnel.
- View Network Logs of the tests run on the **<BrandName /> Cloud Platform** on Charles Interface.
- Manipulate the **Network Requests** of the tests through **SSL Proxying** on Charles.

## What is Charles Proxy?

---

**Charles proxy** is an interactive **web debugging tool** which acts as an intermediate between a client (mobile or web app) and the internet. It enables the users in configuring the client environment to pass all the networking requests and responses through Charles proxy so that they can inspect and even change the data midstream to test how a app responds.

In Web and Internet development we are unable to see what is being sent and received between the client and the server. So, it is difficult to determine exactly where the fault is. By using Charles, users can get the idea of what is happening to quickly diagnose and fix problems.

## Prerequisites

---

Before getting started with the setup, you would have to follow these steps:

1. Download **Charles Proxy** software from [the official website](https://www.charlesproxy.com/) and install it. You can also download from the links below.

   > - [Windows](https://www.charlesproxy.com/download/#)
   > - [MacOS](https://www.charlesproxy.com/download/#)
   > - [Linux](https://www.charlesproxy.com/download/#)

2. Download the <BrandName /> Tunnel binary file and extract it to setup the tunnel.

   > - [<BrandName /> Tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
   > - [<BrandName /> Tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
   > - [<BrandName /> Tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

3. Or you can download the **GUI** tunnel application **Underpass** to setup the tunnel easily without using terminal.

   > - [Underpass for Windows](https://downloads.lambdatest.com/underpass/master/UnderPass%20Setup.exe)
   > - [Underpass for Mac](https://downloads.lambdatest.com/underpass/master/UnderPass.dmg)
   > - [Underpass for Linux](https://downloads.lambdatest.com/underpass/master/UnderPass.AppImage)

## Installing Charles Root Certificate

---

- Once you install **Charles**, you would have to navigate to **"Install Charles Root Certificate"** under **Help** section.
  <img loading="lazy" src={require('../assets/images/charles/charles8.webp').default} alt="cmd" className="doc_img" width="2880" height="1800" />

  ***

- On clicking, you need to grant the access to install the certificate to your system. Then you will be able to view the certificate in **Mac's Keychain Access** as shown
  <img loading="lazy" src={require('../assets/images/charles/charles10.webp').default} alt="cmd" className="doc_img" width="1778" height="1100"/>

  ***

- Now you need to open the installed certificate and select **"Always Trust"** option under the **Trust** section. This gives permission to the Charles Proxy to access the network resources from the system. Here you would have to grant the access again to save the modified settings.
  <img loading="lazy" src={require('../assets/images/charles/charles9.webp').default} alt="cmd" className="doc_img" width="1834" height="1120"/>

## Getting the Port Number

---

Now, navigate to the **Proxy Settings** on Charles to view the **Port Number** used by the Charles Proxy in your system.

<img loading="lazy" src={require('../assets/images/charles/charles1.webp').default} alt="cmd" className="doc_img" width="1398" height="600"/>

---

> In this case the Port number which is in use is `8888`. We will be using it to configure the <BrandName /> Tunnel.

## Configuring The <BrandName /> Tunnel

---

Now you need to setup and configure the <BrandName /> Tunnel through which you will be able to route the traffic of your tests run using Charles Proxy. You can configure a <BrandName /> Tunnel by using the tunnel **binary file** or by downloading the **GUI** application **Underpass** by <BrandName />.

### Through The Binary File

---

To configure the tunnel, you need to download the **<BrandName />'s Tunnel Binary File** following the steps mentioned in the Prerequisites before. You can find the shell command in the [<BrandName /> Dashboard](https://accounts.lambdatest.com/dashboard) to setup a basic tunnel.

<img loading="lazy" src={require('../assets/images/charles/Charles_RD.png').default} alt="cmd" className="doc_img" width="806" height="544"/>

---

But here we need to add the Charles proxy server through which we want to route the traffic of the tunnel. We can do that by appending the `--proxy-host` (localhost) and `--proxy-port` (`8888` in this case) options to the above command. The format of the command would be:

```bash
./LT -user {user’s login email} -key {user’s access key} \
--proxy-host localhost \
--proxy-port 8888
```

> You can get your <BrandName /> Access Key from the [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/).

You need to run the above command from the terminal in the directory where you have extracted the **LT binary file** as shown. Make sure that **Charles Proxy Session** is up and running before you can start the tunnel. Now once the tunnel is setup, you will be able to see **"You can start testing now"** in the terminal as shown.

<img loading="lazy" src={require('../assets/images/charles/charles3.webp').default} alt="cmd" className="doc_img" width="1400" height="613"/>

### Through Underpass

---

Before you can configure and setup the tunnel, you need to download the Underpass application as mentioned in the Prerequisites before. For more details about Underpass, refer to our guide on [getting started with Underpass application](/support/docs/underpass-tunnel-application/). Once you install Underpass, you need to pass your **<BrandName /> authentication credentials** as shown below.



Now to configure the tunnel with Charles Proxy, we need to add proxy to the tunnel. The **proxy host** : `localhost` and **port** : `8888` can be set using **"Show Advanced Configuration option"** in **Underpass**. You can set more advanced options through this if necessary.

Make sure to also select **Advanced Configuration** and turn on **MITM** (Man in the Middle) mode so that we can see the decrypted network data and perform changes to the data being exchanged.


<img loading="lazy" src={require('../assets/images/charles/underpass2.png').default} alt="cmd" className="doc_img"/>

---

On clicking the **Launch** button, you will be able to start the tunnel with the configured proxy setup. Make sure you are running the Charles Software before launching the tunnel using Charles Proxy Port. You will be able to see the status as **"running"** once the tunnel is launched successfully.

<img loading="lazy" src={require('../assets/images/charles/underpass3.png').default} alt="cmd" className="doc_img"/>

## Steps to download the SSL certificate in the <BrandName /> Private Real Devices:

---
> Only for **Private Cloud** Users.

**Step 1:** Launch the session with the tunnel which we have enabled and visit http://chls.pro/ssl site to download the SSL certificate.

**Step 2:** Visit the settings of the device and search for "CA certificate"



**Step 3:** Click on CA certificate

<img loading="lazy" src={require('../assets/images/charles/real_device_ssl1.png').default} alt="cmd" className="doc_img"/>


**Step 4:** Confirm installation by clicking "Install Anyway" when prompted.

<img loading="lazy" src={require('../assets/images/charles/real_device_ssl2.png').default} alt="cmd" className="doc_img"/>

**Step 5:** Select the Charles Proxy SSL proxying certificate to install it.

<img loading="lazy" src={require('../assets/images/charles/real_device_ssl3.png').default} alt="cmd" className="doc_img"/>

## Viewing Network Logs Through Charles Proxy

---

Once this is taken care of, the setup is now complete. 

Now there are 2 ways of enabling **SSL proxying** without which we will not be able to view the data being exchanged.

### Method 1: Adding domains

- Navigate to **SSL Proxying Settings** under **Proxy** section.
  <img loading="lazy" src={require('../assets/images/charles/charles4.webp').default} alt="cmd" className="doc_img" width="1992" height="800"/>

  ***

- Then you need to add the host of the site [amazon.com] under **Include** to enable SSH Proxying.

  > There is no need to mention the port number here as it will be allocated by default on adding.

  <img loading="lazy" src={require('../assets/images/charles/charles5.png').default} alt="cmd" className="doc_img"/>

> We have added `*amazon.com*` so that we target the domain and all traffic that contains it in it's URL. <br/> You can also add `*` (wildcard) and it will intercept end to end flow of data.

  ***

:::tip For Automation

We need to ensure that the capabilities `network` and `tunnel` are passed as `true` to successfully get the network logs on Charles. On running the tests, you will be able to see the host in **Structure** panel with the **Notes** - **"SSL Proxying enabled for this host"**.

:::

We can now see the data flowing when we open [Amazon](https://www.amazon.in/) on a real device.

<img loading="lazy" src={require('../assets/images/charles/charles6.png').default} alt="cmd" className="doc_img"/>

### Method 2: Right click & enable SSL proxy

  <img loading="lazy" src={require('../assets/images/charles/charles7.png').default} alt="cmd" className="doc_img"/>



That's it, now all the Network logs will start to show up and we can interact with Charles Proxy.

*** 

## Mocking data 

Charles Proxy offers the ability to mock the data that is being passed to and for.
Let's look at one such example.

The clean data looks something like this:

:::tip

Let's try to change the `astro` to `lambdatest`

:::

<img loading="lazy" src={require('../assets/images/charles/charles11.png').default} alt="cmd" className="doc_img"/>

***

Click on **Tools** on the Nav bar and select **Rewrite**
Now, check the **Enable Rewrite** option.

Once done, provide a *name* to the new rule you create.
Then add the URL that you want to change and Charles Proxy will pick up all the data and fill up details.

<img loading="lazy" src={require('../assets/images/charles/charles15.png').default} alt="cmd" className="doc_img"/>

Click *add* on the lower table where we'll be defining the data that will auto rewrite when the data is flowing.

<img loading="lazy" src={require('../assets/images/charles/charles12.png').default} alt="cmd" className="doc_img"/>

Click *save* and we're good to go!

<img loading="lazy" src={require('../assets/images/charles/charles13.png').default} alt="cmd" className="doc_img"/>

We can now re-launch the browser after closing the tab (on the real device) so that we can clear the cache on the device.

Now when we try opening the URL, we can see the `lambdatest` appear in the place of `astro`.

<img loading="lazy" src={require('../assets/images/charles/charles14.png').default} alt="cmd" className="doc_img"/>

***

> That’s all! In case you have any questions or need any additional information, you could reach out at our <span className="doc\_\_lt" onClick={() => window.openLTChatWidget()}>**[24X7 Chat Support]**</span> or mail us directly at support@testmu.ai.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
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
      Setting Up Charles Proxy
      </span>
    </li>
  </ul>
</nav>
