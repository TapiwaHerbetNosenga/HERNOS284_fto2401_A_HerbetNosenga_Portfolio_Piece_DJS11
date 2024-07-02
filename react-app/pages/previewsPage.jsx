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
    return <h1 >Loading...</h1>;
  }

  return (
    <div>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="ascending">Sort Ascending</option>
        <option value="descending">Sort Descending</option>
      </select>
      <select value={filteredGenre} onChange={(e) => setGenre(e.target.value)}>
        <option disabled value="Empty">Select Genre</option>
        <option value="">None</option>
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

/*  1: "Personal Growth",
    2: "Investigative Journalism",
    3: "History",
    4: "Comedy",
    5: "Entertainment",
    6: "Business",
    7: "Fiction",
    8: "News",
    9: "Kids and Family",*/

export default Podcasts;
