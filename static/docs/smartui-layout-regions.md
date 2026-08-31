# Layout Regions

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

A **Layout Region** is an annotation you draw on a capture to compare that one area for **structure only**. Inside the region SmartUI checks whether elements were added, removed, or moved. Changes to the content inside those elements, such as text, values, and colors, do not raise a difference. Everything outside the region continues to use the build's normal comparison mode.

This gives you a middle ground that the existing options do not cover:

- [Layout Comparison](/support/docs/smartui-layout-testing/) applies structure-only matching to the **whole** capture, so genuine content and color regressions elsewhere on the page stop being reported.
- An [Ignore Region](/support/docs/smartui-draw-on-ui/) removes the area from validation **entirely**, so a section that disappears or collapses is never flagged.
- A Layout Region keeps the section under validation, checks that its structure is intact, and tolerates the content churn inside it.

## When to Use

- Regulated or generated documents where timestamps, run IDs, and batch values change on every run but the document structure must stay fixed
- Dashboards, feeds, and listings whose rows and cards carry live data while the arrangement is expected to hold
- Localized pages where translated strings vary in length and the surrounding structure has to survive
- Any section you are currently ignoring purely because the content is noisy, when you still want to know if the section breaks or disappears

## Comparing the Region Types

| Region type | Structure checked | Content checked | Colors checked | Typical use |
| --- | --- | --- | --- | --- |
| Ignore Region | No | No | No | Fully dynamic areas you do not need validated |
| Select Region | Yes | Yes | Yes | Restrict the comparison to a critical component |
| Ignore Colors | Yes | Yes | No | Themed or A/B tested areas |
| Floating Region | Yes | Yes | Yes | Elements that shift position inside a boundary |
| **Layout Region** | **Yes** | **No** | **No** | **Dynamic content in a section whose structure must hold** |

## How to Use

### Prerequisites


