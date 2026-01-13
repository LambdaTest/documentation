---
id: smartui-smart-git-strategy
title: Smart Git Strategy in SmartUI
sidebar_label: Smart Git Strategy
description: Learn about SmartUI's Smart Git feature that provides intelligent branch comparison and management capabilities for visual regression testing.
keywords:
  - Smart Git
  - Dynamic Branch Comparison
  - SmartUI Git Strategy
  - Visual Regression Testing
  - Git Integration
  - Branch Comparison
url: https://www.testmu.ai/support/docs/smartui-smart-git-strategy
site_name: LambdaTest
slug: smartui-smart-git-strategy
canonical: https://www.testmu.ai/support/docs/smartui-smart-git-strategy/

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
          "name": "SmartUI Smart Git Strategy",
          "item": `${BRAND_URL}/support/docs/smartui-smart-git-strategy/`
        }]
      })
    }}
></script>

:::info
Smart Git is an advanced feature in SmartUI that provides intelligent branch comparison and management capabilities. This guide explains how to use Smart Git effectively in your visual regression testing workflow.
:::

## What is Smart Git?

Smart Git is a feature that enhances the default Git branching strategy in SmartUI by providing more flexible and intelligent branch comparison capabilities. When enabled, it automatically compares the latest build of a branch against the latest approved version of the same branch, regardless of the project's baseline settings.

### Key Benefits

1. **Intelligent Comparison**: Automatically compares against the latest approved version of the same branch
2. **Flexible Workflow**: Works independently of project baseline settings
3. **Easy Configuration**: Simple environment variable toggle
4. **Fallback Support**: Gracefully falls back to default behavior when disabled

## Enabling Smart Git

Smart Git can be enabled using an environment variable:

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux' label='MacOS/Linux' default>

```bash
export SMART_GIT=true
```

</TabItem>
<TabItem value='Windows' label='Windows' default>

```bash
set SMART_GIT=true
```

</TabItem>
<TabItem value='PowerShell' label='PowerShell'>

```powershell
$env:SMART_GIT="true"
```
</TabItem>

</Tabs>

## How Smart Git Works

### Default vs Smart Git Behavior

#### Default Behavior (SMART_GIT=false)
- Compares builds against the project's configured baseline branch
- All branches are compared against the same baseline
- Changes must be approved in the baseline branch

#### Smart Git Behavior (SMART_GIT=true)
- Compares builds against the latest approved version of the same branch
- Each branch maintains its own comparison history
- Changes can be approved independently in each branch
- **Automatic Approval**: New branches are automatically approved when first created, serving as their own baseline

### Comparison Flow

1. **Build Execution**:
   ```bash
   # Enable Smart Git
   export SMART_GIT=true

   # Run your tests
   npx smartui --config .smartui.json exec -- <Your execution command>
   ```

2. **Comparison Process**:
   - SmartUI identifies the current branch
   - Finds the latest approved build in the same branch
   - Compares the new build against the latest approved version
   - Generates a comparison report

## Use Cases and Simulations

### Use Case 1: Feature Branch Development

**Scenario**: You're developing a new feature in a feature branch and want to track visual changes independently.

```bash
# Create and switch to feature branch
git checkout -b feature/new-login

# Enable Smart Git
export SMART_GIT=true

# Make changes and run tests with different CLI commands
npx smartui --config .smartui.json exec -- <Your execution command> --buildName "feature-login-tests"
npx smartui upload-figma-web designs.json --buildName "feature-login-designs"
npx smartui capture urls.json --buildName "feature-login-capture"
```

**Result**:
- Builds are compared against the latest approved version in `feature/new-login`
- Changes can be approved without affecting the main branch
- Independent visual regression tracking for the feature
- First build in the new branch is automatically approved as its baseline

### Use Case 2: Parallel Development

**Scenario**: Multiple teams working on different features in separate branches.

```bash
# Team A: Feature branch
git checkout -b feature/team-a
export SMART_GIT=true
npx smartui --config .smartui.json exec -- <Team A tests>

# Team B: Different feature branch
git checkout -b feature/team-b
export SMART_GIT=true
npx smartui --config .smartui.json exec -- <Team B tests>
```

**Result**:
- Each team's changes are tracked independently
- No interference between different feature branches
- Teams can approve their changes without waiting for others

### Use Case 3: Hotfix Development

**Scenario**: Need to make urgent fixes in a hotfix branch.

```bash
# Create hotfix branch
git checkout -b hotfix/security-patch

# Enable Smart Git
export SMART_GIT=true

# Run tests
npx smartui --config .smartui.json exec -- <Your execution command>
```

:::note
The Smart Git management works consistently across all SmartUI CLI commands (`exec`, `capture`, `upload`, `upload-figma-web`, `upload-figma-app`), ensuring a unified experience whether you're executing tests, capturing screenshots, uploading images, or comparing Figma designs with web pages or mobile apps. Each command supports the `--buildName` flag to provide custom names for your builds.
:::

**Result**:
- Quick visual regression testing for hotfix
- Independent approval process
- No impact on other branches' baselines

## Best Practices

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='branch-naming' label='Branch Naming' default>

**Branch Naming**

Use clear, consistent branch naming conventions.

</TabItem>

<TabItem value='regular-updates' label='Regular Updates'>

**Regular Updates**

Keep branches up to date with their parent branches.

</TabItem>

<TabItem value='approval-process' label='Approval Process'>

**Approval Process**

Establish clear approval criteria for each branch.

</TabItem>

<TabItem value='documentation' label='Documentation'>

**Documentation**

Document branch-specific visual changes.

</TabItem>

<TabItem value='cleanup' label='Cleanup'>

**Cleanup**

Regularly clean up old branches and their builds.

</TabItem>
</Tabs>

## Troubleshooting

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='comparison-issues' label='Comparison Issues' default>

**Comparison Issues**

1. **Comparison Issues**:
   - Verify Smart Git is enabled: `echo $SMART_GIT`
   - Check branch name: `git branch --show-current`
   - Ensure previous builds exist in the branch

</TabItem>

<TabItem value='approval-issues' label='Approval Issues'>

**Approval Issues**

1. **Approval Issues**:
   - Verify you have necessary permissions
   - Check if the build is in an approvable state
   - Ensure the branch has previous approved builds

</TabItem>
</Tabs>

### Getting Help

If you encounter any issues with Smart Git, please contact our support team at support@testmu.ai.