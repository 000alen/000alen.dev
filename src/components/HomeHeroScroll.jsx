import React from "react";

export function HomeHeroScroll() {
  return (
    <div className="hero__scroll">
      <p>Scroll down</p>
      <div className="c-infinite">
        <span className="c-link">
          <span className="c-link__inner">
            <span>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8333 13.9766L15.3033 9.50658L16.4816 10.6849L9.99998 17.1666L3.51831 10.6849L4.69664 9.50658L9.16664 13.9766V3.83325H10.8333V13.9766Z"
                  fill="#777777"
                />
              </svg>
            </span>
            <span className="c-link__animated">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8333 13.9766L15.3033 9.50658L16.4816 10.6849L9.99998 17.1666L3.51831 10.6849L4.69664 9.50658L9.16664 13.9766V3.83325H10.8333V13.9766Z"
                  fill="#777777"
                />
              </svg>
            </span>
          </span>
        </span>
      </div>
    </div>
  );
}
