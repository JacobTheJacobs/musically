import React from "react";
import styled from "styled-components";

const Black = styled.button`
  width: 40px;
  height: 230px;
  background: black;
  border: solid black 1px;
  position: absolute;
  margin: 1px;
  margin-left: -20px;
  :active {
    background: #333;
  }
  :hover {
    background: #333;
  }
`;

const White = styled.button`
  width: 60px;
  height: 500px;
  background: white;
  border: solid black 1px;
  box-shadow: 2px 5px;
  margin: 1px;
  margin-left: "-20px";
  box-sizing: border-box;
  :active {
    background: #eee;
  }
  :hover {
    background: #eee;
  }
`;

const Note = ({ color, note, onClick, onHover }) =>
  color === "white" ? (
    <White
      value={note}
      onMouseDown={onClick}
      onMouseUp={onHover}
      onMouseMove={onClick}
    />
  ) : (
    <Black
      value={note}
      onMouseDown={onClick}
      onMouseUp={onHover}
      onMouseMove={onClick}
    />
  );

export default Note;
