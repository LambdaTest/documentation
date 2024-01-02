---
id: tas-how-to-guides-gl-token
title: Generating GitLab Personal Access Token
hide_title: true
sidebar_label: Generating GitLab Personal Access Token
description: Generating your Personal Access Token on GitLab
keywords:
  - LambdaTest TAS
  - Test at Scale
  - TAS - Generating GitLab Personal Access Token
  - TAS - How to Guides
url: https://www.lambdatest.com/support/docs/
site_name: LambdaTest
slug: tas-how-to-guides-gl-token/
---

# Generating GitLab Personal Access Token
***
- Navigate to [GitLab Settings](https://gitlab.com/-/profile/personal_access_tokens).
- Enter **Token name** and add **Expiration date**.
- **Select the scopes** for the token. Add `api`, `read_api`, `read_user`, `read_repository` access to the scope.
- Click on **Create personal access token**.
- **Copy and Save** your token securely.

> **NOTE:** TAS needs `api`, `read_api`, `read_user`, `read_repository` permissions in order to function properly.

<p align="center">
<img loading="lazy" src={require('../assets/images/tas/how-to-guides/gl-token.gif').default} alt="generating gitlab token" width="1340" height="617" className="doc_img"/>
</p>