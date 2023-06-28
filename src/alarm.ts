import Audic from "audic";

//#region alarm
const asyncFunc = async () => {
  const audicObj:Audic&{[k:string]:any} = new Audic('alarm.mp3');
  await audicObj.play();
  audicObj.addEventListener('ended', async () => {
    console.log("DEBUG: yeet");
    await audicObj.play();
  });

}

// asyncFunc();
//#endregion