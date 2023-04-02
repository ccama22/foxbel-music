import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDeezers } from "../store/slices/deezer/thunks";

export const Recents = () => {
  const dispatch = useDispatch();
  const { isLoading, deezers = [] } = useSelector((state) => state.deezers);

  useEffect(() => {
    dispatch(getDeezers());
  }, []);
  return (
    <div className="recents_container">
      <div className="recent_videoSelect">
        <div className="image_artists">
          <p>sss</p>
        </div>
        <div className="video_select">
          <div className="container_text">
            <p>sdsdsdsd</p>
            <p>dddddddd</p>
          </div>
        </div>
      </div>
      <div className="video_list">
        Resultados
        <div className="grid-container">
          <div className="grid-item1">1</div>
          <div className="grid-item1">2</div>
          <div className="grid-item1">3</div>
          <div className="grid-item1">4</div>
          <div className="grid-item1">5</div>
          <div className="grid-item1">6</div>
          <div className="grid-item1">7</div>
          <div className="grid-item1">8</div>
          <div className="grid-item1">9</div>
          <div className="grid-item1">10</div>
        </div>
      </div>
    </div>
  );
};
