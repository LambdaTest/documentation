---
id: kaneai-create-pr
title: Create Pull Requests from KaneAI Test Cases
hide_title: false
sidebar_label: Create Pull Requests
description: Export KaneAI-generated test code directly to GitHub or GitLab as pull requests. Set up repository integration, configure PR settings, and track PR status from Test Manager.
keywords:
  - kaneai pull request
  - kaneai github integration
  - kaneai gitlab integration
  - kaneai code export
  - create pr from kaneai
  - test case pull request
  - kaneai pr creation
  - auto pr kaneai
  - test manager pull requests
  - code export github
url: https://www.testmuai.com/support/docs/kaneai-create-pr/
site_name: TestMu AI
slug: kaneai-create-pr/
canonical: https://www.testmuai.com/support/docs/kaneai-create-pr/
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
          "name": "Create Pull Requests from KaneAI Test Cases",
          "item": `${BRAND_URL}/support/docs/kaneai-create-pr/`
        }]
      })
    }}
></script>

KaneAI lets you export generated test code directly to your GitHub or GitLab repository as a pull request (PR) or merge request (MR). Instead of downloading ZIP files and manually copying code, you can raise PRs from the Test Manager in a few clicks — or automatically whenever code is generated.

This guide covers how to integrate your Git provider, configure PR settings, create pull requests from test cases, and track their status.

:::note Beta Feature
This feature is currently in **beta** and is not generally available. If you would like access, please reach out to [support@testmuai.com](mailto:support@testmuai.com).
:::

## Prerequisites

- A <BrandName /> account with access to KaneAI and Test Manager.
- A GitHub or GitLab account with at least one repository.
- At least one test case with code generated.
- Admin role to configure integration and PR settings. Users with appropriate permissions can create PRs for their own test cases.

## Supported Platforms and Frameworks

| Platform | Framework | File Exported |
|----------|-----------|---------------|
| Desktop Browser | Selenium (Python) | `test.py` |
| Mobile Browser | Selenium (Python) | `test.py` |
| Mobile App | Appium (Python) | `test.py` |

## Step 1: Integrate Your Git Provider

Before you can create pull requests, you need to connect your GitHub or GitLab account to <BrandName />.

### Connect via Integrations Page

Set up your Git provider from the <BrandName /> Integrations page:

- **GitHub**: Supports OAuth, Repo-based OAuth, Cloud/PAT, and Self-Hosted (GitHub Enterprise) connection methods. See the [GitHub Integration guide](/support/docs/github-integration/) for detailed setup instructions.
- **GitLab**: Supports OAuth, Personal Access Token, and Self-Managed instance connection methods. See the [GitLab Integration guide](/support/docs/gitlab-integration/) for detailed setup instructions.

### Select Platform from Test Manager

When you initiate PR creation for the first time from the Test Manager, a **Select Platform to Create PR** dialog appears. This dialog shows the integration status for each provider.

- If your provider is **not integrated**, click the **Integrate** button to be redirected to the Integrations page.

<img loading="lazy" src={require('../assets/images/kane-ai/features/create-pr/pr-setup-no-integration.png').default} alt="Select Platform dialog showing GitHub as Not Integrated" className="doc_img"/>

- If your provider is already **integrated**, the status shows in green. Click **Setup** to proceed to the repository configuration.

<img loading="lazy" src={require('../assets/images/kane-ai/features/create-pr/pr-setup-integration-done.png').default} alt="Select Platform dialog showing GitHub as Integrated" className="doc_img"/>

:::tip
Bitbucket support is coming soon. Currently, GitHub and GitLab are the supported providers.
:::

## Step 2: Configure Repository Settings (First-Time Setup)

After selecting your integrated provider, you are taken to the **Setup Pull Request** page. This is a one-time configuration that defines how test code is organized in your repository.

<img loading="lazy" src={require('../assets/images/kane-ai/features/create-pr/pr-setup-flow.png').default} alt="Setup Pull Request page with repository strategy and configuration options" className="doc_img"/>

### Repository Strategy

Choose how repositories are mapped to your projects:

| Strategy | Description |
|----------|-------------|
| **Single Repository** | One repository for the entire organization. All projects push test files to the same repo under project-specific folders. |
| **Multiple Repositories** | Each project can be linked to its own repository. A default repository handles unmapped and new projects. |

### Configuration Fields

| Field | Description |
|-------|-------------|
| **Repository** | The target repository where PRs will be created. In Single mode, all projects use this repo. In Multiple mode, this is the default repo for unmapped projects. |
| **Folder Structure** | The file path pattern inside the repository. Default: `{project_name}/{test_id}_{test_name}/{version_no}`. The test file (`test.py`) is placed at this path. |
| **Base Branch (PR Target)** | The branch that PRs are opened against (e.g., `main`, `master`, `develop`). |
| **Auto-PR** | When enabled, a PR is automatically created whenever new code is generated for a test case. Default: Disabled. |

Click **Complete Setup** to save the configuration.

