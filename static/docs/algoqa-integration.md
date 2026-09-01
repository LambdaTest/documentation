# algoQA Integration

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

algoQA is an end-to-end automation testing platform powered by artificial intelligence. It lets you generate test cases, executable automation scripts and datasets in a jiffy, thereby saving your testing and test maintenance cost and enhance your overall test coverage.

By integrating TestMu AI with algoQA, you can perform automated browser testing on an online browser farm of 10,000+ browser/device combinations, and achieve greater test coverage.

## Prerequisites

1. Make sure you have a TestMu AI account.  If you don't have an account yet, sign up for free.

2. To run automated tests, you will need TestMu AI Username and Access Key. You can get them from the TestMu AI Automation Dashboard under **Access Key**.

## Integrating algoQA With TestMu AI

1. Login to your TestMu AI account.

2.  Paste your TestMu AI Username and Access Key in the test scripts for generating a secure remote connection with algoQA through TestMu AI Remote URL.

3. Navigate to TestMu AI [Automation Capabilities Generator](https://www.testmuai.com/capabilities-generator/) for declaring desired capabilities. For instance, if you wish to test on macOS High Sierra using Firefox browser then desired capabilities for Java frameworks would look like below.

4. Visit algoQA platform to generate Selenium scripts in Java.

5. After generating the Selenium Java scripts, open algoQA scripts and go to the directory `src/test/java`.

6. Open ApplicationSettings.xml file to modify TestMu AI environment changes as highlighted below.

* BrowserType
* TestMu AIBuild
* TestMu AIURL

Once you have defined the above parameters, your script will be ready for execution.

7. Navigate back to pom.xml directory and open Command Prompt in the same directory.

8. Pass the below command in the Command Prompt to trigger the script execution.

```
mvn test
```
