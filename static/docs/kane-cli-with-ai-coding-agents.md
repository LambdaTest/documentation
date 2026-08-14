# AI Coding Agents Use Cases

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

An AI coding agent can write the change, but without a browser it cannot tell you whether the change actually works. It can read the source, trace the wiring, and tell you the code looks correct, and it will still be guessing about the running app.

Kane CLI closes that gap. Install one skill file and your agent gains a real Chrome session it can drive in plain English, plus a structured result it can read, reason about, and act on without a human interpreting the terminal. The walkthroughs below show the same idea across seven different builders, followed by the patterns that work in any of them.

## How AI Builders Work With Kane CLI

The architecture is the same no matter which builder you use, and it has only three moving parts.

**One skill file teaches the agent when and how to reach for a browser.** The skill is plain markdown. It tells the agent to use `kane-cli` rather than Playwright or Puppeteer directly, to always pass `--agent`, how to build the command, how to parse the output, and how to diagnose a failure. Install it once and the agent handles browser work automatically whenever you ask for it.

**One command does the work.** `kane-cli run` for an ad-hoc objective, `kane-cli testmd run` for a committed replayable test, and `kane-cli generate` for authoring test cases from a description. Kane CLI manages Chrome, authentication, and the automation agent itself, so the coding agent only has to write a sentence.

**The result comes back in a form the agent can act on.** Every run streams NDJSON, ending with a `run_end` event that carries the status, summary, duration, extracted values, and paths to the logs. Alongside it sits the `.evidence` pack: step traces, screenshots, video, and command, network and console logs. When a run fails, the agent reads the same proof a human would, which is why it can diagnose the failure instead of just reporting it.

### Supported Agents

| Agent | How Kane CLI plugs in |
|-------|----------------------|
| Claude Code | `SKILL.md` in `~/.claude/skills/kane-cli/` or `.claude/skills/kane-cli/` |
| Codex CLI | Appended to `~/.codex/AGENTS.md` or the project's `AGENTS.md` |
| Gemini CLI | `SKILL.md` in `~/.gemini/skills/kane-cli/` or `.gemini/skills/kane-cli/` |
| Kiro | The **Kane CLI — Browser Automation & AI Test Authoring** Power |
| Cursor, Lovable, Antigravity, GLM, and others | Point the agent at the hosted skill: `https://www.testmuai.com/kane-cli/agents.md` |

### Install the Skill

Install globally for Claude Code, Codex CLI, and Gemini CLI in one command:

```bash
npx @testmuai/kane-cli-skill
```

A global install applies to every project. A project-level install ships with the repo, so teammates and CI pick it up automatically. For any agent not on that list, give it the hosted skill URL and it will fetch the same instructions.

### Authenticate Without a Browser Window

OAuth opens a browser window that an agent cannot complete on its own. Use Basic Auth instead:

```bash
kane-cli login --username "<your-username>" --access-key "<your-access-key>"
```

Confirm with `kane-cli whoami`. The skill runs this check itself before its first browser task. Sandboxed builders such as Lovable will ask you to complete the OAuth step in your own terminal and then hand them the username and access key.

## Claude Code

The longest of these walkthroughs, and the one that covers the whole loop: static review, live verification, failure diagnosis, test authoring, and suite maintenance, all inside one session on a Next.js app with Supabase email-OTP login.

