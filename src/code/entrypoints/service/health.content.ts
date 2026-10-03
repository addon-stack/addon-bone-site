import {getService} from "adnbn";

const health = getService("health");
const status = await health.status();

console.log(status);

export {};
