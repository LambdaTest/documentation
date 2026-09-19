---
id: run-selenium-test-behind-the-proxy
title: How to Run Selenium Tests Behind a Proxy on TestMu AI
toc_max_heading_level: 2
hide_title: true
sidebar_label: "Run Tests Behind a Proxy"
description: Run Selenium tests behind a proxy or firewall on TestMu AI, including proxy configuration and domain whitelisting.
keywords:
  - run selenium tests through proxy
  - selenium c# proxy configuration
  - selenium tests behind firewall
  - proxy settings selenium grid
  - HttpCommandExecutor proxy setup
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/selenium-tests-behind-proxy/
site_name: TestMu AI
slug: selenium-tests-behind-proxy/
canonical: https://www.testmuai.com/support/docs/selenium-tests-behind-proxy/
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
          "name": "Selenium Test Behind Proxy",
          "item": `${BRAND_URL}/support/docs/selenium-tests-behind-proxy/`
        }]
      })
    }}
></script>

# How to Run Selenium Tests Behind a Proxy on TestMu AI
---

If your system is behind a proxy or protected by a firewall, you cannot run Selenium test scripts directly on the TestMu AI Selenium grid. You need to define your proxy settings so the connection goes through as usual.

This document shows you how to run your Selenium tests behind a proxy server.

## How to Define Proxy Settings in Selenium C#
---
Add the proxy host and port to the HttpCommandExecutor in your test code.

You can define proxy programmatically by adding the below snippet in your code.

```csharp
HttpCommandExecutor commandExecutor = new HttpCommandExecutor(new Uri("https://username:accesskey@hub.lambdatest.com/"), TimeSpan.FromSeconds(60));
WebProxy myproxy = new WebProxy("proxy_host:proxy_port", false);
IWebDriver driver;
```

Below is the NUnit code that shows the insertion of the above code snippet to define proxy settings.

```csharp
using System;
using System.Drawing.Text;
using System.Threading;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Remote;
using NUnit.Framework;
using System.Net;
namespace TestSelenium3
{
    public class Program
    {
        static void setProxy()
        {
            /* HttpWebRequest myWebRequest = (HttpWebRequest)WebRequest.Create("http://3.86.55.62:8888");
             // Obtain the 'Proxy' of the  Default browser.  
             IWebProxy proxy = myWebRequest.Proxy;
             // Print the Proxy Url to the console.
             if (proxy != null)
             {
                 Console.WriteLine("Proxy: {0}", proxy.GetProxy(myWebRequest.RequestUri));
             }
             else
             {
                 Console.WriteLine("Proxy is null; no proxy will be used");
             }
             */
        }
        public static void Main(String[] args)
        {
            // Init
            setProxy();
            HttpCommandExecutor commandExecutor = new HttpCommandExecutor(new Uri("https://username:accesskey@hub.lambdatest.com/"), TimeSpan.FromSeconds(60));
            commandExecutor.Proxy = new WebProxy("proxy_host:proxy_port", false);
            IWebDriver driver;
            DesiredCapabilities capabilities = new DesiredCapabilities();
            capabilities.SetCapability("build", "your build name");
            capabilities.SetCapability("name", "your test name");
            capabilities.SetCapability("platform", "Windows 10");
            capabilities.SetCapability("browserName", "Chrome");
            capabilities.SetCapability("version", "89.0");
            driver = new RemoteWebDriver(commandExecutor, capabilities);
            
            Console.WriteLine("----------------------------" + capabilities + "#####################################");
            try
            {
                /*
                                driver = new RemoteWebDriver(new Uri("https://username:accesskey@hub.lambdatest.com/"), capability);
                                    Console.WriteLine("----------------------------" + driver + "#####################################");
                */
                driver.Navigate().GoToUrl("https://www.google.com");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                Thread.Sleep(500000);
            }
        }
    }
}
```

Execute the above NUnit test scripts, and you can run your Selenium tests directly on the TestMu AI Selenium grid behind the proxy server. Proxy configuration is one of several network-level options; explore the full range of [Selenium automation capabilities](/support/docs/selenium-automation-capabilities/) to tune the rest of your session.

## Whitelist the Proxy
---

Beyond configuring proxy settings, a firewall-protected network may still block the connection to TestMu AI, and you may encounter error messages. In such scenarios, you need to whitelist the TestMu AI domain. Whitelisting tells your firewall-protected network to allow access for a set of IP addresses, IP range, or an entire domain that you trust. It is a security procedure to help users access a website or web-app that their network security team considers non-malicious.

Relay the below domain to your network security team and ask them to whitelist it so you can connect with TestMu AI from your firewall-protected network. If your setup also needs to route traffic to internal hosts, you can configure custom DNS mapping alongside your proxy. To inject authentication or routing values into every request, you can also set custom HTTP headers for the session.

| PROTOCOL | PORTS       | SOURCE                 | DESTINATION      |
|----------|-------------|------------------------|------------------|
| TCP      | 80, 443, 22 | All TestMu AI Clients | *.lambdatest.com |

If you have any questions or require an additional information, you can contact us at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span>. You can also drop us a mail at support@testmuai.com.

## Next Steps
---

Continue with these related guides:

- [Custom DNS Map](/support/docs/custom-dns-map/)
- [Custom Headers](/support/docs/custom-headers/)
- [Selenium Automation Capabilities](/support/docs/selenium-automation-capabilities/)

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
        Selenium Test Behind Proxy
      </span>
    </li>
  </ul>
</nav>
