import React from "react";

export function Button({ className, text, onClick, href }) {
  return (
    <button
      className={`c-button ${className}`}
      nav-anim="true"
      onClick={() => onClick && onClick()}
    >
      <span className="c-link">
        <span className="c-link__inner">
          <span> {text} </span>
          <span className="c-link__animated"> {text} </span>
        </span>
      </span>
    </button>
  );
}
