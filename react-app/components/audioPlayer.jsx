import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const AudioPlayer = () => {
  return (
    <div id="audio-span">
      <ReactAudioPlayer
        src="path_to_your_audio_file.mp3"
        autoPlay ={false}
        controls
        loop ={false}
        volume={0.5}
        className="audio-player"
      />
    </div>
  );
}

export default AudioPlayer;