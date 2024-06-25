
import { useState, useEffect } from 'react';
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
//import "bootstrap/dist/css/bootstrap.min.css"


import Layout from '../components/layout';
import Home from '../pages/home';
import Previews from '../pages/preview';
import Shows from '../pages/shows';

import FavoriteEpisodes from '../pages/favoriteEpisodes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="preview" element={<Previews />} />
          <Route path="shows/:id" element={<Shows />} />
          <Route path="favorite-episodes" element={<FavoriteEpisodes />} />
          

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
