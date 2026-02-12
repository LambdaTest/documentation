---
id: docker-tunnel
title: Localhost Testing With Docker Tunnel
hide_title: true
sidebar_label: Docker Tunnel
description: Now you can use Docker image to perform live interactive and automated cross-browser testing of your locally hosted webpage on the TestMu AI platform.
keywords:
  - local app testing
  - testmu ai local testing
  - testmu ai local tunnel
  - TestMu AI tunnel
  - local app testing for linux
  - ssh connection
  - shared ssh
  - secure-shell-tunnel
  - docker compose ssh tunnel
  - docker vpn tunnel
url: https://www.testmuai.com/support/docs/docker-tunnel/
site_name: TestMu AI
slug: docker-tunnel/
canonical: https://www.testmuai.com/support/docs/docker-tunnel/
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
          "name": "Docker Tunnel",
          "item": `${BRAND_URL}/support/docs/docker-tunnel/`
        }]
      })
    }}
></script>

# Docker Tunnel

***
With the help of the Docker Tunnel, i.e., Docker and <BrandName /> Tunnel, you can perform live interactive and automated cross-browser testing of your locally hosted webpage on the <BrandName /> platform, with the help of 3000+ real browsers (desktop and mobile) and operating systems.

With Docker Tunnel, you will also be able to create multiple instances of <BrandName /> Tunnel.

## Prerequisites To Get Started With <BrandName /> Docker Tunnel

* * *

