# How to Use Regular Expressions for XCUI on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Using regular expressions for XCUI device selection on TestMu AI lets you match any available device with a pattern instead of one exact model, so tests still run when your chosen iPhone or iPad is busy, widening the device search.

**Supported on:** Real devices

Regular Expression or REGEX is widely used to make searching/find characters in a string.

When you run a test on TestMu AI using a specific device, there may be scenarios, in which the particular device that you selected isn’t available. In these scenarios, REGEX will help you widen the search request for devices to run the test on.

To quote an example, consider you want to run the test on an iPhone. It doesn’t matter which one, but it’s got to be an iPhone. In these cases, we can use REGEX to specify exactly that. You’ll now be allotted any iPhone that’s available which widens the search of devices considerably.

Platform version is not mandatory only if `deviceName` is passed using regex. If there is no regex in `deviceName`, passing `platformVersion` is mandatory.

Usual way to pass the `deviceName` and `platformVersion` looks like this:

```java
"device" : ["Pixel 6 Pro-12"]
```

Passing `deviceName` using REGEX:
```java
"device" : ["Pixel.*-12"]
```

**Right way to pass REGEX:**

``Pixel.*-12``
``Pixel.*``




REGEX is currently possible on the `deviceName` as of now and *not* on the ``platformVerison``.
