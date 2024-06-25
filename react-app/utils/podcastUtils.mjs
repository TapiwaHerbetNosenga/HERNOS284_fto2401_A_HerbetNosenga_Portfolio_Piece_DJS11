const sortPodcasts = (podcasts, sortOrder) =>
  [...podcasts].sort((a, b) =>
    sortOrder === "ascending"
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title)
  );

  export {sortPodcasts};

