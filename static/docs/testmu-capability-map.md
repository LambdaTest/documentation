# TestMu AI Capability Map to Migrate from BrowserStack & SauceLabs

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Switching automation platforms can seem challenging, but a clear capability comparison helps simplify the decision and migration process. Teams often explore alternative testing platforms to improve speed, scalability, test coverage, and overall efficiency in their delivery pipelines.

TestMu AI provides a cloud-based test execution environment that supports various automation frameworks, real device testing, visual validations, debugging tools, and analytics, making it a flexible option for organizations aiming to optimize and modernize their testing workflows.

## Authentication & TestMu AI Hub Configuration

To migrate your automation tests from BrowserStack or Sauce Labs to TestMu AI, you must add TestMu AI authentication credentials and configure the execution hub endpoint.

### Add Authentication Credentials
Firstly, you need to change the authentication in your configuration settings of your test suite. For running tests on TestMu AI Selenium Grid, you need to have a valid user_name and access_key to perform tests on our Grid. In case you do not have an account on TestMu AI, visit the TestMu AI signup page and create a new account.

When migrating your test from BrowserStack or Sauce Labs to TestMu AI, the following updates are required in your existing code:

1.  Get TestMu AI Credentials: You can find these credentials under Account Settings > [Password & Security](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security/username-accesskey) and copy your Username and Access Key, then add them to the .env file to keep them safe from public exposure.

2. Create .env file: Securely store your TestMu AI credentials, create a .env file in the root of your project and add the following values:

```
LT_USERNAME="<your_username>"
LT_ACCESS_KEY="<your_access_key>"
```

Once the .env file is set up, ensure your test framework correctly reads these variables at runtime. This helps keep your authentication secure and avoids hard-coding credentials within your scripts. With the credentials in place, you’re now ready to update your Hub URL for TestMu AI execution.

### Add TestMu AI Hub URL
Next, you need to add the TestMu AI Hub URL to your test suite configuration. This endpoint defines where the tests will be executed on the TestMu AI Grid.

```js
@hub.lambdatest.com/wd/hub
```

## Migrating from BrowserStack to TestMu AI

Switching between cloud-based automation platforms may require capability evaluation, test configuration updates, and CI/CD integration mapping. A side-by-side comparison helps simplify this transition by clarifying feature coverage, execution options, testing frameworks, and platform-level differences.

TestMu AI can serve as an alternative to BrowserStack for teams seeking improved execution speed, parallel scalability, cost-efficiency, advanced debugging, and deeper analytics for test optimization. With support for a wide range of automation frameworks, device coverage, and performance-focused orchestration, TestMu AI enables smoother migration for teams modernizing their testing infrastructure.

Below are the capabilities of BrowserStack and TestMu AI to help teams map BrowserStack features to their TestMu AI equivalents.

```js
MutableCapabilities capabilities = new MutableCapabilities();
HashMap<String, Object> bstackOptions = new HashMap<String, Object>();
capabilities.setCapability("browserName", "Safari");
bstackOptions.put("os", "OS X");
bstackOptions.put("osVersion", "Tahoe");
bstackOptions.put("browserVersion", "26.0");
bstackOptions.put("userName", "YOUR_USERNAME");
bstackOptions.put("accessKey", "YOUR_ACCESS_KEY");
capabilities.setCapability("bstack:options", bstackOptions);
```

```js
SafariOptions browserOptions = new SafariOptions();
browserOptions.setPlatformName("MacOS Tahoe");
browserOptions.setBrowserVersion("26");
HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("username", "<your_username>");
ltOptions.put("accessKey", "<your_access_key>");
ltOptions.put("w3c", true);
browserOptions.setCapability("LT:Options", ltOptions);
```

To migrate your test suites from BrowserStack, checkout this guide on [Migrating from BrowserStack to TestMu AI](/support/docs/browserstack-to-testmu-migration-guide/).

## Migrating from Sauce Labs to TestMu AI

Switching between cloud-based test execution platforms can involve configuration updates, capability adjustments, and integration alignment. A capability comparison makes this transition more seamless by helping teams understand feature availability, execution models, and tooling compatibility.

TestMu AI can be adopted as an alternative to Sauce Labs for organizations looking to enhance performance, scale automation workloads efficiently, and streamline debugging and reporting within their CI/CD pipelines.

Below are the capabilities of Sauce Labs and TestMu AI to help teams map Sauce Labs features to their TestMu AI equivalents.

```js
SafariOptions browserOptions = new SafariOptions();
browserOptions.setPlatformName("macOS 15");
browserOptions.setBrowserVersion("latest");
Map<String, Object> sauceOptions = new HashMap<>();
sauceOptions.put("username", "YOUR_USERNAME");
sauceOptions.put("accessKey", "YOUR_ACCESS_KEY");
sauceOptions.put("build", "<your build id>");
sauceOptions.put("name", "<your test name>");
sauceOptions.put("armRequired", true);
browserOptions.setCapability("sauce:options", sauceOptions);
```

```js
SafariOptions browserOptions = new SafariOptions();
browserOptions.setPlatformName("MacOS Tahoe");
browserOptions.setBrowserVersion("26");
HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("username", "<your_username>");
ltOptions.put("accessKey", "<your_access_key>");
ltOptions.put("w3c", true);
browserOptions.setCapability("LT:Options", ltOptions);
```

To migrate your test suites from Sauce Labs, checkout this guide on [Migrating from Sauce Labs to TestMu AI](/support/docs/saucelabs-to-testmu-migration-guide/).

To generate capabilities use [TestMu AI Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to define key automation testing parameters, such as browser, version, operating system, and additional test settings.
