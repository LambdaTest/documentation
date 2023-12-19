---
id: hyperexecute-gitignore
title: HyperExecute's Ignore functionality
hide_title: true
sidebar_label: GitIgnore & HyperExecuteIgnore
description: Optimize HyperExecute CLI with .gitignore & .hyperexecuteignore files. Exclude unneeded files for efficient test script execution.
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
url: https://www.lambdatest.com/support/docs/hyperexecute-gitignore/
site_name: LambdaTest
slug: hyperexecute-gitignore/
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
          "name": "HyperExecute Concepts",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-gitignore/"
        }]
      })
    }}
></script>

## Understanding `.gitignore` & `.hyperexecuteignore`

HyperExecute CLI creates a zip of your test scripts before sending it for execution on the HyperExecute Platform. If you want to ignore any un-necessary files during this process, you can use the `.gitignore` or the `hyperexecuteignore` feature. 

Your log files, hidden files or any other private files can be ignored by the [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) if you use this feature. You can list multiple files or directories in the `.gitignore` file, and all of them will be ignored. However, a `.gitignore` file has a fixed format. [Learn more](https://git-scm.com/docs/gitignore) 

*** 

The `.hyperexecuteignore` file has a similar functionality and follows the same format as `.hyperexecuteignore` allowing you to ignore certain files in case you are not using `.hyperexecuteignore`. An example of a `.gitignore` file is given below.

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


> **Note**: If both files are present in the directory then the files listed in the `.gitignore` only are ignored. The items listed in `.gitignore` file take **precedence** over the items listed under `.hyperexecuteignore`.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
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