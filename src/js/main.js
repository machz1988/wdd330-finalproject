import { getLocalStorage } from "./utils.mjs";

const data = getLocalStorage("temporal-data");
console.log(data.tracks);
