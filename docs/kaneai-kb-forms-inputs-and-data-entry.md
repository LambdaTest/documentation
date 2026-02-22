---
id: kaneai-kb-forms-inputs-and-data-entry
title: Forms, Inputs & Data Entry
hide_title: false
sidebar_label: Forms, Inputs & Data Entry
description: Practical guide to handling forms, dropdowns, date pickers, file uploads, and complex input patterns in KaneAI
keywords:
  - lambdatest automation
  - lambdatest kaneai
  - kaneai forms
  - kaneai inputs
  - kaneai data entry
  - form testing
url: https://www.lambdatest.com/support/docs/kaneai-kb-forms-inputs-and-data-entry
site_name: LambdaTest
slug: kaneai-kb-forms-inputs-and-data-entry/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Forms, Inputs & Data Entry",
          "item": "https://www.lambdatest.com/support/docs/kaneai-kb-forms-inputs-and-data-entry"
        }]
      })
    }}
></script>

Forms are at the heart of most web applications — login pages, registration flows, checkout processes, search filters, and admin panels. This guide covers how to handle every type of form element in KaneAI with real-world testing scenarios.

## Text Input Fields

### Basic Text Entry

Use `type`, `enter` or `input` followed by the value and the target field.

```
type "john.doe@example.com" in the email input field
enter "SecurePass123!" in the password field
type "123 Main Street" in the address field
```

### Using Variables & Parameters for Dynamic Data

Instead of hardcoding values, use parameters for reusable and parameterized tests.

```
create a parameter using /(slash) command called username
type ${username} in the username field
```

:::tip
Parameters once used in authoring can be used to input different data values via dataset. See the [Parameters](/support/docs/kane-ai-using-parameters/) guide for more information.
:::

For test data that needs to be unique each run, use **smart variables**:

```
type {{smart.random_email}} in the email field
type {{smart.random_phone}} in the phone number field
```

:::tip
Smart variables like `{{smart.random_email}}` generate unique values every run, which is ideal for registration flows where duplicate emails would fail. See the [Smart Variables](/support/docs/kane-ai-smart-variables/) guide for the full list.
:::

## Dropdown & Select Menus

### Standard HTML Select Dropdowns

```
select "United States" from the country dropdown
select "California" from the state dropdown
```

### Custom Dropdowns (Non-Native)

Many modern applications use custom-built dropdowns that aren't standard HTML `<select>` elements. For these, use a click-then-select pattern:

```
click on the "Country" dropdown
click on "United States" in the dropdown list
```

If the dropdown requires typing to filter:

```
click on the "Country" dropdown
type "United" in the search field inside the dropdown
click on "United States" in the filtered results
```

### Multi-Select Dropdowns

```
click on the "Tags" dropdown
click on "Urgent" in the dropdown list
click on "Bug" in the dropdown list
```

### Scenario: Cascading Dropdowns (Country → State → City)

A common pattern where the second dropdown options depend on the first.

```
select "India" from the country dropdown
wait for 2 seconds
select "Maharashtra" from the state dropdown
wait for 2 seconds
select "Mumbai" from the city dropdown
```

:::warning
Always add a `wait` between cascading dropdowns. The child dropdown needs time to populate after the parent selection changes.
:::

## Date Pickers

### Simple Date Pickers

```
select 15th March 2026 date
select tomorrow's date
```

### Calendar Widget Date Pickers

For custom calendar components, navigate month by month:

```
click on the date input field
click the "Next Month" arrow 3 times
click on day "22"
```

### Date Range Pickers

```
click on the "Start Date" field
select 1st February 2026 date
click on the "End Date" field
select 28th February 2026 date
```

### Using Smart Variables for Dynamic Dates

```
type {{smart.current_date}} in the "Start Date" field
type {{smart.end_of_month}} in the "End Date" field
```

:::tip JS Workaround
If the date picker uses a read-only input that doesn't accept typed values, use a JS snippet to set the value directly:

```javascript
document.querySelector('input[name="startDate"]').value = '2026-03-15';
document.querySelector('input[name="startDate"]').dispatchEvent(new Event('change', { bubbles: true }));
```

Use `/` → **Add JS Snippet** to execute this.
:::

## Checkboxes & Radio Buttons

### Checkboxes

```
check the "I agree to Terms and Conditions" checkbox
uncheck the "Subscribe to newsletter" checkbox
```

