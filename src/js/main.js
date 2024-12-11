const url = import.meta.env.VITE_API_QUERY_URL;
const spotifyKey = import.meta.env.VITE_RAPIDAPI_KEY;
const host = import.meta.env.VITE_RAPIDAPI_HOST;

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
	console.log(result);
} catch (error) {
	console.error(error);
}