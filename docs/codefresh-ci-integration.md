---
id: codefresh-ci-integration
title: Codefresh CI Integration With TestMu AI
hide_title: true
sidebar_label: Codefresh CI
description: TestMu AI offers continuous integration with Codefresh to ease your automated cross browser testing process through their Selenium grid consisting more than 3000+ browsers.
keywords:
  - testmu ai integrations
  - continuous integration
  - codefresh
  - codefresh ci integration
  - testmu ai codefresh ci integration
url: https://www.testmu.ai/support/docs/codefresh-ci-integration-with-testmu/
site_name: LambdaTest
slug: codefresh-ci-integration-with-testmu
canonical: https://www.testmu.ai/support/docs/codefresh-ci-integration-with-testmu/
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
          "name": "Codefresh CI Integration",
          "item": `${BRAND_URL}/support/docs/codefresh-ci-integration-with-testmu/`
        }]
      })
    }}
></script>

# Selenium Testing With Codefresh CI And <BrandName />
* * *
Codefresh is a cloud-native continuous integration and delivery platform that enables teams to quickly and efficiently develop, deploy, and manage cloud-native applications.

Teams can quickly and easily build, test, and deploy their applications on any cloud platform, including Kubernetes, Docker, and AWS. Our intuitive, easy-to-use UI helps streamline the development process.

<BrandName /> now integrates with Codeship to boost your go-to-market delivery. Perform automated cross browser testing with <BrandName /> to ensure your development code renders seamlessly through an online [Selenium grid](https://www.lambdatest.com/blog/why-selenium-grid-is-ideal-for-automated-browser-testing/) providing 3000+ real browsers running through machines on the cloud. Perform automation testing in parallel with <BrandName />’s Selenium grid to trim down your test cycles drastically.

## Prerequisites
***
1. Signing details of Codefresh CI
2. A GitHub repository. Here is our sample GitHub repository for [Python Selenium Sample](https://github.com/LambdaTest/python-selenium-sample.git).
3. **<BrandName /> Authentication Credentials**   
    Be aware of your <BrandName /> authentication credentials i.e. your <BrandName /> username, access key and HubURL. You need to set them up as your environment variables. You can retrieve them from your [<BrandName /> automation dashboard](https://automation.lambdatest.com/) by clicking on the key icon near the help button.
    

## Integrating Codefresh CI With <BrandName />
***
**Step 1:** Sign-in into your codefresh ci account , and create a new pipeline

<img loading="lazy" src={require('../assets/images/codefresh-integration/go_to_pipelines.png').default} alt="Sign up on Codeship" width="1365" height="650" className="doc_img"/>

**Step 2:** Select your user/git organisation, select repository and then click create.

<img loading="lazy" src={require('../assets/images/codefresh-integration/select_git.png').default} alt="Select GitHub as your SCM" width="1346" height="647" className="doc_img"/>


**Step 3:** After the creation of pipeline, you must see the workflow YAML got generated, with your selected github repository.

<img loading="lazy" src={require('../assets/images/codefresh-integration/workflow.png').default} alt="opt for Codeship Basic" width="798" height="415" className="doc_img"/>

**Step 4:** You will have option to choose your runtime image as per your requirements, or test scripts.
  - Choose your runtime image
  - Add your environment variables which needs to be passed to your testscripts.
  - Add your execution command in the commands option of your pipeline YAML.
  - As the selected repository has scripts which is made to run tests on <BrandName /> Selenium Grid, you would need 
    set the env variables such as ```LT_USERNAME``` and ```LT_ACCESS_KEY```
  - Then to execute the pipeline, click the ```RUN``` button.

You may take reference from this YAML to run your own test project/scripts
```
version: "1.0"
stages:
  - "clone"
  - "build"
  - "test"

steps:
  clone:
    title: "Cloning repository"
    type: "git-clone"
    repo: "xyz/python-selenium-sample_2"
    revision: "${{CF_BRANCH}}"
    git: "github"
    stage: "clone"

  test:
    title: "Running test"
    type: "freestyle"
    image: "python:3.9"  # Using Python image
    working_directory: "${{clone}}"
    environment:
      - LT_USERNAME=xyz
      - LT_ACCESS_KEY=xyz
    commands:
      - "pip3 install selenium"
      - "python3 codefresh-sample.py"
    stage: "test"

```

You can see the pipeline running.

<img loading="lazy" src={require('../assets/images/codefresh-integration/pipeline_ruuning.png').default} alt="opt for Codeship Basic" width="798" height="415" className="doc_img"/>

**Step 4:** Login to the <BrandName /> Dashboard, Navigate to Automation -> Web Automation. You can see your codefresh pipeline build has been executed on <BrandName />

<img loading="lazy" src={require('../assets/images/codefresh-integration/lt_dash.png').default} alt="opt for Codeship Basic" width="798" height="415" className="doc_img"/>

Similarly you can run test scripts based on any framework using this above described method.
Here is the selenium test script for your reference.

```
import unittest
import os
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options as ChromeOptions

username = os.getenv("LT_USERNAME")  # Replace the username
access_key = os.getenv("LT_ACCESS_KEY")  # Replace the access key


# paste your capability options below
options = ChromeOptions()
options.browser_version = "latest"
options.platform_name = "win10"
lt_options = {}
lt_options["username"] = username
lt_options["accessKey"] = access_key
lt_options["video"] = True
lt_options["resolution"] = "1920x1080"
lt_options["network"] = True
lt_options["build"] = "test_build"
lt_options["project"] = "unit_testing"
lt_options["name"] = "basic_unit_selinium"
lt_options["w3c"] = True
lt_options["plugin"] = "python-python"
options.set_capability("LT:Options", lt_options)

class FirstSampleTest(unittest.TestCase):
    driver = None

    def setUp(self):
        self.driver = webdriver.Remote(
            command_executor="http://{}:{}@hub.lambdatest.com/wd/hub".format(
                username, access_key
            ),
            options=options,
        )

    # """ You can write the test cases here """
    def test_demo_site(self):
        # try:
        driver = self.driver
        driver.implicitly_wait(10)
        driver.set_page_load_timeout(30)
        driver.set_window_size(1920, 1080)

        # Url
        print("Loading URL")
        driver.get(
            "https://stage-lambda-devops-use-only.lambdatestinternal.com/To-do-app/index.html"
        )

        # Let's click on a element
        driver.find_element(By.NAME, "li1").click()
        location = driver.find_element(By.NAME, "li2")
        location.click()
        print("Clicked on the second element")

        # Let's add a checkbox
        driver.find_element(By.ID, "sampletodotext").send_keys("LambdaTest")
        add_button = driver.find_element(By.ID, "addbutton")
        add_button.click()
        print("Added LambdaTest checkbox")

        # print the heading
        search = driver.find_element(By.CSS_SELECTOR, ".container h2")
        assert search.is_displayed(), "heading is not displayed"
        print(search.text)
        search.click()
        driver.implicitly_wait(3)

        # Let's download the invoice
        heading = driver.find_element(By.CSS_SELECTOR, ".container h2")
        if heading.is_displayed():
            heading.click()
            driver.execute_script("lambda-status=passed")
            print("Tests are run successfully!")
        else:
            driver.execute_script("lambda-status=failed")

    # tearDown runs after each test case
    def tearDown(self):
        self.driver.quit()


if __name__ == "__main__":
    unittest.main()
```


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
