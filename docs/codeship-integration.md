---
id: codeship-integration
title: Codeship Integration With TestMu AI
hide_title: true
sidebar_label: Codeship
description: TestMu AI offers continuous integration with Codeship to ease your automated cross browser testing process through their Selenium grid consisting more than 3000+ browsers.
keywords:
  - testmu ai integrations
  - continuous integration
  - codeship
  - codeship integration
  - testmu ai codeship integration
url: https://www.testmu.ai/support/docs/codeship-integration-with-testmu
site_name: LambdaTest
slug: codeship-integration-with-testmu
canonical: https://www.testmu.ai/support/docs/codeship-integration-with-testmu/
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
          "name": "Codeship Integration",
          "item": `${BRAND_URL}/support/docs/codeship-integration-with-testmu/`
        }]
      })
    }}
></script>

# Selenium Testing With Concourse CI And <BrandName />
* * *
Codeship is a scalable, cloud-based platform for continuous integration that offers GitHub, Bitbucket, and GitLab projects support. There are two versions of Codeship, Codeship Basic and Codeship Pro. Codeship Basic instantly provides robust VMs along with technology stacks being preinstalled to help run your CI/CD pipeline faster. Keep in mind, though, the primary purpose of Codeship Basic is to develop applications with general workflows by UI. It doesn’t offer support for dockers.

<BrandName /> now integrates with Codeship to boost your go-to-market delivery. Perform automated cross browser testing with <BrandName /> to ensure your development code renders seamlessly through an online [Selenium grid](https://www.lambdatest.com/blog/why-selenium-grid-is-ideal-for-automated-browser-testing/) providing 3000+ real browsers running through machines on the cloud. Perform automation testing in parallel with <BrandName />’s Selenium grid to trim down your test cycles drastically.

## Prerequisites
***
1. Signing details of Codeship
2. A GitHub repository. Here is our sample GitHub repository for [Codeship Basic](https://github.com/LambdaTest/protractor-selenium-codeship-basic).
3. **<BrandName /> Authentication Credentials**   
    Be aware of your <BrandName /> authentication credentials i.e. your <BrandName /> username, access key and HubURL. You need to set them up as your environment variables. You can retrieve them from your [<BrandName /> automation dashboard](https://automation.lambdatest.com/) by clicking on the key icon near the help button.

    * **For Linux/Mac:**

    ```
    $ export LT_USERNAME= `{YOUR_LAMBDATEST_USERNAME}`
    
    $ export LT_ACCESS_KEY= `{YOUR_LAMBDATEST_ACCESS_KEY}`
    ```

    * **For Windows:**

    ```
    $ set LT_USERNAME= `{YOUR_LAMBDATEST_USERNAME}`
    
    $ set LT_ACCESS_KEY= `{YOUR_LAMBDATEST_ACCESS_KEY}`
    ```

    

## Integrating Codeship With <BrandName />
***
**Step 1:** Sign up on Codeship with your GitHub account, and create a **"New Project."**

<img loading="lazy" src={require('../assets/images/codeship-integration/codeship.webp').default} alt="Sign up on Codeship" width="1365" height="650" className="doc_img"/>

**Step 2:** Select GitHub as your SCM.

<img loading="lazy" src={require('../assets/images/codeship-integration/codeship-1.webp').default} alt="Select GitHub as your SCM" width="1346" height="647" className="doc_img"/>

**Step 3:** Provide your GitHub organization and your GitHub repository, then hit **Connect.**

<img loading="lazy" src={require('../assets/images/codeship-integration/codeship-2.webp').default} alt="Provide your GitHub organization" width="1344" height="649" className="doc_img"/>

**Step 4:** Now, you need to opt for **"Codeship Basic"** as your project type by clicking on **"Select Basic Project."**

<img loading="lazy" src={require('../assets/images/codeship-integration/codeship-3.webp').default} alt="opt for Codeship Basic" width="798" height="415" className="doc_img"/>

**Step 5:** You will be redirected to a screen of **Project Settings.** Select the technology to prepopulate basic commands with respect to your tests.
For the below demonstration, we will be using Protractor, so you can select Node.js. Now, enter the commands below in setup.

```
#nvm install 0.10
npm install
npm install -g protractor
```

**Step 6:** Create a new pipeline in the section **"Configure Test Pipelines."** Use the below command to connect it with your **GitHub repository** by replacing the **GitHubOrganization & reponame** with the input's values.

```
cd /home/rof/src/github.com/<GitHubOrganization>/<reponame>/conf 
protractor single.conf.js 
```

**Step 7:** Provide your <BrandName /> authentication credentials in the **Environment Variables** and hit the **"Save and go to Dashboard"** button.

That is it! Now, any changes you commit in your GitHub repository will trigger the build in Codeship and run your test on <BrandName /> Selenium Grid.

## Testing Locally Hosted or Privately Hosted Projects
***
To help you perform [cross browser testing](https://www.lambdatest.com) of your locally stored web pages, <BrandName /> provides an SSH(Secure Shell) tunnel connection with the name Lambda Tunnel. With Lambda Tunnel, you can execute a test server inside your GitLab CI build a container to perform automated cross browser testing on browsers offered by Selenium grid on <BrandName />. So you make sure how well your changes look, even before your customers.
Curious to know more about Lambda Tunnel?


>Follow our documentation on Lambda Tunnel to know it all. OS-specific instructions to download and set up tunnel binary are at the following links.
>
>- [Documentation For Windows User](/docs/local-testing-for-windows/)
>- [Documentation For Mac User](/docs/local-testing-for-macos/)
>- [Documentation For Linux User](/docs/local-testing-for-linux/)

>**Download the binary file of:**
>
>- [Lambda Tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
>- [Lambda Tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
>- [Lambda Tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

The below example of **pipelinecommand** would demonstrate you to leverage <BrandName /> Selenium Grid by performing cross browser testing through the test server contained in your Codeship build.
Create two pipelines with the following commands:

**Pipeline 1**

```
#Downloading tunnel binary
<!--For Linux-->
wget http://downloads.lambdatest.com/tunnel/linux/64bit/LT_Linux.zip 
<!--For MacOS-->
wget http://downloads.lambdatest.com/tunnel/mac/64bit/LT_Mac.zip         
<!--For Windows-->
wget http://downloads.lambdatest.com/tunnel/windows/64bit/LT_Windows.zip
#Extracting tunnel binary
sudo apt-get install unzip
unzip LT_Linux.zip
#Executing tunnel binary
./LT -user <username> -key <AccessKey>
```

**Pipeline 2**

```
sleep 90
cd /home/rof/src/github.com/<GitHubOrganization>/<reponame>/conf
protractor local.conf.js
```

The setup command will be the same as mentioned earlier under the "Integration With Codeship" section. After then commit any changes into the repository and get your test run using <BrandName /> Tunnel.

## Parallel Testing
***
Go to the **Project Settings** screen. Change your pipeline command with the following one & save settings.

```
cd /home/rof/src/github.com/<GitHubOrganization>/<reponame>/conf
protractor parallel.conf.js
```

Now, any changes commit in your repository will trigger a build and run automation tests in parallel on <BrandName /> Selenium Grid.

Monitor and analyze your test result on the **[<BrandName /> automation dashboard](https://automation.lambdatest.com/).**

Reliably deploy your code at scale using Codeship integration with <BrandName />, and ensure it looks robust across every browser to provide a seamless user experience to all your visitors. Happy Testing!

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
        Codeship Integration
      </span>
    </li>
  </ul>
</nav>
