---
id: accessibility-cicd-integration-guide
title: CI/CD Integration Guide
sidebar_label: CI/CD Integration Guide
description: Connect Accessibility Automation to CI/CD—secrets, matrix jobs, gating, and where to review reports after each build.
keywords:
  - TestMu AI
  - Accessibility
  - CI/CD
  - GitHub Actions
  - Jenkins
slug: accessibility-cicd-integration-guide/
url: https://www.testmuai.com/support/docs/accessibility-cicd-integration-guide/
site_name: TestMu AI
canonical: https://www.testmuai.com/support/docs/accessibility-cicd-integration-guide/
---

# CI/CD Integration Guide

Use this guide when you want **Accessibility Automation** (Selenium capabilities + hooks or auto-scan) to run on **every PR, nightly, or release branch**—not only from a laptop.

## Typical CI/CD use cases

- run accessibility checks on pull requests or nightly jobs
- compare Accessibility results across builds
- keep automated accessibility validation close to release workflows

## High-level flow

1. Configure the test framework with Accessibility capabilities.
2. Run the tests from CI/CD.
3. Review the resulting report in the Accessibility dashboard.
4. Export or escalate findings if needed.

## Onboarding checklist

1. **Store secrets** as `LT_USERNAME` and `LT_ACCESS_KEY` (or your platform’s secret manager) and inject them into the job—never commit keys to the repo ([credentials guide](/support/docs/using-environment-variables-for-authentication-credentials/)).
2. **Reuse the same command** you already use locally (`mvn test`, `dotnet test`, `npm test`, etc.) so CI exercises the identical driver bootstrap that sets `accessibility: true`.
3. **Start with a smoke slice** (one suite or `@Tag`) so pipeline time stays predictable; expand coverage after reports look correct.
4. **Open the Automation dashboard** after the first green CI run and confirm the **Accessibility** tab populates; bookmark the filtered view for your team.
5. **Optional gating:** treat critical/serious new issues like other quality gates—document who can override flakes.

## Example: GitHub Actions (pattern)

```yaml
name: accessibility-smoke
on: [pull_request]
jobs:
  a11y:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with:
          distribution: temurin
          java-version: "17"
      - name: Run Selenium + Accessibility smoke
        env:
          LT_USERNAME: ${{ secrets.LT_USERNAME }}
          LT_ACCESS_KEY: ${{ secrets.LT_ACCESS_KEY }}
        run: mvn -q -Dgroups=a11y test
```

Adapt `run` to your build tool; the important part is that the invoked tests set Accessibility capabilities per [Selenium](/support/docs/accessibility-automation-test/) and [settings](/support/docs/accessibility-automation-settings/).

## Example: Jenkins (pattern)

- Bind **Credentials** to environment variables `LT_USERNAME` / `LT_ACCESS_KEY`.
- Use a **freestyle** or **pipeline** step that checks out the repo and runs the same Maven/Gradle/npm command as above.
- Archive HTML or logs if you need offline evidence; primary reports still live on the TestMu AI dashboard.

## Where to review results

- **Automation** build → **Accessibility** tab for the session ([Selenium flow](/support/docs/accessibility-automation-test/)).
- For **HyperExecute**, see [HyperExecute integration — Selenium accessibility automation](/support/docs/selenium-hyperexecute-accessibility-tests/).

## Related docs

- [Accessibility Automation (Overview)](/support/docs/accessibility-automation/)
- [Configure Accessibility Automation](/support/docs/accessibility-automation-settings/)
- [HyperExecute integration — Selenium accessibility automation](/support/docs/selenium-hyperexecute-accessibility-tests/)
