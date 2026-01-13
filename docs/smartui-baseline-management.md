---
id: smartui-baseline-management
title: Baseline Management in SmartUI
sidebar_label: Baseline Management
description: Learn how to manage baselines effectively in TestMu AI SmartUI. Understand baseline creation, updating, and versioning for reliable visual regression testing.
keywords:
  - SmartUI Baseline
  - Visual Regression Baseline
  - Baseline Management
  - TestMu AI SmartUI
  - Visual Testing
  - Automatic Baseline
url: https://www.testmu.ai/support/docs/smartui-baseline-management
site_name: LambdaTest
slug: smartui-baseline-management
canonical: https://www.testmu.ai/support/docs/smartui-baseline-management/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
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
          "name": "SmartUI Baseline Management",
          "item": `${BRAND_URL}/support/docs/smartui-baseline-management/`
        }]
      })
    }}
></script>

# Baseline Management

In SmartUI, a **Baseline** is the reference image used for comparison against future test runs. Effective baseline management is crucial for accurate visual regression testing. This guide explains how baselines are created, updated, and maintained.

## What is a Baseline?
A baseline represents the "expected" state of your application's UI. When you run a SmartUI test, the new screenshots are compared against this baseline to detect unauthorized visual changes.

A baseline in SmartUI represents the reference point for visual regression testing. It's the set of screenshots against which all future builds are compared.

### Types of Baselines

1. **Project Baseline**: Set in project settings, used as the default comparison point
2. **Branch Baseline**: Specific to a branch, used when Smart Git is enabled
3. **Dynamic Baseline**: Specified during test execution
4. **Build Baseline**: A specific build marked as baseline

## Dynamic Baseline Specification

SmartUI allows you to specify baselines dynamically during test execution, providing flexibility in your testing workflow.

### Branch-based Baseline

```bash
npx smartui --baselineBranch "branch-name" exec -- <execution command>
```

**Use Cases**:
- Testing against a specific branch's latest approved build
- Comparing feature branch against development branch
- Testing hotfix against production branch

### Build-based Baseline

```bash
npx smartui --baselineBuild "build-name" exec -- <execution command>
```

**Use Cases**:
- Testing against a specific build version
- Comparing against a known good build
- Testing against a production build

## Mark as Baseline

SmartUI provides the ability to mark builds as baseline directly through the CLI. This overwrites the global baseline branch present in the Project Settings.

### Basic Usage

```bash
npx smartui --markBaseline exec -- <execution command>
```

## Baseline Management Strategies

### 1. Feature Development

**Scenario**: Managing baselines during feature development

```bash
# 1. Set feature branch baseline
npx smartui --baselineBranch "feature/new-login" exec -- <execution command>
```

### 2. Hotfix Management

**Scenario**: Managing baselines for hotfixes

```bash
# 1. Set production as baseline
npx smartui --baselineBranch "production" exec -- <execution command>
```

### 3. Release Management

**Scenario**: Managing baselines for releases

```bash
# 1. Set staging as baseline
npx smartui --baselineBranch "staging" upload <dirName>

# 2. Mark release as new baseline
npx smartui --markBaseline capture urls.json
```

## Best Practices

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='baseline-selection' label='Baseline Selection' default>

**Baseline Selection**

- Choose stable builds as baselines
- Document baseline selection criteria
- Regular baseline updates

</TabItem>

<TabItem value='branch-management' label='Branch Management'>

**Branch Management**

- Clear branch naming conventions
- Document branch purposes
- Regular branch cleanup

</TabItem>

<TabItem value='build-management' label='Build Management'>

**Build Management**

- Meaningful build names
- Document build purposes
- Regular build cleanup

</TabItem>

<TabItem value='approval-process' label='Approval Process'>

**Approval Process**

- Clear approval criteria
- Document approval decisions
- Maintain audit trail

</TabItem>
</Tabs>

## Troubleshooting

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='common-issues' label='Common Issues' default>

**Common Issues**

1. **Baseline Issues**:
   - Verify baseline exists
   - Check baseline status
   - Review baseline history

