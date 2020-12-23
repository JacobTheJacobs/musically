import React from "react";
import styled from "styled-components";

const Black = styled.button`
  width: 40px;
  height: 230px;
  background: black;
  border: solid black 1px;
  border-radius: 10px;
  position: absolute;
  margin: 10px;
  margin-left: -20px;
  cursor: pointer;
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
  -moz-box-shadow: inset 0 0 1px #000000;
  -webkit-box-shadow: inset 0 0 1px #000000;
  box-shadow: inset 0 0 1px #000000;
  margin: 1px;
  border-radius: 10px;
  cursor: pointer;
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
