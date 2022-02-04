import React from "react";

export function HomeStackParagraph({ first, text, url, label }) {
  return (
    <p className="home__stack__paragraph" align="justify">
      <span className="first-word">{first}</span> &nbsp; {text} &nbsp;
      <a href={url} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </p>
  );
}
