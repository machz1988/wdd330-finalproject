import { qs } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import SongList from "./SongList.mjs";
import { renderFavoritesIcon } from "./favoritesIcon.mjs";
renderFavoritesIcon("favorite-list");

// Elements
const searchForm = qs("#search-form");
const searchInput = qs("#search-input");

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const searchQuery = searchInput.value.trim(); // Get search keyword
  if (!searchQuery) {
    alert("Please enter a song name to search.");
    return;
  }

  try {
    // Fetch search results from the API
    const externalServices = new ExternalServices();
    const searchResults = await externalServices.getData(searchQuery);
    const songListContainer = qs(".song-list");
    if (searchResults.length === 0) {
      songListContainer.innerHTML = "<p>No songs found. Please try again!</p>";
      return;
    }
    songListContainer.innerHTML = "";
    // Render search results on the product list page
    const list = new SongList(
      externalServices,
      searchResults,
      songListContainer,
    );
    list.init();
  } catch (error) {
    alert("Failed to fetch search results. Please try again.");
  }
});
