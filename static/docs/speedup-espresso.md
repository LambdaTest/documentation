# How to Filter Espresso Tests on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Filtering Espresso tests on TestMu AI lets you run only selected test cases instead of running the entire suite, speeding up execution. Pass parameters like package, class, annotation, and size to the REST API request through your AndroidJUnitRunner test runner.

Usually, all the test cases of your Espresso test suite are executed, but there is a way to filter these. You can use Espresso test runner (typically `AndroidJUnitRunner`), which provides you with multiple options to filter the test cases which you want to execute.

To filter the test cases, you just need to pass the suitable parameters in TestMu AI’s [REST API](/support/docs/getting-started-with-espresso-testing/) request. Refer to the table below to understand how to use various filters provided by TestMu AI.

Given below is the REST API endpoint:

```bash
POST   /framework/v1/espresso/build
```

| Parameters                  | Description                  | Values                                                                                                                                                                   | Datatype                                                                                                                                                                                                                                                                                                                                                        |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `package`               | Allows the user to only run specific packages defined               | Multiple packages can be passed in comma-separated format. E.g. `["com.example.proverbial.packagename"]`                                                                                                                                                             | Array                                                                                                                                                                                                                                                                                                                                                             |
| `skipPackage`               | Allows the user to run all packages except the ones defined               | Multiple packages can be passed in comma-separated format. E.g. `["com.example.proverbial.packagename"]`                                                                                                                                                             | Array                                                                                                                                                                                                                                                                                                                                                             |
| `class`               | Allows the user to only run specific classes defined               | Multiple classes can be passed in comma-separated format. E.g. `["com.example.proverbial.packagename.classname"]`                                                                                                                                                             | Array                                                                                                                                                                                                                                                                                                                                                             |
| `skipClass`               | Allows the user to run all classes except the ones defined               | Multiple classes can be passed in comma-separated format. E.g. `["com.example.proverbial.packagename.classname"]`                                                                                                                                                             | Array                                                                                                                                                                                                                                                                                                                                                             |
| `annotation`               | Allows the user to only run specific annotations defined               | Only a single annotation can be passed. E.g. `"com.example.proverbial.annotation"`                                                                                                                                                             | String                                                                                                                                                                                                                                                                                                                                                             |
| `skipAnnotation`               | Allows the user to run all annotations except the ones defined               | Only a single annotation can be passed. E.g. `"com.example.proverbial.annotation"`                                                                                                                                                             | String                                                                                                                                                                                                                                                                                                                                                             |
| `size`               | Allows the user to run only tests that are annotated with the matching size value `@SmallTest, @MediumTest or @LargeTest`               | You may specify only one value for this property from the three valid values i.e. `"small", "medium", "large"`                                                                                                                                                             | String                                                                                                                                                                                                                                                                                                                                                            |

**Note**
You can not use the following filters simultaneously.
- `class` and `package`
- `class` and `skipClass`
- `package` and `skipPackage`

**Note**
You can use the following filters simultaneously.
- `annotation` and `skipAnnotation`

## Some Examples

Please refer to the example `cURL` requests given below for your reference.

### 1. To run specifically defined packages

    {`curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/espresso/build' \\
        --header 'Authorization: Basic ' \\
        --header 'Content-Type: application/json' \\
        --data-raw '{
            "app" : "lt://APP_ID",
            "testSuite": "lt://TestSuite_ID",
            "device" :  ["Pixel 6-12"],
            "queueTimeout": 360,
            "IdleTimeout": 150,
            "deviceLog": true,
            "build" : "Proverbial-Espresso"
            "package" : ["com.example.proverbial.packagename1","com.example.proverbial.packagename2"]
            }'`}

```
{`curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/espresso/build" --header "Content-Type: application/json" --header "Authorization: Basic <Enter the Auth here>" --data-raw "{\"app\" : \"lt://APP_ID\",\"testSuite\": \"lt://APP_ID\",\"device\" :  [\"Pixel 6-12\"],\"queueTimeout\": 360,\"IdleTimeout\": 150,\"deviceLog\": true,\"network\": false,\"build\" : \"Proverbial-Espresso\",\"geoLocation\" : \"FR\", \"package\" : [\"com.example.proverbial.packagename1\", \"com.example.proverbial.packagename2\"]}"`}
```

### 2. To run specifically defined classes

    {`curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/espresso/build' \\
        --header 'Authorization: Basic ' \\
        --header 'Content-Type: application/json' \\
        --data-raw '{
            "app" : "lt://APP_ID",
            "testSuite": "lt://TestSuite_ID",
            "device" :  ["Pixel 6-12"],
            "queueTimeout": 360,
            "IdleTimeout": 150,
            "deviceLog": true,
            "build" : "Proverbial-Espresso"
            "class" : ["com.example.proverbial.packagename.classname1","com.example.proverbial.packagename.classname2"]
            }'`}

```
{`curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/espresso/build" --header "Content-Type: application/json" --header "Authorization: Basic <Enter the Auth here>" --data-raw "{\"app\" : \"lt://APP_ID\",\"testSuite\": \"lt://APP_ID\",\"device\" :  [\"Pixel 6-12\"],\"queueTimeout\": 360,\"IdleTimeout\": 150,\"deviceLog\": true,\"network\": false,\"build\" : \"Proverbial-Espresso\",\"geoLocation\" : \"FR\", \"class\" : [\"com.example.proverbial.packagename.classname1\",\"com.example.proverbial.packagename.classname2\"]}"`}
```

### 3. To run specifically defined annotations

    {`curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/espresso/build' \\
      --header 'Authorization: Basic ' \\
      --header 'Content-Type: application/json' \\
      --data-raw '{
          "app": "lt://APP_ID",
          "testSuite": "lt://TestSuite_ID",
          "device": ["Pixel 6-12"],
          "queueTimeout": 360,
          "IdleTimeout": 150,
          "deviceLog": true,
          "build": "Proverbial-Espresso",
          "filters": {
              "annotation": [
                  "com.lambdatest.proverbial.demo1","com.lambdatest.proverbial.demo2"
              ]
          }
      }'`}

```
{`curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/espresso/build" --header "Authorization: Basic <Enter the Auth here>" --header "Content-Type: application/json" --data-raw "{\"app\": \"lt://APP_ID\", \"testSuite\": \"lt://APP_ID\", \"device\": [\"Pixel 6-12\"], \"queueTimeout\": 360, \"IdleTimeout\": 150, \"deviceLog\": true, \"network\": false, \"build\": \"Proverbial-Espresso\", \"geoLocation\": \"FR\", \"filters\": {\"annotation\": [\"com.lambdatest.proverbial.demo1\", \"com.lambdatest.proverbial.demo2\"]}}"`}
```

This configuration will run tests annotated with multiple annotations, i.e., only the intersection of all mentioned annotations will be considered.
