# Requirement Sources

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

A requirement source is any document kane-cli snapshots into the [context graph](/support/docs/kane-cli-assurance-context/) so use-cases can be extracted from it and cited back to it. Sources are ingested with `kane-cli context ingest`, and the same URLs are accepted by [`maintain reconcile --from`](/support/docs/kane-cli-assurance-maintain/) when the source later changes.

Only allowlisted media is accepted. Anything else is rejected with `UNSUPPORTED_MEDIA`, and each type has its own size cap, beyond which the ingest refuses with `FILE_TOO_LARGE`.

## Supported sources at a glance

| Source | How you pass it | Size cap | Citation granularity |
|---|---|---|---|
| Text and structured text | file path | 2 MB | per line |
| Images | file path | 5 MB | whole image |
| PDF | file path | 25 MB | per line, page-marked |
| Word (`.docx`) | file path | 25 MB | per line |
| Jira issue | issue URL | not stated | per line |
| Confluence page | page URL | not stated | per line |
| Linear issue | issue URL | not stated | per line |
| Linear document | document URL | not stated | per line |
| Public web page | page URL | not stated | per line |

## Files

### Text and structured text

`.txt`, `.md` and `.markdown`, plus the structured-text family `.json`, `.yaml` and `.yml`, `.toml`, `.xml`, and `.log`. Cited verbatim by line, up to 2 MB.

Structured files are ingested as-is, so a malformed JSON file is still citable evidence. Files must be valid UTF-8, otherwise the ingest refuses with `ENCODING_UNSUPPORTED`. A file with very long lines, for example minified JSON, ingests with a warning because line anchors lose granularity. Pretty-print it first if you want useful citations.

### Images

PNG, JPEG and WebP, up to 5 MB. An image is cited as a whole image, because there is no text to quote.

### PDF

Up to 25 MB. The document's text becomes the citable text, marked by page, and embedded images become citable parts of the same source.

PDFs need selectable text. A scanned document refuses with `PDF_NO_TEXT_LAYER` and a password-protected one with `PDF_ENCRYPTED`. Every refusal names its remedy, such as splitting a very large document or re-saving an encrypted one.

### Word documents

`.docx` up to 25 MB, converted to a plain-text projection covering the body, headers and footers, footnotes, and tables, with tracked changes shown as the final view. Embedded images become citable parts.

Anything not extracted leaves an explicit marker, so nothing vanishes silently. Password-protected files and legacy binary `.doc` are refused with save-as guidance.

## Remote sources

Remote sources are passed as a URL instead of a file path. Each requires the matching connection on your account, set up in the [Integrations screen](https://integrations.lambdatest.com). When a connection is missing or expired the ingest refuses up front and points you there.

### Jira issues

```bash
kane-cli context ingest https://<your-site>/browse/PROJ-123
```

Ingested: the summary, the description, custom fields, the attachment inventory with image attachments as citable parts, and all comments with author, timestamp and body, every line citable.

Comments are part of the issue's identity. If they cannot be read, the whole ingest refuses rather than recording the issue without them.

Re-running the URL is `unchanged` or `versioned`, exactly like a re-ingested file. The default source id is the lowercased issue key, and `--as` overrides it.

The project must be one of the integration's selected projects. An issue outside that set refuses and names the Integrations screen so you can add the project.

### Confluence pages

```bash
kane-cli context ingest https://<site>/wiki/spaces/<KEY>/pages/<id>/...
```

The same Atlassian connection serves Jira and Confluence, but it needs Confluence access. A Jira-only connection refuses up front with reconnect guidance.

Ingested: the title, space, labels, the page body with every line citable, and the attachment inventory with image attachments as citable parts.

Re-ingesting reads the latest page version, and identity follows content. An edit that changes nothing you would cite, or a bare version bump, is `unchanged`. A body change is `versioned`, with staleness flowing to items extracted from the old snapshot. The default source id is `page-`.

Short links such as `/wiki/x/...` are not supported. Open the page and use its full URL.

### Linear issues

```bash
kane-cli context ingest https://linear.app/<workspace>/issue/KEY-123
```

Slug, query and `#comment` variants of the same issue all converge on one source.

Ingested: the title, the description with every line citable, workflow fields covering status, priority, project and labels, all comments including threaded replies, and images both inline and attached as citable parts. Attachment links to other apps are listed, never fetched.

As with Jira, comments are part of the issue's identity, so a failed or partial comments read refuses the whole ingest.

Identity follows the issue itself. Renaming a team key continues the same source as a `versioned` update, while a recycled key, meaning the same key now pointing at a different issue, refuses with a retire or `--as` recovery path. The default source id is the lowercased key, for example `eng-42`, and `--as` overrides it.

### Linear documents

```bash
kane-cli context ingest https://linear.app/<workspace>/document/<slug>
```

The slug must end in the document's 12-hex id. The connection needs document access, and the refusal carries a resync hint otherwise.

Ingested: the document body with every line citable, plus its inline images. The default id is `doc-`, and `--as` overrides it.

Workspace pages, meaning project, team or view URLs, are not ingestable and refuse loudly. Ingest their issues or documents individually.

### Public web pages

```bash
kane-cli context ingest https://docs.example.com/guide
```

Any public page URL that is not a Jira issue, a Confluence page, or a Linear issue or document. The page is fetched and converted to text by the service, the CLI never fetches pages itself, with every line citable.

The default id is a slug of the URL plus a short hash, so the same URL always converges on the same source. `--as` adopts a custom id, and re-ingesting a different URL under an adopted id asks first on a terminal. Headless it refuses, so keep separate pages under separate ids.

Re-ingesting an unchanged page is `unchanged`. A content change is `versioned`, with staleness flowing to items extracted from the old snapshot. Title, redirect, status and timestamp changes never move the head.

A web source is always the live page. There is no point-in-time read. Inaccessible pages, whether not found, behind a login or paywall, bot-blocked, non-HTML, too large or timing out, refuse with the reason in plain language. Private and internal addresses are refused.

## Remote ids share one space

A Jira `ENG-42` and a Linear `ENG-42` both mint the source id `eng-42`. A URL whose id is already backed by a different kind of source refuses and offers a recovery, either retiring the existing source or adopting the new one under `--as`. It is never a silent replace.

Linear pages ingested as **web** sources before 0.8.6 remain separate sources. Retire them, or keep both, but be aware they will not converge with a natively ingested Linear source.

## Keeping a source current

When a source document changes, prefer [`kane-cli maintain reconcile`](/support/docs/kane-cli-assurance-maintain/) over a bare re-ingest. Reconcile records the same head move and triages what the change means for your suite, in one step. It accepts the same remote URLs listed here.

## Next steps

- [Building the context graph](/support/docs/kane-cli-assurance-context/) — ingest, extract, review.
- [Maintaining the suite](/support/docs/kane-cli-assurance-maintain/) — what to do when a source changes.
- [Designing tests](/support/docs/kane-cli-assurance-design/) — turn a trusted use-case into runnable tests.