1. **Start with Kane CLI switched off.** Asked to check the login flow with `kane-cli` disabled, Claude does a static review: it reads `supabaseClient.js` and `page.js`, confirms `signInWithOtp` is called with the right options, that the verify step passes the right token type, and that session handling is reactive. The verdict is that the OTP flow is wired correctly, followed by an explicit list of what static analysis *cannot* establish: that the project accepts the key, that an email is delivered, that a real code verifies, or that the signed-in view renders for a live user.
2. **Switch Kane CLI on and run the same check for real.** Claude builds `kane-cli run "Go to http://localhost:3000/login. Verify the page shows the Acme login with a 'Sign in' heading and an email field…"` and streams the NDJSON back.
3. **Read the failure instead of reporting it.** The run fails at step 9 of 9 after 101.5s. Claude reads the evidence, sees the app threw `Failed to fetch` on **Send code**, greps `.env.local` for the Supabase URL, and resolves the hostname: `NXDOMAIN`. Conclusive diagnosis, in its own words: the configured project URL is dead, so the page can never reach the backend.
4. **Reconcile the two passes.** Claude ties the live failure back to its own static review: the front-end wiring really was correct, and the failure sits entirely at the config layer. That is the pairing that makes the loop worth running, because neither pass alone gets you there.
5. **Author test cases from the real page.** With the `kane-cli` skill loaded, Claude runs `kane-cli generate` against the Buy Pro checkout flow and gets back 3 scenarios and 9 test cases, each tagged Positive, Negative, or Edge with a priority. It also flags a genuine discrepancy it noticed while grounding the cases: the landing page advertises `$19` while checkout charges `$29`.
6. **Save and commit the ones worth keeping.** `kane-cli generate --save --req ` writes them as runnable `_test.md` files, and `--refine --req ` adjusts coverage before saving. A committed `checkout_test.md` carries its own frontmatter, `mode: testing`, `max_steps: 25`, `timeout: 180`, and an `app_url` variable, with steps that assert the Pro total shows `$19.00`.
7. **Replay the suite and let the agent maintain it.** `kane-cli testmd run .testmuai/tests/kanecli-demo_test.md --agent` replays 12 cached steps with no LLM cost. On a later run it fails at step 7: the New-project modal's submit button had been renamed from **Create** to **Add project**, so the cached locator no longer matched. Claude reads the failure screenshot, correctly calls it an app change rather than a bug, and edits that one step so it re-authors against the current UI on the next run.
8. **Finish on a verdict you can act on.** The final session reports Passed in 18 steps and 127.2s, with an assertions table listing each expectation against what was actually found, and a link straight into the KaneAI dashboard.

## Lovable

Lovable builds the app and Kane CLI proves it works, without you opening the page yourself. The demo is a waitlist landing page for a fictional AI fitness product, tested end to end from inside Lovable's own sandbox.

1. **Build something.** The prompt is one line: *"Build a waitlist landing page for an AI fitness app. Email signup. Success message."* Lovable ships a dark-themed page with a hero, an email field validated with zod, and an animated success state.
2. **Ask it to test the page with Kane CLI.** Lovable is straight about the constraint: the OAuth flow needs an interactive browser on your machine and cannot run inside its sandbox.
3. **Complete the login on your side.** Run `npm install -g @testmuai/kane-cli` and `kane-cli login --oauth` in your own terminal, then give Lovable the username and access key from your dashboard credentials. It uses them only for `kane-cli login` in that sandbox.
4. **Let it find a browser.** Lovable checks for an available Chrome installation, finds Chromium, and points Kane CLI at it with `KANE_CLI_CHROME_PATH` before running anything.
5. **Run the flow as one sentence.** Navigate to the site, store the main heading as `heading`, verify an email input and a **Join Waitlist** button are present, type a test address, click the button, assert a success message containing "on the list" is visible, and store it as `success_message`, all with `--agent --headless --timeout 240`.
6. **Watch it adapt.** The Lovable preview URL requires a Lovable login, so the run switches to the public published URL instead and says so in the report.
7. **Read the result.** Test passed in 11 steps and 188s, with every captured value quoted back: the heading it read, the email it typed, and the exact success text the page rendered.
8. **Keep the test.** The run lands in Test Manager as **Join Waitlist and Verify Success Message**, with each assertion as its own replayable step alongside the recorded video.

## Cursor

The one-time passcode is usually where browser automation stops. In Cursor it is just another clause in the sentence.

The project is a Next.js app with Supabase email-OTP sign-in, and the whole test is typed straight into Cursor's integrated terminal:

```bash
kane-cli run "go to http://localhost:3000, log in with email 'you@example.com' using the OTP sent to my inbox, assert the page contains 'Welcome'"
```

Kane CLI authenticates, launches Chrome, and generates a task with checkpoints from that sentence. It navigates to the app, enters the email in the login form, clicks **Send code**, retrieves the six-digit passcode from the inbox, enters it, clicks **Verify**, then extracts the text of the centred welcome card and asserts it contains `Welcome`.

The run finishes with a plain-language summary of each of those steps and a share link to the generated test case, **Log In and Verify Welcome Message**, which replays the whole sign-in in Test Manager with the OTP step included. Nothing in the objective names a selector, and nothing in it works around the passcode.

## Gemini CLI

A complete find, fix, and re-verify loop without leaving the CLI. This is the clearest example on the page of a failing run being useful.