2. **Comparison Issues**:
   - Verify build compatibility
   - Check branch status
   - Review comparison settings

3. **Permission Issues**:
   - Verify user permissions
   - Check branch protection
   - Review access settings

</TabItem>

<TabItem value='baseline-not-found' label='Baseline Not Found'>

**Baseline Not Found**

**Error**: Baseline branch or build does not exist

**Solutions**:
1. Verify the baseline branch/build name is correct
2. Ensure the baseline has at least one approved build
3. Check branch/build exists in your project

```bash
# Verify baseline exists before using
npx smartui --baselineBranch "main" exec -- <command>
```

</TabItem>

<TabItem value='permission-denied' label='Permission Denied'>

**Permission Denied**

**Error**: Insufficient permissions to set baseline

**Solutions**:
1. Verify you have admin or approver permissions
2. Check project settings for baseline management permissions
3. Contact project admin for access

</TabItem>

<TabItem value='baseline-mismatch' label='Baseline Mismatch'>

**Baseline Mismatch**

**Error**: Screenshot names don't match between baseline and current build

**Solutions**:
1. Ensure screenshot names are consistent
2. Check if screenshot names changed between builds
3. Review screenshot naming conventions

</TabItem>
</Tabs>

## Visual Examples

### Setting Baseline via Dashboard

1. Navigate to your project in SmartUI dashboard
2. Open the build you want to set as baseline
3. Click on the "Mark as Baseline" button
4. Confirm the action

### Baseline Branch Configuration

In Project Settings → Build Settings → Git Settings:
- Set your baseline branch name (e.g., "main", "production")
- Configure auto-approval branches
- Link your Git repository

### Dynamic Baseline in CLI

```bash
# Use specific branch as baseline
npx smartui --baselineBranch "staging" exec -- npm test

# Use specific build as baseline
npx smartui --baselineBuild "Release-1.0" exec -- npm test

# Mark current build as baseline
npx smartui --markBaseline exec -- npm test
```

## Advanced Scenarios

### Scenario 1: Multi-Branch Baseline Strategy

**Use Case**: Different baselines for different branches

```bash
# Feature branch compares against develop
npx smartui --baselineBranch "develop" exec -- npm test

# Release branch compares against staging
npx smartui --baselineBranch "staging" exec -- npm test
```

### Scenario 2: Version-Based Baselines

**Use Case**: Compare against specific version builds

```bash
# Compare against v1.0.0 build
npx smartui --baselineBuild "v1.0.0" exec -- npm test

# Compare against v2.0.0 build
npx smartui --baselineBuild "v2.0.0" exec -- npm test
```

### Scenario 3: Hotfix Baseline Management

**Use Case**: Hotfix needs to compare against production

```bash
# Hotfix branch compares against production
npx smartui --baselineBranch "production" exec -- npm test

# After approval, mark hotfix as new baseline
npx smartui --markBaseline exec -- npm test
```

## Integration with Git

### Git-Based Projects

For projects integrated with Git:

1. Baseline is automatically managed via Git branches
2. Baseline branch is set in Project Settings → Git Settings
3. Non-baseline branches compare against baseline branch
4. Smart Baseline feature is not available for Git projects

### Git Branching Strategy

```bash
# Main branch is baseline
Baseline: main

# Feature branches compare against main
Feature: feature/login → compares against main

# Release branches compare against main
Release: release/1.0 → compares against main
```

## Monitoring and Maintenance

### Baseline Health Checks

Regularly monitor:
- Baseline build age (update stale baselines)
- Baseline screenshot count (ensure completeness)
- Baseline approval status (verify all screenshots approved)

### Baseline Updates

Best practices for updating baselines:
1. Update after major releases
2. Update after UI framework changes
3. Update after design system updates
4. Document baseline update reasons

### Getting Help

If you encounter any issues with baseline management in SmartUI, please contact our support team at support@testmu.ai or use the [24/7 Chat Support](https://www.lambdatest.com/support).
