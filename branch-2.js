import React from "react";
import Route from 'Router';

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

