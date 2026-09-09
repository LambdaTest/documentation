# Espresso JUnit XML Reports

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

## Introduction

JUnit reports provide a detailed summary of test execution, allowing you to better understand your test outcomes. This document aims to guide you through the process of retrieving JUnit reports for Espresso tests executed on the TestMu AI platform.

## Objective

### By the end of this document, you should be able to:

1. Fetch JUnit reports for non-shard Espresso builds.

2. Fetch JUnit reports for shard builds, both for individual shards and all shards collectively.

## JUnit report APIs

**Non-shard build :**
To fetch the JUnit report for a `non-shard` build, you can use the following cURL command:

{`curl --location "https://mobile-api.lambdatest.com/mobile-automation/api/v1/framework/builds//report/?encoder=false" \
--header 'Authorization: Basic '`}

**Shard build (For single shard):**
To fetch the JUnit report for a `single shard` in a shard build,use:

{`curl --location 'https://mobile-api.lambdatest.com/mobile-automation/api/v1/framework/jobs//report/?shard=&encoder=false' \
--header 'Authorization: Basic '`}

**Shard build (For all the shards):**
To fetch the JUnit reports for `all shards` in a shard build, use:

{`curl --location 'https://mobile-api.lambdatest.com/mobile-automation/api/v1/framework/jobs//report/?encoder=false' \
--header 'Authorization: Basic '`}

- Authenticate the API using your TestMu AI username and access key, and replace `build_id`, `job_id` and `shard_id` for which you want to fetch report.
- It is recommended to run the sharding test(via HyperExecute CLI) in the verbose mode i.e. with the **--verbose** flag. This allows the shard ID(task ID) and build ID(Job ID) to be displayed in the logs and then they can be used to fetch the above reports.
- In case the report is not a valid XML format, the `encoder=true` parameter can be utilized to prevent the decoding of certain characters. Decoding is usually performed at the server's end to enhance the readability of the report.
