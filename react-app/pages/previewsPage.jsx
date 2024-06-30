import { useState, useEffect } from "react";
import { sortPodcasts } from "../utils/podcastUtils.mjs";
import PodcastList from "../components/podcastList";

const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const response = await fetch("https://podcast-api.netlify.app");
      const data = await response.json();
      const sortedData = sortPodcasts(data, "ascending");
      setPodcasts(sortedData);
      setLoading(false);
    };

    loadData();
  }, []);

  useEffect(() => {
    const sortedPodcasts = sortPodcasts(podcasts, sortOrder);
    setPodcasts(sortedPodcasts);
  }, [sortOrder]);

  if (loading) {
    return <h1 >Loading...</h1>;
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
