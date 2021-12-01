import React from "react";
import Router from "react-router-dom";

const Square = props => {
  return (
    <button
      className={props.highlightWinSquares}
      onClick={props.updateStateOnClick}
    >
      {props.value}
    </button>
  );
};

export default Square;

