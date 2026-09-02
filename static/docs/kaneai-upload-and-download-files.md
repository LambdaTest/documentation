# How to Upload and Download Files With KaneAI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Upload files from your local system, reuse pre-uploaded files, and download files generated during a test session in KaneAI. This works in an active KaneAI test session on TestMu AI.

## Prerequisites

Before you begin, make sure you have:

- A TestMu AI account with access to KaneAI.
- An active test session on KaneAI.
- Files within the supported formats and size limits:
  - **Images:** JPG, JPEG, PNG, GIF (maximum size: 10 MB)
  - **Videos:** MP4 (maximum size: 50 MB)
  - **Files:** XLS, XLSX, DOC, DOCX, PDF, CSV, TXT, CRT, CER, GED, GPX, XML, PBIX, ZIP, JSON (maximum size: 15 MB)

## Upload a File

Follow these steps to upload a file during a KaneAI test session.

### Step 1: Start a Test Session

Log in to your TestMu AI account and click **Create a Web Test** to start a new session in KaneAI.

**Result:** A new KaneAI test session opens.

### Step 2: Open the Upload Menu

Navigate to the webpage where the file upload is required, then type a **slash (`/`)** to open the file selection menu.

**Result:** The file selection menu appears.

### Step 3: Select Files

Either select from pre-uploaded files or upload files from your local system, then click **Add File** to confirm. You can add up to 5 files per session, within the supported formats and size limits listed under [Prerequisites](#prerequisites).

**Result:** Your selected files are queued for the session.

### Step 4: Confirm the Upload

After you click **Add File**, KaneAI uploads the selected files to the session's downloads folder. Each file is treated as a variable with a dynamically assigned path, named with the `FILE_` prefix.

The `FILE_` variable behavior applies to **Web tests**. In **App tests**, no file variable is created. See [file upload in app tests](#file-upload-in-app-tests) below.

**Result:** The files are available in the session as `FILE_`-prefixed variables.

### Step 5: Reference an Uploaded File

Type `upload` in the command field, then select the file from the available list using **double-curly-brace syntax** (for example, `upload {{FILE_IMAGE_1_PNG}} in upload section`). KaneAI detects the upload action and shows the relevant options. The right panel lists all files in the session's downloads folder.

**Result:** The uploaded file is attached to the test step.

## File Upload in App Tests

File upload behaves differently in App tests than in Web tests. In a Web test, TestMu AI creates a file variable for each upload. App tests skip this step: no file variable is created, so you never reference uploaded files with double-curly-brace syntax.

### How It Works

When you upload files to an App test session, TestMu AI injects them directly into the device's storage. The files become part of the device itself, which is why there is no variable to assign, track, or reference in your instructions.

### Working With Injected Files

Most native apps include their own file controls, such as an upload or attach button. Selecting one opens the device's system gallery or file picker, where your injected files are already available. Choose the file you need and continue through the app's normal flow, exactly as a real user would.

## Download Files

Follow these steps to manage and download files from a test session.

### Step 1: Manage Downloaded Files

Files added during the session appear in the downloads section. You can download all files at once or select specific files to download.

**Result:** The selected files are downloaded to your local system.

### Step 2: Review Uploaded Files

After the test completes, all uploaded files are recorded as variables. They are also available as attachments on the test summary page for reference and download.

**Result:** Your session files are available as attachments on the test summary page.

## Next Steps

Continue with these guides:

- [KaneAI Forms Inputs and Data Entry](/support/docs/kaneai-kb-forms-inputs-and-data-entry/)
- [Author Your First Desktop Browser Test](/support/docs/author-your-first-desktop-browser-test/)
- [Author Your First Mobile App Test](/support/docs/author-your-first-mobile-app-test/)
- [KaneAI Using Variables](/support/docs/kane-ai-using-variables/)
- [KaneAI Command Guide](/support/docs/kane-ai-command-guide/)
