# Download and Process Job Artifacts in Global Post

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The **`globalPost`** step can download every task's artifacts onto a VM after your HyperExecute job finishes, run the shell commands you specify against them, and place the processed output back into the job's **Artifacts** section on the dashboard. It can also email the final result to a list of recipients. This lets you turn the raw artifacts a job produced into a custom report or summary, entirely within HyperExecute and without any changes to your test framework code.

> 📘 This page covers the artifact download and processing behavior of `globalPost`. For the base `globalPost` step (running cleanup commands after a job), see [`globalPost`](/support/docs/deep-dive-into-hyperexecute-yaml/#globalpost) in the YAML deep dive.



## Why Process Artifacts in Global Post?

Consider a long HyperExecute pipeline that produces reports, logs, and screenshots across dozens of tasks. Traditionally, to merge those into a single client-specific report, you would wait for the whole job to finish and then run a separate post-processing stage in an external CI/CD pipeline. That means your outer pipeline has to stay alive and keep tracking the job the whole time, just to do a bit of work at the end.

With artifact processing in `globalPost`, that final step moves inside HyperExecute. After all tasks complete, HyperExecute gathers the artifacts, runs your commands against them, and delivers the result, so your outer pipeline no longer has to babysit the job. You can terminate it early, for example with the CLI's `--no-track` flag, and still get your report generated and emailed.

**Run your tests → HyperExecute collects every task's artifacts → your commands process them → results appear in the dashboard and inbox**

### Benefits

- **No external post-processing pipeline:** Merge reports, build summaries, or transform data right after the job, without a separate CI/CD stage.
- **Terminate your pipeline early:** Because processing runs inside HyperExecute, your outer pipeline can exit as soon as tests are queued (for example, with `--no-track`) and still receive the final report.
- **No test framework changes:** The processing is defined entirely in YAML, so you don't touch your test code to produce a custom report.
- **Custom, client-specific output:** Run any shell command against the artifacts to shape the exact report or artifact bundle your team or customer needs.



## Before You Begin

For the artifact-download step to run, all of the following must be true. If any is missing, the download step is silently skipped and `globalPost` just runs its commands as before, without downloading anything.

- [`uploadArtifacts`](/support/docs/hyperexecute-artifacts/) is configured in your YAML so that your tasks actually produce artifacts to download.
- `commands` under `globalPost` is not empty.
- `downloadArtifacts: true` is explicitly set under `globalPost`.



## Configuration

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

### Fields

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



## Working With Downloaded Artifacts

Once your tasks finish, HyperExecute downloads their artifacts to a VM and runs your `commands` in order. Your commands read the downloaded artifacts from one directory and write anything they want uploaded to another. Both locations are exposed as environment variables you can reference in your commands.

### `ARTIFACTS_DIR` — where the downloaded artifacts live

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

### `UPLOAD_DIR` — where to place your output

Write anything you want returned to the job into `UPLOAD_DIR`. Everything placed here becomes visible in the job's **Artifacts** section on the HyperExecute dashboard. The folder structure you create is preserved exactly, so even a deep, multi-level layout is uploaded as-is.

```text
$UPLOAD_DIR/
├── merged-report.html     ← created by user commands
├── summary.json
└── processed/
└── final-results.csv
```


If `downloadArtifacts` is enabled but your commands don't write anything to `${UPLOAD_DIR}`, `globalPost` still completes successfully. There is simply nothing new in the **Artifacts** section — an empty upload is not treated as a failure.




## Email Delivery

When `email.to` is configured, HyperExecute sends an email after your `globalPost` commands finish and the results are uploaded. The email includes the job number and dashboard link, the size of the uploaded artifact zip, and a direct download link for the artifacts.

### Reusing your `uploadArtifacts` email config

If you do not specify `email` under `globalPost` but your YAML's [`uploadArtifacts`](/support/docs/hyperexecute-artifacts/) section already has its own email configuration, that configuration is reused automatically for the `globalPost` results. You do not need to repeat it.

### Disabling email

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

### Custom email templates

`email.templatePath` points to a custom HTML email template. This is an advanced option — the default template covers most needs. The template is a [Go template](https://pkg.go.dev/text/template) and supports the following variables:

| Variable | Description |
|---|---|
| `{{.JobNumber}}` | The HyperExecute job number. |
| `{{.DownloadLargeFileURL}}` | Signed download link for the artifact zip. |
| `{{.DashboardURL}}` | Link to the job in the HyperExecute dashboard. |
| `{{.FileSize}}` | Human-readable zip size (for example, `15.2 MB`). |
| `{{.Timestamp}}` | When the artifacts were generated. |



## Size and Time Limits

| What | Limit |
|---|---|
| Maximum artifact download size | 10 GB |
| Maximum upload size | 10 GB |
| Download timeout | 30 minutes |
| Upload timeout | 30 minutes |


If the total size of the artifacts to download exceeds **10 GB**, the download step fails with an error. If your jobs produce more than this, scope `uploadArtifacts` to only the files you actually need to process.




## Frequently Asked Questions


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
