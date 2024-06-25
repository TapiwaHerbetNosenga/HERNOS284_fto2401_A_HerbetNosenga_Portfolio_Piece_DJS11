import { useEffect, useState } from "react";
import { getShowsData } from "../utils/localStorageUtils.mjs";
import { sortPodcasts } from "../utils/podcastUtils.mjs";
import EpisodeCard from "../components/episodeCard";

export default function FavoriteEpisodes() {
  const [podcasts, setPodcasts] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [seasons, setSeasons] = useState([]);
  const [selectedPodcast, setSelectedPodcast] = useState(null);
  const [sortOrder, setSortOrder] = useState("ascending");

  useEffect(() => {
    // Load initial data when component mounts
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
    // Find the selected podcast object from the array
    const selected = podcasts.find((podcast) => podcast.id === podcastId);

    setSelectedPodcast(selected); // Update selectedPodcast state
    setSeasons(selected.seasons || []); // Update seasons directly here
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const removeFavorite = (episode) => {
    // Implement remove logic here
    console.log("Removing episode", episode);
  };

  if (podcasts.length === 0) {
    return <h5>No podcasts</h5>;
  }

  return (
    <div>
      <h1 className="head1">Favorites</h1>
      <select defaultValue="" onChange={handlePodcastChange}>
        <option value="" disabled>
          Select a podcast
        </option>
        {podcasts.map((podcast) => (
          <option key={podcast.id} value={podcast.id}>
            {podcast.title}
          </option>
        ))}
      </select>
      <select defaultValue=" " onChange={handleSeasonChange}>
        <option value=" " disabled>
          Select a season
        </option>
        {seasons.map((season) => (
          <option key={season.season} value={season.season}>
            {season.title}
          </option>
        ))}
      </select>
      <select value={sortOrder} onChange={handleSortOrderChange}>
        <option value="ascending">Sort Ascending</option>
        <option value="descending">Sort Descending</option>
      </select>
      {selectedSeason && (
        <div className="mb-4">
          <ul className="list-group">
            {sortPodcasts(selectedSeason.episodes, sortOrder).map((episode) => (
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
}
