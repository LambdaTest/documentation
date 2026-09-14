---
id: kaneai-upload-and-download-files
title: How to Upload and Download Files With KaneAI
hide_title: true
toc_max_heading_level: 2
sidebar_label: Upload & Download Files
description: Upload files to a KaneAI test, reference them as variables, and download files produced during a test session.
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
          "name": "How to Upload and Download Files in KaneAI",
          "item": `${BRAND_URL}/support/docs/kaneai-upload-and-download-files/`
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
    "dateModified": "2026-09-09T19:16:50+05:30"
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



# How to Upload and Download Files With KaneAI
***

Upload files from your local system, reuse pre-uploaded files, and download files generated during a test session in KaneAI. This works in an active KaneAI test session on <BrandName />.


## Prerequisites
***

Before you begin, make sure you have:

:::note
- A <BrandName /> account with access to KaneAI.
- An active test session on KaneAI.
- Files within the supported formats and size limits:
  - **Images:** JPG, JPEG, PNG, GIF (maximum size: 10 MB)
  - **Videos:** MP4 (maximum size: 50 MB)
  - **Files:** XLS, XLSX, DOC, DOCX, PDF, CSV, TXT, CRT, CER, GED, GPX, XML, PBIX, ZIP, JSON (maximum size: 15 MB)
:::

## Upload a File
***

Follow these steps to upload a file during a KaneAI test session.

### Step 1: Start a Test Session
***

Log in to your <BrandName /> account and click **Create a Web Test** to start a new session in KaneAI.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/upload-download-files/image1.png').default} alt="Start a Test Session" className="doc_img"/>

**Result:** A new KaneAI test session opens.

### Step 2: Open the Upload Menu
***

Navigate to the webpage where the file upload is required, then type a **slash (`/`)** to open the file selection menu.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/upload-download-files/image2.png').default} alt="Open the Upload Menu" className="doc_img"/>

**Result:** The file selection menu appears.

### Step 3: Select Files
***

Either select from pre-uploaded files or upload files from your local system, then click **Add File** to confirm. You can add up to 5 files per session, within the supported formats and size limits listed under [Prerequisites](#prerequisites).

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/upload-download-files/image3.png').default} alt="Select Files" className="doc_img"/>

**Result:** Your selected files are queued for the session.

### Step 4: Confirm the Upload
***

After you click **Add File**, KaneAI uploads the selected files to the session's downloads folder. Each file is treated as a variable with a dynamically assigned path, named with the `FILE_` prefix.

:::note
The `FILE_` variable behavior applies to **Web tests**. In **App tests**, no file variable is created. See [file upload in app tests](#file-upload-in-app-tests) below.
:::

**Result:** The files are available in the session as `FILE_`-prefixed variables.

### Step 5: Reference an Uploaded File
***

Type `upload` in the command field, then select the file from the available list using **double-curly-brace syntax** (for example, `upload {{FILE_IMAGE_1_PNG}} in upload section`). KaneAI detects the upload action and shows the relevant options. The right panel lists all files in the session's downloads folder.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/upload-download-files/image4.png').default} alt="Reference an Uploaded File" className="doc_img"/>

**Result:** The uploaded file is attached to the test step.

## File Upload in App Tests
***

File upload behaves differently in App tests than in Web tests. In a Web test, <BrandName /> creates a file variable for each upload. App tests skip this step: no file variable is created, so you never reference uploaded files with double-curly-brace syntax.

### How It Works
***

When you upload files to an App test session, <BrandName /> injects them directly into the device's storage. The files become part of the device itself, which is why there is no variable to assign, track, or reference in your instructions.

### Working With Injected Files
***

Most native apps include their own file controls, such as an upload or attach button. Selecting one opens the device's system gallery or file picker, where your injected files are already available. Choose the file you need and continue through the app's normal flow, exactly as a real user would.

## Download Files
***

Follow these steps to manage and download files from a test session.

### Step 1: Manage Downloaded Files
***

Files added during the session appear in the downloads section. You can download all files at once or select specific files to download.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/upload-download-files/image6.png').default} alt="Manage Downloaded Files" className="doc_img"/>

**Result:** The selected files are downloaded to your local system.

### Step 2: Review Uploaded Files
***

After the test completes, all uploaded files are recorded as variables. They are also available as attachments on the test summary page for reference and download.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/upload-download-files/image7.png').default} alt="Review Uploaded Files" className="doc_img"/>

**Result:** Your session files are available as attachments on the test summary page.

## Next Steps
***

Continue with these guides:

- [KaneAI Forms Inputs and Data Entry](/support/docs/kaneai-kb-forms-inputs-and-data-entry/)
- [Author Your First Desktop Browser Test](/support/docs/author-your-first-desktop-browser-test/)
- [Author Your First Mobile App Test](/support/docs/author-your-first-mobile-app-test/)
- [KaneAI Using Variables](/support/docs/kane-ai-using-variables/)
- [KaneAI Command Guide](/support/docs/kane-ai-command-guide/)
