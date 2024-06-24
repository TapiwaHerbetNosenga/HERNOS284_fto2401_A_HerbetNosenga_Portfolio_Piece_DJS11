import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Podcasts from "../components/sort";

export default function Previews() {
  return (
    <>
      <Podcasts />
    </>
  );
}
