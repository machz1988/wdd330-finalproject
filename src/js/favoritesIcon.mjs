import { getLocalStorage, qs } from "./utils.mjs";

export function renderFavoritesIcon(key, valueChanged = false) {
    const iconContainer = qs("#favorites-icon");
    const favoritesDiv = document.createElement("div");
    favoritesDiv.classList.add("favorite-list");
    let icon = `<a href="../favorites/index.html">
            <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 122.88 91.69"
            style="enable-background: new 0 0 122.88 91.69"
            xml:space="preserve"
            >
            <style type="text/css">
                <![CDATA[.st0{fill-rule:evenodd;clip-rule:evenodd;}]]>
            </style>
            <g>
                <path
                class="st0"
                d="M49.58,0h11.34v3.79c28.37,6.5,31.61,20.12,15.16,41.59c1.75-21.3-0.4-25.87-15.16-26.86v53.86 c0.03,0.29,0.04,0.57,0.04,0.86c0,7-7.35,13.94-16.4,15.51c-9.06,1.57-16.4-2.84-16.4-9.84c0-9.55,13.12-17.84,21.43-14.92L49.58,0 L49.58,0L49.58,0z M72.31,91.69h-0.16c0-1.29-0.48-2.41-1.44-3.38c-0.96-0.96-2.09-1.44-3.38-1.44v-0.16 c1.29,0,2.41-0.48,3.38-1.44c0.96-0.97,1.44-2.09,1.44-3.37h0.16c0,1.29,0.48,2.41,1.44,3.37c0.96,0.96,2.09,1.44,3.38,1.44v0.16 c-1.29,0-2.41,0.48-3.38,1.44C72.79,89.27,72.31,90.4,72.31,91.69L72.31,91.69L72.31,91.69z M92.53,74.61l-0.4-0.03 c0.24-3.22-0.75-6.13-2.97-8.72s-4.94-4.01-8.17-4.25l0.03-0.4c3.22,0.25,6.13-0.75,8.72-2.97c2.59-2.23,4.01-4.95,4.25-8.16 l0.4,0.03c-0.24,3.22,0.75,6.13,2.97,8.72s4.94,4.01,8.17,4.25l-0.03,0.4c-3.22-0.25-6.13,0.75-8.72,2.97 C94.19,68.67,92.78,71.39,92.53,74.61L92.53,74.61L92.53,74.61z M109.33,42.87l-0.5,0.06c-0.52-4.13-2.51-7.55-5.99-10.26 c-3.47-2.71-7.28-3.8-11.42-3.29l-0.06-0.5c4.13-0.51,7.55-2.51,10.26-5.99s3.8-7.29,3.29-11.41l0.5-0.06 c0.52,4.13,2.51,7.55,5.99,10.26c3.48,2.71,7.28,3.8,11.42,3.29l0.06,0.5c-4.13,0.52-7.55,2.51-10.26,5.99 C109.91,34.93,108.82,38.74,109.33,42.87L109.33,42.87L109.33,42.87z M18.45,54.03c-2.3,0-4.17-1.87-4.17-4.17s1.87-4.17,4.17-4.17 h16.63c2.3,0,4.17,1.87,4.17,4.17s-1.87,4.17-4.17,4.17H18.45L18.45,54.03L18.45,54.03z M10.57,33.79c-2.3,0-4.17-1.87-4.17-4.17 c0-2.3,1.87-4.17,4.17-4.17h24.52c2.3,0,4.17,1.87,4.17,4.17c0,2.3-1.87,4.17-4.17,4.17H3.67L10.57,33.79L10.57,33.79z M4.17,13.55 C1.87,13.55,0,11.68,0,9.37c0-2.3,1.87-4.17,4.17-4.17h30.92c2.3,0,4.17,1.87,4.17,4.17c0,2.3-1.87,4.17-4.17,4.17L4.17,13.55 L4.17,13.55L4.17,13.55z"
                />
            </g>
            </svg>
        </a>`;
    if (valueChanged){
        iconContainer.innerHTML = "";
        favoritesDiv.classList.add("favorites-animation");
    }
    const favorites = getLocalStorage(key) || [];
    if (!(favorites.length === 0)) {
        icon = icon + `<span id="counter">${favorites.reduce(
            (acc) => acc + 1, 0,)}
        </span>`;
    } else {
        icon = icon + '<span id="counter" class="hide"></span>';
    }
    favoritesDiv.innerHTML = icon;
    iconContainer.appendChild(favoritesDiv);
}