import React from "react";
import { HomeStackParagraph } from "./HomeStackParagraph";

export function HomeStack() {
  return (
    <section className="home__stack">
      <HomeStackParagraph
        first="STACK"
        text="I’m familiar with JavaScript, Typescript, and React for Front-end development. I'm also familiar with Node.js, Express.js, and Firebase for Back-end development. And I'm proficient on Python, C++ and Julia for Scientific Computation."
        url="https://github.com/000alen/"
        label="GITHUB"
      />
    </section>
  );
}
