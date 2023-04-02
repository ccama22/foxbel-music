import axios from "axios";

export const deezerApi = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com/",
});
