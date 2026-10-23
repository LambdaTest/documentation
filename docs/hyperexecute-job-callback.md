---
id: hyperexecute-job-callback
title: Job Completion Callback
hide_title: true
sidebar_label: Job Completion Callback
description: Set a callback URL on a HyperExecute job or a KaneAI test run to receive an HTTPS POST with the job status and test counts when the job finishes.
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
          "name": "Job Completion Callback",
          "item": `${BRAND_URL}/support/docs/hyperexecute-job-callback/`
        }]
      })
    }}
></script>


# Job Completion Callback

A job completion callback sends one HTTPS `POST` request to a URL you set when a job finishes. The request contains the job status, the test counts and a link to the job.

## Where You Can Set It

| Where | Setting |
|-------|---------|
| HyperExecute YAML, run with the [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) | `callbackURL` |
| KaneAI [HyperExecute API for CI/CD](/support/docs/kaneai-ci-cd-automation/) | `callback_url` |

## Callback URL Requirements

- Uses `https://` and is publicly reachable.
- Accepts a `POST` request with a JSON body.
- Is 255 characters or fewer, with no username or password in it.

## Set the Callback URL

### HyperExecute YAML

Add `callbackURL` to your YAML file and run the job with the latest HyperExecute CLI:

```yaml
version: "0.1"
runson: linux
callbackURL: https://your-server.example.com/hyperexecute/callback
# ...the rest of your configuration
```

The callback URL appears in the job's YAML view on the dashboard:

<img loading="lazy" src={require('../assets/images/hyperexecute/job-callback/job-yaml-callback-url.png').default} alt="HyperExecute job YAML view showing the callbackURL key" className="doc_img"/>

### KaneAI HyperExecute API

Add `callback_url` to the request body:

```bash
curl --location 'https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic <Base64Auth>' \
--data '{
    "test_run_id": "YOUR_TEST_RUN_ID",
    "callback_url": "https://your-server.example.com/hyperexecute/callback"
}'
```

- A test run with both web and app test cases runs as two jobs and sends two callbacks, one per job. Each callback has its own `job_id`.
- `callback_url` is not supported for sequential test runs.

## Callback Request

HyperExecute sends a `POST` request with a JSON body. Query parameters in your URL are kept.

<img loading="lazy" src={require('../assets/images/hyperexecute/job-callback/callback-request-headers.png').default} alt="Callback request showing the POST method, URL, query parameters and JSON content type" className="doc_img"/>

Example body:

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

<img loading="lazy" src={require('../assets/images/hyperexecute/job-callback/callback-request-body.png').default} alt="JSON body of a job completion callback" className="doc_img"/>

## Responding to the Callback

- Return a `2xx` status.
- The request is not signed. To confirm it, look up the job with the [HyperExecute API](https://www.testmuai.com/support/api-doc/?key=hyperexecute) using `job_id`.

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `callbackURL must use the https scheme` | Use an `https://` URL. |
| `callbackURL must be 255 characters or fewer` | Shorten the URL. |
| `callbackURL must not contain userinfo` | Remove `user:password@` from the URL. |
| `callback_url is not supported for sequential test runs` | Remove `callback_url`, or run the test run in parallel. |
| No callback arrives | Use the latest HyperExecute CLI and a public `https://` URL that returns `2xx` without a redirect. |
| No callback for a job that did not start | Only jobs that run send a callback. Fix the error shown when the job was started. |
