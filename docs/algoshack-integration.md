---
id: algoshack-integration
title: algoQA Integration
hide_title: true
sidebar_label: algoQA
description: Integrate TestMu AI with algoQA and automate your browser testing on an online browser farm of 3000+ real browsers and operating system combinations.
keywords:
  - testmu ai integration with algoqa
  - testmu ai and algoqa integration 
  - algoqA integration
url: https://www.testmu.ai/support/docs/algoqa-integration/
site_name: LambdaTest
slug: algoqa-integration
canonical: https://www.testmu.ai/support/docs/algoqa-integration/
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
          "name": "algoQA Integration",
          "item": `${BRAND_URL}/support/docs/algoQA-integration/`
        }]
      })
    }}
></script>

# algoQA Integration
***

algoQA is an end-to-end automation testing platform powered by artificial intelligence. It lets you generate test cases, executable automation scripts and datasets in a jiffy, thereby saving your testing and test maintenance cost and enhance your overall test coverage.

By integrating <BrandName /> with algoQA, you can perform automated browser testing on an online browser farm of 3000+ real browsers and operating system combinations, and achieve greater test coverage.

## Prerequisites
---

1. Make sure you have a <BrandName /> account.  If you don't have an account yet, [sign up for free](https://accounts.lambdatest.com/register).

2. To run automated tests, you will need <BrandName /> Username and Access Key. You can get them from the <BrandName /> Automation Dashboard under **Access Key**.

<img loading="lazy" src={require('../assets/images/algoshack-integration/access_key.png').default} alt="Image" width="412" height="353"  className="doc_img img_center"/>


## Integrating algoQA With <BrandName />
---

1. Login to your <BrandName /> account.

2.  Paste your <BrandName /> Username and Access Key in the test scripts for generating a secure remote connection with algoQA through <BrandName /> Remote URL.

<img loading="lazy" src={require('../assets/images/algoshack-integration/remote.png').default} alt="Image" width="1428" height="274"  className="doc_img img_center"/>


3. Navigate to <BrandName /> [Automation Capabilities Generator](https://www.lambdatest.com/capabilities-generator/) for declaring desired capabilities. For instance, if you wish to test on macOS High Sierra using Firefox browser then desired capabilities for Java frameworks would look like below.

<img loading="lazy" src={require('../assets/images/algoshack-integration/caps.PNG').default} alt="Image" width="1274" height="565"  className="doc_img"/>

4. Visit algoQA platform to generate Selenium scripts in Java.

<img loading="lazy" src={require('../assets/images/algoshack-integration/algo_shack.png').default} alt="Image" width="1710" height="916"  className="doc_img"/>

5. After generating the Selenium Java scripts, open algoQA scripts and go to the directory `src/test/java`.

<img loading="lazy" src={require('../assets/images/algoshack-integration/src_directory.png').default} alt="Image" width="2530" height="1230"  className="doc_img"/>

6. Open ApplicationSettings.xml file to modify <BrandName /> environment changes as highlighted below.

* BrowserType
* <BrandName />Build
* <BrandName />URL

<img loading="lazy" src={require('../assets/images/algoshack-integration/env_params.png').default} alt="Image" width="2549" height="1300"  className="doc_img"/>

Once you have defined the above parameters, your script will be ready for execution. 

7. Navigate back to pom.xml directory and open Command Prompt in the same directory.

<img loading="lazy" src={require('../assets/images/algoshack-integration/cmd.png').default} alt="Image" width="1592" height="893"  className="doc_img"/>

8. Pass the below command in the Command Prompt to trigger the script execution.

```
mvn test
```

---




