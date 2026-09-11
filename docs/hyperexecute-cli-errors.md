---
id: hyperexecute-cli-error
title: Debug your CLI Errors
hide_title: true
sidebar_label: CLI Errors
toc_max_heading_level: 2
description: "Debug HyperExecute jobs that fail because of CLI issues, and look up HyperExecute CLI error codes."
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - How to Debug a Failed Job
  - hyperexecute error codes
  - hyperexecute cli error codes
  - "ERR::NO::USER"
  - "ERR::HTTP::RESP"
url: https://www.testmuai.com/support/docs/hyperexecute-cli-error/
site_name: TestMu AI
slug: hyperexecute-cli-error/
canonical: https://www.testmuai.com/support/docs/hyperexecute-cli-error/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';


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
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Debug Failed Job",
          "item": `${BRAND_URL}/support/docs/hyperexecute-cli-error/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-cli-error/"
    },
    "headline": "Debug your CLI Errors",
    "description": "This document will help you debug your failed job if you are facing any CLI issues.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-cli-error/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "HyperExecute",
    "keywords": [
      "TestMu AI Hyperexecute",
      "TestMu AI Hyperexecute help",
      "TestMu AI Hyperexecute documentation"
    ],
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# How to Debug your CLI Errors

This document will help you debug your failed job if you are facing any CLI issues. 

If the CLI printed an error code such as `ERR::HTTP::RESP`, look it up in [Error Codes](#error-codes) below.

:::tip
If you are encountering any error which is properly not detailed, it is recommend to use [**`verbose`**](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/#--verbose) mode in HyperExecute CLI command.
:::


## Symbolic Link Error

This error will mark your Job as a **Lambda Error**.

You can encounter this error when you try to upload the **node_modules** directory along with the payload to trigger your Job in HyperExecute. This error generally occurs with your Node.js projects. You must avoid doing this, as it will not only save storage space but also avoid potential issues with version control. The node_modules folder holds all the project dependencies, and adding it to the repository can cause unnecessary file duplication and increase the repository size.

To resolve this issue, either you remove that directory or you simply add node_modules to the **.gitignore** file. This ensures you have a smooth development process without unnecessary hiccups.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/debugging-guide/cli-errors/symlink.png').default} alt="HyperExecute CLI output for a Symbolic Link Error, ending in Exiting with error: Lambda error found"  className="doc_img"/>

The CLI output looks like this:

<VerifiedTag value="Verified" />

```text
error    ERR::JOB::STS     Job lambda_error!
taskID:<task-id> has errored with remark: error in extracting: reading file in zip archive: <path>/node_modules/.bin/he: making symbolic link for: symlink #!/usr/bin/env node
LAMBDA_ERROR
error    Exiting with error: Lambda error found.
```

## Snooper Failed Error

It's crucial to understand a specific characteristic of Gherkin – it exclusively supports the use of **Examples** with the **Scenario Outline**. If you come across an error, it likely indicates that the **Scenario** is being employed with **Examples** instead of the intended **Scenario Outline**. To resolve this, ensure that you use the appropriate structure, employing the Scenario Outline when incorporating Examples.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/debugging-guide/cli-errors/snooper1.png').default} alt="Gherkin comparison: Examples under a Scenario Outline is recommended, Examples under a plain Scenario is not"  className="doc_img"/>

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/debugging-guide/cli-errors/snooper.png').default} alt="Snooper failed output: Unable to extract scenarios, Unable to parse file"  className="doc_img"/>

The CLI prints output like this:

<VerifiedTag value="Verified" />

```text
Snooper failed:
 Error occurred while running snooper command
 Caused by -> Unable to extract scenarios
 Caused by -> Unable to parse file: <path>/<file>.feature
```

Use **Examples** only under a **Scenario Outline**:

<VerifiedTag value="Verified" />

```text
Scenario Outline: test
  Then Click on User Profile
  And Click on Admin Dashboard
  Then Click on Save button
  Examples:
    | User |
    | home |
