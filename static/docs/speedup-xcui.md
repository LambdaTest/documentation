# Filters for XCUI Tests

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

Usually, all the test cases of your XCUI test suite are executed, but there is a way to filter these. You can specify some selected classes or tests, which provides you with options to filter the test cases which you want to execute.

To filter the test cases, you just need to pass the suitable parameters in TestMu AI’s REST API request. Refer to the table below to understand how to use various filters provided by TestMu AI.

Given below is the REST API endpoint:

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/xcui/build' \
--header 'Authorization: Basic BASIC_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
"app" : "APP_ID",
"testSuite": "TEST_SUITE_ID",
"device" :  ["iPhone 11-14"],
"video" : true,
"queueTimeout": 10800,
"idleTimeout": 150,
"devicelog": true,
"network": false,
"build" : "Proverbial-XCUITest"
}'
```

| Parameters | Description | Values | Datatype |
|----------- | ----------- | ------ | -------- |
| `only-testing`  | Allows the user to run only those tests/classes provided in the list | Values can be of the following format: className or className/testName. E.g. `["Class1/Test1", "Class2"]` | Array |
| `skip-testing`  | Allows the user to run all the tests/classes except the ones provided in the list | Values can be of the following format: className or className/testName. E.g. `["Class1/Test1", "Class2"]` | Array |

**Note**
You can not use the following filters simultaneously.
- `only-testing` and `skip-testing`
- `xctestplan` and `only-testing`/`skip-testing`
