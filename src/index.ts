import puppeteer from 'puppeteer-core';
import { createInterface } from 'readline/promises';
import { stdin, stdout } from 'process';

import {params} from './param.js';
import {archive} from './actArchive.js';


//#region puppeteer
const main = async () => {
  const rl = createInterface({input:stdin, output:stdout});
  console.log("DEBUG: neetus");
  const answer = await rl.question('(A)uto or (M)anual?')
  console.log("DEBUG: selected", answer);
  rl.close();
  return;
  // const x = params;
  // console.log("DEBUG: params", x);

  // const browser = await puppeteer.connect({
  //   browserURL: "http://127.0.0.1:21222"
  // });
  // const pages = await browser.browserContexts()[0].pages()
  // console.log("DEBUG: pages: ", pages);
  // for (const p of pages) {
  //   const matches = p.url().match(/^https:\/\/old.reddit.com\/user\/firen777/);
  //   console.log("DEBUG: ", matches);
  //   // const editBtns = await p.$$('a.edit-usertext');
  //   // for (const e of editBtns) {
  //   //   // await e.click();
  //   // }
  // }
  // browser.disconnect();
  // console.log("DEBUG: disconnect");
  // return
}
main();
//#endregion