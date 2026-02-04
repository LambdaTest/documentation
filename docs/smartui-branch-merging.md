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
site_name: LambdaTest
slug: smartui-branch-merging/
canonical: https://www.testmu.ai/support/docs/smartui-branch-merging/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

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

:::info
This guide explains how to effectively merge branches in SmartUI for managing your visual regression testing workflow.
:::

## Branch-Level Merging

Branch-level merging allows you to merge visual regression test results from one branch to another, maintaining a clear history of changes and approvals.

### Merge Command

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

```bash
# 1. Ensure feature branch is approved
npx smartui merge branch --source feature/new-login --target main
```

### 2. Hotfix Strategy

**Scenario**: Merging a hotfix into multiple branches

```bash
# 1. Merge to staging
npx smartui merge branch --source hotfix/security-patch --target staging

# 2. Merge to production
npx smartui merge branch --source hotfix/security-patch --target production
```

### 3. Release Branch Strategy

**Scenario**: Managing release branches

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
If you encounter any issues with branch merging in SmartUI, please contact our support team at support@testmu.ai.

</TabItem>
</Tabs>

## Pull Request Workflow with Branch Merging

### Scenario: Feature Development with Multiple Iterations

Let's walk through a complete workflow where a team is developing a new feature with multiple iterations and PRs.

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