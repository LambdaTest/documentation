---
id: selenium-add-test-meta-data
title: Add your test metadata using customData capability
hide_title: false
sidebar_label: Adding Test Metadata
description: The customData capability allows users to associate additional metadata with test runs, enabling better traceability, debugging, and reporting.
keywords:
  - testmu ai automation
  - selenium automation grid
  - metadata
  - custom data
  - traceability
  - debugging
  - reporting
url: https://www.testmu.ai/support/docs/selenium-add-test-meta-data/
site_name: LambdaTest
slug: selenium-add-test-meta-data
canonical: https://www.testmu.ai/support/docs/selenium-add-test-meta-data/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Other Capabilities",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Custom Data",
          "item": `${BRAND_URL}/support/docs/selenium-add-test-meta-data/`
        }]
      })
    }}
></script>
The `customData` capability allows you to associate additional metadata with test runs, enabling better traceability, debugging, and reporting. This metadata can include information like issue tracker links, test case IDs, and other critical test context. By embedding this metadata in test configurations, your team can easily integrate with their existing tools and workflows, such as GitHub, Jira, or any test management system.

## How to add custom metadata for running automation tests on <BrandName />
To add custom metadata in your automation tests, simply add the capability `customData` in your test script with all the metadata information that we support to add:

<Tabs className="docs__val">

<TabItem value="Java" label="Java" default>

```java title="Test.java"
ltOptions.put("customData", new HashMap<String, Object>() {{
    put("jiraTicket", "JIRA-12345");
    put("githubPR", "https://github.com/organization/repo/pull/678");
    put("testDescription", "This test validates login functionality under high load.");
}});
```

</TabItem>

<TabItem value="Node.js" label="Node.js" default>

```javascript title="Test.js"
"LT:Options": {
  "customData": {
    "jiraTicket": "JIRA-12345",
    "githubPR": "https://github.com/organization/repo/pull/678",
    "testDescription": "This test validates login functionality under high load."
  }
}
```
</TabItem>

<TabItem value="TypeScript" label="TypeScript" default>

```typescript title="Test.ts"
"LT:Options": {
  customData: {
    jiraTicket: "JIRA-12345",
    githubPR: "https://github.com/organization/repo/pull/678",
    testDescription: "This test validates login functionality under high load."
  }
}
```
</TabItem>

<TabItem value="PHP" label="PHP" default>

```php title="Test.php"
"LT:Options" => [
  "customData" => [
    "jiraTicket" => "JIRA-12345",
    "githubPR" => "https://github.com/organization/repo/pull/678",
    "testDescription" => "This test validates login functionality under high load."
  ]
]
```
</TabItem>

<TabItem value="Python" label="Python" default>

```python title="Test.py"
"LT:Options": {
  "customData": {
    "jiraTicket": "JIRA-12345",
    "githubPR": "https://github.com/organization/repo/pull/678",
    "testDescription": "This test validates login functionality under high load."
  }
}
```
</TabItem>

<TabItem value="C#" label="C#" default>

```csharp title="Test.cs"
ltOptions.Add("customData", new Dictionary<string, object>{
  { "jiraTicket", "JIRA-12345" },
  { "githubPR", "https://github.com/organization/repo/pull/678" },
  { "testDescription", "This test validates login functionality under high load." }
});
```
</TabItem>

<TabItem value="Ruby" label="Ruby" default>

```ruby title="Test.rb"
"LT:Options" => {
  customData: {
    jiraTicket: "JIRA-12345",
    githubPR: "https://github.com/organization/repo/pull/678",
    testDescription: "This test validates login functionality under high load."
  }
}
```
</TabItem>

</Tabs>

## Use Cases for `customData`

### 1. Enhanced Reporting with GitHub and Jira Links
**Scenario :** A QA team wants to include direct links to GitHub pull requests or Jira issues related to a test. This helps developers and testers quickly access related code changes or tasks when a test fails. 

```javascript title="Test.js"
'customData': { 	
  "jiraTicket": "JIRA-12345",
  "githubPR": "https://github.com/organization/repo/pull/678",
  "testDescription": "This test validates login functionality under high load."
}
```

