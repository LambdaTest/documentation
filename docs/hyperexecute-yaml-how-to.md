---
id: hyperexecute-yaml-how-to
title: YAML how to
hide_title: true
sidebar_label: YAML How to
description: YAML How to
keywords:
    - hyperexecute yaml
url: https://www.lambdatest.com/support/docs/hyperexecute-yaml-how-to/
site_name: LambdaTest
slug: hyperexecute-yaml-how-to/
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
          "name": "Cypress Integration with HyperExecute",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-yaml-how-to/"
        }]
      })
    }}
></script>

## Dependent Test Case Discovery
Dependent tests signify that one test relies on the outcome of another. To achieve this, TestNG offers the '**dependsOnMethods**' attribute within @Test annotations.

For instance, consider the code snippet in which '**SignIn()**' depends on '**OpenBrowser()**,' and '**LogOut()**' depends on 'SignIn().'

```java
import org.testng.annotations.Test;
public class DependsOnTest {
  @Test
  public void OpenBrowser() {
	  System.out.println("The browser is opened");
  }
  
  @Test (dependsOnMethods = { "OpenBrowser" })
  public void SignIn() {
	  System.out.println("User has signed in successfully");
  }
  
  @Test (dependsOnMethods = { "SignIn" })
  public void LogOut() {
	  System.out.println("The user logged out successfully");
  }
}
```

To discover and manage dependent tests using the Test Discovery command, you can use the following syntax:

```yaml
mvn test -Dmode=discover -Dplatname=win -Dframework=testng -Ddiscovery=dependent
```

This command will provide a Test Discovery Result that lists the tests and their dependencies, ensuring that dependent tests are executed in the correct order, such as ["Test1#SignIn,Test1#LogOut,Test1#OpenBrowser"].
