Sikuli is an open-source tool that empowers you to automate tasks on your computer screen. It utilizes a unique approach called "visual image match" to interact with graphical user interfaces (GUIs).

This documentation guides you on how to integrate Sikuli seamlessly with HyperExecute to leverage the power of image recognition.

## Prerequisites
- An active TestMu AI account with Admin or User-level access.
- Refer to the [Sikuli](https://www.softwaretestinghelp.com/sikuli-tutorial-part-1/) documentation to understand how to write a sikuli test.

## Step 1: Build your Visual Test with SikuliX

Write your project code and all the other necessary dependencies in your code-repository.

## Step 2: Configure your HyperExecute YAML

Here is a sample YAML file, you can configure it with different [YAML flags](/support/docs/hyperexecute-yaml-parameters/) as per your requirements.

```yaml
---
version: 0.1
runson: win
testSuiteTimeout: 90

autosplit: true

retryOnFailure: true
maxRetries: 1

concurrency: 1

env:
CACHE_DIR: m2_cache_dir

cacheKey: '{{ checksum "pom.xml" }}'
cacheDirectories:
- $CACHE_DIR

runtime:
language: java
version: 17

pre:
# Create the Cache directory

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

- mvn -Dmaven.repo.local=./.m2 -Dmaven.test.skip=true clean install

testDiscovery:
type: raw
mode: remote
shell: bash
command: grep 'Test_1' testng.xml | awk '{print$4}' | sed 's/name=//g' | sed 's/\x3e//g' | sed 's/"//' | sed 's/"//'

testRunnerCommand: mvn test `-Dtests=$test
```

## Step 3: Setup your Authentication / Environment Variables

After configuring your project and HyperExecute YAML file, you need to setup the CLI and the environment variables.

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






## Step 4: Execute and Monitor your Project

**note**
In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.


Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key in the step 2.



    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}



> Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status.

## Leveraging Custom Libraries in SikuliX for Advanced Visual Verification

Suppose you want to automate interactions with a desktop application, but traditional frameworks like Selenium fall short because the UI elements lack proper identifiers.

SikuliX, an automation solution, adept at automating interactions with the graphical user interface (GUI) of desktop computers running Windows, Mac, or select Linux/Unix distributions. With its robust image recognition capabilities of OpenCV, SikuliX excels in scenarios where traditional automation frameworks lack access to GUI internals or application source code.

SikuliX extends its versatility through support for multiple scripting languages, enabling developers to leverage their preferred language for automation tasks. The supported scripting languages include:

- Python (level 2.7, supported by Jython)
- RobotFramework text-scripts
- Ruby (level 1.9 and 2.0, supported by JRuby)
- JavaScript (supported by the Java Scripting Engine)

### HyperExecute's Role in SikuliX Automation

HyperExecute serves as the backbone for managing and executing SikuliX automation workflows efficiently. By leveraging HyperExecute, developers can ensure seamless execution of SikuliX scripts across diverse environments, without being constrained by platform-specific dependencies or configurations.

### Benefits of Automating SikuliX with HyperExecute

- **Build Visual UI tests:** SikuliX handles element identification, while HyperExecute orchestrates test execution and reporting.

- **Run tests across different machines:** HyperExecute ensures consistent environments regardless of local configurations.

- **Automate legacy applications:** SikuliX tackles even outdated UIs, making HyperExecute your vintage automation champion.

- **Leverage multiple languages:** Choose your preferred scripting language for SikuliX, knowing HyperExecute handles the execution infrastructure.
