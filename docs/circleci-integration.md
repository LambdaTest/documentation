---
id: circleci-integration
title: How to integrate CircleCI with TestMu AI
hide_title: true
sidebar_label: CircleCI
description: TestMu AI now integrates with CircleCI to boost your go-to market delivery. Perform automated cross browser testing with TestMu AI to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines. 
keywords:
  - testmu ai integrations
  - testmu ai integrations with ci/cd tools 
  - continuous integration
  
url: https://www.testmuai.com/support/docs/circleci-integration-with-testmu/
site_name: TestMu AI
slug: circleci-integration-with-testmu/
canonical: https://www.testmuai.com/support/docs/circleci-integration-with-testmu/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';


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
          "name": "CircleCI Integration",
          "item": `${BRAND_URL}/support/docs/circleci-integration-with-testmu/`
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
      "@id": "https://www.testmuai.com/support/docs/circleci-integration-with-testmu/"
    },
    "headline": "How to integrate CircleCI with TestMu AI",
    "description": "TestMu AI now integrates with CircleCI to boost your go-to market delivery. Perform automated cross browser testing with TestMu AI to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines.",
    "url": "https://www.testmuai.com/support/docs/circleci-integration-with-testmu/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Integration",
    "keywords": [
      "testmu ai integrations",
      "testmu ai integrations with ci/cd tools",
      "continuous integration"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Global Dependencies; A Git or GitHub repository; Download and install node.js and node package manager or npm.; If you have npm already installed, you may want to upgrade it to the latest version. Here the code you can run in your terminal to upgrade npm.; TestMu AI Authentication Credentials; Be aware of your TestMu AI authentication credentials, i.e., your TestMu AI username, access key, and HubURL. You need to set them up as your environment variables. You can retrieve them from your TestMu AI automation dashboard by clicking on the key icon near the help button..",
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
        "name": "To perform your karma tests with TestMu AI, you would need the following things to be already set up",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "    $ brew install node"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "     npm install npm@latest -g"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "    $ export LT_USERNAME=<YOUR_LAMBDATEST_USERNAME>\n    $ export LT_ACCESS_KEY=<YOUR_LAMBDATEST_ACCESS_KEY>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Integrating TestMu AI With CircleCI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n# Javascript Node CircleCI 2.0 configuration file\n# Check https://circleci.com/docs/2.0/language-javascript/ for more details\n \nversion: 2\n \njobs:\n \n  build:\n \n    docker:\n \n      # specify the version you desire here\n \n      - image: circleci/node:7.10\n \n      # Specify service dependencies here if necessary\n \n      # CircleCI maintains a library of pre-built images\n \n      # documented at https://circleci.com/docs/2.0/circleci-images/\n \n      # the working dir is github repo that you need to fork to become owner.\n \n    working_directory: ~/nightwatch-saple-for-circleci\n \n    steps:\n \n      - checkout\n      \n      - run:\n \n          name: \"Setup custom environment variables // its your workflow step\"\n \n          command: |\n \n            echo 'export LT_USERNAME=\"{your_lambdatest_username}\"' >> $BASH_ENV\n \n      - run:\n \n          name: \"Setup custom environment variables\"\n \n          command: |\n \n            echo 'export LT_ACCESS_KEY=\"{your_lambda_access_key}\"' >> $BASH_ENV\n \n      - run: # Validating your above mentioned environment variables\n \n          name: \"Here is the LT_Username : \"\n \n          command: echo ${LT_USERNAME}      \n \n      # Download and cache dependencies\n \n      - restore_cache:\n \n          keys:\n \n            - v1-dependencies-{{ checksum \"package.json\" }}\n \n            # fallback to using the latest cache if no exact match is found\n \n      - run: npm install\n \n      # run tests!\n \n      - run: node_modules/.bin/nightwatch -e chrome // Executing test in bash."
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Then Capabilities Generator at TestMu AI will provide you with the below program",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "var capabilities = {\n    \"build\" : \"your build name\", //You can edit this and assign a build name\n    \"name\" : \"your test name\", // Assign a name to your Test\n    \"platform\" : \"Windows 8.1\", // The operating system on which you want to test your website\n    \"browserName\" : \"Firefox\", // The browser on which you want to test\n    \"version\" : \"62.0\", // The browser version which you've selected to perform the test upon\n    \"resolution\" : \"1280x1024\", // The resolution in which you want to run the test as per your operating system\n    \"selenium_version\" : \"3.11.0\", //The version of Selenium on which the test will run\n    \"visual\" : true,\n    \"firefox.driver\" : v0.21.0\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Testing Locally Hosted or Privately Hosted Projects",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "# Javascript Node CircleCI 2.0 configuration file\n#\n# Check https://circleci.com/docs/2.0/language-javascript/ for more details\n#\nversion: 2\njobs:\n build:\n   docker:\n     # specify the version you desire here\n     - image: circleci/node:7.10\n \n     # Specify service dependencies here if necessary\n     working_directory: ~/Nightwatch-circleci-selenium\n     \n     steps:\n      - checkout\n      - run:\n           name: \"Downloading tunnel binary\"\n          command: |\n          wget https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip\n \n      - run:\n           name: \"Extracting tunnel binary\"\n          command: |\n          sudo apt-get install unzip\n          unzip LT_Linux.zip\n \n      - run:\n           name: \"Executing tunnel binary\"\n          background: true\n          command: |\n            ./LT -user ${LAMBDATEST_EMAIL} -key ${LAMBDATEST_KEY}\n            sleep 40\n \n      - run:\n           name: \"Setup custom environment variables\"\n          command: |\n            echo 'export LT_USERNAME=\"${LAMBDATEST_USERNAME}\"' >> $BASH_ENV\n \n      - run:\n          name: \"Setup custom environment variables\"\n          command: |\n            echo 'export LT_ACCESS_KEY=\"${LAMBDATEST_ACCESS_KEY}\"' >> $BASH_ENV\n \n      - run: # test what branch we're on.\n          name: \"Here is the LT_Username : \"\n          command: echo ${LT_USERNAME}      \n       \n# Download and cache dependencies\n#    - restore_cache:\n#        keys:\n#          - v1-dependencies-{{ checksum \"package.json\" }}           \n        # fallback to using the latest cache if no exact match is found\n       \n        - run: npm install\n#      - save_cache:\n#        paths:\n#      - node_modules\n#        key: v1-dependencies-{{ checksum \"package.json\" }}\n   \n    # run tests!\n      - run: node_modules/.bin/nightwatch -e chrome"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "run tests!",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\"desiredCapabilities\": {\n       \"tunnel\":true\n     }"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Parallel Testing",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "$ node_modules\\.bin\\nightwatch -e chrome,edge,firefox tests"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Parallel Testing",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "$ ./node_modules/.bin/nightwatch -e chrome,edge,firefox tests"
      }
    ],
    "dateModified": "2026-07-17T17:17:54+05:30"
  }) }}
