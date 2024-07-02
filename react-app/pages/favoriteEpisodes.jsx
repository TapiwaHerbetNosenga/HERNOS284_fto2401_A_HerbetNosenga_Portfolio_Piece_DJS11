/*import { useEffect, useState } from "react";
import { getShowsData } from "../utils/localStorageUtils.mjs";
import EpisodeCard from "../components/episodeCard";
import { sortPodcastsAlphabetically } from "../utils/podcastUtils.mjs";

export default function FavoriteEpisodes() {
  const [podcasts, setPodcasts] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [seasons, setSeasons] = useState([]);
  const [selectedPodcast, setSelectedPodcast] = useState(null);
  const [sortOrder, setSortOrder] = useState("ascending");

  useEffect(() => {
   
    const favoritePodcasts = getShowsData();
    setPodcasts(favoritePodcasts);
  }, []);

  const handleSeasonChange = (event) => {
    const seasonNumber = parseInt(event.target.value, 10);
    const selected = seasons.find((season) => season.season === seasonNumber);
    setSelectedSeason(selected);
  };

  const handlePodcastChange = (event) => {
    const podcastId = event.target.value;
   
    const selected = podcasts.find((podcast) => podcast.id === podcastId);

    setSelectedPodcast(selected);
    setSeasons(selected.seasons || []); 
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const removeFavorite = (episode) => {
   
    console.log("Removing episode", episode);
  };

  if (podcasts.length === 0) {
    return <h5>No podcasts</h5>;
  }

return (
    <div>
      <h1 className="head1">Favorites</h1>
      <div className="d-flex align-items-center">
        <select className="me-2" defaultValue="" onChange={handlePodcastChange}>
          <option value="" disabled>Select a podcast</option>
          {podcasts.map((podcast) => (
            <option key={podcast.id} value={podcast.id}>{podcast.title}</option>
          ))}
        </select>
        <select className="me-2" defaultValue=" " onChange={handleSeasonChange}>
          <option value=" " disabled>Select a season</option>
          {seasons.map((season) => (
            <option key={season.season} value={season.season}>{season.title}</option>
          ))}
        </select>
        <select className="me-auto" value={sortOrder} onChange={handleSortOrderChange}>
          <option value="ascending">Sort Ascending</option>
          <option value="descending">Sort Descending</option>
        </select>
        <button onClick={() => localStorage.clear()}>Clear local storage</button>
      </div>
      {selectedSeason && (
        <div className="mb-4">
          <ul className="list-group">
            {sortPodcastsAlphabetically(selectedSeason.episodes, sortOrder).map((episode) => (
              <div key={episode.episode}>
                <EpisodeCard
                  episode={episode}
                  seasonImage={selectedSeason.image}
                />
                <button onClick={() => removeFavorite(episode)}>
                  Remove from favorites.
                </button>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}*/

import { useEffect, useState } from "react";
import { getShowsData, removeFavorite } from "../utils/localStorageUtils.mjs";
import EpisodeCard from "../components/episodeCard";
import { sortPodcastsAlphabetically } from "../utils/podcastUtils.mjs";

export default function FavoriteEpisodes() {
  const [podcasts, setPodcasts] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [seasons, setSeasons] = useState([]);
  const [selectedPodcast, setSelectedPodcast] = useState(null);
  const [sortOrder, setSortOrder] = useState("ascending");

  useEffect(() => {
    const favoritePodcasts = getShowsData();
    setPodcasts(favoritePodcasts);
  }, []);

  const handleSeasonChange = (event) => {
    const seasonNumber = parseInt(event.target.value, 10);
    const selected = selectedPodcast.seasons.find((season) => season.season === seasonNumber);
    setSelectedSeason(selected);
  };

  const handlePodcastChange = (event) => {
    const podcastId = event.target.value;
    const selected = podcasts.find((podcast) => podcast.id === podcastId);

    setSelectedPodcast(selected);
    setSeasons(selected ? selected.seasons || [] : []);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleRemoveFavorite = (episode) => {
    removeFavorite(selectedPodcast, selectedSeason, episode); // Update localStorage
    const updatedPodcasts = getShowsData(); // Update podcasts state
    setPodcasts(updatedPodcasts);
  };

  if (podcasts.length === 0) {
    return <h5>No podcasts</h5>;
  }

  return (
    <div>
      <h1 className="head1">Favorites</h1>
      <div className="d-flex align-items-center">
        <select className="me-2" value={selectedPodcast ? selectedPodcast.id : ""} onChange={handlePodcastChange}>
          <option value="" disabled>Select a podcast</option>
          {podcasts.map((podcast) => (
            <option key={podcast.id} value={podcast.id}>{podcast.title}</option>
          ))}
        </select>
        <select className="me-2" value={selectedSeason ? selectedSeason.season : ""} onChange={handleSeasonChange}>
          <option value="" disabled>Select a season</option>
          {seasons.map((season) => (
            <option key={season.season} value={season.season}>{season.title}</option>
          ))}
        </select>
        <select className="me-auto" value={sortOrder} onChange={handleSortOrderChange}>
          <option value="ascending">Sort Ascending</option>
          <option value="descending">Sort Descending</option>
        </select>
        <button onClick={() => localStorage.clear()}>Clear local storage</button>
      </div>
      {selectedSeason && (
        <div className="mb-4">
          <ul className="list-group">
            {sortPodcastsAlphabetically(selectedSeason.episodes, sortOrder).map((episode) => (
              <div key={episode.episode}>
                <EpisodeCard
                  episode={episode}
                  seasonImage={selectedSeason.image}
                />
                <button onClick={() => handleRemoveFavorite(episode)}>
                  Remove from favorites.
                </button>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
