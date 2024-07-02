import { useState, useEffect } from "react";
import { sortPodcastsAlphabetically, sortPodcastsByGenre } from "../utils/podcastUtils.mjs";
import PodcastList from "../components/podcastList";


const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [loading, setLoading] = useState(false);
  const [filteredGenre, setGenre] = useState('');

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const response = await fetch("https://podcast-api.netlify.app");
      const data = await response.json();
      const sortedData = sortPodcastsAlphabetically(data, "ascending");
      setPodcasts(sortedData);
      setFilteredPodcasts(sortedData);
      setLoading(false);
    };

    loadData();
  }, []);


  useEffect(() => {
    let updatedPodcasts = [...podcasts];

    if (sortOrder) {
      updatedPodcasts = sortPodcastsAlphabetically(updatedPodcasts, sortOrder);
    }

    if (filteredGenre) {
      updatedPodcasts = filteredGenre === '' ? podcasts : sortPodcastsByGenre(updatedPodcasts, filteredGenre);
    }

    setFilteredPodcasts(updatedPodcasts);
  }, [sortOrder, filteredGenre, podcasts]);



  if (loading) {
    return <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>;
  }

  return (
    <div>
      <select className="border-2 border-black m-2" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="ascending">Sort Ascending</option>
        <option value="descending">Sort Descending</option>
      </select>
      <select className="border-2 border-black m-2" value={filteredGenre} onChange={(e) => setGenre(e.target.value)}>
        <option disabled value="Empty">Select Genre</option>
        <option value="">Sort Genre(None)</option>
        <option value="1">Personal Growth</option>
        <option value="2">Investigative Journalism</option>
        <option value="3">History</option>
        <option value="4">Comedy</option>
        <option value="5">Entertainment</option>
        <option value="6">Business</option>
        <option value="7">Fiction</option>
        <option value="8">News</option>
        <option value="9">Kids and Family</option>
      </select>
      <PodcastList podcasts={filteredPodcasts} />
    </div>
  );
};



export default Podcasts;
