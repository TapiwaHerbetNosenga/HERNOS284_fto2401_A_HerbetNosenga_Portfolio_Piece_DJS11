import React from 'react';


const PlayButton = ({onClick}) => {
  return (
    <button className="glow-button" onClick={onClick}>
     Play
    </button>
  );
};

export default PlayButton;

