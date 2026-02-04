---
id: troubleshooting-lambda-tunnel
title: How to troubleshoot TestMu AI Tunnel
hide_title: true
sidebar_label: Troubleshooting TestMu AI Tunnel
description: This document will help you troubleshoot the most common challenges faced during local app testing using TestMu AI Tunnel.
keywords:
  - troubleshooting testmu ai Tunnel
  - tunnel not connecting
  - localhost not reachable
  - connection refused
url: https://www.testmuai.com/support/docs/troubleshooting-lambda-tunnel/
site_name: LambdaTest
slug: troubleshooting-lambda-tunnel/
canonical: https://www.testmu.ai/support/docs/troubleshooting-lambda-tunnel/
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
          "name": "Troubleshooting LambdaTest Tunnel",
          "item": `${BRAND_URL}/support/docs/troubleshooting-lambda-tunnel/`
        }]
      })
    }}
></script>

# Troubleshooting <BrandName /> Tunnel
***
<BrandName /> Tunnel helps in establishing an SSH connection between your local machine and our cloud servers to help you perform tests on locally hosted websites and web-apps. With <BrandName /> Tunnel, you can ensure how robust your website rendering is across 3000+ real browsers, even before you make it live on the internet.

If due to some unfortunate reason, you are unable to perform <a href={BRAND_URL}>cross browser testing</a> using <BrandName /> Tunnel then this document will help you troubleshoot the most common challenges.

* * *

Oops !! Facing issue while testing your locally hosted application through <BrandName /> Tunnel? Here are a few guidelines for you.

Before proceeding, here are some of the common issues:

