# How to Use Private Dependencies in Cypress on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

If your Cypress project installs packages from a private registry, you can run those tests on TestMu AI without the build failing on the missing dependency. TestMu AI installs and uses your private packages during the run, so tests that once failed with a `LambdaError` now execute against the same private code they use locally. You set this up by declaring the private dependency in `package.json` or `lambdatest-config.json`, adding a `.npmrc` file, and passing any access token through the `dep_token` capability.

**Sample repo**
This guide uses the TestMu AI [sample Cypress Cloud repository](https://github.com/LambdaTest/Cypress-Cloud). Clone it to follow along with the same files shown here.


## Execute Cypress Tests With Private Dependencies


These steps assume you have already run a Cypress test on TestMu AI. If you have not, see [how to run your first Cypress test](/support/docs/getting-started-with-cypress-testing/) first, then return here to add private dependencies.

### Update the TestMu AI Cypress CLI


Update the CLI first so it supports private dependency installation. Install the latest version:

```bash
npm install -g lambdatest-cypress-cli
```

The CLI version should be the latest, which is 2.3.0. Check the installed version:

```bash
lambdatest-cypress --version
```

### Add the Private Dependency


You can declare a private dependency in either the `package.json` file or the `lambdatest-config.json` file. Follow the steps for whichever approach fits your project.

- **If passing the private dependency in the `package.json` file**

  Add the private dependency, create a `.npmrc` file in the root directory of your project as highlighted below, and define the dependency in the `.npmrc` file as well.





- **If passing the private dependency in the `lambdatest-config.json` file**

  If you define the dependencies in the `lambdatest-config.json` file, it overrides the `package.json` file, and the TestMu AI cloud grid reads the dependencies from `lambdatest-config.json`. Define the dependencies in the `npm_dependencies` object inside `run_settings` of the `lambdatest-config.json` file. Here as well, create a `.npmrc` file and define the private dependency in it.






  If the private dependency uses an **access token** whose value comes from an **environment variable**, add the `dep_token` capability and list those environment variables in it. Pass multiple environment variables as a comma-separated list.


  The screenshot below shows the `dep_token` capability defined with its environment variables.




  Every key present in `dep_token` is replaced in the `.npmrc` file. If a key is not present in the environment variable, the run throws an error.


After completing this setup, run your tests on the TestMu AI platform. The tests now execute with the private dependencies installed.

To download packages over a tunnel, set environment variables, or change screen resolution, see [how to configure Cypress run settings](/support/docs/run-settings/).

## Related Cypress Guides


Continue with the guides below to run and debug your Cypress tests on TestMu AI.

- [Download artefacts from a Cypress run](/support/docs/download-artefacts-cypress/) pulls screenshots, videos, and logs from the cloud machine after a run.
- [Reference the Cypress CLI commands](/support/docs/cypress-cli-commands/) documents every `lambdatest-cypress` command and flag.
- [Run your first Cypress test](/support/docs/getting-started-with-cypress-testing/) clones the sample project and runs a test end to end.
