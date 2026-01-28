---
id: hyperexecute-snooper
title: Using Snooper Command on Hyperexecute
hide_title: false
sidebar_label: Using Snooper on Hyperexecute
description: Learn more about Using Snooper on Hyperexecute
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
url: https://www.testmuai.com/support/docs/hyperexecute-snooper/
site_name: Using Snooper on Hyperexecute
slug: hyperexecute-snooper/
canonical: https://www.testmuai.com/support/docs/hyperexecute-snooper/
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
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Using Snooper on Hyperexecute",
          "item": `${BRAND_URL}/support/docs/hyperexecute-snooper`
        }]
      })
    }}
></script>
A `snooper` is a command that can be used to discover the list of Feature file scenarios that would be further executed using the value passed in the `testRunnerCommand`. The `snooper` command takes two arguments:

- `featureFilePaths`: This argument specifies the path to the Feature files that you want to discover.
- `frameWork`: This argument specifies the framework that you are using for your tests.

For example, the following command will discover the list of Feature file scenarios in the features folder that are using the Java framework:

```yaml
snooper --featureFilePaths=features/ --frameWork=java
```

:::info
Snooper is **not compatible** with **Alpine-based** Docker images, as Alpine uses **musl libc** instead of **glibc**, which Snooper depends on. To ensure proper functionality, use a non-Alpine base image that includes glibc.
:::

## How to implement Snooper on HyperExecute

> `snooper` command works only with HyperExecute YAML 0.1

To implement the `snooper` command on HyperExecute, we simply need to update our YAML file's `testDiscovery` and `testRunnerCommand` parameters.

### `testDiscovery`
This command helps to discover all the test scenarios within the project. It offers two methods to implement it:

#### Method 1: Discovering test cases on Hyperexecute machines:

- `featureFilePaths`: Path where all feature files are located
- `frameWork`: Framework of Testing
- `specificTags`: (optional) Tags that need to be tested

```yaml
testDiscovery:
  type: automatic
  mode: static
  args:
    featureFilePaths: src/test/java/Features/
    frameWork: java
    specificTags: [""]
```

#### Method 2: Discovering test cases on Local machines

- `command`: It is a mandatory parameter in the yaml file and would throw an error if not found by the compiler.

```yaml
testDiscovery: 
  type: raw 
  mode: static
  command: snooper  --targetOs=win --featureFilePaths=src/test/java/Features/ --frameWork=java --specificTags=@tag1,@tag2
```

### `testRunnerCommand`

This command helps to execute the test cases and needs a command that will help to execute the single test. It is executed on the Hyperexecute VMs for each scenario at an individual level.

There are two methods to execute the runner command for cucumber:

#### Method 1: Using `options` flag

```yaml
testRunnerCommand: mvn test -Dcucumber.options="$test"
```

- `-Dcucumber.options`: This parameter is used to specify the feature that will help execute on VMs.

#### Method 2: Using `features` flag

> **Note:** This flag is applicable for cucumber version 7 and above only.

```yaml
testRunnerCommand: mvn test -Dcucumber.features="$test"
```

- `-Dcucumber.features`: This parameter is used to execute one single feature file.

## Debug

We can also debug `testDiscovery` using `snooper` to check whether all the desired test scenarios have been discovered or not. This can be implemented using the Snooper CLI binary present in the **.hyperexecute folder**.

To debug the discovery of the snooper, configure the following command as per the desired parameters:

```yaml
.hyperexecute/snooper --targetOs=win --ignoredTags=@ignore @skipDaily --featureFilePaths=src/test/java/Features --frameWork=java | sed 's/:.*//' | uniq
```

> **Note:** .hyperexecute and snooper binary are created only after first execution of the yaml file.

#### How to effectively utilize tags incorporating various custom parameters for enhanced functionality?

- Snooper discovery can be customized where you can use set of tags that you want to discover the tests.

```yaml
specificTags: ["@tag1","@tag2"]
```

- Discovery can also be customized by passing logical query in the snooper using `query` tag:

```yaml
query: "((@tag1 or @tag2) and not @tag3)"
```  

- You can also skip the tests that have some specific tags using `ignoredTags`:

```yaml
ignoredTags : ["@tag3","@tag2"]
```

## Sample YAML File
Here is a sample HyperExecute file with cucumber 7 and above to discover all the feature files without any tags.

```yaml
---
version: "0.1"
runson: win
autosplit: true

concurrency: 1

retryOnFailure: true
maxRetries: 1

cacheKey: '{{ checksum "package-lock.json" }}'
cacheDirectories:
  - node_modules

pre:
  - npm install

testDiscovery:
  type: automatic
  mode: dynamic
  args:
    featureFilePaths: features/sample_website
    frameWork: javascript
    specificTags: [ "@test" ]
#  command: .hyperexecute/snooper  --targetOs=win --featureFilePaths=features/onepass_website --frameWork=javascript --specificTags=@test | sed 's/:.*//' | uniq

testRunnerCommand: npm run execute-tests $test

jobLabel: [snooper, autosplit]
```