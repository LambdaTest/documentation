# Getting Started With Uploading Screenshots through API for Visual Regression Testing

This is the guide to setup the **version 2** of the SmartUI upload API.

### Prerequisites for running SmartUI

- Basic understanding of HTTP APIs is required.
- Go to [`LambdaTest SmartUI`](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/) and login along with your credentials.
- Copy `LT_USERNAME` and `LT_ACCESS_KEY` credentials from `Access Key` button on the top right of the dashboard.

The following steps will guide you in running your first Visual Regression test on TestMu AI SmartUI platform -

### Create a SmartUI Project

To create a SmartUI Project, follow these steps:

- Go to [Projects page](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/)
- Click on the `new project` button
- Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
- Click on **Submit**.

Once, the project is created then you copy the `Project Token` from the application, here is a sample project token:

```bash
projectToken = "123456#1234abcd-****-****-****-************"
```

### Upload screenshots via API

Once you have created a SmartUI Project, you can upload your local screenshots to the projects which will create a build.

Follow the below steps to upload screenshots -

**Step 1:** Copy the below API endpoint to your project.

```
API_URL="https://api.lambdatest.com/automation/smart-ui/v2/upload"
```

**NOTE**
For more information, please visit our [API documentation](https://www.testmuai.com/support/api-doc/).

**Step 2:** Add the following information to your API payload `form-body`:

| Variable            | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                           | Is Mandatory? |
| ------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| files               | array   | You can add the path to the files which will be uploaded. `files : [ "path/to/file-1", ""path/to/file-2"]`                                                                                                                                                                                                                                                                                                                                       | True          |
| projectToken        | string  | Project token needs to be specified to upload the files and validate the project . `projectToken:123456#1234abcd-****-****-****-************`                                                                                                                                                                                                                                                                                   | True          |
| buildName           | string  | Name anything of your choice specified for the uploaded screenshots to a build. `buildName : #`                                                                                                                                                                                                                                                                                                                                      | Optional      |
| baseline            | boolean | An option to make your build as a baseline build for comparison . `baseline : true/false`                                                                                                                                                                                                                                                                                                                                                        | Optional      |
| screenshotName  new | string  | Pass the unique screenshot name in order to compare it. | Optional         |

**NOTE**
We only support the following formats: `.png` `.jpeg` `.jpg`

Please see the below screenshot for adding your screenshots which needs to be uploaded for your project to generate a build.
