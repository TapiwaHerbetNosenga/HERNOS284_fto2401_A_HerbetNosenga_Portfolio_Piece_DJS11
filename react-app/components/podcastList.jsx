import { Link } from "react-router-dom";

const PodcastList = ({ podcasts }) => (
  <div className="podcast-list">
    {podcasts.map((podcast) => (
      <div key={podcast.id} className="podcast-card">
        <Link
          to={`/shows/${podcast.id}`}
          state={{
            genre: podcast.genres,
          }}
        >
          <img
            src={podcast.image}
            alt={podcast.title}
            className="podcast-img"
          />
          <h2 className="pod-title">{podcast.title}</h2>
        </Link>
      </div>
    ))}
  </div>
  );

export default PodcastList;
