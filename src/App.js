import React, { useState, useEffect } from "react";
import "./App.css";

import { NoteType } from "./helpers";
import Octave from "./Octave";
import A1 from "./piano/A1.mp3";
import C1 from "./piano/C1.mp3";
import C7 from "./piano/C7.mp3";
import D1 from "./piano/D1.mp3";
import D7 from "./piano/D7.mp3";
import E1 from "./piano/E1.mp3";
import F1 from "./piano/F1.mp3";
import F7 from "./piano/F7.mp3";
import G1 from "./piano/G1.mp3";
import G7 from "./piano/G7.mp3";
import B1 from "./piano/B1.mp3";
import A7 from "./piano/A7.mp3";

function App() {
  const [mouseClicked, setMousedClicked] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);
  const [audio, setAudio] = useState(new Audio());

  const playChord = (e) => {
    switch (e.currentTarget.value) {
      case "A1":
        setAudio(new Audio(A1));
        break;
      case "C1":
        setAudio(new Audio(C1));
        break;
      case "C7":
        setAudio(new Audio(C7));
        break;
      case "D1":
        setAudio(new Audio(D1));
        break;
      case "D7":
        setAudio(new Audio(D7));
        break;
      case "E1":
        setAudio(new Audio(E1));
        break;
      case "F1":
        setAudio(new Audio(F1));
        break;
      case "F7":
        setAudio(new Audio(F7));
        break;
      case "D7":
        setAudio(new Audio(D7));
        break;
      case "G1":
        setAudio(new Audio(G1));
        break;
      case "G7":
        setAudio(new Audio(G7));
        break;
      case "B1":
        setAudio(new Audio(B1));
        break;
      case "A7":
        setAudio(new Audio(A7));
        break;

      default:
        setAudio(new Audio(A7));
        break;
    }
    audio.play();
  };

  const toggle = () => setMousedClicked(!mouseClicked);
  useEffect(() => {
    mouseClicked ? audio.play() : audio.pause();
  }, [mouseClicked]);

  useEffect(() => {
    audio.addEventListener("ended", () => setMousedClicked(false));
    return () => {
      audio.removeEventListener("ended", () => setMousedClicked(false));
    };
  }, [mouseClicked, toggle]);

  const handleClick = (e) => {
    setCurrentNote(e.currentTarget.value);
    if (e.repeat) return;
    if (e._reactName === "onMouseDown") {
      playChord(e);

      setMousedClicked(true);
    } else if (
      e._reactName === "onMouseMove" &&
      currentNote !== e.currentTarget.value &&
      mouseClicked
    ) {
      console.log(currentNote);
      console.log(e.currentTarget.value);
      setCurrentNote(e.currentTarget.value);
      playChord(e);
    }
  };

  const handleHover = (e) => {
    console.log(e.currentTarget.value);
    console.log(e._reactName);
    setMousedClicked(false);
    setCurrentNote("");
    let playPromise = audio.pause();
    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          // Automatic playback started!
          // Show playing UI.
          console.log("audio played auto");
        })
        .catch((error) => {
          // Auto-play was prevented
          // Show paused UI.
          console.log("playback prevented");
        });
    }
  };

  return (
    <div className="App">
      <Octave
        notes={NoteType}
        clickHandler={handleClick}
        hoverHandler={handleHover}
      />
    </div>
  );
}

export default App;
