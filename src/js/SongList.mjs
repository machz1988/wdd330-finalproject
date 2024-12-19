import {
    qs, qsAll, getLocalStorage, setLocalStorage, renderListWithTemplate
  } from "./utils.mjs";
import { renderFavoritesIcon } from "./favoritesIcon.mjs";

function songCardTemplate(song) {
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
            <button data-id="${song.id}">Add to Favorites</button>
        </li>`;
    return templateLiteral;
}

function addToFavorites(e){
    const { id } = e.currentTarget.dataset;
    const favoriteList = getLocalStorage('favorite-list') || [];
    let found = false;
    favoriteList.map((obj) => {
        if (id === obj.id) {
            found = true;
            // IMPLEMENT A MESSAGE TO GET TO KNOW TO THE USER 
            // THAT THE SONG IS ALREADY IN THE FAVORITES LIST
        }
    });

    //favoritesIcon.classList.remove('favorites-animation');

    if (!found) {
        let checkDuplicate = false;
        this.songList.map((elem) => {
            if (elem.id === id){
                if(!checkDuplicate){
                    favoriteList.push(elem);
                    checkDuplicate = true;
                } 
            }
        });
    
        // Set localStorage with modified array.
        setLocalStorage("favorite-list", favoriteList);
        renderFavoritesIcon("favorite-list", true);  
    }
    // MISSING IMPLEMENT ALERT  
    //alertMessage("Product added to cart!");
}

export default class SongList {
    constructor(externalServices, dataSource, listElement) {
        this.externalServices = externalServices;
        this.listElement = listElement;
        this.dataSource = dataSource;
        this.songList = [];
    }

    async init() {
        const auxList = this.dataSource.tracks;
        // Api call for each element of the array
        this.songList = await Promise.all(
            auxList.map(async (elem) => {
                return this.externalServices.getTrackById(elem.id);
            })
        );
        this.renderList(this.songList);
        
        qsAll(".song-card button").forEach((button) => {
            button.addEventListener("click", addToFavorites.bind(this));
        });
    }

    renderList(songList) {
        renderListWithTemplate(songCardTemplate, this.listElement, songList);
    }
}