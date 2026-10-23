---
id: hyperexecute-job-callback
title: Receive a Callback When a Job Finishes
hide_title: true
sidebar_label: Receive a Job Completion Callback
description: Get an HTTPS POST with the status and test counts of your HyperExecute job as soon as it finishes, instead of polling the job API.
keywords:
  - TestMu AI Hyperexecute
  - HyperExecute callback
  - HyperExecute webhook
  - job completion callback
url: https://www.testmuai.com/support/docs/hyperexecute-job-callback/
site_name: TestMu AI
slug: hyperexecute-job-callback/
canonical: https://www.testmuai.com/support/docs/hyperexecute-job-callback/
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
          "name": "Receive a Job Completion Callback",
          "item": `${BRAND_URL}/support/docs/hyperexecute-job-callback/`
        }]
      })
    }}
></script>

# Receive a Callback When a Job Finishes

A job completion callback tells your own system the moment a HyperExecute job ends. You give HyperExecute a URL, and when the job finishes it sends one HTTPS `POST` request to that URL with the job's final status, its test counts and a link to the job.

Use it when something has to happen right after your tests finish, for example:

- **Continue a pipeline:** promote a build or start a deployment only when the job has passed.
- **Notify a team:** post the result to your own chat tool or ticketing system.
- **Record results:** store the status and test counts in your own dashboard or database.

Without a callback, your pipeline has to wait and poll the job API until the job ends. With a callback, it waits for the request instead.

## How It Works

1. You add a callback URL when you start the job, in the YAML file or in the API request.
2. HyperExecute checks the URL before the job starts. If the URL is not valid, the job is not created and you see an error straight away.
3. The job runs as usual.
4. When the job reaches its final status, HyperExecute sends one `POST` request with a JSON body to your URL.
5. Your endpoint answers with a `2xx` status. If it does not, HyperExecute tries again a few times.

Each job sends one callback. A job that cannot start at all, for example because it is rejected before any task is created, does not send one.

## Before You Begin

You need an endpoint that can receive the request:

- It uses **HTTPS** and is reachable from the internet.
- It accepts a `POST` request with a JSON body.
- Its URL is 255 characters or fewer and contains no username or password (`https://user:pass@...`).
- It is a public address. Private and internal addresses, such as `10.x.x.x`, `192.168.x.x` or `localhost`, are not called.

