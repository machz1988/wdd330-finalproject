const searchUrl = import.meta.env.VITE_SEARCH_URL;
const getTrackUrl = import.meta.env.VITE_GETTRACK_URL;
const spotifyKey = import.meta.env.VITE_RAPIDAPI_KEY;
const host = import.meta.env.VITE_RAPIDAPI_HOST;

async function convertToJson(res) {
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    throw { name: "servicesError", message: json };
  }
}

export default class ExternalServices {
  async getData(query) {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': `${spotifyKey}`,
            'x-rapidapi-host': `${host}`
        }
    };
    try {
        const res = await fetch(searchUrl + query, options);
        const data = await convertToJson(res);
        return data;
    } catch (error) {
        console.error(error);
    }
  }

  async getTrackById(id) {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': `${spotifyKey}`,
            'x-rapidapi-host': `${host}`
        }
    };
    
    try {
        const res = await fetch(getTrackUrl + id, options);
        const data = await convertToJson(res);
        return data;
    } catch (error) {
        console.error(error);
    }
  }
}