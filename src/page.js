const { By, until, Key } = require('selenium-webdriver');

const defaultTimeout = 5000;
const defaultNavigationTimeout = 5000;

const $ = async selector => {
  return driver.findElement(By.css(selector));
};

const $$ = async selector => {
  return driver.findElements(By.css(selector));
};

const $x = async selector => {
  return driver.findElements(By.xpath(selector));
};

const close = async () => driver.quit();

const goto = async url => driver.get(url);

const keyboard = {
  press: async keyStr => {
    await driver.sendKeys(Key[keyStr]);
  },
};

const setDefaultTimeout = timeout => {
  defaultTimeout = timeout;
};

const setDefaultNavigationTimeout = timeout => {
  defaultNavigationTimeout = timeout;
};

const type = async (selector, text, ...extra) => {
  const el = await $(selector);
  await el.sendKeys(text);

  if (extra) {
    for (const e of extra) {
      if (Key[e]) {
        await el.sendKeys(Key[e]);
      } else {
        await el.sendKeys(e);
      }
    }
  }
};

const waitForSelector = async (selector, { timeout = defaultTimeout } = {}) => {
  return driver.wait(until.elementLocated(By.css(selector)), timeout);
};

const waitForFunction = async func => {
  throw new Error('Not Implemented');
};

const waitFor = async arg => {
  switch (typeof arg) {
    case 'number':
      return driver.sleep(arg);

    case 'string':
      return waitForSelector(arg);

    case 'function':
      return waitForFunction(arg);

    default:
      throw new Error('Invalid argument');
  }
};

module.exports = {
  $,
  $$,
  $x,
  close,
  goto,
  keyboard,
  setDefaultTimeout,
  setDefaultNavigationTimeout,
  type,
  waitFor,
  waitForSelector,
  waitForFunction,
};

[
  '$eval',
  '$$eval',
  'accessibility',
  'addScriptTag',
  'addStyleTag',
  'authenticate',
  'bringToFront',
  'browser',
  'browserContext',
  'content',
  'cookies',
  'coverage',
  'emulate',
  'emulateMedia',
  'evaluate',
  'evaluateHandle',
  'evaluateOnNewDocument',
  'exposeFunction',
  'focus',
  'frames',
  'goBack',
  'goForward',
  'hover',
  'isClosed',
  'mainFrame',
  'metrics',
  'mouse',
  'pdf',
  'queryObjects',
  'reload',
  'screenshot',
  'select',
  'setBypassCSP',
  'setCacheEnabled',
  'setContent',
  'setCookie',
  'setExtraHTTPHeaders',
  'setGeolocation',
  'setJavascriptEnabled',
  'setOfflineMode',
  'setRequestInterception',
  'setUserAgent',
  'setViewport',
  'tap',
  'target',
  'title',
  'touchscreen',
  'tracing',
  'url',
  'viewport',
  'waitForNavigation',
  'waitForRequest',
  'waitForResponse',
  'waitForXPath',
  'workers',
].forEach(f => {
  module.exports[f] = async () => {
    throw new Error('Not Implemented');
  };
});
