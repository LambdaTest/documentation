---
id: smartui-build-merging
title: Build-Level Merging in SmartUI
sidebar_label: Build Merging
description: Learn how to effectively merge builds in SmartUI for granular control over your visual regression testing workflow.
keywords:
  - Build Merging
  - SmartUI Git
  - Visual Regression Testing
  - Git Integration
  - Build Management
  - Build Promotion
url: https://www.lambdatest.com/support/docs/smartui-build-merging/
site_name: LambdaTest
slug: smartui-build-merging/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "SmartUI Build Merging",
          "item": "https://www.lambdatest.com/support/docs/smartui-build-merging/"
        }]
      })
    }}
></script>

:::info
This guide explains how to effectively merge builds in SmartUI for granular control over your visual regression testing workflow.
:::

## Build-Level Merging

Build-level merging provides granular control over specific builds, allowing you to merge individual build results and manage your visual regression testing at a more detailed level.

### Merge Command

```bash
npx smartui merge build --source <source-build> --target <target-build>
```

### Merge Process

1. **Build Selection**: Identifies the source and target builds
2. **Content Merge**: Merges the visual regression results
3. **Status Update**: Updates build statuses
4. **Confirmation**: Provides merge confirmation

### Example Workflow

```bash
# Merge specific builds
npx smartui merge build --source build-123 --target build-456

# Merge with status update
npx smartui merge build --source build-123 --target build-456
```

### Merge Behavior

1. **Build Merging**: Merges the source build into the target build
2. **Status Updates**: Updates the new merged build status to "approved"
3. **Content Updates**: Updates target build with merged content
4. **Confirmation**: Provides detailed merge confirmation
5. **Build Naming**:
   - For branch merges: `merged-branch/<source>-<target>`
   - For build merges: `merged-build/<sourcebuildname>-<targetbuildname>`

## Build Merge Strategies

### 1. Build Promotion Strategy

**Scenario**: Promoting specific builds across environments

```bash
# 1. Merge staging build to production
npx smartui merge build --source staging-build-123 --target prod-build-456

### 2. Feature Build Strategy

**Scenario**: Managing feature-specific builds

```bash
# 1. Merge feature build into main build
npx smartui merge build --source feature-build-789 --target main-build-101

### 3. Hotfix Build Strategy

**Scenario**: Managing hotfix builds

```bash
# 1. Create hotfix build
npx smartui capture --name hotfix-build-202

# 2. Merge into production build
npx smartui merge build --source hotfix-build-202 --target prod-build-456
```

## Best Practices

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='build-management' label='Build Management' default>

### Build Management

- Use meaningful build names
   - Document build purposes
   - Regular cleanup of old builds

</TabItem>
<TabItem value='merge-planning' label='Merge Planning' >

### Merge Planning

- Plan merges in advance
   - Document merge strategies
   - Establish approval processes

### Getting Help

If you encounter any issues with build merging in SmartUI, please contact our support team at support@lambdatest.com.

</TabItem>
</Tabs>

1. **Build Management**:
   - Use meaningful build names
   - Document build purposes
   - Regular cleanup of old builds

2. **Merge Planning**:
   - Plan merges in advance
   - Document merge strategies
   - Establish approval processes

### Getting Help

If you encounter any issues with build merging in SmartUI, please contact our support team at support@lambdatest.com.