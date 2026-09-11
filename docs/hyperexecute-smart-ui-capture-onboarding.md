---
id: hyperexecute-smart-ui-capture-onboarding
title: SmartUI Capture Onboarding with HyperExecute
hide_title: false
sidebar_label: SmartUI Capture Onboarding
description: Complete step-by-step guide to get started with SmartUI Capture on HyperExecute for visual regression testing. Learn setup, configuration, best practices, and troubleshooting.
keywords:
  - smart ui capture hyperexecute
  - smartui capture onboarding
  - visual regression testing hyperexecute
  - smartui cli capture
  - hyperexecute smartui integration
  - visual ui testing automation
url: https://www.testmuai.com/support/docs/hyperexecute-smart-ui-capture-onboarding/
site_name: TestMu AI
slug: hyperexecute-smart-ui-capture-onboarding/
canonical: https://www.testmuai.com/support/docs/hyperexecute-smart-ui-capture-onboarding/

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

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
          "name": "SmartUI Capture Onboarding with HyperExecute",
          "item": `${BRAND_URL}/support/docs/hyperexecute-smart-ui-capture-onboarding/`
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
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-smart-ui-capture-onboarding/"
    },
    "headline": "SmartUI Capture Onboarding with HyperExecute",
    "description": "Complete step-by-step guide to get started with SmartUI Capture on HyperExecute for visual regression testing. Learn setup, configuration, best practices, and troubleshooting.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-smart-ui-capture-onboarding/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "HyperExecute",
    "keywords": [
      "smart ui capture hyperexecute",
      "smartui capture onboarding",
      "visual regression testing hyperexecute"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Node.js v20.3 or higher (required for SmartUI CLI v4.x.x); npm or yarn package manager; TestMu AI account with active subscription; HyperExecute CLI installed (Download Guide); Basic understanding of:; Command Line Interface (CLI); YAML configuration files; JSON file structure; Visual regression testing concepts.",
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
        "name": "Here's the recommended structure",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "smartui-capture-project/\n\u251c\u2500\u2500 config.json              # SmartUI configuration\n\u251c\u2500\u2500 urlTest.json             # Test environment URLs\n\u251c\u2500\u2500 urlProd.json             # Production environment URLs\n\u251c\u2500\u2500 test/                    # Optional: Split test URLs\n\u2502   \u251c\u2500\u2500 urls_test_1.json\n\u2502   \u251c\u2500\u2500 urls_test_2.json\n\u2502   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 prod/                    # Optional: Split production URLs\n\u2502   \u251c\u2500\u2500 urls_prod_1.json\n\u2502   \u251c\u2500\u2500 urls_prod_2.json\n\u2502   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 hyperexecute.yaml        # HyperExecute configuration\n\u2514\u2500\u2500 package.json             # Node.js dependencies"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "If you're starting fresh, initialize a new Node.js project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "mkdir smartui-capture-project\ncd smartui-capture-project\nnpm init -y"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Global Installation (Recommended)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install -g @lambdatest/smartui-cli@4.1.54-beta.0"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Local Installation",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install @lambdatest/smartui-cli@4.1.54-beta.0"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "You can also clone the sample repository to get started quickly",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/smartui-playwright-sample",
        "text": "git clone https://github.com/LambdaTest/smartui-playwright-sample\ncd smartui-playwright-sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set Project Token",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export PROJECT_TOKEN=\"123456#1234abcd-****-****-****-************\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set Project Token",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "set PROJECT_TOKEN=\"123456#1234abcd-****-****-****-************\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set Project Token",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PowerShell",
        "text": "$env:PROJECT_TOKEN=\"123456#1234abcd-****-****-****-************\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set HyperExecute Credentials",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export LT_USERNAME=\"${YOUR_LAMBDATEST_USERNAME}\"\nexport LT_ACCESS_KEY=\"${YOUR_LAMBDATEST_ACCESS_KEY}\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set HyperExecute Credentials",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "set LT_USERNAME=\"${YOUR_LAMBDATEST_USERNAME}\"\nset LT_ACCESS_KEY=\"${YOUR_LAMBDATEST_ACCESS_KEY}\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set HyperExecute Credentials",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PowerShell",
        "text": "$env:LT_USERNAME=\"${YOUR_LAMBDATEST_USERNAME}\"\n$env:LT_ACCESS_KEY=\"${YOUR_LAMBDATEST_ACCESS_KEY}\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "You can generate a sample URL file using the SmartUI CLI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npx smartui config:create-web-static urls.json"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Manual URL File Creation",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n### URL File Structure\n\nEach URL object supports the following properties:\n\n| Property | Type | Required | Description |\n|----------|------|----------|-------------|\n| `name` | string | Yes | Unique identifier for the screenshot (used in SmartUI dashboard) |\n| `url` | string | Yes | The URL to capture |\n| `waitForTimeout` | number | No | Wait time in milliseconds before capturing (useful for lazy-loaded content) |\n\n:::caution Wait Timeout Best Practices\n- Use `waitForTimeout` only when necessary (e.g., for lazy-loaded components or async content)\n- Higher timeout values increase test execution time\n- Start with lower values (1000-3000ms) and increase if needed\n- Consider using `execute` options for more complex interactions\n:::\n\n### Splitting URLs for Parallel Execution\n\nFor large test suites, you can split URLs into multiple files for better parallel execution:\n\n```json title=\"test/urls_test_1.json\"\n[\n    {\n        \"name\": \"product_category_feature_a\",\n        \"url\": \"https://test.example.com/product-category/feature-a/\",\n        \"waitForTimeout\": 5000\n    },\n    {\n        \"name\": \"product_category_feature_b\",\n        \"url\": \"https://test.example.com/product-category/feature-b/\",\n        \"waitForTimeout\": 5000\n    }\n]"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Generate Configuration File",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npx smartui config:create config.json"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 15",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n### Configuration Options Explained\n\n#### Web Configuration\n\n- **browsers**: Array of browser names (`\"chrome\"`, `\"firefox\"`, `\"safari\"`, `\"edge\"`)\n- **viewports**: Array of viewport sizes\n  - `[1367]` - Full page screenshot at 1367px width\n  - `[1920, 1080]` - Viewport screenshot at 1920x1080\n\n#### Mobile Configuration\n\n- **devices**: Array of device names (e.g., `\"iPhone 14\"`, `\"Galaxy S24\"`, `\"Pixel 8\"`)\n- **orientation**: `\"portrait\"` or `\"landscape\"`\n- **fullPage**: `true` by default for mobile\n\n#### Lazy Loading Configuration\n\n- **enabled**: Enable lazy loading detection\n- **jumpBackToTop**: Scroll back to top after capturing\n- **scrollDelay**: Delay between scroll steps (milliseconds)\n- **scrollStep**: Pixels to scroll per step\n\n:::info Advanced Configuration\nFor more configuration options, refer to the [SmartUI SDK Config Options](/support/docs/smartui-sdk-config-options/) documentation.\n:::\n\n## Step 7: Create HyperExecute YAML Configuration\n\nCreate a `hyperexecute.yaml` file to configure HyperExecute execution settings.\n\n### Basic HyperExecute YAML\n\n```yaml title=\"hyperexecute.yaml\"\n---\nversion: 0.1\nglobalTimeout: 150\ntestSuiteTimeout: 150\ntestSuiteStep: 150\n\nrunson: win\n\nretryOnFailure: true\nmaxRetries: 1\n\nconcurrency: 1\n\nenv:\n  CACHE_DIR: node_modules_cache\n  PROJECT_TOKEN: ${PROJECT_TOKEN}\n\n# Dependency caching\ncacheKey: '{{ checksum \"package.json\" }}'\ncacheDirectories:\n  - ${CACHE_DIR}\n\npre:\n  # Install SmartUI CLI and dependencies\n  - npm install @lambdatest/smartui-cli@4.1.54-beta.0\n  - npm install playwright@1.57.0\n  - npx playwright install\n\ntestSuites:\n  - npx smartui capture urlTest.json --config config.json --buildName \"Test-Release-v1.0\"\n\njobLabel: ['HYP', 'SmartUI', 'Capture']"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "testSuites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n### HyperExecute YAML Parameters\n\n| Parameter | Description | Example |\n|-----------|-------------|---------|\n| `version` | YAML schema version | `0.1` |\n| `globalTimeout` | Maximum time for entire job (minutes) | `150` |\n| `testSuiteTimeout` | Maximum time per test suite (minutes) | `150` |\n| `runson` | Operating system (`win`, `mac`, `linux`) | `win` |\n| `concurrency` | Number of parallel test executions | `3` |\n| `retryOnFailure` | Retry failed tests | `true` |\n| `maxRetries` | Maximum retry attempts | `1` |\n| `pre` | Commands to run before test execution | Installation commands |\n| `testSuites` | Test commands to execute | SmartUI capture commands |\n| `matrix` | Matrix for parallel execution | Multiple URL files |\n\n:::info HyperExecute YAML Documentation\nFor detailed YAML configuration options, refer to the [HyperExecute YAML Documentation](/support/docs/hyperexecute-yaml-version0.2/).\n:::\n\n## Step 8: Execute Tests on HyperExecute\n\n### Download HyperExecute CLI\n\nDownload the HyperExecute CLI for your operating system:\n\n| Platform | Download Link |\n|----------|--------------|\n| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |\n| MacOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |\n| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |\n\n### Set Execute Permissions (MacOS/Linux)\n\n```bash\nchmod u+x ./hyperexecute"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Execute your tests using the HyperExecute CLI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "./hyperexecute --config hyperexecute.yaml"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Or with explicit credentials",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "./hyperexecute --user ${YOUR_LAMBDATEST_USERNAME} --key ${YOUR_LAMBDATEST_ACCESS_KEY} --config hyperexecute.yaml"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "You can enhance your capture commands with additional options",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "# With custom build name\nnpx smartui capture urlTest.json --config config.json --buildName \"Release-v1.0\"\n\n# With results export\nnpx smartui capture urlTest.json --config config.json --fetch-results results.json\n\n# With parallel execution\nnpx smartui capture urlTest.json --config config.json --parallel 3\n\n# Combined options\nnpx smartui capture urlTest.json --config config.json --buildName \"Release-v1.0\" --fetch-results results.json --parallel 3"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 1: Export Results JSON",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npx smartui capture urlTest.json --config config.json --fetch-results results.json"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 1: Export Results JSON",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npx smartui --config config.json exec --fetch-results results.json -- <execution-command>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "You can also fetch results using the Fetch Build Screenshots API endpoint",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "GET /build/screenshots?project_id=YOUR_PROJECT_ID&build_id=YOUR_BUILD_ID"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For projects with many URLs, split them into multiple files",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "test/\n  \u251c\u2500\u2500 urls_test_1.json  (10 URLs)\n  \u251c\u2500\u2500 urls_test_2.json  (10 URLs)\n  \u2514\u2500\u2500 urls_test_3.json  (10 URLs)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Use clear, descriptive names for your URLs",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"name\": \"product_category_feature_a\",\n  \"url\": \"https://example.com/product-category/feature-a/\"\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Organize your URLs into logical groups",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "project/\n\u251c\u2500\u2500 sections/\n\u2502   \u251c\u2500\u2500 section1_category_a.json    (200 URLs)\n\u2502   \u251c\u2500\u2500 section2_category_b.json    (200 URLs)\n\u2502   \u251c\u2500\u2500 section3_category_c.json     (200 URLs)\n\u2502   \u251c\u2500\u2500 section4_category_d.json     (200 URLs)\n\u2502   \u2514\u2500\u2500 section5_category_e.json    (200 URLs)\n\u251c\u2500\u2500 config.json\n\u2514\u2500\u2500 hyperexecute.yaml"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "testSuites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n**Step 3: Use Branching for Organization**\n\nEach section can run in its own branch or use build names to group:\n\n```bash\n# Option A: Use Smart Git with branches\nexport SMART_GIT=true\ngit checkout -b section1-category-a\nnpx smartui capture sections/section1_category_a.json --config config.json --buildName \"Section1-CategoryA\"\n\n# Option B: Use build names for grouping (single branch)\nnpx smartui capture sections/section1_category_a.json --config config.json --buildName \"Section1-CategoryA-Build\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Create a SmartUI project for each section",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "project/\n\u251c\u2500\u2500 category_a/\n\u2502   \u251c\u2500\u2500 urls_category_a.json\n\u2502   \u251c\u2500\u2500 config.json\n\u2502   \u2514\u2500\u2500 hyperexecute_category_a.yaml\n\u251c\u2500\u2500 category_b/\n\u2502   \u251c\u2500\u2500 urls_category_b.json\n\u2502   \u251c\u2500\u2500 config.json\n\u2502   \u2514\u2500\u2500 hyperexecute_category_b.yaml\n\u2514\u2500\u2500 category_c/\n    \u251c\u2500\u2500 urls_category_c.json\n    \u251c\u2500\u2500 config.json\n    \u2514\u2500\u2500 hyperexecute_category_c.yaml"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "testSuites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n**Step 4: Execute Projects Independently**\n\nRun each project separately or in parallel:\n\n```bash\n# Execute category A project\ncd category_a\nexport PROJECT_TOKEN=\"${PROJECT_TOKEN_CATEGORY_A}\"\n./hyperexecute --config hyperexecute_category_a.yaml\n\n# Execute category B project\ncd ../category_b\nexport PROJECT_TOKEN=\"${PROJECT_TOKEN_CATEGORY_B}\"\n./hyperexecute --config hyperexecute_category_b.yaml"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "You can also combine both strategies",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "# Production Project - Category A Section\nexport PROJECT_TOKEN=\"${PROJECT_TOKEN_PROD}\"\nexport SMART_GIT=true\ngit checkout -b production-category-a\nnpx smartui capture sections/category_a_prod.json --config config.json\n\n# Staging Project - Category A Section  \nexport PROJECT_TOKEN=\"${PROJECT_TOKEN_STAGING}\"\nexport SMART_GIT=true\ngit checkout -b staging-category-a\nnpx smartui capture sections/category_a_staging.json --config config.json"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Only test browsers that your users actually use",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"web\": {\n    \"browsers\": [\"chrome\", \"safari\", \"firefox\"]\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Test realistic viewport sizes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"viewports\": [\n    [1920],    // Desktop\n    [1366],    // Laptop\n    [768]      // Tablet\n  ]\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Start with minimal timeouts and increase only when needed",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"waitForTimeout\": 2000  // Start low, increase if needed\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set appropriate concurrency based on your test suite size",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "concurrency: 3  # For 20-30 URLs"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Configure timeouts based on your test duration",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "globalTimeout: 300      # 5 hours for large suites\ntestSuiteTimeout: 150    # 2.5 hours per suite"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Cache node_modules to speed up subsequent runs",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "cacheKey: '{{ checksum \"package.json\" }}'\ncacheDirectories:\n  - node_modules_cache"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Use descriptive build names that include",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "--buildName \"Test-Release-v1.0-2024-01-15\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Verify PROJECT_TOKEN is set correctly",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "   echo $PROJECT_TOKEN  # MacOS/Linux\n   echo %PROJECT_TOKEN%  # Windows CMD"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Check token format (should include #)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "   123456#1234abcd-****-****-****-************"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Check Node.js version",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "   node --version  # Should be v20.3 or higher"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Upgrade Node.js if needed",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "   # Using nvm\n   nvm install 20.3\n   nvm use 20.3"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Verify npm version",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "   npm --version"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Increase waitForTimeout in URL files",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "   {\n     \"name\": \"slow-page\",\n     \"url\": \"https://example.com/\",\n     \"waitForTimeout\": 10000\n   }"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Increase HyperExecute timeouts",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "   globalTimeout: 300\n   testSuiteTimeout: 300"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Reduce concurrency",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "   concurrency: 1  # Start with 1, increase gradually"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Test Locally First: Run SmartUI capture locally before HyperExecute",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "   npx smartui capture urlTest.json --config config.json"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "steps",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n### Scheduled Test Runs\n\nUse the `--scheduled` flag for scheduled test executions:\n\n```bash\nnpx smartui capture urlProd.json --config config.json --scheduled \"schedule-123\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Use environment variables in build names",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "testSuites:\n  - npx smartui capture urlTest.json --config config.json --buildName \"Build-${BUILD_NUMBER}\""
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "SmartUI Capture Onboarding with HyperExecute",
      "description": "Complete step-by-step guide to get started with SmartUI Capture on HyperExecute for visual regression testing. Learn setup, configuration, best practices, and troubleshooting.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Create a SmartUI Project",
          "text": "The first step is to create a SmartUI project in the dashboard. This project will contain all your builds and visual comparisons. Go to SmartUI Projects page Click on the New Project button Select the platform as CLI for executing your capture tests Add the following details: Project Name: A descriptive name (e.g., \"Example Company Visual Tests\") Approvers: Team members who can approve visual changes Tags: Optional tags for filtering and organization Click on Submit or Continue After creating the project, you will receive a PROJECTTOKEN. Save this token securely as you'll need it in the next steps. The token format looks like: 123456#1234abcd----*********",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-smart-ui-capture-onboarding/#step-1-create-a-smartui-project"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Set Up Your Project Structure",
          "text": "Create a new directory for your SmartUI Capture project or use an existing one. Here's the recommended structure: If you're starting fresh, initialize a new Node.js project:",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-smart-ui-capture-onboarding/#step-2-set-up-your-project-structure"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Install Dependencies",
          "text": "Install the required SmartUI CLI package. You can install it globally or locally in your project. You can also clone the sample repository to get started quickly:",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-smart-ui-capture-onboarding/#step-3-install-dependencies"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Configure Environment Variables",
          "text": "Set up your environment variables for authentication and configuration. The PROJECT_TOKEN is required for SmartUI CLI capture commands. For HyperExecute, you'll need your LambdaTest username and access key. Username and Access Key: Available in your LambdaTest Profile Project Token: Available in your SmartUI project settings after creation",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-smart-ui-capture-onboarding/#step-4-configure-environment-variables"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: Create URL Configuration Files",
          "text": "Create JSON files containing the URLs you want to test. Each URL entry should have a name, URL, and optional wait timeout. You can generate a sample URL file using the SmartUI CLI: Alternatively, create your URL file manually. Here's the structure: Each URL object supports the following properties: Use waitForTimeout only when necessary (e.g., for lazy-loaded components or async content) Higher timeout values increase test execution time Start with lower values (1000-3000ms) and increase if needed Consider using execute options for more complex interactions For large test suites, you can split URLs into multiple files for better parallel execution:",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-smart-ui-capture-onboarding/#step-5-create-url-configuration-files"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Step 6: Create SmartUI Configuration",
          "text": "Create a config.json file to configure browsers, viewports, and other SmartUI settings. Create config.json with your desired settings: browsers: Array of browser names (\"chrome\", \"firefox\", \"safari\", \"edge\") viewports: Array of viewport sizes [1367] - Full page screenshot at 1367px width [1920, 1080] - Viewport screenshot at 1920x1080 devices: Array of device names (e.g., \"iPhone 14\", \"Galaxy S24\", \"Pixel 8\") orientation: \"portrait\" or \"landscape\" fullPage: true by default for mobile enabled: Enable lazy loading detection jumpBackToTop: Scroll back to top after capturing scrollDelay: Delay between scroll steps (milliseconds) scrollStep: Pixels to scroll per step For more configuration options, refer to the SmartUI SDK Config Options documentation.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-smart-ui-capture-onboarding/#step-6-create-smartui-configuration"
        },
        {
          "@type": "HowToStep",
          "position": 7,
          "name": "Step 7: Create HyperExecute YAML Configuration",
          "text": "Create a hyperexecute.yaml file to configure HyperExecute execution settings. For running multiple URL files in parallel: For detailed YAML configuration options, refer to the HyperExecute YAML Documentation.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-smart-ui-capture-onboarding/#step-7-create-hyperexecute-yaml-configuration"
        },
        {
          "@type": "HowToStep",
          "position": 8,
          "name": "Step 8: Execute Tests on HyperExecute",
          "text": "Download the HyperExecute CLI for your operating system: Execute your tests using the HyperExecute CLI: Or with explicit credentials: You can enhance your capture commands with additional options:",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-smart-ui-capture-onboarding/#step-8-execute-tests-on-hyperexecute"
        },
        {
          "@type": "HowToStep",
          "position": 9,
          "name": "Step 9: Monitor Test Execution",
          "text": "Visit the HyperExecute Dashboard Find your job in the job list Click on the job to view detailed execution logs Monitor test progress in real-time After test execution completes, navigate to SmartUI Dashboard Select your project View the build with your specified build name Review captured screenshots Compare with baseline images (if available) Baseline Build: First build in a project (reference images) Comparison Build: Subsequent builds compared against baseline Mismatches: Visual differences detected between builds Approved: Manually approved visual changes Rejected: Visual changes that need fixing The SmartUI Reporter is a web-based tool that provides a comprehensive tabular view of your test results with statistics and export capabilities. From CLI Capture Command: From CLI Exec Command: From SmartUI API: You can also fetch results using the Fetch Build Screenshots API endpoint: Visit SmartUI Reporter Upload your results.json file (drag & drop or click to upload) View results in a tabular format with: Screenshot statistics Browser and viewport information Mismatch percentages Status indicators Direct links to baseline, captured, and diff images Export to PDF: Generate a comprehensive PDF report for sharing Export to CSV: Export data for analysis in spreadsheet applications For detailed information, see the Fetch Results Documentation.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-smart-ui-capture-onboarding/#step-9-monitor-test-execution"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Using SmartUI Reporter Tool",
      "description": "The SmartUI Reporter is a web-based tool that provides a comprehensive tabular view of your test results with statistics and export capabilities.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Export Results JSON",
          "text": "From CLI Capture Command: From CLI Exec Command: From SmartUI API: You can also fetch results using the Fetch Build Screenshots API endpoint:",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-smart-ui-capture-onboarding/#step-1-export-results-json"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Upload to Reporter",
          "text": "Visit SmartUI Reporter Upload your results.json file (drag & drop or click to upload) View results in a tabular format with: Screenshot statistics Browser and viewport information Mismatch percentages Status indicators Direct links to baseline, captured, and diff images",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-smart-ui-capture-onboarding/#step-2-upload-to-reporter"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Export Options",
          "text": "Export to PDF: Generate a comprehensive PDF report for sharing Export to CSV: Export data for analysis in spreadsheet applications For detailed information, see the Fetch Results Documentation.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-smart-ui-capture-onboarding/#step-3-export-options"
        }
      ]
    }
  ]) }}