1. **Run the check.** From inside Gemini CLI: `kane-cli run "go to http://localhost:3000, click 'Buy Pro', assert the total due today shows '$19.00'" --agent`.
2. **The run fails, and it fails informatively.** Kane CLI stops after 27 steps with a `stuck.dag_cycle` error. The summary explains why: the checkout page showed a **Pay $29.00** button, which contradicts the assertion, and the agent kept navigating back and forth trying to reconcile the two. Observed price `$29.00`, expected price `$19.00`.
3. **Let the agent investigate the mismatch.** Gemini traces it through the codebase and finds the discrepancy: `app/page.js` advertises the Pro plan at `$19/mo` while `app/checkout/page.js` hardcodes `$29.00`.
4. **Apply the fix.** Gemini updates the checkout page to render `$19.00` for the Pro plan.
5. **Re-run the identical command.** The synthetic test now passes, ending on `/checkout?plan=Pro` with a total due today of `$19.00`, and reports the fix, the root cause, and the verification together.

The failure is what made the bug visible. A test that only passed would have told you nothing about the price the customer would actually have been charged.

## Kiro

Kane CLI ships as a first-class Kiro **Power**, so there is no skill file to place by hand.

1. **Install the Power.** Find **Kane CLI — Browser Automation & AI Test Authoring** by TestMu AI in Kiro's Powers panel and install it.
2. **Let it introduce itself.** On activation the Power states its three capabilities, ad-hoc browser tasks with `kane-cli run`, committable replayable tests with `kane-cli testmd`, and AI test-case authoring with `kane-cli generate`, then runs an onboarding check covering version, sign-in status, project, and folder so you know the setup is complete before you ask for anything.
3. **Build something to test.** In the demo, Kiro writes a small login app: `index.html`, a protected `dashboard.html`, shared styles, and an `auth.js` that tracks session state in `sessionStorage`, with two demo credentials and an inline error for wrong passwords.
4. **Ask for verification in one line.** *"Now open the local url and verify it works with kane cli."* Kiro activates the Power, loads its run instructions, confirms Kane CLI is installed and authenticated, starts a local server for the files, and runs the verification.
5. **Read the results card.** Login Flow Verification passed in 17 steps and 157s, with each check listed separately: the login page loads with both fields, the Sign in button is visible, a wrong password shows `Invalid username or password.`, correct credentials redirect to the dashboard URL, the dashboard greets `Welcome, Admin User!`, and the logout button is present.

Form validation, the error path, the successful auth, the redirect, and the protected page all verified from one sentence, with the run's `.evidence` pack kept locally for anything you want to inspect afterwards.

## Antigravity

The lightest possible install: hand the agent a URL and let it read the skill for itself.

1. **Build the app.** Antigravity builds a storefront clone with a hero slider, product details, a cart drawer, a location picker, search, and a checkout receipt, then serves it locally on `127.0.0.1:8080`.
2. **Point it at the hosted skill.** The prompt is literally *"Use Kane CLI to test the build end to end: testmuai.com/kane-cli/agents.md"*. There is no local skill file and nothing to configure. Antigravity fetches the markdown and follows it.
3. **Let it author a suite, not a one-off.** Antigravity writes an end-to-end test file, `amazon_clone_test.md`, covering the full purchase journey rather than a single assertion.
4. **Run it headless in the background.** `kane-cli testmd run amazon_clone_test.md --agent --headless` runs as a background task while Antigravity monitors the NDJSON stream and reports each step as it completes.
5. **Check the finished case.** The result lands in Test Manager as **Complete Purchase Flow with Location and Search**: open the cart widget, proceed to checkout, assert the success modal shows `Order Placed Successfully!` with the mock receipt, close it, then assert the cart count has reset to `0` and the cart icon shows an empty badge.

Use the hosted skill URL for any agent that has no dedicated integration. It is the same instruction set the installer writes to disk.

## GLM

Not every verification is functional. This one is a performance budget on a page built to look expensive.

GLM builds a cinematic, scroll-driven landing page for a premium audio brand: pinned scrubbed text, multi-layer parallax, animated gradients, and heavy grain, all wired with GSAP ScrollTrigger. That is exactly the kind of page where Core Web Vitals quietly go wrong, so the Kane CLI objective measures them after a real interaction rather than on a cold load:

- Navigate to the deployed page and wait for it to fully load.
- Click the **Technology** link in the top navigation once, so that a real user interaction has been measured, then wait two seconds.
- Read the DevTools Core Web Vitals once and report LCP, FCP, TTFB, CLS, and INP.
- Read each metric exactly once. If a metric is not available, record it as `not available` and move on immediately rather than retrying.
- Finally confirm that LCP is under 4000 ms and CLS is below 0.1, then end the run.

Kane CLI generates checkpoints from that description, scrolls the page to trigger lazy-loaded images and gallery requests, waits for each section to settle, and extracts the five metrics one at a time. The last step is the gate, and in the recorded run it is where the run ends rather than passing. That is the point of a budget: it holds the page to a number instead of to an impression, and it tells you the moment the number stops being met.

