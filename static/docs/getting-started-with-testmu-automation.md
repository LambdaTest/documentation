# Get Started With Selenium Testing

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run your Selenium tests on TestMu AI's cloud grid of 10,000+ browser/device combinations. Point your tests at the hub URL, add capabilities, and get parallel execution, video recordings, logs, and screenshots for every session - no infrastructure to maintain.

## Before You Begin

1. You need a TestMu AI account. [Sign up free](https://www.testmuai.com/register/) if you don't have one.
2. Visit the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard) and navigate to the left sidebar and select **Credentials**. Your **Username** and **Access Key** will be visible there, along with options to copy them for use.
3. Set them as environment variables:

```bash
export LT_USERNAME="YOUR_USERNAME"
export LT_ACCESS_KEY="YOUR_ACCESS_KEY"
```

```powershell
set LT_USERNAME="YOUR_USERNAME"
set LT_ACCESS_KEY="YOUR_ACCESS_KEY"
```

Your tests connect to the grid at:

```
https://{username}:{accessKey}@hub.lambdatest.com/wd/hub
```

## Choose How to Start

### Run Your First Test

New to cloud testing? Clone a sample project, set credentials, and run your first Selenium script on the grid.

### Migrate Your Test Suite

Already have Selenium tests? Change the hub URL, add credentials, and run them on the cloud.

### Explore the Dashboard

See where test results live - video playback, command logs, screenshots, and analytics.

### Configure Capabilities

Control which browser, version, OS, and advanced features your tests use.

## Related Selenium guides

- [Getting Started with Selenium 4](/support/docs/getting-started-with-selenium-4/) — set up and run Selenium 4 tests on the TestMu AI cloud grid.
- [Test Locally Hosted Websites with Selenium](/support/docs/test-locally-hosted-websites-with-selenium/) — run Selenium tests against locally hosted or staging sites using Tunnel.
- [Run PHP tests on the Selenium grid](/support/docs/quick-guide-to-run-php-tests-on-testmu-selenium-grid/) — a quick guide to running PHP Selenium tests on TestMu AI.
- [IE mode on Edge](/support/docs/ie-mode-on-edge/) — test legacy Internet Explorer behavior using IE mode on Microsoft Edge.

## Migrating to TestMu AI

- [Migrate from a Legacy Platform to TestMu AI](/support/docs/migrate-from-legacy-platform-to-testmu/) — move your existing tests from a legacy platform to TestMu AI.
