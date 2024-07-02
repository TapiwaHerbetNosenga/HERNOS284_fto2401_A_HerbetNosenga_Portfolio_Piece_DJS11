const sortPodcastsAlphabetically = (podcasts, sortOrder) =>
  [...podcasts].sort((a, b) =>
    sortOrder === "ascending"
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title)
  );


  
  const sortPodcastsByGenre = (podcasts, Genre) => (
  
    podcasts.filter(podcast =>  podcast.genres.includes(Number(Genre)))
  );




  export {sortPodcastsAlphabetically, sortPodcastsByGenre};

