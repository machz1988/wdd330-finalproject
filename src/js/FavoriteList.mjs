import {
    getLocalStorage,
    setLocalStorage,
    renderListWithTemplate,
    qs,
    qsAll,
} from "./utils.mjs";
import { renderFavoritesIcon } from "./favoritesIcon.mjs";

function songCardTemplate(song, i) {
    const artistList = song.artists.map((elem) => {
        return `<li>${elem.name}</li>`;
    });
    const templateLiteral =`
        <li class="song-card">
            <a href="../album_pages/?album=${song.album.id}">
                <h2 class="card__name">${song.name}</h2>
                <h3 class="card__streamcount">Stream Count: ${song.streamCount}</h3>
                <h3 class="card__duration">Duration: ${song.duration}</h3>
                <h3 class="card__tracknumber">Track Number: ${song.trackNumber}</h3>
                <h3 class="card__albumname">Album: ${song.album.name}</h3>
                <h3 class="card__releasedate">Album Release Date: ${song.album.releaseDate}</h3>
                <h3 class="card__artists">Artists:</h3>
                <ul class="card__artists">${artistList.join('')}</ul>
            </a>
            <button class="removefrom-list" data-id="${i}">Remove</button>
        </li>`;
    return templateLiteral;
}

export default class ShoppingCart {
    constructor(key, parentSelector) {
      this.key = key;
      this.parentSelector = parentSelector;
    }
  
    init() {
      this.parentSelector.innerHTML = '';
      const songList = getLocalStorage(this.key);
      this.renderList(songList);
      qsAll(".removefrom-list").forEach((button) => {
        button.addEventListener("click", (e) => {
            const filteredItems = songList.filter(
                (_, i) => i !== parseInt(e.currentTarget.dataset.id),
            );
            setLocalStorage(this.key, filteredItems);
            renderFavoritesIcon(this.key, true);      
            this.init();
        });
      });  
    }
  
    renderList(songList) {
        renderListWithTemplate(songCardTemplate, this.parentSelector, songList);
    }
}