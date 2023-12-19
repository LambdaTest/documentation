---
id: tas-self-hosted-installation
title: Installation
hide_title: true
sidebar_label: Installation
description: Installation steps for TAS self hosted.
keywords:
  - LambdaTest TAS
  - Test at Scale
  - TAS - Installation
  - TAS - Self Hosted
url: https://www.lambdatest.com/support/docs/
site_name: LambdaTest
slug: tas-self-hosted-installation/
---

# Installation
***
You can deploy test-at-scale in multiple ways on your infrastructure. We've engineered the platform such that you can setup the system anywhere, from your local workstation to any cloud (AWS, Azure, GCP etc), as per your convenience.  

In order to get started and self host test-at-scale follow the steps given below:

## Prerequisites
***
### 1. Getting the LambdaTest Secret Key

- [Login](https://tas.lambdatest.com/login/) into your TAS account. Select your organisation and select TAS Self Hosted. <br/>(**Note**: The TAS mode selection window will come only once for an organisation).
- After this you should see your **LambdaTest Secret Key** on the next screen.
- Keep this key securely with you and do not share it with anyone as it would be required in the following steps. 

<p align="center">
<img loading="lazy" src={require('../assets/images/tas/synapse.gif').default} alt="Synapse Architecture" width="1340" height="617" className="doc_img"/>
</p>
<br/>

### 2. Getting the Git Token 
A git token is required to clone your repositories to your self hosted environments while running the test execution jobs. 
- Generating [GitHub](/docs/tas-how-to-guides-gh-token/) personal access token.
- Generating [GitLab](/docs/tas-how-to-guides-gl-token/) personal access token.
- Generating [Bitbucket](/docs/tas-how-to-guides-bb-token/) personal access token.

<br/>

## Step 1 : Creating a configuration file
***
Before installation we need to create a file that will be used for configuring test-at-scale. 

- Open any **Terminal** of your choice.
- Move to your desired directory or you can create a new directory and move into it.
- Then download our **sample configuration file** using the given command.

```bash
mkdir ~/test-at-scale
cd ~/test-at-scale
```
```bash
curl https://raw.githubusercontent.com/LambdaTest/test-at-scale/main/.sample.synapse.json -o .synapse.json
```
- Open the downloaded **.synapse.json**  configuration file in any editor of your choice. The downloaded sample file will contain values for some parameters already.
- Add both of the following parameters into your **.synapse.json** file: 
  1. **LambdaTest Secret Key** that you got after login. [Can't find it?](/docs/tas-self-hosted-installation#prerequisites).
  2. **Git Token** that you have already generated. [Can't find git tokens?](/docs/tas-self-hosted-installation#2-getting-the-git-token). 
  3. Do not change the predefined **ContainerRegistry** settings inside this file

Other **optional** parameters such as **Repository Secrets** etc that might be required in configuring test-at-scale on your local/self-hosted environment can also be added in this file. You can learn more about the configuration options [here](/docs/tas-self-hosted-configuration#parameters).

<br/>

## Step 2 : Installation
***
### Installation on Docker

#### Prerequisites
- [Docker](https://docs.docker.com/get-docker/) and [Docker-Compose](https://docs.docker.com/compose/install/) (Recommended)

> **NOTE:** **Docker Desktop for Mac and windows** includes Docker-Compose along with other Docker desktop, so you do not need to install Compose separately.

#### Docker Compose
- Run the docker application. 
- **NOTE:** In order to run test-at-scale you require a minimum configuration of 2 CPU cores and 4 GBs of RAM.
- Execute the following command to ensure that resources usable by Docker are atleast **CPU: 2, RAM: 4294967296**.

```bash
docker info --format "CPU: {{.NCPU}}, RAM: {{.MemTotal}}"
```

- The **.synapse.json** configuration file made in [Step 1](/docs/tas-self-hosted-installation#step-1--creating-a-configuration-file) above, will be required before executing the next command.
- Run the docker compose file using the following command.
  
```bash
cd ~/test-at-scale
curl -L https://raw.githubusercontent.com/LambdaTest/test-at-scale/main/docker-compose.yml -o docker-compose.yml
docker-compose up -d
```

> **NOTE:** This docker-compose file will pull the latest version of test-at-scale and install on your self hosted environment.


### Learn more

- [Docker basic commands](https://docs.docker.com/engine/reference/commandline/docker/)
- [Docker-Compose basic commands](https://docs.docker.com/engine/reference/commandline/compose/)
- [TAS Self-Hosted Basic Troubleshooting](/docs/tas-faq-and-troubleshooting/)

<br/>

#### Without Docker Compose
To get up and running quickly, you can use the following instructions to setup Test at Scale on Self hosted environment without docker-compose.


- Create a configuration file using [these steps](/docs/tas-self-hosted-installation#step-1--creating-a-configuration-file).
- Execute the following command to run Test at Scale docker container

```bash
docker network create --internal test-at-scale
docker run --name synapse --restart always \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v /tmp/synapse:/tmp/synapse \
    -v ${PWD}/.synapse.json:/home/synapse/.synapse.json \
    -v /etc/machine-id:/etc/machine-id \
    --network=test-at-scale \
    lambdatest/synapse:latest
```
    
> **WARNING:** We strongly recommend to use docker-compose while Test at Scale on Self hosted environment.

<br/>

### AWS
***

#### Prerequisites
- [AWS Account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)

#### Create a key pair
- Follow [these](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair) steps to create a key pair.

> **NOTE:** You can skip this step if you already have a key-pair.

#### Create AWS Security Groups
- Synapse needs to initiate the connection to the TAS server to fetch the jobs. Make sure the security group allows outbound traffic to `wss://tas.lambdatest.com`.
- Follow [these](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#creating-security-group) steps to create a new security group.

> **NOTE:** You can skip this step if you already have a security group which allows outbound traffic to `wss://tas.lambdatest.com`.

#### Launch EC2 Instance
- Follow [these](https://docs.aws.amazon.com/efs/latest/ug/gs-step-one-create-ec2-resources.html) steps to create and launch ec2 instance.

> **NOTE:** Make sure to select the security group which allows outbound traffic to `wss://tas.lambdatest.com`

#### Running Synapse
- Once the instance is up and running SSH into your instance and deploy synapse on EC2 instance using [docker-compose](/docs/tas-self-hosted-installation#installation-on-docker)

<br/>

### GCP
***

#### Prerequisites
- [GCP Account](https://cloud.google.com/gcp/)

#### Create a key pair
- Follow [these](https://cloud.google.com/compute/docs/connect/create-ssh-keys) steps to create a key pair.

> **NOTE:** you can skip this step if you already have a key-pair.

#### Add firewall rules
- Synapse needs to initiate the connection to the TAS server to fetch the jobs. Make sure the firewall rules allows outbound traffic to `wss://tas.lambdatest.com`.
- Follow [these](https://cloud.google.com/vpc/docs/using-firewalls) to create new firewall rules.

> **NOTE:** You can skip this step if you already have firewall rules which allows outbound traffic to `wss://tas.lambdatest.com`.

#### Launch compute instance
- Follow [these](https://cloud.google.com/compute/docs/instances/create-start-instance) steps to create and launch compute instance in GCP.

> **NOTE:** Make sure firewall is attached with compute instance by mentioning them in network tags

#### Running Synapse
- Once the instance is up and running SSH into your instance and deploy synapse on compute instance using [docker-compose](/docs/tas-self-hosted-installation#installation-on-docker)

<br/>

### Azure
***

#### Prerequisites
- [Azure Account](https://azure.microsoft.com/en-gb/)

#### Create a key pair
- Follow [these](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys) steps if you are **Linux** or **Mac** user.
- Follow [these](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/ssh-from-windows) steps if you are **Windows** user

> **NOTE:** you can skip this step if you already have a key-pair.

#### Create Azure Security Group
- Synapse needs to initiate the connection to the TAS server to fetch the jobs. Make sure the security groupallows outbound traffic to `wss://tas.lambdatest.com`.
- Follow [these](https://docs.microsoft.com/en-us/azure/virtual-network/network-security-group-how-it-works) to create new firewall rules.

> **NOTE:** you can skip this step if you already have the security group which allows outbound traffic to `wss://tas.lambdatest.com`.

#### Launch virtual machine
- Follow [these](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-portal) steps to create and launch VM instance in Azure.

#### Running Synapse
- Once the instance is up and running SSH into your instance and deploy synapse on vm instance using [docker-compose](/docs/tas-self-hosted-installation#installation-on-docker)
