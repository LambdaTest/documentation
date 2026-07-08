# Docker Tunnel

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

With the help of the Docker Tunnel, i.e., Docker and TestMu AI Tunnel, you can perform live interactive and automated cross-browser testing of your locally hosted webpage on the TestMu AI platform, with the help of 3000+ real browsers (desktop and mobile) and operating systems.

With Docker Tunnel, you will also be able to create multiple instances of TestMu AI Tunnel.

## Prerequisites To Get Started With TestMu AI Docker Tunnel

1. Download and set up Docker Desktop from [official Docker website](https://www.docker.com/products/docker-desktop).
2. You also need your TestMu AI Username and Access Key. You can get these from your [TestMu AI's profile](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

## How To Use Docker With TestMu AI Tunnel

Initially, you need to pull the [Docker hub image of Lambda Tunnel](https://hub.docker.com/r/lambdatest/tunnel). You can use the below command to raise the pull request.

`docker pull lambdatest/tunnel:latest`

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

* **Version Checking**: You can check the installed version of the TestMu AI Tunnel using the below command.

`docker run -it  lambdatest/tunnel --version`

* **Basic Authentication and Login**: You can login into your TestMu AI Tunnel with Docker image, with the help of below command:

`docker run -it --name lt lambdatest/tunnel --user johndoe --key XXXXXXXXXXXX`

* **Capturing logs in mounted volume on host machine**: You can capture these logs with the help of below command:

`docker run -it  -v /mydir:/logs lambdatest/tunnel --user joendoe --key XXXXXXXX --logFile /logs/tunnel.log`

* **Getting Tunnel Status**: You can fetch the current tunnel status using the Info API on the tunnel.

Suppose the InfoAPI is available on the host over port 13001, then you need to expose the docker container port to host in the form 13001:8000. Use the below command to infuse the InfoAPI in the current docker image:

`docker run -it -p 13001:8000 lambdatest/tunnel --user johndoe --key XXXXXXX  --infoAPIPort 8000`

Now, in order to fetch the current tunnel status, just execute the below command:

`curl http://127.0.0.1:13001/api/v1.0/info`

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

## How To Make Use Of TestMu AI Tunnel With Docker Image For Development

By default TestMu AI tunnel can no longer access web apps running on host machines or other docker containers using *localhost* or *127.0.0.1* when you run it using docker container. This means that the test scripts need to be modified in a way that they can access the target web app, according to the docker network topology and host operating system.

**For Linux Machines:**

On Linux, containers can run in a special network mode called host. This network mode makes the container use host's network stack and doesn't create an isolated one for the containers. Running the following command makes the tunnel containers run with host networking and can access the host's network. The test scripts can access services running on the host machine using the localhost.

`docker run -it  --network host lambdatest/tunnel --user johndoe --key XXXXXXXXXXXX`

**For Mac and Windows Machines:**

Unfortunately, on both mac and windows, host networking mode is not available due to docker-machine implementation. The recommended approach to access services on the host machine is to use a special hostname *host.docker.internal*, which resolves to the host machine.

> You can find more details on these, using [this link](https://docs.docker.com/docker-for-mac/networking/) for Mac, and [this link](https://docs.docker.com/docker-for-windows/networking/) for Windows respectively.

The test scripts need to use this special hostname to access the web services running on the host machine. The most idiomatic way of testing docker infra is creating a custom bridge network and access services using their container names. This method works on all operating systems.

## Conclusion

Test your locally hosted pages and privately hosted pages at TestMu AI [Selenium Test Automation](https://www.testmuai.com/selenium-automation/) Platform using Docker Tunnel, via SSH based integration tunnel. If you still have any doubts or questions, please don't hesitate to contact us. Our experts are available on **24/7 chat support**. You can also drop us a mail at [support@testmuai.com](mailto:support@testmuai.com).

Happy testing! ??
