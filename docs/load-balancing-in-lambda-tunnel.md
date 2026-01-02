---
id: load-balancing-in-lambda-tunnel
title: How To Use Load Balancing In TestMu AI Tunnel
hide_title: true
sidebar_label: Load Balancing In TestMu AI Tunnel
description: Load Balancing feature allows you to perform parallel testing of your local or private website on 3000+ TestMu AI's real browsers through TestMu AI Tunnel.
keywords:
- load balancing
- what is load balancing
- testmu ai tunnel load balancing
- load balancing in testmu ai
- tunnel load balancing
- load balanced testmu ai tunnel
- load balanced tunnel
- testmu ai load balancing
url: https://www.testmu.ai/support/docs/load-balancing-in-lambda-tunnel
site_name: LambdaTest
slug: load-balancing-in-lambda-tunnel
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Load Balancing In LambdaTest Tunnel",
          "item": `${BRAND_URL}/support/docs/load-balancing-in-lambda-tunnel/`
        }]
      })
    }}
></script>

# Parallel Testing Of Locally Hosted Pages Using Load Balancing In <BrandName /> Tunnel

***
Load Balancing feature allows you to perform parallel testing of your locally hosted or privately hosted website or web app on 3000+ real browsers through <BrandName /> Tunnel. The Tunnels created under this feature will act as a single pool for the tests and thereby will help in performing parallel testing on the <BrandName /> platform.

## How To Activate Load Balancing In <BrandName /> Tunnel?

* * *

The Load Balancing in [<BrandName /> Tunnel](/docs/testing-locally-hosted-pages/) is achieved with the help of load balanced tunnel modifier, used as shown in the below syntax:

`--load-balanced`

Now to activate the Load Balancing feature in the <BrandName /> Tunnel, create more than one tunnel with the same name and Load Balancing tunnel modifier. It means that, we need to open more than one tunnel binary and use the below command in each of them:

`LT --user username --key access_key --tunnelName SampleTunnel --load-balanced`

>
To get your <BrandName /> Username and Access Key, visit your <BrandName /> automation dashboard and click on the "key" icon, present on the left to the help button, on the top right corner.
<img loading="lazy" src={require('../assets/images/load-balancing-in-lambda-tunnel/load-balancing-1.webp').default} alt="Load Balancing In <BrandName /> Tunnel" width="462" height="325" className="doc_img"/>

For example, in the below screenshot, you can see two tunnels activated in the Load Balanced mode, using the above syntax:

<img loading="lazy" src={require('../assets/images/load-balancing-in-lambda-tunnel/Activating-load-balanced-lambda-tunnel.webp').default} alt="Load Balancing In <BrandName /> Tunnel" width="1281" height="772" className="doc_img"/>

Now when you will go to you <BrandName /> dashboard, you will find both the tunnels active with same name, stating that the tunnels are load balanced.

<img loading="lazy" src={require('../assets/images/load-balancing-in-lambda-tunnel/Load-balanced-tunnels-activated.webp').default} alt="Load Balancing In <BrandName /> Tunnel" width="1282" height="721" className="doc_img"/>

## Parallel Testing Using Load Balanced <BrandName /> Tunnel

* * *

After activating the load balanced tunnels, all you need to do is to pass the "tunnel" capability as true in your automation test script. This will automatically run your tests in parallel by taking advantage of the Load Balancing.

>
Please note that you do not need to set the "tunnelName" capability as the tunnel name will be automatically managed from active tunnels in your profile.

For example, here is the Automation Logs view of the test run using the Load Balancing feature of <BrandName /> Tunnel.

<img loading="lazy" src={require('../assets/images/load-balancing-in-lambda-tunnel/Load-balancing-demo.webp').default} alt="Load Balancing In <BrandName /> Tunnel" width="1281" height="722" className="doc_img"/>

As you can see, 10 tests have been executed in Parallel in 8.33 minutes due to the advantage of Load Balanced <BrandName /> Tunnel, which otherwise would have taken much longer.

## How To Stop The Active Load Balanced Tunnels?

* * *

You can stop the active load balanced <BrandName /> Tunnels with the help of Tunnel sessions info. To do so, first you need to click on View All button in the Active Tunnel list, as shown below:

<img loading="lazy" src={require('../assets/images/load-balancing-in-lambda-tunnel/view-all-active-tunnels.webp').default} alt="Load Balancing In <BrandName /> Tunnel" width="1281" height="721" className="doc_img"/>

Then in the Tunnel Sessions info, you can see all the active tunnels with their information, active state and a Stop button to stop the corresponding active tunnel.

Just press on this Stop button against the tunnel you want to stop, and it will end the tunnel session right away.

<img loading="lazy" src={require('../assets/images/load-balancing-in-lambda-tunnel/stop-button.webp').default} alt="Load Balancing In <BrandName /> Tunnel" width="1281" height="721" className="doc_img"/>

* * *
>
That’s all! You can now successfully activate and use the Load Balancing feature of <BrandName /> Tunnel, to test your locally hosted website in parallel. If you still have any questions, feel free to share them with us through our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24*7 Chat Portal**</span> or by mailing to us on [**support@lambdatest.com**](mailto:support@lambdatest.com). <br /> Happy testing! 

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
        Load Balancing
      </span>
    </li>
  </ul>
</nav>
