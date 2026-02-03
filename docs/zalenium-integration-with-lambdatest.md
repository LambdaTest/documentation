---
id: zalenium-integration-with-lambdatest
title: Zalenium Integration With TestMu AI
sidebar_label: Zalenium 
description: TestMu AI integration with Zalenium will allow you perform automated cross browser testing for your locally hosted web pages for over 3000+ real browser and browser versions, installed and hosted on-cloud.
keywords:
  - Zelenium
  - testmu ai intigration with zelenium
  - cross browser testing
  - zelenium dashboard
  - automation on zelenium 
url: https://www.testmuai.com/support/docs/zalenium-integration-with-testmu/
site_name: LambdaTest
slug: zalenium-integration-with-testmu/
canonical: https://www.testmuai.com/support/docs/zalenium-integration-with-testmu/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

-----------------------------------------------------------------------------------------------------------------------------
Brought up by Zalando, Zalenium is open-source with the vision to eliminate the hassle of maintaining an in-house [Selenium Grid](https://www.lambdatest.com/blog/why-selenium-grid-is-ideal-for-automated-browser-testing/). Zalenium does so by offering a Docker-based Selenium Grid on-cloud that gets auto-updated with the latest browsers and their driver versions.

Zalenium offers capabilities to help you define your Desired Capabilities in your test automation suite. Zalenium also provides an intuitive dashboard representing all the detailed logs of your test script execution. Using Zalenium, you can even perform automation testing over your locally hosted web pages. However, you would only be able to perform automated cross browser testing over the browsers installed on your machine.

<BrandName /> integration with Zalenium will help you perform automated cross browser testing for your locally hosted web pages for over 3000+ real browser and browser versions, installed, and hosted on-cloud.

## Prerequisites
-----------------------------------------------------------------------------------------------------------------------------
* Ensure you have a Zalenium Docker setup.
* **<BrandName /> Authentication Credentials**

   Be aware of your <BrandName /> authentication credentials i.e., your <BrandName /> username, access key, and HubURL. You need to set them up as your environment variables. You can retrieve them from your **[<BrandName /> automation dashboard](https://automation.lambdatest.com/timeline/?viewType=build&page=1)** by clicking on the key icon near the help button.
* For Linux/Mac:  
    ```
    $ export LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}
    $ export LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}
    ```
* For Windows: 
    ```
    $ set LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}
    $ set LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}
    ```
## Specify <BrandName /> Environment Variables Into Zalenium Docker
-----------------------------------------------------------------------------------------------------------------------------
Declare your <BrandName /> environment variable into your respective Zalenium Docker over which you wish to perform automated cross browser testing. Below is an example code representing what you need to declare in your Zalenium Docker.

```
export LT_USERNAME=<your username>
    export LT_ACCESS_KEY=<your accessKey>
    export LT_URL=<your LT url : port number> # default value is "https://hub.lambdatest.com"
    docker run --rm -ti --name zalenium -p 4444:4444 \
      -e LT_USERNAME -e LT_ACCESS_KEY -e LT_URL \
      -v /tmp/videos:/home/seluser/videos \
      -v /var/run/docker.sock:/var/run/docker.sock \
      --privileged dosel/zalenium start --lambdaTestEnabled true
```
Kudos! As simple as that, you have integrated Zalenium with the <BrandName /> account. In case you have any questions, feel free to let us know by dropping an email at [support@testmu.ai][2], or just giving a shout to our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span>. Happy testing! 🙂

[1]: https://automation.lambdatest.com
[2]: mailto:support%40lambdatest.com

  