Note the `--max-steps` cap on the command. A measurement objective with this many discrete extractions benefits from an explicit ceiling.

## Patterns That Work in Any Agent

The walkthroughs above use different builders, but they are all assembling the same handful of moves. These are the ones worth copying into your own workflow.

### Verify a Change You Just Made

The highest-value use of Kane CLI inside a coding agent is closing the loop between writing code and knowing it works, without switching to a browser yourself.

1. Ask your agent to make the change as usual, for example *"Fix the discount code field so an expired code shows an inline error."*
2. Follow it with a verification request in the same conversation, for example *"Now verify it against localhost:3000."*
3. The agent builds a run from your description, for example `kane-cli run "go to the cart, apply the code 'EXPIRED10', assert the page shows 'This code has expired', assert no discount is applied to the total" --url http://localhost:3000/cart --agent --headless`.
4. It waits for the `run_end` event, the last line of the NDJSON stream, and reads `status`, `summary`, and `duration` from it.
5. It reports back in plain language whether the change works, quoting the assertions that passed or failed rather than telling you it "should" work.
6. If the run failed, the agent already has everything it needs to iterate. Ask it to fix and re-verify, and it repeats the loop until the assertions pass.

Ask for the verification in the same message as the change: *"…and verify it on staging when you're done."* The agent then treats a failing run as part of the task, not as a new one.

### Reproduce a Bug Report

Bug reports arrive as prose, which is exactly the input Kane CLI takes. Your agent can turn a ticket into a reproducible run without anyone translating it into a script first.

1. Paste the report into your agent, for example *"A user says the cart total does not update when they change the quantity. Can you reproduce it on staging?"*
2. The agent converts the description into an objective with explicit assertions, for example `go to the cart, store the total as 'before', change the quantity of the first item to 3, store the total as 'after', assert the after value is greater than the before value`.
3. It runs the command with `--agent --headless` and reads the result.
4. If the run fails, the bug is reproduced and the agent tells you exactly which step broke and what the two captured totals were.
5. If the run passes, the agent reports that it could not reproduce it and can suggest what else to vary, for example a different item, a signed-in versus guest session, or a different starting quantity.
6. Ask the agent to save the reproduction with `--name` so it becomes a permanent regression test once the bug is fixed.

### Diagnose a Failure From the Evidence Pack

A failed run is only useful if the agent can see why it failed. Every Kane CLI run writes an `.evidence` pack next to the results, so the agent reads the same proof a human would.

1. When a run fails, ask your agent to investigate, for example *"That failed. What actually happened?"*
2. The agent reads `run_dir` and `session_dir` from the `run_end` event, which point at the run's logs, step JSON, and screenshots.
3. It opens the evidence pack, which holds the step-by-step trace, screenshots, video, command, network and console logs, and the full NDJSON event stream.
4. It identifies the failing step and inspects the screenshot taken at that moment, so it can distinguish a genuine product bug from a selector that never resolved or a page that never finished loading.
5. It reports the `reason` field alongside the visual evidence, for example that the configured backend hostname does not resolve rather than simply that the assertion failed.
6. Ask it to act on the diagnosis. Because the agent has both the failing evidence and your source code in context, it can propose the fix and re-run the same objective to confirm it.

### Run Several Flows in Parallel

Verifying one flow at a time is slow when a change touches several areas. Coding agents can fan out across independent runs and report a single consolidated result.

1. Ask for the batch in one request, for example *"Verify login, search, checkout, and admin user management on staging, all at once."*
2. The agent spawns one sub-task per flow, each running its own self-contained `kane-cli run --agent --headless --timeout 120` command.
3. Each sub-objective must stand alone: it navigates to its own URL, authenticates independently, and asserts its own outcome. The agent splits your request along those lines.
4. Each sub-task parses its own `run_end` event and returns the status, step count, duration, summary, and, on failure, the failing step and screenshot path.
5. The agent merges the results into one pass-rate table so you read a single summary instead of four terminal streams.
6. Start with about four parallel runs. Each one launches its own Chrome instance at roughly 150 to 300 MB of RAM, so scale up only as your machine allows.

### Turn a Verified Run Into a Committed Test

An ad-hoc verification disappears when the conversation ends. This use case promotes a run that already passed into a replayable test that lives in your repo.