/>

# CircleCI Integration With <BrandName />
* * *
CircleCI is one of the most renowned CI/CD tools due to its easy-to-use interface, simplistic configuration, and huge support for numerous libraries and services. CircleCI ensures that your code deployment is of high quality and in less time. It does so by passing every commit to run through your automated pipeline before pushing it to the respective feature branch. So if anything goes south, then you know instantly where to look for. This helps in preventing a major breakdown by eliminating any bottleneck at an early stage. CircleCI facilitates rapid as well as robust fixes at scale.

<BrandName /> now integrates with CircleCI to boost your go-to-market delivery. Perform automated cross browser testing with <BrandName /> to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines on the cloud. Perform automation testing in parallel with <BrandName />’s Selenium grid to trim down your test cycles drastically.

## Prerequisites
***
To perform your karma tests with <BrandName />, you would need the following things to be already set up:

* Global Dependencies
   - A Git or GitHub repository
   - Download and install node.js and node package manager or npm.
    To install node.js with homebrew, use the below command.

    <VerifiedTag value="Verified" />

    ```
    $ brew install node
    ```
   - If you have npm already installed, you may want to upgrade it to the latest version. Here the code you can run in your terminal to upgrade npm.

     <VerifiedTag value="Verified" />

     ```
     npm install npm@latest -g
     ``` 

