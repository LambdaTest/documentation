---
id: cypress-cli-commands
title: List of TestMu AI Cypress CLI Commands
hide_title: false
sidebar_label: Cypress CLI Commands
description: List of all the commands and arguments supported by TestMu AI-Cypress CLI.
keywords:
  - cypress cli commands
  - testmu ai cypress cli commands
  - testmu ai cypress cli flags
  - testmu ai cypress cli arguments
url: https://www.testmu.ai/support/docs/cypress-cli-commands
site_name: LambdaTest
slug: cypress-cli-commands
canonical: https://www.testmu.ai/support/docs/cypress-cli-commands/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Cypress",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "CLI Commands",
          "item": `${BRAND_URL}/support/docs/cypress-cli-commands/`
        }]
      })
    }}
></script>
The <BrandName />-Cypress CLI provides a set of commands to streamline and enhance your testing workflows on the <BrandName /> platform. Below is a comprehensive list of supported commands and their usage.

## General Syntax
To use any command in the <BrandName />-Cypress CLI, follow this basic syntax:
```bash
lambdatest-cypress <command> [options]
```

| Command / Arg  | Purpose                                                |
| -------------- | ------------------------------------------------------ |
| `--help`     | To get information of all the commands that can be run |
| `init`       | To create an initial config file                       |
| `run`        | To run tests on <BrandName />                             |
| `build-info` | To get information about the build                     |
| `build-stop` | To stop all the tests in the build                     |
| `generate-report` | To generate the test session report               |
| `--vip, --vi-project` | To set the smart ui project name. <br /> The acceptable data type is `string` |
| `--vib , --vi-build` | To set the smart ui build name. <br /> The acceptable data type is `string` |
| `--vibase , --vi-base` | To set that build as baseline for smart ui. <br /> The acceptable data type is `boolean` |

## `init` command
The `init` command to generate a initial lambdatest configuration file.

```
lambdatest-cypress init
```

<img loading="lazy" src={require('../assets/images/cypressten/1.PNG').default} alt="Image" className="doc_img"/><br/><br/>

On running the above command, it will generate `base_reporter_config.json`,`custom_support_file.js` and `lambdatest-config.json` files. 

- **`base_reporter_config.json`**: This is the configuration file for mochawesome reporter, that <BrandName /> uses to generate mochawesome reports which in turn is used to generate the commands section on the <BrandName /> dashboard. For Cypress 10, the absence of this file may lead to the commands section not being visible on the dashboard.

- **`custom_support_file.js`**: By default, Cypress automatically captures screenshots when a test fails. For Cypress 10, in order to make the screenshot visible with the failed tests on our dashboard, we recommend you move and import this file as recommended.

- **`lambdatest-config.json`**: This file contains configurations like <BrandName /> credentials, capabilities, run settings etc., that are required to run the test.

## `run` command

:::info Note
For detailed examples of each Cypress flag, please visit our guide [Configuring Cypress Test Execution](/support/docs/run-settings/).
:::

To start running the test build, you can use the given-below command.

```bash
lambdatest-cypress run
```

Given below are the additional flags available with the `run` command.

