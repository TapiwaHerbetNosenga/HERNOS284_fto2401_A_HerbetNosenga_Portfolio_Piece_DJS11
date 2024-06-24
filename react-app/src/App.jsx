
import { useState, useEffect } from 'react';
import './App.css'
import Test from '../components/test';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Layout from '../components/layout';
import Home from '../pages/home';
import Previews from '../pages/preview';
import Plus from '../pages/plus';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="preview" element={<Previews />} />
          <Route path="shows/:id" element={<Shows />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
