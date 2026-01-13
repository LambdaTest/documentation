---
id: hyperexecute-release-notes-2-8-2
title: Version 2.8.2
hide_title: false
sidebar_label: Version 2.8.2
description: Version 2.8.2
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmu.ai/support/docs/hyperexecute-release-notes-2-8-2
site_name: LambdaTest
slug: hyperexecute-release-notes-2-8-2
canonical: https://www.testmu.ai/support/docs/hyperexecute-release-notes-2-8-2/
---

import NewReleaseTag from '../src/component/newRelease.js';
import EnhancementTag from '../src/component/enhancementTag';
import BugFixTag from '../src/component/bugFixTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "Version",
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-2-8-2/`
        }]
      })
    }}
></script>
## Validate your HyperExecute YAML with ease !!
The [`--validate`](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/#--validate) flag checks the syntax and structure of your YAML file without executing any tests, allowing you to quickly verify if the file is properly formatted.

## How It Works
When you pass the `--validate` flag along with your YAML file, the CLI will:
- Validate the structure and syntax of the YAML file.
- Return a success or error message indicating whether the file is correct or if there are issues that need attention.

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE  --validate`}
  </CodeBlock>
</div>