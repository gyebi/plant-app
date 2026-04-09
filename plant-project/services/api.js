const API_KEY = "usr-Wn_2iiuEwDefBAL39qyrQUoUK4NLvm272z26-rwM_X8"
const BASE_URL_SEARCH = "https://trefle.io/api/v1/plants/search?token=YOUR_TREFLE_TOKEN&q=coconut"
const BASE_URL = "https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN";




export const fetchPlants = async () => {
  const response = await fetch(
`${BASE_URL}token=${API_KEY}`
);
  const data = await response.json();
  console.log(data);
  return data.results 
};



export const searchPlants = async (query) => {
  const response = await fetch(
    `${BASE_URL_SEARCH}/search?token=${API_KEY}&q=${encodeURIComponent(query)}`
  );

  const data = await response.json();
  console.log(data);
    return data.results ; // Assuming the API returns an array of plants in the 'data' field
};