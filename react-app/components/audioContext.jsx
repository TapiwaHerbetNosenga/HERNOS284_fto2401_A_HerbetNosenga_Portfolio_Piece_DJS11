import React, { createContext, useContext, useState } from "react";

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const [currentAudio, setCurrentAudio] = useState({
    url: "https://podcast-api.netlify.app/placeholder-audio.mp3",
    key: 0,
  });
  return (
    <AudioContext.Provider value={{ currentAudio, setCurrentAudio }}>
      {children}
    </AudioContext.Provider>
  );
};
