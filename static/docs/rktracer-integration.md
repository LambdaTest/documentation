# RKTracer Integration

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

Developed by RKValidate, RKTracer is a Code coverage tool capable of generating coverage data for different programming languages like C, C++, C#, Java, Kotlin, JavaScript, Python, etc; regardless of what compiler, cross compiler, embedded targets, or servers you use to test your apps.

With TestMu AI and RKTracer, you can generate Code coverage for your web and mobile apps across 3000+ real browsers, devices, and operating system combinations.

## RKTracer With Web Automation On TestMu AI

1. Download the TestMu AI [Java-TestNG GitHub repository](https://github.com/LambdaTest/Java-TestNG-Selenium/).

2. To run the single test using TestNG, pass the build command by prefixing it with `"rktracer"`

```
rktracer mvn test -D suite=single.xml
```

3. Pass the below command to get the test results.

```
rkresults
```

## RKTracer With App Automation On TestMu AI

1. Build your app with the RKTracer tool embedded.
2. Login to your TestMu AI account and perform the automated testing of your app.
3. Navigate to the [App Automation dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build) on TestMu AI.
4. Download the Device log file from TestMu AI App Automation dashboard.

5. Place the downloaded Device log file in your app directory.
6. Convert the file from `JSON` to `.txt` with below command `json2rk devicelog.json > rk-coverage.txt`.

7. Pass the below command to get the test results.

```
rkresults
```

## RKTracer With Real Time App Testing On TestMu AI

1. Build your app with the RKTracer tool embedded.
2. Login to your TestMu AI account and perform the real-time testing of your app.
3. Download the App logs of the real-time app test and place them in the build code directory.

4. Open the terminal from that folder and run the command `node har2rk.js `. It will convert the harfile into `rkcoverage.txt`.

5. Run the below command to get the results.

```
"rkresults"
```
