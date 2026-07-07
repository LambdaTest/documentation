# Comparison Settings for SmartUI - Pixel to Pixel Comparison

## Our Pixel to Pixel (P2P) Comparison Options

We offer multiple options for comparing the **Baseline** and the **Test Output** screenshots captured during your automation testing suites.

Here are common **pixel-to-pixel** comparison options. The first group is **actively used** through `smartUI.options` (or your framework’s equivalent) in typical integrations:

- `largeImageThreshold`: Pixel granularity for how comparison blocks are formed.
- `errorType`: How differences are highlighted (`movement`, `flat`, etc.).
- `ignore`: Reduces P2P false positives (`antialiasing`, `alpha`, `colors`, `nothing`).
- `transparency`: Overlay transparency for the diff view.

The sections **[Bounding Boxes](#bounding-boxes---compare-only-specific-area)**, **[Ignore Boxes](#ignore-boxes---ignore-only-specific-area)**, and **[Ignore Areas Colored](#ignore-areas-colored---removes-the-colored-content-from-the-comparison)** describe **region- and color-based** comparison. Examples nest keys under **`smartUI.options`** / **`smart_ui.options`** like the options above; **still validate** with your integration or support, see the warning before **Bounding Boxes**. For region-level control in the product UI, prefer **[Draw on UI / annotations](/support/docs/smartui-draw-on-ui/)**.

## Examples with comparison settings

### Image Threshold

The image threshold settings helps you in analyzing the granularity of the pixel resolution for each block which shall be created by the algorithm for the comparison.

You can specify the following `capability` in the following format:

```js title="Make changes in your  your test configuration file"
let capabilities = {

/*  ....Your Selenium capabilities go here */

"smartUI.project": "<Your Project Name>" // Your SmartUI project name
"smartUI.options": {
// highlight-next-line
"largeImageThreshold": 100 // The image threshold for comparison the min of 100 and max of 1200
}
};
```

```json title="Add the following in your /project/lambdatest-config.json"
"smart_ui": {
"project": "<Your Project Name>" // Add your SmartUI Project Name here
"options": {
// highlight-next-line
"largeImageThreshold": 100 // The image threshold for comparison the min of 100 and max of 1200
}
}
```

### Error Identifier Types

The pixel to pixel comparison at which we offer for the error highlighting in the test output is determined by the changes in the `pixel` distribution for the **Baseline** screenshot to the **Comparison** screenshot. This feature will help in determining for the approver that the pixels can be easily identified.

The following are the supported options for the pixel comparison feature:

- `movement` - specifies the pixel movements
- `flat` - specifies the pixel value changes

You can specify the following `capability` in the following format:

```js title="Make changes in your  your test configuration file"
let capabilities = {

/*  ....Your Selenium capabilities go here */

"smartUI.project": "<Your Project Name>" // Your SmartUI project name
"smartUI.options": {
// highlight-next-line
"errorType": "movement" // To set the error identifier
}
};
```

```json title="Make changes in your /project/lambdatest-config.json"
"smart_ui": {
"project": "<Your Project Name>" // Add your SmartUI Project Name here
"options": {
// highlight-next-line
"errorType": "movement" // To set the error identifier
}
}

```

### Ignore - P2P False Positives

When the screenshot is captured and it is then compressed to a file format such as `.png,.jpg,.jpeg,etc..` then there is high chance of pixelation enhancement will be made to the screenshot to enhance the quality of the image. This could be mis-leading to a visual appearance on the browser for the comparison with the current **Baseline** version. We provide you with options to mitigate this risk of flakiness in your comparison output.

The following are the supported options for the pixel comparison feature:

- `antialiasing` - ignores the smoothing of edges in digital images.
- `alpha` - ignores the alpha of the pixel color and makes into solid color without any opacity, click [here](https://sites.uci.edu/iap2015/2015/01/14/the-alpha-attribute-of-a-picture/#:~:text=In%20digital%20images%2C%20each%20pixel,of%200%20means%20totally%20transparent.) to know more.
- `colors` - added corrected lightness to the screenshot by ignoring the default pixel color value.
- `nothing` - ignores none of the false positive options from the comparison.

You can specify the following `capability` in the following format:

```js title="Make changes in your  your test configuration file"
let capabilities = {

/*  ....Your Selenium capabilities go here */

"smartUI.project": "<Your Project Name>" // Your SmartUI project name
"smartUI.options": {
// highlight-next-line
"ignore": "antialiasing" // To set the ignore identifier
}
};
```

```json title="Make changes in your /project/lambdatest-config.json"
"smart_ui": {
"project": "<Your Project Name>" // Add your SmartUI Project Name here
"options": {
// highlight-next-line
"ignore": "antialiasing" // To set the ignore identifier
}
}

```

### Transparency

An advanced configuration to set the comparison view image to be displayed as a `opquae` or `transparent` for easy identification for the approver.

You can specify the following `capability` in the following format:

```js title="Make changes in your  your test configuration file"
let capabilities = {

/*  ....Your Selenium capabilities go here */

"smartUI.project": "<Your Project Name>" // Your SmartUI project name
"smartUI.options": {
// highlight-next-line
"transparency": 0.3 // minimum = 0 and maximum = 1 supports upto one decimal such as 0.1 to 0.9
}
};
```

```json title="Make changes in your /project/lambdatest-config.json"
"smart_ui": {
"project": "<Your Project Name>" // Add your SmartUI Project Name here
"options": {
// highlight-next-line
"transparency": 0.3 // minimum = 0 and maximum = 1 supports upto one decimal such as 0.1 to 0.9
}
}

```

**`boundingBoxes`, `ignoredBoxes`, `ignoreAreasColoredWith`**
These three comparison modes exist in SmartUI’s **pixel-to-pixel** model. The examples below nest them under **`smartUI.options`** (Selenium) and **`smart_ui.options`** (Cypress), the same shape as **Image Threshold** through **Transparency**, but **behavior can still vary by integration**; **do not copy into production** without validating against your session or with **[support](mailto:support@testmuai.com)**. For box/color-style ignores in the UI, use **[Draw on UI](/support/docs/smartui-draw-on-ui/)** or confirm the supported payload with support.

### Bounding Boxes - Compare only specific area {#bounding-boxes---compare-only-specific-area}

The bounding boxes are the areas created on the screenshot which needs to be compared with the baseline ignoring other areas from the screenshot.

**Reference only:** verify with support before relying on capability wiring.

This specific case is used to compare only a specific area of the screenshot from the **baseline**.

You can specify the following `capability` in the following format:

```js title="Make changes in your  your test configuration file"
// Bounding box sample settings
const box1 = {
left: 100,
top: 500,
right: 800,
bottom: 300
};

const box2 = {
left: 800,
top: 50,
right: 20,
bottom: 700
};

let capabilities = {

/*  ....Your Selenium capabilities go here */

"smartUI.project": "<Your Project Name>", // Your SmartUI project name
"smartUI.options": {
// highlight-next-line
"boundingBoxes": [box1, box2] // Compare only these regions (P2P)
}
};

```

```json title="Make changes in your /project/lambdatest-config.json"
"smart_ui": {
"project": "<Your Project Name>",
"options": {
"boundingBoxes": [
{
"left": 100,
"top": 500,
"right": 800,
"bottom": 300
},
{
"left": 800,
"top": 50,
"right": 20,
"bottom": 700
}
]
}
}

```

### Ignore Boxes - Ignore only specific area {#ignore-boxes---ignore-only-specific-area}

**Reference only:** verify with support before relying on capability wiring.

The ignored boxes are the areas created on the screenshot which needs to be ignored with the baseline comparing the other areas from the screenshot.

This specific case is used to ignore only a specific area of the screenshot from the **baseline**.

You can specify the following `capability` in the following format:

```js title="Make changes in your  your test configuration file"
// Bounding box sample settings
const box1 = {
left: 100,
top: 500,
right: 800,
bottom: 300
};

const box2 = {
left: 800,
top: 50,
right: 20,
bottom: 700
};

let capabilities = {

/*  ....Your Selenium capabilities go here */

"smartUI.project": "<Your Project Name>", // Your SmartUI project name
"smartUI.options": {
// highlight-next-line
"ignoredBoxes": [box1, box2] // Ignore these regions during P2P compare
}
};

```

```json title="Make changes in your /project/lambdatest-config.json"
"smart_ui": {
"project": "<Your Project Name>",
"options": {
"ignoredBoxes": [
{
"left": 100,
"top": 500,
"right": 800,
"bottom": 300
},
{
"left": 800,
"top": 50,
"right": 20,
"bottom": 700
}
]
}
}

```

### Ignore Areas Colored - Removes the colored content from the comparison {#ignore-areas-colored---removes-the-colored-content-from-the-comparison}

**Reference only:** verify with support before relying on capability wiring.

You can exclude the pixels that match the specified color on a **baseline** image from the comparison view. This feature will ignore that specific regions with the color pixels and shows the comparison view.

You can specify the following `capability` in the following format:

```js title="Make changes in your  your test configuration file"
// Bounding box sample settings
const color = {
r: 242,
g: 201,
b: 76,
a: 1
};

let capabilities = {

/*  ....Your Selenium capabilities go here */

"smartUI.project": "<Your Project Name>", // Your SmartUI project name
"smartUI.options": {
// highlight-next-line
"ignoreAreasColoredWith": color // Ignore pixels matching this RGBA in P2P compare
}
};

```

```json title="Make changes in your /project/lambdatest-config.json"
"smart_ui": {
"project": "<Your Project Name>",
"options": {
"ignoreAreasColoredWith": {
"r": 242,
"g": 201,
"b": 76,
"a": 1
}
}
}

```
