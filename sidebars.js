module.exports = {
  apiSidebar: [
    "getting-started-with-hyperexecute",
    "real-time-testing",
    "smart-visual-regression-testing",
    "analytics-overview",
    "test-intelligence-overview",
    "capability-map",
    "visual-ui-testing",
    "lt-browser",
    "testing-locally-hosted-pages",
    "bug-tracking-tools",
    "settings-and-security",
  ],

  // 'support-start', 'tas-overview', 'app-automation', 'web-automation', 'getting-started', 'getting-started-with-cypress-testing', 'playwright-testing-guide', 'puppeteer-testing-guide', 'k6-browser-testing', 'app-automation-app-sim','getting-started-with-appium-testing', 'getting-started-with-espresso-testing', 'getting-started-with-xcui-testing', 'record-and-replay',

  HyperExecuteSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "category",
        collapsed: true,
        label: "Getting Started",
        link: {
          type: "doc",
          id: "getting-started-with-hyperexecute",
        },
        items: [
          {
            type: "doc",
            label: "Running Your First Job on HyperExecute",
            id: "hyperexecute-running-your-first-job",
          },
          {
            type: "doc",
            label: "Guided Walkthrough",
            id: "hyperexecute-guided-walkthrough",
          },
          {
            type: "doc",
            label: "HyperExecute vs Traditional Grids",
            id: "hyperexecute-vs-traditional-test-grids",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "HyperExecute YAML",
        link: {
          type: "doc",
          id: "hyperexecute-yaml-parameters",
        },
        items: [
          {
            type: "doc",
            label: "Deep Dive into HyperExecute YAML",
            id: "deep-dive-into-hyperexecute-yaml",
          },
          {
            type: "doc",
            label: "Using Snooper on HyperExecute",
            id: "hyperexecute-snooper",
          },
          {
            type: "doc",
            label: "Inherit Your YAML Configurations",
            id: "hyperexecute-inherit-config",
          },
          {
            type: "doc",
            label: "HyperExecute Yaml Version 0.2",
            id: "hyperexecute-yaml-version0.2",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "HyperExecute CLI",
        link: {
          type: "doc",
          id: "hyperexecute-cli-run-tests-on-hyperexecute-grid",
        },
        items: [
          {
            type: "doc",
            label: "HyperExecute GUI for CLI",
            id: "hyperexecute-cli-gui",
          },
          {
            type: "doc",
            label: "GitIgnore and HyperexecuteIgnore",
            id: "hyperexecute-gitignore",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Key features of HyperExecute",
        link: {
          type: "doc",
          id: "key-features-of-hyperexecute",
        },
        items: [
          {
            type: "category",
            collapsed: true,
            label: "Test Splitting and Multiplexing",
            link: {
              type: "doc",
              id: "hyperexecute-test-splitting-and-multiplexing",
            },
            items: [
              {
                type: "doc",
                label: "Auto Split Strategy",
                id: "hyperexecute-auto-split-strategy",
              },
              {
                type: "doc",
                label: "Matrix Multiplexing Strategy",
                id: "hyperexecute-matrix-multiplexing-strategy",
              },
              {
                type: "doc",
                label: "Hybrid Strategy",
                id: "hyperexecute-hybrid-strategy",
              },
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Job Artifacts and Reports",
            items: [
              {
                type: "doc",
                label: "HyperExecute Job Artifacts ",
                id: "hyperexecute-artifacts",
              },
              {
                type: "doc",
                label: "Test Artifact Management",
                id: "hyperexecute-artifacts-url",
              },              {
                type: "doc",
                label: "HyperExecute Job Reports ",
                id: "hyperexecute-reports",
              },
              {
                type: "doc",
                label: "Receive the Job Reports as an Email",
                id: "hyperexecute-email-reports",
              },
            ],
          },
          {
            type: "doc",
            label: "FailFast",
            id: "hyperexecute-failfast",
          },
          {
            type: "doc",
            label: "Jobs Prioritization",
            id: "hyperexecute-prioritize-tests",
          },
          {
            type: "doc",
            id: "rca",
          },
          {
            type: "doc",
            id: "hyperexecute-background-services",
          },
          {
            type: "doc",
            label: "Auto Healing",
            id: "hyperexecute-auto-healing",
          },
          {
            type: "doc",
            label: "Hyperexecute Projects",
            id: "hyperexecute-projects",
          },
          {
            type: "doc",
            label: "Jobs Archiving",
            id: "hyperexecute-jobs-archiving",
          },
          {
            type: "doc",
            label: "HyperExecute Workflows",
            id: "hyperexecute-workflows",
          },
          {
            type: "doc",
            label: "Test Muting",
            id: "hyperexecute-test-muting",
          },
          {
            type: "doc",
            label: "Test Metrics",
            id: "hyperexecute-task-metrics",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Languages and Frameworks",
        link: {
          type: "doc",
          id: "hyperexecute-supported-languages-and-frameworks",
        },
        items: [
          {
            type: "category",
            collapsed: true,
            label: "Selenium",
            items: [
              {
                type: "category",
                collapsed: true,
                label: "Java",
                items: [
                  "testng-on-hyperexecute-grid",
                  "junit-on-hyperexecute-grid",
                  "cucumber-on-hyperexecute-grid",
                ],
              },
              {
                type: "category",
                collapsed: true,
                label: "JavaScript",
                items: [
                  "webdriverio-on-hyperexecute-grid",
                  "protractor-on-hyperexecute-grid",
                  "nightwatch-on-hyperexecute-grid",
                ],
              },
              {
                type: "category",
                collapsed: true,
                label: "C#",
                items: [
                  "nunit-on-hyperexecute-grid",
                  "specflow-on-hyperexecute-grid",
                ],
              },
              {
                type: "category",
                collapsed: true,
                label: "Python",
                items: [
                  "pyunit-on-hyperexecute-grid",
                  "pytest-on-hyperexecute-grid",
                  "robot-on-hyperexecute-grid",
                  "behave-on-hyperexecute-grid",
                ],
              },
              {
                type: "category",
                collapsed: true,
                label: "Ruby",
                items: [
                  "ruby-on-hyperexecute-grid",
                  "capybara-on-hyperexecute-grid",
                ],
              },
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Puppeteer",
            items: [
              "jest-on-hyperexecute",
              "mocha-on-hyperexecute",
              "codecept-on-hyperexecute",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Playwright",
            link: {
              type: "doc",
              id: "playwright-integration-with-hyperexecute",
            },
            items: [
              {
                type: "category",
                collapsed: true,
                label: "Python",
                items: [
                  "pytest-on-hyperexecute",
                  "playwright-python-on-hyperexecute",
                ],
              },
              {
                type: "category",
                collapsed: true,
                label: "Javascript",
                items: [
                  "playwright-vanillajs-on-hyperexecute",
                  "playwright-codeceptjs-on-hyperexecute",
                  "playwright-jest-on-hyperexecute",
                ],
              },
              {
                type: "doc",
                label: "Java",
                id: "playwright-junit-on-hyperexecute",
              },
              {
                type: "doc",
                label: "C#",
                id: "playwright-dotnet-on-hyperexecute",
              },
              {
                type: "doc",
                label: "Real Device",
                id: "playwright-real-device-on-hyperexecute",
              },
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Cypress",
            link: {
              type: "doc",
              id: "cypress-integration-with-hyperexecute",
            },
            items: ["cypressv9-on-hyperexecute", "cypressv10-on-hyperexecute"],
          },
          {
            type: "category",
            collapsed: true,
            label: "Appium",
            items: [
              "hyperexecute-appium-testing",
              "hyperexecute-webapp-appium-testing",
            ],
          },
          {
            type: "doc",
            label: "Espresso",
            id: "hyperexecute-espresso-testing",
          },
          {
            type: "doc",
            label: "Maestro",
            id: "hyperexecute-maestro-testing",
          },
          {
            type: "doc",
            label: "XCUI",
            id: "hyperexecute-xcui-testing",
          },
          {
            type: "doc",
            label: "k6",
            id: "hyperexecute-k6-testing",
          },
          {
            type: "category",
            collapsed: true,
            label: "JMeter-Performance Testing",
            link: {
              type: "doc",
              id: "hyperexecute-performance-testing",
            },
            items: ["hyperexecute-run-jmeter-tests"],
          },
          {
            type: "doc",
            label: "API Testing",
            id: "hyperexecute-api-testing",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Troubleshooting Guide",
        link: {
          type: "doc",
          id: "hyperexecute-how-to-debug-job",
        },
        items: [
          "hyperexecute-cli-error",
          "hyperexecute-pre-steps-error",
          "hyperexecute-scenario-steps-error",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Integrate with HyperExecute",
        link: {
          type: "doc",
          id: "integration-he",
        },
        items: [
          {
            type: "category",
            label: "Integration with CI/CD tools",
            collapsed: true,
            link: {
              type: "doc",
              id: "hyperexecute-integration-with-ci-cd-tools",
            },
            items: [
              {
                type: "doc",
                label: "AWS Codepipeline",
                id: "aws-codepipeline-with-hyperexecute",
              },
              {
                type: "doc",
                label: "Azure Devops",
                id: "azure-with-hyperexecute",
              },
              {
                type: "doc",
                label: "GitHub Actions",
                id: "github-actions-with-hyperexecute",
              },
              {
                type: "doc",
                label: "GitLab",
                id: "gitlab-integration-with-hyperexecute",
              },
              {
                type: "doc",
                label: "CircleCI",
                id: "circle-ci-with-hyperexecute",
              },
              {
                type: "doc",
                label: "Bitbucket",
                id: "jenkins-with-hyperexecute",
              },
              {
                type: "doc",
                label: "Bitbucket",
                id: "bitbucket-pipeline-with-hyperexecute",
              },
              {
                type: "doc",
                label: "Travis CI",
                id: "travis-ci-with-hyperexecute",
              },
              {
                type: "doc",
                label: "TeamCity",
                id: "teamcity-with-hyperexecute",
              },
              {
                type: "doc",
                label: "GoCD",
                id: "gocd-integration-with-hyperexecute",
              },
              {
                type: "doc",
                label: "Bamboo CI",
                id: "bamboo-integration-with-hyperexecute",
              },
              {
                type: "doc",
                label: "Semaphore",
                id: "semaphore-integration-with-hyperexecute",
              },
            ],
          },
          {
            type: "category",
            label: "Integration with Products",
            collapsed: true,
            link: {
              type: "doc",
              id: "hyperexecute-integration-with-products",
            },
            items: [
              {
                type: "doc",
                label: "Accelq",
                id: "hyperexecute-accelq-integration",
              },
              {
                type: "doc",
                label: "algoQA",
                id: "hyperexecute-algoqa-integration",
              },
              {
                type: "category",
                collapsed: true,
                label: "Azure Test Plan",
                link: {
                  type: "doc",
                  id: "hyperexecute-azure-test-plan",
                },
                items: [
                  "hyperexecute-azure-setup-test-plan",
                  "hyperexecute-azure-associate-test-case",
                  "hyperexecute-integrate-azure-test-plan",
                ],
              },
              {
                type: "doc",
                label: "Katalon",
                id: "katalon-integration-with-hyperexecute",
              },
              {
                type: "doc",
                label: "Provar",
                id: "hyperexecute-provar-integration",
              },
              {
                type: "doc",
                label: "qTest",
                id: "hyperexecute-qtest-integration",
              },
              {
                type: "doc",
                label: "Sikuli",
                id: "hyperexecute-sikuli-integration",
              },
              {
                type: "doc",
                label: "Slack",
                id: "hyperexecute-slack-integration",
              },
              {
                type: "doc",
                label: "Testim",
                id: "hyperexecute-testim-integration",
              },
              {
                type: "doc",
                label: "Testsigma",
                id: "hyperexecute-testsigma-integration",
              },
              {
                type: "category",
                collapsed: true,
                label: "Tosca",
                link: {
                  type: "doc",
                  id: "tosca-integration-hyperexecute",
                },
                items: [
                  "tosca-integration-with-hyperexecute-using-commander",
                  "tosca-integration-with-hyperexecute-using-dex",
                  "tosca-integration-with-hyperexecute-for-sap",
                ],
              },
              {
                type: "doc",
                label: "WinApp Driver",
                id: "hyperexecute-winapp-integration",
              },
              {
                type: "doc",
                label: "Zephyr",
                id: "hyperexecute-zephyr-scale-integration",
              },
            ],
          },
          {
            type: "category",
            label: "Integration with LambdaTest Products",
            collapsed: true,
            link: {
              type: "doc",
              id: "integration-lt-products",
            },
            items: [
              {
                type: "category",
                label: "HyperExecute Smart UI - Hooks",
                collapsed: true,
                link: {
                  type: "doc",
                  id: "smart-ui-testing",
                },
                items: [
                  {
                    type: "doc",
                    label: "Hyperexecute Smart UI Testing - Selenium",
                    id: "hyperexecute-smart-ui-testing-using-selenium",
                  },
                  {
                    type: "doc",
                    label: "Hyperexecute Smart UI Testing - Cypress",
                    id: "hyperexecute-smart-ui-testing-using-cypress",
                  },
                  {
                    type: "doc",
                    label: "Hyperexecute Smart UI Testing - Playwright",
                    id: "hyperexecute-smart-ui-test-using-playwright",
                  },
                ],
              },
              {
                type: "category",
                label: "HyperExecute Smart UI - SDK",
                collapsed: true,
                items: [
                  {
                    type: "category",
                    label: "Selenium",
                    collapsed: true,
                    items: ["hyperexecute-smart-ui-sdk-selenium-javascript", "hyperexecute-smart-ui-sdk-selenium-csharp"],
                  },
                  {
                    type: "doc",
                    label: "Hyperexecute Smart UI Testing - Cypress",
                    id: "hyperexecute-smart-ui-sdk-using-cypress",
                  },
                  {
                    type: "doc",
                    label: "Hyperexecute Smart UI Testing - Playwright",
                    id: "hyperexecute-smart-ui-sdk-using-playwright",
                  },
                  {
                    type: "doc",
                    label: "Hyperexecute Smart UI Testing - Puppeteer",
                    id: "hyperexecute-smart-ui-sdk-using-puppeteer",
                  },
                ],
              },
              {
                type: "doc",
                label: "Hyperexecute Virtual Devices Testing",
                id: "hyperexecute-integration-with-virtual-devices",
              },
              {
                type: "doc",
                label: "Hyperexecute Real Devices Testing",
                id: "real-devices-integration-with-hyperexecute",
              },
            ],
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "HyperExecute Private Cloud",
        link: {
          type: "doc",
          id: "hyperexecute-private-cloud-setup",
        },
        items: [
          {
            type: "doc",
            label: "HyperExecute Private Cloud Benefits",
            id: "hyperexecute-private-cloud-benefits",
          },
          {
            type: "category",
            collapsed: true,
            label: "Setup with Azure",
            link: {
              type: "doc",
              id: "hyperexecute-private-cloud-setup-with-azure",
            },

            items: [
              {
                type: "doc",
                label: "HyperExecute Private Cloud on JumpHost",
                id: "hyperexecute-private-cloud-on-jumphost",
              },
              {
                type: "doc",
                label: "VNet Peering and VNet Links",
                id: "hyperexecute-vnet-peering-for-private-cloud",
              },
            ],
          },
          {
            type: "doc",
            label: "Setup with AWS",
            id: "he-aws",
          },
        ],
      },
      {
        type: "category",
        label: "Knowledge Base",
        collapsed: true,
        link: {
          type: "doc",
          id: "hyperexecute-knowledge-base",
        },
        items: [
          {
            type: "doc",
            label: "HyperExecute Status",
            id: "hyperexecute-status",
          },
          {
            type: "category",
            collapsed: true,
            label: "How To Guide",
            link: {
              type: "doc",
              id: "hyperexecute-how-to-guide",
            },
            items: [
              "hyperexecute-how-to-get-my-username-and-access-key",
              "hyperexecute-environment-variable-setup",
              "hyperexecute-how-to-save-and-manage-secrets",
              "hyperexecute-how-to-configure-tunnel",
              "hyperexecute-how-to-find-correct-concurrency",
              "hyperexecute-how-to-configure-sourcePayload",
              "hyperexecute-browser-list-api",
              "hyperexecute-how-to-run-tests-using-local-selenium-drivers",
              "hyperexecute-how-to-perform-dependent-test-based-discovery",
              "hyperexecute-how-to-perform-group-based-test-discovery-in-testng",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Use Cases",
            link: {
              type: "doc",
              id: "hyperexecute-use-cases",
            },
            items: [
              "hyperexecute-how-smart-caching-boosts-tests-speed",
              "hyperexecute-seamless-integration-with-tools",
              "hyperexecute-multi-webdriver-support",
              "hyperexecute-build-mobile-apps-using-tools",
              "hyperexecute-utilizing-custom-libraries",
              "hyperexecute-supported-languages-and-packages"
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Widgets",
            link: {
              type: "doc",
              id: "hyperexecute-widgets",
            },
            items: [
              "hyperexecute-job-widgets",
              "hyperexecute-stage-widgets",
              "hyperexecute-task-widgets",
              "hyperexecute-test-widgets",
              "hyperexecute-resource-widgets",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Job Reports",
            link: {
              type: "doc",
              id: "hyperexecute-job-reports",
            },
            items: [
              "extent-report",
              "native-extent-report",
              "hyperexecute-native-testng-report",
              "allure-reports",
              "cucumber-report",
              "playwright-html-report",
              "specflow-report",
              "cypress-mochaawesome-report",
              "error-categorization-report",
            ],
          },

          {
            type: "category",
            collapsed: true,
            label: "Migration Guide",
            items: ["saucelabs-to-hyperexecute-migrate"],
          },
        ],
      },
      {
        type: "category",
        label: "HyperExecute FAQs",
        collapsed: true,
        link: {
          type: "doc",
          id: "hyperexecute-faqs",
        },
        items: [
          {
            type: "doc",
            label: "General FAQs",
            id: "he-general-faqs",
          },
          {
            type: "doc",
            label: "YAML FAQs",
            id: "hyperexecute-yaml-faqs",
          },
          {
            type: "doc",
            label: "CLI FAQs",
            id: "he-cli-faqs",
          },
          {
            type: "doc",
            label: "Features FAQs",
            id: "he-feature-faqs",
          },
          {
            type: "doc",
            label: "Platform FAQs",
            id: "he-platform-faqs",
          },
          {
            type: "doc",
            label: "Pricing FAQs",
            id: "he-pricing-faqs",
          },
          {
            type: "doc",
            label: "Security FAQs",
            id: "he-security-faqs",
          },
          {
            type: "doc",
            label: "Enterprise FAQs",
            id: "he-enterprise-faqs",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Release Notes",
        link: {
          type: "doc",
          id: "hyperexecute-release-notes",
        },
        items: [
          {
            type: "category",
            collapsed: true,
            label: "July, 2024",
            items: [
              'hyperexecute-release-notes-2-4-5',
              'hyperexecute-release-notes-2-4-4',
              'hyperexecute-release-notes-2-4-0',
            ]
          },
          {
            type: "category",
            collapsed: true,
            label: "June, 2024",
            items: [
              'hyperexecute-release-notes-2-3-8',
              'hyperexecute-release-notes-2-3-7',
              'hyperexecute-release-notes-2-3-6'
            ]
          },
          {
            type: "category",
            collapsed: true,
            label: "May, 2024",
            items: [
              'hyperexecute-release-notes-2-3-3',
            ]
          },
          {
            type: "category",
            collapsed: true,
            label: "April, 2024",
            items: [
              'hyperexecute-release-notes-2-3-1',
              'hyperexecute-release-notes-2-3-0',
              'hyperexecute-release-notes-2-2-9',
              'hyperexecute-release-notes-2-2-8',
              'hyperexecute-release-notes-2-2-7',
            ]
          },
          {
            type: "category",
            collapsed: true,
            label: "March, 2024",
            items: [
              'hyperexecute-release-notes-2-2-6',
              'hyperexecute-release-notes-2-2-5',
              'hyperexecute-release-notes-2-2-3'
            ]
          },
          {
            type: "category",
            collapsed: true,
            label: "February, 2024",
            items: [
              'hyperexecute-release-notes-2-2-2',
              'hyperexecute-release-notes-2-2-1',
              'hyperexecute-release-notes-2-2-0'
            ]
          },
          {
            type: "category",
            collapsed: true,
            label: "January, 2024",
            items: [
              'hyperexecute-release-notes-2-1-6',
              'hyperexecute-release-notes-2-1-5',
            ]
          },
          {
            type: "category",
            collapsed: true,
            label: "2023 Releases",
            items: [
              {
                type: "category",
                collapsed: true,
                label: "December, 2023",
                items: [
                  'hyperexecute-release-notes-2-1-4',
                  'hyperexecute-release-notes-2-1-3',
                  'hyperexecute-release-notes-2-1-1',
                  'hyperexecute-release-notes-2-1-0',
                  'hyperexecute-release-notes-1-139-0'
                ]
              },
              {
                type: "category",
                collapsed: true,
                label: "November, 2023",
                items: [
                  'hyperexecute-release-notes-1-138-0',
                  'hyperexecute-release-notes-1-137-0',
                ]
              },
              {
                type: "category",
                collapsed: true,
                label: "October, 2023",
                items: [
                  'hyperexecute-release-notes-1-136-0',
                  'hyperexecute-release-notes-1-135-0',
                  'hyperexecute-release-notes-1-134-0',
                  'hyperexecute-release-notes-1-133-0'
                ]
              },
              {
                type: "category",
                collapsed: true,
                label: "September, 2023",
                items: [
                  'hyperexecute-release-notes-1-131-0',
                ]
              },
            ]
          },
        ],
      },
    ],
  ],

  RealTimeBrowserTestingSiebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "category",
        collapsed: true,
        label: "Real Time Browser Testing",
        items: [
          "real-time-testing",
          "pre-loaded-extension",
          "real-time-testing-troubleshooting",
          "http-basic-authentication",
          "webview-testing-in-android",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "ChromeOS Testing",
        link: {
          type: "doc",
          id: 'chrome-os-testing'
        },
        items: [
          {
            type: "doc",
            label: "ChromeOS Web BrowserTesting",
            id: 'chrome-os-web-browser-testing'
          },
          {
            type: "doc",
            label: "ChromeOS App Testing",
            id: "chrome-os-app-testing"
          }
        ],
      },
      "developer-tools",
      "mark-as-bug-in-real-time-testing",
      "live-interactive-mobile-app-testing",
      "troubleshooting-ios-apps",
      "entitlements",
    ],
  ],

  IntegrationsSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        // type: "category",
        // collapsed: true,
        // label: "Integrations",
        // items: [
        //   {
        type: "category",
        collapsed: true,
        label: "Bug Tracking Tools",
        link: {
          type: "doc",
          id: "bug-tracking-tools",
        },
        items: [
          "jira-integration",
          "jira-self-hosted-integration",
          "airtable-integration",
          "notion-integration",
          "linear-app-integration",
          "azure-devops-integration",
          "youtrack-integration",
          "mantis-integration",
          "pagerduty-integration",
          "bugasura-integration",
          "zoho-bugtracker-integration",
          "goodday-integration",
          "bugherd-integration",
          "zipboard-integration",
          "bugzilla-integration",
          "bugsnag-integration",
          "devrev-integration",
          "fogbugz-integration",
          "airbrake-integration",
          "userback-integration",
          "zenkit-integration",
          "spirateam-integration",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Project Management Tools",
        link: {
          type: "doc",
          id: "project-management-tools",
        },
        items: [
          "clickup-integration",
          "project-management-tools-github-integration",
          "clubhouse-integration",
          "project-management-tools-gitlab-integration",
          "redmine-integration",
          "asana-integration",
          "monday-integration",
          "trello-integration",
          "miro-integration",
          "project-management-tools-bitbucket-integration",
          "integrating-wrike-with-lambdatest",
          "pivotal-tracker-integration",
          "hive-integration",
          "teamwork-integration",
          "targetprocess-integration",
          "project-management-tools-paymo-integration",
          "practitest-integration",
          "breeze-integration",
          "backlog-integration",
          "favro-integration",
          "zapier-integration-with-lambdatest",
          "axosoft-integration",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Analytics Tools",
        items: [
          "datadog-integration",
          "sumo-logic-integration",
          "new-relic-integration",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Team Communication Tools",
        link: {
          type: "doc",
          id: "team-communication-tools",
        },
        items: [
          "slack-integration",
          "microsoft-teams-integration",
          "rocketchat-integration-with-lambdatest",
          "integrating-mattermost-with-lambdatest",
          "flock-integration",
          "google-chat-integration",
          "webex-teams-integration",
          "zoho-cliq-integration",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Integrations With CI/CD Tools",
        link: {
          type: "doc",
          id: "integrations-with-ci-cd-tools",
        },
        items: [
          "bitbucket-pipelines-integration",
          "aws-codepipeline-Integration",
          "bamboo-integration",
          {
            type: "category",
            collapsed: true,
            label: "Jenkins Plugin",
            items: [
              "jenkins-plugin",
              "integrating-your-jenkins-pipeline-with-lambdatest",
            ],
          },
          "semaphore-ci-integration",
          "circleci-integration",
          "travis-ci-with-lambdatest",
          "gitlab-ci-integration",
          "codeship-integration",
          "codefresh-ci-integration",
          "teamcity-integration",
          {
            type: "category",
            collapsed: true,
            label: "Integrate Azure Pipelines",
            items: [
              "azure-pipeline",
              "integrate-lambdatest-extension-with-azure-pipelines",
            ],
          },
          "concource-ci",
          {
            type: "category",
            collapsed: true,
            label: "GoCD Integration",
            items: ["gocd-integration", "yaml-integration"],
          },
          "drone-ci",
          "appveyor-ci-integration",
          "google-cloud-ci-integration",
          "appium-bitrise",
          "espresso-bitrise",
          "bitrise-integration-xcuitest",
          "buildkite-integration",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Codeless Automation Tools",
        link: {
          type: "doc",
          id: "codeless-automation-tools",
        },
        items: [
          {
            type: "category",
            collapsed: true,
            label: "Katalon Integration",

            items: [
              "katalon-integration-with-lambdatest",
              "katalon-integration",
              "running-groovy-script-in-katalon",
            ],
          },
          "run-selenium-ide-tests-on-lambdatest-selenium-cloud-grid",
          "ranorex-integration-with-lambdatest",
          "oxygen-integration",
          "leapwork-integration",
          "vividus-integration",
          "qmetry-integration",
          "cerberus-integration",
          "testingwhiz-integration",
          "testsigma-integration",
          "tricentis-tosca-integration",
          "ghost-inspector-integration",
          "accelq-integration",
          "algoshack-integration",
          "testim-integration",
        ],
      },

      {
        type: "category",
        collapsed: true,
        label: "Accessibility Testing Tools",
        items: ["deque-integration"],
      },
      {
        type: "category",
        collapsed: true,
        label: "Test Reporting & Test Management Tools",
        link: {
          type: "doc",
          id: "integrate-test-reporting-test-management-tools",
        },
        items: [
          "testrail-integration-with-lambdatest-selenium-grid",
          "zebrunner-integration",
          "zephyr-scale",
          "testmo-integration",
          "qtest-integration",
        ],
      },

      {
        type: "category",
        collapsed: true,
        label: "Code Coverage Tools",
        items: ["rktracer-integration"],
      },
      {
        type: "category",
        collapsed: true,
        label: "Plugins and Extensions",
        link: {
          type: "doc",
          id: "plugins-and-extensions",
        },
        items: [
          "chrome-extensions",
          {
            type: "category",
            collapsed: true,
            label: "Jenkins Plugin",
            items: [
              "jenkins-plugin",
              "integrating-lambdaTest-with-jenkins-freestyle-project",
              "lambdatest-report-with-jenkins-pipeline",
            ],
          },
          "wordpress-plugin",
          "npm-plugin-for-testcafe-integration-with-lambdatest",
          "fastlane-plugin",
          "azure-pipeline",
          "teamcity-plugin",
          "shopify-integration",
          "vscode-extension",
          "xcode-plugin-lambdamax",
          "android-studio-plugin-lambdroid",
          "docker-tunnel-extension",
          "gradle-integration-with-lambdatest",
        ],
      },
      {
        type: "doc",
        label: "LT Debug",
        id: "record-and-replay",
      },
      "zalenium-integration-with-lambdatest",
      "applitools-integration-with-lambdatest",
      "selenified-integration-with-lambdatest",
      "microsoft-team",
      "app-center-integration",
      "app-center-automation",
      "siesta-integration",
      "testcomplete-integration",
      "testrigor-integration",
      "localstack-integration-with-lambdatest",
      "genrocket-integration",
      "netlify-integration-with-lambdatest",
      "testim-integration",
    ],
    // },
  ],

  AccessibilityTestingSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Accessibility Testing",
        id: "accessibility-testing",
      },
      {
        type: "category",
        collapsed: true,
        label: "Accessibility DevTools",
        link: {
          type: "doc",
          id: "accessibility-devtools",
        },
        items: [
          {
            type: "doc",
            label: "Install Accessibility Toolkit",
            id: "accessibility-testing-install-devtools",
          },
          {
            type: "doc",
            label: "Run a Quck Scan",
            id: "accessibility-testing-run-quick-scan",
          },

          {
            type: "category",
            collapsed: true,
            label: "Scanning Alternatives",
            items: [
              {
                type: "doc",
                label: "Workflow Scanner",
                id: "accessibility-testing-workflow-scanner",
              },
              {
                type: "doc",
                label: "Full Page Scanner",
                id: "accessibility-testing-full-page-scanner",
              },
              {
                type: "doc",
                label: "Partial Page Scanner",
                id: "accessibility-testing-partial-page-scanner",
              },
              {
                type: "doc",
                label: "Multi Page Scanner",
                id: "accessibility-testing-multi-page-scanner",
              },
            ],
          },
          {
            type: "doc",
            label: "Configure Settings",
            id: "accessibility-devtools-settings",
          },
          {
            type: "doc",
            label: "Update DevTools",
            id: "accessibility-update-devtools-extension"
          }
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Accessibility Automation",
        link: {
          type: "doc",
          id: "accessibility-automation",
        },
        items: [
          {
            type: "doc",
            label: 'Selenium',
            id: "accessibility-automation-test",
          },
          {
            type: "category",
            collapsed: true,
            label: 'Cypress',
            items: [
              "cypress-v10-accessibility-test",
              "cypress-v9-accessibility-test",
            ],
          },
          {
            type: 'doc',
            label: 'Accessibility Automation Settings',
            id: "accessibility-automation-settings",
          }
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Navigating Dashboard",
        link: {
          type: "doc",
          id: "accessibility-testing-navigating-dashboard",
        },
        items: [
          {
            type: "doc",
            label: "Issue Summary",
            id: "accessibility-testing-dashboard-issue-summary",
          },
          {
            type: "doc",
            label: "All Issues",
            id: "accessibility-testing-dashboard-all-issues",
          },
        ],
      },
    ],
  ],

  SettingsAndSecuritySidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Account Management",
        id: "account-management",
      },
      {
        type: "doc",
        label: "LambdaTest Public IP Ranges",
        id: "lambdatest-public-ip",
      },
      {
        type: "doc",
        label: "Single Sign On",
        id: "single-sign-on",
      },
      {
        type: "doc",
        label: "SCIM",
        id: "scim",
      },
  ],
],

  TestManagerSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Introduction to Test Manager",
        id: "test-manager",
      },
      {
        type: "category",
        collapsed: true,
        label: "Projects",
        items: ["create-projects", "fields-and-values"],
      },
      {
        type: "category",
        collapsed: true,
        label: "Test cases",
        items: [
          "manual-test-case-creation",
          "manual-test-cases-with-ai",
          "test-case-import",
          "test-case-repository",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Automated Test Cases",
        items: ["automated-test-cases-with-ai"],
      },
      {
        type: "category",
        collapsed: true,
        label: "Test Plan",
        items: ["test-plan-creation", "build-history"],
      },
      {
        type: "category",
        collapsed: true,
        label: "Build",
        items: ["build-creation", "execute-builds", "build-details"],
      },
      {
        type: "category",
        collapsed: true,
        label: "Jira Integration",
        items: ["link-jira-issues-with-test-manager", "lambdatest-jira-app"],
      },
    ],
  ],

  RealDeviceSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "category",
        collapsed: true,
        label: "Real Device App Testing",
        items: [
          "app-testing-on-real-devices",
          "how-to-use-testing-tools-in-session",
          {
            type: "category",
            collapsed: true,
            label: "Applications",
            items: ["upload-apps-on-real-device-cloud", "app-settings"],
          },
          {
            type: "category",
            collapsed: true,
            label: "App Source",
            items: [
              "install-apps-from-play-store",
              "install-apps-from-test-flight",
              "install-apps-from-app-center",
              "install-apps-from-app-store",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Features",
            items: ["camera-image-injection-on-real-devices", "biometric-authentication-on-real-devices", "contacts-on-real-devices", "real-device-adb-shell", "ui-inspector"],
          },
        ],
      },
    ],
    [
      {
        type: "category",
        collapsed: true,
        label: "Real Device Browser Testing",
        items: [
          "browser-testing-on-real-devices",
          "how-to-use-in-session-testing-tools",
        ],
      },
    ],
    [
      {
        type: "category",
        collapsed: true,
        label: "Private Cloud",
        items: ["public-cloud-vs-private-cloud", "select-pre-installed-apps"],
      },
    ],
  ],

  SeleniumTestingSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "category",
        collapsed: true,
        label: "Getting Started",
        link: {
          type: "doc",
          id: "getting-started-with-lambdatest-automation",
        },
        items: [
          "lambdatest-running-your-first-selenium-test",
          "inside-lambdatest-automation-platform",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Languages and Frameworks",
        link: {
          type: "doc",
          id: "selenium-supported-languages-and-frameworks",
        },
        items: [
          {
            type: "category",
            collapsed: true,
            label: "Java",
            link: {
              type: "doc",
              id: "java-framework",
            },
            items: [
              "testng-framework",
              "junit-frameworks",
              "cucumber-script-testng-selenium",
              "selenide-frameworks",
              "gauge-frameworks",
              "geb-frameworks",
              "running-serenity-test-on-selenium-grid",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "JavaScript",
            link: {
              type: "doc",
              id: "running-javascript-test-scripts-on-lambdatest",
            },
            items: [
              "running-protractor-test-scripts-on-lambdatest",
              "automation-testing-with-mocha-and-selenium",
              "run-nightwatch-tests-on-lambdatest-selenium-grid",
              "run-wd-atomation-test-on-lambdatest-selenium-grid",
              "automation-testing-using-webdriverIO-5-6-2",
              "run-webdriverio-automation-scripts-on-lambdatest",
              "automation-testing-with-selenium-and-jest",
              "run-automation-tests-using-angularjs-with-karma",
              "cucumberjs-testing-using-lambdatest-selenium-grid",
              "automation-testing-using-jasmine-with-karma",
              "karma-integration-with-lambdatest",
              "npm-plugin-for-testcafe-integration-with-lambdatest",
              "selenium-tests-with-nemojs",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "C#",
            link: {
              type: "doc",
              id: "csharp-with-selenium",
            },
            items: [
              "nunit-with-selenium",
              "selenium-xunit",
              "mstest-with-selenium",
              "specflow-with-selenium",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Python",
            link: {
              type: "doc",
              id: "python-with-selenium-running-python-automation-scripts-on-lambdatest-selenium-grid",
            },
            items: [
              "unit-testing-in-python",
              "pytest-with-selenium-running-pytest-automation-script-on-lambdatest-selenium-grid",
              "robot-with-selenium-running-robot-automation-scripts-on-lambdatest-selenium-grid",
              "behave-with-selenium-running-behave-automation-scripts-on-lambdatest-selenium-grid",
              "automation-testing-selenium-with-lettuce",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "PHP",
            link: {
              type: "doc",
              id: "php-framework",
            },
            items: [
              "behat-php-framework",
              "laravel-php-framework",
              "codeception-php-framework",
              "phpunit-php-framework",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Ruby",
            link: {
              type: "doc",
              id: "ruby",
            },
            items: ["ruby-capybara", "ruby-rspec", "ruby-testunit"],
          },
          "executing-tesbo-automation-script-over-online-selenium-grid",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Test Capabilities",
        link: {
          type: "doc",
          id: "selenium-automation-capabilities",
        },
        items: [
          {
            type: "category",
            collapsed: true,
            label: "Selenium Capabilities",
            items: [
              "selenium-default-capabilities",
              "selenium-three-capabilities",
              "selenium-four-capabilities",
              "lambdatest-selenium-advance-capabilities"
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Browser Configuration",
            items: [
              "perform-selenium-automation-on-headless-browsers",
              "custom-chrome",
              "selenium-set-browser-options"
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Network",
            items: ["network-throttling", "custom-dns-map"],
          },
          {
            type: "category",
            collapsed: true,
            label: "Performance",
            items: [
              "view-lighthouse-performance-metrics",
              "lighthouse-reports-hooks",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Debugging",
            items: ["debugging-options", "telemetry-logs"],
          },
          {
            type: "category",
            collapsed: true,
            label: "Test Execution",
            items: ["smart-wait"],
          },
          {
            type: "category",
            collapsed: true,
            label: "Security",
            items: ["custom-header"],
          },
          {
            type: "category",
            collapsed: true,
            label: "Other Capabilities",
            items: ["auto-heal", "command-annotations", "har-log-viewer", "selenium-geolocation-capabilities", "selenium-mask-your-data"],
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Troubleshooting",
        items: [
          "error-messages",
          "timeouts-issues-and-resolutions",
          "lambda-exceptions",
          "performance-tips",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Advanced Features",
        items: [
          "upload-files-using-lambdatest",
          "setup-pre-run-executable",
          "build-split",
          "daily-usage-limit",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Knowledge Base",
        items: [
          "lambda-hooks",
          {
            type: "category",
            collapsed: true,
            label: "Configuration",
            items: [
              "environment-variables",
              "Selenium-Grid-Configuration",
              "supported-browsers-and-operating-systems-for-the-web-interface",
              "change-individual-test-details",
              "queuing",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Proxy Settings",
            items: [
              "white-listing-proxy-with-lambdatest",
              "run-selenium-test-behind-the-proxy",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "How To Guide",
            items: [
              "filter-your-selenium-tests",
              "mark-as-bug-in-automation-testing",
              "sharing-test-results",
              "download-files-using-lambdatest-selenium-grid",
              "live-interaction",
              "group-tests-using-custom-tags",
              "group-and-filter-your-test-builds-using-build-tags",
            ],
          },
          "mobile-web-automation-on-real-devices",
          "selenium-bidi-integration",
        ],
      },
      {
        type: "doc",
        label: "Frequently Asked Questions",
        id: "selenium-faq",
      },
    ],
  ],

  CypressTestingSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Cypress Testing",
        id: "getting-started-with-cypress-testing",
      },
      {
        type: "doc",
        label: "Authentication",
        id: "authentication",
      },
      {
        type: "doc",
        label: "Parallel Testing",
        id: "run-your-cypress-tests-in-parallel",
      },
      {
        type: "doc",
        label: "Specify Browsers and OS",
        id: "supported-browsers-and-os",
      },
      {
        type: "doc",
        label: "Supported Cypress Versions",
        id: "supported-cypress-versions",
      },
      {
        type: "doc",
        label: "Cypress Testing Using WebKit",
        id: "cypress-webkit",
      },
      {
        type: "doc",
        label: "Cypress CLI Commands",
        id: "cypress-cli-commands",
      },
      {
        type: "doc",
        label: "Configure Cypress Test Execution",
        id: "run-settings",
      },
      {
        type: "doc",
        label: "Test On Different Screen Resolutions",
        id: "screen-resolution-cypress",
      },
      {
        type: "doc",
        label: "Download Artefacts For Cypress Project",
        id: "download-artefacts-cypress",
      },
      {
        type: "doc",
        label: "Integrate LambdaTest with Cypress Dashboard",
        id: "integrate-lambdatest-with-cypress",
      },
      {
        type: "doc",
        label: "Execute Including Private Dependencies",
        id: "private-dependencies-cypress",
      },
      {
        type: "doc",
        label: "Applitools Integration For Cypress",
        id: "applitools-integration-cypress",
      },
      {
        type: "doc",
        label: "Report Portal IO Integration For Cypress",
        id: "report-portal-cypress",
      },
      {
        type: "doc",
        label: "Multi Reporters Support",
        id: "cyp-multi-reporters",
      },
      {
        type: "doc",
        label: "Environment Variables Support for Cypress Tests",
        id: "cyp-environment",
      },
      {
        type: "doc",
        label: "Cypress Terminal Reports",
        id: "cypress-detailed-command-logs",
      },
      {
        type: "doc",
        label: "Install NPM via Tunnel",
        id: "npm-via-tunnel",
      },
    ],
  ],

  PlaywrightTestingSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "category",
        collapsed: true,
        label: "Playwright Testing ",
        items: ["playwright-testing-guide"],
      },
      {
        type: "category",
        collapsed: true,
        label: "Languages and Frameworks",
        items: [
          {
            type: "category",
            collapsed: true,
            label: "Java",
            items: [
              "java-with-playwright",
              "junit-with-playwright"
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "JavaScript",
            items: [
              "javascript-with-playwright",
              "jest-with-playwright",
              "typescript-with-playwright"
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "C#",
            items: [
              "csharp-with-playwright",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Python",
            items: [
              "python-with-playwright",
            ],
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Test on Android Device",
        link: {
          type: "doc",
          id: "playwright-android-guide",
        },
        items: ["playwright-android-guide", "playwright-android-caps"],
      },
      "parallel-playwright-test",
      "migrate-playwright-tests",
      "playwright-test-execution-setup",
      "playwright-bundled-browser-support",
      "playwright-caps",
      "local-testing-playwright",
      "playwright-playwrighttest",
      "playwright-cucumberjs",
      "playwright-cicd",
      "playwright-lighthouse-library",
    ],
  ],

  PuppeteerTestingSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "category",
        collapsed: true,
        label: "Puppeteer Testing ",
        items: [
          "puppeteer-testing-guide",
          "puppeteer-test-execution",
          "puppeteer-capabilities",
          "local-testing-puppeteer",
          "puppeteer-mocha",
          "puppeteer-jest",
          "puppeteer-pytest-pyppeteer",
          "puppeteer-cicd",
        ],
      },
    ],
  ],

  K6BrowserTestingSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        id: "k6-browser-testing",
        label: "K6 Browser Testing ",
      },
    ],
  ],

  EmuSimuSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "category",
        collapsed: true,
        label: "Emulator / Simulator",
        items: ["app-automation-app-sim"],
      },
    ],
  ],

  AppiumTestingSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "category",
        collapsed: true,
        label: "Appium Testing",
        link: {
          type: "doc",
          id: "getting-started-with-appium-testing",
        },
        items: [
          {
            type: "category",
            collapsed: true,
            label: "Languages and Frameworks",
            link: {
              type: "doc",
              id: "appium-languages-and-frameworks",
            },
            items: [
              {
                type: "category",
                collapsed: true,
                label: "Java",
                link: {
                  type: "doc",
                  id: "appium-java",
                },
                items: [
                  "appium-java-junit",
                  "appium-java-jbehave",
                  "appium-java-cucumber",
                  "appium-java-testng",
                ],
              },
              {
                type: "category",
                collapsed: true,
                label: "JavaScript",
                link: {
                  type: "doc",
                  id: "appium-nodejs",
                },
                items: ["appium-nodejs-webdriverio", "appium-nodejs-mocha"],
              },
              {
                type: "category",
                collapsed: true,
                label: "Python",
                link: {
                  type: "doc",
                  id: "appium-python",
                },
                items: [
                  "appium-python-behave",
                  "appium-python-robot",
                  "appium-python-gauge",
                  "appium-python-pytest",
                ],
              },
              {
                type: "category",
                collapsed: true,
                label: "Ruby",
                link: {
                  type: "doc",
                  id: "appium-ruby",
                },
                items: ["appium-ruby-cucumber", "appium-ruby-rspec"],
              },
              {
                type: "category",
                collapsed: true,
                label: "PHP",
                link: {
                  type: "doc",
                  id: "appium-php",
                },
                items: ["appium-php-behat"],
              },
              {
                type: "category",
                collapsed: true,
                label: "C#",
                link: {
                  type: "doc",
                  id: "appium-csharp",
                },
                items: ["appium-csharp-nunit"],
              },
              "appium-kotlin",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Setup",
            items: [
              "desired-capabilities-in-appium",
              "supported-appium-versions",
              "supported-appium-plugins",
              "list-of-supported-locales",
              "supported-timezone",
              "app-testing-apis",
              "appium-lambdatest-hooks",
              "appium-install-uninstall-lambdatest-hooks",
              "appium-uploading-retrieving-files",
              "appium-firebase-app-upload",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Features",
            items: [
              "camera-image-injection",
              "biometric-authentication",
              "regular-expression-appium",
              "appium-upload-media",
              "app-auto-network-throttling",
              "appium-ip-geolocation",
              "appium-app-performance",
              "appium-ios-app-settings",
              "adb-commands-support",
              "login-google-android",
              "disable-screenshot-block",
              "appium-custom-header",
              "basic-authentication-for-web-automation",
              "live-debug-in-app-automation",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Smart TV Automation",
            items: ["appium-appletv", "appium-firetv", "appium-rokutv"],
          },
          {
            type: "category",
            collapsed: true,
            label: "Integrations",
            items: ["appium-inspector"],
          },
          {
            type: "category",
            collapsed: true,
            label: "Local Testing",
            items: ["testing-apps-locally"],
          },
          "migrate-appium-tests-from-browserstack-and-saucelabs",
        ],
      },
    ],
  ],

  EspressoTestingSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Getting Started with Espresso Testing",
        id: "getting-started-with-espresso-testing",
      },
      {
        type: "doc",
        label: "Supported Capabilities",
        id: "espresso-supported-capabilities",
      },
      {
        type: "doc",
        label: "RegEx in Espresso",
        id: "regular-expression-espresso",
      },
      {
        type: "doc",
        label: "Supported Locales",
        id: "supported-locales-espresso",
      },
      {
        type: "doc",
        label: "Debug Espresso Tests",
        id: "debug-espresso-tests",
      },
      {
        type: "doc",
        label: "Troubleshoot Espresso Tests",
        id: "troubleshoot-espresso-tests",
      },
      {
        type: "category",
        collapsed: true,
        label: "Speedup Espresso Tests",
        items: [
          {
            type: "doc",
            label: "Sharding for Espresso",
            id: "sharding-espresso",
          },
          "speedup-espresso",
        ],
      },
      {
        type: "doc",
        label: "JUnit Report",
        id: "espresso-junit-report",
      },
    ],
  ],

  XCUITestingSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Getting Started with XCUI Testing",
        id: "getting-started-with-xcui-testing",
      },
      {
        type: "doc",
        label: "Supported Capabilities",
        id: "xcui-supported-capabilities",
      },
      {
        type: "doc",
        label: "RegEx in XCUI",
        id: "regular-expression-xcui",
      },
      {
        type: "doc",
        label: "Supported Locales",
        id: "supported-locales-xcui",
      },
      {
        type: "doc",
        label: "Creating iOS Applications",
        id: "ios-ipa-files-xcui",
      },
      {
        type: "category",
        collapsed: true,
        label: "Speedup XCUI Tests",
        items: ["sharding-xcui", "speedup-xcui"],
      },
      {
        type: "doc",
        label: "XCTestPlan",
        id: "xctestplan",
      },
      {
        type: "doc",
        label: "Xml Report",
        id: "xcui-xml-report",
      },
    ],
  ],

  FlutterTestingSidebar: [
    {
      type: 'link',
      label: 'Back',
      href: '/docs/',
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Getting Started with Flutter Android",
        id: "getting-started-with-flutter-dart-android-automation",
      },
      {
        type: "doc",
        label: "Getting Started with Flutter iOS",
        id: "getting-started-with-flutter-dart-ios-automation",
      },
    ],
  ],
  
  VisualRegressionTestingSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Visual Regression",
        id: "smart-visual-regression-testing",
      },
      {
        type: "category",
        collapsed: true,
        label: "Component Testing",
        items: [
          {
            type: "doc",
            label: "CLI-Storybook",
            id: "smart-ui-storybook",
          },
          {
            type: "doc",
            label: "Branching Strategy",
            id: "smartui-git-branching-strategy",
          },
        ],
      },

      {
        type: "doc",
        label: "Setup with CLI",
        id: "smartui-cli",
      },
      {
        type: "doc",
        label: "Setup with Figma CLI",
        id: "smartui-cli-figma",
      },
      {
        type: "category",
        collapsed: true,
        label: "Bring your Own Screenshots",
        items: [
          {
            type: "doc",
            label: "Upload through CLI",
            id: "smartui-cli-upload",
          },
          {
            type: "doc",
            label: "Upload through API",
            id: "smartui-upload-api-v2",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "SDK",
        items: [
          // "smartui-selenium-js-sdk",
          // "selenium-visual-regression"
          {
            type: "category",
            label: "Selenium",
            collapsed: true,
            // id: "smart-visual-regression-testing",
            items: [
              {
                type: "doc",
                label: "Javascript",
                id: "smartui-selenium-js-sdk",
              },
              {
                type: "doc",
                label: "Java",
                id: "smartui-selenium-java-sdk",
              },
              {
                type: "doc",
                label: "Python",
                id: "smartui-selenium-python-sdk",
              },
              {
                type: "doc",
                label: "Ruby",
                id: "smartui-selenium-ruby-sdk",
              },
              {
                type: "doc",
                label: "C#",
                id: "smartui-selenium-csharp-sdk",
              },
            ],
          },
          {
            type: "category",
            label: "Playwright",
            collapsed: true,
            // id: "smart-visual-regression-testing",
            items: [
              {
                type: "doc",
                label: "Javascript",
                id: "smartui-playwright-sdk",
              },
              {
                type: "doc",
                label: "Java",
                id: "smartui-playwright-python-sdk",
              },
            ],
          },
          "smartui-puppeteer-sdk",
          "smartui-testcafe-sdk",
          "smartui-cypress-sdk",
          "smartui-wdio-sdk",
          "smartui-sdk-config-options",
          "smartui-cli-git-branching-strategy",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "LambdaTest Hooks",
        items: [
          // "smartui-selenium-js-sdk",
          // "selenium-visual-regression"

          "selenium-visual-regression",
          "smart-ui-cypress",
          "playwright-visual-regression",
          "puppeteer-visual-regression",
          "smartui-k6-setup",
          "appium-visual-regression",
          "espresso-visual-regression",
          "html-dom-smartui-options",
          "smart-ui-build-options",
          "test-settings-options",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Integrate with CI/CD tool",
        items: [
          "smartui-with-github-actions"
        ],
      },
      {
        type: "doc",
        label: "Smart PDF Comparison",
        id: "smartui-pdf-comparison",
      },
      {
        type: "doc",
        label: "Project Settings",
        id: "smartui-project-settings",
      },

      {
        type: "doc",
        label: "Ignore or Select Annotated Regions",
        id: "smartui-draw-on-ui",
      },
      {
        type: "doc",
        label: "Github App Integration",
        id: "smartui-github-app-integration",
      },
      {
        type: "doc",
        label: "Slack Integration",
        id: "smartui-slack-integration",
      },
    ],
  ],

  Analytics: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    {
      type: "doc",
      id: "analytics-overview",
    },
    {
      type: "category",
      collapsed: true,
      label: "Getting Started",

      items: ["analytics-dashboard-templates", "analytics-create-dashboard"],
    },
    {
      type: "category",
      collapsed: true,
      label: "Widgets",
      link: {
        type: "doc",
        id: "analytics-widgets",
      },
      items: [
        "analytics-modules-resource-utilization",
        "analytics-test-time-trends",
        {
          type: "category",
          collapsed: true,
          label: "Tests Overview",
          items: [
            "analytics-modules-automation-test-overview",
            "analytics-modules-hyperexecute",
            "analytics-modules-manual-test-overview",
            "analytics-modules-smartui-analytics",
          ],
        },
        {
          type: "category",
          collapsed: true,
          label: "Error Insights",
          items: [
            "analytics-modules-test-intelligence-command-logs-analytics",
            "analytics-modules-error-insights",
          ],
        },
        "analytics-modules-groups",
      ],
    },
    "analytics-modules-test-intelligence-flaky-test-analytics",
    "analytics-dashboard-copilot",
    "analytics-allure-api-widgets",
    "analytics-test-case-insights",
    "analytics-sub-organization-widgets",
    "analytics-dashboard-edit-layout",
    "analytics-dashboard-features",
    "analytics-widget-drill-down-export",
    "analytics-widget-filter-by-regex",
    "analytics-faqs",
  ],

  TestIntelligence: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Overview",
        id: "test-intelligence-overview",
      },
      {
        type: "doc",
        label: "Flaky Tests Detection",
        id: "test-intelligence-modules-flaky-test-detection",
      },
      {
        type: "doc",
        label: "Command Error Logs Analytics",
        id: "test-intelligence-command-error-logs-analytics",
      },
    ],
  ],

  TestAtScale: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Overview",
        id: "tas-overview",
      },
      {
        type: "category",
        label: "Getting Started",
        items: [
          "tas-getting-started-creating-an-account",
          "tas-getting-started-integrating-your-first-repo",
        ],
      },
      {
        type: "category",
        label: "Configuration",
        items: [
          "tas-configuring-tas-yml",
          "tas-configurations-framework",
          "tas-configurations-managing-secrets",
        ],
      },
      {
        type: "category",
        label: "Test at Scale - Self Hosted",
        items: [
          "tas-self-hosted-overview",
          "tas-self-hosted-installation",
          "tas-self-hosted-configuration",
        ],
      },
      {
        type: "category",
        label: "How to Guides",
        items: [
          "tas-how-to-guides-gh-token",
          "tas-how-to-guides-gl-token",
          "tas-how-to-guides-bb-token",
        ],
      },
      {
        type: "category",
        label: "Tutorials",
        items: ["tas-tutorial-cloud-demo", "tas-tutorial-self-hosted-demo"],
      },
      {
        type: "category",
        label: "Learn about TAS",
        items: [
          "tas-learn-about-tas-how-tas-works",
          "tas-learn-about-tas-features-and-languages",
        ],
      },
      {
        type: "doc",
        label: "Tier and Credits",
        id: "tas-tier-and-credits",
      },
      // {
      //   type: 'doc',
      //   label: 'Telemetry and Security',
      //   id: 'tas-telemetry-and-security'
      // },
      {
        type: "doc",
        label: "FAQs",
        id: "tas-faq-and-troubleshooting",
      },
    ],
  ],

  LambdaTestMigrationGuideSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "LambdaTest Migration Guide",
        id: "capability-map",
      },
      {
        type: "doc",
        label: "BrowserStack To LambdaTest Migration",
        id: "browserstack-to-lambdatest-migration-guide",
      },
      {
        type: "doc",
        label: "Sauce Labs To LambdaTest Migration",
        id: "saucelabs-to-lambdatest-migration-guide",
      },
      {
        type: "doc",
        label: "Legacy Platform To LambdaTest Migration",
        id: "migrate-legacy-lambdatest",
      },
    ],
  ],

  VisualUITestingSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Visual User Interface Testing",
        id: "visual-ui-testing",
      },
      {
        // type: "category",
        // collapsed: true,
        // label: "Visual User Interface Testing",
        // items: [
        //   {
        type: "category",
        collapsed: true,
        label: "Automated Screenshot Testing",
        items: [
          "automated-st",
          "mark-as-bug",
          "automated-ss-api",
          "ss-behind-login",
          "default-list-of-browsers-for-screesnshot-testing",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Responsive Testing",
        items: ["responsive-testing", "mark-as-bug-responsive-testing"],
      },

      "smart-visual-testing",
    ],
    // },
  ],

  LTBrowserSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "LT Browser",
        id: "lt-browser",
      },
      {
        type: "doc",
        label: "Getting Started With LT Browser 2.0",
        id: "lt-browser-two",
      },
      {
        type: "doc",
        label: "Performance Report",
        id: "performance-report",
      },
      {
        type: "doc",
        label: "Network Throttling",
        id: "network-throttling-for-responsive-testing",
      },
      {
        type: "doc",
        label: "Scroll Sync",
        id: "scroll-sync",
      },
      {
        type: "doc",
        label: "Full Page Screenshots",
        id: "full-page-screenshots",
      },
      {
        type: "doc",
        label: "Mouse Pointer",
        id: "mouse-pointer-for-touch-mode",
      },
      {
        type: "doc",
        label: "JavaScript Error Reports",
        id: "error-reports",
      },
    ],
  ],

  TestingLocalPagesSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "category",
        collapsed: true,
        label: "Testing Locally Hosted Pages",
        items: [
          "testing-locally-hosted-pages",
          "local-testing-macos",
          "local-testing-windows",
          "local-testing-linux",
          "lambda-tunnel-modifiers",
          "underpass-tunnel-application",
          "advanced-tunnel-features",
          "environment-variables-supported-by-lambda-tunnel",
          "maven-tunnel-for-locally-hosted-web-applications",
        ],
      },
      "sharing-lambda-tunnel",
      "docker-tunnel",
      "troubleshooting-lambda-tunnel",
      "set-open-file-limit-while-using-proxy",
      "load-balancing-in-lambda-tunnel",
      "dedicated-proxy",
      "charles-proxy",
    ],
  ],

  TestManagementSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Test Logs",
        id: "test-logs",
      },
    ],
  ],

  AccountManagementSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/settings-and-security",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Account Management",
        id: "account-management",
      },
      {
        type: "doc",
        label: "Manage Subscriptions",
        id: "manage-subscriptions",
      },
      {
        type: "doc",
        label: "Service Accounts",
        id: "service-accounts",
      },
      {
        type: "doc",
        label: "Sub Organizations",
        id: "sub-organizations",
      },
      {
        type: "doc",
        label: "Support Access",
        id: "support-access",
      },
      {
        type: "doc",
        label: "User Management",
        id: "user-management",
      },
      {
        type: "doc",
        label: "Team Management",
        id: "team-management",
      },
      {
        type: "doc",
        label: "Multi Factor Authentication",
        id: "multi-factor-authentication",
      },
      {
        type: "doc",
        label: "Deleting LambdaTest Account",
        id: "delete-lambdatest-account",
      },
      {
        type: "doc",
        label: "Group Management",
        id: "group-management",
      },
      {
        type: "doc",
        label: "Audit Logs",
        id: "audit-logs",
      },
      {
        type: "doc",
        label: "Password and Access Key Expiration Policy",
        id: "password-and-access-key-expiration-policy",
      },
      {
        type: "doc",
        label: "Tunnel Security",
        id: "tunnel-security",
      },
    ],
  ],

  ScimSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/settings-and-security",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Getting Started with Scim",
        id: "scim",
      },
      {
        type: "doc",
        label: "Azure AD",
        id: "azure-scim",
      },
      {
        type: "doc",
        label: "Okta",
        id: "okta-scim",
      },
    ],
  ],

  SingleSignOnSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/settings-and-security",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Getting Started with Single Sign-on",
        id: "single-sign-on",
      },
      {
        type: "doc",
        label: "Create SSO Connection",
        id: "lambdatest-sso-self-serve",
      },
      {
        type: "doc",
        label: "Manage SSO Connection",
        id: "lambdatest-sso-manage-connection",
      },
      {
        type: "doc",
        label: "Okta Integration",
        id: "lambdatest-sso-okta-integration",
      },
      {
        type: "doc",
        label: "OneLogin Integration",
        id: "lambdatest-sso-onelogin-using-saml",
      },
      {
        type: "doc",
        label: "Azure AD Integration",
        id: "sso-azure-integration",
      },
    ],
  ],
};
