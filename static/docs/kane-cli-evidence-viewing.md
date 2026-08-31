# Viewing Evidence Packs

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

A sealed pack opens in the hosted viewer. When you serve a pack with `kane-cli evidence serve`, the server is local only and nothing is uploaded, because the viewer page reads the pack bytes from your machine.

## After a run

After a run in an interactive terminal, kane-cli offers to open the pack:

```text
View evidence in browser? (y/N)
```

Accepting starts a local server and opens the hosted viewer pointed at your pack.

In agent or non-interactive runs there is no prompt. kane-cli prints a hint line to stderr instead:

```text
evidence: view locally with `kane-cli evidence serve <path-to-pack>`
```

## `kane-cli evidence serve`

Serves one or more sealed packs to the hosted viewer:

```bash
kane-cli evidence serve .testmuai/evidence/<execution_id>.evidence
```

```text
serving 1 pack on http://127.0.0.1:54321
<execution_id>.evidence
pack    http://127.0.0.1:54321/<token>/<execution_id>.evidence
viewer  https://evidence.lambdatest.com/?pack=http%3A%2F%2F127.0.0.1%3A54321%2F...
press Ctrl-C to stop
```

Open the `viewer` URL in your browser.

| Flag | Description | Default |
|---|---|---|
| `--port ` | Pin the local port | ephemeral |
| `--viewer-url ` | Override the hosted viewer base URL | environment's viewer |
| `--env ` | Environment (`prod` or `stage`) | active profile's env |

`serve` accepts sealed `.evidence` files only. A live, unsealed pack directory is rejected.

Exit codes: `0` after a clean Ctrl-C shutdown, `2` for any bad input or a port that cannot be bound.


The server binds to `127.0.0.1` only and uses a random per-instance token in the URL path. Nothing is uploaded anywhere.


## The hosted viewer

The viewer at `https://evidence.lambdatest.com` is a static page that opens packs three ways:

- a `?pack=` query parameter, which is what `evidence serve` and the post-run offer construct for you,
- drag and drop of a `.evidence` file,
- a file picker.

It remembers your recently opened packs, and reads packs with ranged requests, so even a very large pack opens after fetching only a few kilobytes.

## Next steps

- [Debugging a failed run](/support/docs/kane-cli-evidence-debugging/) — what to look at first.
- [Validating packs](/support/docs/kane-cli-evidence-validate/) — if a pack will not open.
