---
id: hyperexecute-gitignore
title: Ignore Unnecessary Files in your Payload
hide_title: false
sidebar_label: Ignoring Files
description: Optimize HyperExecute CLI with .gitignore & .hyperexecuteignore files. Exclude unneeded files for efficient test script execution.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
url: https://www.testmu.ai/support/docs/hyperexecute-gitignore
site_name: LambdaTest
slug: hyperexecute-gitignore
canonical: https://www.testmu.ai/support/docs/hyperexecute-gitignore/
---


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
          "name": "HyperExecute Concepts",
          "item": `${BRAND_URL}/support/docs/hyperexecute-gitignore/`
        }]
      })
    }}
></script>

When you trigger your job, [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) creates a zip of your test scripts before sending it for execution on the HyperExecute Platform.

If you want to ignore any un-necessary files during this process, you can use the `.hyperexecuteignore` file. The HyperExecuteIgnore file serves as a configuration file to specify files that should be excluded when HyperExecute prepares a zipped archive of your test scripts. This functionality is similar to the `.gitignore` file used in Git version control.

## Benefits
Excluding unnecessary files from the archive offers several advantages:

- **Improved Security and Privacy :** HyperExecuteIgnore allows you to exclude sensitive information like log files, hidden files, or any other private data from the test archive. This helps maintain security and protects confidential information during test execution.
- **Reduced Archive Size :** By omitting irrelevant files, the zipped archive containing your test scripts becomes smaller. This is beneficial for storage and transmission purposes.
- **Faster Testing Process :** A smaller archive size can potentially lead to a faster test execution process, as less 
data needs to be transferred and uploaded to the testing environment.

## How to write `.hyperexecuteignore`  file?

The HyperExecuteIgnore file follows a format similar to the .gitignore file used with Git. It allows the use of wildcards to exclude patterns of files based on specific naming conventions.

```bash
examplename
hyperexecute.exe
*.type
examplename/
```
The above file would make sure that following are excluded while the zip is created:

1. **examplename**: All files and folder with the name `examplename`.
2. **examplename.type**: All files with the name `examplename` and format `type`.
3. ***.type**: All files of the format `type`.
4. **examplename/**: All files and folders under the parent folder called `examplename`.

:::info
- By leveraging `.hyperexecuteignore` file, you can achieve similar functionality to `.gitignore` and streamline the test execution process by keeping the archive size minimal.

- If both files are present in the directory then the files listed in the `.gitignore` only are ignored. The items listed in `.gitignore` file take **precedence** over the items listed under `.hyperexecuteignore`.
:::

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        HyperExecute's Ignore Functionality
      </span>
    </li>
  </ul>
</nav>