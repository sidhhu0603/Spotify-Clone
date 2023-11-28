import React from "react";
import songContext from "./SongContext";
import { useState } from "react";
import { songsdata } from "../Bottombar/audios";

function SongState(props) {
  const [songs, setSongs] = useState(songsdata);
  const [currentSong, setCurrentSong] = useState(songsdata[0]);
  const [isplaying, setIsplaying] = useState(false);

  return (
    <songContext.Provider value={{songs, setSongs, currentSong, setCurrentSong, isplaying, setIsplaying}}>{props.children}</songContext.Provider>
  );
}

export default SongState;