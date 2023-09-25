import puppeteer from 'puppeteer';

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('http://baidu.com/');

  const title = await page.evaluate(() => {
    return document.title
  })

  await browser.close();
})();