/>

This comprehensive guide will walk you through setting up and running SmartUI Capture tests on HyperExecute. SmartUI Capture allows you to perform visual regression testing by capturing screenshots of static URLs across multiple browsers and devices, all orchestrated through HyperExecute's powerful test execution platform.

## Prerequisites

Before you begin, ensure you have the following:

- **Node.js v20.3 or higher** (required for SmartUI CLI v4.x.x)
- **npm** or **yarn** package manager
- **<BrandName /> account** with active subscription
- **HyperExecute CLI** installed ([Download Guide](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/))
- Basic understanding of:
  - Command Line Interface (CLI)
  - YAML configuration files
  - JSON file structure
  - Visual regression testing concepts

:::note Node.js Version Requirement
If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.
:::

## Overview

SmartUI Capture on HyperExecute combines the power of:
- **SmartUI CLI Capture**: Captures screenshots of static URLs across browsers and devices
- **HyperExecute**: Orchestrates and executes tests at scale with parallel execution
- **Visual Regression Testing**: Compares screenshots to detect UI changes

This integration is ideal for:
- Testing production and staging environments
- Monitoring website visual consistency
- Detecting UI regressions across multiple pages
- Running large-scale visual tests in parallel

## Step 1: Create a SmartUI Project

The first step is to create a SmartUI project in the dashboard. This project will contain all your builds and visual comparisons.

