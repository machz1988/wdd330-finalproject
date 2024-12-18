import { getParams } from "./utils.mjs";
//import { setCounter } from "./cart-counter.mjs";
import ExternalServices from "./ExternalServices.mjs";
import AlbumDetails from "./AlbumDetails.mjs";

//loadHeaderFooter(setCounter);

const albumId = getParams("album");
const dataSource = new ExternalServices();
const album = new AlbumDetails(albumId, dataSource);
album.init();
