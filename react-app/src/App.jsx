import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"

import Layout from "../components/layout";
import Home from "../pages/home";
import Shows from "../pages/podcastView";

import FavoriteEpisodes from "../pages/favoriteEpisodes";
import Podcasts from "../pages/previewsPage";
import { AudioProvider } from "../components/audioContext";

function App() {
  return (
    <BrowserRouter>
       <AudioProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="preview" element={<Podcasts />} />
          <Route path="shows/:id" element={<Shows />} />
          <Route path="favorite-episodes" element={<FavoriteEpisodes />} />
        </Route>
      </Routes>
   </AudioProvider>
    </BrowserRouter>
  );
}

export default App;
