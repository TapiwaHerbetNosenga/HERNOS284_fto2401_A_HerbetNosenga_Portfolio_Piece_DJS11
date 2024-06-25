import { useState, useEffect } from "react";

import { Link, useParams, useLocation } from "react-router-dom";
import EpisodeCard from "../components/episodeCard";
import { addOrUpdateEpisode } from "../utils/localStorageUtils.mjs";

export default function Shows() {
  const handleSeasonChange = (event) => {
    const seasonNumber = parseInt(event.target.value, 10);
    const selected = seasons.find((season) => season.season === seasonNumber);

    setSelectedSeason(selected);
  };

  const { id } = useParams();

  const GENRE_TITLES = {
    1: "Personal Growth",
    2: "Investigative Journalism",
    3: "History",
    4: "Comedy",
    5: "Entertainment",
    6: "Business",
    7: "Fiction",
    8: "News",
    9: "Kids and Family",
  };

  const [podcast, setPodcasts] = useState(null);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(null);
 // const [loading, setLoading] = useState(false);

  useEffect(() => {
   // setLoading(true);
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPodcasts(data);
        setSeasons(data.seasons);

        console.log(data);
      })
      .catch((error) => console.error(error));
  }, [id]);


  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  

  const handleFavorite = (episode) => {
    const favoritePodcast = {
      title: podcast.title,
      id: podcast.id,
      description: podcast.description,
    };

    addOrUpdateEpisode(favoritePodcast, selectedSeason, episode);
  };


 /* if (loading) {
    return <h4>Loading...</h4>;
  }*/

  return (
    <div>
      <div key={podcast.id} className="podcast-show">
        <img
          src={podcast.image}
          alt={podcast.title}
          width="100vw"
          height="100vw"
        />
        <h2>{podcast.title}</h2>
        <p>{podcast.description}</p>
        <p>Seasons: {podcast.seasons.length}</p>
        <p>Updated: {formatDate(podcast.updated)}</p>
        <p>Genres: {podcast.genres.join()}</p>
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

        {selectedSeason && (
          <div className="mb-4">
            <ul className="list-group">
              {selectedSeason.episodes.map((episode) => (
                <div key={episode.episode}>
                  <EpisodeCard
                   
                    episode={episode}
                    seasonImage={selectedSeason.image}
                  />
                  <button onClick={()=>handleFavorite(episode)}>
                    Add to favorites.
                  </button>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
