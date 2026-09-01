# How to Test Video Agents With TestMu AI Agent Testing

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

If you have built an AI agent that talks to people on camera, an AI interviewer, an onboarding assistant, or a triage front desk, testing it by hand does not scale. Someone has to join the session, play a role, sit through the whole conversation, and form an opinion. Do that ten times with ten personalities and you lose a day.

Video agent testing automates the whole loop. TestMu AI joins your agent's session as a simulated candidate with a real face and a real voice, holds an actual conversation with it, records the session, and grades what your agent did against criteria you write. You get back a recording you can watch, a transcript you can read, and a verdict you can trace to the exact moment that earned it.

The only requirement is a web URL that a person could join with a camera and a microphone. There is no phone number to dial and no SDK to install. You do not change your agent to make it testable. It fits QA and test engineers who need repeatable regression coverage, product owners who want evidence that a prompt change improved things, and engineering leads who need to know a release is safe before it ships.

## What You Can Test

You can test anything reachable at a web URL that a person could join with a camera and a microphone. If you can send a colleague a link and they can join the conversation in a browser, TestMu AI can test it.

| Target | Supported | Notes |
|---|---|---|
| Your agent's embeddable session link | Yes | Richest results. Where the platform exposes its own recording and transcript, TestMu AI uses them. |
| Your agent hosted on your own domain | Yes | TestMu AI records the session from the browser. |
| Any other joinable web session | Yes | Same as above. |
| Agents that only exist inside Zoom, Meet, or Teams | Not yet | See [Limits and Known Constraints](#limits-and-known-constraints). |

## Before You Start

Before you create a video agent, make sure you have the following in place.

1. **A joinable URL for the agent you want to test.** A staging URL is ideal. Every test is a real conversation with whatever is behind that link, so point it at an environment you are comfortable exercising.
2. **Video agent testing enabled for your organization.** This is switched on per organization. If you do not see the option when creating an agent, ask your administrator.
3. **A clear definition of what "working" means.** This is the part worth thinking about, because it is what makes results useful rather than decorative. The [success criteria](#success-criteria-decide-the-verdict) section covers it in depth.

Every session is a real conversation with whatever is behind the URL you supply. If you point it at production, it exercises production. Use a staging URL wherever you can.

## Core Concepts

Five concepts define a video agent test, and they nest inside one another. A scenario is the script for a situation, a session is one performance of it, and a suite is the whole show.

| Term | What it means |
|---|---|
| **Agent** | The thing under test. Configured once with the URL of your video agent. |
| **Scenario** | One situation you put your agent through, for example a candidate who answers everything in one word. Holds the candidate's brief and your success criteria. |
| **Persona** | The personality the simulated candidate wears. Changes tone, pacing, patience, and how the candidate reacts on camera. |
| **Suite** | A named group of scenarios you run together. Your regression pack. |
| **Session** | One actual conversation. A suite run produces many sessions, each with its own recording and verdict. |

## How to Run Your First Video Agent Test

A first run has five steps: create the agent, add scenarios, group them into a suite, run it, and read the results.

### Create the Agent

Choose the video agent type and give it a name. This is where you set the URL of the video agent under test.

### Add Scenarios

Add scenarios in any of three ways, and you can mix them in one suite.

- **Generate them.** Describe what your agent does, and TestMu AI drafts scenarios across a spread of situations. This is the fastest way to a first pack. Always read and edit what comes back.
- **Write them by hand.** Best for the specific bug you are chasing.
- **Bulk import a CSV.** Best when you already have a test matrix in a spreadsheet. Download the template from the import dialog.

### Group Scenarios Into a Suite

Group the scenarios you want to run together into a suite. A smoke suite of five to eight scenarios that you run on every change is worth more than a sprawling pack nobody runs.

### Run the Suite

Open the run dialog and fill in the fields below. These control who joins, how the candidate presents on camera, and how long the conversation runs.

| Field | What it does |
|---|---|
| **Target session URL** | Where TestMu AI joins. The agent you are testing. |
| **Candidate name** | The name typed into any lobby or name field. Individual scenarios can override this. |
| **Avatar face** | The face the simulated candidate wears on camera. |
| **Voice** | The voice the candidate speaks with, grouped by how it reads to a listener. |
| **Session length** | How long the candidate stays in the conversation. 30 to 600 seconds, 180 by default. TestMu AI leaves early when the conversation reaches its natural end, so this is a ceiling and not a target. |

### Read the Results

Sessions appear as they finish. Each session carries its own recording, transcript, and verdict. The [Reading Your Results](#reading-your-results) section covers how to read them.

## Writing Scenarios That Find Real Problems

Scenario quality decides whether your results are worth anything. A scenario has two parts that matter most: the description, which becomes the simulated candidate's brief, and the success criteria, which decide the verdict.

### Write the Description as a Brief, Not a Script

The candidate improvises. It watches your agent, listens, and responds in the moment. It is not reading lines. So the description should read like a briefing you would give an actor, not a screenplay.

Aim for 250 to 400 words. Short descriptions produce thin conversations. Cover the following.

- **The goal.** What is this person trying to accomplish.
- **The situation.** Who they are, and why they are here.
- **Objectives and boundaries.** What they want, and what they will not do. Frame this as intent that adapts, since your agent may go somewhere unexpected.
- **The personality.** How this person speaks, paces, reacts, and behaves on camera.
- **What your agent is expected to do.** The behavior under evaluation.
- **The failure modes you are hunting.** The tricky moment this scenario exists to provoke.

A scenario that says "candidate answers interview questions" tests nothing. A scenario that says "candidate answers the first two questions fully, then becomes distracted and starts giving one-word answers, to see whether the agent notices and re-engages" tests something real.

### Success Criteria Decide the Verdict

Criteria are the single highest-leverage thing you write. When a scenario has them, the verdict is anchored to them: your agent passes only if every criterion is met. Anything the evaluator cannot confirm counts as not met, which is deliberately strict. A criterion nobody can verify from the recording is not evidence of success.

Write criteria as observable, single facts. One behavior per criterion. If a criterion contains "and," it is probably two.

| Good | Weak | Why |
|---|---|---|
| "Agent greets the candidate on camera within the first 15 seconds" | "Agent is friendly" | Friendly is not observable. A greeting is. |
| "Agent asks at least three role-related questions" | "Agent conducts a good interview" | One is countable from the recording. |
| "Agent explains next steps before ending the session" | "Agent ends well" | Names the specific behavior. |
| "Agent re-engages when the candidate gives one-word answers" | "Agent handles difficult candidates" | Ties directly to what this scenario provokes. |

If you leave criteria off entirely, you still get a verdict, but it comes from the evaluator's general judgment rather than your definition of correct. That is useful for exploration, but it is not what you want in a regression pack.

### Scenario Categories You Can Target

When generating scenarios, you can steer toward specific situations. A good pack is weighted toward `error_recovery` and `edge_case`, because the happy path tends to work.

| Category | Surfaces |
|---|---|
| `greeting` | Openings, introductions, setting expectations |
| `task_completion` | Whether the agent gets its actual job done |
| `question_handling` | Asking, listening, following up |
| `error_recovery` | What happens after something goes wrong |
| `multi_turn` | Whether coherence survives a long conversation |
| `clarification` | Handling ambiguity instead of guessing |
| `edge_case` | The awkward situations real users produce |

### CSV Columns for Bulk Import

When you bulk import scenarios, the CSV uses the following columns. Download the template from the import dialog so the header row matches.

| Column | Notes |
|---|---|
| `title` | Short and descriptive |
| `description` | The candidate brief. See the briefing guidance above. |
| `persona` | The personality to wear |
| `expected_output` | Your success criteria, separated by semicolons |
| `interaction_mode` | `live` for a real conversation. Recommended. |
| `max_turns` | Conversation length ceiling |

## Covering More Ground With Fan-Out

A single scenario tested once tells you it worked once. Real confidence comes from the same situation under varied conditions. Each scenario can expand across four independent axes, and an empty axis counts as one, so a scenario with nothing set runs exactly once.

```text
avatar faces  x  personas  x  test profiles  x  iterations  =  sessions
```

| Axis | Use it to answer |
|---|---|
| **Avatar faces** | Whether your agent behaves the same regardless of who it sees. |
| **Personas** | Whether it holds up against a blunt candidate as well as a chatty one. |
| **Test profiles** | Whether it handles different data correctly. Profiles inject values such as names or reference numbers into the candidate, so it answers with real specifics rather than placeholders. |
| **Iterations** | Whether the behavior is consistent, or you got lucky. Up to 10. |

For a worked example, take two scenarios, three personas each, and two iterations: `2 x 3 x 2 = 12 sessions`. At three minutes each, running two at a time, that is roughly 18 minutes of wall clock.

Iterations deserve emphasis. Conversational agents are not deterministic. A behavior that appears once may not be real. Running a scenario three times and seeing the same failure twice is the difference between a bug report and a guess.

## Single Test vs Suite Run

You can run one ad-hoc test or a full suite. Start with single tests while you learn what your agent does, then move to suites once you know what you want to guard.

| | Single test | Suite run |
|---|---|---|
| **Use for** | Trying something quickly, reproducing a report | Regression packs, pre-release checks |
| **Scenarios** | One ad-hoc persona you type in | Your saved scenarios |
| **Fan-out** | No | Yes |
| **Where results land** | The video tests list | Grouped under that suite's run |

## Reading Your Results

Each session reports a status, a recording with transcript, and an evaluation. Read the status first to know whether the result reflects your agent or the test harness, then open the evaluation for the verdict.

### Session Status Values

A session ends in one of five states. Inconclusive is the one to understand, because it exists to protect your pass rate.

| Status | Meaning |
|---|---|
| **Pending** | Queued. Waiting for a slot. |
| **Running** | The conversation is happening now. |
| **Completed** | The session ran and was graded. The verdict is in the evaluation. |
| **Failed** | Something genuinely went wrong. TestMu AI never reached your agent, or grading could not produce a verdict. |
| **Inconclusive** | The test harness broke, not your agent. |

Inconclusive means a problem on the TestMu AI side, not yours. If the simulated candidate's video stream drops mid-session, the conversation may still read fine, but presentation can no longer be judged fairly. Rather than blame your agent for that, TestMu AI marks the run inconclusive and keeps it out of your pass rate. If you see these regularly, report it. It is a TestMu AI bug to fix, not yours.

### The Recording Tab

The Recording tab shows the session as it happened, plus the transcript. This is the fastest route from a verdict such as "the agent did not follow up" to seeing it not follow up.

- **Watch the recording.** Where your agent's platform exposes its own recording, you get its view. Otherwise you get the TestMu AI capture of the session.
- **Click any transcript line to jump to that moment.** Playback moves to the timestamp of the line you click.
- **Read the turn labels.** Turns are labelled so you can tell your agent's speech from the candidate's.
- **Download the recording** to attach to a bug report.

The transcript does not scroll itself while the video plays. Scrolling is yours, so you can read back through earlier turns without playback yanking you around.

### The Evaluation Tab

The Evaluation tab is laid out in the order that matters: the headline verdict, a short summary, your criteria one row at a time, and then pillar scores as diagnostics.

**1. The headline.** How many of your criteria were met, as a percentage, with a Pass or Fail, and counts of passed, failed, and could-not-verify.

**2. The summary.** A few sentences on how the conversation went.

**3. Your criteria, one row each.** This is the important part. Expand any row to see four columns.

| Column | What it gives you |
|---|---|
| **Expected** | What your agent was supposed to do |
| **Achieved** | What it actually did |
| **Evidence** | The quote or timestamp that proves it |
| **Confidence** | How certain the evaluator is |

Evidence is what makes a verdict actionable. You are never asked to take a failure on trust. Go to the timestamp and watch it.

**4. Pillar scores.** Each pillar is scored 0 to 10 as a diagnostic, not as the pass or fail basis. Every pillar scores your agent only. The simulated candidate is test equipment, so its face, its voice, and any glitch on the TestMu AI side are excluded and cannot lower your score.

| Pillar | Measures |
|---|---|
| **Conversation flow** | Turn-taking, talking over the candidate, pacing |
| **Question handling** | Whether the agent progressed through its task |
| **Response quality** | Relevance and correctness of what it said |
| **Avatar presentation** | Your agent's own lip-sync, facial motion, and audio and video quality |

Use pillars to explain a result, not to define one. A pass with a low conversation flow score is a real signal: your agent did what you asked, but the interaction was awkward.

### The Session Details Tab

The Session Details tab shows the configuration behind the run: which persona, which face, how long, and whether the join succeeded. It is useful when you compare two runs that behaved differently.

## How the Verdict Is Decided

The verdict is trustworthy because of what it is built on. Grading watches the actual session, anchors to your criteria, refuses to guess, and judges your agent rather than the test harness.

1. **The recording is the source of truth.** Grading watches the session, including its audio. Transcripts are supporting context. Text alone cannot tell you whether your agent interrupted someone or sat frozen.
2. **Your criteria anchor the verdict.** With criteria, the evaluator judges each one against the recording and derives the result from them. A pass requires all of them.
3. **Unverifiable is not a pass.** If a criterion cannot be confirmed from the recording, it does not count as met.
4. **The evaluation is about your agent.** It is not about the simulated candidate, and not about the TestMu AI infrastructure. Where a problem cannot be attributed confidently, the evaluator says so rather than penalize you.

## Limits and Known Constraints

Plan large runs around the following limits. Video sessions are heavy, so concurrency is the constraint that most affects wall-clock time.

| Constraint | Value |
|---|---|
| Session length | 30 to 600 seconds |
| Sessions per suite run | 50 |
| Sessions running at once | 2 per organization |
| Iterations per scenario | 10 |

Because sessions run two at a time per organization, a large suite queues rather than failing, and queued sessions show as Pending. A 24-session suite at three minutes each takes roughly 36 minutes.

Two things are not supported yet:

- Agents reachable only inside Zoom, Meet, or Teams. The requirement remains a joinable web URL.
- Scheduled recurring video runs.

## Getting Good Results

The difference between a decorative test pack and a useful one comes down to a few habits.

- **Start narrow.** Five scenarios covering the paths that matter, run on every change, beat fifty run once a quarter.
- **Weight toward failure.** Your happy path probably works. Interruptions, silence, hostility, ambiguity, and people who will not answer the question are where agents break.
- **Use iterations before you file a bug.** Run it three times. Twice is a bug. Once is a maybe.
- **Write criteria you could check yourself.** If you could not confirm it by watching the recording, neither can the evaluator.
- **Keep a stable smoke suite.** Same scenarios, same personas, every release. The value is in comparability over time.
- **Read the evidence on failures.** The timestamp usually tells you in ten seconds whether it is a real defect or a criterion that needs rewording.

## Troubleshooting Video Agent Tests

Most failed runs trace back to an unreachable URL, a thin scenario, or a criterion that cannot be observed. Match your symptom below.

### Every Session Failed With No Media

**What you see.** Every session in the run ends as Failed with no recorded conversation.

**Why it happens.** TestMu AI could not reach a live conversation at that URL.

**Fix.** Check the link is joinable in a browser from a clean session, and that it does not require a login, a waiting room, or an invitation.

### The Agent Barely Spoke

**What you see.** The recording is short and your agent produced only a few turns.

**Why it happens.** This is usually a thin scenario description. The candidate improvises from that brief, so a thin brief produces a thin conversation.

**Fix.** Enrich the scenario description toward the 250 to 400 word range, and check the session length is enough for the conversation you expect.

### A Criterion Keeps Returning "Cannot Verify"

**What you see.** The same criterion comes back as could-not-verify across runs.

**Why it happens.** The criterion is probably not observable from a recording, or it is compound.

**Fix.** Split the criterion into single behaviors and make each one concrete and observable.

### Results Feel Inconsistent Run to Run

**What you see.** The same scenario passes on one run and fails on the next.

**Why it happens.** These are non-deterministic conversations, so some variation is expected.

**Fix.** Raise iterations and judge on the pattern rather than a single run.

### Runs Keep Coming Back Inconclusive

**What you see.** Sessions repeatedly end as Inconclusive.

**Why it happens.** This points to a problem on the TestMu AI side, such as the candidate's video stream dropping mid-session.

**Fix.** Report it. Inconclusive runs are kept out of your pass rate, and this is a TestMu AI bug to fix.

## Frequently Asked Questions

Common questions about how video agent testing behaves and what it touches.

### Whether Video Agent Testing Touches Production

Only if you point it at production. Every session is a real conversation with whatever is behind the URL you supply. Use a staging URL where you can.

### Whether You Need to Change Your Agent

No. TestMu AI joins the way a person would, so you do not add an SDK or modify your agent.

### Testing Agents Built on Any Platform

Yes, provided the agent is reachable at a joinable web URL. Where your platform exposes its own recording and transcript, TestMu AI uses them for richer results.

### How Long Recordings Are Kept

Recordings are stored with your test results and are downloadable from the session view.

### Sharing a Result Outside the Tool

Download the recording and attach it. The transcript and evaluation are visible to anyone in your organization with access to the project.

### Whether Your Agent Is Scored on Candidate Video Quality

No. The simulated candidate is test equipment. Problems on the TestMu AI side are excluded from your score or mark the run Inconclusive.

## Related TestMu AI Guides

- See how to [test a voice agent](/support/docs/voice-agent/) for spoken conversations scored on transcribed audio.
- See how to [test a phone agent](/support/docs/phone-agent/) for voice agents reached over a real call.
- See how to [test an image analyzer](/support/docs/image-analyzer/) for scoring generated or uploaded images.
- See how the platform [runs an evaluation end to end](/support/docs/architecture-and-how-evaluation-works/).
