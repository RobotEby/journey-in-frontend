export default async function fetchJoke() {
  const API_URL = "https://icanhazdadjoke.com/";
  const REQUEST_CONFIG = { headers: { Accept: "application/json" } };
  const response = await fetch(API_URL, REQUEST_CONFIG);
  const data = await response.json();
  return data;
}
