# webdriverjs-puppet

A work-in-progress attempt to use `puppeteer` API signatures with `selenium-webdriver`.
This might be useful to those familiar with `puppeteer` or it's docs but must use `selenium-webdriver`.
## Install

```npm install webdriverjs-puppet```

## Resources

[Puppeteer API](https://github.com/GoogleChrome/puppeteer/blob/v1.16.0/docs/api.md)

[Selenium Webdriver API](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/)

## Example

```javascript
const { Builder, Capabilities } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromePath = require('chromedriver').path;

const { page } = require('webdriverjs-puppet');

chrome.setDefaultService(new chrome.ServiceBuilder(chromePath).build());

const main = async () => {
  global.driver = await new Builder().withCapabilities(Capabilities.chrome()).build();

  await page.goto('https://google.com');
  await page.waitFor('input[name=q]');
  await page.type('input[name=q]', 'Puppeteer', 'ENTER');

  await page.waitFor(3000);
  await page.close();
};

main();
```

## License

MIT