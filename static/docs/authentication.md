# Authentication

Authenticate your Cypress test runs in the following ways -

1. Set up the **environment variables**. (or)
2. Utilizing the **CLI params**. (or)
3. Mention your **username** and **access key** in the **lambdatest-config.json**.

**Note**
We use the following order of precedence to determine which auth credentials to use if you use more than one option to pass your auth credentials:
CLI arguments > Options set in lambdatest-config.json > Environment variables

## Utilizing CLI Params:

The following args can be used while running tests using the run command.

| Arg        | Shorthand | Accepted values            |
| ---------- | --------- | -------------------------- |
| --username | --user        | Your TestMu AI username   |
| --access_key      | --ak        | Your TestMu AI access key |

For example -

  {`lambdatest-cypress run --username=${ YOUR_LAMBDATEST_USERNAME()} --ak=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}

## Using lambdatest-config.json:

The auth option will help you in specifying your username and access key. You can find your username and access key in the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). Both, the auth credentials set in environment variables and the ones mentioned in the lambdatest-config.json file will get overridden.

The options supported in the auth are as follows:

| Arg            | Accepted values            |
| -------------- | -------------------------- |
| **username**   | Your TestMu AI username   |
| **access_key** | Your TestMu AI access key |

For example -

```json title="lambdatest-config.json"
"lambdatest_auth": {
"username": "<your username>",
"access_key": "<your access key>"
},
```

## Setup the Environment Variables:

While utilizing the CLI params, you can set up the following environment variables.

| Env variable      | Accepted values            |
| ----------------- | -------------------------- |
| **LT_USERNAME**   | Your TestMu AI username   |
| **LT_ACCESS_KEY** | Your TestMu AI access key |

Or you can also set environment variables using following commands:

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}" \\
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}" \`
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

**Note**
By doing so, the auth credentials you use in your **lambdatest-config.json** file will get overridden only if these options are not provided in **lambdatest-config.json** file.
