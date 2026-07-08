# Basic Authentication in SmartUI CLI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

When capturing screenshots of applications or websites that are protected with authentication, you need to configure SmartUI to pass the necessary authentication headers. This ensures that SmartUI can access and properly render all assets on the page.

## Why Basic Authentication is Needed

Without proper authentication configuration:
- Protected assets may fail to load
- Screenshots might be incomplete or broken
- CSS and other resources behind authentication may not be accessible

## Configuration

Add the following configuration to your `.smartui.json` file to enable basic authentication:

```json
{
"basicAuthorization": {
"username": "username",
"password": "password"
}
}
```

### Configuration Parameters

- **username**: Your authentication username
- **password**: Your authentication password

## Example Usage

Here's a complete example of a SmartUI configuration file with basic authentication:

```json
{
"web": {
"browsers": ["chrome", "firefox"],
"viewports": [
[1920, 1080],
[1366, 768]
]
},
"basicAuthorization": {
"username": "your-username",
"password": "your-password"
},
"waitForTimeout": 1000
}
```

## Using Environment Variables

For better security, you can use environment variables for your authentication credentials:

```json
{
"basicAuthorization": {
"username": "${AUTH_USERNAME}",
"password": "${AUTH_PASSWORD}"
}
}
```

Then set your environment variables:

```bash
export AUTH_USERNAME="your-username"
```

```bash
set AUTH_USERNAME="your-username"
```

```powershell
$env:AUTH_USERNAME="your-username"
```

## Common Issues and Solutions

1. **Assets Not Loading**
   - Verify that the provided credentials have access to all required resources
   - Check if any assets are served from different domains requiring separate authentication

2. **Authentication Failures**
   - Ensure credentials are correct and active
   - Verify that the authentication endpoint is accessible from TestMu AI's infrastructure

When using basic authentication:
1. Test your credentials manually before running SmartUI tests
2. Ensure all required assets are accessible with the provided credentials
3. Use secure methods to manage your authentication credentials
4. Consider implementing a test user specifically for visual testing
