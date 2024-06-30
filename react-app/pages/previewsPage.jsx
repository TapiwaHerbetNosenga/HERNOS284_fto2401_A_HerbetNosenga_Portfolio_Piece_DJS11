import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Podcasts from "../components/podcasts";

export default function Previews() {
  return (
    <>
      <Podcasts />
    </>
  );
}
