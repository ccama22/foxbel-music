import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDeezerAlbums } from "../store/slices/deezer/thunks";

export const Albums = () => {
  const dispatch = useDispatch();
  // const { isLoading, deezers = [] } = useSelector((state) => state.deezers);

  useEffect(() => {
    dispatch(getDeezerAlbums());
  }, []);
  return (
    <div>
      <p>ss</p>
      {/* {deezers} */}
    </div>
  );
};
