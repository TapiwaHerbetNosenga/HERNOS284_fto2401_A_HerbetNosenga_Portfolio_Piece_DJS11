import React, { useState } from "react";

const EpisodeCard = ({ episode, seasonImage }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = document.getElementById(`audio-${episode.title}`);
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Use episode image if available, otherwise use season image
  const displayImage = episode.seasonPicture || seasonImage;

  return (
    <div className="card w-100 mb-4">
      <div className="card-body">
        <h5 className="card-title">{episode.title}</h5>
        <p className="card-text">{episode.description}</p>
        <audio id={`audio-${episode.title}`} controls style={{ width: "100%" }}>
          <source src={episode.file} type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
      </div>
    </div>
  );
};

export default EpisodeCard;
