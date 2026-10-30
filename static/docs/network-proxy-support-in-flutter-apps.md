# Network Proxy Support in Flutter Apps

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

get(String url) async {\n    // Look up the proxy the device is configured to use for this URL.\n    // Returns a value such as \"PROXY host:port\", or \"DIRECT\" if no proxy is set.\n    final proxy = await FlutterSystemProxy.findProxyFromEnvironment(url);\n\n    // Tell Dio's underlying HttpClient to route requests through that proxy.\n    (dio.httpClientAdapter as IOHttpClientAdapter).createHttpClient = () {\n      final client = HttpClient();\n      client.findProxy = (uri) => proxy;\n      return client;\n    };\n\n    return dio.get(url);\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Configure the http package to use the system proxy",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Dart",
        "text": "import 'dart:io';\nimport 'package:http/http.dart' as http;\nimport 'package:http/io_client.dart';\nimport 'package:flutter_system_proxy/flutter_system_proxy.dart';\n\nFuture createProxyAwareClient(String baseUrl) async {\n  // Look up the proxy the device is configured to use.\n  final proxy = await FlutterSystemProxy.findProxyFromEnvironment(baseUrl);\n\n  // Route all requests from this client through that proxy.\n  final httpClient = HttpClient()..findProxy = (uri) => proxy;\n\n  return IOClient(httpClient);\n}\n\n// Usage\nfinal client = await createProxyAwareClient('https://api.example.com');\nfinal response = await client.get(Uri.parse('https://api.example.com/users'));"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Apply the proxy globally with HttpOverrides",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Dart",
        "text": "import 'dart:io';\nimport 'package:flutter/widgets.dart';\nimport 'package:flutter_system_proxy/flutter_system_proxy.dart';\n\nclass ProxyHttpOverrides extends HttpOverrides {\n  final String proxy;\n  ProxyHttpOverrides(this.proxy);\n\n  @override\n  HttpClient createHttpClient(SecurityContext? context) {\n    return super.createHttpClient(context)..findProxy = (uri) => proxy;\n  }\n}\n\nFuture main() async {\n  WidgetsFlutterBinding.ensureInitialized();\n  final proxy = await FlutterSystemProxy.findProxyFromEnvironment('https://example.com');\n  HttpOverrides.global = ProxyHttpOverrides(proxy);\n  runApp(const MyApp());\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Enable network logs with the network capability",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"app\": \"lt://APP_ID\",\n  \"testSuite\": \"lt://TEST_SUITE_ID\",\n  \"device\": [\"Galaxy S24-14\"],\n  \"network\": true,\n  \"deviceLog\": true,\n  \"build\": \"Flutter Network Logs\"\n}"
      }
    ],
    "dateModified": "2026-10-27T11:53:00+05:30"
  }) }}
/>

# Network Proxy Support in Flutter Apps

When you run Flutter tests on TestMu AI real devices with network logs enabled, the device's traffic is routed through a network proxy so that requests and responses can be captured. Most native Android and iOS apps pick up this proxy automatically. **Flutter apps do not.** Unless a few settings are updated in your app, its API calls will bypass the proxy, and the network logs for your test session will be empty or incomplete.

This section explains why this happens and what you need to change in your app so that its traffic honors the device proxy.

## Why the network proxy doesn't work with Flutter apps by default

Native apps send network requests through the platform's own networking stack: `HttpURLConnection` / OkHttp on Android, and `URLSession` on iOS. These stacks read the device's proxy settings and route traffic through the proxy without any extra code.

