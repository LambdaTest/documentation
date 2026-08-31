---
id: smartui-omni-projects
title: Omni Projects
sidebar_label: Omni Projects
description: Learn how Omni projects in TestMu AI's SmartUI let website, app, PDF, Figma, Storybook and image capture sources co-exist in a single project, and how they differ from standard single-source project types.
keywords:
  - Visual Regression
  - Visual Regression Testing Guide
  - SmartUI Project Types
  - Omni Project
  - Omni Projects
  - Unified Project
  - Multi Source Visual Testing
  - PDF Visual Testing
  - Figma Visual Testing
  - Storybook Visual Testing

url: https://www.testmuai.com/support/docs/smartui-omni-projects/
slug: smartui-omni-projects/
canonical: https://www.testmuai.com/support/docs/smartui-omni-projects/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Omni Projects",
          "item": `${BRAND_URL}/support/docs/smartui-omni-projects/`
        }]
      })
    }}
></script>

# Omni Projects <NewTag value="New" />

An **Omni project** is a SmartUI project type in which every capture source can co-exist. A single Omni project accepts website screenshots, native app screenshots, PDFs, Figma designs, Storybook components and directly uploaded images, side by side in the same project. Each capture run still produces its own build, and builds from different sources sit together in the same build list.

Standard project types work the other way around. A standard project is created for one source, and that choice is fixed: a Website project accepts website captures, a PDF project accepts PDFs, an App project accepts app screenshots. Sending a different source type to a standard project is rejected, and the run fails with a project type mismatch telling you the project already exists with a different platform type, and to either use a different project name or create a project of the platform type you are sending. Covering a release that spans web, mobile and documents therefore means creating and managing several projects side by side.

## Omni vs Standard Projects

| | Omni project | Standard project |
| --- | --- | --- |
| Capture sources accepted | Website, App, Figma, Storybook, PDF, Image | One source, fixed at creation |
| Sending another source type | Accepted | Rejected with a project type mismatch error |
| Projects needed for a web + mobile + PDF release | One | One per source |
| Configuration screen | One tab per capture source | Instructions for the project's own source |
| Baseline selection | Chosen at creation: **Git Strategy** (per git branch, default) or **Single Baseline** (one baseline for the project) | One baseline for the project, except CLI projects, which are also per git branch |
| Build list | One chronological list on Git Strategy, grouped into **Baseline Build** and **Non Baseline Build** on Single Baseline | Grouped into **Baseline Build** and **Non Baseline Build** |

The practical difference is consolidation. A team shipping a feature across a web app, a mobile app and a generated PDF statement can run all three into one Omni project and read one build list, instead of aggregating status by hand from three projects.

### What this means if you are migrating

For an enterprise team weighing a move, the differences that actually change day to day work are these.

**Fewer projects, and one place to look.** A release that spans a web app, a mobile app and generated documents needs one Omni project rather than three. Approvers, tags and settings are configured once rather than kept in step across projects, and the release status is read from one build list.

**You pick how baselines are resolved.** An Omni project is created with a [baseline strategy](/support/docs/smartui-baseline-strategy/), and the choice is permanent.

- **Git Strategy**, the default, resolves per git branch, so a feature branch compares against its own branch's baseline. This is what a **CLI** project already does, so a team coming from CLI sees no change.
- **Single Baseline** keeps one baseline for the whole project and ignores the branch on a build. This is closest to how a **Website**, **App** or **PDF** project behaves today, so it is the option to pick if your runs are manual, scheduled, or otherwise not driven by branch based CI.

If you choose Git Strategy and your runs do not currently send branch information, add it before migrating, because a build with no branch is treated as being on the default branch.

**A different baseline mental model in the dashboard.** A standard project separates its build list into a **Baseline Build** and **Non Baseline Build** section, so the baseline is a specific build you can point at. A Single Baseline Omni project keeps that model. A Git Strategy Omni project shows one chronological list instead, and the baseline is resolved per branch rather than being a single pinned build, so teams with a documented approval process that references "the baseline build" will want to revisit that wording.

