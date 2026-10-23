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

Add a callback URL to your job, and HyperExecute sends one HTTPS `POST` to it when the job finishes. The request has the job's status, test counts and a link to the job, so your pipeline or tools can act on the result without polling.

## Before You Begin

You need an endpoint that:

- Uses `https://` and is publicly reachable.
- Accepts a `POST` request with a JSON body.
- Has a URL of 255 characters or fewer, with no username or password in it.

:::tip
To try it out first, use a free request inspector such as [webhook.site](https://webhook.site).
:::

## Add the Callback URL

### Option 1: In the HyperExecute YAML

Add `callbackURL` to your YAML file and run the job with the latest [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/):

```yaml
version: "0.1"
runson: linux
callbackURL: https://your-server.example.com/hyperexecute/callback
# ...the rest of your configuration
```

You can see the callback URL in the job's YAML view on the dashboard:

<img loading="lazy" src={require('../assets/images/hyperexecute/job-callback/job-yaml-callback-url.jpg').default} alt="HyperExecute job YAML view showing the callbackURL key" className="doc_img"/>

### Option 2: In the KaneAI HyperExecute API

When you [run a KaneAI test run on HyperExecute from your CI/CD pipeline](/support/docs/kaneai-ci-cd-automation/), add `callback_url` to the request body:

```bash
curl --location 'https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic <Base64Auth>' \
--data '{
    "test_run_id": "YOUR_TEST_RUN_ID",
    "callback_url": "https://your-server.example.com/hyperexecute/callback"
}'
```

- A test run with both web and app test cases runs as two jobs, so you receive two callbacks. Use `job_id` to tell them apart.
- `callback_url` is not supported for sequential test runs.

## What You Receive

A `POST` request with a JSON body. Query parameters in your URL are kept.

<img loading="lazy" src={require('../assets/images/hyperexecute/job-callback/callback-request-headers.jpg').default} alt="Callback request showing the POST method, URL, query parameters and JSON content type" className="doc_img"/>

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

The fields you will use most are `result.status`, the test counts in `result`, and `result.job_url`.

<img loading="lazy" src={require('../assets/images/hyperexecute/job-callback/callback-request-body.jpg').default} alt="JSON body of a HyperExecute job completion callback" className="doc_img"/>

## Respond to the Callback

- Return a `2xx` status quickly, then do any longer work afterwards.
- Use `job_id` to ignore a request you have already handled.
- The request is not signed. To check it is genuine, look up the job with the [HyperExecute API](https://www.testmuai.com/support/api-doc/?key=hyperexecute) using `job_id`.

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `callbackURL must use the https scheme` | Use an `https://` URL. |
| `callbackURL must be 255 characters or fewer` | Shorten the URL. |
| `callbackURL must not contain userinfo` | Remove `user:password@` from the URL. |
| `callback_url is not supported for sequential test runs` | Remove `callback_url`, or run the test run in parallel. |
| No callback arrives | Use the latest CLI, and a public `https://` URL that answers with `2xx` without redirecting. |
| No callback for a job that never started | Fix the error shown when you started the job. Only jobs that run send a callback. |
