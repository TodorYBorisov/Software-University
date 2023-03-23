const { chromium } = require('playwright-chromium');
const { expect } = require('chai');


let browser, page; // Declare reusable variables

describe('E2E tests', async function () {
  this.timeout(6000);
  before(async () => { browser = await chromium.launch(); });
  after(async () => { await browser.close(); });
  beforeEach(async () => { page = await browser.newPage(); });
  afterEach(async () => { await page.close(); });

  it('works', async () => {
    await page.goto('http://127.0.0.1:5501');
    await page.screenshot({ path: 'test.png' });
    expect(1).to.equal(1);
  });
});