1. Go to [SmartUI Projects page](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/)
2. Click on the **New Project** button
3. Select the platform as **CLI** for executing your capture tests
4. Add the following details:
   - **Project Name**: A descriptive name (e.g., "Example Company Visual Tests")
   - **Approvers**: Team members who can approve visual changes
   - **Tags**: Optional tags for filtering and organization
5. Click on **Submit** or **Continue**

:::info Project Token
After creating the project, you will receive a `PROJECT_TOKEN`. Save this token securely as you'll need it in the next steps. The token format looks like: `123456#1234abcd-****-****-****-************`
:::

## Step 2: Set Up Your Project Structure

Create a new directory for your SmartUI Capture project or use an existing one. Here's the recommended structure:

<VerifiedTag value="Verified" />

```
smartui-capture-project/
├── config.json              # SmartUI configuration
├── urlTest.json             # Test environment URLs
├── urlProd.json             # Production environment URLs
├── test/                    # Optional: Split test URLs
│   ├── urls_test_1.json
│   ├── urls_test_2.json
│   └── ...
├── prod/                    # Optional: Split production URLs
│   ├── urls_prod_1.json
│   ├── urls_prod_2.json
│   └── ...
├── hyperexecute.yaml        # HyperExecute configuration
└── package.json             # Node.js dependencies
```

