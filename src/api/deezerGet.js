import axios from "axios";
import { deezerApi } from "./deezerApi";

const searchDeezer = async () => {
  try {
    const response = await deezerApi.get(`/search`, {
      params: { q: "*" },
      headers: {
        "X-RapidAPI-Key": "",
        "X-RapidAPI-Host": "",
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default searchDeezer;
