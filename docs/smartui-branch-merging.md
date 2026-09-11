---
id: smartui-branch-merging
title: Branch-Level Merging in SmartUI
sidebar_label: Merging Branches
description: Learn how to effectively merge branches in SmartUI for visual regression testing workflow management.
keywords:
  - Branch Merging
  - SmartUI Git
  - Visual Regression Testing
  - Git Integration
  - Merge Strategy
  - Branch Management
url: https://www.testmuai.com/support/docs/smartui-branch-merging/
site_name: TestMu AI
slug: smartui-branch-merging/
canonical: https://www.testmu.ai/support/docs/smartui-branch-merging/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

---

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
          "name": "SmartUI Branch Merging",
          "item": `${BRAND_URL}/support/docs/smartui-branch-merging/`
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
      "@id": "https://www.testmuai.com/support/docs/smartui-branch-merging/"
    },
    "headline": "Branch-Level Merging in SmartUI",
    "description": "Learn how to effectively merge branches in SmartUI for visual regression testing workflow management.",
    "url": "https://www.testmuai.com/support/docs/smartui-branch-merging/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "SmartUI",
    "keywords": [
      "Branch Merging",
      "SmartUI Git",
      "Visual Regression Testing"
    ],
    "proficiencyLevel": "Beginner",
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
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Merge Command",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npx smartui merge branch --source <source-branch> --target <target-branch>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Example Workflow",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "# Merge feature branch into main\nnpx smartui merge branch --source feature/new-login --target main\n# Creates: merged-branch/feature-new-login-main\n\n# Merge hotfix into staging\nnpx smartui merge branch --source hotfix/security-patch --target staging\n# Creates: merged-branch/hotfix-security-patch-staging"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "1. Feature Branch Strategy",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "# 1. Ensure feature branch is approved\nnpx smartui merge branch --source feature/new-login --target main"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "2. Hotfix Strategy",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "# 1. Merge to staging\nnpx smartui merge branch --source hotfix/security-patch --target staging\n\n# 2. Merge to production\nnpx smartui merge branch --source hotfix/security-patch --target production"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "3. Release Branch Strategy",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "# 1. Create release branch\ngit checkout -b release/v1.0.0\n\n# 2. Merge development into release\nnpx smartui merge branch --source development --target release/v1.0.0\n\n# 3. After testing, merge to main\nnpx smartui merge branch --source release/v1.0.0 --target main"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Scenario: Feature Development with Multiple Iterations",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "# Initial feature development\ngit checkout -b feature/new-dashboard\n\n# First iteration of changes\nnpx smartui --config .smartui.json exec -- <Your execution command> --buildName \"dashboard-v1-tests\"\n\n# Create first PR\ngit push origin feature/new-dashboard\n# Create PR on GitHub/GitLab/etc.\n\n# After review feedback, make changes\ngit commit -m \"Address review comments\"\nnpx smartui exec -- <Your execution command> --buildName \"dashboard-v2-capture\"\n\n# PR is approved and ready to merge\n# First, merge the visual changes\nnpx smartui merge branch --source feature/new-dashboard --target main\n\n# Then merge the code\ngit checkout main\ngit merge feature/new-dashboard\n\n# Run final tests on main\nnpx smartui --config .smartui.json exec -- <Your execution command> --buildName \"main-dashboard-merge\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Here's a GitHub Actions workflow that automates the branch merging process in your CI/CD pipeline",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "name: Visual Regression Tests with Branch Merging\n\non:\n  pull_request:\n    types: [opened, synchronize, reopened]\n    branches: [ main, develop ]\n\njobs:\n  visual-tests:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n\n      - name: Setup Node.js\n        uses: actions/setup-node@v2\n        with:\n          node-version: '16'\n\n      - name: Install dependencies\n        run: npm install\n\n      - name: Run SmartUI tests\n        env:\n          PROJECT_TOKEN: ${{ secrets.PROJECT_TOKEN }}\n        run: |\n          # Run different types of tests\n          npx smartui --config .smartui.json exec -- <Your execution command> --buildName \"pr-${{ github.event.pull_request.number }}-tests\"\n\n  merge-visual-changes:\n    needs: visual-tests\n    if: github.event.pull_request.merged == true\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n\n      - name: Setup Node.js\n        uses: actions/setup-node@v2\n        with:\n          node-version: '16'\n\n      - name: Install dependencies\n        run: npm install\n\n      - name: Merge visual changes\n        env:\n          PROJECT_TOKEN: ${{ secrets.PROJECT_TOKEN }}\n        run: |\n          # Merge visual changes from PR branch to target branch\n          # Creates: merged-branch/<pr-branch>-<target-branch>\n          npx smartui merge branch --source ${{ github.event.pull_request.head.ref }} --target ${{ github.event.pull_request.base.ref }}"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

