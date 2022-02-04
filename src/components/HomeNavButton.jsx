import React from "react";

export function HomeNavButton({ text, onClick }) {
  return (
    <button
      className="nav__button c-button contact-scroll"
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
