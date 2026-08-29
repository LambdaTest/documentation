# How to View Terminal Logs on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

TestMu AI lets you attach your terminal logs (Appium server output, test-runner, or CI logs) to any app automation session through a single REST API, then view or download them from the dashboard under Logs › Terminal beside native logs.

**Supported on:** Real &amp; Virtual devices

This keeps your own diagnostic logs next to the session they belong to, so you can correlate them with the session's native logs (Appium, device, network, crash) in one place, without jumping between your CI system, local files, and the dashboard.


## How it works

- **One log per session** A session holds at most one terminal log at a time.
- **Latest upload** Every upload replaces the existing log, regardless of the filename.
- **No special capability is required.** Any valid session can receive a terminal log. There is no opt-in flag to set in your test capabilities.
- **Retention** follows the session's normal artifact retention. The log is kept and expires on the same schedule as the session's other logs.



## Upload a terminal log

Use the **upload** endpoint to attach a log file to a session. The file is sent as a multipart form field named `file`. Uploading again replaces the previous file.



{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://mobile-api.lambdatest.com/mobile-automation/api/v1/sessions//log/terminallog" --form "file=@/path/to/appium.log"
`}



Replace `` with your actual session ID and `/path/to/appium.log` with the path to your log file.

On success, the API returns:

```json
{ "status": "success", "message": "File has been uploaded successfully!" }
```

## View terminal logs in the dashboard


Open the session on the TestMu AI Automation dashboard. The **Terminal** sub-tab is always available under **Logs** (next to **Crash**). Once you upload a log file, it starts showing up in this tab, where you can view the file and read its contents in the browser.


The **Terminal** tab is always present. It stays empty until a terminal log is uploaded for the session.


{/*  */}

## Download a terminal log


To download the uploaded log, add the `download=true` query parameter to the view endpoint:



{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X GET "https://mobile-api.lambdatest.com/mobile-automation/api/v1/sessions//log/terminallog?download=true" --output terminal-logs.log
`}




The downloaded file is always named `terminal-logs.`, where `` is your original file extension. The original base filename is not retained.


## Delete a terminal log


To remove the attached log from a session, use the **delete** endpoint:



{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X DELETE "https://mobile-api.lambdatest.com/mobile-automation/api/v1/sessions//log/terminallog"
`}



## Supported formats and limits


|                     | Value                                                                              |
| ------------------- | ---------------------------------------------------------------------------------- |
| Maximum file size   | 5 MB                                                                                |
| Allowed file types  | `.txt`, `.json`, `.xml`, `.log`, `.csv`, `.html`, `.yaml`, `.yml`, `.har`, `.gz`    |
| Files per session   | 1 (each upload replaces the previous file)                                          |
| Empty (0-byte) file | Not allowed                                                                         |



## FAQ


**Can I upload more than one file to a session?**
No. A session holds one terminal log at a time, and each new upload replaces the previous one.

**How long are terminal logs kept?**
They follow the session's normal artifact retention, on the same schedule as the session's other logs. There is no separate retention setting.

**Do I need a special capability to use this?**
No. Any valid app automation session can receive a terminal log; there is no opt-in flag to set in your test capabilities.


If you still have any questions for us, please feel free to let us know via our **24X7 Chat Portal** or mail us to support@testmuai.com
