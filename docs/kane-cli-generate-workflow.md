---
id: kane-cli-generate-workflow
title: The Generate Workflow
sidebar_label: Workflow
description: "Walk the kane-cli generate loop end to end: generate, refine in plain language, save functional cases as _test.md files, and run them with testmd. Includes worked examples, agent/CI automation, and exit codes."
keywords:
  - kane cli generate workflow
  - kane cli test case generation
  - generate refine save run
  - kane cli ai test cases
  - kaneai
  - testmu ai
  - browser test automation
url: https://www.testmuai.com/support/docs/kane-cli-generate-workflow/
site_name: TestMu AI
slug: kane-cli-generate-workflow/
canonical: https://www.testmuai.com/support/docs/kane-cli-generate-workflow/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.testmuai.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.testmuai.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Kane CLI",
          "item": "https://www.testmuai.com/support/docs/kane-cli-introduction/"
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/kane-cli-generate-workflow/"
    },
    "headline": "The Generate Workflow",
    "description": "Walk the kane-cli generate loop end to end: generate, refine in plain language, save functional cases as _test.md files, and run them with testmd. Includes worked examples, agent/CI automation, and exit codes.",
    "url": "https://www.testmuai.com/support/docs/kane-cli-generate-workflow/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Kane CLI",
    "keywords": [
      "kane cli generate workflow",
      "kane cli test case generation",
      "generate refine save run"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Start with a plain-language description of what you want covered",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "kane-cli generate \"checkout flow on a shopping site\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "kane-cli generates scenarios and cases and prints the result, ending with a request id and the exact commands to refine or save it",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\u2713 Generated 3 scenarios \u00b7 11 cases  (request 23271)\n\n\u25b8 Login\n   - Valid credentials [Positive]\n   - Wrong password [Negative]\n   - Empty fields [Edge]\n\u25b8 Checkout\n   - Guest checkout [Positive]\n   - Expired card [Negative]\n   ...\n\n  Refine:  kane-cli generate \"<refinement>\" --refine --req 23271\n  Save:    kane-cli generate --save --req 23271"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Bound the size with limits when you want a tighter or broader set",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "kane-cli generate \"checkout flow on a shopping site\" --scenario-limit 4 --per-scenario-limit 6"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Each refine is a fresh command with --refine --req",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "kane-cli generate \"also cover an expired card and an out-of-stock item\" --refine --req 23271\nkane-cli generate \"drop the social-login scenario, focus on guest checkout\" --refine --req 23271"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Answer it by refining with your answer",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "kane-cli generate \"target staging\" --refine --req 23271"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "--save writes the functional cases as _test.md files",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "kane-cli generate --save --req 23271"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "By default this writes under /.testmuai/tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": ".testmuai/tests/\n  checkout-23271/\n    login/\n      valid-credentials_test.md\n      wrong-password_test.md\n    checkout/\n      guest-checkout_test.md\n      ..."
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Choose a different location with --out, and name the suite with --name",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "kane-cli generate --save --req 23271 --out ./tests --name checkout-suite"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run any of them with testmd",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "kane-cli testmd run .testmuai/tests/checkout-23271/checkout/guest-checkout_test.md"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Automating it (agents / CI)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "kane-cli generate \"checkout flow on a shopping site\" --agent\nkane-cli generate \"add an expired-card case\" --refine --req 23271 --agent\nkane-cli generate --save --req 23271 --agent"
      }
    ],
    "dateModified": "2026-07-03T19:09:57+05:30"
  }) }}
/>

`kane-cli generate` is built around a simple loop: **generate → refine → save → run**. Each command is one turn that exits when done; you move between turns with the request id. This page walks the loop end to end. For the feature overview and option reference, see [Generating test cases with AI](/support/docs/kane-cli-generate/).

## 1. Generate

Start with a plain-language description of what you want covered:

```bash
kane-cli generate "checkout flow on a shopping site"
```

kane-cli generates scenarios and cases and prints the result, ending with a **request id** and the exact commands to refine or save it:

