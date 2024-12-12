import { getLocalStorage,setLocalStorage } from "./utils.mjs";

const data = getLocalStorage('temporal-data');
console.log(data.tracks);
/*
// Song
const url = 'https://spotify-statistics-and-stream-count.p.rapidapi.com/track/0BCPKOYdS2jbQ8iyB56Zns';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4088b197b7msh43ac6c9553f17d0p1a1696jsnd38b63a92a30',
		'x-rapidapi-host': 'spotify-statistics-and-stream-count.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

// Query
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': `${spotifyKey}`,
		'x-rapidapi-host': `${host}`
	}
};

try {
	const response = await fetch(url+'clocks', options);
	const result = await response.json();
	const temporalData = result;
	setLocalStorage("temporal-data", temporalData);
	//console.log(result);
} catch (error) {
	console.error(error);
}

*/