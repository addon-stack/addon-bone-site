import {getService} from "adnbn";

const diagnostics = getService("diagnostics");

console.log(await diagnostics.version());
console.log(await diagnostics.health.status());