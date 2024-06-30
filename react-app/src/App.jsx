

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


import Layout from '../components/layout';
import Home from '../pages/home';
import Shows from '../pages/podcastView';

import FavoriteEpisodes from '../pages/favoriteEpisodes';
import Podcasts from '../components/podcasts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="preview" element={<Podcasts />} />
          <Route path="shows/:id" element={<Shows />} />
          <Route path="favorite-episodes" element={<FavoriteEpisodes />} />
          

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
