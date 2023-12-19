---
id: tas-configurations-framework
title: Configurations for Framework
hide_title: true
sidebar_label: Configurations for Framework
description: Custom configuration for frameworks.
keywords:
  - LambdaTest TAS
  - Test at Scale
  - TAS - Configurations for Framework
  - TAS - Configuration
url: https://www.lambdatest.com/support/docs/
site_name: LambdaTest
slug: tas-configurations-framework/
---

# Configurations for Framework
***
### Mocha

Follow these steps to use a custom configuration file in mocha framework.

- Create a `mocha` configuration file in the repository.

```yml title="mocharc.yaml"
require: 
  - ts-node/register 
  - jsdom-global/register
```
- Add `configFile` parameter in the tas yml file and reference the mocha config file.

```yml title=".tas.yaml"
...
configFile: mocharc.yml
...
```
