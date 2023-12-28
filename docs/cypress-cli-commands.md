---
id: cypress-cli-commands
title: List of LambdaTest Cypress CLI Commands
hide_title: true
sidebar_label: Cypress CLI Commands
description: List of all the commands and arguments supported by LambdaTest-Cypress CLI.
keywords:
  - cypress cli commands
  - lambdatest cypress cli commands
  - lambdatest cypress cli flags
  - lambdatest cypress cli arguments

url: https://www.lambdatest.com/support/docs/cypress-cli-commands/
site_name: LambdaTest
slug: cypress-cli-commands/
---

# List of LambdaTest Cypress CLI Commands
---


Check out the list of all the commands supported by LambdaTest-Cypress CLI.

Following is the syntax for using the LambdaTest-Cypress CLI commands.

```bash
lambdatest-cypress <command> [options]
```

| Command / Arg  | Purpose                                                |
| -------------- | ------------------------------------------------------ |
| **--help**     | To get information of all the commands that can be run |
| **init**       | To create an initial config file                       |
| **run**        | To run tests on LambdaTest                             |
| **build-info** | To get information about the build                     |
| **build-stop** | To stop all the tests in the build                     |
| **generate-report** | To generate the test session report               |

## init command
---

The init command to generate a initial lambdatest configuration file.

```
lambdatest-cypress init
```

**Example:**

<img loading="lazy" src={require('../assets/images/cypressten/1.PNG').default} alt="Image" width="703" height="220"  className="doc_img"/><br/><br/>

On running the above command, it will generate `base_reporter_config.json`,`custom_support_file.js` and `lambdatest-config.json ` files. 

1. `base_reporter_config.json` - It is the configuration file for mochawesome reporter, that LambdaTest uses to generate mochawesome reports which in turn is used to generate the commands section on the LambdaTest dashboard. For Cypress 10, the absence of this file may lead to the commands section not being visible on the dashboard.

2. `custom_support_file.js` - By default, Cypress automatically captures screenshots when a test fails. For Cypress 10, in order to make the screenshot visible with the failed tests on our dashboard, we recommend you move and import this file as recommended.

3. `lambdatest-config.json` - This file contains configurations like LambdaTest credentials, capabilities, run settings etc., that are required to run the test.

## Run command
---

:::info Note
For detailed examples of each Cypress flag, please visit our guide [Configuring Cypress Test Execution](https://www.lambdatest.com/support/docs/run-settings/).
:::

To start running the test build, you can use the given-below command.

```bash
lambdatest-cypress run
```

Given below are the additional flags available with the `run` command.

| Flag                             | Purpose                                                | Type |
| ---------------------------------- | ------------------------------------------------------ | -----|
| **--version**                      | Show version number                                    |Boolean|
| **--help**                         | Show help                                              |Boolean|
| **--ccf, --cypress-config-file**   | Path of the config file                                |String |
| **--lcf, –lambdatest-config-file** | Path of the LambdaTest config file                     |String |
| **-s, --specs**                    | Path of the spec file or directory or pattern          |String |
| **--bn, --build-name**             | Build name                                             |String |
| **-t, --tags**                     | Test tags                                              |String |
| **-p, --parallels**                | No of parallel sessions                                |String |
| **--envs, --env-variables** (For Cypress 9)      | Set environment variables to configure before your test runs |String |
| **--envs, --environment** ( For Cypress 10)      | Set environment variables to configure before your test runs |String |
| **--tun, --tunnel**                | Configure LambdaTest tunnel                            |String |
| **--tname, --tunnel_name**         | Set the name of LambdaTest tunnel name                 |String |
| **--brs, --browsers**              | Test will be run on the specified browsers<br/> in the format: `platform:browser:version` <br /><br /> e.g. **`--brs="MacOS Catalina:chrome:latest"`**  <br /><br /> **`--brs="MacOS Catalina:chrome:112.0,MacOS mojave:firefox:111.0"`** |String |
| **--bi, --build-identifier**       | Build identifier or build counter                      |String |
| **--if, --ignore_files**          | Files to ignore in the zip project                      |String |
| **--sync, --sync-mode**           | Wait on terminal to get the status of the tests          |String |
| **--autostart, --tat**             | LambdaTest Tunnel auto Start                            |String |
| **--headless, --headless-mode**    | Run in Headless mode                                    |Boolean |
| **--net, --network**    | To capture Network logs                                               |String |
| **--eof, --exit-on-failure**    | Exit with Code 1 on failure                                |String |
| **--cy, --cypress_settings**    | Pass Cypress settings                                    |String |
| **--geo, --geo_location**    | Pass Geo country code                                |String |
| **--sof, --stop_on_failure**    | Stop other tests if any test in session gets errored out  |String |
| **--ra, --reject_unauthorized**    | Default rejects self signed certificates in external requests |String |
| **--bt, --build-tags**    | Build tags  | String |
| **--sys-envs, --sys-env-variables**    | To set system variables during test run time |String |
| **--npm-lpd=true, --legacy-peer-deps=true**    | Ignore peer dependencies and proceed with the NPM installation  | String |
| **--npm-f=true, --npm-force=true**    | Fetch remote resources even if a local copy already exists |String |

## Build info command
---

You can use the `build-info` command to get information on the build.

```bash
lambdatest-cypress build-info
```

Given below are the additional arguments available with the `build-info` command.

| Flag   | Purpose    | Type |
| --------| -----------| -----|
| **--id, --build-id** | Build Identifier | String, Required |
| **--user, --username** | Your LambdaTest username | String |
| **--ak, --access_key** | Your LambdaTest access key | String |

**Example:**

<img loading="lazy" src={require('../assets/images/cypressten/2.png').default} alt="Image" width="710" height="224"  className="doc_img"/>

## Build stop command
---

You can use the `build-stop` command to stop all the test in the build.

```bash
lambdatest-cypress build-stop
```

Given below are the additional arguments available with the `build-stop` command.

| Flag             | Purpose   | 
| -------------------- | --------- | 
| **--id, --session_id** | Identifies the session | 
| **--sls, --stop_last_session** | Stop the last test session | 

**Example**: `--stop_last_session`

<img loading="lazy" src={require('../assets/images/cypressten/build_stop.png').default} alt="Image" width="710" height="224"  className="doc_img"/>

**Example**: `--session_id`

<img loading="lazy" src={require('../assets/images/cypressten/id_build_stop.png').default} alt="Image" width="710" height="224"  className="doc_img"/>



<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Cypress CLI Commands
      </span>
    </li>
  </ul>
</nav>


