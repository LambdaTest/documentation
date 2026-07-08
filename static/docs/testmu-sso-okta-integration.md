# TestMu AI SSO & Okta Integration

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

TestMu AI allows you to integrate an external user directory with your TestMu AI Organization through an IDP so your team could leverage the Single Sign-on setup. With Okta, you can integrate your TestMu AI organization in two ways i.e. through the Dev Console or the SAML.

After you integrate your Okta instance with your TestMu AI for Single Sign-on, you can benefit from the following features:
* SP-initiated SSO.
* IdP-initiated SSO.

To know more, refer to Okta's glossary.

## Prerequisites
To enable TestMu AI SSO through Okta integration:

* You will need an Enterprise plan with TestMu AI.
* The Admin of your TestMu AI organization needs to raise a request for enabling SSO Self Serve UI. They could drop us an email over support@testmuai.com or could reach out to us via our **24/7 in app chat support**.
* You will also need the admin level access of Okta  to configure the SSO.

## Configuring TestMu AI & Okta Integration Using SAML

1. Go to TestMu AI Authentication & SSO settings and click on **Setup SSO**.

2. Enter Connection Name and Click on  **Add New Connection**.

3. Select **Okta** as your identity provider.

4. Now copy the details required for setting up SSO connection in your **Identity Provider**.
   Once configured, click on continue

5. Now Configure the Attributes and Claims in your **Identity Provider**.
   Once configured, click on continue

6. Login to your okta account.

7. Go to Application menu from the toolbar and click on **Create App Integration**.

8. Select the **SAML 2.0** option and click on **Next**.

9. Give the created app a name of your choice, in the **App Name** box, and click Next.

10. Fill in the details as per in step 4 and step 5 and then click Next.

12. Set the Attribute Statements as per the image below and click Next.

13. In the next window of this Okta SAML integration, choose App Type as **This is an internal app that we have created**, as shown in the image below, and then click on **Finish** to complete the app creation.

14. Once the app is created, you will be redirected to the app's general settings. Click on the **Sign On** tab. Copy the Metadata URL and paste it in the TestMu AI SSO setup page.

15. Fill the required fields  and click on **Create Connection**:

* SSO Domains (Comma-separated list of the domains that can be authenticated in the Identity Provider.)
* Have Metadata URL (Select this option if you have metadata file URL of your Identity Provider.)
* Metadata URL (Enter the metadata file URL of your Identity Provider.)
* Sign In URL (Enter the sign-in URL of your Identity Provider.)
* X509 Certificate (Upload the base64 encoded X509 certificate of your Identity Provider.)

Create Connection with Metadata URL

> That's all you need to know for Configuring TestMu AI SSO Integration with Okta. In case you have any questions please feel free to reach out to us via the **24/7 chat support** or email us over [support@testmuai.com](mailto:support@testmuai.com).
