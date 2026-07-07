# Commonly Used APIs For Mobile App Testing

In this documentation, we look at some APIs that will help you optimize your mobile app testing workflow. If you are performing live or automated app testing, you can use these APIs in your scripts to perform various actions.

## Fetching The Devices Available for Testing

To fetch the Devices that are available for running Tests.

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X GET "https://mobile-api.lambdatest.com/mobile-automation/api/v1/list?region=us"
`}

| PARAMETER | EXAMPLE | DESCRIPTION |
|-----------------|-------------|------------|
| `region` | `region=us`  OR  `region=ap`  OR  `region=eu`  | Filter devices by region.  `us` - USA  `ap` - Asia Pacific  `eu` - Europe |
| `os` | `os=android`  OR  `os=ios` | Filter devices by platform. Omit to get both Android and iOS devices. |

## Uploading your Application

| PARAMETER | EXAMPLE | DESCRIPTION |
|-----------------|-------------|------------|
| `custom_id` | `-F "custom_id="Proverbial_1.0"` | You do not have to remember the `app_URL` and only use the `custom_id` to run your automation on the same app. |
| `storage` | `-F "storage=file"`  DEFAULT: `url` | Used to change the way TestMu AI stores the link.  Used when we Upload using App URL |
| `visibility` | `-F "visibility=team"`  DEFAULT: `individual` | Used to change the visibility of the application being uploaded. Once the app is uploaded using the `team`, everyone in the organisation can use the same URL to run the tests. |

**Using App File:**

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/Appname.apk"" -F "name="appname""
`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/virtualDevice" -F "appFile=@"/Users/macuser/Downloads/Appname.apk"" -F "name="appname""
`}

**Using App URL:**

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App" -F "custom_id=sampleName" -F "storage=url" -F "visibility=individual"`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/virtualDevice" -F "url=https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App" -F "custom_id=sampleName" -F "storage=url" -F "visibility=individual"`}

- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on TestMu AI by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).
- Response of above cURL will be a **JSON** object containing the `App URL` of the format - ``lt://APP123456789123456789``

## Fetching your Applications for Real Devices

  {`curl --location --request GET "https://${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}@manual-api.lambdatest.com/app/data?type=android&level=user"`}

  {`curl --location --request GET "https://${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}@manual-api.lambdatest.com/app/data?type=ios&level=user"`}

## Fetching your Applications for Virtual Devices

  {`curl --location --request GET "https://${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}@manual-api.lambdatest.com/app/data?type=emulator&level=user"`}

  {`curl --location --request GET "https://${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}@manual-api.lambdatest.com/app/data?type=simulator&level=user"`}

Shown below is the response to the above cURL request.

{`{
  "metaData": {
    "type": "ios",
    "total": 1
  },
  "data": [
    {
      "app_id": "APP100245789181570497850",
      "name": "proverbial_ios.ipa",
      "type": "ios",
      "updated_at": "2022-05-10T11:19:30.000Z",
      "shared": false,
      "source": "web-client"
    }
  ]
}`}

## Deleting your Application

To delete your uploaded apps, run the below cURL command.

{`curl --location --request DELETE "https://${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}@manual-api.lambdatest.com/app/delete" \
--header 'Content-Type: application/json' \
--data-raw '{
    "appIds" : "APPID1,APPID2"
}'
`}

{`curl --location --request DELETE "https://${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}@manual-api.lambdatest.com/app/delete" \
--header 'Content-Type: application/json' \
--data-raw '{
    "appIds" : "APPID1,APPID2"
}'
`}

Shown below is the response to the above cURL request.

{`{
  "message": "Deleted successfully."
}`}

## Processing check for your Application

To unlock features such as network logs, image injection, and screenshotunblock feature for your application, app needs to undergo a processing phase. This processing takes a few minutes after the application is uploaded. You can verify if the processing is complete before running your automation script using the following API.

{`curl --location --request POST 'https://mobile-api.lambdatest.com/mobile-automation/api/v1/fetchpatchedapkurl' \
--header 'Authorization: Basic ' \
--header 'Content-Type: application/json' \
--data-raw '{
    "appId": "APP10160161171698993659206876",
    "imageInjectionEnabled": true,
    "screenshotUnblockEnabled": true
}'`}

{`curl --location --request POST 'https://mobile-api.lambdatest.com/mobile-automation/api/v1/fetchpatchedapkurl/virtualDevice' \
--header 'Authorization: Basic ' \
--header 'Content-Type: application/json' \
--data-raw '{
    "appId": "APP10160161171698993659206876",
    "imageInjectionEnabled": true,
    "screenshotUnblockEnabled": true
}'`}

The payload allows you to check the processing status for specific features. If the **patched_url** is empty, the processing is still in progress. To check if the processing for image injection or screenshot unblock is complete, pass either **imageInjectionEnabled** or **screenshotUnblockEnabled** as `true` based on the feature you are testing.

{`{
    "data": {
        "imageinjection_ready": false, //current processing status
        "patched_url": "",
        "screenshotunblock_ready": false, //current processing status
        "status": "success"
    },
    "status": "success"
}`}

## Fetching the concurrency details

To get your concurrency details, run the below cURL command.

{`curl -u "${YOUR_LAMBDATEST_USERNAME()}:${YOUR_LAMBDATEST_ACCESS_KEY()}" -X GET "https://mobile-api.lambdatest.com/mobile-automation/api/v1/org/concurrency"`}

Shown below is the response to the above cURL request.

{`{
   "data":{
      "max_concurrency":10,
      "max_queue":150,
      "queued":0,
      "running":0
   },
   "status":"success"
}`}

## Generate publicly shareable build and test links

To generate public shareable links, run the below cURL command.

{`curl 'https://api.lambdatest.com/lshs/api/v1.0/share-item/generate-sharable-link' \
  -H 'Content-Type: application/json' \
  -u "${YOUR_LAMBDATEST_USERNAME()}:${YOUR_LAMBDATEST_ACCESS_KEY()}" \
  --data-raw '{"entityIds":["buildID"],"entityType":"App Automation Build","expiresAt":7}'`}

{`curl 'https://api.lambdatest.com/lshs/api/v1.0/share-item/generate-sharable-link' \
  -H 'Content-Type: application/json' \
  -u "${YOUR_LAMBDATEST_USERNAME()}:${YOUR_LAMBDATEST_ACCESS_KEY()}" \
  --data-raw '{"entityIds":["testID"],"entityType":"App Automation Test","expiresAt":7}'`}

| PARAMETER | DESCRIPTION |
|-----------|-------------|
| `entityIds` | Pass the build ID or test ID |
| `entityType` | Use `App Automation Build` for builds or `App Automation Test` for tests |
| `expiresAt` | Number of days after which the shareable link will expire (7, 15, or 30) |

The shareable links are valid for a period of 7, 15, or 30 days, after which they will expire.

>That’s all! In case you have any questions or need any additional information, you could reach out at our **24X7 Chat Support** or mail us directly at support@testmuai.com.