:::info
This guide explains how to effectively merge branches in SmartUI for managing your visual regression testing workflow.
:::

## Branch-Level Merging

Branch-level merging allows you to merge visual regression test results from one branch to another, maintaining a clear history of changes and approvals.

### Merge Command

<VerifiedTag value="Verified" />

```bash
npx smartui merge branch --source <source-branch> --target <target-branch>
```

### Merge Process

1. **Source Branch Selection**: Identifies the latest approved build in the source branch
2. **Target Branch Update**: Updates the target branch with the approved changes
3. **Status Updates**: Updates build statuses in both branches
4. **Audit Trail**: Creates a merge commit with detailed information
5. **Build Naming**:
   - For branch merges: `merged-branch/<source>-<target>`
   - For build merges: `merged-build/<sourcebuildname>-<targetbuildname>`

### Example Workflow

<VerifiedTag value="Verified" />

```bash
# Merge feature branch into main
npx smartui merge branch --source feature/new-login --target main
# Creates: merged-branch/feature-new-login-main

# Merge hotfix into staging
npx smartui merge branch --source hotfix/security-patch --target staging
# Creates: merged-branch/hotfix-security-patch-staging
```

### Merge Behavior

1. **Latest Version Merge**: Merges the latest approved version of the source branch
2. **Status Updates**: Updates build statuses in both branches
3. **Audit Trail**: Maintains a detailed merge history
4. **Merged Build Status**: The newly created merged build is always `approved`
5. **Naming Conventions**:
   - Branch merges: `merged-branch/<source>-<target>`
   - Build merges: `merged-build/<sourcebuildname>-<targetbuildname>`

## Branch Merge Strategies

### 1. Feature Branch Strategy

**Scenario**: Merging a feature branch into main after approval

<VerifiedTag value="Verified" />

```bash
# 1. Ensure feature branch is approved
npx smartui merge branch --source feature/new-login --target main
```

### 2. Hotfix Strategy

**Scenario**: Merging a hotfix into multiple branches

<VerifiedTag value="Verified" />

```bash
# 1. Merge to staging
npx smartui merge branch --source hotfix/security-patch --target staging

# 2. Merge to production
npx smartui merge branch --source hotfix/security-patch --target production
```

### 3. Release Branch Strategy

**Scenario**: Managing release branches

<VerifiedTag value="Verified" />

```bash
# 1. Create release branch
git checkout -b release/v1.0.0

# 2. Merge development into release
npx smartui merge branch --source development --target release/v1.0.0

# 3. After testing, merge to main
npx smartui merge branch --source release/v1.0.0 --target main
```

## Best Practices

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='merge-planning' label='Merge Planning' default>

**Merge Planning**

- Plan merges in advance
   - Document merge strategies
   - Establish approval processes

</TabItem>
<TabItem value='branch-management' label='Branch Management' >

**Branch Management**

- Keep branches up to date
   - Clean up merged branches
   - Maintain clear branch naming

