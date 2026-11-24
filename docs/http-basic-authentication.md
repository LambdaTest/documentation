---
id: http-basic-authentication
title: "HTTP Basic Auth in URL: Test Protected Pages"
hide_title: true
sidebar_label: HTTP Basic Authentication
description: HTTP basic authentication represents a mechanism of challenge and response to help the server make a request authentication from a client, passing the User ID and password in the URL as the standard HTTP &quot;Authorization&quot; header.
keywords:
  - http basic authentication
  - http authentication
  - basic authentication
  - http authorization header
  - browser support for http authentication
url: https://www.testmuai.com/support/docs/http-basic-authentication/
site_name: TestMu AI
slug: http-basic-authentication/
canonical: https://www.testmuai.com/support/docs/http-basic-authentication/
---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/http-basic-authentication/"
    },
    "headline": "HTTP Basic Authentication",
    "description": "HTTP basic authentication represents a mechanism of challenge and response to help the server make a request authentication from a client, passing the User ID and password in the URL as the standard HTTP &quot;Authorization&quot; header.",
    "url": "https://www.testmuai.com/support/docs/http-basic-authentication/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Real Time",
    "keywords": [
      "http basic authentication",
      "http authentication",
      "basic authentication"
    ],
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# HTTP Basic Authentication

* * *

HTTP basic authentication represents a challenge and response mechanism to help the server make a request authentication from a client, passing the User ID and password in the URL as the standard HTTP "Authorization" header. 

For example: `https://username:password@www.example.com/example-page.php`

## Browser Support For HTTP Basic Authentication

* * *
HTTP authentication is incompatible among the majority of the web browser. It is supported by only Google Chrome and Mozilla Firefox.

| BROWSER | SUPPORT FOR BASIC HTTP AUTHENTICATION |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- |
| Google Chrome | Supported |
| Mozilla FireFox | Although supported, Mozilla Firefox may throw a prompt confirmation. Mozilla Firefox performs a check to evaluate whether basic HTTP authentication is mandatory to access the website. In cases, where it isn’t necessary, Firefox will throw a similar warning: "You are about to log in to the site "www.example.com" with the username "username", but the website does not require authentication. This may be an attempt to trick you." For more information, refer to the [MDN document](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication). |
| Safari | Unsupported |
| Edge | Unsupported |
| Internet Explorer | Unsupported. Internet Explorer stopped handling user names and passwords in URLs with security update 832894, and the retired Internet Explorer 11 desktop app is out of support. For more information, refer to the [Microsoft Learn article](https://learn.microsoft.com/en-us/previous-versions/troubleshoot/browsers/security-privacy/name-and-password-not-supported-in-website-address). |

## Test Basic Auth Protected Pages in Selenium and Playwright

* * *
On <BrandName />, you can reach a page behind HTTP basic authentication in three ways: put the credentials in the URL, send an `Authorization` header, or use the credentials option of your framework. The examples below use the public demo page `https://the-internet.herokuapp.com/basic_auth`, whose user name and password are both `admin`.

To build the header value, join the user name and password with a colon, Base64-encode the result and prefix it with `Basic `. The Java and Playwright examples below build the header in code from `admin:admin`. The free [Basic Auth Header Generator](https://www.testmuai.com/free-online-tools/basic-auth-generator/) builds this header from any user name and password.

### Selenium: Credentials in the URL

Open the page with the user name and password in the URL. This works in Google Chrome and Mozilla Firefox, the two browsers the table above lists as supported.

```java title="BasicAuthUrlTest.java"
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import java.net.URL;
import java.util.HashMap;

public class BasicAuthUrlTest {
    public static void main(String[] args) throws Exception {
        ChromeOptions browserOptions = new ChromeOptions();
        browserOptions.setPlatformName("Windows 11");
        browserOptions.setBrowserVersion("latest");

        HashMap<String, Object> ltOptions = new HashMap<>();
        ltOptions.put("username", System.getenv("LT_USERNAME"));
        ltOptions.put("accessKey", System.getenv("LT_ACCESS_KEY"));
        ltOptions.put("project", "Basic Auth Test");
        browserOptions.setCapability("LT:Options", ltOptions);

        RemoteWebDriver driver = new RemoteWebDriver(
            new URL("https://hub.lambdatest.com/wd/hub"), browserOptions);
        driver.get("https://admin:admin@the-internet.herokuapp.com/basic_auth");
        System.out.println(driver.getTitle());
        driver.quit();
    }
}
```

### Selenium: Authorization Header

To keep the credentials out of the URL, send the `Authorization` header with the `customHeaders` capability, then open the page without credentials. The capability is described in [custom HTTP headers in Selenium](/support/docs/custom-headers/).

```java
String token = Base64.getEncoder().encodeToString("admin:admin".getBytes(StandardCharsets.UTF_8));

DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("customHeaders", new HashMap<String, String>() {{
    put("Authorization", "Basic " + token);
}});

// After the session starts:
driver.get("https://the-internet.herokuapp.com/basic_auth");
```

### Playwright: httpCredentials

Playwright answers the authentication challenge itself when you create the browser context with `httpCredentials`. Set `origin` so the credentials go only to that site.

```js title="basic-auth.js"
const { chromium } = require('playwright')

const capabilities = {
  'browserName': 'Chrome',
  'browserVersion': 'latest',
  'LT:Options': {
    'platform': 'Windows 10',
    'build': 'Playwright Basic Auth',
    'name': 'Basic Auth Test',
    'user': process.env.LT_USERNAME,
    'accessKey': process.env.LT_ACCESS_KEY
  }
}

;(async () => {
  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
  })
  const context = await browser.newContext({
    httpCredentials: {
      username: 'admin',
      password: 'admin',
      origin: 'https://the-internet.herokuapp.com'
    }
  })
  const page = await context.newPage()
  await page.goto('https://the-internet.herokuapp.com/basic_auth')
  console.log(await page.title())
  await browser.close()
})()
```

To keep the credentials out of the session logs, add `setHTTPCredentials` to the `lambdaMaskCommands` capability, listed in [Playwright test environment setup](/support/docs/playwright-test-execution-setup/).

### Playwright: Authorization Header

You can also send the header on every request of the context with `extraHTTPHeaders`. Unlike `httpCredentials`, this sends the header to every host the page calls.

```js
const context = await browser.newContext({
  extraHTTPHeaders: {
    Authorization: 'Basic ' + Buffer.from('admin:admin').toString('base64')
  }
})
```

### Safari on iOS Real Devices

Safari on iOS real devices needs a different route: a lambda hook for Selenium and the `customHeaders` capability for Playwright. Both are covered in [Basic Authentication for Safari Web Automation](/support/docs/basic-authentication-for-web-automation/).

