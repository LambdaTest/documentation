---
id: kaneai-upload-and-download-files
title: Upload and Download Files in KaneAI
hide_title: false
sidebar_label: Upload and Download Files
description: This documentation will help you to understand how to Upload and Download Files
keywords:
- upload files
- download files
- kane ai
url: https://www.testmuai.com/support/docs/kaneai-upload-and-download-files/
site_name: TestMu AI
slug: kaneai-upload-and-download-files/
canonical: https://www.testmuai.com/support/docs/kaneai-upload-and-download-files/
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
          "name": "Upload and Download Files",
          "item": `${BRAND_URL}/support/docs/kaneai-upload-and-download-files/`
        }]
      })
    }}
></script>This guide provides a step-by-step process for uploading and downloading files within Kane AI, a cloud-based testing platform provided by <BrandName />. Users can easily upload files from their local system, access pre-uploaded files, and download files generated during a test session.

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/kaneai-upload-and-download-files/"
    },
    "headline": "Upload and Download Files in KaneAI",
    "description": "This documentation will help you to understand how to Upload and Download Files",
    "url": "https://www.testmuai.com/support/docs/kaneai-upload-and-download-files/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "KaneAI",
    "keywords": [
      "upload files",
      "download files",
      "kane ai"
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
    "dateModified": "2026-10-13T00:00:00+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Steps to Upload a File",
      "description": "This documentation will help you to understand how to Upload and Download Files",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Initiate a Test Session",
          "text": "Log in to your TestMu AI account. Click on Create a Web Test to start a new session within Kane AI.",
          "url": "https://www.testmuai.com/support/docs/kaneai-upload-and-download-files/#step-1-initiate-a-test-session"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Navigate to the Upload Section",
          "text": "Within the test session, navigate to the specific webpage where file uploads are required. Type a slash (/) to access the file selection menu.",
          "url": "https://www.testmuai.com/support/docs/kaneai-upload-and-download-files/#step-2-navigate-to-the-upload-section"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Select Files for Upload",
          "text": "Choose to either: Select from pre-uploaded files. Upload files from your local system. - Ensure the upload limit does not exceed 5 files per session. - Supported file formats: - Images : JPG, JPEG, PNG, GIF (Maximum size: 10 MB) - Videos : MP4 (Maximum size: 50 MB) - Files : XLS, XLSX, DOC, DOCX, PDF, CSV, TXT, CRT, CER, GED, GPX, XML, PBIX, ZIP, JSON (Maximum size: 15 MB) Click Add File to confirm your selection.",
          "url": "https://www.testmuai.com/support/docs/kaneai-upload-and-download-files/#step-3-select-files-for-upload"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: File Upload Process",
          "text": "Upon clicking Add File, the selected files are uploaded successfully to the downloads folder within the session. These files are treated as variables and their paths are dynamically assigned. These variables are named with prefix FILE_ The FILE variable behavior described above applies to Web tests. In App tests** no file variable is created. See File Upload in App Tests below for more information.",
          "url": "https://www.testmuai.com/support/docs/kaneai-upload-and-download-files/#step-4-file-upload-process"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: Accessing Uploaded Files",
          "text": "In the test environment, type upload in the command field. Select the required file from the available list using double-curly braces syntax (e.g.,upload {{FILEIMAGE1_PNG}} in upload section). Kane AI will detect the appropriate action for uploading and provide relevant options. On the right panel, all downloaded files in the session\u2019s downloads folder will be displayed.",
          "url": "https://www.testmuai.com/support/docs/kaneai-upload-and-download-files/#step-5-accessing-uploaded-files"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Downloading Files from Kane AI",
      "description": "This documentation will help you to understand how to Upload and Download Files",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Managing Downloaded Files",
          "text": "Files added during the session will be visible in the downloads section. Users can either download all files at once or select specific files for download.",
          "url": "https://www.testmuai.com/support/docs/kaneai-upload-and-download-files/#step-1-managing-downloaded-files"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Reviewing Uploaded Files Post-Test",
          "text": "After test completion, all uploaded files are recorded as variables. These files are also available as attachments in the test summary page for easy reference and download. The file upload and download functionality in Kane AI enhances test automation by providing easy access to necessary files. By following these steps, testers can efficiently manage files during their test sessions.",
          "url": "https://www.testmuai.com/support/docs/kaneai-upload-and-download-files/#step-2-reviewing-uploaded-files-post-test"
        }
      ]
    }
  ]) }}
/>

## Prerequisites

- A valid <BrandName /> account with access to Kane AI.
- An active test session on Kane AI.
- Supported file formats:
  - **Images :** JPG, JPEG, PNG, GIF (Maximum size: 10 MB)
  - **Videos :** MP4 (Maximum size: 50 MB)
  - **Files :** XLS, XLSX, DOC, DOCX, PDF, CSV, TXT, CRT, CER, GED, GPX, XML, PBIX, ZIP, JSON (Maximum size: 15 MB)

## Steps to Upload a File
### Step 1: Initiate a Test Session
- Log in to your <BrandName /> account.
- Click on **Create a Web Test** to start a new session within Kane AI.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/upload-download-files/image1.png').default} alt="Image" className="doc_img"/>

