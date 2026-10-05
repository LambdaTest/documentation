# Images Guided Test

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Screen reader users cannot see images. They hear the text alternative (alt text) of each image instead. If the text alternative is missing or wrong, they lose the information in the image.

The Images test finds the images on the page and checks whether each one has a correct text alternative. It also covers decorative images, images that contain text, and complex images such as charts.

## When to use this

Use this test on content-heavy pages, product listings, dashboards with charts, and any page where images carry information.

## Prerequisites

The TestMu AI Accessibility Toolkit is installed. See [Install Toolkit](/support/docs/accessibility-testing-install-devtools/).

## What the test checks

| Rule | WCAG | Severity |
|---|---|---|
| Image has no text alternative | 1.1.1 (A) | Critical |
| Text alternative is a file name | 1.1.1 (A) | Serious |
| Informative image is marked as decorative | 1.1.1 (A) | Serious |
| Complex image has no long description | 1.1.1 (A) | Serious |
| Long description does not convey the essential information | 1.1.1 (A) | Serious |
| Text alternative does not describe the image | 1.1.1 (A) | Serious |
| Image contains text | 1.4.5 (AA) | Serious |
| Text alternative is generic or redundant | 1.1.1 (A) | Moderate |
| Image is hidden as decorative but has a text alternative | 1.1.1 (A) | Moderate |
| Decorative image has a text alternative | 1.1.1 (A) | Moderate |
| Image element does not expose an image role | 4.1.2 (A) | Moderate |
| Text alternative is very long | 1.1.1 (A) | Minor |

## Run the test

### Start the test

Open **Assisted Tests** in Accessibility DevTools and select **Images**. Turn on **Verify with AI** if you want AI to give the first answers. See [Start a guided test](/support/docs/accessibility-guided-tests/#start-a-guided-test).

### Review the detected images

The test finds standard images, SVG graphics, image buttons, and background images. It flags text alternatives that are missing, that are a file name, that are too general (for example "image"), or that are too long. If the test missed an image, click it on the page to add it.

{/* IMAGE PLACEHOLDER: List of detected images with their text alternatives

*/}

### Mark decorative images

Mark the images that carry no information, such as dividers and background patterns. The test then checks that screen readers skip them.

### Mark images of text

Mark images that contain text, such as banners with headings or text rendered as a picture. Real text is better because users can resize it and screen readers can read it.

### Review complex images

Mark charts, graphs, and diagrams. The test checks whether each one has a long description. For each complex image that has one, confirm that the long description conveys the essential information in the image, such as the trend in a chart or the steps in a diagram. Mark the ones that do not.

### Review the text alternatives

For each image you are testing, confirm that its text alternative describes what the image shows and carries the same information a sighted user gets, not just any text present. Mark the ones that do not. With **Verify with AI** on, AI gives the first answer for each image.

### Check the summary and finish

A summary screen shows all your answers before the test generates the report. Your progress is saved, so you can close the panel and continue later.

## How AI helps

With **Verify with AI** on, AI looks at each image and gives the first answer to these questions:

- Is the image decorative?
- Does the image contain text?
- Is the image complex?
- Does the text alternative describe the image?

You can change any answer on the summary screen.

**AI credits**
**Verify with AI** will require AI credits. See [Credits Management](/support/docs/credits-management/).

## Related docs

- [Guided Tests](/support/docs/accessibility-guided-tests/)
- [Keyboard Guided Test](/support/docs/accessibility-guided-test-keyboard/)
- [Interactive Elements Guided Test](/support/docs/accessibility-guided-test-interactive-elements/)
- [Hover and Tooltips Guided Test](/support/docs/accessibility-guided-test-hover-tooltips/)
