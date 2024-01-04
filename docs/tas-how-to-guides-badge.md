---
id: tas-how-to-guides-badge
title: Adding a Status Badge
hide_title: true
sidebar_label: Adding a Status Badge
description: Adding a Status Badge
keywords:
  - LambdaTest TAS
  - Test at Scale
  - TAS - Adding a Status Badge
  - TAS - How to Guides
url: https://www.lambdatest.com/support/docs/
site_name: LambdaTest
slug: tas-how-to-guides-badge/
---

# Adding a Status Badge
***

You can use TAS badge to get the test status at a glance of project page. It gives you insights about last build without visiting TAS portal.

Status badge is commonly added to the `README.md` file of the project.

**For adding status badge to your readme file, use the following snippet.**

```
![TAS Badge](https://badge.tas.lambdatest.com/tas/tests/<GIT_PROVIDER>/<ORGANIZATION>/<REPOSITORY>/<BRANCH>)
```

> **Note**: Possible values for `GIT_PROVIDER` based on your version control: `github`, `gitlab`, `bitbucket`.
