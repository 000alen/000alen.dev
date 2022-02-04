import React from "react";
import { HomeProjectsLine } from "./HomeProjectsLine";
import { HomeProjectsProject } from "./HomeProjectsProject";

export function HomeProjects() {
  return (
    <section className="home__projects">
      <HomeProjectsLine left />
      <HomeProjectsProject
        label={
          <>
            CREATIVE DEVELOPMENT / <br />
            PORTFOLIO EXPLORATION
          </>
        }
        text="Phaedra - The Inclusive Reading Assistant"
        url="https://www.github.com/000alen/phaedra"
      />

      <HomeProjectsLine />
      <HomeProjectsProject
        left
        label={
          <>
            CREATIVE DEVELOPMENT / <br />
            PORTFOLIO EXPLORATION
          </>
        }
        text="nChess - The higher-dimensional Chess Framework"
        url="https://github.com/000alen/nchess/"
      />

      <HomeProjectsLine left />
      <HomeProjectsProject
        label={
          <>
            CREATIVE DEVELOPMENT / <br />
            PORTFOLIO EXPLORATION
          </>
        }
        text="RE - The Framework for syntactic and semantic analysis"
        url="https://github.com/000alen/re/"
      />

      <HomeProjectsLine />
      <HomeProjectsProject
        left
        label={
          <>
            CREATIVE DEVELOPMENT / <br />
            PORTFOLIO EXPLORATION
          </>
        }
        text="TotemUV - The Tool to detect invisible skin damage"
        url="https://github.com/000alen/totemuv/"
      />
    </section>
  );
}