### Step 2: Navigate to the Upload Section
- Within the test session, navigate to the specific webpage where file uploads are required.
- Type a **`slash (/)`**  to access the file selection menu.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/upload-download-files/image2.png').default} alt="Image" className="doc_img"/>

### Step 3: Select Files for Upload
- Choose to either:
    - Select from pre-uploaded files.
    - Upload files from your local system.
> - Ensure the upload limit does not exceed 5 files per session. <br />
> - Supported file formats:
>    - **Images :** JPG, JPEG, PNG, GIF (Maximum size: 10 MB)
>    - **Videos :** MP4 (Maximum size: 50 MB)
>    - **Files :** XLS, XLSX, DOC, DOCX, PDF, CSV, TXT, CRT, CER, GED, GPX, XML, PBIX, ZIP, JSON (Maximum size: 15 MB)
- Click **Add File** to confirm your selection.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/upload-download-files/image3.png').default} alt="Image" className="doc_img"/>

### Step 4: File Upload Process
- Upon clicking **Add File**, the selected files are uploaded successfully to the downloads folder within the session.
- These files are treated as variables and their paths are dynamically assigned.
- These variables are named with prefix `FILE_`

:::note
The `FILE_` variable behavior described above applies to **Web tests**. In **App tests** no file variable is created. See [File Upload in App Tests](#file-upload-in-app-tests) below for more information.
:::

### Step 5: Accessing Uploaded Files
- In the test environment, type upload in the command field.
- Select the required file from the available list using **double-curly braces syntax** (e.g.,`upload {{FILE_IMAGE_1_PNG}} in upload section`).
- Kane AI will detect the appropriate action for uploading and provide relevant options.
- On the right panel, all downloaded files in the session’s downloads folder will be displayed.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/upload-download-files/image4.png').default} alt="Image" className="doc_img"/>

## File Upload in App Tests

File upload behaves differently in App tests than in Web tests. In a Web test, <BrandName /> creates a file variable for each upload. App tests skip this step entirely. No file variable is created, so you never reference uploaded files with double-curly-brace syntax.

### How it works

When you upload files to an App test session, <BrandName /> injects them directly into the device's storage. The files become part of the device itself, which is why there is no variable to assign, track, or reference in your instructions.

### Working with injected files

Most native apps include their own file controls, such as an upload or attach button. Selecting one of these opens the device's system gallery or file picker, where your injected files are already available. You then choose the file you need and continue through the app's normal flow, exactly as a real user would.

## Downloading Files from Kane AI
### Step 1: Managing Downloaded Files
- Files added during the session will be visible in the downloads section.
- Users can either download all files at once or select specific files for download.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/upload-download-files/image6.png').default} alt="Image" className="doc_img"/>

### Step 2: Reviewing Uploaded Files Post-Test
- After test completion, all uploaded files are recorded as variables.
- These files are also available as attachments in the test summary page for easy reference and download.

The file upload and download functionality in Kane AI enhances test automation by providing easy access to necessary files. By following these steps, testers can efficiently manage files during their test sessions.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/upload-download-files/image7.png').default} alt="Image" className="doc_img"/>

## Save a session download as a reusable File

If the website downloads a file during Web Agent authoring, you can save that downloaded item as a global File. Open the session's **Download** panel, choose the downloaded file, and save it to **Files** with a unique alias. The saved File then appears in **KaneAI** > **Variables** > **Files** and can be used by other test cases. A session download is not added to the global Files list until you save it there.

## Create and use global Files

You can also create a global File from a local file before authoring a test:

1. Open **KaneAI** > **Variables** > **Files** and click **New File**.
2. Choose a local file, enter an alias, and click **Create File**.
3. In a Web Agent instruction, reference it as `{{file.alias}}`, such as `Upload {{file.profile_image}} to the form`.

<img loading="lazy" src={require('../assets/images/kane-ai/features/data-driven-testing/new-file-dialog.png').default} alt="New File dialog with a selected PNG and an alias field" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/kane-ai/features/data-driven-testing/global-files-list.png').default} alt="Global Files list showing alias, file name, type, usage, and update date" className="doc_img"/>

An alias can contain 1–64 lowercase letters, digits, and underscores. The names `register` and `resolve` are reserved. The global alias syntax is separate from the session `FILE_` variable syntax in the upload flow above. A global File becomes linked to a test case after a step that uses it is saved.

While authoring, you can type **/Upload file** to choose an existing File or upload a new one from your computer. Select the File in the picker, add it to the test, and run the upload step.

<img loading="lazy" src={require('../assets/images/kane-ai/features/data-driven-testing/select-file-dialog.png').default} alt="Web Agent Upload file dialog with an existing File selected" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/kane-ai/features/data-driven-testing/file-upload-step.png').default} alt="Web Agent step using a file alias and showing the completed upload action" className="doc_img"/>

Open **Variables & secrets** > **Files** in the session to see available Files and download a local copy. The global Files list also lets you download or replace a File. Replacing its content can change the file type, so review tests that use the alias afterward.

<img loading="lazy" src={require('../assets/images/kane-ai/features/data-driven-testing/session-files.png').default} alt="Web Agent Files panel with a reusable PNG File and Download action" className="doc_img"/>

A test run can save its CSV or XLSX output as a reusable File. See [Test Run Output](/support/docs/kaneai-test-run-output/) for that workflow.
