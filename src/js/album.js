import { getParams } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import AlbumDetails from "./AlbumDetails.mjs";
import { renderFavoritesIcon } from "./favoritesIcon.mjs";
renderFavoritesIcon("favorite-list");

//loadHeaderFooter(setCounter);
const albumId = getParams("album");
const dataSource = new ExternalServices();
const album = new AlbumDetails(albumId, dataSource);
album.init();
