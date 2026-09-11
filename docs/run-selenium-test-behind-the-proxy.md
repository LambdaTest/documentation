---
id: run-selenium-test-behind-the-proxy
title: Run Selenium Tests Behind the Proxy
sidebar_label: Run Tests Behind a Proxy
description: Define proxy settings in your Selenium C# scripts to run tests on the cloud grid behind a proxy server.
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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/selenium-tests-behind-proxy/"
    },
    "headline": "Run Selenium Tests Behind the Proxy",
    "description": "Define proxy settings in your Selenium C# scripts to run tests on the cloud grid behind a proxy server.",
    "url": "https://www.testmuai.com/support/docs/selenium-tests-behind-proxy/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "run selenium tests through proxy",
      "selenium c# proxy configuration",
      "selenium tests behind firewall"
    ],
    "proficiencyLevel": "Beginner",
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
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "How to Define Proxy Settings in Selenium C#",
        "codeSampleType": "code snippet",
        "programmingLanguage": "C#",
        "text": "HttpCommandExecutor commandExecutor = new HttpCommandExecutor(new Uri(\"https://username:accesskey@hub.lambdatest.com/\"), TimeSpan.FromSeconds(60));\nWebProxy myproxy = new WebProxy(\"proxy_host:proxy_port\", false);\nIWebDriver driver;"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "How to Define Proxy Settings in Selenium C#",
        "codeSampleType": "code snippet",
        "programmingLanguage": "C#",
        "text": "using System;\nusing System.Drawing.Text;\nusing System.Threading;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Chrome;\nusing OpenQA.Selenium.Remote;\nusing NUnit.Framework;\nusing System.Net;\nnamespace TestSelenium3\n{\n    public class Program\n    {\n        static void setProxy()\n        {\n            /* HttpWebRequest myWebRequest = (HttpWebRequest)WebRequest.Create(\"http://3.86.55.62:8888\");\n             // Obtain the 'Proxy' of the  Default browser.  \n             IWebProxy proxy = myWebRequest.Proxy;\n             // Print the Proxy Url to the console.\n             if (proxy != null)\n             {\n                 Console.WriteLine(\"Proxy: {0}\", proxy.GetProxy(myWebRequest.RequestUri));\n             }\n             else\n             {\n                 Console.WriteLine(\"Proxy is null; no proxy will be used\");\n             }\n             */\n        }\n        public static void Main(String[] args)\n        {\n            // Init\n            setProxy();\n            HttpCommandExecutor commandExecutor = new HttpCommandExecutor(new Uri(\"https://username:accesskey@hub.lambdatest.com/\"), TimeSpan.FromSeconds(60));\n            commandExecutor.Proxy = new WebProxy(\"proxy_host:proxy_port\", false);\n            IWebDriver driver;\n            DesiredCapabilities capabilities = new DesiredCapabilities();\n            capabilities.SetCapability(\"build\", \"your build name\");\n            capabilities.SetCapability(\"name\", \"your test name\");\n            capabilities.SetCapability(\"platform\", \"Windows 10\");\n            capabilities.SetCapability(\"browserName\", \"Chrome\");\n            capabilities.SetCapability(\"version\", \"89.0\");\n            driver = new RemoteWebDriver(commandExecutor, capabilities);\n            \n            Console.WriteLine(\"----------------------------\" + capabilities + \"#####################################\");\n            try\n            {\n                /*\n                                driver = new RemoteWebDriver(new Uri(\"https://username:accesskey@hub.lambdatest.com/\"), capability);\n                                    Console.WriteLine(\"----------------------------\" + driver + \"#####################################\");\n                */\n                driver.Navigate().GoToUrl(\"https://www.google.com\");\n            }\n            catch (Exception e)\n            {\n                Console.WriteLine(e);\n                Thread.Sleep(500000);\n            }\n        }\n    }\n}"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

# Run Selenium Tests Behind the Proxy
* * *

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

Execute the above NUnit test scripts, and you can run your Selenium tests directly on the TestMu AI Selenium grid behind the proxy server.

If you have any questions or require an additional information, you can contact us at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span>. You can also drop us a mail at support@testmuai.com.

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