- **`jiraTicket` :** Links the test to the corresponding Jira issue for easy navigation.
- **`githubPR` :** Links to the pull request that introduced the changes being tested.
- **`testDescription` :** Provides a brief description of the test's purpose.

### 2. Linking Test Management Systems
**Scenario :** The team uses a test management tool (e.g., TestRail, Zephyr) to manage test cases. Adding the test case ID ensures results can be linked back to the test plan.

```javascript title="Test.js"
'customData': { 	
  "testCaseID": "TC-56789",
  "testSuite": "Regression Suite",
  "priority": "High",
  "owner": "qa_team@company.com"
}
```

- **`testCaseID` :** Maps the execution to a specific test case in the test management system.
- **`testSuite` :** Specifies the test suite or category the test belongs to.
- **`priority` :** Indicates the importance or severity of the test.
- **`owner` :** Identifies the owner or responsible party for the test.

### 3. Debugging with Environment Metadata
**Scenario :** When debugging test failures, it’s helpful to include information about the environment or build being tested.

```javascript title="Test.js"
'customData': { 	
  "buildNumber": "1234",
  "environment": "Staging",
  "apiVersion": "v1.2.3",
  "releaseTag": "v1.2.3-rc1"
}
```

- **`buildNumber` :** Identifies the specific build of the application being tested.
- **`environment` :** Indicates the environment (e.g., Development, Staging, Production) the test was run in.
- **`apiVersion` :** Provides the API version being tested.
- **`releaseTag` :** Links the test to a specific release or tag in the version control system.

### 4. Capturing User Story or Feature Metadata
**Scenario :** A product manager wants test results linked to specific user stories or features for tracking progress on new functionality.

```javascript title="Test.js"
'customData': { 	
  "featureID": "FEAT-9876",
  "userStory": "As a user, I want to reset my password securely.",
  "sprint": "Sprint 45"
}
```

- **`featureID` :** Links the test to a specific feature ID in the product backlog.
- **`userStory` :** Describes the user story being validated.
- **`sprint` :** Indicates the sprint or iteration in which the feature is being developed.

### 5. Tracking Third-Party Dependencies
**Scenario :** A test depends on third-party APIs or integrations, and it’s crucial to track the versions or configurations of these dependencies.

```javascript title="Test.js"
'customData': { 	
  "thirdPartyAPI": "Stripe",
  "apiVersion": "2023-01-15",
  "status": "Active"
}
```

- **`thirdPartyAPI` :** Identifies the external service used.
- **`apiVersion` :** Specifies the version of the API.
- **`status` :** Indicates the status or availability of the dependency.

### 6. Integrating Test Runs with CI/CD Pipelines
**Scenario :** A DevOps team wants to include pipeline-specific metadata in the test report to track CI/CD execution details.

```javascript title="Test.js"
'customData': { 	
  "pipelineID": "Pipeline-001",
  "jobID": "Job-456",
  "triggeredBy": "GitHub Actions",
  "commitHash": "a1b2c3d4e5f67890"
}
```

- **`pipelineID` :** Tracks the pipeline in which the test ran.
- **`jobID` :** Identifies the specific CI/CD job.
- **`triggeredBy` :** Indicates the trigger source (e.g., manual, GitHub Actions, Jenkins).
- **`commitHash` :** Links the test to a specific commit in the version control system.

## Limitations
- **Payload Size :** The `customData` capability is limited to 1 KB of JSON data. Larger payloads will not be accepted.
  - Use concise key names and avoid unnecessary fields.
  - Prioritize critical metadata to stay within the limit.

- **Readability :** Adding too many fields may reduce the readability of the metadata. Be selective in the information you include.

## Best Practices
- **Keep Metadata Concise :** Use meaningful but short key names and values.
- **Align with Workflows :** Structure customData to integrate seamlessly with tools like GitHub, Jira, and test management systems.
- **Validate Data Size :** Include a validation step in your scripts to ensure the payload is under 1 KB.
- **Automate Metadata Generation :** Use scripts or CI/CD tools to dynamically populate customData fields, reducing manual effort.