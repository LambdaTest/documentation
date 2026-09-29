# Receive Job Reports and Artifacts via Email

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

\n- John <\n- John johndoe@example.com\n- John Doe"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "highlight-end",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\nThis is how you can pass the value of your email address via CLI by running the command\n\n```bash\n./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE --vars \"email=xyz@abc.com\" --vars \"email1=abc@xyz.com\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "highlight-end",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n```bash\n./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE --vars \"email=xyz@abc.com,abc@xyz.com,def@wxy.com\""
      }
    ],
    "dateModified": "2026-09-24T12:00:00+05:30"
  }) }}
/>

# Receive Job Reports and Artifacts via Email

Downloading Job Reports and Artifacts manually from the HyperExecute UI can be a time-consuming and repetitive task. To address this pain point, HyperExecute now provides the convenience of receiving Job Reports and Artifacts directly to your specified email addresses. This eliminates the need for manual downloads, allowing you to access critical job information instantly and effortlessly. Embrace the efficiency of automated delivery and spend less time navigating the UI and more time focusing on your development tasks.

## YAML Configuration

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

## How to receive your Artifacts via Email?

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

## How to receive your Job Report via Email?

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

## How to send emails based on the job status?

You can send the report or artifacts to different people depending on how the job ended. Add a job status as a key under `email`, next to `to`, and list the email IDs that should receive the mail when the job ends in that status.

```yaml
report: true
partialReports:
frameworkName: testng
location: target/surefire-reports/html
type: html
email:
to:
- qa-lead@example.com
failed:
- oncall@example.com
- dev-team@example.com
aborted:
- currentUser

uploadArtifacts:
- name: Reports
path:
- reports/
email:
failed:
- oncall@example.com
```

With the configuration above:

- `qa-lead@example.com` receives the report for every job, whatever the status.
- `oncall@example.com` and `dev-team@example.com` also receive the report when the job fails.
- The user who ran the job also receives the report when the job is aborted.
- The `Reports` artifacts are mailed to `oncall@example.com` only when the job fails. For any other status, no one receives them, because this block has no `to`.

The following job statuses are accepted as keys:

| Key | Mail is sent when the job ends as |
|-----|-----------------------------------|
| `completed` | Completed |
| `failed` | Failed |
| `aborted` | Aborted |
| `skipped` | Partially Completed. `partially_completed` also works |
| `ignored` | Ignored |
| `timeout` | Timeout |
| `lambda_error` | Lambda Error |
| `error` | Error |

Keep the following in mind:

- **`to` is always mailed.** The status lists add recipients on top of `to`, they do not replace it. You can also leave out `to` and use only status keys.
- **Each email ID gets one mail.** If an email ID is in `to` and also in the list for the status the job ended in, it receives the mail only once.
- **Keys are case-insensitive.** `Failed`, `FAILED` and `failed` are the same key, and a space or dash works like an underscore.
- **Unsupported keys are ignored.** Statuses that are not in the table above, such as `running`, `initiated`, `blocked` or `stopped`, and misspelt keys, are ignored with a warning in the CLI output. The job still runs.
- **`currentUser`** can be used in the status lists the same way as in `to`.
- **Email IDs in the status lists** follow the same format rules as `to`. See [Correct format of entering the Email IDs](#correct-format-of-entering-the-email-ids).

Job status keys are supported under `partialReports.email` and `uploadArtifacts[].email` (or `uploadArtefacts[].email`). They are not supported under `globalPost.email`, which always mails the `to` list.

## Correct format of entering the Email IDs

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

## How to dynamically set your email address?
In your YAML configuration file instead of hardcoding the email address to which you want to share the report or artifacts, you can use a variable that can be set dynamically when you pass the execution command.

In this example, the `${email}` and `${email1}` variables are used to specify the email address. You can pass the value of this variable using the [`vars`](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/#--vars) flag as an argument when executing your test via CLI.

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