```

Not under a plain **Scenario**, which causes the error above:

<VerifiedTag value="Verified" />

```text
Scenario: test
  Then Click on User Profile
  And Click on Admin Dashboard
  Then Click on Save button
  Examples:
    | User |
    | home |
```

## Authentication Error

There may be cases where, when trying to connect to HyperExecute services, the CLI throws the following error:

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/debugging-guide/cli-errors/auth.png').default} alt="HyperExecute CLI output: ERR:HTTP:HOST Facing problem in connecting with LUMS_HOST"  className="doc_img"/>

<VerifiedTag value="Verified" />

```text
error    ERR:HTTP:HOST     Facing problem in connecting with LUMS_HOST :: https://auth.hyperexecute.cloud - prod  - error in authenticating user.
```

If the CLI printed an error code such as `ERR::NO::USER`, `ERR::NO::KEY`, or `ERR::HTTP::RESP`, see [Error Codes](#error-codes) below.

Now, to validate the connectivity and to make sure the **auth.hyperexecute.cloud** is reachable, you have to run a `scan` command in your CLI, as shown below. If the network scan fails, then you are required to whitelist the IP address.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/debugging-guide/cli-errors/auth1.png').default} alt="Output of hyperexecute --scan showing each HyperExecute host as reachable"  className="doc_img"/>

<VerifiedTag value="Verified" />

```text
hyperexecute.exe --scan
Running Network Scanner:
✓ Tunnel Host hts.lambdatest.com is reachable
✓ Download Assets Host downloads.lambdatest.com is reachable
✓ API Host api-hyperexecute.lambdatest.com is reachable
✓ Storage Host hypertestproduction.blob.core.windows.net is reachable
✓ Download Assets Host downloads.hyperexecute.cloud is reachable
✓ Authentication Host auth.hyperexecute.cloud is reachable