1. Download and set up Docker Desktop from [official Docker website](https://www.docker.com/products/docker-desktop).
2. You also need your <BrandName /> Username and Access Key. You can get these from your [<BrandName />�s profile](https://accounts.lambdatest.com/detail/profile).

## How To Use Docker With <BrandName /> Tunnel

* * *

Initially, you need to pull the [Docker hub image of Lambda Tunnel](https://hub.docker.com/r/lambdatest/tunnel). You can use the below command to raise the pull request.

`docker pull lambdatest/tunnel:latest`

<img loading="lazy" src={require('../assets/images/docker-tunnel/raise-the-pull-request.webp').default} alt="Image" width="756" height="169" className="doc_img"/>

In order to pull the other docker images from the hub, use the below command:

* **Legacy Alpine:**
`docker pull lambdatest/tunnel:legacy-alpine`

* **Alpine:**
`docker pull lambdatest/tunnel:alpine`

* **Legacy:**
`docker pull lambdatest/tunnel:legacy`

* **Burrow:**
`docker pull lambdatest/tunnel:burrow`

This image supports all the [tunnel modifier flags](/docs/lambda-tunnel-modifiers/) available in the tunnel command-line binary and passes them as the entry point. Let us see some of them:

* **Version Checking**: You can check the installed version of the <BrandName /> Tunnel using the below command.

`docker run -it  lambdatest/tunnel --version`

<img loading="lazy" src={require('../assets/images/docker-tunnel/version-tracking.webp').default} alt="Image" width="732" height="91" className="doc_img"/>

* **Basic Authentication and Login**: You can login into your <BrandName /> Tunnel with Docker image, with the help of below command:

`docker run -it --name lt lambdatest/tunnel --user johndoe --key XXXXXXXXXXXX`

<img loading="lazy" src={require('../assets/images/docker-tunnel/Basic-Authentication-and-Login.webp').default} alt="Image" width="1534" height="179" className="doc_img"/>

* **Capturing logs in mounted volume on host machine**: You can capture these logs with the help of below command:

`docker run -it  -v /mydir:/logs lambdatest/tunnel --user joendoe --key XXXXXXXX --logFile /logs/tunnel.log`

<img loading="lazy" src={require('../assets/images/docker-tunnel/Capturing-logs.webp').default} alt="Image" width="1540" height="169" className="doc_img"/>

* **Getting Tunnel Status**: You can fetch the current tunnel status using the Info API on the tunnel.

Suppose the InfoAPI is available on the host over port 13001, then you need to expose the docker container port to host in the form 13001:8000. Use the below command to infuse the InfoAPI in the current docker image:

`docker run -it -p 13001:8000 lambdatest/tunnel --user johndoe --key XXXXXXX  --infoAPIPort 8000`

<img loading="lazy" src={require('../assets/images/docker-tunnel/Getting-Tunnel-Status.webp').default} alt="Image" width="1534" height="176" className="doc_img"/>

Now, in order to fetch the current tunnel status, just execute the below command:

`curl http://127.0.0.1:13001/api/v1.0/info`

<img loading="lazy" src={require('../assets/images/docker-tunnel/docker-tunnel-status.webp').default} alt="Image" width="1533" height="168" className="doc_img"/>

* You can also use **Proxy running on host machine at port 8082 having foo and bar as username and key** as per the example shown below:

`docker run -it lambdatest/tunnel --user johndoe --key XXXXXXX  --proxy-host host.docker.internal  --proxy-port 8082 --proxy-user foo --proxy-pass bar`

* You can also use Proxy running on another docker container within same default bridge network, assuming the container in which proxy is running has IP 172.17.0.2.

> Note: The IP can be found from inside of the container or by inspecting the network to which container is attached.

Consider the below example:

`docker run -it lambdatest/tunnel --user johndoe --key XXXXXXX  --proxy-host 172.17.0.2  --proxy-port 8082 --proxy-user foo --proxy-pass bar`

* You can also use Proxy running on another docker container within same custom bridge network, assuming the container in which proxy is running has IP 172.17.0.2.

> Note: When you create custom network, containers can reach each other using container names due to automatic service discovery. Assuming that custom-network already exists and container named proxy-service has a proxy server running.

Consider the below example:

`docker run -it lambdatest/tunnel --user johndoe --key XXXXXXX  --proxy-host proxy-service  --proxy-port 8082 --proxy-user foo --proxy-pass bar`

* In order to stop the Docker tunnel, you can use the above mentioned InfoAPI, according to the command shown below:

`curl -X DELETE http://127.0.0.1:13001/api/v1.0/stop`

<img loading="lazy" src={require('../assets/images/docker-tunnel/info-api.webp').default} alt="Image" width="909" height="167" className="doc_img"/>

## How To Make Use Of <BrandName /> Tunnel With Docker Image For Development

* * *

By default <BrandName /> tunnel can no longer access web apps running on host machines or other docker containers using *localhost* or *127.0.0.1* when you run it using docker container. This means that the test scripts need to be modified in a way that they can access the target web app, according to the docker network topology and host operating system.

**For Linux Machines:**

On Linux, containers can run in a special network mode called host. This network mode makes the container use host�s network stack and doesn�t create an isolated one for the containers. Running the following command makes the tunnel containers run with host networking and can access the host�s network. The test scripts can access services running on the host machine using the localhost.

`docker run -it  --network host lambdatest/tunnel --user johndoe --key XXXXXXXXXXXX`

**For Mac and Windows Machines:**

Unfortunately, on both mac and windows, host networking mode is not available due to docker-machine implementation. The recommended approach to access services on the host machine is to use a special hostname *host.docker.internal*, which resolves to the host machine.

> You can find more details on these, using [this link](https://docs.docker.com/docker-for-mac/networking/) for Mac, and [this link](https://docs.docker.com/docker-for-windows/networking/) for Windows respectively.

The test scripts need to use this special hostname to access the web services running on the host machine. The most idiomatic way of testing docker infra is creating a custom bridge network and access services using their container names. This method works on all operating systems.

## Conclusion
* * *
Test your locally hosted pages and privately hosted pages at <BrandName /> [Selenium Test Automation](https://www.lambdatest.com/selenium-automation/) Platform using Docker Tunnel, via SSH based integration tunnel. If you still have any doubts or questions, please don�t hesitate to contact us. Our experts are available on <span className="doc__lt"�onClick={()�=>�window.openLTChatWidget()}>**24/7 chat support**</span>. You can also drop us a mail at [support@testmuai.com](mailto:support@testmuai.com).

Happy testing! ??

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
        Docker Tunnel
      </span>
    </li>
  </ul>
</nav>
