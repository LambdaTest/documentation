# TestMo Integration With TestMu AI Grid

TestMo is a unified test management software that helps teams manage and track all their testing activity and efforts in one place. It combines manual testing, exploratory & ad-hoc testing and test automation in one platform, so teams can work smarter and more productively.

TestMo also offers integration with TestMu AI to help you perform automated cross browser testing through an on-cloud Selenium Grid offering 3000+ browsers. TestMu AI integration to TestMo  will help you run your automation scripts from TestMo instance to our cloud-based Grid.

## Steps to Integrate your Project​

### Pre-requisite​

- Create your account in LambdaTest and TestMo

### Step 1: Build the Test Suite​

Firstly, you need to run the build command as per your desired framework. You can choose any test automation framework and programming language you are familiar with. Selenium is one of the most common one used with JavaScript/Node.js, Java, C#, Python, Ruby or PHP, and other languages

You can take the reference from here on all the languages and frameworks supported by TestMu AI online Selenium Grid.

### Step 2: Generate your Testing Result XML Files​

To submit and report your test results to Testmo, execute your automated tests and generate a JUnit-style XML report file. This file format has become a standard format to exchange test results between tools and is supported by practically any testing tool. Testmo also directly supports this format so it's very easy to report your test automation results.

For this case, we are using TestNG Framework. Run the below command to generate the file

```
java org.testng.TestNG testng1.xml
```

The testng1.xml file here specifies one of your TestNG suites. After executing your tests, TestNG will automatically generate JUnit-style XML report files in the test-output directory (if this is not the case, please make sure that the org.testng.reporters.JUnitXMLReporter listener is active).

### Step 3: Configure TestMo in your Project​

Our test automation suite has now been successfully executed, and an XML report file containing the test results has been produced. Simply use our cross-platform testmo CLI tool to submit the test results to Testmo. The CLI tool is distributed as an NPM package and is simple to install on any system.

- Install the official @testmo/testmo-cli NPM package

```
npm install -g @testmo/testmo-clitestmo -h
```

- Generate the API Token in TestMo and run the below command:

```
export TESTMO_TOKEN=<YOUR_API_TOKEN>
```

```
testmo automation:run:submit --instance <https://<your_testmo_address>.testmo.net --project-id 1 --name "lambdatest" --source "frontend" --results  <your_test_result_file_path>.xml
```

- Output in the Dashboard
