import { Link } from "react-router-dom";

const PodcastList = ({ podcasts }) => (
  <div className="podcast-list">
    {podcasts.map((podcast) => (
      <div key={podcast.id} className="podcast-card flex flex-col items-center justify-center border rounded-lg p-4 m-2">
        <Link
          to={`/shows/${podcast.id}`}
          state={{
            genre: podcast.genres,
          }}
        >
          <img
            src={podcast.image}
            alt={podcast.title}
            className="podcast-img  mb-4"
          />
          <h2 className="pod-title   truncate text-center text-lg font-bold">{podcast.title}</h2>
          <h2 text-xm>Seasons: {podcast.seasons}</h2>
        </Link>
      </div>
    ))}
  </div>
  );

export default PodcastList;
