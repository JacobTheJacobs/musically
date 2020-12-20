import React, { useState, useEffect } from "react";
import "./App.css";

import { NoteType } from "./helpers";
import Octave from "./components/Octave";
import A4 from "./piano/A4.mp3";
import Bb4 from "./piano/Bb4.mp3";
import B4 from "./piano/B4.mp3";
import C5 from "./piano/C5.mp3";
import Db5 from "./piano/Db5.mp3";
import D5 from "./piano/D5.mp3";
import Eb5 from "./piano/Eb5.mp3";
import E5 from "./piano/E5.mp3";
import F5 from "./piano/F5.mp3";
import Gb5 from "./piano/Gb5.mp3";
import G5 from "./piano/G5.mp3";
import Ab5 from "./piano/Ab5.mp3";
import A5 from "./piano/A5.mp3";
import Bb5 from "./piano/Bb5.mp3";
import B5 from "./piano/B5.mp3";
import G7 from "./piano/G7.mp3";
import Db6 from "./piano/Db6.mp3";
import D6 from "./piano/D6.mp3";
import Eb6 from "./piano/Eb6.mp3";
import E6 from "./piano/E6.mp3";
import F6 from "./piano/F6.mp3";
import Gb6 from "./piano/Gb6.mp3";
import G6 from "./piano/G6.mp3";
import Ab6 from "./piano/Ab6.mp3";
import A6 from "./piano/A6.mp3";
import Bb6 from "./piano/Bb6.mp3";
import B6 from "./piano/B6.mp3";
import C7 from "./piano/C7.mp3";
import Db7 from "./piano/Db7.mp3";
import D7 from "./piano/D7.mp3";
import Eb7 from "./piano/Eb7.mp3";
import E7 from "./piano/E7.mp3";
import F7 from "./piano/F7.mp3";
import Gb7 from "./piano/Gb7.mp3";
import C6 from "./piano/G7.mp3";
import Ab7 from "./piano/Ab7.mp3";
import Bb7 from "./piano/Bb7.mp3";
import B7 from "./piano/B7.mp3";
import C8 from "./piano/C8.mp3";

function App() {
  const [mouseClicked, setMousedClicked] = useState(false);
  const [mouseMoved, setMouseMoved] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);
  const [audio, setAudio] = useState(new Audio());

  const playChord = (e) => {
    switch (e.currentTarget.value) {
      case "C8":
        setAudio(new Audio(C8));
        break;
      case "B7":
        setAudio(new Audio(B7));
        break;
      case "Bb7":
        setAudio(new Audio(Bb7));
        break;
      case "Ab7":
        setAudio(new Audio(Ab7));
        break;
      case "G7":
        setAudio(new Audio(G7));
        break;
      case "Gb7":
        setAudio(new Audio(Gb7));
        break;
      case "F7":
        setAudio(new Audio(F7));
        break;
      case "E7":
        setAudio(new Audio(E7));
        break;
      case "Eb7":
        setAudio(new Audio(Eb7));
        break;
      case "D7":
        setAudio(new Audio(D7));
        break;
      case "Db7":
        setAudio(new Audio(Db7));
        break;
      case "C7":
        setAudio(new Audio(C7));
        break;
      case "B6":
        setAudio(new Audio(B6));
        break;

      case "Bb6":
        setAudio(new Audio(Bb6));
        break;
      case "A6":
        setAudio(new Audio(A6));
        break;
      case "Ab6":
        setAudio(new Audio(Ab6));
        break;
      case "G6":
        setAudio(new Audio(G6));
        break;
      case "Gb6":
        setAudio(new Audio(Gb6));
        break;
      case "F6":
        setAudio(new Audio(F6));
        break;
      case "E6":
        setAudio(new Audio(E6));
        break;
      case "Eb6":
        setAudio(new Audio(Eb6));
        break;
      case "D6":
        setAudio(new Audio(D6));
        break;
      case "Db6":
        setAudio(new Audio(Db6));
        break;
      case "C6":
        setAudio(new Audio(C6));
        break;
      case "B5":
        setAudio(new Audio(B5));
        break;
      case "Bb5":
        setAudio(new Audio(Bb5));
        break;

      case "A5":
        setAudio(new Audio(A5));
        break;
      case "Ab5":
        setAudio(new Audio(Ab5));
        break;
      case "G5":
        setAudio(new Audio(G5));
        break;
      case "Gb5":
        setAudio(new Audio(Gb5));
        break;
      case "F5":
        setAudio(new Audio(F5));
        break;
      case "E5":
        setAudio(new Audio(E5));
        break;
      case "Eb5":
        setAudio(new Audio(Eb5));
        break;
      case "D5":
        setAudio(new Audio(D5));
        break;
      case "D6":
        setAudio(new Audio(D6));
        break;
      case "Db6":
        setAudio(new Audio(Db6));
        break;
      case "Db5":
        setAudio(new Audio(Db5));
        break;
      case "C5":
        setAudio(new Audio(C5));
        break;
      case "B4":
        setAudio(new Audio(B4));
        break;
      case "Bb4":
        setAudio(new Audio(Bb4));
        break;
      case "A4":
        setAudio(new Audio(A4));
        break;

      default:
        setAudio(new Audio(A4));
        break;
    }
    audio.play();
  };

  useEffect(() => {
    mouseClicked && currentNote != null ? audio.play() : audio.play();
  }, [mouseClicked]);

  const handleClick = (e) => {
    if (e.repeat) return;
    if (e._reactName === "onMouseDown") {
      playChord(e);
      setMousedClicked(true);
      setCurrentNote(e.currentTarget.value);
    } else if (
      e._reactName === "onMouseMove" &&
      currentNote !== e.currentTarget.value &&
      mouseClicked
    ) {
      console.log(currentNote);
      console.log(e.currentTarget.value);
      setMousedClicked(true);
      setMouseMoved(true);
      setCurrentNote(e.currentTarget.value);
      playChord(e);
    }
  };

  const handleHover = (e) => {
    console.log(e.currentTarget.value);
    console.log(e._reactName);
    setMousedClicked(false);
    setMouseMoved(false);
    setCurrentNote(null);
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