1. Ask your agent to keep the run, for example *"That checkout verification was good, save it as a test."*
2. The agent re-runs the objective with the `--name` flag, for example `--name checkout-flow`, which writes a `_test.md` file to `.testmuai/tests/`.
3. It moves the file into your repo, typically under `tests/`, and commits it alongside its `output-/` recording directory, which is commit-safe by design.
4. From then on the test replays from cache: no AI agent, no LLM cost, and much faster execution, as long as the step prose and config are unchanged.
5. Ask the agent to run the suite whenever you need it, for example `kane-cli testmd run ./tests/checkout_test.md --agent --headless`.
6. When a flow changes, ask the agent to edit only the affected step. Editing step N re-authors step N and every step after it, so a targeted edit keeps re-authoring cheap.

### Pre-Commit and Pre-PR Smoke Checks

The cheapest place to catch a broken flow is before the code leaves your machine. Your agent can gate its own work on a real browser run.

1. Tell the agent the rule once, for example *"Before you open a PR, run the login and checkout tests against my local server and don't push if either fails."*
2. The agent runs the committed tests rather than authoring new ones, for example `kane-cli testmd run ./tests/login_test.md --agent --headless --retry`.
3. It reads the exit code to decide what to do next: `0` passed, `1` failed, `2` an auth, setup, or parse error, and `3` a timeout or cancellation.
4. On a pass, it proceeds with the commit and PR as instructed.
5. On a failure, it stops, reads `Result.md` to see which step failed, and brings you the specific broken step rather than a wall of output.
6. Use the same commands in your pipeline so local and CI results are identical.

### Pull Live Data Into Your Agent's Context

Sometimes the agent needs a real value from a running application, not a verification: the actual price rendered on a page, the order ID a flow generated, or the current row count in a table.

1. Ask for the value explicitly, for example *"Get me the price and the SKU shown on the product page for the console on staging."*
2. The agent writes the objective with the explicit store syntax, for example `store the displayed price as 'price', store the SKU as 'sku'`. Vague phrasing like "tell me the price" does not reliably persist a value.
3. It reads the values back from the `final_state` field of the `run_end` event, for example with `tail -1 | jq -r '.final_state.price'`.
4. It uses those values in the rest of your task, for example to write a fixture, populate a test expectation, or compare production against staging.
5. Because the values came from a real rendered page, the agent is working from what users actually see rather than from what the database or the code suggests they should see.

### Keep Agent Runs Non-Interactive

An agent run that stops to ask a question hangs forever, because nothing is there to answer it. A few habits keep every agent-driven run unattended and reliable.

1. Always pair `--agent` with `--headless`. Without it, non-interactive environments hit display server errors.
2. Write objectives that never need mid-run input. The `ask_user` event is auto-disabled when stdin is not a TTY, which is always the case in agent and CI contexts, so an objective that depends on a prompt simply fails.
3. Set a `--timeout` on every run so a stuck page fails fast instead of blocking the agent's task.
4. Keep objectives under roughly fifteen steps. Longer objectives drift; ask the agent to split them into separate runs instead.
5. Pass credentials through a variables file rather than inline in the objective, so secrets never end up in the agent's transcript or your shell history.
6. Have the agent parse only the final line of stdout for the verdict. `run_end` is always last and carries the complete result.

### Maintain the Suite as the Product Changes

Test suites rot when the UI moves faster than the tests. A coding agent that can both read the failure and edit the test is well placed to keep the suite honest.

1. Run the suite and ask the agent to triage, for example *"Three tests failed overnight. Which are real bugs and which are stale tests?"*
2. For each failure the agent reads `Result.md` and the evidence pack, then compares what it sees against the change history in your repo.
3. It separates the two categories: a flow that genuinely broke, and a test whose expectations no longer match an intentional product change.
4. For genuine breakages it reports the bug with the failing step and screenshot as evidence.
5. For stale tests it edits the affected step's prose in the `_test.md` file. On the next run that step and everything after it re-author automatically, refreshing the recordings.
6. It commits the updated test files and their `output-/` directories so teammates and CI replay the corrected recordings.

## Next Steps

- [Skills](/support/docs/kane-cli-skills/): install and customize the skill for Claude Code, Codex CLI, or Gemini CLI
- [Agent Mode](/support/docs/kane-cli-agent-mode/): the `--agent` flag, the NDJSON event schema, and the `run_end` event
- [Test.md](/support/docs/kane-cli-testmd/): committable, replay-cached tests and the cascade rule
- [Generate Test Cases](/support/docs/kane-cli-generate/): author scenarios and cases from a plain-English description
- [Parallel Execution](/support/docs/kane-cli-parallel-execution/): fan out independent runs and consolidate the results
- [Error Codes](/support/docs/kane-cli-error-codes/): `result_code` values and the recommended action for each
