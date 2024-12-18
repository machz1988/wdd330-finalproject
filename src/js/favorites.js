import { qs } from "./utils.mjs";
//import { setCounter } from "./cart-counter.mjs";
import FavoriteList from "./FavoriteList.mjs";

//loadHeaderFooter(setCounter);
const listContainer = qs(".song-list");
const favorites = new FavoriteList("favorite-list", listContainer);
favorites.init();