### Radio Buttons

```
click on the "Express Shipping" radio button
select the "Monthly" billing option
```

### Scenario: Preferences Form with Multiple Checkboxes

```
check the "Email Notifications" checkbox
check the "SMS Alerts" checkbox
uncheck the "Marketing Communications" checkbox
click the "Save Preferences" button
assert "Preferences saved successfully" is visible
```

## File Uploads

KaneAI supports uploading files during test authoring. Use the `/` command to access the file upload option.

### Steps to Upload a File

1. Type `/` in the input field
2. Select **Upload File**
3. Choose the file from your system
4. The file gets uploaded and can be used in the test step as a variable.

```
upload file {{FILE_sample_report_pd}} to the file input
```

:::note
For detailed instructions, refer to [File Upload & Download Testing](/support/docs/kaneai-upload-and-download-files).
:::

## OTP & PIN Fields

Applications that use separate input boxes for each digit (e.g., 4-digit or 6-digit OTP fields) require the `OTP` keyword.

```
enter OTP "1234"
enter OTP "567890"
```

:::warning
Do **not** try to type into each OTP box individually (e.g., `type "1" in first box, type "2" in second box`). Use the `OTP` keyword as a single instruction — KaneAI handles the per-box distribution automatically.
:::

### Scenario: Login with OTP Verification

```
type "john@example.com" in the email field
click on "Send OTP" button
wait for 5 seconds
enter OTP "123456"
click on "Verify" button
assert "Welcome, John" is visible
```

For real TOTP-based MFA, see the [TOTP Authentication](/support/docs/kaneai-totp) guide.

## Sliders & Range Inputs

### Web Sliders

For range sliders on web, describe the target value:

```
set the price slider to 500
drag the volume slider to 75 percent
```

If the slider is not responsive to natural language, use a **JS snippet**:

```javascript
const slider = document.querySelector('input[type="range"]');
slider.value = 75;
slider.dispatchEvent(new Event('input', { bubbles: true }));
```

### Mobile Sliders & Pickers

On mobile, specific element classes are supported:
- **Android**: `android.widget.SeekBar`, `android.widget.NumberPicker`
- **iOS**: `XCUIElementTypeSlider`, `XCUIElementTypePicker`, `XCUIElementTypePickerWheel`

```
enter "5" in the first column
drag the slider to 80 percent
```

## Rich Text Editors

For applications with WYSIWYG editors (TinyMCE, CKEditor, Quill, etc.), the editor content is typically inside an iframe or contenteditable div.

### Using Natural Language

```
click inside the text editor
type "This is a test paragraph for the blog post."
```

### If the Editor is Inside an iFrame

KaneAI handles iFrames automatically in most cases. If not, use a JS snippet:

```javascript
document.querySelector('iframe.editor').contentDocument.body.innerHTML = '<p>Test content</p>';
```

## Search Fields with Autocomplete

Many search fields show suggestions as you type. Handle these by typing, waiting for suggestions, then selecting.

```
type "New Yo" in the search field
wait for 2 seconds
click on "New York, NY" in the suggestions dropdown
```

### Scenario: Address Autocomplete (Google Places)

```
type "221B Baker" in the address field
wait for 3 seconds
click on "221B Baker Street, London" in the autocomplete suggestions
assert the city field contains "London"
```

## Keyboard Interactions in Forms

| Action | Instruction |
|---|---|
| Submit a form via Enter key | `type "search query" in the search field and press Enter` |
| Tab between fields | `press Tab` |

### Hiding the Keyboard (Mobile)

- **Android**: `hide keyboard`
- **iOS**: `press Enter` after typing (preferred), or `click on the "Done" button on the keyboard`

```
type "test@example.com" in the email field and press Enter
```

## Do's and Don'ts for Form Testing

| Do | Don't |
|---|---|
| `type "admin" in the "Username" input field` | `type admin` (which field?) |
| `wait for 2 seconds` between cascading dropdowns | Immediately select child dropdown after parent change |
| `enter OTP "1234"` for OTP/PIN fields | `type "1" in the first OTP box` |
| Use `{{smart.random_email}}` for unique registration data | Hardcode `test@test.com` which may already exist |
| Use JS snippets for stubborn date pickers | Fight with natural language for read-only date inputs |
