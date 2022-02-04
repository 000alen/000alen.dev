import React, { Fragment } from "react";

export function HomeHeroTitleSplitted({ text }) {
  return (
    <Fragment>
      {[...text].map((character, index) => (
        <span key={index} className="hero__hover">
          {character}
        </span>
      ))}
    </Fragment>
  );
}
