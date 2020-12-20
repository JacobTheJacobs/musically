import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Note from "./Note";
import { NoteType } from "../helpers";
import { device } from "../device";

const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
  height: 0px;

  margin: auto;
  font-family: "sans-serif";
  text-align: center;

  @media ${device.laptop} {
    max-width: 1700px;
  }

  @media ${device.desktop} {
    max-width: 1700px;
  }
`;

const hasWindow = typeof window !== "undefined";

function getWindowDimensions() {
  const width = hasWindow ? window.innerWidth : null;
  const height = hasWindow ? window.innerHeight : null;
  return {
    width,
    height,
  };
}

const Octave = ({ notes, clickHandler, hoverHandler }) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);
  const { height, width } = windowDimensions;
  return (
    <Wrapper>
      width: {width} ~ height: {height}
      {width >= 1501 ? (
        <div>
          {notes.map((element) => (
            <Note
              key={element.note}
              color={element.color}
              note={element.note}
              onClick={clickHandler}
              onHover={hoverHandler}
            />
          ))}
        </div>
      ) : width >= 884 && width <= 1500 ? (
        <div>
          {notes.slice(0, 25).map((element) => (
            <Note
              key={element.note}
              color={element.color}
              note={element.note}
              onClick={clickHandler}
              onHover={hoverHandler}
            />
          ))}
        </div>
      ) : width >= 576 && width <= 884 ? (
        <div>
          {notes.slice(0, 15).map((element) => (
            <Note
              key={element.note}
              color={element.color}
              note={element.note}
              onClick={clickHandler}
              onHover={hoverHandler}
            />
          ))}
        </div>
      ) : width >= 400 && width <= 576 ? (
        <div>
          {notes.slice(0, 10).map((element) => (
            <Note
              key={element.note}
              color={element.color}
              note={element.note}
              onClick={clickHandler}
              onHover={hoverHandler}
            />
          ))}
        </div>
      ) : (
        <div>
          {notes.slice(0, 5).map((element) => (
            <Note
              key={element.note}
              color={element.color}
              note={element.note}
              onClick={clickHandler}
              onHover={hoverHandler}
            />
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default Octave;
