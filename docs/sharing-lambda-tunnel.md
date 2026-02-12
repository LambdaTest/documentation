---
id: sharing-lambda-tunnel
title: Localhost Testing With Shared Tunnel
hide_title: true
sidebar_label: Sharing TestMu AI Tunnel
description: Share your SSH connection of TestMu AI Tunnel with teammates belonging to your organization and test your locally hosted web applications or web pages faster.
keywords:
  - local app testing
  - testmu ai local testing
  - testmu ai local tunnel
  - TestMu AI tunnel
  - local app testing for linux
  - TCP with TLS 1.2 secure connection
  - TCP with TLS 1.2 secure connection tunnel
  - shared TCP with TLS 1.2 secure connection
url: https://www.testmuai.com/support/docs/sharing-lambda-tunnel/
site_name: TestMu AI
slug: sharing-lambda-tunnel/
canonical: https://www.testmuai.com/support/docs/sharing-lambda-tunnel/
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
          "name": "Sharing LambdaTest Tunnel",
          "item": `${BRAND_URL}/support/docs/sharing-lambda-tunnel/`
        }]
      })
    }}
></script>

# Sharing <BrandName /> Tunnel

* * *
<BrandName /> is a [cross browser testing](https://www.lambdatest.com/) tool which allows you to test your locally hosted website or web application on 3000+ real browsers. It does so with the help of a TCP with TLS 1.2 secure connection tunnel which establishes a secure and unique connection from your local system to <BrandName /> cloud servers.

Earlier with <BrandName /> Tunnel, users belonging to the same organization were able to choose any tunnel they want. So if a team had 5 members and all of them had configured their own tunnels, then they were able to shuffle their TCP with TLS 1.2 secure connection tunnel with any of the 5 connections. However, that is not the case anymore!

Now, a user can only work on a user-specific TCP with TLS 1.2 secure connection tunnel. In case you wish to keep a common TCP with TLS 1.2 secure connection tunnel across all your teammates then you will need to establish a shared <BrandName /> Tunnel that would work for all of the teammates, listed under your organization at <BrandName />.

This document will help you share your <BrandName /> Tunnel with colleagues listed as team in your <BrandName /> account.

## Configuring <BrandName /> Tunnel

* * *
**Step 1:** Download the zip file of <BrandName /> Tunnel for your operating system: 
- [Download for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
- [Download for Mac OS](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
- [Download for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

**Step 2:** Extract the zip file in your system and route your CMD/terminal to the same folder where the zip file is extracted. For demonstration purpose, we have extracted the zip file to desktop so you will find the CMD to be pointed towards the desktop.

<img loading="lazy" src={require('../assets/images/sharing-lambda-tunnel/localhost-testing-with-shared-tunnel.webp').default} alt="Sharing <BrandName /> Tunnel" width="1119" height="195" className="doc_img"/>

**Step 3:** To configure a shared <BrandName /> Tunnel you would need to append an argument `--shared-tunnel` to the command used for invoking <BrandName /> Tunnel. Syntax to configure a shared TCP with TLS 1.2 secure connection <BrandName /> Tunnel would be:

`LT --user {user's login email} --key {user's access key} --shared-tunnel --tunnelName {string}`

So for example, if your user login email is example@lambdatest.com and your user key is 123asd123, the command would be:

`LT --user example@lambdatest.com --key 123asd123 --shared-tunnel --tunnelName SharedTCP-TLS12-Example`

<img loading="lazy" src={require('../assets/images/sharing-lambda-tunnel/command-line-code-for-local-testing-with-shared-tunnel.webp').default} alt="Sharing <BrandName /> Tunnel" width="1090" height="264" className="doc_img"/>

**Step 4:** As you run the above command you will find the below console UI indicating with a message that the tunnel is successfully established.

<img loading="lazy" src={require('../assets/images/sharing-lambda-tunnel/shared-tunnel-for-local-testing.webp').default} alt="Sharing <BrandName /> Tunnel" width="1105" height="704" className="doc_img"/>

That is it, if your teammates will now open their <BrandName /> account then they will find your Tunnel to be active for them by default.

## Don't Forget To Name The Shared Tunnel

* * *
It could be problematic if 2 or more teammates start sharing their tunnels across the organization, as a best practice we recommend you to name the Shared tunnel appropriately so your teammates could easily identify which TCP with TLS 1.2 secure connection tunnel is their own and which is the one shared by you.

To name a shared tunnel you will have to append another argument in the command for configuring tunnel. The new argument would be: `-tunnelName {string}`

Syntax:

`LT --user {user's login email} --key {user's access key} --shared-tunnel --tunnelName {string}`

Example

`LT --user example@lambdatest.com --key 123asd123 --shared-tunnel --tunnelName SharedTCP-TLS12-example`

<img loading="lazy" src={require('../assets/images/sharing-lambda-tunnel/configure-shared-tunnel-for-local-testing.webp').default} alt="Sharing <BrandName /> Tunnel" width="1334" height="415" className="doc_img"/>

**Important Note:** If you are running local host at a port which is different from the default port being used your team then make sure to tell them so they can address it in the URL while performing cross browser testing at <BrandName />. For example, if you are running Apache server at port `4200`, and want your teammates to hop over a URL that is hosted locally by you, then they will have to specify port `4200` before they hit the start testing button on <BrandName />.

<img loading="lazy" src={require('../assets/images/sharing-lambda-tunnel/start-local-page-testing-with-shared-tunnel.webp').default} alt="Sharing <BrandName /> Tunnel" width="1342" height="609" className="doc_img"/>

Kudos! You have successfully created a Shared <BrandName /> Tunnel for your organization. If you still have any questions, feel free to share them with us through our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or by mailing to us on [support@testmu.ai](mailto:support@testmu.ai). Happy testing! 🙂

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
        Sharing <BrandName /> Tunnel
      </span>
    </li>
  </ul>
</nav>
