---
id: smartui-troubleshooting-guide
title: Comprehensive Troubleshooting Guide for SmartUI
sidebar_label: Troubleshooting Guide
description: Comprehensive troubleshooting guide for common SmartUI issues, including solutions, best practices, and diagnostic steps
keywords:
  - troubleshooting
  - smartui issues
  - visual testing problems
  - error resolution
  - debugging smartui
  - common errors
url: https://www.testmuai.com/support/docs/smartui-troubleshooting-guide/
site_name: LambdaTest
slug: smartui-troubleshooting-guide/
canonical: https://www.testmuai.com/support/docs/smartui-troubleshooting-guide/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "Troubleshooting Guide",
          "item": `${BRAND_URL}/support/docs/smartui-troubleshooting-guide/`
        }]
      })
    }}
></script>

This comprehensive troubleshooting guide covers common issues you may encounter when using SmartUI for visual regression testing. Each issue includes symptoms, possible causes, and step-by-step solutions.

## Quick Diagnostic Checklist

Before diving into specific issues, run through this quick checklist:

- [ ] Project token is set correctly (`PROJECT_TOKEN` environment variable)
- [ ] SmartUI CLI is installed and up-to-date (`npx smartui --version`)
- [ ] Configuration file (`.smartui.json`) exists and is valid JSON
- [ ] Network connectivity to <BrandName /> servers
- [ ] Project exists in SmartUI dashboard
- [ ] Credentials (for Hooks) are set correctly (`LT_USERNAME`, `LT_ACCESS_KEY`)
- [ ] Project name matches exactly (case-sensitive)

---

## Troubleshooting by Category

<Tabs className='docs__val' groupId='troubleshooting-category'>
<TabItem value='authentication' label='Authentication & Setup' default>
**Issue: Screenshots Not Appearing in Dashboard**

**Symptoms**:
- Tests run successfully but no screenshots appear in SmartUI dashboard
- Build appears empty in dashboard
- No error messages in logs

**Possible Causes**:
- Project token not set or incorrect
- Project name mismatch
- Network connectivity issues
- CLI not installed or outdated
- Configuration file issues

**Solutions**:

1. **Verify Project Token**:
   <Tabs className='docs__val' groupId='platform'>
   <TabItem value='macos-linux' label='MacOS/Linux' default>
   ```bash
   echo $PROJECT_TOKEN
   ```
   If empty, set it:
   ```bash
   export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
   ```
   </TabItem>
   <TabItem value='windows-cmd' label='Windows CMD'>
   ```bash
   echo %PROJECT_TOKEN%
   ```
   If empty, set it:
   ```bash
   set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
   ```
   </TabItem>
   <TabItem value='powershell' label='PowerShell'>
   ```powershell
   echo $env:PROJECT_TOKEN
   ```
   If empty, set it:
   ```powershell
   $env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
   ```
   </TabItem>
   </Tabs>

2. **Check Project Name**: Verify project name in dashboard matches exactly (case-sensitive)

3. **Verify SmartUI CLI Installation**:
   ```bash
   npx smartui --version
   ```
   If outdated, update:
   ```bash
   npm install -g @lambdatest/smartui-cli@latest
   ```
4. **Check Network Connectivity**:
   ```bash
   curl -I https://smartui.lambdatest.com
   ```
5. **Review Test Execution Logs**: Look for error messages or warnings in test output

**Related Documentation**: [Project Settings](/support/docs/smartui-project-settings), [Running Your First Project](/support/docs/smartui-running-your-first-project)

---

### Issue: "Project Not Found" Error

**Symptoms**:
- Error message: "Project not found" or "Invalid project token"
- Tests fail to start
- Authentication errors

**Possible Causes**:
- Incorrect project token
- Project deleted or renamed
- Token from wrong project
- Extra spaces or quotes in token
- Token format incorrect

**Solutions**:

