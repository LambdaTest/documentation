---
id: smartui-baseline-management
title: Baseline Management in SmartUI
sidebar_label: Baseline Management
description: Learn how to effectively manage baselines in SmartUI for visual regression testing, including dynamic baseline specification and baseline marking.
keywords:
  - Baseline Management
  - Dynamic Baseline
  - Baseline Marking
  - SmartUI Git
  - Visual Regression Testing
  - Git Integration
url: https://www.lambdatest.com/support/docs/smartui-baseline-management/
site_name: LambdaTest
slug: smartui-baseline-management/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "SmartUI Baseline Management",
          "item": "https://www.lambdatest.com/support/docs/smartui-baseline-management/"
        }]
      })
    }}
></script>

:::info
This guide explains how to effectively manage baselines in SmartUI for your visual regression testing workflow.
:::

## Understanding Baselines

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

1. **Baseline Selection**:
   - Choose stable builds as baselines
   - Document baseline selection criteria
   - Regular baseline updates

2. **Branch Management**:
   - Clear branch naming conventions
   - Document branch purposes
   - Regular branch cleanup

3. **Build Management**:
   - Meaningful build names
   - Document build purposes
   - Regular build cleanup

4. **Approval Process**:
   - Clear approval criteria
   - Document approval decisions
   - Maintain audit trail

## Troubleshooting

### Common Issues

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

### Getting Help

If you encounter any issues with baseline management in SmartUI, please contact our support team at support@lambdatest.com. 