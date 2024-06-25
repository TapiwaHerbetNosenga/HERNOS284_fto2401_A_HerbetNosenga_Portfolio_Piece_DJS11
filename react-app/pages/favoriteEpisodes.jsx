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
    const loadData = () => {
      const favoritePodcasts = getShowsData();
      setPodcasts(favoritePodcasts);
      setSeasons(favoritePodcasts.seasons || []);
      console.log(seasons);
    };

    loadData();
  }, []);

  const handleSeasonChange = (event) => {
    const seasonNumber = parseInt(event.target.value, 10);
    const selected = seasons.find((season) => season.season === seasonNumber);

    setSelectedSeason(selected);
  };

  const handlePodcastChange = (event) => {
    const podcastNumber = event.target.value;
    const selected = podcasts.find((podcast) => podcast.id === podcastNumber);

    setSelectedPodcast(selected);
    setSeasons(selected.seasons);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
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
        {seasons &&
          seasons.map((season) => (
            <option key={season.season} value={season.season}>
              {season.title}
            </option>
          ))}
      </select>
      <select value={sortOrder} onChange={handleSortOrderChange}> {/* New select for sort order */}
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
                <button onClick={() => handleFavorite(episode)}>
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
