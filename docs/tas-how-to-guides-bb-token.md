---
id: tas-how-to-guides-bb-token
title: Generating Bitbucket Personal Access Token
hide_title: true
sidebar_label: Generating Bitbucket Personal Access Token
description: Generating your Personal Access Token for Bitbucket
keywords:
  - LambdaTest TAS
  - Test at Scale
  - TAS - Generating Bitbucket Personal Access Token
  - TAS - How to Guides
url: https://www.lambdatest.com/support/docs/
site_name: LambdaTest
slug: tas-how-to-guides-bb-token/
---

# Generating Bitbucket Personal Access Token
***
- Navigate to [Bitbucket Settings](https://bitbucket.org/account/settings/app-passwords/new).
- Enter **App password label**.
- **Set the permissions** for the app password. Add read access to `Account`, `Workspace membership`, `Projects`, `Repositories` and `Pull requests`.
- Click on **Create**.
- **Copy and save** your app password securely.

> **NOTE:** TAS needs read access to `Account`, `Workspace membership`, `Projects`, `Repositories` and `Pull requests` in order to function properly.

<p align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/2IcoXmxsRrw?si=JjvTbB3JyORocvgD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</p>

<br/>

- **Go to the terminal** and run the following command and **copy the access token**.
```bash
echo -n "<bitbucket username>:<generated app password>" | base64
```
> **NOTE:** Set TokenType to `Basic` in syanpse config file.