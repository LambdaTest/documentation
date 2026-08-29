# Mainframe Testing with HyperExecute

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run a Robot Framework suite that drives a mainframe 3270 terminal on TestMu AI HyperExecute. This guide uses the [FNB mainframe sample repo](https://github.com/alif-laam-Meem/mainframe-robot), which exercises a mocked bank host over the 3270 protocol.

Mainframe suites depend on the `s3270` and `x3270` 3270 emulator binaries. Those do not install cleanly on Windows or macOS. HyperExecute provisions Ubuntu VMs where they do, installs them from one YAML file, starts the mock hosts, autosplits the suites across parallel machines, and merges the Robot Framework report.

The sample suite runs on two tracks. The ASCII suites (`tests/01`-`05`) talk to the mock host through a custom socket client (`libs/fnb_client.py`), because Python removed the built-in `telnetlib` in 3.13 under PEP 594.

The TN3270 suites (`tests/06`-`10`) use the standard [`robotframework-mainframe3270`](https://pypi.org/project/robotframework-mainframe3270/) library driving `s3270`, and the final suite drives the `x3270` GUI.

**What a mainframe suite needs on the grid**
Three things a standard cloud run does not, all handled in the HyperExecute YAML:

- The native emulator binaries (`s3270`, `x3270`) and X core fonts, installed on the VM by the [`pre`](/support/docs/deep-dive-into-hyperexecute-yaml/#pre) steps.
- The mock hosts, kept alive for the whole job as [background services](/support/docs/hyperexecute-background-services/).
- A rendered display for the GUI terminal, provided by [`captureScreenRecordingForScenarios`](/support/docs/deep-dive-into-hyperexecute-yaml/#capturescreenrecordingforscenarios), which `x3270` draws to. Do not add your own `DISPLAY` or `Xvfb`.

## Prerequisites

Everything the tests need at runtime (`s3270`, `x3270`, X fonts, Python packages, the mock hosts) is installed on the VM by the YAML, not on your machine.

- Your TestMu AI Username and Access Key, with HyperExecute enabled on your plan.
- The HyperExecute CLI binary in the root of your suite. The sample repo already bundles the Windows build.
- The sample repo cloned locally (Step 1), or your own suite with a `tests/` folder of `.robot` files.
- Outbound HTTPS to `*.lambdatest.com`. Behind a corporate proxy, open an exception for it.

## Step 1: Clone the Sample Repo

Clone the FNB mainframe suite. It ships the `hyperexecute.yaml`, the Robot suites under `tests/`, and the mock hosts under `mock_server/`.

```bash
git clone https://github.com/alif-laam-Meem/mainframe-robot
cd mainframe-robot
```

## Step 2: Set Your Credentials

The CLI reads your Username and Access Key from environment variables or from `--user` / `--key` flags. Environment variables keep the key out of your shell history.

Get them from your [Account Settings](https://accounts.lambdatest.com/security/username-accesskey) page, then export them in the terminal you will run from.

  {`$env:LT_USERNAME = "${ YOUR_LAMBDATEST_USERNAME()}"
$env:LT_ACCESS_KEY = "${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

Environment variables are session-scoped. Set them again in each new terminal, or add them to your PowerShell `$PROFILE` or shell rc file to persist them.

## Step 3: Download the HyperExecute CLI

The CLI triggers the job. Keep the binary in the root directory of your suite. The sample repo already bundles `hyperexecute.exe` for Windows. For macOS or Linux, download the matching build.

| Platform | HyperExecute CLI |
| --- | --- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

On macOS, if you get a permission-denied warning, run `chmod u+x ./hyperexecute`. If a security popup blocks it, allow it under **System Settings** &rarr; **Privacy & Security**. On Windows, if the download is quarantined, run `Unblock-File .\hyperexecute.exe`.

## Step 4: Understand the HyperExecute YAML

The `hyperexecute.yaml` in the repo root is where the mainframe setup lives. This is the full file. The `runson`, `background`, `pre`, `testDiscovery`, and `testRunnerCommand` keys are required for this suite; the timeouts, retries, and caching are optional tuning.

```yaml title="hyperexecute.yaml"
---
version: 0.1

# Run all tests on Ubuntu Linux VMs (required for s3270 install)
runson: linux
# Automatically split discovered test files across parallel machines
autosplit: true
# Number of parallel VMs to spin up
concurrency: 5
# Retry each failed test suite once before marking it as failed
retryOnFailure: true
maxRetries: 1

# Record a video for each test scenario on HyperExecute
captureScreenRecordingForScenarios: true

# Timeout values in minutes
globalTimeout: 30
testSuiteTimeout: 30
testSuiteStep: 10

# Environment variables available to both mock servers and Robot Framework suites
env:
FNB_MOCK_PORT: "3271"         # ASCII mock server port
MAINFRAME_HOST: "127.0.0.1"
MAINFRAME_PORT: "3270"        # TN3270 mock server port (headless s3270 track)
MAINFRAME_GUI_PORT: "3272"    # TN3270 mock server port (GUI x3270 track)
MAINFRAME_USER: "MOCKUSER"
MAINFRAME_PASS: "MOCKPASS"
DEBIAN_FRONTEND: "noninteractive"  # Prevents apt-get from prompting during install

# Cache pip packages across runs using requirements.txt as the cache key
cacheKey: '{{ checksum "requirements.txt" }}'
cacheDirectories:
- pip_cache

# Start both mock servers in the background before tests run.
# HyperExecute manages these processes for the lifetime of the job.
background:
- nohup python3 mock_server/fnb_mock_server.py   # ASCII mock on port 3271
- nohup python3 mock_server/fnb_mock_tn3270.py   # TN3270 mock on port 3270 (headless s3270)
- nohup python3 mock_server/fnb_mock_tnX3270.py  # TN3270 mock on port 3272 (GUI x3270)

# Steps run once on each VM before test execution begins
pre:
- sudo apt-get update -y
- sudo apt-get install -y s3270  # Headless 3270 emulator needed by the headless TN3270 suites
# GUI 3270 emulator, plus the X core-font packages it needs to render.
- sudo apt-get install -y x3270 x11-utils x11-xserver-utils xfonts-base xfonts-100dpi xfonts-75dpi fonts-dejavu-core
- pip3 install -r requirements.txt --cache-dir pip_cache

# Dynamically discover all Robot Framework test files under tests/
testDiscovery:
type: raw
mode: remote
command: find tests -name "*.robot" | sort

# Register the X core-font dirs onto the recorded display so x3270 can render,
# wait for the mock servers to bind, then run each discovered suite.
testRunnerCommand: >
for d in /usr/share/fonts/X11/misc /usr/share/fonts/X11/100dpi /usr/share/fonts/X11/75dpi /usr/share/fonts/X11/Type1;
do [ -d "$d" ] && xset +fp "$d" 2>/dev/null || true; done;
xset fp rehash 2>/dev/null || true;
sleep 3 && robot --outputdir results --output output_$(basename "$test" .robot).xml --log log_$(basename "$test" .robot).html --report NONE $test

# Determine pass/fail from the robot command exit code only
scenarioCommandStatusOnly: true

# Merge artifacts from all parallel VMs into a single results folder
mergeArtifacts: true
uploadArtefacts:
- name: FNB_Reports
path:
- results/**

# Render a combined Robot Framework report on the HyperExecute dashboard
report: true
partialReports:
type: json
location: results
frameworkName: robot

jobLabel: [fnb-mainframe-mock, robotframework, linux, autosplit, x3270-gui]
```

Two lines are easy to get wrong:

- **`captureScreenRecordingForScenarios`** is not only for the video. It provides the display `x3270` renders to. Do not add your own `DISPLAY` or `Xvfb`, which would send `x3270` to an unrecorded display and blank the video.
- **`sleep 3`** in `testRunnerCommand` gives the background mocks time to bind their ports before tests connect. Raise it if your mocks start slowly.

## Step 5: Run the Suite

Run the CLI from the repo root, pointing at the YAML.

```powershell
.\hyperexecute.exe --config hyperexecute.yaml
```

The `.\` prefix is required in PowerShell. If you did not set the environment variables, pass the credentials inline:

```powershell
.\hyperexecute.exe --config hyperexecute.yaml --user "<username>" --key "<access-key>"
```

```bash
./hyperexecute --config hyperexecute.yaml
```

If you did not set the environment variables, pass the credentials inline:

```bash
./hyperexecute --config hyperexecute.yaml --user "<username>" --key "<access-key>"
```

That single command uploads the repo (respecting `.gitignore`), provisions the VMs, runs the `pre` steps, starts the background mocks, autosplits the `.robot` suites, records a video per scenario, and merges the Robot Framework report. The terminal prints live progress and ends with a job link to the dashboard. The exit code is `0` when all suites pass and non-zero otherwise, so it drops straight into CI.

### What Runs Where

| Suites | Mock host | Robot library | Emulator | Needs display |
| --- | --- | --- | --- | --- |
| `tests/01`-`05` (ASCII) | `fnb_mock_server.py` on 3271 | `libs/fnb_client.py` (raw socket) | none | no |
| `tests/06`-`09` (TN3270 headless) | `fnb_mock_tn3270.py` on 3270 | robotframework-mainframe3270 | `s3270` | no |
| `tests/10` (TN3270 GUI) | `fnb_mock_tnX3270.py` on 3272 | robotframework-mainframe3270 | `x3270` | yes, from `captureScreenRecordingForScenarios` |

## Step 6: Read the Results

Open the job link printed at the end of the run, or go to the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute).

- **Job summary** shows pass and fail counts, per-VM timing, and the autosplit distribution.
- **Reports tab** holds the merged Robot Framework `report.html` and `log.html`.
- **Artifacts** lets you download the `FNB_Reports` archive with everything under `results/**`. See [HyperExecute Job Artifacts](/support/docs/hyperexecute-artifacts/) and [HyperExecute Job Reports](/support/docs/hyperexecute-job-reports/).
- **Scenario video** plays the per-scenario recording. For `tests/10` this shows the real `x3270` green screen being driven.

Locally, the CLI also writes `hyperexecute-cli.log` (the full job log, the first place to look on a failure) and a `.hyperexecute/` run directory.

## Common Tweaks

Edit `hyperexecute.yaml` to change how the job runs.

| Goal | Change |
| --- | --- |
| More or fewer parallel VMs | Set `concurrency` to the number you want, up to your plan's parallel limit. |
| Disable video for a faster run | Set `captureScreenRecordingForScenarios: false`. This removes the display `tests/10` needs, so exclude that suite if you do this. |
| Retry flaky suites | Raise `maxRetries` above `1`. |
| Allow longer-running suites | Raise `globalTimeout` and `testSuiteTimeout` (minutes). |
| Change mock ports or credentials | Edit the `env` block (`MAINFRAME_PORT`, `MAINFRAME_GUI_PORT`, `FNB_MOCK_PORT`, `MAINFRAME_USER`, `MAINFRAME_PASS`). |

To run a single suite without editing the whole flow, narrow the discovery command:

```yaml title="hyperexecute.yaml"
testDiscovery:
type: raw
mode: remote
command: find tests -name "06_tn3270_logon.robot"
```

All suites run in parallel on HyperExecute's Linux VMs, and the merged Robot Framework report lands on the dashboard under `FNB_Reports`.

> For any query, contact us via **24x7 chat support** or email **support@testmuai.com**.
