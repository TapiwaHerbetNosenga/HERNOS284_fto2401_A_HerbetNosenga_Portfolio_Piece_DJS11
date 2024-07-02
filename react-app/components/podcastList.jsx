import { Link } from "react-router-dom";

const PodcastList = ({ podcasts }) => (
  <div className="podcast-list">
    {podcasts.map((podcast) => (
      <div key={podcast.id} className="podcast-card rounded-lg p-4 m-2">
        <Link
          to={`/shows/${podcast.id}`}
          state={{
            genre: podcast.genres,
          }}
        >
          <div id="card-img">
          <img
            src={podcast.image}
            alt={podcast.title}
            className="podcast-img  mb-2"
          />
          </div>
          <div id="card-details" className="pod-details">
          <h2 className="pod-title   truncate text-center text-lg font-bold">{podcast.title}</h2>
          <h2 >Seasons: {podcast.seasons}</h2>
          </div>
        </Link>
      </div>
    ))}
  </div>
  );

export default PodcastList;