### Initialize Your Project

If you're starting fresh, initialize a new Node.js project:

<VerifiedTag value="Verified" />

```bash
mkdir smartui-capture-project
cd smartui-capture-project
npm init -y
```

## Step 3: Install Dependencies

Install the required SmartUI CLI package. You can install it globally or locally in your project.

### Global Installation (Recommended)

<VerifiedTag value="Verified" />

```bash
npm install -g @lambdatest/smartui-cli@4.1.54-beta.0
```

### Local Installation

<VerifiedTag value="Verified" />

```bash
npm install @lambdatest/smartui-cli@4.1.54-beta.0
```

:::tip Sample Repository
You can also clone the sample repository to get started quickly:

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/smartui-playwright-sample
cd smartui-playwright-sample
```

<a href="https://github.com/LambdaTest/smartui-playwright-sample" target="_blank" className='github__anchor'><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className='doc_img'/> View on GitHub</a>
:::

## Step 4: Configure Environment Variables

Set up your environment variables for authentication and configuration.

### Set Project Token

The `PROJECT_TOKEN` is required for SmartUI CLI capture commands.

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux' label='MacOS/Linux' default>

```bash
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value='Windows' label='Windows - CMD'>

```bash
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value='PowerShell' label='PowerShell'>

```powershell
$env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
</Tabs>

### Set HyperExecute Credentials

For HyperExecute, you'll need your LambdaTest username and access key.

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-1' label='MacOS/Linux' default>

```bash
export LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
export LT_ACCESS_KEY="${YOUR_LAMBDATEST_ACCESS_KEY}"
```

</TabItem>
<TabItem value="Windows-1" label='Windows - CMD'>

```bash
set LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
set LT_ACCESS_KEY="${YOUR_LAMBDATEST_ACCESS_KEY}"
```

</TabItem>
<TabItem value="PowerShell-1" label='PowerShell'>

```powershell
$env:LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
$env:LT_ACCESS_KEY="${YOUR_LAMBDATEST_ACCESS_KEY}"
```

</TabItem>
</Tabs>

:::info Getting Your Credentials
- **Username and Access Key**: Available in your [LambdaTest Profile](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile)
- **Project Token**: Available in your SmartUI project settings after creation
:::

## Step 5: Create URL Configuration Files

Create JSON files containing the URLs you want to test. Each URL entry should have a name, URL, and optional wait timeout.

### Create URL File Using CLI

You can generate a sample URL file using the SmartUI CLI:

<VerifiedTag value="Verified" />

```bash
npx smartui config:create-web-static urls.json
```

### Manual URL File Creation

Alternatively, create your URL file manually. Here's the structure:

