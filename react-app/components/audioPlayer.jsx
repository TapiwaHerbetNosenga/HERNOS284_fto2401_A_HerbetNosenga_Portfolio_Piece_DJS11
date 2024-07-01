import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { useState } from "react";
import { useAudio } from "./audioContext";


const AudioPlayer = () => {
  
    const { currentAudio } = useAudio(); 

  return (
    <div id="audio-span">
      <ReactAudioPlayer
        src ={currentAudio.url}
        key={currentAudio.key}
        autoPlay={true}
        controls
        loop={false}
        volume={0.5}
        className="audio-player"
      />
    </div>
  );
};

export default AudioPlayer;