**Document annotation is ahead on Omni today.** In a standard PDF project a region applies only to the page you drew it on, so a 40 page document means 40 regions placed by hand. Omni adds page level propagation plus [Element Based Anchoring](/support/docs/smartui-draw-on-ui/#element-based-anchoring), so one region can cover the whole document and follow the anchored content as the pages reflow. Page level propagation is landing for every project type, so treat it as a reason Omni is ready first rather than a capability only Omni will ever have.

**Nothing changes for how you capture.** The CLI commands, SDK hooks and APIs are the same. Omni changes which project accepts the artifact and how baselines are resolved, not how the screenshot is taken, so existing test code does not need rewriting.

**Existing projects are unaffected.** Projects created before Omni was enabled keep their original type and behaviour. Migration is not automatic, and there is no in place conversion of a standard project into an Omni one, so plan for new projects rather than a switch on existing ones.

## Capture Sources

Every source below can be used in the same Omni project. Each one keeps the workflow it already has, because Omni changes where the results land, not how you capture them.

<Tabs className='docs__val' groupId='omni-sources'>
<TabItem value='website' label='Website' default>

Browser-based capture, through any of the supported routes:

- **CLI exec mode**, to wrap an existing automation suite, for example `npx smartui exec -- npx cypress run`
- **CLI capture mode**, to capture a list of static URLs with `npx smartui capture urls.json`
- **SDK hooks**, calling `smartui.snapshot()` directly inside your test code
- **Web Scanner**, for no-code crawling of a site

</TabItem>

<TabItem value='app' label='App'>

Native mobile app screenshots captured through the app automation SDKs (Appium, Espresso and XCUITest), using the SmartUI screenshot hook inside your test.

</TabItem>

<TabItem value='figma' label='Figma'>

Designs pulled straight from Figma with the CLI, so the intended design can sit in the same project as the implementation that is meant to match it.

```bash
smartui upload-figma <designs.json>
```

</TabItem>

<TabItem value='storybook' label='Storybook'>

Component-library validation by crawling a running Storybook instance.

```bash
npx smartui storybook <storybook-url>
```

</TabItem>

<TabItem value='pdf' label='PDF'>

Multi-page document verification. Each page of the PDF becomes its own comparison.

```bash
smartui upload-pdf <path-to-pdfs>
```

PDFs can also be uploaded through the SmartUI PDF API.

</TabItem>

<TabItem value='image' label='Image'>

Raw image assets uploaded directly, for cases where the screenshot is produced outside SmartUI.

```bash
smartui upload <path-to-images>
```

</TabItem>
</Tabs>

## Where Each Source Is Set Up

The project configuration screen carries one tab per capture source: **Website**, **App**, **Figma**, **Storybook**, **PDF** and **Image**. Each tab holds the integration instructions for that source, including the CLI, SDK and API routes where they apply, along with the project token to authenticate with.

In a standard project this screen shows the instructions for the single source the project was created for. In an Omni project all six tabs are available, so you can add a second or third source to a project that is already running without creating a new one.

## Reading Results

Results for every source land in the same place. The project's build list holds builds from all sources in one chronological list, and opening a build shows the screenshots captured in that run, whether they came from a browser, an app, a design file or a PDF.

Within a build, the **All** and **New** tabs filter by screenshot status rather than by source, and PDF pages are shown as variants of the document they came from.

## How Artifacts Are Matched

Mixing sources in one project only works if SmartUI never compares two things that should not be compared. Omni handles this by matching each artifact against a baseline of the same source, using a key appropriate to that source.

### Visual sources

Website, App, Figma, Storybook and Image artifacts are all raster images, and are matched on a composite key:

`Screenshot Name` + `Browser` + `Resolution` + `Device Name` + `OS`

Every part of the key must match for a comparison to run. This is what stops a Chrome capture being compared against a Firefox baseline, or a desktop capture against a mobile one.

### PDF sources

PDF artifacts are documents rather than raster screenshots, and are matched on their own key:

`Screenshot Name` + `Document Name` + `Page Number` + `Resolution`

PDFs are kept in a separate logical space from the visual sources, because document comparison and pixel comparison are different operations. A PDF is never compared against a website, app, Figma, Storybook or image artifact, and vice versa.

### Same name, different sources

Because matching is source-aware, a PDF named `Report` and a web page named `Report` can live in the same project without colliding. They stay two separate entries and neither overwrites the other.

Similarly, two artifacts that share a name but were captured at different resolutions, say a page captured at 390x844 and the same page at 1920x1080, are treated as separate entries rather than compared against one another.

## Working with Regions in an Omni Project

Annotations behave the same way in an Omni project as anywhere else, and the [region types and scope controls](/support/docs/smartui-draw-on-ui/) are unchanged. What differs is the axis a region propagates along, which follows the source of the screenshot you drew it on:

- On a **PDF** artifact, a region can be applied to every page of that PDF, and [Element Based Anchoring](/support/docs/smartui-draw-on-ui/#element-based-anchoring) places it on the anchored content page by page. Page level propagation is available on Omni first: in a standard PDF project a region currently stays on the page it was drawn on, and support for every project type is on the way. Anchoring itself is not limited to Omni, and is available on web comparisons in any project.
- On a **website or app** artifact, a region can be applied to every browser and viewport variant of that screenshot.

## Availability and Access

Omni projects are released behind a feature flag and are rolled out progressively.

:::info Enabled per organisation
Omni is switched on for an organisation as a whole, not per user or per project. Once it is enabled, every project you create is an Omni project regardless of which creation flow you use, and it accepts all six capture sources from the start.
:::

- **Existing projects are not converted.** Projects created before Omni was enabled keep their original type and continue to behave exactly as they did, accepting the single source they were created for. There is no in place conversion, so plan for new projects rather than a switch on existing ones.
- **You can tell the two apart from the dashboard URL.** An Omni project opens under `/test/omni/`, while a standard project opens under its own platform, for example `/test/pdf/`.
- **If you expect Omni and do not see it**, your organisation may not be enabled yet.

To have Omni enabled for your organisation, contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support).

## Best Practices

- **Group by release, not by source.** The value of an Omni project comes from one project covering a whole release. Splitting by source recreates the silos Omni exists to remove.
- **Keep screenshot names stable across sources.** Names are part of every matching key, so a rename is read as a new artifact rather than a change to an existing one.
- **Pick the baseline strategy deliberately, because it is permanent.** Git Strategy needs accurate branch information on every run, since a missing or wrong branch sends a build to compare against the wrong baseline. Single Baseline ignores the branch entirely. See [Baseline Strategy](/support/docs/smartui-baseline-strategy/).
- **Keep viewports consistent between runs.** A changed resolution produces a new entry rather than a comparison.

## Additional Resources

- [Baseline Strategy for Omni Projects](/support/docs/smartui-baseline-strategy/)
- [Baseline History](/support/docs/smartui-baseline-history/)
- [Ignore or Select Annotated Regions](/support/docs/smartui-draw-on-ui/)
- [Running Your First Project](/support/docs/smartui-running-your-first-project/)
- [SmartUI CLI Environment Variables](/support/docs/smartui-cli-env-variables/)