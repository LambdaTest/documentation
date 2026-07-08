# Setting Browser Options

## Browser-Specific Options

Configure Chrome, Firefox, and Edge browser arguments using their respective Options classes.

Selenium lets you set browser arguments for Chromium-based browsers. When selecting Chrome, Firefox, and Edge, you can set browser options using `ChromeOptions`, `EdgeOptions`, and `FirefoxOptions` capability as shown below.

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class ChromeTest {
public static void main(String[] args) {
ChromeOptions options = new ChromeOptions();
// Set Chrome capabilities
options.addArguments("--headless");

WebDriver driver = new ChromeDriver(options);
driver.get("http://example.com");
// Your test code here
driver.quit();
}
}
```

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

public class FirefoxTest {
public static void main(String[] args) {
FirefoxOptions options = new FirefoxOptions();
// Set Firefox capabilities
options.addArguments("--headless");

WebDriver driver = new FirefoxDriver(options);
driver.get("http://example.com");
// Your test code here
driver.quit();
}
}
```

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;

public class EdgeTest {
public static void main(String[] args) {
EdgeOptions options = new EdgeOptions();
// Set Edge capabilities
options.addArguments("--headless");

WebDriver driver = new EdgeDriver(options);
driver.get("http://example.com");
// Your test code here
driver.quit();
}
}
```

## Automate IE Mode in Microsoft Edge

Run IE Mode automation on Microsoft Edge for Windows 11 using the InternetExplorerOptions class.

TestMu AI's Automation allows you to automate IE Mode in Microsoft Edge on Windows 11. Pass the below desired capability in your test script and execute your tests.

```java
InternetExplorerOptions browserOptions = new InternetExplorerOptions();
browserOptions.setPlatformName("Windows 11");
browserOptions.setBrowserVersion("11.0");
HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("username", "Your LambdaTest Username");
ltOptions.put("accessKey", "Your LambdaTest Access Key");
ltOptions.put("project", "Untitled");
ltOptions.put("w3c", true);
browserOptions.setCapability("LT:Options", ltOptions);
```

For a detailed guide on IE Mode testing, see [Test in IE Mode on Edge](/support/docs/ie-mode-on-edge/).
