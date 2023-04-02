import { deezerApi } from "../../../api/deezerApi";
import searchDeezer from "../../../api/deezerGet";
import { setDeezers, startLoadingDeezers } from "./deezerSlice";

export const getDeezers = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingDeezers());
    const response = await searchDeezer();
    console.log("data ccama", response.data.slice(0, 10));
    // dispatch(setDeezer(data));
  };
};

export const getDeezerArtists = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingDeezers());
    const response = await searchDeezer();
    console.log(
      "data xx",
      response.data.map((song) => song.artist)
    );
    // dispatch(setDeezer(data));
  };
};

export const getDeezerAlbums = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingDeezers());
    const response = await searchDeezer();
    console.log(
      "albunes=",
      response.data.map((song) => song.album)
    );
    // dispatch(setDeezer(data));
  };
};

export const getDeezerMusics = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingDeezers());
    const response = await searchDeezer();

    const data = response.data
      .map(
        ({
          album: {
            id,
            md5_image,
            tracklist,
            title: title_album,
            cover_xl: cover_xl_album,
            cover_big: cover_big_album,
            cover_medium,
            cover_small,
            type,
            cover,
            ...albumData
          },
          artist: {
            link,
            id: idArtist,
            type: typeArtist,
            picture,
            picture_small,
            picture_medium,
            tracklist: tracklistArtist,
            picture_big: picture_big_artist,
            picture_xl: picture_xl_artist,
            ...artistData
          },
          ...songDataWithoutAlbum
        }) => {
          const { duration, redeable, title, title_short } =
            songDataWithoutAlbum;
          return {
            ...albumData,
            ...artistData,
            picture_big_artist,
            picture_xl_artist,
            title_album,
            cover_xl_album,
            cover_big_album,
            duration,
            redeable,
            title,
            title_short,
            id,
          };
        }
      )
      .slice(0, 10);

    console.log("sdsdsd", data);
    dispatch(setDeezers({ deezers: data }));
  };
};
