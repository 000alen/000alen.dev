import React from "react";
import { Anchor } from "./elements/Anchor";

export function HomeProjectsProject({ label, text, url, left }) {
  return (
    <div className="home__projects__project right">
      <div className="home__projects__project__label">
        <div className="label__inner">
          <p>{label}</p>
        </div>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="home__projects__project__link"
      >
        <h1
          className="home__projects__project__title"
          data-scroll=""
          data-scroll-direction="horizontal"
          data-scroll-speed="-8"
        >
          <span className="inline-ovh">
            <div className={`title__main ${left ? "left" : "right"}`}>
              <span
                className="slide-up"
                data-content={text}
                aria-hidden="true"
              ></span>
              {text}
            </div>
          </span>
        </h1>
      </a>

      <div className={`project__link ${left ? "left" : "right"}`}>
        <Anchor href={url} text="Visit Site" />
      </div>
    </div>
  );
}