For **web** comparisons, a Layout Region works only when the DOM was recorded at capture time. SmartUI compares the recorded structure of the two captures, so a build that carries a screenshot image alone has nothing to analyze. See [DOM Recording Requirement](#dom-recording-requirement-for-web-comparisons) for which capture flows record it.

**PDF** comparisons are not affected. They read the structure out of the document itself, so no DOM is involved.


**Step 1:** Open a screenshot comparison in your SmartUI project and click the **Actions** button (annotation icon) to open the annotation tool.

**Step 2:** Click **Add Region** and draw a box around the section whose structure you want to validate.

**Step 3:** Select **Layout Region** from the annotation type dropdown.

**Step 4:** Click **Save**, then choose whether the region applies to the current screenshot only or to all browser variants.

**What Happens:** The comparison re-runs. Inside the region SmartUI reports only structural changes. Outside the region the comparison is unchanged. Layout Regions persist to later builds for the same screenshot exactly like Ignore Regions do, and they appear in the annotation overlay in **green**.


You can draw more than one Layout Region on a capture, and you can mix Layout Regions with Ignore, Select, Floating, and Ignore Colors regions on the same screenshot. For PDF comparisons, regions are drawn per page.


## How It Works

SmartUI does not read pixels inside a Layout Region. It compares a structural description of the region taken from the baseline against the same description taken from the comparison capture, then highlights only the elements that do not line up.




For web captures, SmartUI uses the DOM element data recorded alongside each screenshot. This requires the capture flow to have recorded the DOM, as described in [DOM Recording Requirement](#dom-recording-requirement-for-web-comparisons).

1. Elements whose center point falls inside the region are collected from the baseline capture and from the comparison capture.
2. Each pair is scored on DOM path, classes, applied styles, element id, size, and tag name. Pairs above the match threshold are treated as the same element and are not reported.
3. Elements left without a match on the other side are highlighted as structural differences. An element present in the baseline but missing in the comparison is highlighted on the baseline, and the reverse case is highlighted on the comparison.
4. Elements that drifted slightly outside the box are still considered for matching, so a small shift across the edge does not produce a false difference. Highlights themselves stay inside the region you drew.
5. Page level wrapper containers that merely overlap the region are excluded, so the region reports the elements you framed rather than the layout of the whole page.

Because the match is structural, a text or value change inside an element that is otherwise unchanged does not raise a difference. That is the intended behavior of the region.





For PDF comparisons, SmartUI extracts the text lines and table cells on the page and matches them between the baseline document and the comparison document within the region you drew.

1. Lines and table structures inside the region are extracted from both documents for the page you are viewing.
2. Matched entries are treated as unchanged.
3. Lines or cells present on only one side are highlighted as structural differences on that side.

A value that changes inside an otherwise matching cell is not reported, which is what lets generated identifiers and timestamps pass while a missing row or a shifted table is still caught.




## DOM Recording Requirement for Web Comparisons

The structural analysis behind a web Layout Region reads the DOM that was recorded alongside each screenshot. That recording happens at capture time, not at comparison time, so it cannot be added to a build after the fact. If a build was captured without it, drawing a Layout Region on that build gives you plain ignore behavior instead of structural analysis.

| Capture flow | DOM recorded | Layout Region behavior |
| --- | --- | --- |
| SmartUI CLI and SDK web captures | Yes, on every snapshot | Full structural analysis |
| SmartUI in test automation, using Lambda Hooks or full page automation captures | Only when DOM recording is enabled for your organization | Structural analysis once enabled, plain ignore until then |
| Screenshot API uploads and static image uploads | No | Plain ignore |
| Real device web and app captures | No | Option not offered |
| PDF comparisons | Not applicable | Full structural analysis from the document |

DOM recording is on by default for SmartUI CLI and SDK web captures, because those flows capture the page structure and render it on the TestMu AI cloud. It is **not** on by default for captures taken inside an automation session. If you are running SmartUI through Lambda Hooks or through your automation suite and want Layout Regions to analyze structure, contact [support](mailto:support@testmuai.com) to have DOM recording enabled for your organization.


When the DOM was not recorded, the region does not fail or error. It quietly behaves like an [Ignore Region](/support/docs/smartui-draw-on-ui/), which means the area stops being validated at all. If you drew a Layout Region and it never reports anything, check the capture flow first.


## Where the Option Is Available

The **Layout Region** option appears in the region dropdown for web captures and PDF comparisons. It is not offered for:

- Real device web and app tests
- Espresso and XCUI tests
- App SDK tests
- Storybook projects
- Figma projects
- Single image uploads through the API

For these test types the dropdown shows the Ignore, Select, Floating, and Ignore Colors options only.

## Behavior Notes and Limitations

- **Content changes are not reported inside the region.** If you need value changes flagged, a Layout Region is the wrong tool for that area. Use the normal comparison, or scope it with a [Select Region](/support/docs/smartui-draw-on-ui/).
- **Select and Ignore regions win.** If a Layout Region overlaps an Ignore Region, the ignored area stays ignored. If Select Regions are in use, anything outside them is still excluded.
- **The DOM has to have been recorded for both captures.** A web Layout Region cannot analyze a build that carries only a screenshot image. See [DOM Recording Requirement](#dom-recording-requirement-for-web-comparisons). If the recorded data is missing or cannot be read, the region falls back to behaving like a plain Ignore Region and the comparison still completes. Nothing fails.
- **Very dense regions fall back too.** A region drawn over an extremely large number of elements is skipped rather than analyzed, and behaves like an Ignore Region for that build. Draw the region around the section you care about rather than the whole page.
- **Highlights count towards the mismatch percentage.** Structural differences found inside a Layout Region are treated as differences in the build result, the same as any other highlighted change.
- **Region scope works as it does everywhere else.** A Layout Region belongs to the screenshot variant you drew it on until you choose [Apply to all variants](/support/docs/smartui-draw-on-ui/#applying-annotations).

## Troubleshooting




**Issue:** The annotation type dropdown does not list **Layout Region**.

**Solutions:**
- Confirm the test type supports it. See [Where the Option Is Available](#where-the-option-is-available).
- Make sure you are on a screenshot comparison view and not on a build listing.
- Refresh the page so the annotation tool reloads with the current screenshot's test type.





**Issue:** Content clearly changed inside the region and no difference is reported.

**Solutions:**
- This is expected when only the content changed. A Layout Region reports elements that were added, removed, or moved, not text or value changes.
- If the section did change structurally, check that the region actually covers the elements. An element is considered part of the region when its center falls inside the box.
- If you need the content validated, use the normal comparison for that area instead.





**Issue:** The region suppresses everything and never reports a structural change.

**Solutions:**
- Check the capture flow first. On a web comparison the region falls back to ignore behavior whenever the DOM was not recorded for the build. See [DOM Recording Requirement](#dom-recording-requirement-for-web-comparisons)
- If the build came from an automation session, DOM recording may not be enabled for your organization yet. Contact [support](mailto:support@testmuai.com) to have it enabled, then re-run the build
- Builds created from an uploaded image never carry a DOM, so a Layout Region on them can only behave like an Ignore Region
- Reduce the size of the region. Very large regions over element heavy pages are skipped and fall back to ignore behavior
- For PDF comparisons, confirm you are annotating the page that actually contains the section





**Issue:** The region highlights far more elements than expected.

**Solutions:**
- Tighten the region so it frames one section rather than a large part of the page.
- Check whether the section really was rebuilt between the two captures. A container that is re-rendered with a different structure legitimately produces many unmatched elements.
- If the area is genuinely rebuilt on every run and you do not need it validated, an Ignore Region is the better fit.




## Additional Resources

- [Ignore or Select Annotated Regions](/support/docs/smartui-draw-on-ui/) - All annotation types in the SmartUI dashboard
- [Layout Comparison in SmartUI SDK](/support/docs/smartui-layout-testing/) - Apply structure-only comparison to a whole capture
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data/) - Code based options for dynamic content
- [Smart Ignore](/support/docs/smartui-smartignore/) - Automatic layout shift handling
- [SmartUI Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide/) - Comprehensive issue resolution
