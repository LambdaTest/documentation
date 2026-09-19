---
id: browser-cloud-files
title: Files - TestMu AI Browser Cloud
hide_title: true
sidebar_label: Upload and Download Files
description: Upload, download, and manage files within cloud browser sessions in TestMu AI Browser Cloud.
keywords:
  - browser cloud files
  - file upload cloud browser
  - file download cloud browser
  - file transfer automation
  - browser file service
url: https://www.testmuai.com/support/docs/browser-cloud-files/
site_name: TestMu AI
slug: browser-cloud-files/
canonical: https://www.testmuai.com/support/docs/browser-cloud-files/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Browser Cloud",
          "item": `${BRAND_URL}/support/docs/what-is-browser-cloud/`
        },{
          "@type": "ListItem",
          "position": 4,
          "name": "Files",
          "item": `${BRAND_URL}/support/docs/browser-cloud-files/`
        }]
      })
    }}
></script>

# Upload and Download Files

Transfer files between your local machine and cloud browser sessions. Handle document uploads, file exports, and downloads without external storage services.


## Why You Need This

Your agent is filling out a government form that requires a document upload. The
form is running in a cloud browser, but the document is on your local machine.
Or your agent triggers a CSV download inside the cloud browser - a report, an
export, a receipt - and you need that file locally.

The File Service bridges the gap. It transfers files between your local machine
and a remote cloud browser on <BrandName /> Browser Cloud - without needing
external storage services like S3 or GCS. Files are sent directly through the
browser's page context using Base64 encoding.


## Upload a File to the Cloud Browser

```typescript
const fileBuffer = fs.readFileSync('document.pdf');
await client.files.uploadToSession(session.id, fileBuffer, 'document.pdf');
```

**How it works:** The buffer is Base64-encoded, sent to the cloud browser via
`page.evaluate()`, decoded in the browser, and set on the file input element.


## Download a File from the Cloud Browser

**By URL:**

```typescript
const result = await client.files.downloadFromSession(
    session.id,
    'https://example.com/report.csv'
);
fs.writeFileSync('report.csv', result);
```

**How it works:** The cloud browser fetches the URL, reads the response with
`FileReader`, converts to Base64, and returns the data back to Node.js.

For files triggered by button clicks (not direct URLs), the service uses CDP's
`Fetch.enable` to intercept the download.


## Session-Scoped File API

All file operations are also available under `client.sessions.files`:

```typescript
await client.sessions.files.upload(session.id, buffer, 'file.txt');

const files = await client.sessions.files.list(session.id);

const data = await client.sessions.files.download(session.id, '/path/to/file');

const archive = await client.sessions.files.downloadArchive(session.id);

await client.sessions.files.delete(session.id, '/path/to/file');

await client.sessions.files.deleteAll(session.id);
```


## File Info

```typescript
interface FileInfo {
    path: string;
    name: string;
    size: number;
    createdAt: string;
    mimeType?: string;
}
```

Files are stored locally in a `.files/` directory organized by session ID.




<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="/support/docs/what-is-browser-cloud/">
        Browser Cloud
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Files
      </span>
    </li>
  </ul>
</nav>
