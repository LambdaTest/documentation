# Integrate Provar with HyperExecute

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: Generate and Update the build.xml file",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "\n"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: Generate and Update the build.xml file",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "<\/fileset>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 5: Configure YAML in your Test Suite",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "---\nversion: 0.2\nglobalTimeout: 150\n\nrunson: win\n\nruntime:\n  language: java\n  version: \"11\"\n\nautosplit: false\n\nconcurrency: 4\n\nretryOnFailure: true\nmaxRetries: 2\n\nenv:\n  ProvarSecretsPassword: \n\npre:\n  - ls\n\npost:\n  - cat ./ANT/.lambdatestBuild.xml\n\nframework:\n name: provar\n discoveryType: test\n additional_args:\n  discoveryLevel: file # required"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run the below command in your terminal at the root folder of the project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

> Browser Providers section. Click on the + symbol to add a new Browser Provider. You will receive a pop-up to enter your configurations: Enter the Name for your new Browser Provider. Select the Type as TestMu AI Enter your TestMu AI User Name and Access Key Update all the browser options that you want to run your tests on. Update all the capabilities that you want to pass through the test. Click on Test Connection >> OK",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-provar-integration/#step-1-configure-the-browser-provider-information"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Generate and Update the build.xml file",
          "text": "You have to generate the build.xml file using the Provar GUI. You can follow the steps mentioned in the documentation to generate your build file. Update the prover.home property with the installation path of Provar in HyperExceute as shown below: Add the following tags inside your build.xml file. These tags should be present inside the `` tag as mentioned below: Under the Run-Test-Case tag, replace the `` tag with the following code:",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-provar-integration/#step-2-generate-and-update-the-buildxml-file"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Set the Provar License as Secret",
          "text": "You will have to create a new secret in HyperExecute. Set Key Name as provarLicense Set the Value as the contents of the license file.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-provar-integration/#step-3-set-the-provar-license-as-secret"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Setup the CLI in your Test Suite",
          "text": "After cloning / downloading the sample repo, you need to setup the CLI and the environment variables. The CLI is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the suite to perform the tests on HyperExecute. You can download the CLI for your desired platform from the below mentioned links: Now, you need to export your environment variables LTUSERNAME and LTACCESSKEY* that are available in the TestMu AI Profile page. Run the below mentioned commands in your terminal to setup the CLI and the environment variables. {`export LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" export LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`} {`set LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" set LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`}",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-provar-integration/#step-4-setup-the-cli-in-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: Configure YAML in your Test Suite",
          "text": "Replace the pre command with your own command that discovers the desired .testcase files.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-provar-integration/#step-5-configure-yaml-in-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Step 6: Execute your Test Suite",
          "text": "NOTE : In case of MacOS, if you get a permission denied warning while executing CLI, simply run chmod u+x ./hyperexecute to allow permission. In case you get a security popup, allow it from your System Preferences \u2192 Security & Privacy \u2192 General tab. Run the below command in your terminal at the root folder of the project: OR use this command if you have not exported your username and access key in the step 2. {./hyperexecute --user ${ YOURLAMBDATESTUSERNAME()} --key ${ YOURLAMBDATESTACCESSKEY()} --config RELATIVEPATHOFYOURYAMLFILE }",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-provar-integration/#step-6-execute-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 7,
          "name": "Step 5: Monitor Your Tests",
          "text": "Visit the HyperExecute Dashboard and check your Job status.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-provar-integration/#step-5-monitor-your-tests"
        }
      ]
    }
  ]) }}
/>

Provar is a low-code/no-code testing tool specifically designed for Salesforce applications, enabling efficient creation and execution of UI and API tests.

This documentation guides you on how to integrate Provar seamlessly with HyperExecute to leverage distributed testing capabilities for comprehensive Salesforce test automation.

## Prerequisties

- Download and install the latest version of [Provar Automation Installer](https://documentation.provar.com/documentation/general-information/installing-provar/).
- You must have an active License key to run Provar.

## Step 1: Configure the Browser Provider Information

- Update the Desktop Settings to **HyperExecuteGrid: ANY Chrome**.

- Click on **Test Settings** >> **Browser Providers** section. Click on the **+** symbol to add a new Browser Provider.

- You will receive a pop-up to enter your configurations:

    - Enter the **Name** for your new Browser Provider.
    - Select the **Type** as **TestMu AI**
    - Enter your [TestMu AI **User Name** and **Access Key**](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
    - Update all the **browser** options that you want to run your tests on.
    - Update all the **capabilities** that you want to pass through the test.

- Click on **Test Connection** >> **OK**

## Step 2: Generate and Update the build.xml file

You have to generate the `build.xml` file using the Provar GUI. You can follow the steps mentioned in the [documentation](https://documentation.provar.com/documentation/devops/apache-ant/apache-ant-generating-a-build-file/) to generate your build file.

-  Update the `prover.home` property with the installation path of Provar in HyperExceute as shown below:

```bash
<property name="provar.home" value="../ProvarHome"/>
```

- Add the following tags inside your `build.xml` file. These tags should be present inside the `` tag as mentioned below:

```bash
<property name="license.path" value="../licenseHyperexeute"/>
<property name="unit.test" value="*.testcase" />
```

- Under the `Run-Test-Case` tag, replace the `` tag with the following code:

```bash
<fileset id="testcases" file="../${unit.test}" ></fileset>
```

## Step 3: Set the Provar License as Secret

You will have to [create a new secret](/support/docs/hyperexecute-how-to-save-and-manage-secrets/#create-a-new-secret) in HyperExecute.

- Set **Key Name** as `provarLicense`
- Set the **Value** as the contents of the license file.

## Step 4: Setup the CLI in your Test Suite

After cloning / downloading the sample repo, you need to setup the CLI and the environment variables.

### Download the HyperExecute CLI

The CLI is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the suite to perform the tests on HyperExecute.

You can download the CLI for your desired platform from the below mentioned links:

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| MacOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

### Setup Environment Variable

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [TestMu AI Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

Run the below mentioned commands in your terminal to setup the CLI and the environment variables.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

## Step 5: Configure YAML in your Test Suite

Replace the `pre` command with your own command that discovers the desired **.testcase** files.

```yaml
---
version: 0.2
globalTimeout: 150

runson: win

runtime:
language: java
version: "11"

autosplit: false

concurrency: 4

retryOnFailure: true
maxRetries: 2

env:
ProvarSecretsPassword: <ENTER_YOUR_PASSWORD>

pre:
- ls

post:
- cat ./ANT/.lambdatestBuild.xml

framework:
name: provar
discoveryType: test
additional_args:
discoveryLevel: file # required
```

## Step 6: Execute your Test Suite

> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key in the step 2.

    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}

## Step 5: Monitor Your Tests

- Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status.