</TabItem>
<TabItem value='approval-process' label='Approval Process' >

**Approval Process**

- Establish clear approval criteria
   - Document approval decisions
   - Maintain audit trail

</TabItem>
</Tabs>

## Troubleshooting

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='merge-conflicts' label='Merge Conflicts' default>

Merge Conflicts

- Check build compatibility
   - Verify branch status
   - Review merge history

</TabItem>
<TabItem value='status-issues' label='Status Issues' >

Status Issues

- Verify build status
   - Check permissions
   - Review approval history
If you encounter any issues with branch merging in SmartUI, please contact our support team at support@testmuai.com.

</TabItem>
</Tabs>

## Pull Request Workflow with Branch Merging

### Scenario: Feature Development with Multiple Iterations

Let's walk through a complete workflow where a team is developing a new feature with multiple iterations and PRs.

<VerifiedTag value="Verified" />

```bash
# Initial feature development
git checkout -b feature/new-dashboard

# First iteration of changes
npx smartui --config .smartui.json exec -- <Your execution command> --buildName "dashboard-v1-tests"

# Create first PR
git push origin feature/new-dashboard
# Create PR on GitHub/GitLab/etc.

# After review feedback, make changes
git commit -m "Address review comments"
npx smartui exec -- <Your execution command> --buildName "dashboard-v2-capture"

# PR is approved and ready to merge
# First, merge the visual changes
npx smartui merge branch --source feature/new-dashboard --target main

# Then merge the code
git checkout main
git merge feature/new-dashboard

# Run final tests on main
npx smartui --config .smartui.json exec -- <Your execution command> --buildName "main-dashboard-merge"
```

### CI/CD Integration with Branch Merging

Here's a GitHub Actions workflow that automates the branch merging process in your CI/CD pipeline:

<VerifiedTag value="Verified" />

```yaml
name: Visual Regression Tests with Branch Merging

on:
  pull_request:
    types: [opened, synchronize, reopened]
    branches: [ main, develop ]

jobs:
  visual-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'

      - name: Install dependencies
        run: npm install

      - name: Run SmartUI tests
        env:
          PROJECT_TOKEN: ${{ secrets.PROJECT_TOKEN }}
        run: |
          # Run different types of tests
          npx smartui --config .smartui.json exec -- <Your execution command> --buildName "pr-${{ github.event.pull_request.number }}-tests"

  merge-visual-changes:
    needs: visual-tests
    if: github.event.pull_request.merged == true
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'

      - name: Install dependencies
        run: npm install

      - name: Merge visual changes
        env:
          PROJECT_TOKEN: ${{ secrets.PROJECT_TOKEN }}
        run: |
          # Merge visual changes from PR branch to target branch
          # Creates: merged-branch/<pr-branch>-<target-branch>
          npx smartui merge branch --source ${{ github.event.pull_request.head.ref }} --target ${{ github.event.pull_request.base.ref }}
```

### Best Practices for PR Branch Merging

1. **Before Merging**:
   - Ensure all visual changes are approved
   - Run final tests on the feature branch
   - Document any special merge considerations
   - Note the expected merge naming conventions:
     - Branch merges: `merged-branch/<source>-<target>`
     - Build merges: `merged-build/<sourcebuildname>-<targetbuildname>`

2. **During Merge**:
   - Use descriptive build names
   - Include PR number in build names
   - Run tests after merge
   - Verify merge naming follows conventions

3. **After Merge**:
   - Verify merged changes
   - Clean up old builds
   - Update documentation
   - Check merge naming in SmartUI dashboard

:::note
The branch merging process works consistently across all SmartUI CLI commands (`exec`, `capture`, `upload`, `upload-figma-web`, `upload-figma-app`), ensuring a unified experience whether you're executing tests, capturing screenshots, uploading images, or comparing Figma designs with web pages or mobile apps. Each command supports the `--buildName` flag to provide custom names for your builds.
:::
