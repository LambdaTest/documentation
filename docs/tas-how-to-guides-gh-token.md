---
id: tas-how-to-guides-gh-token
title: Generating GitHub Personal Access Token
hide_title: true
sidebar_label: Generating GitHub Personal Access Token
description: Generating your Personal Access Token on GitHub
keywords:
  - LambdaTest TAS
  - Test at Scale
  - TAS - Generating GitHub Personal Access Token
  - TAS - How to Guides
url: https://www.lambdatest.com/support/docs/
site_name: LambdaTest
slug: tas-how-to-guides-gh-token/
---

# Generating GitHub Personal Access Token
***
- Navigate to [GitHub Settings](https://github.com/settings/tokens), click on **Generate new token** and **confirm your password** if prompted.
- Add **Expiry** to `never`.
- **Select the scopes** for the token. Add `repo` access to the scope.
- Click on **Generate Token**.
- **Copy and Save** your token securely.

> **NOTE:** TAS needs repo permissions in order to function properly.

<p align="center">
<img loading="lazy" src={require('../assets/images/tas/how-to-guides/gh-token.gif').default} alt="Forking the repo and making account" width="1340" height="617" className="doc_img"/>
</p>