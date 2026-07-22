---
id: image-analyzer
title: Image Analyzer Testing With TestMu AI
hide_title: false
sidebar_label: Image Analyzer
description: Test image generation and analysis agents on TestMu AI. Score images against a prompt with a 0 to 100 alignment score, brand rules, and technical specs.
keywords:
 - image analyzer testing
 - image generation testing
 - visual alignment score
 - ai image evaluation
 - image quality testing
url: https://www.testmuai.com/support/docs/image-analyzer/
site_name: TestMu AI
slug: image-analyzer/
canonical: https://www.testmuai.com/support/docs/image-analyzer/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Image Analyzer Testing",
          "item": `${BRAND_URL}/support/docs/image-analyzer`
        }]
      })
    }}
></script>

# Image Analyzer Testing With TestMu AI

---

The Agent Testing Platform tests an image agent by submitting prompts or images and scoring the returned output against the prompt and any criteria you define. Each image gets a Quality Score from 0 to 100, plus a breakdown of what matched and what did not. It covers image generation, content moderation, and photo validation.

You upload images by file or URL, define what a correct image looks like, and the platform scores them. A single run analyzes up to 50 images, which suits regression testing after a model update.

## Features

---

**Image Analysis.** Upload single images or batch-process up to 50 at once, by file upload, URL, or drag and drop. Supported formats are JPG, JPEG, PNG, GIF, WEBP, and BMP, with a maximum of 20 MB per image.

**Custom Evaluation Criteria.** Score images against your own rules, in three types, each toggleable active or inactive:

- **Brand guidelines:** allowed and prohibited colors, required fonts, and logo requirements.
- **Technical specifications:** dimensions (width by height), aspect ratio, allowed formats, maximum file size, and minimum resolution.
- **Custom rules:** freeform rule text and checklist items.

All criteria support create, edit, delete, and search by name, description, or type.

**Analysis History.** Search past analyses by image name or prompt, track status (Pending, Completed, Failed), open any analysis for full results, and bookmark important ones.

**Analytics Dashboard.** View overall statistics (average, highest, and lowest score, and total count), a 30-day quality trend with a daily bar chart, and the top 20 prompts ranked by average score.

## Metrics

---

Each image is scored on a single Quality Score from 0 to 100, plus a set of qualitative outputs.

| Metric | Scale | What it measures |
|--------|-------|------------------|
| **Quality Score** | 0 to 100 | Overall image quality and prompt adherence |
| **Matches** | List | Elements that correctly match the original prompt |
| **Discrepancies** | List | Missing or incorrect elements versus the prompt |
| **Overall Assessment** | Text | Summary of how well the image matches the prompt |
| **Detailed Observations** | Text | In-depth analysis of specific image aspects |

Quality Score bands: 90 to 100 excellent, 80 to 89 good, 60 to 79 fair, and 0 to 59 poor. For each active custom criterion, results show a Pass, Fail, or Partial status with compliance details.

## Related TestMu AI Guides

---

- See how the platform [runs an evaluation end to end](/support/docs/architecture-and-how-evaluation-works/).