:::note
You can change all of these settings later from the [Test Manager Settings > Pull Requests](https://test-manager.lambdatest.com/settings/pull-requests#) tab.
:::

### Single Repository Mode

In Single Repository mode, all test case PRs across all projects go to one repository. The settings page shows the selected repository, folder structure pattern, base branch, and Auto-PR toggle.

<img loading="lazy" src={require('../assets/images/kane-ai/features/create-pr/pr-setting-single.png').default} alt="Pull Requests settings tab showing Single Repository configuration" className="doc_img"/>

### Multiple Repositories Mode

In Multiple Repositories mode, you can map individual projects to specific repositories. The configuration table shows columns for **Project Name**, **Repository Name**, **Folder Path**, **Base Branch**, and **Auto-PR**.

<img loading="lazy" src={require('../assets/images/kane-ai/features/create-pr/pr-settings-multi.png').default} alt="Pull Requests settings tab showing Multiple Repositories configuration with project mapping" className="doc_img"/>

- **Unmapped Projects** — Any project without a specific mapping uses the default repository configuration.
- **+ Add Project** — Click to map a specific project to a different repository. Only KaneAI-enabled projects are available for mapping.

Click **Update Setup** to save any changes.

## Step 4: Create a Pull Request

Once the integration and repository settings are configured, you can create PRs directly from the test case listing page or from the code section of an individual test case details page.

### PR Status in the Test Case Listing

Each test case in the listing displays its PR status inline:

- **PR number with icon** (e.g., `#2`, `#3`, `#4`) — A PR exists for this test case. Hover over the PR indicator to see the status (Open, Merged, or Closed), creation details, and a **View on GitHub** link that opens the PR directly.
- **No PR** — No pull request has been created for this test case yet.

<img loading="lazy" src={require('../assets/images/kane-ai/features/create-pr/tc-listing-page-PR.png').default} alt="Test case listing showing PR status indicators and PR details tooltip" className="doc_img"/>

### How to Create a PR

1. Navigate to your project in **Test Manager**.
2. Find the test case you want to create a PR for in the test case listing.
3. Click the **three-dot menu** (actions) on the test case and select **Create PR**.
4. If this is your first time, you will be prompted to select a platform and complete the setup (see Steps 1-2 above).
5. Confirm the PR details and submit. The PR is created in your configured repository.

### Diff-Based Updates

KaneAI automatically tracks whether each code export version already has an associated PR. This detection happens in the background — the **Create PR** button only appears for a version when there is no existing PR for it.

In the **Code** section of a test case, each code export version shows its PR status alongside the **Create PR** and **Execute** actions. If a PR already exists for that version, the **Create PR** button is disabled with a tooltip: "PR already exists for this version."

<img loading="lazy" src={require('../assets/images/kane-ai/features/create-pr/pr-diff-code-export.png').default} alt="Code section showing Create PR button for new version and disabled state for version with existing PR" className="doc_img"/>

- **New version without a PR** — The **Create PR** button is active. Click it to raise a PR with that version's code.
- **Version with an existing PR** — The PR number is shown (e.g., `#2`) and the **Create PR** button is disabled since the code is already synced.

### Auto-PR

When Auto-PR is enabled in your settings, a pull request is automatically created whenever code generation completes for a test case. No manual action is required.

- The PR uses your saved configuration (repository, folder structure, base branch).

## Step 5: Filter by PR Status

Use the **PR Status** filter to quickly find test cases based on their pull request state. Click the **More** filter option in the test case listing toolbar, then select **PR Status**.

<img loading="lazy" src={require('../assets/images/kane-ai/features/create-pr/tc-listing-filter.png').default} alt="PR Status filter dialog with options for Open, Merged, Closed, Diff Available, and No PR" className="doc_img"/>

Available filter options:

| Filter | Description |
|--------|-------------|
| **Open** | Test cases with an open PR that has not been merged or closed. |
| **Merged** | Test cases whose PR has been merged into the base branch. |
| **Closed** | Test cases whose PR was closed without merging. |
| **Diff Available** | Test cases where code has changed since the last PR was created. |
| **No PR** | Test cases that do not have any associated pull request. |

Select one or more filters and click **Apply** to filter the listing.

## Additional Details

### Folder Structure in the Repository

Test files are organized in your repository following the configured folder structure pattern. The default pattern is:

```
your-repo/
├── {project_name}/
│   ├── {test_id}_{test_name}/
│   │   └── {version_no}/
│   │       └── test.py
│   └── {test_id}_{test_name}/
│       └── {version_no}/
│           └── test.py
```

- **`{project_name}`** — Derived from the Test Manager project name.
- **`{test_id}_{test_name}`** — The test case ID and name combined for uniqueness.
- **`{version_no}`** — The code export version number.

You can customize this pattern during setup or in the Pull Requests settings tab.

### Permissions

| Action | Admin | User |
|--------|-------|------|
| Configure Git integration | Yes | No |
| Modify repository strategy and settings | Yes | No |
| Toggle Auto-PR | Yes | No |
| Create PR for own test cases | Yes | Yes |
| Create PR for permitted folders | Yes | Yes |
| View PR status | Yes | Yes |

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Create Pull Requests from KaneAI Test Cases
      </span>
    </li>
  </ul>
</nav>
