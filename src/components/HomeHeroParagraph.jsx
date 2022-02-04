import React, { Fragment } from "react";
import { HomeHeroScroll } from "./HomeHeroScroll";

export function HomeHeroParagraph({ first, text }) {
  return (
    <Fragment>
      <p className="hero__paragraph" align="justify">
        <span className="first-word">{first}</span> &nbsp; {text}
      </p>
      <HomeHeroScroll />
    </Fragment>
  );
}
