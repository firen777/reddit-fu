import puppeteer from 'puppeteer-core';

import {params} from './param.js';

//#region puppeteer
const asyncPuppet = async () => {
  const x = params;
  console.log("DEBUG: params", x);

  const browser = await puppeteer.connect({
    browserURL: "http://127.0.0.1:21222"
  });
  const pages = await browser.browserContexts()[0].pages()
  console.log("DEBUG: pages: ", pages);
  for (const p of pages) {
    const matches = p.url().match(/^https:\/\/old.reddit.com\/user\/firen777/);
    console.log("DEBUG: ", matches);
    // const editBtns = await p.$$('a.edit-usertext');
    // for (const e of editBtns) {
    //   // await e.click();
    // }
  }
  browser.disconnect();
  console.log("DEBUG: disconnect");
  return
}
asyncPuppet();
//#endregion