Network Scan Passed!
```

#### IPs to be Whitelisted

| FQDN | Protocol:Port | Reason |
|------|---------------|--------|
|*.hyperexecute.cloud | Https:443 |HyperExecute’s registered wildcard domain to allow access to all HyperExecute’s services|
|*.lambdatest.com | Https:443 | <BrandName />’s registered wildcard domain to allow access to all <BrandName />’s services (like auth, plan-validation) |

## Error Codes {#error-codes}

<!-- Verified 2026-09-11. ERR::NO::USER, ERR::NO::KEY, ERR::HTTP::RESP and ERR::UP::VER were reproduced by running HyperExecute CLI v0.2.354. ERR:HTTP:HOST and ERR::JOB::STS come from the real CLI screenshots on this page. Every code and YAML message below is present in the v0.2.354 binary. -->

When a HyperExecute run fails, the CLI prints an error code, a short title, and a suggested fix, then exits with code `1`. For example:

<VerifiedTag value="Verified" />

```text
error    ERR::NO::USER     Unable to find LT username.    Unable to parse LT username. Use --user cli flag or LT_USERNAME environment variable
Error: ERR::NO::USER     Unable to find LT username.
```

The `error` lines are written to standard output, and the `Error:` line to standard error. Most codes have the form `ERR::DOMAIN::REASON`. Search this page for the code you see. Each code can also be written with underscores, such as `ERR_NO_USER`.

Documented for HyperExecute CLI **v0.2.354**.

:::note Credentials are checked first
The CLI checks your credentials **before** it validates your YAML. If your credentials are wrong, you see `ERR::HTTP::RESP` with a 401 even when your YAML also has a problem. Fix your credentials first, then run the command again to see any other error.
:::

### ERR::NO::USER {#err_no_user}

| Field | Value |
|-------|-------|
| **Alias** | `ERR_NO_USER` |
| **What happened** | The CLI could not find a <BrandName /> username. |
| **What to do** | Set the `LT_USERNAME` environment variable, or pass `--user`. See [how to find your username and access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/). |
| **Exit code** | `1` |

<VerifiedTag value="Verified" />

```text
error    ERR::NO::USER     Unable to find LT username.    Unable to parse LT username. Use --user cli flag or LT_USERNAME environment variable
Error: ERR::NO::USER     Unable to find LT username.
```

### ERR::NO::KEY {#err_no_key}

| Field | Value |
|-------|-------|
| **Alias** | `ERR_NO_KEY` |
| **What happened** | The CLI could not find a <BrandName /> access key. |
| **What to do** | Set the `LT_ACCESS_KEY` environment variable, or pass `--key`. See [how to find your username and access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/). |
| **Exit code** | `1` |

<VerifiedTag value="Verified" />

```text
error    ERR::NO::KEY     Unable to find LT access key.    Unable to parse LT access key. Use --key cli flag or LT_ACCESS_KEY environment variable
Error: ERR::NO::KEY     Unable to find LT access key.
```

### ERR::HTTP::RESP {#err_http_resp}

| Field | Value |
|-------|-------|
| **Alias** | `ERR_HTTP_RESP` |
| **What happened** | The HyperExecute API returned an error status. With a wrong username or access key, the CLI prints `non-20x status code 401` and `Invalid user/key credentials`. |
| **What to do** | Check your username and access key. See [how to find your username and access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/). |
| **You may be seeing this for a different reason** | Credentials are checked before your YAML. A missing `framework:` key, an invalid `partialReports` type, and a `--config` path that does not exist all show this code when the credentials are also wrong. Fix the credentials first. |
| **Exit code** | `1` |

<VerifiedTag value="Verified" />

```text
error    ERR::UP::VER     Unable to fetch latest version from upstream  ERR::HTTP::RESP     non-20x status code 401    Invalid user/key credentials
Error: ERR::HTTP::RESP     non-20x status code 401    Invalid user/key credentials
```

### ERR::UP::VER {#err_up_ver}

| Field | Value |
|-------|-------|
| **Alias** | `ERR_UP_VER` |
| **What happened** | The CLI could not fetch its latest version from the server. |
| **When you see it** | With rejected credentials, it is printed on the same line as `ERR::HTTP::RESP`. |
| **What to do** | Fix the credentials problem reported by [ERR::HTTP::RESP](#err_http_resp). |
| **Exit code** | `1` |

<VerifiedTag value="Verified" />

```text
error    ERR::UP::VER     Unable to fetch latest version from upstream  ERR::HTTP::RESP     non-20x status code 401    Invalid user/key credentials
```

### ERR:HTTP:HOST {#err_http_host}

| Field | Value |
|-------|-------|
| **Alias** | `ERR_HTTP_HOST` |
| **What happened** | The CLI could not connect to the HyperExecute authentication service at `auth.hyperexecute.cloud`. |
| **What to do** | Run the CLI with `--scan` to check each host, and allow the hosts in [IPs to be Whitelisted](#ips-to-be-whitelisted). See [Authentication Error](#authentication-error). |

<VerifiedTag value="Verified" />

```text
error    ERR:HTTP:HOST     Facing problem in connecting with LUMS_HOST :: https://auth.hyperexecute.cloud - prod  - error in authenticating user.
```

### ERR::JOB::STS {#err_job_sts}

| Field | Value |
|-------|-------|
| **Alias** | `ERR_JOB_STS` |
| **What happened** | The job finished with an error status, which the CLI prints after the code, for example `Job lambda_error!`. |
| **Example** | In the [Symbolic Link Error](#symbolic-link-error) above, the status was `lambda_error`, caused by symbolic links in an uploaded `node_modules` folder. |
| **What to do** | Read the task remarks printed below the code. |

<VerifiedTag value="Verified" />

```text
error    ERR::JOB::STS     Job lambda_error!
```

## Quick Lookup Table

| Code | Alias | What to do |
|------|-------|------------|
| `ERR::NO::USER` | `ERR_NO_USER` | Set `LT_USERNAME` or pass `--user` |
| `ERR::NO::KEY` | `ERR_NO_KEY` | Set `LT_ACCESS_KEY` or pass `--key` |
| `ERR::HTTP::RESP` | `ERR_HTTP_RESP` | Check your username and access key |
| `ERR::UP::VER` | `ERR_UP_VER` | Fix the credentials problem reported with it |
| `ERR:HTTP:HOST` | `ERR_HTTP_HOST` | Run `--scan` and allow the listed hosts |
| `ERR::JOB::STS` | `ERR_JOB_STS` | Read the status and task remarks after the code |

## Handling Error Codes in CI

Every failure exits with a non-zero code and prints the error code, so you can branch on it:

<VerifiedTag value="Verified" />

```bash
OUTPUT=$(hyperexecute --config hyperexecute.yaml 2>&1)
STATUS=$?
CODE=$(echo "$OUTPUT" | grep -oE 'ERR::?[A-Z0-9_]+(::?[A-Z0-9_]+)*' | head -1)

