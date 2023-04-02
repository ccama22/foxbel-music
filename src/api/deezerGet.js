import axios from "axios";
import { deezerApi } from "./deezerApi";

const searchDeezer = async () => {
  try {
    const response = await deezerApi.get(`/search`, {
      params: { q: "*" },
      headers: {
        "X-RapidAPI-Key": "cd577446dbmsha9485ca8c247ba3p1a4a09jsnf9023ef3d4b8",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default searchDeezer;
