import React, { useEffect } from "react";
import { getDeezerArtists } from "../store/slices/deezer/thunks";
import { useDispatch, useSelector } from "react-redux";

export const Artists = () => {
  const dispatch = useDispatch();
  // const { isLoading, deezers = [] } = useSelector((state) => state.deezers);

  useEffect(() => {
    dispatch(getDeezerArtists());
  }, []);
  return (
    <div>
      <p>ss</p>
      {/* {deezers} */}
    </div>
  );
};
