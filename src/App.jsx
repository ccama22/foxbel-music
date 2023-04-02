import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Albums, Artists, Musics, Recents, Seasons } from "./pages";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Recents />} />
          <Route path="artists" element={<Artists />} />
          <Route path="albums" element={<Albums />} />
          <Route path="musics" element={<Musics />} />
          <Route path="seasons" element={<Seasons />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
