import React from "react";

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

      <div className="project__link">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="c-button"
        >
          <span className="c-link">
            <span className="c-link__inner">
              <span>
                Visit Site
                <span className="share-icon">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.337 7.845l-7.173 7.173-1.178-1.179 7.172-7.172H5.837V5h9.166v9.167h-1.666V7.845z"
                      fill="#777"
                    />
                  </svg>
                </span>
              </span>
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}
