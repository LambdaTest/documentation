---
id: tosca-integration-hyperexecute
title: Tosca
hide_title: true
sidebar_label: Tosca
description: Speed up testing with Tosca & HyperExecute integration! Our guide offers seamless setup for efficient, AI-optimized no-code testing across your digital landscape. 
keywords:
    - hyperexecute integrations
    - hyperexecute integrations with products
    - products
    - tosca
    - tricentis
url: https://www.lambdatest.com/support/docs/tosca-integration-with-hyperexecute/
site_name: LambdaTest
slug: tosca-integration-with-hyperexecute/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Tosca Integration with HyperExecute",
          "item": "https://www.lambdatest.com/support/docs/tosca-integration-with-hyperexecute/"
        }]
      })
    }}
></script>

# Tricentis Tosca Integration with HyperExecute
***

Tricentis Tosca is a tool that optimizes and accelerates end-to-end testing of your entire digital landscape. It is a no-code tool that uses the help of an AI to take the bottlenecks out of testing.

You can now integrate Tosca with HyperExecute. To do so, follow the steps listed below:


## Integrate Tosca with HyperExecute
***

### Pre-requisites: 
    
-  To run Tosca, ensure that you have all the required [licences](https://documentation.tricentis.com/tosca/1600/en/content/licensing/lic_administering_licenses.htm).


### Steps to Integrate:

**Step 1:** Go to the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/). Click on the **Projects**.

**Step 2:** Click on the **Setup a New Project** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/tosca/Step2.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 3:** Enter your **Project Name**. Click on Continue.

<img loading="lazy" src={require('../assets/images/hyperexecute/tosca/Step3.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 4:** Enter the **License Details**, i.e. Username and Password with which you want to execute your tests.

<img loading="lazy" src={require('../assets/images/hyperexecute/tosca/Step4.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 5:** Now select your **Database Type**. For the demo purpose, we are using Oracle. Choose how you want to establish the connection, i.e, **via Connection Data** or **via Connection String**, to access the common repository associated with your workspace. For demo purposes, we are selecting the **Connection String**. Enter the connection string for your database.

Enter the **Workspace Details**, i.e., Username (mandatory) and Password (optional), that you want to use for this project. Click on the **Save** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/tosca/Step5.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 6:** Please wait for the discovered execution list to get populated. Now, select the desired tests that you want to execute, and then click on the **Run** button.
<img loading="lazy" src={require('../assets/images/hyperexecute/tosca/Step6.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 7:** Now set the total number of **Concurrent Sessions** that you want to run on HyperExecute and click on the **Run** button.
<img loading="lazy" src={require('../assets/images/hyperexecute/tosca/Step7.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 8:** Now go to the [**Jobs**](https://hyperexecute.lambdatest.com/hyperexecute/jobs) section and check the results.
<img loading="lazy" src={require('../assets/images/hyperexecute/tosca/Step8.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

> Results will get updated in the **Common Repository** once execution is completed on HyperExecute. The live video of running tests can be viewed from the [HyperExecute job-detail](https://hyperexecute.lambdatest.com/hyperexecute/jobs)dashboard.
 

## Integrate Tosca with HyperExecute using YAML
***

### Pre-requisites:

-  Ensure that you have integrated Tosca with LambdaTest’s cloud-based Selenium Grid. Follow the steps on this [page](https://www.lambdatest.com/support/docs/tricentis-tosca-integration-lambdatest-selenium-grid/) to do so.
    
-  Ensure that you have the necessary licenses required to run Tosca. To learn more about the licenses, read this [page](https://documentation.tricentis.com/tosca/1300/en/content/licensing/lic_administering_licenses.htm).

### Steps to Integrate:

1. **Create an Execution List**:

  a. Go to the execution tab in your Tosca commander to [create an execution list](https://documentation.tricentis.com/tosca/1510/en/content/tosca_commander/execution_lists_section.htm).
    
  b. You can drag and drop test cases from the **Test Cases** tab to the execution list. In the example given below, the execution list is called LT.

  <img loading="lazy" src={require('../assets/images/Tosca/Tosca1.png').default} alt="Image"  className="doc_img"/>

2. **Create a TC-Shell Script**:

  A TC-Shell script file usually has the extension _.tcs_, and it contains a sequence of [TC-Shell commands](https://documentation.tricentis.com/tosca/1300/en/content/tosca_commander/tcshell_commands.htm#TC-Shell_&_Keyboard_Shortcuts_699197005_998491) in plain text to configure the steps to execute a Tosca test via command line. This script file is kept in the same folder where you have the actual Tosca project saved.

  <img loading="lazy" src={require('../assets/images/Tosca/Tosca2.png').default} alt="Image"  className="doc_img"/>

  A sample TC-Shell script is:

  ```bash
  //script
  
  jumptonode "/Execution/ExecutionLists/LT"
  
  // reset actual log
  task "clear log"
  
  //start execution list
  task run
  
  //save results
  save
  ```

  Click the arrow on the right side of the **Execution** tab to retrieve the node path used in **jumptonode** command.

  <img loading="lazy" src={require('../assets/images/Tosca/Tosca3.png').default} alt="Image"  className="doc_img"/>

  The node path is highlighted in the image below. 

  <img loading="lazy" src={require('../assets/images/Tosca/Tosca4.png').default} alt="Image"  className="doc_img"/>

  Use the following command to execute this test via command line. 

  ```bash
    - TCShell.exe -workspace <Path to your tosca workspace file> -login <your email here> <your password here> "<Path to TC-Shell Script>"

  ```

After configuring the TC-Shell Script, integrate it with HyperExecute. To do this:
    
  a.  Create a Hyperexecute YAML.
        
  b.  Download the Hyperexecute CLI Binary based on the OS you use:

    i. Mac: [https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute](https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute)

    ii. Windows: [https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe](https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe)

    iii. Linux: [https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute](https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute)

  > **Note**: The binary for Mac is unsigned. You might get a permission denied warning while executing on mac and linux machines. To allow permissions you can use the following command: `chmod u+x ./hyperexecute`.
  > Thus, you might see a security popup on whether to allow the execution of the tool or not. You can allow it from your **System Preferences** → **Security & Privacy** → **General** tab.

  **Sample Hyperexecute YAML file for TOSCA**:
  ```bash
---
version: "0.1"
matrix:
  os: [win]
runson: ${matrix.os}

retryOnFailure: true
maxRetries: 2

pre:
  - PATH=%TRICENTIS_LICENSING_HOME%;%PATH% && ToscaLicenseConfiguration.exe connect-cloud -u <your_email_here> -p <your_password_here>

testSuites:
  - TCShell.exe -workspace D:\foreman\<Project_Folder_Name>\Demo_Sample.tws -login <your email here> <your password here> "D:\foreman\<Path to TC-Shell Script>"

post:
  - cat hyex_tosca.yml

uploadArtefacts:
  - name: Logs
    path:
      - Demo_Sample/**

```
  **Note**: Each machine has a Tosca commander Client installed on HyperExecute. To successfully run your tests, your Tosca licenses must be pre-configured on the machine. To do so, we use the **ToscaLicenseConfiguration.exe** along with the **connect-cloud** parameter to validate the licenses as a **pre-step** before triggering the tests. The complete command is added under **pre** in the above sample.

  c. After configuring the YAML, execute it via terminal using the following command: `./hyperexecute --user <your_username> --key <your_access_key> --config <your_yaml_file_name>`

You have successfully integrated your Tricentis Tosca project with HyperExecute.



<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
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
       HyperExecute Integration With Tosca
      </span>
    </li>
  </ul>
</nav>