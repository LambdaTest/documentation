# Chrome Options

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Chrome options, also known as Chrome arguments, are command-line switches that alter the default behavior of the Chrome browser. These options provide flexibility to users by enabling or disabling certain browser features, modifying settings, and configuring custom behaviors such as headless browsing or disabling GPU acceleration.

In KaneAI Web Agent, Chrome options are used to tailor the testing environment to suit the specific needs of automated tests. By defining Chrome options, users can configure the browser behavior before initiating a test session, allowing for a more customized and controlled testing setup. This guide will walk you through the steps to configure and use Chrome options in the KaneAI Web Agent:


Follow these steps to add Chrome options to a web test session.

### Step 1: Navigate to the Test Configuration Page
- Begin by accessing the Test Configuration page within the KaneAI Web Agent interface. Click on the **Create a Web Test** button.


In the KaneAI Web Agent interface, click **Create a Web Test** to open **Advanced Settings**.

**Result:** The web test configuration opens, including the Chrome options section.

### Step 2: Add Chrome Options


Enable the Chrome options toggle, then enter each command-line switch. For each switch, select the argument type (**String** or **File**). You can enter up to 10 Chrome options. For example:

- `--headless`
- `--disable-gpu`
- `--use-file-for-fake-audio-capture=/path/to/audio/file`



**Result:** The Chrome options are queued to apply when the session launches.

### Step 3: Start the Web Agent
- Once the configuration is done, initiate the Web Agent. The browser will launch with the specified Chrome options applied, allowing you to perform your tests under the customized environment.


Start the Web Agent to launch the session.



**Result:** The browser launches with your Chrome options applied.

## Argument Types


Each Chrome option accepts one of the following argument types.

| Type | Description |
|---|---|
| **String** | A plain-text command-line value, such as `--headless` or `--disable-gpu`. |
| **File** | A command-line value that points to a file, such as `--use-file-for-fake-audio-capture`. KaneAI injects the Downloads folder path by default, so you do not have to specify the path manually. |

## Limitations


Keep these limitations in mind:

- You can configure up to 10 Chrome options per session.
- KaneAI validates the options you enter. If an option is unsupported, an error message prompts you to correct it.
- If you provide no Chrome options, the browser launches with its default configuration.

## Next Steps


Continue with these guides:

- [KaneAI Advanced Settings](/support/docs/kaneai-advanced-settings/)
- [KaneAI Custom Headers](/support/docs/kaneai-custom-headers/)
