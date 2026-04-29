#!/usr/bin/env python3
"""
One-shot Selenium (grid) check for SmartUI + nested smartUI.options.boundingBoxes.

Reads credentials from the environment only (never commit secrets):
  LT_USERNAME, LT_ACCESS_KEY — required
  SMARTUI_PROJECT — SmartUI **Web** project name (recommended; exact match from dashboard)
  PROJECT_TOKEN — optional; used as SMARTUI_PROJECT fallback if SMARTUI_PROJECT is unset

Expected outcomes (manual confirmation on SmartUI):
  1) Script exits 0: hub session started, page loaded, smartui.takeScreenshot hook ran without WebDriverException.
  2) SmartUI dashboard: new build under SMARTUI_PROJECT with screenshot "p2p-bbox-nested-options".
  3) If project name is wrong: session may start but SmartUI shows no build / error — set SMARTUI_PROJECT.

Usage:
  export LT_USERNAME=... LT_ACCESS_KEY=...
  export SMARTUI_PROJECT='My Web Project Name'
  python3 scripts/validate_smartui_p2p_options.py
"""

from __future__ import annotations

import json
import os
import sys
import time

try:
    from selenium import webdriver
    from selenium.webdriver.chrome.options import Options as ChromeOptions
except ImportError:
    print("Install Selenium: pip install selenium", file=sys.stderr)
    sys.exit(1)


def main() -> int:
    user = os.environ.get("LT_USERNAME", "").strip()
    token = os.environ.get("LT_ACCESS_KEY", "").strip()
    if not user or not token:
        print("Missing LT_USERNAME or LT_ACCESS_KEY", file=sys.stderr)
        return 2

    project = (
        os.environ.get("SMARTUI_PROJECT", "").strip()
        or os.environ.get("SMARTUI_PROJECT_NAME", "").strip()
        or os.environ.get("PROJECT_TOKEN", "").strip()
    )
    if not project:
        print(
            "Set SMARTUI_PROJECT to your SmartUI Web project name (Projects page), "
            "or set PROJECT_TOKEN if your org maps it for hub runs.",
            file=sys.stderr,
        )
        return 2

    build = os.environ.get("SMARTUI_BUILD", "validate-p2p-bbox-nested-options")

    lt_options = {
        "username": user,
        "accessKey": token,
        "visual": True,
        "name": "validate_smartui_p2p_options.py",
        "build": build,
        "smartUI.project": project,
        "smartUI.build": build,
        "smartUI.options": {
            "boundingBoxes": [
                {"left": 0, "top": 0, "right": 640, "bottom": 480},
            ]
        },
    }

    chrome = ChromeOptions()
    chrome.set_capability("browserName", "Chrome")
    chrome.set_capability("browserVersion", "latest")
    chrome.set_capability("platformName", "Windows 11")
    chrome.set_capability("LT:Options", lt_options)

    hub = f"https://{user}:{token}@hub.lambdatest.com/wd/hub"
    print("Starting Remote WebDriver session (SmartUI visual + boundingBoxes in smartUI.options)...")
    driver = webdriver.Remote(command_executor=hub, options=chrome)

    try:
        driver.set_page_load_timeout(60)
        driver.get("https://example.com")
        time.sleep(2)

        shot = {
            "screenshotName": "p2p-bbox-nested-options",
            "fullPage": False,
        }
        driver.execute_script("smartui.takeScreenshot", shot)
        time.sleep(5)

        raw = driver.execute_script(
            "return (typeof smartui !== 'undefined' && smartui.fetchScreenshotStatus) "
            "? smartui.fetchScreenshotStatus : null;"
        )
        # Some drivers return string from alternate hook form; normalize
        status = raw
        if isinstance(raw, str):
            try:
                status = json.loads(raw)
            except json.JSONDecodeError:
                status = raw

        print("Session id:", getattr(driver, "session_id", "?"))
        print("fetchScreenshotStatus (if exposed):", status)

        print("\n--- Pass criteria ---")
        print("1) No exception from executeScript('smartui.takeScreenshot', ...).")
        print("2) In SmartUI, open project:", project[:20] + ("…" if len(project) > 20 else ""))
        print("   Build:", build)
        print("   Screenshot name: p2p-bbox-nested-options")
        print("3) If screenshot missing: verify SMARTUI_PROJECT is the Web project *name*, not only CLI token.")
        return 0
    finally:
        driver.quit()


if __name__ == "__main__":
    raise SystemExit(main())
