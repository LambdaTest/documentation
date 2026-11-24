---
id: network-proxy-support-in-flutter-apps
title: Network Proxy Support in Flutter Apps
sidebar_label: Network Proxy Support
description: Learn why Flutter apps ignore the device network proxy by default, how to update your app to honor it, and how to capture network logs with the network capability on TestMu AI.
keywords:
  - flutter
  - testmu ai
  - network proxy
  - network logs
  - dio
  - flutter http
  - real devices
url: https://www.testmuai.com/support/docs/network-proxy-support-in-flutter-apps/
site_name: TestMu AI
slug: network-proxy-support-in-flutter-apps/
canonical: https://www.testmuai.com/support/docs/network-proxy-support-in-flutter-apps/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';



<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/network-proxy-support-in-flutter-apps/"
    },
    "headline": "Network Proxy Support in Flutter Apps",
    "description": "Learn why Flutter apps ignore the device network proxy by default, how to update your app to honor it, and how to capture network logs with the network capability on TestMu AI.",
    "url": "https://www.testmuai.com/support/docs/network-proxy-support-in-flutter-apps/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "App Automation",
    "keywords": [
      "flutter",
      "testmu ai",
      "network proxy",
      "network logs",
      "dio"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Add the dependencies to pubspec.yaml",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "dependencies:\n  flutter:\n    sdk: flutter\n  flutter_system_proxy:\n    git:\n      url: https://github.com/LambdaTest/flutter_system_proxy.git\n      ref: main\n  dio: ^5.6.0      # if your app uses Dio\n  http: ^1.4.0     # if your app uses the http package"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install the dependencies",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "flutter pub get"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Configure Dio to use the system proxy",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Dart",
        "text": "import 'dart:io';\nimport 'package:dio/dio.dart';\nimport 'package:dio/io.dart';\nimport 'package:flutter_system_proxy/flutter_system_proxy.dart';\n\nclass ProxyAwareDio {\n  final Dio dio = Dio(BaseOptions(\n    connectTimeout: const Duration(seconds: 10),\n    receiveTimeout: const Duration(seconds: 10),\n  ));\n\n  Future<Response<T>> get<T>(String url) async {\n    // Look up the proxy the device is configured to use for this URL.\n    // Returns a value such as \"PROXY host:port\", or \"DIRECT\" if no proxy is set.\n    final proxy = await FlutterSystemProxy.findProxyFromEnvironment(url);\n\n    // Tell Dio's underlying HttpClient to route requests through that proxy.\n    (dio.httpClientAdapter as IOHttpClientAdapter).createHttpClient = () {\n      final client = HttpClient();\n      client.findProxy = (uri) => proxy;\n      return client;\n    };\n\n    return dio.get<T>(url);\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Configure the http package to use the system proxy",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Dart",
        "text": "import 'dart:io';\nimport 'package:http/http.dart' as http;\nimport 'package:http/io_client.dart';\nimport 'package:flutter_system_proxy/flutter_system_proxy.dart';\n\nFuture<http.Client> createProxyAwareClient(String baseUrl) async {\n  // Look up the proxy the device is configured to use.\n  final proxy = await FlutterSystemProxy.findProxyFromEnvironment(baseUrl);\n\n  // Route all requests from this client through that proxy.\n  final httpClient = HttpClient()..findProxy = (uri) => proxy;\n\n  return IOClient(httpClient);\n}\n\n// Usage\nfinal client = await createProxyAwareClient('https://api.example.com');\nfinal response = await client.get(Uri.parse('https://api.example.com/users'));"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Apply the proxy globally with HttpOverrides",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Dart",
        "text": "import 'dart:io';\nimport 'package:flutter/widgets.dart';\nimport 'package:flutter_system_proxy/flutter_system_proxy.dart';\n\nclass ProxyHttpOverrides extends HttpOverrides {\n  final String proxy;\n  ProxyHttpOverrides(this.proxy);\n\n  @override\n  HttpClient createHttpClient(SecurityContext? context) {\n    return super.createHttpClient(context)..findProxy = (uri) => proxy;\n  }\n}\n\nFuture<void> main() async {\n  WidgetsFlutterBinding.ensureInitialized();\n  final proxy = await FlutterSystemProxy.findProxyFromEnvironment('https://example.com');\n  HttpOverrides.global = ProxyHttpOverrides(proxy);\n  runApp(const MyApp());\n}"
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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Enable Network Proxy Support in a Flutter App",
      "description": "Learn why Flutter apps ignore the device network proxy by default, how to update your app to honor it, and how to capture network logs with the network capability on TestMu AI.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Add the dependencies",
          "text": "Add the flutter_system_proxy plugin to your app's pubspec.yaml along with the HTTP package your app uses (dio or http), then run flutter pub get.",
          "url": "https://www.testmuai.com/support/docs/network-proxy-support-in-flutter-apps/#step-1-add-the-dependencies"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Configure your HTTP client to use the system proxy",
          "text": "Look up the device proxy with FlutterSystemProxy.findProxyFromEnvironment and apply it to Dart's HttpClient through its findProxy callback. For Dio, set it through IOHttpClientAdapter; for the http package, wrap the configured HttpClient in an IOClient.",
          "url": "https://www.testmuai.com/support/docs/network-proxy-support-in-flutter-apps/#step-2-configure-your-http-client-to-use-the-system-proxy"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Route all API calls through the configured client",
          "text": "Make sure every network call in your app uses the proxy-aware client. Requests made with a plain Dio instance, a default http call, or a new HttpClient bypass the proxy. Optionally, apply the proxy app-wide with HttpOverrides.global.",
          "url": "https://www.testmuai.com/support/docs/network-proxy-support-in-flutter-apps/#step-3-route-all-api-calls-through-the-configured-client"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Capture network logs with the network capability",
          "text": "Set the network capability to true in your test configuration. TestMu AI captures your app's HTTP and HTTPS requests and shows them in the Network tab of the test session.",
          "url": "https://www.testmuai.com/support/docs/network-proxy-support-in-flutter-apps/#capture-network-logs-with-the-network-capability"
        }
      ]
    }
  ]) }}
