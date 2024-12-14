import {
    renderListWithTemplate
  } from "./utils.mjs";
    
function songCardTemplate(song) {
    const templateLiteral =`
        <li class="song-card">
            <a href="../album_pages/?song=${song.album.id}">
                <h2 class="card__name">${song.name}</h2>
                <h3 class="card__streamcount">Stream Count: ${song.streamCount}</h3>
                <h3 class="card__duration">Duration: ${song.duration}</h3>
                <h3 class="card__tracknumber">Track Number: ${song.trackNumber}</h3>
                <h3 class="card__albumname">Album: ${song.album.name}</h3>
                <h3 class="card__releasedate">Album Release Date: ${song.album.releaseDate}</h3>
                <h3 class="card__artists">Artists:</h3>
                <ul class="card__artists">
                </ul>
            </a>
        </li>`;
    return templateLiteral;
}

export default class SongList {
    constructor(externalServices, dataSource, listElement) {
        this.externalServices = externalServices;
        this.listElement = listElement;
        this.dataSource = dataSource;
    }

    async init() {
        const songList = this.dataSource.tracks;
        // Following code is not working
        const detailedSongList = await songList.map((elem) => {
            this.externalServices.getTrackById(elem.id);
        });
        this.renderList(detailedSongList);
        /*
        Array.from(qsAll(".product-card button")).forEach((button) => {
        button.addEventListener("click", renderModal.bind(this));
        });
        */
    }

    renderList(songList) {
        renderListWithTemplate(songCardTemplate, this.listElement, songList);
    }
}