:::tip
To try the feature before you build an endpoint, use a free request inspector such as [webhook.site](https://webhook.site). It gives you a unique HTTPS URL and shows every request it receives.
:::

## Add the Callback URL

### Option 1: In the HyperExecute YAML

Add `callbackURL` at the top level of your YAML file:

```yaml
version: "0.1"
runson: linux
callbackURL: https://your-server.example.com/hyperexecute/callback
# ...the rest of your configuration
```

Then run the job with the [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) as usual:

```bash
./hyperexecute --user YOUR_USERNAME --key YOUR_ACCESS_KEY --config hyperexecute.yaml
```

:::note
Download the latest CLI before you use `callbackURL`. Older CLI versions ignore the key, so the job runs but no callback is sent.
:::

The callback URL is saved with the job. You can see it in the job's YAML view on the HyperExecute dashboard (identifying values are replaced with placeholders in this screenshot):

<img loading="lazy" src={require('../assets/images/hyperexecute/job-callback/job-yaml-callback-url.jpg').default} alt="HyperExecute job YAML view showing the callbackURL key" className="doc_img"/>

### Option 2: In the KaneAI HyperExecute API

When you [run a KaneAI test run on HyperExecute from your CI/CD pipeline](/support/docs/kaneai-ci-cd-automation/), pass `callback_url` in the request body:

```bash
curl --location 'https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic <Base64Auth>' \
--data '{
    "test_run_id": "YOUR_TEST_RUN_ID",
    "callback_url": "https://your-server.example.com/hyperexecute/callback"
}'
```

- A test run with both web and app test cases runs as **two jobs**, so your URL receives **two callbacks**, one for each job. Use `job_id` to tell them apart; it matches `job_id` and `app_job_id` in the API response.
- `callback_url` is not supported for sequential test runs.

## What You Receive

HyperExecute sends a `POST` request with `Content-Type: application/json`. Any query parameters you put in the URL are kept, so you can use them to label your jobs.

<img loading="lazy" src={require('../assets/images/hyperexecute/job-callback/callback-request-headers.jpg').default} alt="Callback request received by a request inspector, showing the POST method, URL, query parameters and JSON content type" className="doc_img"/>

Here is a real callback body (identifying values replaced with placeholders):

```json
{
  "job_id": "413484f0-f3c6-41c0-8df6-84f0de604bbe",
  "job": {
    "org_id": "YOUR_ORG_ID",
    "triggered_by": "YOUR_USERNAME",
    "job_number": 7,
    "job_label": "[\"nightly\",\"cli\"]",
    "remark": "",
    "trigger_source": "CLI",
    "type": "autosplit",
    "frameworks": [""],
    "project": {
      "id": "01KJ5ENBVET754KYPAB8GYKEFW",
      "name": "LambdaTest Default Project"
    },
    "created_at": "2026-10-23T14:32:09Z",
    "started_at": "2026-10-23T14:33:56Z",
    "ended_at": "2026-10-23T14:34:05Z",
    "updated_at": "2026-10-23T14:34:05Z",
    "global_timeout": 15,
    "test_suite_timeout": 10,
    "retry_on_failure": false,
    "tunnel_name": ""
  },
  "result": {
    "status": "skipped",
    "total": 1,
    "passed": 0,
    "failed": 0,
    "skipped": 1,
    "job_url": "https://hyperexecute.lambdatest.com/hyperexecute/task?jobId=413484f0-f3c6-41c0-8df6-84f0de604bbe"
  }
}
```

<img loading="lazy" src={require('../assets/images/hyperexecute/job-callback/callback-request-body.jpg').default} alt="JSON body of a HyperExecute job completion callback" className="doc_img"/>

### Fields

| Field | Description |
|-------|-------------|
| `job_id` | The job's ID. Use it with the [HyperExecute API](https://www.testmuai.com/support/api-doc/?key=hyperexecute) to fetch more details. |
| `result.status` | The job's final status, for example `completed`, `failed`, `aborted`, `timeout` or `skipped`. |
| `result.total`, `result.passed`, `result.failed`, `result.skipped` | Test counts for the job. |
| `result.job_url` | A link to the job on the HyperExecute dashboard. |
| `job.job_number` | The job's number in your organization, as shown on the dashboard. |
| `job.job_label` | The labels you set with `jobLabel`, as a JSON-encoded string. |
| `job.trigger_source` | How the job was started, for example `CLI`. |
| `job.type` | The run mode, for example `autosplit` or `matrix`. |
| `job.project` | The project the job belongs to. |
| `job.created_at`, `started_at`, `ended_at`, `updated_at` | Timestamps in UTC. |
| `job.global_timeout`, `test_suite_timeout`, `retry_on_failure`, `tunnel_name` | The job settings from your configuration. |
| `job.org_id`, `job.triggered_by` | Your organization ID and the user who started the job. |

Fields without a value are left out of the body. The request does not contain your access key.

## Respond to the Callback

- **Answer quickly.** Return any `2xx` status within 15 seconds, then do longer work after you respond.
- **Expect a retry.** If your endpoint returns `429` or a `5xx` error, or the connection fails, HyperExecute tries again a few times. A timed-out request is not retried.
- **Handle each job once.** Use `job_id` to ignore a repeat of a request you have already handled.
- **Use the final URL.** Redirects are not followed.
- **Check that the request is genuine.** The request is not signed. Put a hard-to-guess token in your URL path, or look the job up with the [HyperExecute API](https://www.testmuai.com/support/api-doc/?key=hyperexecute) using `job_id` before you act on it.

## Troubleshooting

| Symptom | Cause | Action |
|---------|-------|--------|
| The CLI stops with `callbackURL must use the https scheme` | The URL starts with `http://` | Use an `https://` URL. |
| The CLI stops with `callbackURL must be 255 characters or fewer` | The URL is too long | Shorten the URL, for example by moving query parameters into the path. |
| The CLI stops with `callbackURL must not contain userinfo` | The URL contains `user:password@` | Remove the credentials from the URL. |
| The KaneAI API returns a `callback_url ...` error | The same URL rules apply to `callback_url` | Fix the URL as described in the rows above. |
| The KaneAI API returns `callback_url is not supported for sequential test runs` | The test run is sequential | Remove `callback_url`, or run the test run in parallel mode. |
| The job runs but no callback arrives | The CLI is older than the version that supports `callbackURL` | Download the latest CLI and run the job again. |
| No callback arrives | The URL points to a private address, redirects, or your endpoint did not answer in time | Use a public HTTPS URL that answers directly with a `2xx` status within 15 seconds. |
| No callback arrives for a job that failed before it started | The job was rejected before any task ran | Fix the reason shown in the CLI or on the dashboard. A job that never starts does not send a callback. |
| Two callbacks for one KaneAI test run | The run has web and app test cases, which run as two jobs | This is expected. Handle each callback by its `job_id`. |
