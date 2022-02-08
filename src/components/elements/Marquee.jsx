import React from "react";

export function Marquee({ href, text }) {
  return (
    <div className="marquee">
      <a href={href} target="_blank" className="marquee__wrap">
        <div className="marquee__inner">
          <span aria-hidden="true" className="inner-span">
            <span
              className="slide-up"
              data-content={text}
              aria-hidden="true"
            ></span>
            {text}
          </span>
          <span className="inner-span">
            <span
              className="slide-up"
              data-content={text}
              aria-hidden="true"
            ></span>
            {text}
          </span>
        </div>
      </a>
    </div>
  );
}
