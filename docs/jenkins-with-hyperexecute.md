---
id: jenkins-with-hyperexecute
title: Jenkins Integration
hide_title: true
sidebar_label: Jenkins
description: Streamline automation with Jenkins and HyperExecute by exploring TestMu AI's comprehensive support documentation.
keywords:
  - testmu ai integrations
  - testmu ai integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - gitlab ci
url: https://www.testmu.ai/support/docs/jenkins-with-hyperexecute/
site_name: LambdaTest
slug: jenkins-with-hyperexecute/
canonical: https://www.testmu.ai/support/docs/jenkins-with-hyperexecute/
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
          "name": "GitLab CI Integration",
          "item": `${BRAND_URL}/support/docs/jenkins-with-hyperexecute/`
        }]
      })
    }}
></script>

# Jenkins Integration
* * *
Jenkins is an open-source automation server that is easy to install and configure. It can also be used as a simple CI server or turned into a continuous delivery hub for any project.

You can now integrate HyperExecute with your Jenkins project to shorten your test cycles.


**How to Integrate HyperExecute with Jenkins**

To integrate HyperExecute with your Jenkins project, follow the steps listed below. 

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample from the <BrandName /> GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/hyp-ci-cd-integration-sample/tree/Jenkins" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

1. Log Into your Jenkins account. You will be directed to your Jenkins dashboard. 

  <img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/jenkins/j1.png').default} alt="Jenkins Plugin"  className="doc_img" width="966" height="419"/>


2. Select the project you want to integrate with HyperExecute. Or else, click on **+ New Item** on the left panel to create a new project. 

  <img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/jenkins/j2.png').default} alt="Jenkins Plugin"  className="doc_img" width="966" height="419"/>

3. After opening your project, click on **Configure**.

  <img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/jenkins/j3.png').default} alt="Jenkins Plugin"  className="doc_img" width="966" height="419"/>

4. Click on **Build Steps**. 

  <img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/jenkins/j4.png').default} alt="Jenkins Plugin"  className="doc_img" width="966" height="419"/>


5. Add a new build step and select **Execute Shell** if you are running your tests on MacOS. Alternatively, select **Execute Windows** batch command if you want to run your test on Windows. 

  <img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/jenkins/j5.png').default} alt="Jenkins Plugin"  className="doc_img" width="966" height="419"/>

6. Copy and paste the following code snippet in the **Command** section of your Build Step. Click on **Save** to add your Build Step. 

  - **For MacOS**:

      ```
      curl -O https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute
      chmod u+x hyperexecute
      ./hyperexecute --user <your_username> --key <your_access_key> --config hyperexecuteStatic.yaml
      ```
  - **For Windows**:

      ```
        curl -O https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe 
        hyperexecute.exe -u <your_username> -k <your_access_key> -i <path_of_RELATIVE_PATH_OF_YOUR_YAML_FILE>
      ```

    **Note**: Replace the placeholder values in the code with your username and access key for HyperExecute.

    <img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/jenkins/j6.png').default} alt="Jenkins Plugin"  className="doc_img" width="966" height="419"/>

7. Build your Jenkins project by clicking on **Build Now** and wait for a few minutes.

  <img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/jenkins/j7.png').default} alt="Jenkins Plugin"  className="doc_img" width="966" height="419"/>

  After your build is successful, go to the [HyperExecute dashboard](https://hyperexecute.lambdatest.com/hyperexecute) to monitor the progress of your tests.

  <img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/jenkins/j8.png').default} alt="Jenkins Plugin"  className="doc_img" width="966" height="419"/>

  The **HyperExecute Dashboard**: 

  <img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/jenkins/j9.png').default} alt="Jenkins Plugin"  className="doc_img" width="966" height="419"/>

  Click on the job to find out more details about your tests. 

  <img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/jenkins/j10.png').default} alt="Jenkins Plugin"  className="doc_img" width="966" height="419"/>

* * *
You have successfully integrated your Jenkins project with HyperExecute. 

## Sample Jenkins File

```bash
pipeline {
    agent any

    stages {
        # Download and Run Hyperexecute stage (optional)
        stage('Download & Run Hyperexecute') {
            steps {
                # Download Hyperexecute CLI for macOS (adjust for other OS)
                sh name: 'Download Hyperexecute CLI', script: 'wget https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute'
                # Grant execute permission to the downloaded binary
                sh name: 'Make Hyperexecute executable', script: 'chmod +x hyperexecute'
                # Run Hyperexecute with user credentials and configuration file
                sh name: 'Run Hyperexecute Tests', script: './hyperexecute --user <your_username> --key <your_access_key> --config <RELATIVE_PATH_OF_YOUR_YAML_FILE_path>
            }
        }
    }
}
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
        GitHub Integration
      </span>
    </li>
  </ul>
</nav>
