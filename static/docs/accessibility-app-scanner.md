# Accessibility App Scanner (Overview)

Accessibility App Scanner is the manual mobile app workflow for reviewing accessibility issues on real Android or iOS devices, screen by screen, without writing Appium code.

## When to use this​

Use App Scanner when you want to inspect Android or iOS app screens interactively and validate findings as you move through the app—ideal for exploratory passes, design reviews, or reproducing issues filed by users.

## Prerequisites​

- Access to Accessibility and App Scanner for your organization

- A build of the app you are authorized to test (store build, enterprise IPA/APK, or uploaded artifact per your workflow)

- A device profile that matches your audience (OS version, screen size)

## Onboarding: first manual scan​

- Upload or select the application package in the App Scanner flow (follow in-product prompts for accepted formats).

- Pick a real device pool that matches your target users (OS + locale).

- Launch the session and wait until the app is installed and foregrounded.

- Navigate critical journeys (onboarding, login, checkout, settings). After each major screen stabilizes, trigger the scan action the UI provides.

- Review issues in the side panel or overlay—open each item to see rule text, element context, and suggested remediation where available.

- Save or end the session so results appear under Accessibility Reports for dashboard analysis (Navigating the Dashboard).

- Optional: run a Screen Reader pass on the same build for manual confirmation.

## Typical workflow (summary)​

- Upload or select the app.

- Start the device session.

- Scan important screens manually.

- Review the issues.

- Save the report and move into dashboard analysis if needed.

## Product boundary​

App Scanner is a manual mobile-app workflow. If you are running Appium code, use Native App Automation Appium (Overview). If you are authoring the flow in KaneAI, use Mobile App Accessibility Testing.

## Related docs​

- Native App Automation Appium (Overview)

- Mobile App Accessibility Testing

- Tag Support for Accessibility Scans
