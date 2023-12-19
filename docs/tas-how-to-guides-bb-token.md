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
- **Copy and save** your app pasword securely.

> **NOTE:** TAS needs read access to `Account`, `Workspace membership`, `Projects`, `Repositories` and `Pull requests` in order to function properly.

<p align="center">
<div className="ytframe"> 
<div className="youtube" data-embed="2IcoXmxsRrw">
    <div className="play-button"></div>
</div>
</div>

</p>

<br/>

- **Go to the terminal** and run the following command and **copy the access token**.
```bash
echo -n "<bitbucket username>:<genrated app password>" | base64
```
> **NOTE:** Set TokenType to `Basic` in syanpse config file.