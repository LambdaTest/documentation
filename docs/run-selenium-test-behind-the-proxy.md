---
id: run-selenium-test-behind-the-proxy
title: Run Selenium Tests Behind The Proxy | TestMu AI
hide_title: true
sidebar_label: Run Selenium Tests Behind The Proxy
description: This documentation will help you run Selenium test scripts if your system is behind a proxy or have a firewall configuration.
keywords:
- how do i run selenium tests through a proxy
- run selenium tests behind proxy
- run selenium c# test script
- run selenium tests behind firewall
url: https://www.testmuai.com/support/docs/selenium-tests-behind-proxy/
site_name: TestMu AI
slug: selenium-tests-behind-proxy/
canonical: https://www.testmu.ai/support/docs/selenium-tests-behind-proxy/
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

# Run Selenium Tests Behind The Proxy
* * *

If your system is behind a proxy or protected by a firewall, you will not be able to run the Selenium test scripts directly on the <BrandName /> Selenium grid. You need to define your proxy settings so that the connection goes through as usual.

This documentation will help you run your Selenium test behind a proxy server.

## How To Define Proxy Settings in Selenium C#?

* * *

You can define proxy programmatically by adding the below snippet in your code.

```javascript
HttpCommandExecutor commandExecutor = new HttpCommandExecutor(new Uri("https://username:accesskey@hub.lambdatest.com/"), TimeSpan.FromSeconds(60));
WebProxy myproxy = new WebProxy("proxy_host:proxy_port", false);
IWebDriver driver;
```

Below is the NUnit code that shows the insertion of the above code snippet to define proxy settings.

```javascript
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

Execute the above NUnit test scripts, and you’ll be able to run your Selenium tests directly on the <BrandName /> Selenium grid behind the proxy server.

If you have any questions or require an additional information, you can contact us at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span>. You can also drop us a mail at support@testmu.ai.

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
