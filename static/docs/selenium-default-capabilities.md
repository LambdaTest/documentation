# Selenium Default Capabilities

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

## Default Capabilities Reference

These are the built-in capabilities that Selenium supports for browser session configuration.

| Key | Values | Capability Description |
|-----|--------|------------------------|
| `javascriptEnabled` | true, false | Enables or disables JavaScript execution support based on the provided input.|
| `databaseEnabled` | true, false | Determines whether a session can communicate with the database. |
| `locationContextEnabled` | true, false | Determines whether a session can use features related to different geographic locations.|
| `applicationCacheEnabled` | true, false | Determines whether a session can use the application cache.|
| `browserConnectionEnabled` | true, false | Determines the browser connectivity for the query involved in the session. Also checks whether the end user can disable the session if required. |
| `webStorageEnabled` | true, false | Determines whether a session can connect with [storage objects](https://www.w3.org/TR/2009/WD-webstorage-20091029/).|
| `acceptSslCerts` | true, false | Determines whether a session should accept all SSL certificates by default.|
| `unexpectedAlertBehaviour` | accept, dismiss, ignore | Determines the browser action for handling alerts before pointing the UnhandledAlertException. |
| `elementScrollBehavior` | integer | Determines the scrolling behavior based on the provided input. You can align elements to top(0) or bottom(1) with respect to the elements scroll-ability inside the viewport. By default the value is set to 1, aligning the scroll behavior to top. This is compatible with IE and Firefox (since 2.36). |
| `preventCrossSiteTracking` | true, false | Blocks or unblocks cross-site tracking. |