<VerifiedTag value="Verified" />

```json title="urlTest.json"
[
    {
        "name": "homepage",
        "url": "https://test.example.com/",
        "waitForTimeout": 5000
    },
    {
        "name": "about_page",
        "url": "https://test.example.com/about/",
        "waitForTimeout": 5000
    },
    {
        "name": "contact_page",
        "url": "https://test.example.com/contact/",
        "waitForTimeout": 5000
    }
]
```

### URL File Structure

Each URL object supports the following properties:

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | string | Yes | Unique identifier for the screenshot (used in SmartUI dashboard) |
| `url` | string | Yes | The URL to capture |
| `waitForTimeout` | number | No | Wait time in milliseconds before capturing (useful for lazy-loaded content) |

:::caution Wait Timeout Best Practices
- Use `waitForTimeout` only when necessary (e.g., for lazy-loaded components or async content)
- Higher timeout values increase test execution time
- Start with lower values (1000-3000ms) and increase if needed
- Consider using `execute` options for more complex interactions
:::

### Splitting URLs for Parallel Execution

For large test suites, you can split URLs into multiple files for better parallel execution:

<VerifiedTag value="Verified" />

```json title="test/urls_test_1.json"
[
    {
        "name": "product_category_feature_a",
        "url": "https://test.example.com/product-category/feature-a/",
        "waitForTimeout": 5000
    },
    {
        "name": "product_category_feature_b",
        "url": "https://test.example.com/product-category/feature-b/",
        "waitForTimeout": 5000
    }
]
```

## Step 6: Create SmartUI Configuration

Create a `config.json` file to configure browsers, viewports, and other SmartUI settings.

### Generate Configuration File

<VerifiedTag value="Verified" />

```bash
npx smartui config:create config.json
```

### Manual Configuration

Create `config.json` with your desired settings:

<VerifiedTag value="Verified" />

```json title="config.json"
{
  "web": {
    "browsers": [
      "safari",
      "chrome"
    ],
    "viewports": [
      [1367]
    ]
  },
  "mobile": {
    "devices": [
      "iPhone 14",
      "iPad 10.2 (2021)",
      "Pixel 8"
    ],
    "orientation": "portrait"
  },
  "cliEnableJavaScript": true,
  "lazyLoadConfiguration": {
    "enabled": true,
    "jumpBackToTop": true,
    "scrollDelay": 250,
    "scrollStep": 250
  },
  "waitForTimeout": 5000
}
```

### Configuration Options Explained

#### Web Configuration

- **browsers**: Array of browser names (`"chrome"`, `"firefox"`, `"safari"`, `"edge"`)
- **viewports**: Array of viewport sizes
  - `[1367]` - Full page screenshot at 1367px width
  - `[1920, 1080]` - Viewport screenshot at 1920x1080

#### Mobile Configuration

- **devices**: Array of device names (e.g., `"iPhone 14"`, `"Galaxy S24"`, `"Pixel 8"`)
- **orientation**: `"portrait"` or `"landscape"`
- **fullPage**: `true` by default for mobile

#### Lazy Loading Configuration

- **enabled**: Enable lazy loading detection
- **jumpBackToTop**: Scroll back to top after capturing
- **scrollDelay**: Delay between scroll steps (milliseconds)
- **scrollStep**: Pixels to scroll per step

:::info Advanced Configuration
For more configuration options, refer to the [SmartUI SDK Config Options](/support/docs/smartui-sdk-config-options/) documentation.
:::

## Step 7: Create HyperExecute YAML Configuration

Create a `hyperexecute.yaml` file to configure HyperExecute execution settings.

### Basic HyperExecute YAML

<VerifiedTag value="Verified" />

```yaml title="hyperexecute.yaml"
---
version: 0.1
globalTimeout: 150
testSuiteTimeout: 150
testSuiteStep: 150

runson: win

retryOnFailure: true
maxRetries: 1

concurrency: 1

env:
  CACHE_DIR: node_modules_cache
  PROJECT_TOKEN: ${PROJECT_TOKEN}

# Dependency caching
cacheKey: '{{ checksum "package.json" }}'
cacheDirectories:
  - ${CACHE_DIR}

pre:
  # Install SmartUI CLI and dependencies
  - npm install @lambdatest/smartui-cli@4.1.54-beta.0
  - npm install playwright@1.57.0
  - npx playwright install

testSuites:
  - npx smartui capture urlTest.json --config config.json --buildName "Test-Release-v1.0"

jobLabel: ['HYP', 'SmartUI', 'Capture']
```

### Advanced HyperExecute YAML with Multiple Test Suites

For running multiple URL files in parallel:

<VerifiedTag value="Verified" />

```yaml title="hyperexecute.yaml"
---
version: 0.1
globalTimeout: 300
testSuiteTimeout: 300
testSuiteStep: 150

runson: win

retryOnFailure: true
maxRetries: 1

concurrency: 3

env:
  CACHE_DIR: node_modules_cache
  PROJECT_TOKEN: ${PROJECT_TOKEN}

cacheKey: '{{ checksum "package.json" }}'
cacheDirectories:
  - ${CACHE_DIR}

pre:
  - npm install @lambdatest/smartui-cli@4.1.54-beta.0
  - npm install playwright@1.57.0
  - npx playwright install

matrix:
  urlFile: ["urlTest.json", "urlProd.json"]

testSuites:
  - npx smartui capture ${urlFile} --config config.json --buildName "Build-${urlFile}"

jobLabel: ['HYP', 'SmartUI', 'Capture', 'Parallel']
```

### HyperExecute YAML Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `version` | YAML schema version | `0.1` |
| `globalTimeout` | Maximum time for entire job (minutes) | `150` |
| `testSuiteTimeout` | Maximum time per test suite (minutes) | `150` |
| `runson` | Operating system (`win`, `mac`, `linux`) | `win` |
| `concurrency` | Number of parallel test executions | `3` |
| `retryOnFailure` | Retry failed tests | `true` |
| `maxRetries` | Maximum retry attempts | `1` |
| `pre` | Commands to run before test execution | Installation commands |
| `testSuites` | Test commands to execute | SmartUI capture commands |
| `matrix` | Matrix for parallel execution | Multiple URL files |

:::info HyperExecute YAML Documentation
For detailed YAML configuration options, refer to the [HyperExecute YAML Documentation](/support/docs/hyperexecute-yaml-version0.2/).
:::

## Step 8: Execute Tests on HyperExecute

### Download HyperExecute CLI

Download the HyperExecute CLI for your operating system:

| Platform | Download Link |
|----------|--------------|
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| MacOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

### Set Execute Permissions (MacOS/Linux)

<VerifiedTag value="Verified" />

```bash
chmod u+x ./hyperexecute
```

### Run Tests

Execute your tests using the HyperExecute CLI:

<VerifiedTag value="Verified" />

```bash
./hyperexecute --config hyperexecute.yaml
```

Or with explicit credentials:

<VerifiedTag value="Verified" />