| Flag                                      | Purpose                                                | Type |
| ----------------------------------------- | ------------------------------------------------------ | -----|
| `--version`                               | Show version number <br /> e.g. `lambdatest-cypress run -–version` |NA|
| `--help`                                  | Show help <br /> e.g. `lambdatest-cypress run -–help` |NA|
| `--ccf, --cypress-config-file`            | Path of the config file <br /> e.g. `lambdatest-cypress run --ccf="base_reporter_config.json"` |String |
| `--lcf, –lambdatest-config-file`          | Path of the <BrandName /> config file <br /> e.g. `lambdatest-cypress run --lcf="lambdatest-config.json"` |String |
| `-s, --specs`                             | Path of the spec file or directory or pattern <br /> e.g. `lambdatest-cypress run --s=”path_from_content_root"` |String |
| `--bn, --build-name`                      | Build name                                             |String |
| `-t, --tags`                              | Test tags                                              |String |
| `-p, --parallels`                         | No of parallel sessions                                |String |
| `--envs, --env-variables` (Cypress 9)     | Set environment variables to configure before your test runs |String |
| `--envs, --environment` (Cypress 10)      | Set environment variables to configure before your test runs |String |
| `--tun, --tunnel`                         | Configure <BrandName /> tunnel <br /> e.g. `lambdatest-cypress run --tun="true" –tname="v3"` |String |
| `--tname, --tunnel_name`                  | Set the name of <BrandName /> tunnel name <br /> e.g. `lambdatest-cypress run --tun="true" –tname="v3"` |String |
| `--brs, --browsers`                       | Test will be run on the specified browsers <br/> in the format: `platform:browser:version` <br /><br /> e.g. `--brs="MacOS Catalina:chrome:latest"`  <br /><br /> `--brs="MacOS Catalina:chrome:112.0,MacOS mojave:firefox:111.0"` |String |
| `--bi, --build-identifier`                | Build identifier or build counter                      |String |
| `--if, --ignore_files`                    | Files to ignore in the zip project <br /> e.g. `lambdatest-cypress run --if="cypress/e2e/1-getting-started/actions.cy.js"` |String |
| `--sync, --sync-mode`                     | Wait on terminal to get the status of the tests <br /> e.g. `lambdatest-cypress run --sync=true` |String |
| `--autostart, --tat`                      | <BrandName /> Tunnel auto Start <br /> e.g. `lambdatest-cypress run --autostart=true` |String |
| `--headless, --headless-mode`             | Run in Headless mode <br /> e.g. `lambdatest-cypress run --headless=true` |Boolean |
| `--net, --network`                        | To capture Network logs <br /> e.g. `lambdatest-cypress run --net="true"` |String |
| `--eof, --exit-on-failure`                | Exit with Code 1 on failure <br /> e.g. `lambdatest-cypress run ---exit-on-failure=”true”` |String |
| `--cy, --cypress_settings`                | Pass Cypress settings  <br /> e.g. `lambdatest-cypress run --cy=viewportWidth=1000;viewportHeight=660;` |String |
| `--geo, --geo_location`                   | Pass Geo country code <br /> e.g. `lambdatest-cypress run ---geo_location=AU` <br /> Check all the available Geolocations. |String |
| `--sof, --stop_on_failure`                | Stop other tests if any test in session gets errored out <br /> e.g. `lambdatest-cypress run  --stop_on_failure=true` |String |
| `--ra, --reject_unauthorized`             | Default rejects self signed certificates in external requests <br /> e.g. `lambdatest-cypress run  --reject_unauthorized=true` |String |
| `--bt, --build-tags`                      | Build tags <br /> e.g. `lambdatest-cypress run --build-tags=tag1` | String |
| `--sys-envs, --sys-env-variables`         | To set system variables during test run time <br /> e.g. `lambdatest-cypress run --sys-envs="BASE_URL=https://lambdatest.com;"` |String |
| `--npm-lpd=true, --legacy-peer-deps=true` | Ignore peer dependencies and proceed with the NPM installation  | String |
| `--npm-f=true, --npm-force=true`          | Fetch remote resources even if a local copy already exists <br /> e.g. `lambdatest-cypress run  --npm-force=true` |String |

## `build-info` command
You can use the `build-info` command to get information on the build.

```bash
lambdatest-cypress build-info
```

Given below are the additional arguments available with the `build-info` command.

| Flag   | Purpose    | Type |
| --------| -----------| -----|
| `--id, --build-id` | Build Identifier | String, Required |
| `--user, --username` | Your <BrandName /> username | String |
| `--ak, --access_key` | Your <BrandName /> access key | String |

<img loading="lazy" src={require('../assets/images/cypressten/2.png').default} alt="Image" width="710" height="224"  className="doc_img"/>

## `build-stop` command
You can use the `build-stop` command to stop all the test in the build.

```bash
lambdatest-cypress build-stop
```

Given below are the additional arguments available with the `build-stop` command.

| Flag             | Purpose   | 
| -------------------- | --------- | 
| `--id, --session_id` | Identifies the session | 
| `--sls, --stop_last_session` | Stop the last test session | 

- `--stop_last_session`

<img loading="lazy" src={require('../assets/images/cypressten/build_stop.png').default} alt="Image" width="710" height="224"  className="doc_img"/>

- `--session_id`

<img loading="lazy" src={require('../assets/images/cypressten/id_build_stop.png').default} alt="Image" width="710" height="224"  className="doc_img"/>