if [ "$STATUS" -ne 0 ]; then
  case "$CODE" in
    ERR::NO::USER|ERR::NO::KEY|ERR::HTTP::RESP)
      echo "Credentials problem - check LT_USERNAME and LT_ACCESS_KEY" ;;
    *)
      echo "HyperExecute CLI failed with $CODE" ;;
  esac
  exit 1
fi
```

## YAML Validation Messages {#yaml-validation-messages}

The CLI includes these validation messages for `hyperexecute.yaml`. Each one names the key to fix. See the [YAML reference](/support/docs/deep-dive-into-hyperexecute-yaml/).

| Message | What to do |
|---------|------------|
| `framework name is required under framework directive` | Add `name` under `framework`. |
| `PlatformName is required in case of raw framework` | Add `platformName` when you use the raw framework. |
| `Devices cannot be empty in case of XCUI framework` | List at least one device. |
| `type key is required under testDiscovery directive` | Add `type` under `testDiscovery`. |
| `Command key is required under testDiscovery directive` | Add `command` under `testDiscovery`. |
| `Test discoverer command is required in auto split mode` | Provide a discovery command when you use auto split. |
| `Discovery object not found in yaml` | Add a `testDiscovery` block. |
| `Concurrency is required in autosplit mode` | Set `concurrency`. |
| `Matrix.os is required in case of hybrid mode!!` | Add `matrix.os`. |
| `` multiple OS is not allowed without `matrix.os` `` | Declare multiple operating systems with `matrix.os`. |
| `Invalid type given in partialReports key in yaml` | Correct the `type` value under `partialReports`. |
| `AppPath or AppId is required in case of real devices` | Provide `appPath` or `appId`. |

## Other Error Codes {#other-codes}

The CLI can also print the codes below. Their causes are not documented yet. If you see one, contact support with the full CLI output.

| Code | Alias |
|------|-------|
| `ERR::API::MAX::RET` | `ERR_API_MAX_RET` |
| `ERR::API::RES::4XX` | `ERR_API_RES_4XX` |
| `ERR::API::SRV::STR` | `ERR_API_SRV_STR` |
| `ERR::ART::POL` | `ERR_ART_POL` |
| `ERR::AZCOPY::DOWN` | `ERR_AZCOPY_DOWN` |
| `ERR::BASE::HTY` | `ERR_BASE_HTY` |
| `ERR::BIN::DOWN` | `ERR_BIN_DOWN` |
| `ERR::BIN::INV` | `ERR_BIN_INV` |
| `ERR::BIN::UPD` | `ERR_BIN_UPD` |
| `ERR::DAR::PAR` | `ERR_DAR_PAR` |
| `ERR::DAR::READ` | `ERR_DAR_READ` |
| `ERR::DAS::CHM` | `ERR_DAS_CHM` |
| `ERR::DAS::ODR` | `ERR_DAS_ODR` |
| `ERR::DAS::RDR` | `ERR_DAS_RDR` |
| `ERR::DATA::INV` | `ERR_DATA_INV` |
| `ERR::DATA::LMT` | `ERR_DATA_LMT` |
| `ERR::DATA::NTFND` | `ERR_DATA_NTFND` |
| `ERR::DIR::NTFND` | `ERR_DIR_NTFND` |
| `ERR::DIS::INFLIGHT` | `ERR_DIS_INFLIGHT` |
| `ERR::DIS::RESP` | `ERR_DIS_RESP` |
| `ERR::DWN::ART` | `ERR_DWN_ART` |
| `ERR::DWN::RPT` | `ERR_DWN_RPT` |
| `ERR::EXE::DOWN` | `ERR_EXE_DOWN` |
| `ERR::FIL::STA` | `ERR_FIL_STA` |
| `ERR::FILE::CHK` | `ERR_FILE_CHK` |
| `ERR::FILE::WALK` | `ERR_FILE_WALK` |
| `ERR::GIT::UPL` | `ERR_GIT_UPL` |
| `ERR::HTTP::GET` | `ERR_HTTP_GET` |
| `ERR::HTTP::NTFND` | `ERR_HTTP_NTFND` |
| `ERR::HTTP::SRV` | `ERR_HTTP_SRV` |
| `ERR::INF::API::MAX::ATTEMPT` | `ERR_INF_API_MAX_ATTEMPT` |
| `ERR::INH::HT_YAML` | `ERR_INH_HT_YAML` |
| `ERR::INV::ARCH` | `ERR_INV_ARCH` |
| `ERR::INV::CYP` | `ERR_INV_CYP` |
| `ERR::INV::ENV` | `ERR_INV_ENV` |
| `ERR::INV::MVN` | `ERR_INV_MVN` |
| `ERR::INV::NUG` | `ERR_INV_NUG` |
| `ERR::IO::CPY` | `ERR_IO_CPY` |
| `ERR::IO::READ` | `ERR_IO_READ` |
| `ERR::IO::WRITE` | `ERR_IO_WRITE` |
| `ERR::JAR::DOWN` | `ERR_JAR_DOWN` |
| `ERR::JOB::ABT` | `ERR_JOB_ABT` |
| `ERR::JOB::DIS` | `ERR_JOB_DIS` |
| `ERR::JOB::DTL` | `ERR_JOB_DTL` |
| `ERR::JOB::FLR` | `ERR_JOB_FLR` |
| `ERR::JOB::INI` | `ERR_JOB_INI` |
| `ERR::JOB::POL` | `ERR_JOB_POL` |
| `ERR::JOB::UPL` | `ERR_JOB_UPL` |
| `ERR::JSON::DCD` | `ERR_JSON_DCD` |
| `ERR::JSON::MAR` | `ERR_JSON_MAR` |
| `ERR::JSON::UN_MAR` | `ERR_JSON_UN_MAR` |
| `ERR::NET::LSTN` | `ERR_NET_LSTN` |
| `ERR::NET::PORT` | `ERR_NET_PORT` |
| `ERR::NO::HTY` | `ERR_NO_HTY` |
| `ERR::OS::CHMOD` | `ERR_OS_CHMOD` |
| `ERR::OS::CRT_DIR` | `ERR_OS_CRT_DIR` |
| `ERR::OS::CRT_FIL` | `ERR_OS_CRT_FIL` |
| `ERR::OS::ENV` | `ERR_OS_ENV` |
| `ERR::OS::FILE` | `ERR_OS_FILE` |
| `ERR::OS::GET_DIR` | `ERR_OS_GET_DIR` |
| `ERR::OS::HOME` | `ERR_OS_HOME` |
| `ERR::OS::OPEN` | `ERR_OS_OPEN` |
| `ERR::OS::READ` | `ERR_OS_READ` |
| `ERR::OS::RMV` | `ERR_OS_RMV` |
| `ERR::OS::RMVALL` | `ERR_OS_RMVALL` |
| `ERR::OS::WRITE` | `ERR_OS_WRITE` |
| `ERR::PAR::HT_YAML` | `ERR_PAR_HT_YAML` |
| `ERR::PLAN::EXP` | `ERR_PLAN_EXP` |
| `ERR::POLICY::REJECTED` | `ERR_POLICY_REJECTED` |
| `ERR::PROJECT::NTFND` | `ERR_PROJECT_NTFND` |
| `ERR::READ::HT_YAML` | `ERR_READ_HT_YAML` |
| `ERR::REC::SET` | `ERR_REC_SET` |
| `ERR::REGX::COMP` | `ERR_REGX_COMP` |
| `ERR::RESP::STRCT` | `ERR_RESP_STRCT` |
| `ERR::RPT::POL` | `ERR_RPT_POL` |
| `ERR::SNOOPER::DOWN` | `ERR_SNOOPER_DOWN` |
| `ERR::STG::DWN` | `ERR_STG_DWN` |
| `ERR::STG::POL` | `ERR_STG_POL` |
| `ERR::TIME::OUT` | `ERR_TIME_OUT` |
| `ERR::TNL::ABT` | `ERR_TNL_ABT` |
| `ERR::TNL::SPRT` | `ERR_TNL_SPRT` |
| `ERR::TSK::DSC` | `ERR_TSK_DSC` |
| `ERR::TST::DTCT` | `ERR_TST_DTCT` |
| `ERR::TUN::INT` | `ERR_TUN_INT` |
| `ERR::TUN::RESP` | `ERR_TUN_RESP` |
| `ERR::TUN::RUN` | `ERR_TUN_RUN` |
| `ERR::TUN::STP` | `ERR_TUN_STP` |
| `ERR::TUN::STR` | `ERR_TUN_STR` |
| `ERR::UPD::NF` | `ERR_UPD_NF` |
| `ERR::URL::PAR` | `ERR_URL_PAR` |
| `ERR::VER::NTFND` | `ERR_VER_NTFND` |
| `ERR::VIP::BND` | `ERR_VIP_BND` |
| `ERR::XML::MAR` | `ERR_XML_MAR` |
| `ERR::XML::UNMAR` | `ERR_XML_UNMAR` |
| `ERR::YAML::DEF::RPT` | `ERR_YAML_DEF_RPT` |
| `ERR::YAML::TYP` | `ERR_YAML_TYP` |
| `ERR::YAML::TYP::FRM` | `ERR_YAML_TYP_FRM` |
| `ERR::YAML::TYP::LOC` | `ERR_YAML_TYP_LOC` |
| `ERR::YML::MAR` | `ERR_YML_MAR` |
| `ERR::YML::VAL` | `ERR_YML_VAL` |
| `ERR::ZIP::ARC` | `ERR_ZIP_ARC` |
| `ERR::ZIP::OPN` | `ERR_ZIP_OPN` |
| `ERR::ZIP::UN_ARC` | `ERR_ZIP_UN_ARC` |
| `ERR::ZIP::UPL` | `ERR_ZIP_UPL` |
| `ERR::ZIP::WRITE` | `ERR_ZIP_WRITE` |
| `ERR:HTTP:LINK` | `ERR_HTTP_LINK` |

> Two codes use single colons, `ERR:HTTP:LINK` and `ERR:HTTP:HOST`. This matches what the CLI prints.

## Related

- [Kane CLI Error Codes](/support/docs/kane-cli-error-codes/)
- [KaneAI Errors](/support/docs/error-handling-kaneai/)
- [Platform Error Messages](/support/docs/error-messages/)
- [Tunnel Error Messages](/support/docs/troubleshooting-lambda-tunnel/#error-messages)
- [Timeouts, Issues and Resolutions](/support/docs/timeouts-issues-and-resolutions/)
