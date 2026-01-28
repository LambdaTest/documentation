---
id: appveyor-ci-integration
title:  How to integrate AppVeyor CI with TestMu AI
hide_title: true
sidebar_label: AppVeyor CI
description: TestMu AI now integrates with AppVeyor CI to boost your go-to-market delivery. Perform automated cross-browser testing on 3000+ browser environment combinations.
keywords:
 - testmu ai integrations
 - testmu ai integrations with ci/cd tools
 - ci/cd tools
 - continuous integration
 - continuous delivery
 - continuous integration tools
 - appveyor ci
url: https://www.testmuai.com/support/docs/appveyor-ci-integration/
site_name: LambdaTest
slug: appveyor-ci-integration/
canonical: https://www.testmuai.com/support/docs/appveyor-ci-integration/
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
          "name": "AppVeyor CI Integration",
          "item": `${BRAND_URL}/support/docs/appveyor-ci-integration/`
        }]
      })
    }}
></script>

# AppVeyor CI Integration with <BrandName />
* * *

**AppVeyor CI** is a very popular continuous integration and deployment platform based on .NET applications. It can also be easily integrated with GitHub and BitBucket projects for CI/CD. It makes testing, deployment, and monitoring builds very easy for developers. It is free for open-source projects.

**<BrandName />** now integrates with AppVeyor CI to boost your go-to-market delivery. You can perform automated cross-browser testing with <BrandName /> to ensure seamless code render through an online Selenium grid. <BrandName /> provides 3000+ real browsers running through machines, on the cloud. You can perform automation testing in parallel with <BrandName />’s Selenium grid, which can help you trim down your test cycles drastically.

## Prerequisites For Integrating AppVeyor CI With Our Online Selenium Grid

* * *

To perform your tests with <BrandName />, you would need the below things to be already set up:

1.  A GitHub or BitBucket repository on which you want to activate the CI pipeline.

> For demo purposes, we have used [<BrandName /> Appveyor CI Github repository](https://github.com/lambdatest/AppveyorCI).

2.  You also need your <BrandName /> authentication credentials, which include your <BrandName /> username, and access key.

> To get your Username and Access Key, go to your [<BrandName /> automation dashboard](https://automation.lambdatest.com/) and click on the "key" icon left to the help button, on the top right corner. <img loading="lazy" src={require('../assets/images/uploads/profile-1.webp').default} alt="appveyor ci integration" width="462" height="325" className="doc_img"/>

Update your username and access key in the "Config.properties" file.

## Activating A Github Repository For CI/CD

* * *

Here are the steps to activate and integrate your Github repository with AppVeyor CI on <BrandName />:

Login to your [AppVeyor CI](https://ci.appveyor.com/) platform and click on **New Project** to enable CI/CD on your selected repository. For demo purposes, we have used the GitHub repository mentioned in the Prerequisites above. <img loading="lazy" src={require('../assets/images/uploads/appveyorCi-1-1024x460.webp').default} alt="appveyor ci integration" width="768" height="345" className="doc_img"/>]

Once your repository is added, go to the **Settings -> Build**, and select the trigger choice for build purpose. For this demo, we have used **Script** trigger and passed the below code in command line (**Cmd**). Save the build settings when done.

```
mvn test
```

<img loading="lazy" src={require('../assets/images/uploads/appveyorCi-2-1024x463.webp').default} alt="appveyor ci integration" width="768" height="347" className="doc_img"/>

Congratulations!! Now you have successfully activated your repository for CI/CD on the AppVeyor platform.

## Execution Of The AppVeyor CI Pipeline On <BrandName />

* * *

Below is the step-by-step execution of the AppVeyor CI pipeline.

1.  Make sure to add your <BrandName />'s hub URL and [Desired Capabilities](/docs/selenium-automation-capabilities/) in your test setup, as done in the _AppveyorCI/src/main/java/stepDefinitions/ToDoStepDefinition.java_ file of the mentioned GitHub repository.

2.  Push the changes to your integrated GitHub repository. For example, we have changed the test name in the forked repository.
3.  Once the edit is complete, click on "Commit Changes" to save and commit the changes made. AppVeyor CI is activated as soon as this step is done since we have used "push event" for triggering the AppVeyor CI. <img loading="lazy" src={require('../assets/images/uploads/appveyorCi-10-1024x417.webp').default} alt="appveyor ci integration" width="768" height="313" className="doc_img"/>

4.  As soon as the AppVeyor CI is triggered (through push event in this case), a new build can be seen in the "Timeline" on your [<BrandName />'s automation dashboard](https://automation.lambdatest.com/timeline/). The current status of this build will be "running" or "executing". <img loading="lazy" src={require('../assets/images/uploads/appveyorCi-11-1024x460.webp').default} alt="appveyor ci integration" width="768" height="345" className="doc_img"/>

5.  Now based on the tests, this build can pass or fail. If passed, a green tick along with the term **Passed** will appear in the summary of the test. Else if failed, a red cross will appear instead, along with the term **Failed**, as shown below.<img loading="lazy" src={require('../assets/images/uploads/appveyorCi-12-1024x462.webp').default} alt="appveyor ci integration" width="768" height="347" className="doc_img"/>

***

> Deploy your code in a reliable manner at scale using AppVeyor CI integration with <BrandName />, and ensure it looks robust across every browser to provide a seamless user experience to all your visitors. If you have any doubt, please feel free to reach out to us via **24/7 chat support** or by mailing to us on [support@testmuai.com](mailto:support@testmuai.com). Happy testing! 

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_ self" href={`${BRAND_URL}/support/docs/`}>Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link"> AppVeyor CI Integration with <BrandName /></span>
    </li>
  </ul>
</nav>
