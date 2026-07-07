# iOS Entitlements

We support all ipa files generated from different Certificates & Profiles.

However, to install these apps on our devices, we resign your applications with our Resigning Certificate.

This is true for all Certificates & Profiles except the applications generated using an Enterprise Account.

## Disabling Re-Signing In Manual App Testing

**Note**

- Your application must be an Enterprise Application.

When you upload an application that is generated through an Enterprise Account, you have the option at the beginning of your test to disable re-signing by toggling iOS Entitlements.

Once you toggle the iOS Entitlements option, your application's certificates will be preserved.

## Disabling Re-Signing In App Automation

**Note**

- Your application must be an Enterprise Application.

You can prevent re-signing your application with the "resignApp" capability. Upload your enterprise application & specify the capability as "false" to prevent it from being re-signed.

KEY|VALUE|DESCRIPTION
--|--|--
| resignApp            | TYPE: BOOLEAN  DEFAULT: True  `resignApp = true` | 1. By default, if this capability is not passed, your app will be re-signed. 2. You can pass "false" as a capability to prevent your apps from being re-signed. 3. This is only for iOS-specific applications and devices |
>
If you still have any questions for us, please feel free to let us know via our **24X7 Chat Portal** or mail us to support@testmuai.com
