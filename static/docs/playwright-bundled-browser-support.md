# Playwright Bundled Browser Support on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Each Playwright release ships with its own bundled builds of Chromium, Firefox, and WebKit. When you set the [`useSpecificBundleVersion: true`](/support/docs/capabilities-for-playwright/) capability, TestMu AI selects the Chromium, Firefox, or WebKit version that matches your local machine's Playwright version. This keeps the browsers on the grid aligned with the browsers you test against locally, so your results stay consistent.

## Enable Bundled Browser Support

Add the `useSpecificBundleVersion` capability to your `LT:Options` object to have TestMu AI match the bundled browser version to your local Playwright version.

```js
const capabilities = { "LT:Options": {"useSpecificBundleVersion": true,}}
```

## Supported Bundled Browser Versions

The table below lists the Chromium, Firefox, and WebKit versions available for each Playwright version when `useSpecificBundleVersion` is enabled.

| Playwright Versions | Chromium | Firefox | Webkit |
|---------------------|----------|---------|--------|
|1.50| 130-133 except - 132, 126, 122 | 130-134, except - 131,133,126,122,120 | 18.0, 18.2 |
|1.49| 130-133 except - 132, 126, 122 | 130-134, except - 131,133,126,122,120 | 18.0, 18.2 |
|1.48| 130-133 except - 132, 126, 122 | 130-134, except - 131,133,126,122,120 | 18.0, 18.2 |
|1.47| 129 except - 132, 126, 122 | 130, except - 131,133,126,122,120 | 18.0 |
|1.46| 119-133, except - 132, 126, 122 | 118-134, except - 131,133, 126,122,120 | 17.4, 18.2 |
|1.45| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.44| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.43| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.42| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.41| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.40| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.39| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.38| 114-117 | 113-117 | 17 |
|1.37| 114-117 | 113-117 | 17 |
|1.36| 114-117 | 113-117 | 17 |
|1.35| 114-117 | 113-117 | 16.4 |
|1.34| 114-117 | 113-117 | 16.4 |
|1.33| 104-113 | 103-112 | 16.4 |
|1.32| 104-113 | 103-112 | 16.4 |
|1.31| 104-113 | 103-112 | 16.4 |
|1.30| 104-113 | 103-112 | 16.4 |
|1.29| 104-113 | 103-112 | 16.4 |
|1.28| 104-113 | 103-112 | 16.4 |
|1.27| 104-113 | 103-112 | 16.4 |
|1.26| 104-113 | 103-112 | 16 |
|1.25| 104-113 | 103-112 | 16 |
|1.24| 103-104 | 100-102 | 16 |
