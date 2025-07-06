import React from 'react';

function Button({ onBtnClick, children }) {
  return (
    <button className="button" onClick={onBtnClick}>
      {children}
    </button>
  );
}

export default Button;
