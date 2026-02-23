---
id: kaneai-kb-mobile-app-testing-patterns
title: Mobile App Testing Patterns
hide_title: false
sidebar_label: Mobile App Testing Patterns
description: Best practices for authoring reliable native mobile app tests in KaneAI covering Android and iOS patterns, OTP fields, keyboards, pickers, and mobile-specific interactions
keywords:
  - lambdatest automation
  - lambdatest kaneai
  - kaneai mobile testing
  - kaneai app testing
  - kaneai android
  - kaneai iOS
  - mobile automation
url: https://www.lambdatest.com/support/docs/kaneai-kb-mobile-app-testing-patterns
site_name: LambdaTest
slug: kaneai-kb-mobile-app-testing-patterns/
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
          "name": "Mobile App Testing Patterns",
          "item": "https://www.lambdatest.com/support/docs/kaneai-kb-mobile-app-testing-patterns"
        }]
      })
    }}
></script>

Mobile native app testing in KaneAI follows many of the same principles as web testing, but with platform-specific nuances for Android and iOS. This guide covers the patterns, workarounds, and best practices that will help you write reliable mobile app tests.

## Getting Started with Mobile Tests

1. Navigate to the [KaneAI home page](https://kaneai.lambdatest.com/objective)
2. Choose **App Test** (Android or iOS)
3. Select a real device from the device cloud
4. Upload your app (APK for Android, IPA for iOS) or select a previously uploaded app
5. Start authoring with natural language instructions

## Keyboard Handling

The keyboard is one of the biggest differences between web and mobile testing. On mobile, the on-screen keyboard persists after typing and can block elements below it.

### Android

The keyboard typically auto-dismisses on most interactions, but you can explicitly dismiss it:

```
hide keyboard
```

### iOS

iOS keyboards are more persistent. The best approach is to use `press Enter` after typing, which both submits the current field and dismisses the keyboard:

```
type "john@example.com" in the email field and press Enter
```

Alternatively, if the keyboard has a "Done" or "Cancel" button:

```
click on "Done" button on the keyboard
click on "Cancel" button on the keyboard
```

:::warning
If you skip keyboard dismissal on iOS, the keyboard may cover the next element you need to interact with, causing the step to fail. Always dismiss the keyboard before moving to the next field.
:::

### Scenario: Login Form on iOS

```
type "admin@example.com" in the email field and press Enter
type "password123" in the password field and press Enter
click on the "Sign In" button
wait for 5 seconds
assert "Welcome" is visible
```

## OTP & PIN Fields

Mobile apps frequently use individual digit boxes for OTP entry. Use the `OTP` keyword — KaneAI automatically distributes digits across the boxes.

```
enter OTP "123456"
enter OTP "7890"
```

:::warning
Do **not** type into each box individually. The `OTP` keyword handles multi-box distribution.
:::

### Scenario: SMS OTP Verification

```
type "+1-555-0123" in the phone number field and press Enter
click on "Send Code"
wait for 10 seconds
enter OTP "654321"
click on "Verify"
assert "Phone verified" is visible
```

## Scrolling on Mobile

Mobile scrolling works differently from web — there's no pixel-based scroll. Use count-based or directional scrolling.

```
scroll down 3 times
scroll up 2 times
scroll down 1 time
```

### The Scroll → Wait Pattern

Always add a wait after scrolling on mobile. Content may need time to load, and the scroll animation needs to complete.

```
scroll down 2 times
wait for 2 seconds
assert "Contact Us" section is visible
```

### Scenario: Scrolling Through a Long Settings Page

```
scroll down 3 times
wait for 2 seconds
click on "Privacy Settings"
scroll down 2 times
wait for 2 seconds
click on "Delete Account"
assert confirmation dialog is visible
```

:::note
`scroll until element is visible` is currently supported only on **Web**. On mobile, use `scroll down X times` combined with waits and assertions.
:::

## Pickers, Wheels & Sliders

### Native Pickers

Mobile apps use native picker wheels for dates, numbers, and selections. KaneAI supports the following element classes:

**Android:**
- `android.widget.NumberPicker`
- `android.widget.SeekBar`

**iOS:**
- `XCUIElementTypePickerWheel`
- `XCUIElementTypePicker`
- `XCUIElementTypeDatePicker`
- `XCUIElementTypeSlider`

### Interacting with Picker Wheels

```
enter "5" in the first column
enter "March" in the second column
enter "2026" in the third column
```

### Slider Interactions

```
drag the slider to 80 percent
set the brightness slider to 50
```

### Troubleshooting Pickers

If a picker doesn't respond to natural language:

1. Open LambdaTest **App Live** with the [UI Inspector](https://www.lambdatest.com/support/docs/ui-inspector/)
2. Inspect the picker element to verify its class name
3. Confirm the class is one of the supported types listed above
4. If the class is a custom implementation, you may need to use **manual interaction** mode

## Partially Clickable Text (Spannable Text)

In mobile apps, text labels often contain partially clickable links — for example, "By signing up, you agree to our **Terms and Conditions** and **Privacy Policy**" where only "Terms and Conditions" is tappable.

Use the `spannable text` keyword:

```
click on spannable text: "Terms and Conditions" in the bottom info section
click on spannable text: "Privacy Policy" in the sign-up footer
```

## Dismissing Popups & Dialogs

Mobile apps frequently show permission dialogs, promotional popups, or system alerts that don't have visible close buttons.

### Generic Dialog Dismissal

```
dismiss dialog
```

### Permission Dialogs

```
if "Allow" button is visible then click on "Allow"
if "Don't Allow" button is visible then click on "Don't Allow"
```

### App Rating Dialogs

```
if "Rate this app" dialog is visible then dismiss dialog
```

### Scenario: Handling Permission Prompts on App Launch

```
-- App launches and asks for location permission --
wait for 3 seconds
if "Allow While Using App" is visible then click on "Allow While Using App"

-- App asks for notification permission --
wait for 2 seconds
if "Allow Notifications" is visible then click on "Allow Notifications"

-- Now proceed with the test --
assert the home screen is visible
```

## Typing & Special Keys

### Deleting Characters

```
press Del
press Del
press Del
```

This deletes one character at a time. To clear an entire field, it's more efficient to:

```
clear the "Username" field
type "new_username" in the "Username" field
```

### Pressing Enter/Return

```
press Enter
```

This can trigger form submission, keyboard dismissal, or moving to the next field depending on the app's implementation.

## Using Explicit Element Identifiers

On mobile, adding element type keywords improves accuracy because there may be multiple elements with similar text.

```
click on "Continue" button
click on "Learn More" text
click on "Settings" icon
assert "Welcome" text is visible
assert the profile button's background color is blue
```

| Keyword | Purpose |
|---|---|
| `button` | Targets tappable buttons |
| `text` | Targets text labels/views |
| `icon` | Targets image/icon elements |
| `input field` | Targets text inputs |
| `checkbox` | Targets checkable elements |
| `switch` | Targets toggle switches |

## Deep Links

KaneAI supports deep links for navigating directly to specific screens in your app, bypassing the normal navigation flow using the slash command.

:::tip
Deep links are excellent for test setup — jump directly to the screen you want to test instead of navigating through the entire app flow. See [Deep Link Support](/support/docs/kane-ai-deeplink-support).
:::

## Mobile-Specific Testing Scenarios

### Scenario: E-Commerce App — Browse and Purchase

```
-- Handle initial permissions --
if "Allow Notifications" is visible then click on "Allow Notifications"
wait for 2 seconds

-- Search for product --
click on the search icon
type "wireless earbuds" in the search field and press Enter
wait for 3 seconds

-- Browse results --
scroll down 2 times
wait for 2 seconds
click on the first "Wireless Earbuds" product

-- Add to cart --
scroll down 2 times
wait for 2 seconds
click on "Add to Cart" button
assert "Added to cart" toast is visible

-- Go to cart --
click on the cart icon
assert "Wireless Earbuds" is visible in the cart
click on "Checkout" button
```

### Scenario: Banking App — Check Balance with Biometric

```
-- App launches with biometric authentication enabled from advanced settings --
wait for 5 seconds
-- (Biometrics pop-up visible via LambdaTest device settings) --
click "pass" in modal
assert the home screen is visible

-- Navigate to accounts --
click on "Accounts" in the bottom navigation
wait for 3 seconds
assert account balance is visible

-- Check recent transactions --
scroll down 2 times
wait for 2 seconds
assert "Recent Transactions" section is visible
```

### Scenario: Social Media App — Post with Image

```
click on the "New Post" button
click on "Choose from Gallery"
wait for 3 seconds
click on the first image in the gallery
click on "Next"
wait for 2 seconds
type "Testing with KaneAI! #automation" in the caption field and press Enter
hide keyboard
click on "Share" button
wait for 5 seconds
assert "Post shared successfully" is visible
```

## Network Conditions & Geolocation

### Testing Under Different Network Conditions

Set network throttling before or during the test session to simulate real-world conditions:

- **Offline**: Test no-network behavior
- **2G/3G**: Test on slow connections
- **Custom**: Define specific bandwidth limits

See [Network Throttling](/support/docs/kaneai-network-throttling) for configuration.

### GPS Mocking (Mobile)

Test location-dependent features by mocking GPS coordinates:

```
-- Set location to New York --
-- (Configured in session settings before test starts) --
assert "Stores near New York" is visible
```

See [Geolocation Testing](/support/docs/kane-ai-geolocation-tunnel-proxy).

## Best Practices for Mobile App Testing

| Practice | Details |
|---|---|
| **Always dismiss keyboard after typing (especially iOS)** | Use `press Enter` or `hide keyboard` to prevent keyboard blocking elements |
| **Add waits after scrolls** | Mobile scroll animations need time to complete; content may lazy-load |
| **Use `OTP` keyword for PIN/OTP fields** | Don't type into individual digit boxes |
| **Handle permission dialogs upfront** | Use `if...then` conditionals at the start of your test |
| **Use deep links for test setup** | Skip navigation to jump directly to the screen under test |
| **Use element type keywords** | `button`, `text`, `icon` improve targeting accuracy |
| **Use `dismiss dialog` for stubborn popups** | Works for dialogs without visible close buttons |
| **Use `spannable text` for inline links** | Essential for "Terms and Conditions" style partial links |
