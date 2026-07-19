# GoCD Integration With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

GoCD offers a free and open-source platform to help you configure robust CI/CD pipelines with ease. The intuitive UI offers an end-to-end view wherein you can visualize the entire migration path to production in a collective view. That way, you can easily pinpoint the inefficient areas to optimize the CI/CD process. By leveraging GoCD, you can achieve faster feedback loops through its modelling constructs which makes your complex CI/CD pipeline looks a lot simpler. You also get features like dependency management & parallel execution to help you deliver better products quicker.

TestMu AI integration with GoCD will help your perform Selenium test automation for your code changes on more than 3000+ real browsers for both mobile and desktop. You can trigger your Selenium testing scripts directly from GoCD instance and they would be executed over your TestMu AI automation dashboard.

## Prerequisites

1. Copy the YAML configuration file from our [GitHub repository for GoCD](https://github.com/LambdaTest/nightwatch-gocd-sample/blob/master/nightwatch-gocd-sample.gocd.yaml).

2. **TestMu AI Authentication Credentials**
    Be aware of your TestMu AI authentication credentials i.e. your TestMu AI username, access key and HubURL. You need to set them up as your environment variables. You can retrieve them from your [TestMu AI automation dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/) by clicking on the key icon near the help button.

    * **For Linux/Mac:**

    $ export LT_USERNAME= `{YOUR_LAMBDATEST_USERNAME}`

    $ export LT_ACCESS_KEY= `{YOUR_LAMBDATEST_ACCESS_KEY}`

    * **For Windows:**

    $ set LT_USERNAME= `{YOUR_LAMBDATEST_USERNAME}`

    $ set LT_ACCESS_KEY= `{YOUR_LAMBDATEST_ACCESS_KEY}`

3. Make sure to install GoCD in your system.

## Configuring GoCD Pipeline For TestMu AI Selenium Grid

**Step 1:** Visit your GoCD Dashboard and create a new pipeline by selecting the option to "Use Pipeline as Code".

**Step 2:** Scroll-down to the section to "Register Your Pipelines as Code Repo with GoCD" and untick the box for using the same SCM repository.

**Step 3:** Provide the [TestMu AI GitHub repository for GoCD](https://github.com/LambdaTest/nightwatch-gocd-sample) as the repository URL. Test you connection and provide a label for this repository. In our case, we have provided the label as Sample-Pipeline, you may keep something else for your instance.

**Step 4:** After providing the GitHub repository, you will need to Scan it. Hit the highlighted button to Scan repository and you will notice that a respective YAML definition file would be through the repository.

**Step 5:** After scanning the repository, you need to scroll to bottom and hit finish. Make sure to specify the username and password under the advanced setting, for private repositories.

**Step 6:** Once you hit the finish button. Under the Config repositories, you will find the details of the repository as specified by you.

**Step 7:** Now, if you visit your GoCD dashboard, you will find the pipeline generated and the job in running state.

**Step 8:** If you open the pipeline and refer to the console then you will notice the current job status as passed.

Great work! You have successfully integrated your GoCD instance with your TestMu AI account. Follow our another documentation, if you wish to configure a private YAML and then integrate your GoCD pipeline with TestMu AI.
