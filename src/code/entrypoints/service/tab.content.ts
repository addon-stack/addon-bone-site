import {getService} from "adnbn";

const tab = getService("tab");
console.log(await tab.currentTabId());

export {};
