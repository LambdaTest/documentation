# How to Set Up Basic Authentication on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Basic Authentication on TestMu AI lets you pass HTTP username and password credentials during Safari web automation sessions on real iOS devices, using a lambda hook that answers Base64-encoded Authorization prompts automatically so your scripts reach protected pages without sign-in.

## Introduction

Basic Authentication is a method for an HTTP user agent to provide a user name and password when making a request. In basic HTTP authentication, a request contains a header field in the form of `Authorization: Basic `, where credentials is the **Base64** encoding of ID and password joined by a single colon `:`.

To provide support for Basic Authentication in Safari during Web Automation, we have introduced a new lambda hook in our `iOS` Real Device (RD) web sessions.

1. This hook is not compatible with any app-based sessions.
2. The capability `autoAcceptAlerts` must be set to `false`.

## How to Use

Here is an example of how to use the Basic Authentication hook in Python:

```python
data = {
"username": "admin",
"password": "admin",
"url": "https://the-internet.herokuapp.com/basic_auth",
}
driver.execute_script("lambda-ios-set-basic-auth", data)
```

It is important to note that all three parameters (username, password, URL) are mandatory and must be passed to the script.

## Limitations

Please note, this hook is designed to be used exclusively with Safari on iOS Real Device (RD) web sessions and is not compatible with Android sessions or any app-based sessions.
