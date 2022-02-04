import React from "react";

export function HomeProjectsLine({ left }) {
  return (
    <span className={`home__projects__line ${left ? "left" : "right"}`}>
      <span></span>
    </span>
  );
}