```bash
./hyperexecute --user ${YOUR_LAMBDATEST_USERNAME} --key ${YOUR_LAMBDATEST_ACCESS_KEY} --config hyperexecute.yaml
```

### Capture Command Options

You can enhance your capture commands with additional options:

<VerifiedTag value="Verified" />

```bash
# With custom build name
npx smartui capture urlTest.json --config config.json --buildName "Release-v1.0"

# With results export
npx smartui capture urlTest.json --config config.json --fetch-results results.json

# With parallel execution
npx smartui capture urlTest.json --config config.json --parallel 3

# Combined options
npx smartui capture urlTest.json --config config.json --buildName "Release-v1.0" --fetch-results results.json --parallel 3
```

## Step 9: Monitor Test Execution

### HyperExecute Dashboard

1. Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute)
2. Find your job in the job list
3. Click on the job to view detailed execution logs
4. Monitor test progress in real-time

### SmartUI Dashboard

1. After test execution completes, navigate to [SmartUI Dashboard](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/)
2. Select your project
3. View the build with your specified build name
4. Review captured screenshots
5. Compare with baseline images (if available)

### Understanding Results

- **Baseline Build**: First build in a project (reference images)
- **Comparison Build**: Subsequent builds compared against baseline
- **Mismatches**: Visual differences detected between builds
- **Approved**: Manually approved visual changes
- **Rejected**: Visual changes that need fixing

### Using SmartUI Reporter Tool

