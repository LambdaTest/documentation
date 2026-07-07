# Upload Contacts (.vcf) on Real Devices

Preload contacts on real devices before your test session begins. Upload `.vcf` (vCard) contact files using the Upload Media API, and they are automatically injected into the device's native Contacts app when your session starts.

This is useful for testing:
- Messaging and dialer apps
- CRM and contact management apps
- Social apps with contact picker flows
- Any app that reads from the device's contact list

## Supported Devices

| Platform | Minimum OS Version |
|----------|--------------------|
| Android  | 10 and above       |
| iOS      | 14 and above       |

## Step 1: Upload a VCF File

Upload your `.vcf` file using the Upload Media API.

### Request

{`curl --user "${YOUR_LAMBDATEST_USERNAME()}:${YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://api.lambdatest.com/mfs/v1.0/media/upload" -F "media_file=@"/path/to/contacts.vcf"" -F "type=contact" -F "custom_id=SampleContacts"`
}

**Request Parameters**
- `media_file`: The `.vcf` contact file to upload from your local system.
- `type`: Set to `contact` for vCard files (Optional)
- `custom_id`: A custom identifier for the uploaded file.

### Response

```json
{
"media_url": "lt://MEDIAvcf_abc123def456",
"name": "contacts.vcf",
"status": "success",
"custom_id": "my-contacts",
"contact_count": 12
}
```

Use the `media_url` from the response in the next step.

## Step 2: Set the Capability in Your Test Script

Once the contacts are uploaded to TestMu AI's cloud, set the **uploadMedia** capability to the **media_url** parameter returned in the API response.

```python
desired_capabilities = {
"uploadMedia": ["lt://MEDIAf446d4170cd946aa9ec307d10cb679b9", "lt://MEDIA8d13e569b3e140c18e82b066022518bd"]
}
```

- Each automation session permits a maximum of five file uploads.
- The contact file must be in vCard (`.vcf`) format.
- Maximum file size is 5 MB with up to 100 contacts per file.
