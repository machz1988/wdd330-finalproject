import { getLocalStorage, setLocalStorage, qs } from "./utils.mjs";
//import { setCounter } from "./cart-counter.mjs";
//import { alertMessage } from "./Alerts.mjs";

export default class AlbumDetails {
  constructor(albumId, dataSource) {
    this.albumId = albumId;
    this.dataSource = dataSource;
    this.album = {};
  }

  async init(isModal = false) {
    this.album = await this.dataSource.getAlbumById(this.albumId);

    if (!isModal) {
      this.renderAlbumDetails();
      //qs("#pd-addToCart").addEventListener("click", this.addToCart.bind(this));
    }/* else {
      this.renderModal();
    }*/
  }

  renderAlbumDetails() {
    const name = qs('.ad-name');
    const sourceLarge = qs('.ad-sourcelarge');
    const sourceMedium = qs('.ad-sourcemedium');
    const img = qs(".ad-img");
    const releaseDate = qs(".ad-releasedate");
    const artists = qs(".ad-artists");
    const tracks = qs(".ad-tracks");

    // Set custom comtent based on product requested
    name.textContent = this.album.name;
    sourceLarge.setAttribute('srcset', this.album.coverArt[2].url);
    sourceMedium.setAttribute('srcset', this.album.coverArt[0].url);
    img.setAttribute('src', this.album.coverArt[1].url);
    img.setAttribute('alt', this.album.name);
    releaseDate.textContent = this.album.releaseDate;
    const artistList = this.album.artists.map((elem) => {
        return `<li>${elem.name}</li>`;
    });
    artists.innerHTML = artistList.join('');
    const trackList = this.album.tracks.map((elem) => {
        return `<li>${elem.name}</li>`;
    });
    tracks.innerHTML = trackList.join('');
    //addButton.setAttribute("data-id", this.product.Id);
  }
}