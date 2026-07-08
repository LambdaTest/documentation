# Supported Browsers and Operating Systems

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

TestMu AI supports 3000+ browser and OS combinations for Selenium and Appium testing. Use `"latest"` as the browser version to always test on the most recent stable release.

## Desktop Browsers for Selenium

Supported desktop browsers and the operating systems they run on.

| Browser | Versions | Supported OS |
|---------|----------|--------------|
| **Chrome** | 26+ to latest | Windows 11, Windows 10, Windows 8.1, Windows 8, Windows 7, macOS Sequoia, macOS Sonoma, macOS Ventura, macOS Monterey, macOS Big Sur, macOS Catalina, macOS Mojave, macOS High Sierra, macOS Sierra, OS X El Capitan |
| **Firefox** | 4+ to latest | Windows 11, Windows 10, Windows 8.1, Windows 8, Windows 7, macOS Sequoia, macOS Sonoma, macOS Ventura, macOS Monterey, macOS Big Sur, macOS Catalina, macOS Mojave, macOS High Sierra, macOS Sierra, OS X El Capitan |
| **Safari** | 12+ to latest | macOS Sequoia, macOS Sonoma, macOS Ventura, macOS Monterey, macOS Big Sur, macOS Catalina, macOS Mojave |
| **Edge** | 15+ to latest | Windows 11, Windows 10 |
| **Edge Chromium** | 80+ to latest | Windows 11, Windows 10, macOS Sequoia, macOS Sonoma, macOS Ventura, macOS Monterey, macOS Big Sur, macOS Catalina |
| **Opera** | 43+ to latest | Windows 11, Windows 10, macOS Sequoia, macOS Sonoma, macOS Ventura, macOS Monterey, macOS Big Sur, macOS Catalina |
| **IE** | 8, 9, 10, 11 | Windows 10, Windows 8.1, Windows 8, Windows 7 |

## Supported Operating Systems

All desktop operating systems available on the TestMu AI grid.

| Platform | Versions |
|----------|----------|
| **Windows** | Windows 11, Windows 10, Windows 8.1, Windows 8, Windows 7 |
| **macOS** | Sequoia, Sonoma, Ventura, Monterey, Big Sur, Catalina, Mojave, High Sierra, Sierra, El Capitan, Yosemite, Mavericks |
| **Linux** | Ubuntu 20.04 |

## Browser Version Syntax

Use these version formats in your capabilities.

| Format | Example | Description |
|--------|---------|-------------|
| `latest` | `"browserVersion": "latest"` | Most recent stable release |
| `latest-N` | `"browserVersion": "latest-5"` | N versions before the latest |
| Specific version | `"browserVersion": "120.0"` | Exact version number |

Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to see the exact browser versions and OS combinations currently available. The list updates as new browser versions are released.
