import fs from 'fs';
import path from 'path';
import puppeteer, { Page } from 'puppeteer-core';



export const archive = async (page:Page)=>{
  // const archiveDir = 'archive';
  // if (!fs.existsSync(path.join(archiveDir, ))) {
  //   await fs.promises.mkdir(archiveDir);
  // }

  const editBtns = await page.$$('a.edit-usertext:not([style*="display:none"])')
  for (const e of editBtns) {
    try {
      await e.click();
    } catch (error) {
      console.error("ERR: not clickable. Probably already clicked.");
      console.error(error);
    } finally {
      await e.dispose();
    }
  }

  const expandBtns = await page.$$('div.expando-button:not(.expanded)')
  for (const e of expandBtns) {
    try {
      await e.click();
    } catch (error) {
      console.error("ERR: not clickable. Probably already clicked.");
      console.error(error);
    } finally {
      await e.dispose();
    }
  }

  const divThings = await page.$$('div.thing');
  const archivedContent = divThings.map(async (d)=>{
    const isComment = await d.evaluate(el=>el.classList.contains('comment'));

    const permalink = await d.$(`a[data-event-action="permalink"]`)
      .then((a)=>a?a.getProperty('href'):null)
      .then((href)=>href?href.jsonValue():'');
    const context = await d.$(`a[data-event-action="context"]`)
      .then((a)=>a?a.getProperty('href'):null)
      .then((href)=>href?href.jsonValue():'');
    const comments = await d.$(`a[data-event-action="comments"]`)
      .then((a)=>a?a.getProperty('href'):null)
      .then((href)=>href?href.jsonValue():'');
    const timePost = await d.$(`time:not(.edited-timestamp)`)
      .then((t)=>t?t.getProperty('dateTime'):null)
      .then((d)=>d?d.jsonValue():'');
    const timeEdit = await d.$(`time.edited-timestamp`)
      .then((t)=>t?t.getProperty('dateTime'):null)
      .then((d)=>d?d.jsonValue():'');
    const text = await d.$(`div.usertext-edit textarea`)
      .then((t)=>t?t.getProperty('innerHTML'):null)
      .then((t)=>t?t.jsonValue():"");
    const score = await d.$(`.score.likes`)
      .then((t)=>t?t.getProperty('title'):null)
      .then((d)=>d?d.jsonValue():'');

    await d.dispose();
    return {
      permalink,
      context,
      comments,
      timePost,
      timeEdit,
      text,
      score,
      isComment,
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
    let count = 0;
    let nxtBtn:puppeteer.ElementHandle<HTMLSpanElement>|null = await redditPage.$('span.next-button');
    await archive(redditPage);
    while (!!nxtBtn && count<3) {
      await Promise.all([
        redditPage.waitForNavigation(),
        nxtBtn.click(),
      ])
      await archive(redditPage);
      nxtBtn = await redditPage.$('span.next-button');
      count++;
    }
  }

  browser.disconnect();
  return;
}

main();