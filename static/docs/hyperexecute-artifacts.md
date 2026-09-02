Artifacts are files generated during test execution, including reports and logs. You can refer to these files for obtaining consolidated information about the executed test cases, and can seamlessly interact with artifacts through the HyperExecute UI.

Following the completion of a Job, these artifacts are automatically stored in the **artifacts folder**, distinguishing previous files into **old-artifacts** on subsequent runs while retaining the recent files in artifacts.

## Steps to Generate and Download Artifacts
Follow the below mentioned steps to generate the Artifacts for your desired framework:

**Step 1:** Go to the HyperExecute YAML file

**Step 2:** Add the below mentioned parameters in the YAML file to generate the Artifacts

```yaml
uploadArtifacts:
- name: Executed-Job-Artifacts #user defined name of the artifact
path:
- src/test/index.html #path of the generated artifact
- name: My-Job-Artifacts
path:
- src/collect/info.html
```

- If you are generating multiple artifacts, then it is recommended to use this parameter, [`mergeArtifacts`](/support/docs/deep-dive-into-hyperexecute-yaml/#mergeartifacts) in your YAML, as it will zip all your Artifacts files while downloading from the dashboard.

- You can replace the Artifacts folder name value with any of the Matrix parameters value.

```yaml
matrix:
os: [win]
browser: ["chrome-latest-1", "firefox-latest-2"]

mergeArtifacts: true
uploadArtefacts:
- name: $browser
path:
- allure-results/
```

As shown in the above code, the artifacts folder generated will be named **chrome-latest-1** and **firefox-latest-2**


**Step 3:** Now trigger your job and go to the [HyperExecute](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute/jobs) dashboard.

**Step 4:** Click on any of the artifacts generated. You can also download the artifacts from the dashboard



Here is the sample artifact generated.



## Construct URLs for your Artifacts

### Test Artifacts Management

HyperExecute now allows you to access your _Artifacts_ directly from the HyperExecute UI and create URLs for them.



### Navigating Artifacts

To view or download your Artifacts, click the **Artifacts** button.



#### For a Single file

If you only have one file as an _Artifact_, then a preview of the file will be opened on your browser.



#### For Multiple files

If you have multiple files as an _Artifact_, then you will get an option to download all the files directly.



### Managing Test Artifacts URL

To make the most of this feature, follow the steps below.

> **Prioritize**: To access your _Artiacts_ for a particular _Job ID_, they must have a name.

#### 1. Constructing the URL

The URL to view an _Artifact_ in a standard job is:

`https://hyperexecute.lambdatest.com/artifact/view/?artifactName=`

- Insert the **_Job ID_** of your test and the name of your _Artifact_ in place of the `` and `` placeholder values.

- This URL will take you to a page where you can access the _Artifact_ and its contents.

For example, if you want to access the _Artifacts_ for a job with _Job ID_: `2d835a95-e7ea-4ea7-83e8-608c2f71d95c`, and the name of your _Artifact_ is `ExecutionSnapshots`, then your URL should be:

`https://hyperexecute.lambdatest.com/artifact/view/`**2d835a95-e7ea-4ea7-83e8-608c2f71d95c**`?artifactName=`**ExecutionSnapshots**





#### 2. Additional Filters

You can also use this feature to cycle through the files in your _Artifacts_.

**1. `filter=*.log`:** You can filter through all of your files by adding this at the end of your URL. However, you will have to insert the entire path of your _Artifacts_ folder or the names of the folder you want to use the filter in.

- For example, if you want to filter through the `.html` files of a folder called `site` with the path `/target/site/`, for the same job that was used above, then your URL will be:

`https://hyperexecute.lambdatest.com/artifact/view/2d835a95-e7ea-4ea7-83e8-608c2f71d95c?artifactName=ExecutionSnapshots&`**filter=target/site/*.html**





**2. `view=flat`:** If you add this at the end of the Artifact URL, then you will be able to view your artifacts in a list instead of a tree structure.

- For example, if you want to view the results of the filter used above in a flat manner, then your URL will be:

`https://hyperexecute.lambdatest.com/artifact/view/2d835a95-e7ea-4ea7-83e8-608c2f71d95c?artifactName=ExecutionSnapshots&filter=target/site/*.html&`**view=flat**





**3. `&taskId=`:** If you want to access the Artifacts for a particular task, then add this in your URL.

- For example, if you want to view the _Artifacts_ for a task with _Task ID_ `df8604cf-7af2-48b6-903d-786028078640` for the same job that was used above, then your URL will be:

`https://hyperexecute.lambdatest.com/artifact/view/2d835a95-e7ea-4ea7-83e8-608c2f71d95c?artifactName=ExecutionSnapshots&`**taskId=2731df9f-bc9f-4fbc-85c4-fe675aeffeb7**





## Receive Job Reports and Artifacts via Email

Downloading Job Reports and Artifacts manually from the HyperExecute UI can be a time-consuming and repetitive task. To address this pain point, HyperExecute now provides the convenience of receiving Job Reports and Artifacts directly to your specified email addresses. This eliminates the need for manual downloads, allowing you to access critical job information instantly and effortlessly. Embrace the efficiency of automated delivery and spend less time navigating the UI and more time focusing on your development tasks.

### YAML Configuration

To receive the Artifacts and Reports via mail, you will have to add the `email` flag with a `to` tag to select the email IDs where the report or artifacts should be sent. The example added below shows you how to add your email IDs:

```yaml
email:
to:
- <your_email_id@example.com>
- <another_email_id@example.com>
```

You can also use the `currentUser` tag to send the reports to the email ID of your choice.

- **currentUser**: This tag will allow you to send the report to the email ID associated with your TestMu AI account.

```yaml
email:
to:
- currentUser
```

### How to receive your Artifacts via Email?

Follow the below mentioned steps to receive your Artifacts via email:

**Step 1:** You need to mention the `email` flag along with the `to` tag under the `uploadArtifacts` flag in the YAML file configuration.

> **NOTE:** You can also add a separate email ID for each report generated, as mentioned below in the YAML code.

```yaml
uploadArtifacts:
- name: Reports 1
path:
- ProtractorTestReport.html
- xmlresults.xml
email:
to:
- <your_email_id@example.com>
- <another_email_id@example.com>

- name: Reports 2
path:
- ProtractorTestReport.html
- xmlresults.xml
email:
to:
- currentUser
```

### How to receive your Job Report via Email?

Follow the below mentioned steps to receive your Job Reports via email:

**Step 1:** Set the `report` flag to `true` in the HyperExecute YAML.

**Step 2:** Make sure to check the `location`, `type` and `frameworkName` fields in the `partialReports` flag are configured correctly.

**Step 3:** Add the `email` flag with `to` tag in the YAML file configuration:

```yaml
report: true
partialReports:
frameworkName: testng
location: target/surefire-reports/html
type: html
email:
to:
- <your_email_id@example.com>
- <another_email_id@example.com>
```

### Correct format of entering the Email IDs

The Email IDs that you enter must be valid. You can enter your email IDs in the formats mentioned below.

```yaml
- John Doe <johndoe@example.com>
- John <johndoe@example.com>
- johndoe@example.com
```

However, if your email IDs are added in an unsupported format, the feature will not work. A few examples of unsupported email ID formats are added below.

```yaml
- John Doe johndoe@example.com>
- John <<johndoe@example.com>
- John johndoe@example.com
- John Doe
```

Now that you have added your email IDs successfully, you can access your job reports. Download the report from the email, and get all the information that you need. Alternatively, you can also open the clickable link in the email and view the report on your browser.

### How to dynamically set your email address?
In your YAML configuration file instead of hardcoding the email address to which you want to share the report or artifacts, you can use a variable that can be set dynamically when you pass the execution command.

In this example, the `${email}` and `${email1}` variables are used to specify the email address. You can pass the value of this variable using the [`vars`](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/#--vars) flag as an argument when executing your test via CLI.

```yaml title="hyperexecute.yaml"
report: true
partialReports:
location: target/surefire-reports/html
type: html
frameworkName: extent
# highlight-start

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

email:
to:
- "${email}"
- "${email1}"
# highlight-end

uploadArtifacts:
- name: Reports 1
path:
- ProtractorTestReport.html
# highlight-start
email:
to:
- "${email}"
- "${email1}"
# highlight-end
```

This is how you can pass the value of your email address via CLI by running the command

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE --vars "email=xyz@abc.com" --vars "email1=abc@xyz.com"
```


If you have a pipeline that requires multiple email values, consider consolidating them into a single variable separated by commas. This approach eliminates the need for multiple variables or manual pipeline edits whenever the email list changes.

```yaml title="hyperexecute.yaml"
report: true
partialReports:
location: target/surefire-reports/html
type: html
frameworkName: extent
# highlight-start
email:
to:
- "${email}"
# highlight-end

uploadArtifacts:
- name: Reports 1
path:
- ProtractorTestReport.html
# highlight-start
email:
to:
- "${email}"
# highlight-end
```

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE --vars "email=xyz@abc.com,abc@xyz.com,def@wxy.com"
```


## Download and Process Job Artifacts in Global Post

The **`globalPost`** step can download every task's artifacts onto a VM after your HyperExecute job finishes, run the shell commands you specify against them, and place the processed output back into the job's **Artifacts** section on the dashboard. It can also email the final result to a list of recipients. This lets you turn the raw artifacts a job produced into a custom report or summary, entirely within HyperExecute and without any changes to your test framework code.

> 📘 This page covers the artifact download and processing behavior of `globalPost`. For the base `globalPost` step (running cleanup commands after a job), see [`globalPost`](/support/docs/deep-dive-into-hyperexecute-yaml/#globalpost) in the YAML deep dive.



### Why Process Artifacts in Global Post?

Consider a long HyperExecute pipeline that produces reports, logs, and screenshots across dozens of tasks. Traditionally, to merge those into a single client-specific report, you would wait for the whole job to finish and then run a separate post-processing stage in an external CI/CD pipeline. That means your outer pipeline has to stay alive and keep tracking the job the whole time, just to do a bit of work at the end.

With artifact processing in `globalPost`, that final step moves inside HyperExecute. After all tasks complete, HyperExecute gathers the artifacts, runs your commands against them, and delivers the result, so your outer pipeline no longer has to babysit the job. You can terminate it early, for example with the CLI's `--no-track` flag, and still get your report generated and emailed.

**Run your tests → HyperExecute collects every task's artifacts → your commands process them → results appear in the dashboard and inbox**

#### Benefits

- **No external post-processing pipeline:** Merge reports, build summaries, or transform data right after the job, without a separate CI/CD stage.
- **Terminate your pipeline early:** Because processing runs inside HyperExecute, your outer pipeline can exit as soon as tests are queued (for example, with `--no-track`) and still receive the final report.
- **No test framework changes:** The processing is defined entirely in YAML, so you don't touch your test code to produce a custom report.
- **Custom, client-specific output:** Run any shell command against the artifacts to shape the exact report or artifact bundle your team or customer needs.



### Before You Begin

For the artifact-download step to run, all of the following must be true. If any is missing, the download step is silently skipped and `globalPost` just runs its commands as before, without downloading anything.

- [`uploadArtifacts`](/support/docs/hyperexecute-artifacts/) is configured in your YAML so that your tasks actually produce artifacts to download.
- `commands` under `globalPost` is not empty.
- `downloadArtifacts: true` is explicitly set under `globalPost`.



### Configuration

Add a `globalPost` section to your HyperExecute YAML and set `downloadArtifacts: true`:

```yaml
globalPost:
mode: remote
commands:
- echo "Downloaded artifacts are at: ${ARTIFACTS_DIR}"
- echo "Place upload files here: ${UPLOAD_DIR}"
- ls ${ARTIFACTS_DIR}
- mkdir -p ${UPLOAD_DIR}/processed-reports
- # ... your processing commands here ...
runson: linux
downloadArtifacts: true
email:
to:
- alice@yourcompany.com
- bob@yourcompany.com
templatePath: mailtemplates/template.html
```

#### Fields

| Field | Required | Description |
|---|---|---|
| `mode` | Yes | Must be `remote` for artifact downloads to work. |
| `commands` | Yes | The commands to run after artifacts are downloaded. They run in order. |
| `runson` | Yes | The OS to run commands on: `linux`, `win`, or `mac`. |
| `downloadArtifacts` | Yes | Set to `true` to enable artifact downloading. |
| `email` | No | Configure email recipients and template for the final output. |
| `email.to` | No | List of email addresses to receive the results. |
| `email.templatePath` | No | Path to a custom HTML email template (advanced use). |
| `disableEmail` | No | Set to `true` to skip sending emails entirely. |



### Working With Downloaded Artifacts

Once your tasks finish, HyperExecute downloads their artifacts to a VM and runs your `commands` in order. Your commands read the downloaded artifacts from one directory and write anything they want uploaded to another. Both locations are exposed as environment variables you can reference in your commands.

#### `ARTIFACTS_DIR` — where the downloaded artifacts live

Artifacts from all tasks land under `ARTIFACTS_DIR`, with one top-level folder per task ID. Inside each task folder, the artifacts keep their original upload structure (a folder per artifact name, then the original hierarchy).

```text
$ARTIFACTS_DIR/
├── task-id-1/
│   ├── artifact-name-1/
│   │   ├── homepage.png
│   │   └── checkout.png
│   └── artifact-name-2/
│       └── output.log
├── task-id-2/
│   ├── artifact-name-1/
│   │   └── login.png
│   └── artifact-name-2/
│       └── output.log
```

#### `UPLOAD_DIR` — where to place your output

Write anything you want returned to the job into `UPLOAD_DIR`. Everything placed here becomes visible in the job's **Artifacts** section on the HyperExecute dashboard. The folder structure you create is preserved exactly, so even a deep, multi-level layout is uploaded as-is.

```text
$UPLOAD_DIR/
├── merged-report.html     ← created by user commands
├── summary.json
└── processed/
└── final-results.csv
```


If `downloadArtifacts` is enabled but your commands don't write anything to `${UPLOAD_DIR}`, `globalPost` still completes successfully. There is simply nothing new in the **Artifacts** section — an empty upload is not treated as a failure.




### Email Delivery

When `email.to` is configured, HyperExecute sends an email after your `globalPost` commands finish and the results are uploaded. The email includes the job number and dashboard link, the size of the uploaded artifact zip, and a direct download link for the artifacts.

#### Reusing your `uploadArtifacts` email config

If you do not specify `email` under `globalPost` but your YAML's [`uploadArtifacts`](/support/docs/hyperexecute-artifacts/) section already has its own email configuration, that configuration is reused automatically for the `globalPost` results. You do not need to repeat it.

#### Disabling email

To suppress email entirely, set `disableEmail: true` under `globalPost`. This is useful when you want the processing and upload but not a notification, and it overrides any email configured under `uploadArtifacts`.

```yaml
globalPost:
mode: remote
runson: linux
downloadArtifacts: true
commands:
- ls ${ARTIFACTS_DIR}
disableEmail: true
```

#### Custom email templates

`email.templatePath` points to a custom HTML email template. This is an advanced option — the default template covers most needs. The template is a [Go template](https://pkg.go.dev/text/template) and supports the following variables:

| Variable | Description |
|---|---|
| `{{.JobNumber}}` | The HyperExecute job number. |
| `{{.DownloadLargeFileURL}}` | Signed download link for the artifact zip. |
| `{{.DashboardURL}}` | Link to the job in the HyperExecute dashboard. |
| `{{.FileSize}}` | Human-readable zip size (for example, `15.2 MB`). |
| `{{.Timestamp}}` | When the artifacts were generated. |



### Size and Time Limits

| What | Limit |
|---|---|
| Maximum artifact download size | 10 GB |
| Maximum upload size | 10 GB |
| Download timeout | 30 minutes |
| Upload timeout | 30 minutes |


If the total size of the artifacts to download exceeds **10 GB**, the download step fails with an error. If your jobs produce more than this, scope `uploadArtifacts` to only the files you actually need to process.




### Frequently Asked Questions


Why aren't my artifacts downloading?

The download step runs only when every prerequisite is met. Confirm that `downloadArtifacts: true` is set, that [`uploadArtifacts`](/support/docs/hyperexecute-artifacts/) is configured, and that `commands` is not empty. If any of these is missing, `globalPost` runs your commands without downloading anything.




Why is ARTIFACTS_DIR empty?

The directory is populated from the artifacts your tasks upload. If it's empty, your tasks likely didn't produce any artifacts — verify that they actually upload them via [`uploadArtifacts`](/support/docs/hyperexecute-artifacts/).




Why didn't I get an email?

Check that `email.to` contains valid addresses and that `disableEmail` is not set to `true`. Remember that `disableEmail: true` suppresses email even when `uploadArtifacts` has its own email configuration.




Why is the upload directory empty in the dashboard?

Only files your commands write into `${UPLOAD_DIR}` are uploaded. Make sure your commands actually create output there. If they don't, the job still completes successfully — there's just nothing new to show in the **Artifacts** section.




Why is my download failing on a large job?

The total artifacts to download cannot exceed **10 GB**; above that, the download step fails with an error. Narrow `uploadArtifacts` to just the files you need to process so you stay under the limit.




Why are my commands failing?

Commands run on the OS set in `runson` (`linux`, `win`, or `mac`). Make sure the tools and scripts you call are installed and compatible with that operating system.
