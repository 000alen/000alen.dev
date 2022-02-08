import React from "react";

export function Paragraph({ first, text, url, label, maxWidth }) {
  return (
    <p className="paragraph" align="justify" style={{ maxWidth }}>
      <span className="first-word">{first}</span> &nbsp; {text} &nbsp;
      {label && (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      )}
    </p>
  );
}
