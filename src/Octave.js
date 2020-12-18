import React from "react";
import styled from "styled-components";
import Note from "./Note";
import { NoteType } from "./helpers";

const Wrapper = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  height: 100vh;
`;

const Octave = ({ notes, clickHandler, hoverHandler }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Octave;