The [SmartUI Reporter](https://smartui-reporter.netlify.app/) is a web-based tool that provides a comprehensive tabular view of your test results with statistics and export capabilities.

#### Step 1: Export Results JSON

**From CLI Capture Command:**

<VerifiedTag value="Verified" />

```bash
npx smartui capture urlTest.json --config config.json --fetch-results results.json
```

**From CLI Exec Command:**

<VerifiedTag value="Verified" />

```bash
npx smartui --config config.json exec --fetch-results results.json -- <execution-command>
```

**From SmartUI API:**
You can also fetch results using the [Fetch Build Screenshots API endpoint](https://swagger-api-support.lambdatest.com/smartui/index.html#/Fetch%20Build%20Screenshots):

<VerifiedTag value="Verified" />

```
GET /build/screenshots?project_id=YOUR_PROJECT_ID&build_id=YOUR_BUILD_ID
```

#### Step 2: Upload to Reporter

1. Visit [SmartUI Reporter](https://smartui-reporter.netlify.app/)
2. Upload your `results.json` file (drag & drop or click to upload)
3. View results in a tabular format with:
   - Screenshot statistics
   - Browser and viewport information
   - Mismatch percentages
   - Status indicators
   - Direct links to baseline, captured, and diff images

#### Step 3: Export Options

- **Export to PDF**: Generate a comprehensive PDF report for sharing
- **Export to CSV**: Export data for analysis in spreadsheet applications

For detailed information, see the [Fetch Results Documentation](/support/docs/smartui-sdk-fetch-results/#using-smartui-reporter-tool).

## Best Practices

### 1. URL Organization

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='environment-separation' label='Environment Separation' default>

**Separate Test and Production URLs**

Keep test and production URLs in separate files:

- `urlTest.json` - Staging/test environment
- `urlProd.json` - Production environment

This allows you to test both environments independently.

</TabItem>

<TabItem value='url-splitting' label='URL Splitting'>

**Split Large URL Lists**

For projects with many URLs, split them into multiple files:

```
test/
  ├── urls_test_1.json  (10 URLs)
  ├── urls_test_2.json  (10 URLs)
  └── urls_test_3.json  (10 URLs)
```

This enables better parallel execution and easier management.

</TabItem>

<TabItem value='naming-conventions' label='Naming Conventions'>

**Use Descriptive Names**

Use clear, descriptive names for your URLs:

```json
{
  "name": "product_category_feature_a",
  "url": "https://example.com/product-category/feature-a/"
}
```

Avoid generic names like `"page1"` or `"test"`.

</TabItem>
</Tabs>

### 1.1. URL Grouping Strategies for Large Test Suites

When working with large numbers of URLs (e.g., 1000+ URLs) that can be logically divided into sections or groups (e.g., Section 1: Product Category A, Section 2: Product Category B, Section 3: Product Category C, etc.), you have two primary strategies for organizing your SmartUI projects:

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='grouping-strategy'>
<TabItem value='single-project-branching' label='Strategy 1: Single Project with Branching' default>

**Single Project with Branching Strategy**

Use a single SmartUI project and leverage SmartUI's branching capabilities to organize different URL groups within the same project.

#### How It Works

- **Single Project**: All URL groups/sections are managed in one SmartUI project
- **Branching Strategy**: Use SmartUI's [Smart Git feature](/support/docs/smartui-smart-git-strategy/) to create separate branches for each section/group
- **Unified Tracking**: All URLs and automation are tracked in a single project dashboard
- **Independent Baselines**: Each branch maintains its own baseline and comparison history

#### Implementation

**Step 1: Create URL Groups**

Organize your URLs into logical groups:

```
project/
├── sections/
│   ├── section1_category_a.json    (200 URLs)
│   ├── section2_category_b.json    (200 URLs)
│   ├── section3_category_c.json     (200 URLs)
│   ├── section4_category_d.json     (200 URLs)
│   └── section5_category_e.json    (200 URLs)
├── config.json
└── hyperexecute.yaml
```

**Step 2: Configure HyperExecute with Matrix**

Use HyperExecute matrix to run each section:

```yaml title="hyperexecute.yaml"
---
version: 0.1
globalTimeout: 300
testSuiteTimeout: 150

runson: win
concurrency: 5

env:
  PROJECT_TOKEN: ${PROJECT_TOKEN}
  SMART_GIT: true  # Enable Smart Git for branch management

pre:
  - npm install @lambdatest/smartui-cli@4.1.54-beta.0

matrix:
  section: ["section1_category_a", "section2_category_b", "section3_category_c", "section4_category_d", "section5_category_e"]

testSuites:
  - npx smartui capture sections/${section}.json --config config.json --buildName "${section}-Build"
```

**Step 3: Use Branching for Organization**

Each section can run in its own branch or use build names to group:

```bash
# Option A: Use Smart Git with branches
export SMART_GIT=true
git checkout -b section1-category-a
npx smartui capture sections/section1_category_a.json --config config.json --buildName "Section1-CategoryA"

# Option B: Use build names for grouping (single branch)
npx smartui capture sections/section1_category_a.json --config config.json --buildName "Section1-CategoryA-Build"
```

#### Use Cases

✅ **Best for:**
- Teams that want centralized project management
- Organizations needing unified reporting and analytics
- Projects where sections share common configuration
- Teams that want to track all URLs in one dashboard
- Scenarios requiring cross-section comparisons

✅ **Benefits:**
- Single project dashboard for all sections
- Unified baseline management
- Easier cross-section analysis
- Simplified project administration
- Single project token to manage

❌ **Not ideal for:**
- Teams requiring completely isolated section management
- Organizations with different approval workflows per section
- Projects where sections have vastly different configurations

</TabItem>

<TabItem value='separate-projects' label='Strategy 2: Separate Projects'>

**Separate Projects Strategy**

Create individual SmartUI projects for each URL group/section, providing complete isolation and independent management.

#### How It Works

- **Multiple Projects**: Each section/group has its own dedicated SmartUI project
- **Independent Management**: Each project operates independently with its own baseline, approvals, and settings
- **Minimal Projects**: Each project contains only one branch (typically `main` or `master`)
- **Clear Separation**: Complete bifurcation between different sections

#### Implementation

**Step 1: Create Separate Projects**

Create a SmartUI project for each section:

- Project 1: "Product Category A Visual Tests" → `PROJECT_TOKEN_1`
- Project 2: "Product Category B Visual Tests" → `PROJECT_TOKEN_2`
- Project 3: "Product Category C Visual Tests" → `PROJECT_TOKEN_3`
- Project 4: "Product Category D Visual Tests" → `PROJECT_TOKEN_4`
- Project 5: "Product Category E Visual Tests" → `PROJECT_TOKEN_5`

**Step 2: Organize URL Files**

```
project/
├── category_a/
│   ├── urls_category_a.json
│   ├── config.json
│   └── hyperexecute_category_a.yaml
├── category_b/
│   ├── urls_category_b.json
│   ├── config.json
│   └── hyperexecute_category_b.yaml
└── category_c/
    ├── urls_category_c.json
    ├── config.json
    └── hyperexecute_category_c.yaml
```

**Step 3: Configure Each Project Separately**

Each project has its own configuration and HyperExecute YAML:

```yaml title="category_a/hyperexecute_category_a.yaml"
---
version: 0.1
globalTimeout: 150
testSuiteTimeout: 150

runson: win
concurrency: 2

env:
  PROJECT_TOKEN: ${PROJECT_TOKEN_CATEGORY_A}  # Unique token per project

pre:
  - npm install @lambdatest/smartui-cli@4.1.54-beta.0

testSuites:
  - npx smartui capture urls_category_a.json --config config.json --buildName "CategoryA-Build"
```

**Step 4: Execute Projects Independently**

Run each project separately or in parallel:

```bash
# Execute category A project
cd category_a
export PROJECT_TOKEN="${PROJECT_TOKEN_CATEGORY_A}"
./hyperexecute --config hyperexecute_category_a.yaml

# Execute category B project
cd ../category_b
export PROJECT_TOKEN="${PROJECT_TOKEN_CATEGORY_B}"
./hyperexecute --config hyperexecute_category_b.yaml
```

#### Use Cases

✅ **Best for:**
- Teams requiring complete section isolation
- Organizations with different approval workflows per section
- Projects where sections have independent release cycles
- Teams needing separate access controls per section
- Scenarios where sections have different configurations

✅ **Benefits:**
- Complete isolation between sections
- Independent baseline management
- Separate approval workflows
- Individual project settings per section
- Clear project boundaries

❌ **Not ideal for:**
- Teams wanting unified reporting
- Organizations needing cross-section analysis
- Projects with shared configurations
- Teams preferring centralized management

</TabItem>
</Tabs>

#### Decision Matrix

Use this matrix to decide which strategy fits your needs:

| Requirement | Single Project with Branching | Separate Projects |
|-------------|------------------------------|-------------------|
| **Unified Dashboard** | ✅ Yes | ❌ No |
| **Cross-Section Analysis** | ✅ Yes | ❌ No |
| **Complete Isolation** | ❌ No | ✅ Yes |
| **Independent Approvals** | ⚠️ Partial (via branches) | ✅ Yes |
| **Project Management Complexity** | ✅ Lower | ❌ Higher |
| **Token Management** | ✅ Single token | ❌ Multiple tokens |
| **Configuration Sharing** | ✅ Easy | ❌ Requires duplication |
| **Reporting & Analytics** | ✅ Unified | ❌ Separate per project |

#### Hybrid Approach

You can also combine both strategies:

- **Major Sections**: Use separate projects (e.g., "Production URLs" vs "Staging URLs")
- **Sub-sections**: Use branching within each project (e.g., within "Production URLs", use branches for different product categories)

<VerifiedTag value="Verified" />

```bash
# Production Project - Category A Section
export PROJECT_TOKEN="${PROJECT_TOKEN_PROD}"
export SMART_GIT=true
git checkout -b production-category-a
npx smartui capture sections/category_a_prod.json --config config.json

# Staging Project - Category A Section  
export PROJECT_TOKEN="${PROJECT_TOKEN_STAGING}"
export SMART_GIT=true
git checkout -b staging-category-a
npx smartui capture sections/category_a_staging.json --config config.json
```

#### Best Practices for Large URL Sets

1. **Logical Grouping**: Group URLs by functionality, product category, or business domain
2. **Consistent Naming**: Use consistent naming conventions across groups
3. **Documentation**: Document which URLs belong to which section
4. **Regular Review**: Periodically review and reorganize groups as needed
5. **Parallel Execution**: Leverage HyperExecute's parallel execution for faster test runs

### 2. Configuration Management

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='config-practices'>
<TabItem value='browser-selection' label='Browser Selection' default>

**Select Relevant Browsers**

Only test browsers that your users actually use:

```json
{
  "web": {
    "browsers": ["chrome", "safari", "firefox"]
  }
}
```

Avoid testing unnecessary browsers to reduce execution time and costs.

</TabItem>

<TabItem value='viewport-optimization' label='Viewport Optimization'>

**Optimize Viewport Sizes**

Test realistic viewport sizes:

```json
{
  "viewports": [
    [1920],    // Desktop
    [1366],    // Laptop
    [768]      // Tablet
  ]
}
```

Focus on viewports your users actually use.

</TabItem>

<TabItem value='timeout-management' label='Timeout Management'>

**Optimize Wait Timeouts**

Start with minimal timeouts and increase only when needed:

```json
{
  "waitForTimeout": 2000  // Start low, increase if needed
}
```

Higher timeouts increase execution time.

</TabItem>
</Tabs>

### 3. HyperExecute Configuration

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='hyperexecute-practices'>
<TabItem value='concurrency' label='Concurrency' default>

**Optimize Concurrency**

Set appropriate concurrency based on your test suite size:

```yaml
concurrency: 3  # For 20-30 URLs
```

Too high concurrency may cause resource issues.

</TabItem>

<TabItem value='timeouts' label='Timeouts'>

**Set Realistic Timeouts**

Configure timeouts based on your test duration:

```yaml
globalTimeout: 300      # 5 hours for large suites
testSuiteTimeout: 150    # 2.5 hours per suite
```

Account for network latency and page load times.

</TabItem>

<TabItem value='caching' label='Dependency Caching'>

**Enable Dependency Caching**

Cache node_modules to speed up subsequent runs:

```yaml
cacheKey: '{{ checksum "package.json" }}'
cacheDirectories:
  - node_modules_cache
```

This significantly reduces setup time.

</TabItem>
</Tabs>

### 4. Build Naming

Use descriptive build names that include:
- Environment (Test/Prod)
- Version or release number
- Date or timestamp

<VerifiedTag value="Verified" />

```bash
--buildName "Test-Release-v1.0-2024-01-15"
```

### 5. Regular Baseline Updates

- Update baselines when intentional UI changes are made
- Review and approve changes regularly
- Keep baseline builds organized with clear naming

## Troubleshooting

### Common Issues and Solutions

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='authentication-errors' label='Authentication Errors' default>

**Issue**: `PROJECT_TOKEN is not set` or authentication failures

**Solutions**:
1. Verify `PROJECT_TOKEN` is set correctly:
   ```bash
   echo $PROJECT_TOKEN  # MacOS/Linux
   echo %PROJECT_TOKEN%  # Windows CMD
   ```

2. Check token format (should include `#`):
   ```
   123456#1234abcd-****-****-****-************
   ```

3. Verify token in SmartUI dashboard project settings

4. For HyperExecute, also verify `LT_USERNAME` and `LT_ACCESS_KEY`

</TabItem>

<TabItem value='node-version' label='Node.js Version Issues'>

**Issue**: Errors with SmartUI CLI v4.x.x

**Solutions**:
1. Check Node.js version:
   ```bash
   node --version  # Should be v20.3 or higher
   ```

2. Upgrade Node.js if needed:
   ```bash
   # Using nvm
   nvm install 20.3
   nvm use 20.3
   ```

3. Verify npm version:
   ```bash
   npm --version
   ```

</TabItem>

<TabItem value='timeout-issues' label='Timeout Issues'>

**Issue**: Tests timing out or incomplete captures

**Solutions**:
1. Increase `waitForTimeout` in URL files:
   ```json
   {
     "name": "slow-page",
     "url": "https://example.com/",
     "waitForTimeout": 10000
   }
   ```

2. Increase HyperExecute timeouts:
   ```yaml
   globalTimeout: 300
   testSuiteTimeout: 300
   ```

3. Check network connectivity and page load times

</TabItem>

<TabItem value='missing-screenshots' label='Missing Screenshots'>

**Issue**: Some URLs not captured or missing in dashboard

**Solutions**:
1. Verify URLs are accessible and return 200 status
2. Check for JavaScript errors on pages
3. Ensure `waitForTimeout` is sufficient for page load
4. Review SmartUI dashboard for error messages
5. Check HyperExecute logs for execution errors

</TabItem>

<TabItem value='parallel-execution' label='Parallel Execution Issues'>

**Issue**: Tests failing with parallel execution

**Solutions**:
1. Reduce concurrency:
   ```yaml
   concurrency: 1  # Start with 1, increase gradually
   ```

2. Split URLs into smaller files
3. Check system resources and network bandwidth
4. Verify HyperExecute account limits

</TabItem>

<TabItem value='yaml-syntax' label='YAML Syntax Errors'>

**Issue**: HyperExecute YAML parsing errors

**Solutions**:
1. Validate YAML syntax using online validators
2. Check indentation (YAML is space-sensitive)
3. Verify all required fields are present
4. Review [HyperExecute YAML documentation](/support/docs/hyperexecute-yaml-version0.2/)

</TabItem>
</Tabs>

### Debugging Tips

1. **Test Locally First**: Run SmartUI capture locally before HyperExecute:

   <VerifiedTag value="Verified" />

   ```bash
   npx smartui capture urlTest.json --config config.json
   ```

2. **Check Logs**: Review HyperExecute job logs for detailed error messages

3. **Verify Configuration**: Use `npx smartui --help` to verify CLI installation

4. **Test Individual URLs**: Test problematic URLs individually to isolate issues

5. **Monitor Dashboard**: Check both HyperExecute and SmartUI dashboards for errors

## Advanced Usage

### CI/CD Integration

Integrate SmartUI Capture with your CI/CD pipeline:

<VerifiedTag value="Verified" />

```yaml title=".github/workflows/smartui-capture.yml"
name: SmartUI Capture Tests

on:
  pull_request:
    branches: [main]
  workflow_dispatch:

env:
  LT_USERNAME: ${{ secrets.LT_USERNAME }}
  LT_ACCESS_KEY: ${{ secrets.LT_ACCESS_KEY }}
  PROJECT_TOKEN: ${{ secrets.PROJECT_TOKEN }}

jobs:
  smartui-capture:
    name: Execute SmartUI Capture
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v2

      - name: Install Dependencies
        run: |
          npm install @lambdatest/smartui-cli@4.1.54-beta.0
          npm install playwright@1.57.0
          npx playwright install

      - name: Run SmartUI Capture
        run: |
          npx smartui capture urlTest.json --config config.json --buildName "PR-${{ github.event.pull_request.number }}"

      - name: Fetch Results
        run: |
          npx smartui capture urlTest.json --config config.json --fetch-results results.json
```

### Scheduled Test Runs

Use the `--scheduled` flag for scheduled test executions:

<VerifiedTag value="Verified" />

```bash
npx smartui capture urlProd.json --config config.json --scheduled "schedule-123"
```

### Custom Build Names with Variables

Use environment variables in build names:

<VerifiedTag value="Verified" />

```yaml
testSuites:
  - npx smartui capture urlTest.json --config config.json --buildName "Build-${BUILD_NUMBER}"
```

## Next Steps

Now that you've set up SmartUI Capture with HyperExecute, explore these resources:

- **[SmartUI Dashboard Guide](/support/docs/smartui-guided-walkthrough/)**: Learn to manage tests and approve changes
- **[Baseline Management](/support/docs/smartui-baseline-management/)**: Understand baseline workflows
- **[Handling Dynamic Content](/support/docs/smartui-handle-dynamic-data/)**: Test pages with dynamic elements
- **[Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide/)**: Comprehensive troubleshooting solutions
- **[SmartUI CLI Reference](/support/docs/smartui-cli-complete-reference/)**: Complete CLI command reference
- **[HyperExecute Documentation](/support/docs/hyperexecute-running-your-first-job/)**: Learn more about HyperExecute
- **[SmartUI SDK with Playwright on HyperExecute](/support/docs/hyperexecute-smart-ui-sdk-using-playwright/)**: Run SmartUI SDK visual tests with Playwright on HyperExecute
- **[SmartUI SDK with Cypress on HyperExecute](/support/docs/hyperexecute-smart-ui-sdk-using-cypress/)**: Run SmartUI SDK visual tests with Cypress on HyperExecute

## Additional Resources

- [SmartUI CLI Documentation](/support/docs/smartui-cli/) - Complete CLI guide
- [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options/) - All configuration options
- [HyperExecute YAML Reference](/support/docs/hyperexecute-yaml-version0.2/) - YAML configuration details
- [SmartUI Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide/) - Common issues and solutions
- [LambdaTest Support](https://www.testmuai.com/support) - Get help from our support team

<nav aria-label='breadcrumbs'>
  <ul className='breadcrumbs'>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className='breadcrumbs__item breadcrumbs__item--active'>
      <span className='breadcrumbs__link'>SmartUI Capture Onboarding with HyperExecute</span>
    </li>
  </ul>
</nav>
