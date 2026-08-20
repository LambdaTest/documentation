# API Specs

OpenAPI (Swagger) specs powering the **API Reference** section of the docs site.

`scripts/build-api-data.js` reads every file listed below and compiles them into
`src/data/api/all-apis.json`, which the API Reference pages render from. The
script runs automatically on `npm run prestart` / `npm run prebuild`.

These specs are vendored in the repo rather than fetched at build time, so:

- builds are reproducible and need no network access,
- a Swagger server being down or changing shape can't break a deploy,
- spec changes show up as reviewable diffs in a PR.

The trade-off is that the files don't update themselves — refresh them when the
upstream spec changes (see below).

## Files and upstream sources

| File | Upstream source |
| --- | --- |
| `selenium-automation.yaml` | https://swagger-api-support.lambdatest.com/openapi.yaml |
| `automated-screenshots.yaml` | https://falcon-screenshot-public-api.lambdatest.com/openapi.yaml |
| `app-automation.yaml` | https://app-automation-apis-docs.lambdatest.com/mobile_automation.yaml |
| `smartui.yaml` | https://swagger-api-support.lambdatest.com/smartui/openapi.yaml |
| `cypress-automation.yaml` | https://swagger-api-support.lambdatest.com/cypress/openapi.yaml |
| `user-management.yaml` | https://swagger-api-support.lambdatest.com/user_management/openapi.yaml |
| `test-manager.yaml` | https://swagger-api-support.lambdatest.com/test_management/openapi.yaml |
| `hyperexecute.yaml` | https://swagger-api-support.lambdatest.com/hyperexecute/openapi.yaml |
| `accessibility.yaml` | https://swagger-api-support.lambdatest.com/accessibility/openapi.yaml |
| `analytics.yaml` | https://swagger-api-support.lambdatest.com/analytics/openapi.yaml |
| `performance-testing.yaml` | https://swagger-api-support.lambdatest.com/performance_testing/openapi.yaml |
| `audit-logs.yaml` | https://swagger-api-support.lambdatest.com/audit-logs/openapi.yaml |
| `agent-testing.yaml` | Maintained in this repo — no upstream URL |

## Refreshing a spec

Re-download the file from its source above, then rebuild and review the diff:

```bash
curl -fsSL <upstream-url> -o api-specs/<file>.yaml
node scripts/build-api-data.js
```

Commit the YAML change; `src/data/api/all-apis.json` is generated and gitignored.

## Adding a new API section

1. Drop the spec into this folder as `<api-name>.yaml`.
2. Add an entry to `API_SPECS` in `scripts/build-api-data.js`.
3. Add the file and its source to the table above.