```
✓ Generated 3 scenarios · 11 cases  (request 23271)

▸ Login
   - Valid credentials [Positive]
   - Wrong password [Negative]
   - Empty fields [Edge]
▸ Checkout
   - Guest checkout [Positive]
   - Expired card [Negative]
   ...

  Refine:  kane-cli generate "<refinement>" --refine --req 23271
  Save:    kane-cli generate --save --req 23271
```

Keep the request id, every later command uses it.

Bound the size with limits when you want a tighter or broader set:

```bash
kane-cli generate "checkout flow on a shopping site" --scenario-limit 4 --per-scenario-limit 6
```

Add `--memory` to reuse relevant existing cases and avoid duplicating coverage you already have.

## 2. Refine

Refinement is a plain-language conversation. Each refine is a fresh command with `--refine --req <id>`:

```bash
kane-cli generate "also cover an expired card and an out-of-stock item" --refine --req 23271
kane-cli generate "drop the social-login scenario, focus on guest checkout" --refine --req 23271
```

Each refine returns the updated result. Repeat until the set looks right.

### When generation asks a question

Sometimes a turn ends by asking you something instead of finishing, for example, *"Which environment should these target, staging or production?"* This is a normal outcome, not a failure (the command exits `0`). Answer it by refining with your answer:

```bash
kane-cli generate "target staging" --refine --req 23271
```

(Driving this from a script or agent? Add `--agent` (or rely on it being auto-on when stdin is not a TTY) and read the answer-needed signal from the NDJSON, then re-invoke the same way.)

## 3. Save

When you are happy with the set, save it. `--save` writes the **functional** cases as `_test.md` files:

```bash
kane-cli generate --save --req 23271
```

By default this writes under `<cwd>/.testmuai/tests`:

```
.testmuai/tests/
  checkout-23271/
    login/
      valid-credentials_test.md
      wrong-password_test.md
    checkout/
      guest-checkout_test.md
      ...
```

Choose a different location with `--out`, and name the suite with `--name`:

```bash
kane-cli generate --save --req 23271 --out ./tests --name checkout-suite
```

Only functional cases are written: non-functional cases (Security, Performance, …) are part of the generated result but are not saved as runnable tests. See [Saving is functional-only](/support/docs/kane-cli-generate/#saving-is-functional-only).

## 4. Run

The saved files are ordinary `_test.md` tests. Run any of them with `testmd`:

```bash
kane-cli testmd run .testmuai/tests/checkout-23271/checkout/guest-checkout_test.md
```

From here, everything in the [testmd docs](/support/docs/kane-cli-testmd/) applies: replay from cache, edit steps, compose with `@import`, and commit the output to git.

## Automating it (agents / CI)

Pass `--agent` (auto-on when stdin is not a TTY) to get structured NDJSON on stdout instead of the human display, so a script or coding agent can drive the loop:

```bash
kane-cli generate "checkout flow on a shopping site" --agent
kane-cli generate "add an expired-card case" --refine --req 23271 --agent
kane-cli generate --save --req 23271 --agent
```

Each command prints one JSON object per line; the final line is the terminal event carrying the request id, the status, and the refine/save commands to run next.

## Exit codes

| Code | Meaning |
|---|---|
| `0` | Turn completed, including a turn that ended with a clarification question |
| `1` | Generation failed |
| `2` | Error: authentication / setup / transport, or an invalid combination of flags |
| `3` | Generation stopped or cancelled |
| `130` | Interrupted (Ctrl-C) |

Invalid flag combinations exit `2` with a message explaining the fix, for example using `--refine` without `--req`, passing a description with `--save`, using `--out` without `--save`, or `--req` without `--refine` or `--save`.

## Next steps

- [Generating test cases with AI](/support/docs/kane-cli-generate/): overview, modes, and the full option reference.
- [Running tests with testmd](/support/docs/kane-cli-testmd/): run and replay the files `--save` produces.