- [Localhost refused to connect](/docs/troubleshooting-lambda-tunnel/#1-localhost-refused-to-connect)
- [Invalid Host Header](/docs/troubleshooting-lambda-tunnel/#2-invalid-host-header)
- [WordPress - CSS not loading](/docs/troubleshooting-lambda-tunnel/#3-wordpress---css-not-loading)
- [IP whitelisting](/docs/troubleshooting-lambda-tunnel/#4-ip-whitelisting)
- [No available PORT found](/docs/troubleshooting-lambda-tunnel/#5-no-available-port-found)
- [Custom Host name](/docs/troubleshooting-lambda-tunnel/#6-custom-host-name)
- [CUI – Console UI](/docs/troubleshooting-lambda-tunnel/#7-still-got-issues-let-us-help-through-cuiconsole-ui)
- [Unable to establish a secure shell tunnel connection through Port 443](/docs/troubleshooting-lambda-tunnel/#8-unable-to-establish-a-secure-shell-tunnel-connection-through-port-443)
- [LT can’t be opened because Apple cannot check it for malicious software](/docs/troubleshooting-lambda-tunnel/#9-lt-cant-be-opened-because-apple-cannot-check-it-for-malicious-software)

## 1. Localhost Refused To Connect

* * *

After configuring the tunnel, you might get into the error similar to the below screenshot:

<img loading="lazy" src={require('../assets/images/troubleshooting-lambda-tunnel/localhost-refused-to-connect.webp').default} alt="troubleshoot lambdatest tunnel" width="1600" height="750" className="doc_img"/>

The error "localhost refused to connect" occurs because of using the URL as localhost which is unfortunately not compatible with various browsers and browser versions. We are deliberately eliminating the URL localhost and recovering it with localhost.lambdatest.com or your local system IP.

For example you might find above error with URL: `https://localhost/demo.html`

however, URL: `https://localhost.lambdatest.com/demo.html` or `10.0.0.15/demo.html` would definitely work fine for you.

## 2. Invalid Host Header

* * *

While testing an application hosted on your local machine, you may receive an "Invalid Host Header" error message when testing on <BrandName /> using a local connection. This error is most commonly caused by a misconfiguration of the application server that causes it to reject non-local connections or reject requests directed at hostnames other than localhost(or any custom one set)

Since, web applications are now built with various different kinds of frameworks like angular, react etc; In order to test it using tunnel the command used to run your web app needs to modified in your project manifest file i.e. "package.json"

<img loading="lazy" src={require('../assets/images/troubleshooting-lambda-tunnel/invalid-host-header.webp').default} alt="troubleshoot lambdatest tunnel" width="1600" height="754" className="doc_img"/>

- **Angular Framework Project**: For Angular framework based web app, ideally you might be using "ng serve" or "npm start" to run your web application or your package.json file configuration would be set as "ng serve" in order to start your web app and as usual, it would be working fine on local browser. However, this might throw an "Invalid Host Header"error or error something related to the invalid host in a Real Time Test.

To resolve this, here is the quick small solution for you. While running your application, you can either use command `ng serve --host 0.0.0.0 --disable-host-check` or set your start configuration in package.json file as `"ng serve --host 0.0.0.0 --disable-host-check"` instead of changing your running command.

- **React Framework Project**: For React framework based web app, you need to create an env file in which you have to add the hostname,syntax: `HOST=< hostname >`, once you are done with it, now you can add your localhost IP along with your hostname in your system hosts file.

Example: `127.0.0.1 < hostname >`

This would help you avoiding "Invalid Host Header" error.

## 3. WordPress - CSS Not Loading

* * *

While testing your local web app built through WordPress, you may find issue with the rendering of CSS, similar to the below screenshot:

<img loading="lazy" src={require('../assets/images/troubleshooting-lambda-tunnel/WordPress-CSS-Not-Loading.webp').default} alt="troubleshoot lambdatest tunnel" width="1600" height="753" className="doc_img"/>

The general solution for this is to update the WordPress Address and Site Address on the General Settings tab in the WordPress dashboard with your system IP address rather than the default of localhost, then everything will be emitted relative to that. Here is a screenshot for your further reference:

<img loading="lazy" src={require('../assets/images/troubleshooting-lambda-tunnel/general-settings-for-troubleshooting-lambda-tunnel.webp').default} alt="troubleshoot lambdatest tunnel" width="1600" height="751" className="doc_img"/>

By applying the above changes, you would find the CSS loading issue as resolved. Below is a screenshot after the mentioned changed:

<img loading="lazy" src={require('../assets/images/troubleshooting-lambda-tunnel/hello-world.webp').default} alt="troubleshoot lambdatest tunnel" width="1600" height="758" className="doc_img"/>

## 4. IP Whitelisting

* * *

If you are testing a server that requires IP whitelisting, then you just have to set up a Local Testing connection and whitelist the below few IP’s for the respective domain:

`https://ts.lambdatest.com/`<br />

- 199.58.84.59
- 23.82.88.184
- 23.106.34.219
- 23.106.54.77
- 3.214.241.254
- 52.36.84.247
- 13.126.37.58
- 3.66.78.89


## 5. Custom Host Name

* * *

Because of some firewall restrictions, your web application might not be accessible on some other servers even after whitelisting the IP’s and configuring the tunnel, in such case you need to make an entry in the hosts file which is used to map hostnames to IP addresses. With the hosts file, you can change the IP address that you resolve a given domain name. This change only affects your own computer without affecting how the domain is resolved worldwide.

This is particularly useful when you wish to see how a website will look like when hosted on a different server without making any DNS changes to your domain.

The location of the hosts file, depending on the operating system that you are using, is:

- **Windows** – SystemRoot > system32 > drivers > etc > **hosts**
By default the system root is C:\Windows, so if you are using Windows, your **hosts** file is most probably:<br />C:\Windows\System32\drivers\etc\ **hosts**)
- **Linux** – /etc/**hosts**
- **Mac OS X** – /private/etc/**hosts**

Let’s say that you wish to resolve **mydomain.com** to the IP address **10.20.30.40**. In this case, you would need to open up the hosts file with a text editor and append the following line:
10.20.30.40 mydomain.com www.mydomain.com

## 6. Enable Verbose Logging
* * *

The `- v`  flag enables Verbose logging on the console. You can use this to log the HTTP headers & requests or to debug the <BrandName /> Tunnel connection.

The requests are also logged into a log file `lt.log` which is created in the same working directory as the <BrandName /> Tunnel binary. You can also specify the tunnel log file name using the `--logFile` flag.

<img loading="lazy" src={require('../assets/images/troubleshooting-lambda-tunnel/verbose.webp').default} alt="troubleshoot lambdatest tunnel" width="981" height="508" className="doc_img"/>


## 7. LT Can’t Be Opened Because Apple Cannot Check It For Malicious Software

* * *

Catalina OS users may get the below error from the command line while trying to configure the <BrandName /> Tunnel to test their locally hosted web pages:
"LT can't be opened because Apple cannot check it for malicious software"

This error occurs due to the increased restrictions on third-party software, downloaded from the internet. Since Catalina OS is recently launched by Apple, we are working to make our <BrandName /> Tunnel compatible with the new OS.

While we are at it, here is a one-time setup workaround. All you need to do is run the below command before you start configuring your <BrandName /> Tunnel:

`xattr -d com.apple.quarantine ./LT`

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_ self" href={`${BRAND_URL}/support/docs/`}>Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">Troubleshooting <BrandName /> Tunnel</span>
    </li>
  </ul>
</nav> 
