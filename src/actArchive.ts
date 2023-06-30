import fs from 'fs';
import path from 'path';
import puppeteer, { Page } from 'puppeteer-core';



export const archive = async (page:Page)=>{
  // const archiveDir = 'archive';
  // if (!fs.existsSync(path.join(archiveDir, ))) {
  //   await fs.promises.mkdir(archiveDir);
  // }

  const editBtns = await page.$$('a.edit-usertext');
  for (const e of editBtns) {
    console.log("DEBUG: editBtns iteration", e);
    try {
      await e.click();
    } catch (error) {
      console.error("ERR: not clickable. Probably already clicked.");
      console.error(error);
    }
  }
  
  // const editAreas = await page.$$eval('div.usertext-edit textarea', list=>list.map(t=>t.value));
  // for (const area of editAreas) {
  //   console.log("DEBUG: ", area);
  // }

  const divThings = await page.$$('div.thing');
  const archivedContent = divThings.map(async (d)=>{
    const permalink = await d.$(`a[data-event-action="permalink"]`)
      .then((a)=>a?a.getProperty('href'):null)
      .then((href)=>href?href.jsonValue():'');
    const comments = await d.$(`a[data-event-action="comments"]`)
      .then((a)=>a?a.getProperty('href'):null)
      .then((href)=>href?href.jsonValue():'');
      
    return {
      permalink,
      comments,

    }
  })

  const x = await Promise.all(archivedContent);
  console.log("DEBUG: ", x);
}

const main = async ()=>{
  const browser = await puppeteer.connect({
    browserURL: "http://127.0.0.1:21222",
  });
  const pages = await browser.browserContexts()[0].pages();
  const redditPage = pages.find((p)=>(!!p.url().match('https://old.reddit.com/user/firen777')));
  if (redditPage) {
    await archive(redditPage);
  }

  browser.disconnect();
  return;
}

main();