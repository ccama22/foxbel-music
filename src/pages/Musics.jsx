import React, { useEffect } from "react";
import { getDeezerMusics } from "../store/slices/deezer/thunks";
import { useDispatch, useSelector } from "react-redux";
import { setActiveDeezers } from "../store/slices/deezer/deezerSlice";
import myImage from "../assets/images/music.jpg";

export const Musics = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    deezers = [],
    active: activeSelect,
  } = useSelector((state) => state.deezers);
  const onClickNote = (data) => {
    console.log("jose ccama", data);
    dispatch(setActiveDeezers(data));
  };
  const onClickPlay = () => {
    console.log("jose ccama");
  };
  useEffect(() => {
    dispatch(getDeezerMusics());
  }, []);
  return (
    <div className="music_container">
      <div className="music_videoSelect">
        <div className="image_artists-music">
          <img
            src={activeSelect?.cover_big_album || myImage}
            alt="noImage"
            className="img_music"
          />
        </div>
        <div className="video_select-music">
          <div className="container_text-music">
            <p>{activeSelect?.title}</p>
            <p>Lo mejor de {activeSelect?.name}</p>
          </div>
          <div className="conainter_buttom-music">
            <button className="play_button" onClick={onClickPlay}>
              Reproducir
            </button>
            <button className="follow_button">Seguir</button>
          </div>
        </div>
      </div>
      <div className="video_list-music">
        <p>Resultados</p>
        <div className="grid_container-music">
          {deezers.map(({ name, id, title, cover_big_album }) => (
            <button
              key={title}
              className="grid_item"
              onClick={() => onClickNote({ name, id, title, cover_big_album })}
            >
              <div className="grid_item-music">
                <img
                  src={cover_big_album}
                  alt="imageNull"
                  className="image_music"
                />
              </div>
              <div className="data_music">
                <p className="data_music-title">
                  {title.length > 10 ? `${title.substring(0, 17)}...` : title}
                </p>
                <p className="data_music-name">{name}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
