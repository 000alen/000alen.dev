import React from "react";

export function Anchor({ href, text }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="c-button"
    >
      <span className="c-link">
        <span className="c-link__inner">
          <span>
            {text}
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
  );
}
