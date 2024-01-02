---
id: npm-via-tunnel
title: Install NPM Packages via Tunnel
sidebar_label: Install NPM Packages via Tunnel
description: Guide to install npm packages using a flag that enables users to route npm install traffic via a tunnel. 
keywords:
  - Cypress Automation
  - Cypress Testing Guide
  - cypress cli commands
  - lambdatest cypress cli commands
  - lambdatest cypress cli flags
  - lambdatest cypress cli arguments
  - Cypress Test Automation
  - Cypress Automation Testing
  - Running Cypress Tests
  - Cypress Project

image: /assets/images/og-images/Getting-Started-with-Lambdatest-Automation.jpg
url: https://www.lambdatest.com/support/docs/npm-via-tunnel/
site_name: LambdaTest
slug: npm-via-tunnel/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Install NPM Packages via Tunnel",
          "item": "https://www.lambdatest.com/support/docs/npm-via-tunnel/"
        }]
      })
    }}
></script>

## What is `npm_via_tunnel`?

`npm_via_tunnel` is a flag that you can use to tell npm to route all of its traffic through a tunnel. This can be useful if you need to install npm packages from a private registry or if you are working in a restricted environment where you cannot access the public npm registry directly.

## Why use `npm_via_tunnel`?

There are a few reasons why you might want to use `npm_via_tunnel`:

- **Security:** If you are installing npm packages from a private registry, you may want to use a tunnel to protect your traffic from being intercepted.

- **Reliability:** If you are working in a restricted environment, a tunnel can help to ensure that npm can still access the registry and download the packages you need.

- **Flexibility:** You can use a tunnel to access npm packages from any source, including public registries, private registries, and even local repositories.

## How to use npm_via_tunnel

To use `npm_via_tunnel`, simply add the following line to your run settings:

```bash
"npm_via_tunnel": true
```

Once you have enabled this flag, npm will automatically route all of its traffic through the tunnel.

Example

The following example shows how to use npm_via_tunnel to install a private npm package from a private registry:

```bash
npm install --save-dev private-package@latest \
  --registry https://private-registry.example.com/npm \
  --npm_via_tunnel true
```

In this example, the --registry option specifies the URL of the private registry, and the --npm_via_tunnel flag enables tunneling.

## For first-time users:

If you are using `npm_via_tunnel` for the first time, here are a few things you should keep in mind:

- You will need to have a tunnel already configured and running. There are a number of different ways to create a tunnel, so you will need to choose the method that is best for your environment.

- You will need to specify the URL of the npm registry that you want to access. This can be done using the --registry option.

- You will need to enable `npm_via_tunnel` by setting the `npm_via_tunnel` flag to true. This can be done in your run settings or by passing the --npm_via_tunnel flag to the npm command.

- Once you have followed these steps, npm will automatically route all of its traffic through the tunnel and you will be able to install npm packages from the specified registry.

## Troubleshooting

If you are having problems with npm_via_tunnel, you can try the following troubleshooting tips:

- Make sure that the tunnel is properly configured and running.

- Verify that the npm registry is accessible from within the tunnel.

- Try disabling any proxy servers or firewalls that may be interfering with the tunnel connection.

- If you are still having problems, you can try increasing the verbosity of the npm output by passing --verbose flag. This will provide you with more detailed information about the npm install process, which can help you to identify and resolve any issues.

## Conclusion

`npm_via_tunnel` is a powerful tool that can help you to install npm packages from a variety of sources, including private registries and restricted environments. By using this flag, you can improve the security, reliability, and flexibility of your npm installations.