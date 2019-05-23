const { Builder, Capabilities } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromePath = require('chromedriver').path;

const { page } = process.env.USE_PKG ? require('webdriverjs-puppet') : require('./src');

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