* <BrandName /> Authentication Credentials
   - Be aware of your <BrandName /> authentication credentials, i.e., your <BrandName /> username, access key, and HubURL. You need to set them up as your environment variables. You can retrieve them from your [<BrandName /> automation dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/) by clicking on the key icon near the help button.  
   
    <VerifiedTag value="Verified" />

    ```
    $ export LT_USERNAME=<YOUR_LAMBDATEST_USERNAME>
    $ export LT_ACCESS_KEY=<YOUR_LAMBDATEST_ACCESS_KEY>
    ```

## Integrating <BrandName /> With CircleCI
***
To integrate CircleCI with <BrandName />, you need to make minor tweaks in the `.circleci/config.yml` file, which is the configuration file for your CircleCI instance. The changes you need to make will revolve around the environment variables such as access key, username, grid config and so on. Refer to the official CircleCI documentation on environment variables for more information regarding their set up.

Below is a sample config file for integrating CircleCI with <BrandName />. You can use the sample file to test your own automation test suite by replacing the environment variables according to your need. All the code used for the demonstration of this topic can be found in our GitHub repository.

<VerifiedTag value="Verified" />

```

# Javascript Node CircleCI 2.0 configuration file
# Check https://circleci.com/docs/2.0/language-javascript/ for more details
 
version: 2
 
jobs:
 
  build:
 
    docker:
 
      # specify the version you desire here
 
      - image: circleci/node:7.10
 
      # Specify service dependencies here if necessary
 
      # CircleCI maintains a library of pre-built images
 
      # documented at https://circleci.com/docs/2.0/circleci-images/
 
      # the working dir is github repo that you need to fork to become owner.
 
    working_directory: ~/nightwatch-saple-for-circleci
 
    steps:
 
      - checkout
      
      - run:
 
          name: "Setup custom environment variables // its your workflow step"
 
          command: |
 
            echo 'export LT_USERNAME="{your_lambdatest_username}"' >> $BASH_ENV
 
      - run:
 
          name: "Setup custom environment variables"
 
          command: |
 
            echo 'export LT_ACCESS_KEY="{your_lambda_access_key}"' >> $BASH_ENV
 
      - run: # Validating your above mentioned environment variables
 
          name: "Here is the LT_Username : "
 
          command: echo ${LT_USERNAME}      
 
      # Download and cache dependencies
 
      - restore_cache:
 
          keys:
 
            - v1-dependencies-{{ checksum "package.json" }}
 
            # fallback to using the latest cache if no exact match is found
 
      - run: npm install
 
      # run tests!
 
      - run: node_modules/.bin/nightwatch -e chrome // Executing test in bash.
```



