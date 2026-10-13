# Filter Storybook Stories with Include and Exclude

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

By default, SmartUI captures every story in your Storybook. Use `include` and `exclude` in your SmartUI config to capture only some of them, for example:

- one component, or one folder of components
- every story except work in progress or deprecated stories
- one exact story while you debug it

Fewer stories means a shorter build and fewer screenshots used from your plan.

## Prerequisites

- `@lambdatest/smartui-storybook` version `1.3.0` or later for the `title:`, `id:`, `path:` and `name:` prefixes. Run `smartui --version` to check.
- A SmartUI config file that you pass with `--config`. If you do not have one, see [Storybook Integration](/support/docs/smart-ui-storybook/).

In earlier versions, every pattern is matched against the story name only. A pattern with a prefix, such as `title:Components/Button`, is then also read as a story name, so it usually matches nothing.

## How filtering works

Add `include`, `exclude` or both to the `storybook` block of your config file. Each one is a list of patterns.

```json title=".smartui.json"
{
"storybook": {
"browsers": ["chrome", "firefox"],
"viewports": [[1280, 800]],
"include": ["title:/^Components/Button$/", "id:/^components-toggle--/"],
"exclude": ["name:Disabled"]
}
}
```

The CLI reads your Storybook's story index, then decides for each story:

1. If `include` has patterns, the story is kept only when it matches at least one of them. An empty or missing `include` keeps every story.
2. If the story matches any `exclude` pattern, it is skipped, even when it matched `include`.
3. Docs pages are always skipped.

This works the same for a static build directory and for a Storybook URL.

## Choose what a pattern matches

Start a pattern with a prefix to choose which part of the story it is matched against.

| Prefix | Matches against | Example value for the story `Components/Button` > `Primary` |
|---|---|---|
| `title:` | The story title: the folder path shown in the Storybook sidebar. In Storybook 6, this is the story `kind`. | `Components/Button` |
| `id:` | The story ID, as shown in the Storybook URL after `?path=/story/`. | `components-button--primary` |
| `path:` | The title and the story name joined with `/`. This is the sidebar path of the story, not the path of the story file. | `Components/Button/Primary` |
| `name:` | The story name. | `Primary` |
| No prefix | The story name, the same as `name:`. | `Primary` |

To find these values for your stories, open `index.json` in your Storybook static build folder (`stories.json` in Storybook 6). Each entry has an `id`, a `title` (or `kind`) and a `name`.

A story name such as `Primary` or `Default` often repeats across many components. A pattern without a prefix matches all of them. To filter by component or folder, use `title:`, `id:` or `path:`.

## Write a pattern

Every pattern is a regular expression.

- **Plain text matches anywhere in the value.** `title:Components/Button` matches `Components/Button`, and also `Components/ButtonGroup`.
- **Text between `/` delimiters is a regular expression with optional flags.** Use the anchors `^` and `$` to match the whole value: `title:/^Components/Button$/` matches `Components/Button` only. A `/` inside the expression does not need a backslash.
- **Add the `i` flag to ignore case**, for example `name:/^primary$/i`.
- **Escape special characters.** Characters such as `(`, `)`, `[`, `]`, `?`, `+`, `*` and `.` have a special meaning in regular expressions. Put a backslash before each one to match it as text. In JSON, write each backslash twice, for example `"title:/^Forms \\(legacy\\)$/"`.
- **Write the prefix in lower case**, with no space before the colon. Text before a colon that is not one of the four prefixes, such as `Title:` or `State: Active`, is part of a pattern that is matched against the story name.
- **A pattern that starts with `/` is always matched against the story name.** To use a regular expression on another field, put the prefix first: `title:/Deprecated/`.
- If a story name itself starts with a prefix word, such as a story named `title:Intro`, add `name:` in front: `"name:title:Intro"`.

### Examples

| Pattern | Matches |
|---|---|
| `title:Components/Button` | Every story under `Components/Button`, and under any title that contains that text, such as `Components/ButtonGroup` |
| `title:/^Components/Button$/` | Every story under `Components/Button` only |
| `title:/^Components//` | Every story in the `Components` folder and its subfolders |
| `title:/Alert\|Badge/` | Every story whose title contains `Alert` or `Badge` |
| `id:/^components-alert--/` | Every story of the `Components/Alert` component, by story ID |
| `id:components-button--primary` | The story with this ID, and any ID that contains it |
| `path:/^Components/Button/(Primary\|Secondary)$/` | The `Primary` and `Secondary` stories of `Components/Button` |
| `name:/^primary$/i` | Every story named `Primary`, in any letter case, in any component |
| `Primary` | Every story whose name contains `Primary`, in any component |

In a JSON config file, write each pattern as a string, for example `"title:/^Components/Button$/"`.

## Common filters

**One component:**

```json
"include": ["title:/^Components/Button$/"]
```

**Several folders:**

```json
"include": ["title:/^Components/Forms/", "title:/^Components/Navigation/"]
```

**Everything except work in progress and deprecated stories:**

```json
"exclude": ["title:/Deprecated/", "name:/^WIP /"]
```

**One component without some of its stories:**

```json
"include": ["title:/^Components/Button$/"],
"exclude": ["name:Disabled", "id:/--large$/"]
```

## Check what was captured

When the build starts, the CLI prints the number of stories left after filtering:

```text
[smartui] Stories found:  7
[smartui] Number of stories rendered may differ based on the config file.
```

Each story is captured once for every browser and viewport in your config. For example, 7 stories with 2 browsers and 1 viewport give 14 screenshots.

If every story was filtered out, the CLI stops before the build starts:

```text
[smartui] Error: No stories found
```

The CLI then exits with code `1`. See [CI Gating and Exit Codes](/support/docs/smartui-storybook-ci-gating/).

## Filtered builds and your baseline

A filtered build has screenshots only for the stories it captured. If a filtered build becomes your baseline, the stories that were left out have no baseline screenshot. The next full build then shows those stories as new instead of comparing them.

Before you approve a filtered build, check whether approving it makes it the baseline for your project. If your project uses a baseline branch, run filtered builds on other branches, for example by setting `CURRENT_BRANCH` to your feature branch. Run full builds, with no `include` or `exclude`, on the baseline branch. See [Baseline Management](/support/docs/smartui-baseline-management/).

## Troubleshooting

| Problem | What it means | What to do |
|---|---|---|
| A pattern matches stories from many components | The pattern has no prefix, so it matches the story name, and story names repeat across components. | Use `title:`, `id:` or `path:` to name the component. |
| `title:Button` also captures `ButtonGroup` | Plain text matches anywhere in the value. | Use anchors: `title:/^Components/Button$/`. |
| A pattern with `Title:` or `ID:` matches nothing | Prefixes are lower case only. Any other text before the colon is matched against the story name. | Write `title:` or `id:`. |
| A pattern with `(`, `[` or `.` matches the wrong stories | These characters have a special meaning in regular expressions. | Put a backslash before each one, and write it twice in JSON. |
| `No stories found` | Your patterns removed every story. | Check the values in your Storybook's `index.json`, and loosen `include` or `exclude`. |
| Prefixed patterns match nothing | Your CLI is older than `1.3.0`. | Update `@lambdatest/smartui-storybook`. |

## Related pages

- [Storybook Integration](/support/docs/smart-ui-storybook/)
- [CI Gating and Exit Codes](/support/docs/smartui-storybook-ci-gating/)
- [Baseline Management](/support/docs/smartui-baseline-management/)
