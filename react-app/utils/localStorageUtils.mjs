const addOrUpdateEpisode = (show, season, episode) => {
  const showsDataJSON = localStorage.getItem("showsData");
  let showsData = showsDataJSON ? JSON.parse(showsDataJSON) : [];

  let newShow = showsData.find((s) => s.id === show.id);
  if (!newShow) {
    newShow = {
      id: show.id,
      title: show.title, 
      description: show.description, 
      seasons: [],
    };
    showsData.push(newShow);
  }

  let newSeason = newShow.seasons.find((s) => s.season === season.season);
  if (!newSeason) {
    newSeason = {
      season: season.season,
      title: season.title,
      episodes: [],
    };
    newShow.seasons.push(newSeason);
  }

  const episodeIndex = newSeason.episodes.findIndex(
    (e) => e.episode === episode.episode
  );

  if (episodeIndex > -1) {
    newSeason.episodes[episodeIndex] = episode;
  } else {
    newSeason.episodes.push(episode);
  }
  console.log(showsData);
  localStorage.setItem("showsData", JSON.stringify(showsData));
};

const getShowsData = () => {
  const showDataJSON = localStorage.getItem("showsData");
  return showDataJSON ? JSON.parse(showDataJSON) : [];
};

export { addOrUpdateEpisode, getShowsData };


