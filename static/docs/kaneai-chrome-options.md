# How to Set Chrome Options With KaneAI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Chrome options, also known as Chrome arguments, are command-line switches that change the default behavior of the Chrome browser, such as running headless or disabling GPU acceleration. In KaneAI Web Agent, you set Chrome options in **Advanced Settings** to configure the browser before a web test session starts.

## Configure Chrome Options

Follow these steps to add Chrome options to a web test session.

### Step 1: Create a Web Test

In the KaneAI Web Agent interface, click **Create a Web Test** to open **Advanced Settings**.

**Result:** The web test configuration opens, including the Chrome options section.

### Step 2: Add Chrome Options

Enable the Chrome options toggle, then enter each command-line switch. For each switch, select the argument type (**String** or **File**). You can enter up to 10 Chrome options. For example:

- `--headless`
- `--disable-gpu`
- `--use-file-for-fake-audio-capture=/path/to/audio/file`

**Result:** The Chrome options are queued to apply when the session launches.

### Step 3: Start the Web Agent

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