Flutter apps work differently. Popular Dart networking packages such as [`http`](https://pub.dev/packages/http) and [`dio`](https://pub.dev/packages/dio) are built on Dart's own `HttpClient` from `dart:io`. This client has its own networking implementation and **does not read the operating system's proxy settings**. By default, it connects directly to the destination server.

As a result:

- Requests made by your Flutter app skip the proxy that TestMu AI configures on the device.
- Those requests are not captured, so they don't appear in the network logs, even when `network: true` is set.
- Other traffic on the device (for example, from the browser or from native SDKs inside your app) may still appear, which can make the logs look partially populated.

To fix this, your app must explicitly look up the device's proxy and tell Dart's `HttpClient` to use it.

## How to make your Flutter app honor the network proxy

The approach is the same regardless of which HTTP package you use:

1. **Read the device's proxy settings** using the [`flutter_system_proxy`](https://github.com/LambdaTest/flutter_system_proxy) plugin.
2. **Apply the proxy to Dart's `HttpClient`** through its `findProxy` callback.
3. **Send all API calls through this configured client.**

### Step 1: Add the dependencies

Add `flutter_system_proxy` to your app's `pubspec.yaml`, along with the HTTP package your app already uses:

```yaml
dependencies:
  flutter:
    sdk: flutter
  flutter_system_proxy:
    git:
      url: https://github.com/LambdaTest/flutter_system_proxy.git
      ref: main
  dio: ^5.6.0      # if your app uses Dio
  http: ^1.4.0     # if your app uses the http package
```

Then run:

```bash
flutter pub get
```

### Step 2: Configure your HTTP client to use the system proxy

Choose the example that matches the networking package your app uses.

Using Dio

Dio exposes the underlying Dart `HttpClient` through `IOHttpClientAdapter`. Set the proxy there when the client is created:

```dart
import 'dart:io';
import 'package:dio/dio.dart';
import 'package:dio/io.dart';
import 'package:flutter_system_proxy/flutter_system_proxy.dart';

class ProxyAwareDio {
  final Dio dio = Dio(BaseOptions(
    connectTimeout: const Duration(seconds: 10),
    receiveTimeout: const Duration(seconds: 10),
  ));

  Future<Response<T>> get<T>(String url) async {
    // Look up the proxy the device is configured to use for this URL.
    // Returns a value such as "PROXY host:port", or "DIRECT" if no proxy is set.
    final proxy = await FlutterSystemProxy.findProxyFromEnvironment(url);

    // Tell Dio's underlying HttpClient to route requests through that proxy.
    (dio.httpClientAdapter as IOHttpClientAdapter).createHttpClient = () {
      final client = HttpClient();
      client.findProxy = (uri) => proxy;
      return client;
    };

    return dio.get<T>(url);
  }
}
```

Older Dio versions use `onHttpClientCreate` instead of `createHttpClient`. Use whichever property your installed version of Dio provides.

Using the http package

The `http` package lets you supply your own Dart `HttpClient` through `IOClient`. Create the `HttpClient`, set its proxy, and wrap it:

```dart
import 'dart:io';
import 'package:http/http.dart' as http;
import 'package:http/io_client.dart';
import 'package:flutter_system_proxy/flutter_system_proxy.dart';

Future<http.Client> createProxyAwareClient(String baseUrl) async {
  // Look up the proxy the device is configured to use.
  final proxy = await FlutterSystemProxy.findProxyFromEnvironment(baseUrl);

  // Route all requests from this client through that proxy.
  final httpClient = HttpClient()..findProxy = (uri) => proxy;

  return IOClient(httpClient);
}

// Usage
final client = await createProxyAwareClient('https://api.example.com');
final response = await client.get(Uri.parse('https://api.example.com/users'));
```

### Step 3: Route all API calls through the configured client

Make sure every network call in your app uses the proxy-aware client from Step 2. Any request made with a plain `Dio()` instance, a default `http.get()` call, or a new `HttpClient()` will still bypass the proxy and won't be captured.

A simple way to guarantee this is to create the configured client once (for example, in your API service or dependency-injection layer) and reuse it throughout the app.

**Apply the proxy globally**
If your app has many independent HTTP clients, you can apply the proxy app-wide with `HttpOverrides.global`. Every `HttpClient` created after this runs, including those inside Dio and `http`, will use the proxy:

```dart
import 'dart:io';
import 'package:flutter/widgets.dart';
import 'package:flutter_system_proxy/flutter_system_proxy.dart';

class ProxyHttpOverrides extends HttpOverrides {
  final String proxy;
  ProxyHttpOverrides(this.proxy);

  @override
  HttpClient createHttpClient(SecurityContext? context) {
    return super.createHttpClient(context)..findProxy = (uri) => proxy;
  }
}

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  final proxy = await FlutterSystemProxy.findProxyFromEnvironment('https://example.com');
  HttpOverrides.global = ProxyHttpOverrides(proxy);
  runApp(const MyApp());
}
```

### iOS: using native networking (alternative)

On iOS, you can also make network calls from native Swift code using `URLSession`, which respects the system proxy automatically. Your Flutter code calls the native method through a [platform channel](https://docs.flutter.dev/platform-integration/platform-channels). This is useful if you already have native networking code or prefer not to add a plugin.

## Capture network logs with the `network` capability

Once your app routes its traffic through the device proxy, set the `network` capability to `true` in your test configuration. TestMu AI will then capture your app's HTTP and HTTPS requests and display them in the **Network** tab of the test session on the dashboard.

```json
{
  "app": "lt://APP_ID",
  "testSuite": "lt://TEST_SUITE_ID",
  "device": ["Galaxy S24-14"],
  "network": true,
  "deviceLog": true,
  "build": "Flutter Network Logs"
}
```

Setting `network: true` on its own is not enough for Flutter apps. Without the code changes above, the capability is applied, but your app's requests never pass through the proxy, so they won't appear in the logs.

## Verify the setup

1. Build your app with the changes above and upload it to TestMu AI.
2. Run a test with `network: true`.
3. Open the test session on the dashboard and go to the **Network** tab.
4. Confirm that requests to your app's API endpoints are listed.

## Troubleshooting

| Issue | Likely cause | What to do |
|---|---|---|
| Network tab is empty or shows only non-app traffic | Some requests are still made with a client that doesn't have the proxy configured | Search your code for `Dio()`, `http.get`, `http.post`, and `HttpClient()` and make sure they all use the proxy-aware client, or use `HttpOverrides.global` |
| Requests fail with a handshake or certificate error after enabling the proxy | The app doesn't trust the certificate used for HTTPS inspection | Contact [TestMu AI support](https://www.testmuai.com/support/) for guidance on certificate handling for your app |
| `findProxyFromEnvironment` returns `DIRECT` | No proxy is configured on the device, for example when running locally | This is expected outside a TestMu AI session with `network: true`. The app connects directly, so no change to your code is needed |
