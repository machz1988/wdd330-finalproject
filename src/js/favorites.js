import { qs } from "./utils.mjs";
import FavoriteList from "./FavoriteList.mjs";
import { renderFavoritesIcon } from "./favoritesIcon.mjs";
renderFavoritesIcon("favorite-list");

//loadHeaderFooter(setCounter);
const listContainer = qs(".song-list");
const favorites = new FavoriteList("favorite-list", listContainer);
favorites.init();
