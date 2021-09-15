import React from 'react';

const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontWeight: isWinningSquare ? 'Bold' : 'normal' }}
    >
      {value}
    </button>
  );
};
export default Square;
