import React from "react";

export function Title({ title, subtitle, href, left }) {
  return (
    <div className="home__projects__project right">
      <div className="home__projects__project__label">
        <div className="label__inner">
          <p>{subtitle}</p>
        </div>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="home__projects__project__link"
      >
        <h1
          className="home__projects__project__title"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-8"
        >
          <span className="inline-ovh">
            <div className={`title__main ${left ? "left" : "right"}`}>
              <span
                className="slide-up"
                data-content={title}
                aria-hidden="true"
              ></span>
              {title}
            </div>
          </span>
        </h1>
      </a>

      <div className="project__link">
        <Anchor href={href} text="Visit Site" />
      </div>
    </div>
  );
}
