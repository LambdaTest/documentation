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
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

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

An **Omni project** is a SmartUI project type in which every capture source can co-exist. A single Omni project accepts website screenshots, native app screenshots, PDFs, Figma designs, Storybook components and directly uploaded images, all under one project and one build.

Standard project types work the other way around. A standard project is created for one source, and that choice is fixed: a Website project accepts website captures, a PDF project accepts PDFs, an App project accepts app screenshots. Sending a different source type to a standard project is rejected, so covering a release that spans web, mobile and documents means creating and managing several projects side by side.

## Omni vs Standard Projects

| | Omni project | Standard project |
| --- | --- | --- |
| Capture sources accepted | Website, Apps, Figma, Storybook, PDF, Image | One source, fixed at creation |
| Sources in a single build | Many, side by side | One |
| Projects needed for a web + mobile + PDF release | One | One per source |
| Dashboard | One project, with a tab per source and an **All** view | One dashboard per project |
| Baselines | Kept separate per source, inside the one project | Separate per project |

The practical difference is consolidation. A team shipping a feature across a web app, a mobile app and a generated PDF statement can run all three into one Omni project and read one dashboard, instead of aggregating status by hand from three.

## Capture Sources

Every source below can be used in the same Omni project. Each one keeps the workflow it already has — Omni changes where the results land, not how you capture them.

<Tabs className='docs__val' groupId='omni-sources'>
<TabItem value='website' label='Website' default>

Browser-based capture, through any of the supported routes:

- **CLI exec mode** — wrap an existing automation suite, for example `npx smartui exec -- npx cypress run`
- **CLI capture mode** — capture a list of static URLs with `npx smartui capture urls.json`
- **SDK hooks** — call `smartui.snapshot()` directly inside your test code
- **Web Scanner** — no-code crawling of a site

Results appear under the **Website** tab.

</TabItem>

<TabItem value='apps' label='Apps'>

Native mobile app screenshots captured through the app automation SDKs — Appium, Espresso and XCUITest — using the SmartUI screenshot hook inside your test.

Results appear under the **Apps** tab.

</TabItem>

<TabItem value='figma' label='Figma'>

Designs pulled straight from Figma with the CLI, so the intended design can sit in the same project as the implementation that is meant to match it.

```bash
smartui upload-figma <designs.json>
```

Results appear under the **Figma** tab.

</TabItem>

<TabItem value='storybook' label='Storybook'>

Component-library validation by crawling a running Storybook instance.

```bash
npx smartui storybook <storybook-url>
```

Results appear under the **Storybook** tab.

</TabItem>

<TabItem value='pdf' label='PDF'>

Multi-page document verification. Each page of the PDF becomes its own comparison.

```bash
smartui upload-pdf <path-to-pdfs>
```

PDFs can also be uploaded through the SmartUI PDF API. Results appear under the **PDF** tab.

</TabItem>

<TabItem value='image' label='Image'>

Raw image assets uploaded directly, for cases where the screenshot is produced outside SmartUI.

```bash
smartui upload <path-to-images>
```

Results appear under the **Image** tab.

</TabItem>
</Tabs>

## The Unified Dashboard

An Omni project presents one dashboard organised into tabs:

- **All** — the aggregate view across every source. A build is reported as failed if any source in it failed, so this tab is the single go / no-go read for the release.
- **Website**, **Apps**, **Figma**, **Storybook**, **PDF**, **Image** — each tab shows only the artifacts captured from that source.

While a tab is still empty, it shows the integration instructions for that source, so the dashboard doubles as the onboarding surface for whichever source you add next.

## How Artifacts Are Matched

Mixing sources in one project only works if SmartUI never compares two things that should not be compared. Omni handles this by matching each artifact against a baseline of the same source, using a key appropriate to that source.

### Visual sources

Website, Apps, Figma, Storybook and Image artifacts are all raster images, and are matched on a composite key:

`Screenshot Name` + `Browser` + `Resolution` + `Device Name` + `OS`

Every part of the key must match for a comparison to run. This is what stops a Chrome capture being compared against a Firefox baseline, or a desktop capture against a mobile one.

### PDF sources

PDF artifacts are documents rather than raster screenshots, and are matched on their own key:

`Screenshot Name` + `Document Name` + `Page Number` + `Resolution`

PDFs are kept in a separate logical space from the visual sources, because document comparison and pixel comparison are different operations. A PDF is never compared against a website, app, Figma, Storybook or image artifact, and vice versa.

### Same name, different sources

Because matching is source-aware, a PDF named `Report` and a web page named `Report` can live in the same project without colliding. They appear as two separate entries, each badged with its source, and neither overwrites the other.

Similarly, two artifacts that share a name but were captured at different resolutions — say a page captured at 390x844 and the same page at 1920x1080 — are treated as separate entries rather than compared against one another.

## Working with Regions in an Omni Project

Annotations behave the same way in an Omni project as anywhere else, and the [region types and scope controls](/support/docs/smartui-draw-on-ui/) are unchanged. What differs is the axis a region propagates along, which follows the source of the screenshot you drew it on:

- On a **PDF** artifact, a region can be applied to every page of that PDF, and [Element Based Anchoring](/support/docs/smartui-draw-on-ui/#element-based-anchoring-for-pdf-regions) places it on the anchored content page by page.
- On a **website or app** artifact, a region can be applied to every browser and viewport variant of that screenshot.

## Enabling Omni Projects

Omni is enabled for your organisation as a whole. Once it is on, projects you create are Omni projects regardless of which creation flow you use, and they accept every capture source from the start.

Existing projects created before Omni was enabled keep their original type and continue to behave exactly as they did, accepting the single source they were created for.

If you would like Omni enabled for your organisation, get in touch over the <span className="doc_content_link" onClick={() => { window.openLTChatWidget(); }}>24/7 Chat Support</span> or write to <BrandName type="support-email" />.

## Best Practices

- **Group by release, not by source.** The value of an Omni project comes from one project covering a whole release. Splitting by source recreates the silos Omni exists to remove.
- **Keep screenshot names stable across sources.** Names are part of every matching key, so a rename is read as a new artifact rather than a change to an existing one.
- **Use the All tab for the go / no-go call**, and the per-source tabs when you need to see what actually changed.
- **Keep viewports consistent between runs.** A changed resolution produces a new entry rather than a comparison.

## Additional Resources

- [Ignore or Select Annotated Regions](/support/docs/smartui-draw-on-ui/)
- [Running Your First Project](/support/docs/smartui-running-your-first-project/)
- [SmartUI CLI Environment Variables](/support/docs/smartui-cli-env-variables/)
