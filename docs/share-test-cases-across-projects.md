---
id: share-test-cases-across-projects
title: Share Test Cases Across Projects in Test Manager
hide_title: true
toc_max_heading_level: 2
sidebar_label: Share Test Cases Across Projects
description: Maintain a test case in one project and share it with other projects under the same ID. Receiving projects use it read-only in their own test runs, and every change in the source reaches them automatically.
keywords:
  - share test cases
  - share test cases across projects
  - shared test cases
  - central test case repository
  - reuse test cases
  - shared incoming
  - test manager
url: https://www.testmuai.com/support/docs/share-test-cases-across-projects/
site_name: TestMu AI
slug: share-test-cases-across-projects/
canonical: https://www.testmuai.com/support/docs/share-test-cases-across-projects/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Share Test Cases Across Projects in Test Manager",
          "item": `${BRAND_URL}/support/docs/share-test-cases-across-projects/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/share-test-cases-across-projects/"
    },
    "headline": "Share Test Cases Across Projects in Test Manager",
    "description": "Maintain a test case in one project and share it with other projects under the same ID. Receiving projects use it read-only in their own test runs, and every change in the source reaches them automatically.",
    "url": "https://www.testmuai.com/support/docs/share-test-cases-across-projects/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Test Manager",
    "keywords": [
      "share test cases",
      "shared test cases",
      "central test case repository"
    ],
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "dateModified": "2026-09-17T12:00:00+05:30"
  }) }}
/>

# Share Test Cases Across Projects

Many teams keep one central set of test cases, such as a regression repository, and several product teams run the same cases in their own projects. For example, an Android team and an iOS team may run the same checkout cases in separate projects during a release. Copying the cases into each project gives every copy a new ID, and the copies drift apart as soon as the original changes.

<BrandName /> Test Manager lets you keep a test case in one project, the **source project**, and share it with other projects in your organization:

- The test case keeps its **same ID** in every project it is shared with. Nothing is copied, and no new test case is created in the receiving project.
- It is **maintained only in the source project**. Receiving projects use it read-only.
- **Every change reaches every receiving project.** When the source project saves a new version, receiving projects see it straight away.
- **Each project runs it independently.** Every receiving project adds the case to its own test runs, and results are never visible outside the project that recorded them.

---

## Sharing compared with copying and moving

| | Share | Copy | Move |
|---|---|---|---|
| **Test case ID** | Same ID in every project | The copy gets a new ID | Keeps its ID, now owned by the destination project |
| **Where it is edited** | Only in the source project | Each copy is edited on its own | In the destination project |
| **Changes to the original** | Reach every receiving project automatically | Do not reach the copy | Not applicable |
| **Available in** | The source project and every project it is shared with | The source and the destination, as two separate test cases | Only the destination project |
| **Test runs and results** | Separate in each project | Separate in each project | Belong to the project that ran them |

Use sharing when several projects need the same test case and it must stay identical everywhere. Use [copy](/support/docs/copy-and-move-support-for-test-cases/) when a project needs its own version that it can change freely.

---

## At a glance

| Topic | Behaviour |
|---|---|
| **Who can share** | Users who can update test cases in the source project and create test cases in each receiving project |
| **Which projects** | Other Test Manager projects in the same organization. Restricted and isolated projects can't share or receive |
| **Limits per share action** | Up to 10 receiving projects and 500 test case and project pairs |
| **In the receiving project** | Listed under **Shared Incoming** and in the test case list, with its source project and folder path. Optionally added to a folder |
| **Editing** | Only in the source project. Read-only in receiving projects for every role, including admins |
| **Versions** | Receiving projects always see the latest version. Test instances keep the version they were added at until the team updates them |
| **Execution** | Manual execution only in receiving projects |
| **Unsharing** | Removes the receiving project's test instances and results for that test case permanently |

---

## Before you start

### Availability

Sharing test cases across projects is being rolled out to organizations gradually. If you don't see the option to share a test case, contact <BrandName /> support to enable it for your organization.

### Permissions

Sharing uses the existing Test Manager permissions. There is no separate permission for sharing.

| Action | Permission needed | In which project |
|---|---|---|
| Turn project sharing settings on or off | Update project | The project whose settings you change |
| Share a test case | Update test case, and create test case | Update in the source project, create in each receiving project |
| Unshare a test case | Update test case | Source project |
| View shared test cases | List and read test cases | Receiving project |
| Add a shared test case to a test run | Update test run | Receiving project |
| Execute a shared test case | Execute test run | Receiving project |
| Remove a project's access to a shared test case | Delete test case | Receiving project |

If you don't have create test case permission in a selected receiving project, that project is skipped and the share completes for the others. For details on roles, see [RBAC Roles and Permissions](/support/docs/rbac-roles-and-permissions/).

### Restricted and isolated projects

Restricted and isolated projects can't share test cases and can't receive them. Their sharing settings stay off and can't be turned on.

---

## Turn on sharing in project settings

Each project has two sharing settings, one for each direction:

| Setting | What it controls |
|---|---|
| **Share test cases with other projects** | Whether test cases in this project can be shared out. When it is off, the share option is hidden on every test case in the project |
| **Receive test cases from other projects** | Whether other projects can share test cases into this project. When it is off, the project can't be selected as a receiving project |

To change them:

1. Open the project in Test Manager and go to the project's **Settings**.
2. Open the test case sharing settings.
3. Turn each setting on or off.

<!-- screenshot: project settings showing the share out and receive in sharing settings
<img loading="lazy" src={require('../assets/images/test-manager/test-cases/share/project-sharing-settings.png').default} alt="Project settings for sharing test cases with other projects and receiving test cases from other projects" className="doc_img"/>
-->

:::note
You can't turn a setting off while shares exist in that direction. To turn off sharing out, first unshare every test case this project shares with other projects. To turn off receiving, first remove this project's access to every test case shared into it. The two directions are checked separately, so test cases shared into a project don't stop you from turning off sharing out.
:::

---

## Share test cases with other projects

1. Open the source project and go to the **Test Cases** tab.
2. Start the share in one of these ways:
   - **One test case:** open the test case's menu in the list, or the menu in the test case summary, and choose the share option.
   - **Several test cases:** select them using their checkboxes, then choose the share option from the bulk actions.

   <!-- screenshot: share option in the test case menu and in the bulk actions
   <img loading="lazy" src={require('../assets/images/test-manager/test-cases/share/share-menu.png').default} alt="Share option for test cases in Test Manager" className="doc_img"/>
   -->

3. Select the projects to share with. Projects that can't receive the test cases can't be selected, and show the reason. For example, the project has receiving turned off, or you don't have access to it.

   <!-- screenshot: share dialog with receiving projects selected
   <img loading="lazy" src={require('../assets/images/test-manager/test-cases/share/share-dialog-targets.png').default} alt="Selecting the projects to share test cases with" className="doc_img"/>
   -->

4. Optionally, for each selected project, add the test cases to a folder in that project. You can choose one folder per project. If you don't choose a folder, the test cases are still available in that project under **Shared Incoming** and in its test case list.

   <!-- screenshot: choosing a folder in the receiving project
   <img loading="lazy" src={require('../assets/images/test-manager/test-cases/share/share-dialog-folder.png').default} alt="Choosing a folder in the receiving project for the shared test cases" className="doc_img"/>
   -->

5. Review the summary and confirm.

After you confirm, the result is shown for each project. Test cases or projects that couldn't be shared are listed as skipped, with the reason. The rest are shared.

In the source project, a shared test case shows how many projects it is shared with.

### What can be shared

- **Test cases of any status.** There is no approval step. The test case's status is shown to receiving projects so they can judge whether it is ready to use.
- **Test cases with automation.** Receiving projects can run them manually only.
- **Only test cases the project owns.** A test case shared into a project can't be shared on to another project. Share it from its source project instead.

### Limits

- Up to **10 receiving projects** in one share action.
- Up to **500 test case and project pairs** in one share action. For example, 50 test cases shared with 10 projects is 500 pairs.

If a share action goes over either limit, nothing is shared. Split the selection into smaller batches.

---

## Change sharing for test cases that are already shared

If some of the test cases you select are already shared with a project and some are not, you choose what to do for that project. You can choose a different option for each project in the same share action.

| Option | What happens |
|---|---|
| **Keep as is** | Nothing changes for that project |
| **Share remaining** | Only the test cases not yet shared with that project are shared. Test cases already shared keep their current folder |
| **Share all** | All selected test cases are shared, and test cases already shared are moved into the folder you choose. If you don't choose a folder, they are removed from the folders they were in |
| **Remove for all** | Every selected test case is unshared from that project |

<!-- screenshot: options for a project where some selected test cases are already shared
<img loading="lazy" src={require('../assets/images/test-manager/test-cases/share/reshare-options.png').default} alt="Options for a receiving project where some of the selected test cases are already shared" className="doc_img"/>
-->

:::warning
**Share all** reorganizes the receiving project's folders without asking that project's team. **Remove for all** is an unshare, and permanently removes that project's test instances and results for those test cases. See [Unshare test cases](#unshare-test-cases).
:::

To move a single project's folder for a test case that is already shared, share it with that project again and choose the new folder.

---

## Use shared test cases in a receiving project

### Find shared test cases

In the receiving project's **Test Cases** tab:

- **Shared Incoming** in the folder panel lists every test case shared into the project, with its own count. It is a flat list with no folders, and you can filter it by source project.
- **All Test Cases** also includes shared test cases, and they can be found by title and ID in search.
- A folder includes the shared test cases added to it.

Every shared test case shows its **source project and folder path**, wherever it is listed or opened. This helps you tell apart test cases with similar titles. The path always reflects where the test case currently is in the source project, so it updates if the source project renames or moves the folder. If you have access to the source project, the path opens the test case's folder there.

<!-- screenshot: Shared Incoming in a receiving project
<img loading="lazy" src={require('../assets/images/test-manager/test-cases/share/shared-incoming.png').default} alt="Shared Incoming list in the receiving project with the source project and folder path of each test case" className="doc_img"/>
-->

### Add shared test cases to a folder

A receiving project can add a shared test case to one of its own folders, one at a time or in bulk. This only places it in the receiving project's folder. The test case stays under **Shared Incoming**, and the source project and other receiving projects are not affected.

Removing a shared test case from a folder does not remove the project's access to it. It stays under **Shared Incoming**.

### Shared test cases are read-only

In a receiving project, a shared test case can't be edited. This applies to its details, fields, and steps, and to every role, including project and organization admins. The test case summary names the source project where it is maintained.

To change a shared test case, edit it in its source project. The change reaches every project it is shared with.

<!-- screenshot: shared test case summary in a receiving project
<img loading="lazy" src={require('../assets/images/test-manager/test-cases/share/shared-case-readonly.png').default} alt="Read-only summary of a shared test case in a receiving project, naming its source project" className="doc_img"/>
-->

Bulk actions that change test cases, such as bulk update, move to folder, change status, and delete, skip shared test cases in a mixed selection and report how many were skipped. Actions that don't change test cases, such as search, sort, filter, and adding to a test run, include them.

### Counts

- The test case count of a receiving project, including the **Test Cases** tab count and **All Test Cases**, includes shared test cases. **Shared Incoming** shows its own count, so you can see how many of the total are shared in.
- **Test Run Insights** counts only test cases the project owns. Shared test cases are not included there.

---

## Add shared test cases to test runs

When you create a test run or add test cases to an existing test run in a receiving project, shared test cases can be selected like any other:

- Select **Shared Incoming** to see the test cases shared into the project, or filter by source project.
- Select shared test cases that are in a folder from that folder.

<!-- screenshot: selecting shared test cases for a test run
<img loading="lazy" src={require('../assets/images/test-manager/test-cases/share/add-shared-to-run.png').default} alt="Selecting shared test cases when adding test cases to a test run" className="doc_img"/>
-->

Test runs, test instances, and results belong to the project that created them. If two projects run the same shared test case, neither project sees the other's results, and the source project does not see either.

Shared test cases can be executed manually in receiving projects. Automated and KaneAI execution of a shared test case is not available in a receiving project.

### Version updates

Shared test cases use the same versioning as any other test case:

- The test case itself always shows its **latest version** in every project.
- A **test instance** keeps the version it was added to the test run with. When the source project saves a newer version, the test instance shows that an update is available. The receiving team decides when to update each test instance, even if they don't have access to the source project.
- Results already recorded stay linked to the version they were recorded against.

Each project controls its own timing. For example, the Android team can keep a release test run on version 2 while the iOS team updates to version 3. A new test instance always uses the latest version.

<!-- screenshot: test instance showing a newer version is available
<img loading="lazy" src={require('../assets/images/test-manager/test-cases/share/version-update.png').default} alt="Test instance of a shared test case showing a newer version is available" className="doc_img"/>
-->

For more on versions, see [Test Case Versioning](/support/docs/test-case-versioning/).

---

## Unshare test cases

A share can be removed from either side:

- **From the source project:** unshare a test case from one or more receiving projects. Unsharing from one project does not affect the others.
- **From a receiving project:** remove the project's access to a shared test case, one at a time or in bulk.

The confirmation shows the test instances and test runs in the receiving project that will be affected.

<!-- screenshot: unshare confirmation
<img loading="lazy" src={require('../assets/images/test-manager/test-cases/share/unshare-confirm.png').default} alt="Confirmation before unsharing a test case, showing the affected test runs" className="doc_img"/>
-->

:::danger
Unsharing permanently removes the receiving project's test instances of that test case, along with their results, from its test runs. They can't be restored. Sharing the test case again gives the project access again, but does not bring back the removed results.
:::

After unsharing, the test case is also removed from the receiving project's folders. To get it back, the source project must share it again.

---

## How other actions affect shared test cases

### Archive

- Archiving a test case in the source project **does not unshare it**. Every receiving project keeps its access.
- An archived test case **can't be added to new test runs**, in the source project or in any receiving project. Test runs that already contain it keep their test instances and results.
- In receiving projects, an archived shared test case is hidden from **All Test Cases** and folders, and remains under **Shared Incoming** marked as archived.
- Only the source project can restore it. Once restored, it can be used again everywhere without sharing it again.

For more, see [Archive and Restore Test Cases](/support/docs/test-case-archive/).

### Move

| Move | What happens |
|---|---|
| **To another folder in the source project** | Allowed. Receiving projects see the new folder path. Their own folder placement is unchanged |
| **To another project** | Allowed after a warning. The destination project becomes the new source project, and every share moves with the test case, so receiving projects keep their access. The original project loses access to the test case |
| **To a project the test case is already shared with** | Allowed. That project now owns the test case instead of receiving it. The folder it was added to in that project is pre-selected as the destination. Other receiving projects keep access |

For more, see [Copy and Move Test Cases](/support/docs/copy-and-move-support-for-test-cases/).

### Delete

Deleting a shared test case, a folder that contains shared test cases, or a source project is allowed. The confirmation shows how many projects the test case is shared with.

:::danger
Deleting a shared test case removes it from every project it is shared with, along with the test instances and results of every one of those projects. This can't be undone. Check the number of affected projects in the confirmation, and let those teams know before you continue. If you only want to stop using a test case, [archive](#archive) it instead: receiving projects keep their existing results.
:::

---

## Limitations

- **Same organization only.** Test cases can be shared only with projects in the same organization.
- **Manual execution only in receiving projects.** Automated and KaneAI execution of shared test cases is not available there.
- **Up to 10 projects and 500 test case and project pairs per share action.** Larger selections need to be split into batches.
- **No sharing onward.** A test case shared into a project can't be shared from that project to another.
- **Restricted and isolated projects** can't share or receive test cases.
- **Test Run Insights** includes only test cases the project owns.
- **Unsharing and deleting remove results permanently** in receiving projects.

---

## Frequently asked questions

**Does sharing create a copy of the test case in the receiving project?**
No. The receiving project uses the same test case, with the same ID, maintained in the source project.

**Can a receiving project edit a shared test case?**
No. Edit it in the source project, and the change reaches every receiving project.

**Will a change in the source project change test runs that are already in progress?**
No. Existing test instances keep their version and show that an update is available. The receiving team chooses when to update.

**Can a user without access to the source project use a shared test case?**
Yes. They can view it, add it to test runs, and update test instances to a newer version in the receiving project. The source folder path is shown as text only.

**Why can't I turn off sharing in project settings?**
The project still has test cases shared in that direction. Unshare them, or remove access to them, then turn the setting off.

---

## Related resources

| Topic | Doc |
|---|---|
| Copying and moving test cases between projects | [Copy and Move Test Cases](/support/docs/copy-and-move-support-for-test-cases/) |
| Versions of a test case | [Test Case Versioning](/support/docs/test-case-versioning/) |
| Archiving and restoring test cases | [Archive and Restore Test Cases](/support/docs/test-case-archive/) |
| Creating and managing test runs | [Test Run Creation and Management](/support/docs/test-run-creation-and-management/) |
| Keeping test instances up to date | [Sync Test Instances](/support/docs/sync-test-instance/) |
| Assigning permissions | [RBAC Roles and Permissions](/support/docs/rbac-roles-and-permissions/) |

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
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
        Share Test Cases Across Projects
      </span>
    </li>
  </ul>
</nav>