/>

# Configure Proxy Support in Flutter Apps

When you run Flutter tests on <BrandName /> real devices with a proxy enabled (such as Network, Tunnel, or Dedicated Proxy), the device’s traffic is routed through the proxy. Unlike most native **Android** and **iOS** apps, **Flutter** apps do not automatically use the device’s proxy settings.

This section explains why this happens and how to configure your app to use the device proxy.

## Why the Proxy Does Not Work with Flutter Apps by Default

Native apps typically use the platform's networking stack, such as `HttpURLConnection` or `OkHttp` on Android, and `URLSession` on iOS. These networking stacks can automatically honor the device's proxy settings.

Flutter apps work differently. Popular Dart networking packages such as `http` and `dio` use Dart's **HttpClient** from `dart:io`. To route your app's API requests through the device proxy, you must retrieve the proxy settings and configure the **HTTP client** to use them.

For more information, refer to the [Flutter networking documentation](https://docs.flutter.dev/data-and-backend/networking?) and [Dart HttpClient documentation](https://api.dart.dev/dart-io/HttpClient-class.html?).

As a result:

- Requests made by your Flutter app may bypass the proxy configured on the device.
- When these requests bypass the proxy, they may not be captured and therefore may not appear in the Logs section. For example, when you enable the `network: true` capability, network logs related to your application will not be available. The same applies to Tunnel logs and other proxy configurations.
- Other traffic on the device, such as browser traffic or traffic from native SDKs, may still use the proxy.


## Configure Your Flutter App to Use the Proxy


### Step 1: Add the dependencies

Add `flutter_system_proxy` to your app's `pubspec.yaml` file.

```yaml
dependencies:
  flutter_system_proxy:
    git:
      url: https://github.com/LambdaTest/flutter_system_proxy.git
      ref: main
```

Run the following command to install the dependency:

```bash
flutter pub get
```

### Step 2: Configure the Proxy


#### Using Dio

If your app uses **Dio**, configure its **HTTP adapter** in your API or service file.

```dart

import 'dart:io';

import 'package:dio/dio.dart';
import 'package:dio/io.dart';
import 'package:flutter_system_proxy/flutter_system_proxy.dart';

Future<Dio> createProxyAwareDio() async {
  final dio = Dio();

  final proxy = await FlutterSystemProxy.findProxyFromEnvironment(
    // Replace this with your application's API URL.
    'https://example.com',
  );

  (dio.httpClientAdapter as IOHttpClientAdapter)
      .createHttpClient = () {
    final client = HttpClient();
    client.findProxy = (uri) => proxy;
    return client;
  };

  return dio;
}

```

You may use this configured Dio instance for your API requests instead of creating a separate Dio instance with the default configuration.

```dart
final dio = await createProxyAwareDio();

final response = await dio.get(
  'https://example.com/api',
);

```

For more information, refer to the [Dio IOHttpClientAdapter documentation](https://pub.dev/documentation/dio/latest/io/IOHttpClientAdapter-class.html?).

#### Using the http Package

If your app uses the **http package**, configure an **IOClient** in your API or service file.

```dart

import 'dart:io';

import 'package:http/http.dart' as http;
import 'package:http/io_client.dart';
import 'package:flutter_system_proxy/flutter_system_proxy.dart';

Future<http.Client> createProxyAwareClient() async {
  final proxy = await FlutterSystemProxy.findProxyFromEnvironment(
    // Replace this with your application's API URL.
    'https://example.com',
  );

  final httpClient = HttpClient()
    ..findProxy = (uri) => proxy;

  return IOClient(httpClient);
}

```

Use the configured client to make your API requests instead of the default `http.get()` or `http.post()` methods.

For example:

```dart
final client = await createProxyAwareClient();

final response = await client.get(
  Uri.parse('https://example.com/api'),
);

```

For more information, refer to the [Dart HttpClient.findProxy](https://api.dart.dev/dart-io/HttpClient/findProxy.html?) documentation.

### Step 3: Run Your Test

Build your app with the changes above and upload it to <BrandName />. Run your test using the required proxy configuration.

Your Flutter app's API requests should now use the device's configured proxy.



