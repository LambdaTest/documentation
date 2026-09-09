# Regular Expression - Appium

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Regular Expressions (RegEx) are powerful tools for searching and manipulating strings. When running tests on TestMu AI with a specific device, there may be times when the exact device you selected isn't available. In such cases, RegEx will help you widen your search criteria to find any available device that matches your requirements.

TestMu AI provides RegEx support for both **deviceName** and **platformVersion**, making it easier to find the right devices for your tests.

**Note:** Regular Expression support is currently available **only for App Automation**.
It is **not supported for Web Automation on Virtual Devices** at this time.

## Why Use RegEx?

Imagine you want to run a test on an iPhone. You don't need a specific model, just any iPhone. Using **RegEx**, you can specify this requirement, and TestMu AI will allocate any available iPhone. This flexibility can significantly broaden the search and increase the chances of finding a suitable device quickly.

## Regex Characters for `deviceName`

| REGEX CHARACTERS | DESCRIPTION | EXAMPLE |
|------------------|-------------|---------|
| `.*` | The characters `.*` are used to include all the devices that match the string passed.**In the example given**:You'll be allocated any device from the Inventory that's an iPhone or a Pixel device respectively.See detailed examples for using this RegEx here:a) **For iPhone**: [regex101 example](https://regex101.com/r/4BOgRs/1)b) **For Pixel**: [regex101 example](https://regex101.com/r/7dovT2/1)    | `"(iPhone.*)"``"(Pixel.*)"` |
| `,` | This character `,` is used to include more combinations of different devices in a single expression.You can also use `OR` operator in these cases. **In the example given**:1. We have added 2 regex characters `.*` and `,` to show that using both in combination, we'll fetch any device from the Inventory that contains the string Pixel, Nexus, Galaxy.2. You'll be allocated any available Pixel or Galaxy device.| `"(Pixel.*),(Galaxy.*)"` |
| `[]` | The `[]` is used to match special/reserved characters such as `+`,`.`,`(`,`)` etc. in the device name search. Not using the `[]` may treat these characters as regex characters.**In the example given**:1. You'll be allocated any iPad Pro 12.9 (2022).2. In case you send `"iPad Pro 12.9 (2022).*"` you will not get the desired allocated device.| `"iPad Pro 12[.]9 [(]2022[)].*"` |
| `[]` | The `[]` is used to include a range of devices in the combination mentioned using a **single character only**.**In the example given**:Fetching any device available from Pixel 3, Pixel 3a, Pixel 4, Pixel 5, Pixel 6, Pixel 6 Pro, etc.See detailed examples for using this RegEx here:[regex101 example](https://regex101.com/r/H4IvpF/1) | `"(Pixel [3456].*)"` `"(Pixel [3-6].*)"` |
| `$` | The `$` character indicates the end of a string. **In the example given**:1. Allocating only Pixel 6 device & will neglect the Pixel 6 Pro devices.2. Allocates only Pixel 3 or Pixel 6 rejecting others like Pixel 3a, Pixel 6 Pro etc.See detailed examples for using this RegEx here:a) **For Pixel 6**: [regex101 example](https://regex101.com/r/8qYuq6/1)b) **For Pixel 6 & 3**: [regex101 example](https://regex101.com/r/9p7sqe/1) | `"(Pixel 6$)"``"(Pixel [36]$)"` |
| `^` | The `^` character serves multiple purposes, it negates a character set when used inside brackets (e.g., [^8] matches any except 8), signifies that the match must occur at the beginning of the line when placed at the start of a pattern and, in combination with a negative lookahead (?!), it excludes specific patterns from matching. **In the example given**: 1.The first part of this regex `.*` matches Oneplus devices except those containing 8 in name. 2. Excludes all the devices containing `Tab`  | `"(OnePlus [^8].*)"` `"(^(?!.*Tab).*)"`|
|  \|  | The  \| is used to match any of the specified devices in the list. **In the example given**: You will be allocated any iPad Pro 12.9 (2020), iPad Pro 12.9 (2021), or iPad Pro 12.9 (2022)  | "iPad Pro 12.9 (202(0\|1\|2))" |

## Regex Characters for `platformVersion`

| REGEX CHARACTERS | DESCRIPTION | EXAMPLE |
|------------------|-------------|---------|
| `.*` | The characters `.*` are used to match any version that starts with the given string.**In the example given**:You'll be allocated any platform version that starts with 13 or 14.   | `"(13.*)"``"(14.*)"` |
| `,` | This character `,` is used to include more combinations of different versions.**In the example given**:1. We have added 2 regex characters `.*` and `,` to show that using both in combination, we'll fetch any platform version that contains the string 13, 14, or 15.2. You'll be allocated any available platform version 13, 14, or 15.| `"(13.*),(14.*),(15.*)"` |
| `[]` | The `[]` is used to include a range of versions in the combination mentioned using a **single character only**.**In the example given**:Fetching any platform version available from 12, 13, 15 | `"1[235]"` |
| `^` | The `^` is used to negate a character from the search.  **In the example given**:This matches os versions starting with 1 and not having immediate character = 5. | `"1[^5].*"` |
|  \|  | The  \| is used to match any of the specified platform versions in the list. **In the example given**:  1. We have added 2 regex characters  \|  and `.*` to show that using both in combination, we'll fetch any platform version that contains the string 13 or 14.  2. You'll be allocated any available platform version 13 or 14.| "(1(3\|4).*)"  |

> To run tests on **minor OS versions** while using `platformVersion` capability, please reach out at our **24x7 Chat Support** or you could also mail us at [support@testmuai.com](mailto:support@testmuai.com).

You can pass both `deviceName` and `platformVersion` regex patterns together or use any one of them as per your requirements. This flexibility allows you to match specific devices, versions, or combinations based on your needs.
