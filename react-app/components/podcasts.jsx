import { useState, useEffect } from "react";
import PodcastList from "./podcastList";
import { sortPodcasts } from "../utils/podcastUtils.mjs";

const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("https://podcast-api.netlify.app");
      const data = await response.json();
      const sortedData = sortPodcasts(data, "ascending");
      setPodcasts(sortedData);
      setSortOrder("ascending");
    };

    loadData();
  }, []);

  useEffect(() => {
    const sortedPodcasts = sortPodcasts(podcasts, sortOrder);
    setPodcasts(sortedPodcasts);
  }, [sortOrder]);

  if (!podcasts) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="ascending">Sort Ascending</option>
        <option value="descending">Sort Descending</option>
      </select>
      <PodcastList podcasts={podcasts} />
    </div>
  );
};

export default Podcasts;