<BrandName /> offers a [Selenium Desired Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to fetch coded values for your desired test configurations.

For Instance, if you select the below configurations:

| Capability       | Selected Value  |
|------------------|-----------------|
| Selenium Version | 3\.11\.0        |
| Resolution       | 1280×1024       |
| Operating System | Windows 8\.1    |
| Browser Version  | 62\.0           |
| Browser          | Mozilla Firefox |


Then Capabilities Generator at <BrandName /> will provide you with the below program:

<VerifiedTag value="Verified" />

```
var capabilities = {
    "build" : "your build name", //You can edit this and assign a build name
    "name" : "your test name", // Assign a name to your Test
    "platform" : "Windows 8.1", // The operating system on which you want to test your website
    "browserName" : "Firefox", // The browser on which you want to test
    "version" : "62.0", // The browser version which you've selected to perform the test upon
    "resolution" : "1280x1024", // The resolution in which you want to run the test as per your operating system
    "selenium_version" : "3.11.0", //The version of Selenium on which the test will run
    "visual" : true,
    "firefox.driver" : v0.21.0
}
```

For more information, refer to our documentation on [Selenium Automation Capabilities](/docs/selenium-automation-capabilities/).

## Testing Locally Hosted or Privately Hosted Projects
***
To help you perform cross browser testing of your locally stored web pages, <BrandName /> provides an SSH(Secure Shell) tunnel connection with the name Lambda Tunnel. With **Lambda Tunnel**, you can execute a test server inside your CircleCI build container to perform automated cross browser testing on browsers offered by Selenium grid on <BrandName />. So you make sure how well your changes look, even before your customers. Curious to know more about Lambda Tunnel?

>Follow our documentation on Lambda Tunnel to know it all. OS-specific instructions to download and set up tunnel binary are at the following links.
>- [Documentation For Windows User](/docs/local-testing-for-windows/)
>- [Documentation For Mac User](/docs/local-testing-for-macos/)
>- [Documentation For Linux User](/docs/local-testing-for-linux/)

>Download the binary file of:
>
>- [Lambda Tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
>- [Lambda Tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
>- [Lambda Tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

The below example of *config.yml* file would demonstrate to you how to leverage <BrandName />’s Selenium grid by performing a browser test through your testing server contained in your CircleCI build.

<VerifiedTag value="Verified" />

```
# Javascript Node CircleCI 2.0 configuration file
#
# Check https://circleci.com/docs/2.0/language-javascript/ for more details
#
version: 2
jobs:
 build:
   docker:
     # specify the version you desire here
     - image: circleci/node:7.10
 
     # Specify service dependencies here if necessary
     working_directory: ~/Nightwatch-circleci-selenium
     
     steps:
      - checkout
      - run:
           name: "Downloading tunnel binary"
          command: |
          wget https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip
 
      - run:
           name: "Extracting tunnel binary"
          command: |
          sudo apt-get install unzip
          unzip LT_Linux.zip
 
      - run:
           name: "Executing tunnel binary"
          background: true
          command: |
            ./LT -user ${LAMBDATEST_EMAIL} -key ${LAMBDATEST_KEY}
            sleep 40
 
      - run:
           name: "Setup custom environment variables"
          command: |
            echo 'export LT_USERNAME="${LAMBDATEST_USERNAME}"' >> $BASH_ENV
 
      - run:
          name: "Setup custom environment variables"
          command: |
            echo 'export LT_ACCESS_KEY="${LAMBDATEST_ACCESS_KEY}"' >> $BASH_ENV
 
      - run: # test what branch we're on.
          name: "Here is the LT_Username : "
          command: echo ${LT_USERNAME}      
       
# Download and cache dependencies
#    - restore_cache:
#        keys:
#          - v1-dependencies-{{ checksum "package.json" }}           
        # fallback to using the latest cache if no exact match is found
       
        - run: npm install
#      - save_cache:
#        paths:
#      - node_modules
#        key: v1-dependencies-{{ checksum "package.json" }}
   
    # run tests!
      - run: node_modules/.bin/nightwatch -e chrome
```

Once the tunnel is successfully set up. You can add the below code to your capabilities for testing internal servers on your network.

<VerifiedTag value="Verified" />

```
"desiredCapabilities": {
       "tunnel":true
     }
```

## Parallel Testing
***
Parallel Testing is one of the most demanding features of <BrandName /> Selenium Grid. By parallel testing, you can run more than one test case simultaneously. This means that Parallel testing would allow you to execute numerous automation test cases altogether. You perform a single test scenario across different browsers or could run different test scenarios across the same browser but with different browser versions.

To perform automation testing in parallel on Windows, use the below command.

<VerifiedTag value="Verified" />

```
$ node_modules\.bin\nightwatch -e chrome,edge,firefox tests
```

To perform automation testing in parallel on macOS/Linux use the below command.

<VerifiedTag value="Verified" />

```
$ ./node_modules/.bin/nightwatch -e chrome,edge,firefox tests
```

Monitor and analyze your test result on the [<BrandName /> Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/).

Deploy your code in a reliable manner at scale using CircleCI integration with <BrandName />, and ensure it looks robust across every browser to provide a seamless user experience to all your visitors. Happy Testing!


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_ self" href={`${BRAND_URL}/support/docs/`}>Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">CircleCI Integration With <BrandName /></span>
    </li>
  </ul>
</nav> 