1. **Verify Project Exists**:
   - Log into [SmartUI Dashboard](https://smartui.lambdatest.com/)
   - Check if project exists
   - Verify project name matches

2. **Copy Token Directly**:
   - Go to Project Settings in dashboard
   - Copy project token directly (don't type manually)
   - Ensure token includes project ID prefix (e.g., `123456#...`)

3. **Check Token Format**:
   - Token should be in format: `PROJECT_ID#TOKEN_VALUE`
   - No extra spaces before or after
   - No quotes needed when setting environment variable

4. **Verify Token Scope**:
   - Ensure token is from the correct project
   - Check if project was moved or renamed

**Related Documentation**: [Project Settings](/support/docs/smartui-project-settings)

---

### Issue: Credentials Not Working (Hooks)

**Symptoms**:
- Tests fail with authentication errors
- "Invalid credentials" message
- Connection refused errors

**Possible Causes**:
- `LT_USERNAME` or `LT_ACCESS_KEY` not set
- Incorrect credentials
- Credentials from wrong account
- Environment variables not exported

**Solutions**:

1. **Verify Credentials Are Set**:
   <Tabs className='docs__val' groupId='platform'>
   <TabItem value='macos-linux-1' label='MacOS/Linux' default>
   ```bash
   echo $LT_USERNAME
   echo $LT_ACCESS_KEY
   ```
   </TabItem>
   <TabItem value='windows-cmd-1' label='Windows CMD'>
   ```bash
   echo %LT_USERNAME%
   echo %LT_ACCESS_KEY%
   ```
   </TabItem>
   <TabItem value='powershell-1' label='PowerShell'>
   ```powershell
   echo $env:LT_USERNAME
   echo $env:LT_ACCESS_KEY
   ```
   </TabItem>
   </Tabs>

2. **Get Correct Credentials**:
   - Log into [<BrandName /> Dashboard](https://accounts.lambdatest.com/detail/profile)
   - Click "Access Key" button
   - Copy username and access key

3. **Set Credentials Correctly**:
   <Tabs className='docs__val' groupId='platform'>
   <TabItem value='macos-linux-2' label='MacOS/Linux' default>
   ```bash
   export LT_USERNAME="your_username"
   export LT_ACCESS_KEY="your_access_key"
   ```
   </TabItem>
   <TabItem value="windows-cmd-2" label='Windows CMD'>
   ```bash
   set LT_USERNAME="your_username"
   set LT_ACCESS_KEY="your_access_key"
   ```
   </TabItem>
   <TabItem value='powershell-2' label='PowerShell'>
   ```powershell
   $env:LT_USERNAME="your_username"
   $env:LT_ACCESS_KEY="your_access_key"
   ```
   </TabItem>
   </Tabs>

**Related Documentation**: [Selenium Visual Regression](/support/docs/selenium-visual-regression), [Playwright Visual Regression](/support/docs/playwright-visual-regression)

---

### Issue: CLI Installation and Version Management

**Symptoms**:
- "command not found: smartui" error
- CLI commands not working
- Using outdated CLI version
- Inconsistent behavior between terminals

**Possible Causes**:
- CLI not installed globally
- CLI installed locally but not accessible
- Using outdated version
- Multiple versions installed
- PATH not configured correctly

**Solutions**:

1. **Understanding Global vs Local Installation**:

   **Global Installation (`-g` flag)**:
   - Installs CLI system-wide, accessible from any terminal
   - Command available as `smartui` directly
   - Requires administrator/sudo privileges
   - Best for: Single user, consistent environment
```bash
   npm install -g @lambdatest/smartui-cli
   ```
   **Local Installation (without `-g`)**:
   - Installs CLI in project's `node_modules`
   - Access via `npx smartui` or `./node_modules/.bin/smartui`
   - No admin privileges needed
   - Best for: Project-specific versions, CI/CD pipelines
```bash
   npm install @lambdatest/smartui-cli
   npx smartui --version
   ```
2. **Installing Latest Versions**:

   **SmartUI CLI**:
   ```bash
   # Global installation (latest)
   npm install -g @lambdatest/smartui-cli@latest

   # Local installation (latest)
   npm install @lambdatest/smartui-cli@latest

   # Using npx (always uses latest)
   npx @lambdatest/smartui-cli@latest --version
   ```
   **SmartUI Storybook CLI**:
   ```bash
   # Global installation (latest)
   npm install -g @lambdatest/smartui-storybook@latest

   # Local installation (latest)
   npm install @lambdatest/smartui-storybook@latest

   # Using npx (always uses latest)
   npx @lambdatest/smartui-storybook@latest --version
   ```
3. **Checking Current Version**:
   ```bash
   # If installed globally
   smartui --version

   # If installed locally or using npx
   npx smartui --version
   ```
4. **Updating to Latest Version**:
   ```bash
   # Global update
   npm update -g @lambdatest/smartui-cli

   # Local update
   npm update @lambdatest/smartui-cli

   # Force reinstall latest
   npm install -g @lambdatest/smartui-cli@latest --force
   ```
5. **Resolving "Command Not Found"**:

   **If installed globally**:
   - Verify npm global bin is in PATH:
     ```bash
     echo $PATH | grep -i node
     npm config get prefix
     ```
   - Add to PATH if missing:
     ```bash
     # macOS/Linux - Add to ~/.bashrc or ~/.zshrc
     export PATH="$PATH:$(npm config get prefix)/bin"
     ```
   **If installed locally**:
   - Always use `npx` prefix:
     ```bash
     npx smartui --version
     npx smartui exec -- <command>
     ```
   - Or use direct path:
     ```bash
     ./node_modules/.bin/smartui --version
     ```
6. **Best Practices**:
   - **For Development**: Use local installation with `npx` for project-specific versions
   - **For CI/CD**: Use `npx @lambdatest/smartui-cli@latest` to ensure latest version
   - **For Global Use**: Install globally with `-g` flag for convenience
   - **Version Pinning**: Use specific versions in `package.json` for reproducible builds

**Related Documentation**: [CLI Complete Reference](/support/docs/smartui-cli-complete-reference), [Running Your First Project](/support/docs/smartui-running-your-first-project)

</TabItem>

<TabItem value='screenshot' label='Screenshot & Content'>
**Issue: Screenshots Show Blank or Incorrect Content**

**Symptoms**:
- Screenshots captured but show blank pages
- Partial content missing
- Incorrect viewport size
- Elements not rendered

**Possible Causes**:
- Page not fully loaded
- JavaScript not executed
- Viewport size issues
- Timing issues
- Lazy loading not handled

**Solutions**:

1. **Add Explicit Waits** (Framework-specific):

   **Selenium (Java)**:
   ```java
   WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
   wait.until(ExpectedConditions.presenceOfElementLocated(By.id("content")));
   SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name");
   ```
   **Playwright (JavaScript)**:
   ```javascript
   await page.goto('https://example.com');
   await page.waitForSelector('#content', { state: 'visible' });
   await page.waitForLoadState('networkidle');
   await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name");
   ```
   **Cypress**:
   ```javascript
   cy.visit('https://example.com');
   cy.get('#content').should('be.visible');
   cy.wait(2000); // Wait for animations
   cy.smartuiSnapshot('Screenshot Name');
   ```
2. **Enable JavaScript in Configuration**:
   ```json
   {
     "enableJavaScript": true,
     "waitForTimeout": 2000,
     "waitForPageRender": 5000
   }
   ```
3. **Increase Wait Timeouts**:
   ```json
   {
     "waitForTimeout": 3000,
     "waitForPageRender": 10000
   }
   ```
4. **Verify Viewport Size**:
   - Check viewport dimensions in configuration
   - Ensure viewport matches expected page layout
   - Test with different viewport sizes

5. **Handle Lazy Loading**:
   - Scroll to bottom before screenshot
   - Use `waitForPageRender` option
   - See [Handling Lazy Loading](/support/docs/smartui-handle-lazy-loading) for details

**Related Documentation**: [Handling Lazy Loading](/support/docs/smartui-handle-lazy-loading), [Configuration Options](/support/docs/smartui-sdk-config-options)

---

**Issue: Screenshot Names Not Matching Baseline**

**Symptoms**:
- Screenshots appear as "New" instead of comparing with baseline
- Baseline comparison not working
- Screenshot names inconsistent

**Possible Causes**:
- Screenshot name changed
- Baseline doesn't exist
- Name contains special characters
- Case sensitivity issues

**Solutions**:

1. **Ensure Consistent Naming**:
   - Use same screenshot names across test runs
   - Document naming convention
   - Avoid dynamic names with timestamps

2. **Verify Baseline Exists**:
   - Check SmartUI dashboard for baseline build
   - Ensure baseline was approved
   - Verify baseline build name matches

3. **Avoid Special Characters**:
   - Use alphanumeric characters and hyphens
   - Avoid spaces, special characters, or unicode
   - Example: `HomePage-Header` not `HomePage Header!`

4. **Check Case Sensitivity**:
   - Screenshot names are case-sensitive
   - `HomePage` ≠ `homepage`
   - Use consistent casing

5. **Use Meaningful Names**:
   ```javascript
   // Good
   cy.smartuiSnapshot('ProductPage-MainContent');
   cy.smartuiSnapshot('CheckoutPage-PaymentForm');

   // Bad
   cy.smartuiSnapshot('screenshot1');
   cy.smartuiSnapshot('test-' + Date.now());
   ```
**Related Documentation**: [Baseline Management](/support/docs/smartui-baseline-management)

---

**Issue: High Mismatch Percentage or False Positives**

**Symptoms**:
- Mismatch percentage higher than expected
- Many false positives in comparisons
- Dynamic content causing issues

**Possible Causes**:
- Dynamic content not ignored
- Threshold settings too strict
- Rendering differences
- Baseline issues

**Solutions**:

1. **Use ignoreDOM for Dynamic Content**:
   ```javascript
   let options = {
     ignoreDOM: {
       id: ["timestamp", "user-id", "session-token"],
       class: ["dynamic-content", "ad-banner"],
       cssSelector: ["[data-testid='timestamp']"]
     }
   };
   smartuiSnapshot(driver, "Screenshot Name", options);
   ```
2. **Adjust Pixel Threshold**:
   - Go to Project Settings
   - Adjust Pixel Threshold (Relaxed/Recommended/Strict)
   - Or set custom threshold value

3. **Use Smart Ignore**:
   - Enable Smart Ignore in project settings
   - Automatically ignores layout shifts and displacements

4. **Review Comparison Settings**:
   - Check Error Highlight Color
   - Adjust Custom Mismatch Acceptance
   - Review Advanced Comparison Settings

5. **Handle Dynamic Data Properly**:
   - See [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) for comprehensive guide
   - Use `selectDOM` for focused comparisons
   - Document ignored elements

**Related Documentation**: [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data), [Project Settings](/support/docs/smartui-project-settings), [Smart Ignore](/support/docs/smartui-smartignore)

</TabItem>

<TabItem value='build' label='Build & Execution'>
**Issue: Build Execution Fails**

**Symptoms**:
- `npx smartui exec` command fails
- Tests don't start
- Configuration errors

**Possible Causes**:
- Missing or incorrect configuration file
- Invalid JSON in configuration
- Port conflicts
- Permission issues
- CLI version issues

**Solutions**:

1. **Verify Configuration File Exists**:
   ```bash
   ls -la .smartui.json
   ```
   If missing, create it:
   ```bash
   npx smartui config:create .smartui.json
   ```
2. **Validate JSON Syntax**:
   ```bash
   cat .smartui.json | python -m json.tool
   ```
   Or use online JSON validator

3. **Check Port Availability**:
   ```bash
   # Check if port 5000 is in use
   lsof -i :5000
   ```
   Use different port:
   ```bash
   npx smartui exec -P 5001 -- <command>
   ```
4. **Check File Permissions**:
   ```bash
   chmod 644 .smartui.json
   ```
5. **Update CLI**:
   ```bash
   npm install -g @lambdatest/smartui-cli@latest
   ```
6. **Check CLI Help**:
   ```bash
   npx smartui --help
   npx smartui exec --help
   ```
**Related Documentation**: [CLI Documentation](/support/docs/smartui-cli), [Configuration Options](/support/docs/smartui-sdk-config-options)

---

**Issue: Dependencies Not Resolving**

**Symptoms**:
- Package manager cannot find dependencies
- Installation fails
- Version conflicts

**Possible Causes**:
- Incorrect dependency version
- Package registry access issues
- Network connectivity problems
- Node version mismatch

**Solutions**:

1. **Check Latest Versions**:

   **npm packages**:
   ```bash
   npm view @lambdatest/smartui-cli version
   npm view @lambdatest/playwright-driver version
   ```
   **Maven (Java)**:
   - Check [Maven Central](https://mvnrepository.com/artifact/io.github.lambdatest/lambdatest-java-sdk)

   **pip (Python)**:
   ```bash
   pip index versions lambdatest-selenium-driver
   ```
2. **Clear Package Manager Cache**:

   **npm**:
   ```bash
   npm cache clean --force
   ```
   **Maven**:
   ```bash
   mvn clean
   ```
   **pip**:
   ```bash
   pip cache purge
   ```
3. **Verify Internet Connectivity**:
   ```bash
   ping registry.npmjs.org
   ```
4. **Check Node Version** (for npm):
   ```bash
   node --version
   ```
   Ensure Node.js v20.3+ is installed (required for SmartUI CLI v4.x.x)

5. **Use Package Lock Files**:
   - Use `package-lock.json` for npm
   - Use `requirements.txt` with pinned versions for pip
   - Use `pom.xml` with specific versions for Maven

**Related Documentation**: [SDK Documentation](/support/docs/smartui-selenium-java-sdk), [CLI Documentation](/support/docs/smartui-cli)

</TabItem>

<TabItem value='cicd' label='CI/CD Integration'>
**Issue: Pipeline/Workflow Fails with "Secret/Variable Not Found"**

**Symptoms**:
- CI/CD pipeline fails
- Error about missing secrets/variables
- Authentication failures in pipeline

**Possible Causes**:
- Secrets/variables not created
- Secret/variable names don't match
- Secrets/variables not accessible
- Scope issues

**Solutions**:

1. **Verify Secrets/Variables Exist**:

   **GitHub Actions**:
   - Go to Settings → Secrets and variables → Actions
   - Verify `LT_USERNAME`, `LT_ACCESS_KEY`, `PROJECT_TOKEN` exist

   **GitLab**:
   - Go to Settings → CI/CD → Variables
   - Check variables are set

   **Bitbucket**:
   - Go to Repository Settings → Pipelines → Repository variables
   - Verify variables exist

2. **Check Variable Names**:
   - Ensure exact match (case-sensitive)
   - No extra spaces
   - Correct prefix/suffix

3. **Verify Scope**:
   - Check if variables are repository, group, or instance level
   - Ensure variables accessible to pipeline
   - Check protected branch settings

4. **Pass Variables to Steps**:

   **GitHub Actions**:
   ```yaml
   env:
     PROJECT_TOKEN: ${{ secrets.PROJECT_TOKEN }}
   ```
   **GitLab**:
   ```yaml
   variables:
     PROJECT_TOKEN: $PROJECT_TOKEN
   ```
**Related Documentation**: [GitHub Actions Integration](/support/docs/smartui-with-github-actions), [GitLab Integration](/support/docs/smartui-with-gitlab), [Bitbucket Integration](/support/docs/smartui-with-bitbucket)

---

**Issue: Tests Run But No Results in Dashboard (CI/CD)**

**Symptoms**:
- Pipeline completes successfully
- No screenshots in SmartUI dashboard
- Build appears empty

**Possible Causes**:
- Incorrect PROJECT_TOKEN
- Project name mismatch
- Network issues
- Workflow step failure

**Solutions**:

1. **Verify PROJECT_TOKEN**:
   - Check token in SmartUI Project Settings
   - Ensure token includes project ID prefix
   - Verify token is set as secret/variable

2. **Check Pipeline Logs**:
   - Review CI/CD logs for errors
   - Look for SmartUI CLI output
   - Check for network errors

3. **Verify Network Connectivity**:
   - Ensure CI/CD runner can access <BrandName /> servers
   - Check firewall/proxy settings
   - Verify DNS resolution

4. **Check SmartUI CLI Step**:
   - Ensure `npx smartui exec` step completed
   - Verify command syntax is correct
   - Check for timeout issues

**Related Documentation**: [CI/CD Integration Guides](/support/docs/smartui-with-github-actions)

</TabItem>

<TabItem value='configuration' label='Configuration'>
**Issue: Configuration File Errors**

**Symptoms**:
- "must NOT have additional properties" error
- Invalid JSON errors
- Configuration not applied

**Possible Causes**:
- Invalid JSON syntax
- Properties in wrong location
- Unsupported options
- File encoding issues

**Solutions**:

1. **Validate JSON Syntax**:
   ```bash
   cat .smartui.json | python -m json.tool
   ```
2. **Check Property Placement**:
   - `customCSS` must be at top level, not inside `web`
   - Verify structure matches [Configuration Options](/support/docs/smartui-sdk-config-options)

3. **Review Supported Options**:
   - Check [Configuration Options](/support/docs/smartui-sdk-config-options) for valid properties
   - Remove unsupported options
   - Verify option names are correct

4. **Check File Encoding**:
   - Ensure file is UTF-8 encoded
   - No BOM (Byte Order Mark)
   - Use standard line endings

**Related Documentation**: [Configuration Options](/support/docs/smartui-sdk-config-options), [Custom CSS](/support/docs/smartui-custom-css)

---

**Issue: Environment Variables Not Persisting or Not Working**

**Symptoms**:
- Environment variables work in one terminal but not another
- Variables reset after closing terminal
- Variables not available in VS Code terminal
- Variables not working in CI/CD pipelines
- "Variable not found" errors

**Possible Causes**:
- Variables set only in current session
- Shell startup file not configured
- VS Code terminal not loading shell config
- Variables not exported correctly
- Different shell environments

**Solutions**:

1. **Making Environment Variables Persistent**:

   To keep environment variables consistent across all terminals, configure them in your shell's startup file:

   <Tabs className='docs__val' groupId='platform'>
   <TabItem value='bash' label='Bash (.bashrc)' default>
   ```bash
   # Edit ~/.bashrc
   nano ~/.bashrc

   # Add your environment variables
   export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
   export LT_USERNAME="your_username"
   export LT_ACCESS_KEY="your_access_key"

   # Reload the configuration
   source ~/.bashrc
   ```
   </TabItem>
   <TabItem value='zsh' label='Zsh (.zshrc)'>
   ```bash
   # Edit ~/.zshrc
   nano ~/.zshrc

   # Add your environment variables
   export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
   export LT_USERNAME="your_username"
   export LT_ACCESS_KEY="your_access_key"

   # Reload the configuration
   source ~/.zshrc
   ```
   </TabItem>
   <TabItem value='powershell-3' label='PowerShell ($PROFILE)'>
   ```powershell
   # Check if profile exists
   Test-Path $PROFILE

   # Create profile if it doesn't exist
   if (!(Test-Path $PROFILE)) {
       New-Item -Type File -Path $PROFILE -Force
   }

   # Edit profile
   notepad $PROFILE

   # Add your environment variables
   $env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
   $env:LT_USERNAME="your_username"
   $env:LT_ACCESS_KEY="your_access_key"

   # Reload the profile
   . $PROFILE
   ```
   </TabItem>
   </Tabs>

2. **Configuring Environment Variables in VS Code**:

   If environment variables don't work in VS Code terminals, configure them in VS Code settings:

   **Option 1: User Settings (settings.json)**

   Open VS Code settings (`Ctrl+,` or `Cmd+,`) and add:
```json
   {
     "terminal.integrated.env.linux": {
       "PROJECT_TOKEN": "123456#1234abcd-****-****-****-************",
       "LT_USERNAME": "your_username",
       "LT_ACCESS_KEY": "your_access_key"
     },
     "terminal.integrated.env.osx": {
       "PROJECT_TOKEN": "123456#1234abcd-****-****-****-************",
       "LT_USERNAME": "your_username",
       "LT_ACCESS_KEY": "your_access_key"
     },
     "terminal.integrated.env.windows": {
       "PROJECT_TOKEN": "123456#1234abcd-****-****-****-************",
       "LT_USERNAME": "your_username",
       "LT_ACCESS_KEY": "your_access_key"
     }
   }
   ```
   **Option 2: Workspace Settings (.vscode/settings.json)**

   Create or edit `.vscode/settings.json` in your project root:
```json
   {
     "terminal.integrated.env.linux": {
       "PROJECT_TOKEN": "123456#1234abcd-****-****-****-************"
     },
     "terminal.integrated.env.osx": {
       "PROJECT_TOKEN": "123456#1234abcd-****-****-****-************"
     },
     "terminal.integrated.env.windows": {
       "PROJECT_TOKEN": "123456#1234abcd-****-****-****-************"
     }
   }
   ```
   **Note**: Restart VS Code or reload the window after making changes.

3. **Using .env Files**:

   For project-specific environment variables, use a `.env` file:

   **Create `.env` file in project root**:
   ```bash
   PROJECT_TOKEN=123456#1234abcd-****-****-****-************
   LT_USERNAME=your_username
   LT_ACCESS_KEY=your_access_key
   ```
   **Load .env file automatically**:

   **For Node.js projects**:
   - Install `dotenv` package:
     ```bash
     npm install dotenv
     ```
   - Load in your scripts:
     ```javascript
     require('dotenv').config();
     ```
   - Or use `dotenv-cli`:
     ```bash
     npm install -g dotenv-cli
     dotenv smartui exec -- <command>
     ```
   **For Python projects**:
   - Install `python-dotenv`:
     ```bash
     pip install python-dotenv
     ```
   - Load in your scripts:
     ```python
     from dotenv import load_dotenv
     load_dotenv()
     ```
   **For VS Code**:
   - Install "DotENV" extension
   - Or use "Python" extension which auto-loads `.env` files

4. **Verifying Environment Variables**:

<Tabs className='docs__val' groupId='platform'>
<TabItem value='macos-linux-3' label='MacOS/Linux' default>
   ```bash
   # Check if variable is set
   echo $PROJECT_TOKEN
   echo $LT_USERNAME
   echo $LT_ACCESS_KEY

   # List all SmartUI-related variables
   env | grep -E "PROJECT_TOKEN|LT_USERNAME|LT_ACCESS_KEY|SMARTUI"
   ```

</TabItem>
<TabItem value='windows-cmd-3' label='Windows CMD'>
   ```bash
   # Check if variable is set
   echo %PROJECT_TOKEN%
   echo %LT_USERNAME%
   echo %LT_ACCESS_KEY%

   # List all environment variables
   set | findstr /i "PROJECT_TOKEN LT_USERNAME LT_ACCESS_KEY SMARTUI"
   ```
   </TabItem>
   <TabItem value='powershell-4' label='PowerShell'>
   ```powershell
   # Check if variable is set
   echo $env:PROJECT_TOKEN
   echo $env:LT_USERNAME
   echo $env:LT_ACCESS_KEY

   # List all SmartUI-related variables
   Get-ChildItem Env: | Where-Object { $_.Name -like "*PROJECT_TOKEN*" -or $_.Name -like "*LT_*" -or $_.Name -like "*SMARTUI*" }
   ```
</TabItem>
</Tabs>

5. **Troubleshooting Common Issues**:

   **Issue: Variables not available after adding to startup file**
   - Solution: Restart terminal or run `source ~/.bashrc` / `source ~/.zshrc`

   **Issue: VS Code terminal not picking up variables**
   - Solution: Add to VS Code settings.json as shown above, then restart VS Code

   **Issue: Variables work in terminal but not in scripts**
   - Solution: Ensure variables are exported (use `export` in bash/zsh)

   **Issue: Different values in different terminals**
   - Solution: Use startup file configuration instead of session-only exports

   **Issue: .env file not loading**
   - Solution: Verify file is in project root, check file permissions, ensure extension/package is installed

6. **Best Practices**:

   - **Never commit sensitive data**: Add `.env` to `.gitignore`
   - **Use different values per environment**: Development, staging, production
   - **Document required variables**: List in README or documentation
   - **Use CI/CD secrets**: Store sensitive values in CI/CD platform secrets/variables
   - **Validate on startup**: Check if required variables are set before running tests

**Related Documentation**: [CLI Environment Variables](/support/docs/smartui-cli-env-variables), [Running Your First Project](/support/docs/smartui-running-your-first-project)

</TabItem>

<TabItem value='advanced' label='Advanced Issues'>
**Issue: Proxy Configuration Not Working**

**Symptoms**:
- Tests fail behind proxy
- Connection timeouts
- Authentication issues

**Possible Causes**:
- Proxy not configured
- Authentication not set
- Proxy URL incorrect
- Network restrictions

**Solutions**:

1. **Set Proxy Environment Variables**:
   ```bash
   export HTTP_PROXY="http://proxy.example.com:8080"
   export HTTPS_PROXY="http://proxy.example.com:8080"
   export NO_PROXY="localhost,127.0.0.1"
   ```
2. **For Authenticated Proxy**:
   - Currently, SmartUI CLI may not support proxy authentication
   - Use proxy without authentication if possible
   - Contact support for proxy authentication support

3. **Verify Proxy Settings**:
   ```bash
   echo $HTTP_PROXY
   echo $HTTPS_PROXY
   ```
**Related Documentation**: [CLI Environment Variables](/support/docs/smartui-cli-env-variables)

---

**Issue: Tunnel Connection Issues**

**Symptoms**:
- Tunnel connection fails
- Localhost not accessible
- Connection timeouts

**Possible Causes**:
- Tunnel not started
- Port conflicts
- Firewall blocking
- Network issues

**Solutions**:

1. **Start Tunnel**:
   ```bash
   ./LT --user <username> --key <access_key>
   ```
2. **Verify Tunnel Status**:
   - Check tunnel is running
   - Verify tunnel shows as "Active" in dashboard

3. **Check Port Availability**:
   - Ensure no conflicts on tunnel ports
   - Check firewall settings

**Related Documentation**: [Tunnel Documentation](/support/docs/testing-locally-hosted-pages), [SDK Tunnel](/support/docs/smartui-sdk-tunnel)

</TabItem>

</Tabs>

---

## Getting Additional Help

If you encounter issues not covered in this guide:

1. **Check Related Documentation**:
   - Review framework-specific documentation
   - Check [Project Settings](/support/docs/smartui-project-settings)
   - Review [Configuration Options](/support/docs/smartui-sdk-config-options)

2. **Search Existing Issues**:
   - Check [<BrandName /> Support](https://www.lambdatest.com/support)
   - Review community forums
   - Search knowledge base

3. **Contact Support**:
   - Email: support@testmuai.com
   - [24/7 Chat Support](https://www.lambdatest.com/support)
   - Include error messages, logs, and configuration details

4. **Provide Diagnostic Information**:
   - CLI version: `npx smartui --version`
   - Configuration file (redact sensitive data)
   - Error messages and logs
   - Steps to reproduce

## Additional Resources

- [Project Settings](/support/docs/smartui-project-settings)
- [Configuration Options](/support/docs/smartui-sdk-config-options)
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [CLI Documentation](/support/docs/smartui-cli)
