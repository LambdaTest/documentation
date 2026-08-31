# Integrate Azure Pipelines With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Azure Pipelines is a service presented by Azure DevOps to help projects ship faster with the help of a robust pipeline. With Azure Pipelines you can easily generate a build, test it before deploying the changes live in any language you are comfortable with i.e. Node.js, Python, Java, PHP, Ruby, C/C++, .NET etc. The platform offers unlimited CI/CD minutes for open-source projects, along with 10 free parallel jobs. Azure pipelines offers great cross-platform support using which you can run jobs in parallel across Windows, macOS, Linux.

TestMu AI now integrates with Azure to boost your go-to-market delivery. Perform automated cross browser testing with TestMu AI to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines, on the cloud. Perform automation testing in parallel with TestMu AI’s Selenium grid to drastically trim down your test cycles.

## Pre-requisite

1. An [Azure CI account](https://dev.azure.com/).

2. A [Git or GitHub](https://github.com/) repository.

3. **TestMu AI Authentication Credentials**

    Be aware of your TestMu AI authentication credentials i.e. your TestMu AI username, access key and HubURL. You need to set them up as your environment variables. You can retrieve them from your [TestMu AI automation dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/) by clicking on the key icon near the help button.

    * **For Linux/Mac:**


    $ export LT_USERNAME= `{YOUR_LAMBDATEST_USERNAME}`

    $ export LT_ACCESS_KEY= `{YOUR_LAMBDATEST_ACCESS_KEY}`



    * **For Windows:**


    $ set LT_USERNAME= `{YOUR_LAMBDATEST_USERNAME}`

    $ set LT_ACCESS_KEY= `{YOUR_LAMBDATEST_ACCESS_KEY}`



## Integrating TestMu AI with Azure Pipelines

> First and foremost, you need to clone our GitHub repository for downloading the relevant code needed to integrate [Azure Pipelines with LambdaTest](https://github.com/LambdaTest/protractor-selenium-azure-sample).

**Step 1:** First and foremost, we need to create a project. Populate the relevant fields as you wish and hit the create button.



**Step 2:** Now, Azure Pipelines will ask you about the location of your code. If you have your code repository in GitHub then select the option for GitHub from the values.



**Step 3:** After you choose an option for your code repository, you will be asked to login. Post login, you need to choose the particular repository. The repository will pick the azure-pipelines.yml file.

```
# Node.js
# Build a general Node.js project with npm.
# Add steps that analyze code, save build artifacts, deploy, and more:
# https://docs.microsoft.com/azure/devops/pipelines/languages/javascript

trigger:
- master

pool:
vmImage: 'Ubuntu-16.04'

variables:
LT_USERNAME: 'Your_LambdaTest_Username'
LT_ACCESS_KEY: 'Your_LambdaTest_Access_Key'

steps:
- task: NodeTool@0
inputs:
versionSpec: '10.x'
displayName: 'Install Node.js'

- script: |
npm install
npm install -g protractor
cd conf
protractor single.conf.js
displayName: 'npm install and build'
```

**Step 4:** Executing the above file will run the script in TestMu AI Grid successfully. See the below image of the output.



## Parallel Testing

For running the test in parallel, replace protractor single.conf.js with protractor parallel.conf.js in same YML file.

```
# Node.js
# Build a general Node.js project with npm.
# Add steps that analyze code, save build artifacts, deploy, and more:
# https://docs.microsoft.com/azure/devops/pipelines/languages/javascript

trigger:
- master

pool:
vmImage: 'Ubuntu-16.04'

variables:
LT_USERNAME: 'Your_LambdaTest_Username'
LT_ACCESS_KEY: 'Your_LambdaTest_Access_Key'

steps:
- task: NodeTool@0
inputs:
versionSpec: '10.x'
displayName: 'Install Node.js'

- script: |
npm install
npm install -g protractor
cd conf
protractor parallel.conf.js  //for executing parallel testing
displayName: 'npm install and build'
```

Monitor and analyze your test result on the TestMu AI Automation Dashboard.

Deploy your code in a reliable manner at scale using Azure integration with TestMu AI, and ensure it looks robust across every browser to provide a seamless user experience to all your visitors. Happy Testing!
