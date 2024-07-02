/*const addOrUpdateEpisode = (show, season, episode) => {
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
  }*/

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
    
    const removeFavorite = (show, season ,episode) => {
     const showDataJSON = localStorage.getItem("showsData");
      const parsedData = showDataJSON ? JSON.parse(showDataJSON) : [];
    
      const showIndex = parsedData.findIndex((s) => s.id === show.id);
      if (showIndex > -1) {
        // Find the season within the show
        const seasonIndex = parsedData[showIndex].seasons.findIndex(
          (s) => s.season === season.season
        );
    
    
        if (seasonIndex > -1) {
    
          parsedData[showIndex].seasons[seasonIndex].episodes = parsedData[showIndex].seasons[seasonIndex].episodes.filter(
            (e) => e.episode !== episode.episode
          );
    
          // If the season has no episodes left, remove the season
          if (parsedData[showIndex].seasons[seasonIndex].episodes.length === 0) {
            parsedData[showIndex].seasons.splice(seasonIndex, 1);
          }
    
          // If the show has no seasons left, remove the show
          if (parsedData[showIndex].seasons.length === 0) {
            parsedData.splice(showIndex, 1);
          }
    
          // Update localStorage
          localStorage.setItem("showsData", JSON.stringify(parsedData));
        }
      }
    
      console.log(parsedData);
    }
    
    export { addOrUpdateEpisode, getShowsData, removeFavorite };
    
    
    