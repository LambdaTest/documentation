---
id: jenkins-with-hyperexecute
title: Jenkins Integration
hide_title: true
sidebar_label: Jenkins
description: Streamline automation with Jenkins and HyperExecute by exploring LambdaTest's comprehensive support documentation.
keywords:
  - lambdatest integrations
  - lambdatest integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - gitlab ci
url: https://www.lambdatest.com/support/docs/jenkins-with-hyperexecute/
site_name: LambdaTest
slug: jenkins-with-hyperexecute/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "GitLab CI Integration",
          "item": "https://www.lambdatest.com/support/docs/jenkins-with-hyperexecute/"
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

1. Log Into your Jenkins account. You will be directed to your Jenkins dashboard. 

  <img loading="lazy" src={require('../assets/images/jenkins-he/j1.png').default} alt="Jenkins Plugin"  className="doc_img" width="966" height="419"/>


2. Select the project you want to integrate with HyperExecute. Or else, click on **+ New Item** on the left panel to create a new project. 

  <img loading="lazy" src={require('../assets/images/jenkins-he/j2.png').default} alt="Jenkins Plugin"  className="doc_img" width="966" height="419"/>

3. After opening your project, click on **Configure**.

  <img loading="lazy" src={require('../assets/images/jenkins-he/j3.png').default} alt="Jenkins Plugin"  className="doc_img" width="966" height="419"/>

4. Click on **Build Steps**. 

  <img loading="lazy" src={require('../assets/images/jenkins-he/j4.png').default} alt="Jenkins Plugin"  className="doc_img" width="966" height="419"/>


5. Add a new build step and select **Execute Shell** if you are running your tests on MacOS. Alternatively, select **Execute Windows** batch command if you want to run your test on Windows. 

  <img loading="lazy" src={require('../assets/images/jenkins-he/j5.png').default} alt="Jenkins Plugin"  className="doc_img" width="966" height="419"/>

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
        hyperexecute.exe -u <your_username> -k <your_access_key> -i <path_of_your_yaml_file>
      ```

    **Note**: Replace the placeholder values in the code with your username and access key for HyperExecute.

    <img loading="lazy" src={require('../assets/images/jenkins-he/j6.png').default} alt="Jenkins Plugin"  className="doc_img" width="966" height="419"/>

7. Build your Jenkins project by clicking on **Build Now** and wait for a few minutes.

  <img loading="lazy" src={require('../assets/images/jenkins-he/j7.png').default} alt="Jenkins Plugin"  className="doc_img" width="966" height="419"/>

  After your build is successful, go to the [HyperExecute dashboard](https://hyperexecute.lambdatest.com/hyperexecute) to monitor the progress of your tests.

  <img loading="lazy" src={require('../assets/images/jenkins-he/j8.png').default} alt="Jenkins Plugin"  className="doc_img" width="966" height="419"/>

  The **HyperExecute Dashboard**: 

  <img loading="lazy" src={require('../assets/images/jenkins-he/j9.png').default} alt="Jenkins Plugin"  className="doc_img" width="966" height="419"/>

  Click on the job to find out more details about your tests. 

  <img loading="lazy" src={require('../assets/images/jenkins-he/j10.png').default} alt="Jenkins Plugin"  className="doc_img" width="966" height="419"/>

* * *
You have successfully integrated your Jenkins project with HyperExecute. 




<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
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