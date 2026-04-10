const API_KEY = import.meta.env.VITE_TREFLE_API_KEY;
const BASE_URL = "/api/trefle/api/v1/plants"
const SEARCH_URL = "/api/trefle/api/v1/plants/search"

const getPlantsFromResponse = (payload) => {
  if (Array.isArray(payload?.data)) {
    return payload.data;
  }

  return [];
};

const fetchFromApi = async (url) => {
  if (!API_KEY) {
    throw new Error("Missing VITE_TREFLE_API_KEY in your environment.");
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  const data = await response.json();
  return getPlantsFromResponse(data);
};

export const fetchPlants = async () => {
  const url = `${BASE_URL}?token=${API_KEY}`;
  return fetchFromApi(url);
};

export const searchPlants = async (query) => {
  const url = `${SEARCH_URL}?token=${API_KEY}&q=${encodeURIComponent(query)}`;
  return fetchFromApi(url);
};
