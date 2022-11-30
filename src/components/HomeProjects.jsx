import React from "react";
import { HomeProjectsProject } from "./HomeProjectsProject";

export function HomeProjects() {
  return (
    <section className="home__projects">
      <HomeProjectsProject
        left
        label={
          <>
            MACHINE LEARNING / <br />
            SEIZURE PREDICTION
          </>
        }
        text="PulseBud - A real-time seizure prediction system for smartwatches, powered by machine learning."
        url="https://www.github.com/000alen/pulsebud"
      />

      <HomeProjectsProject
        label={
          <>
            MACHINE LEARNING / <br />
            NATURAL LANGUAGE UNDERSTANDING
          </>
        }
        text="Phaedra - The Inclusive Reading Assistant"
        url="https://www.github.com/000alen/phaedra"
      />

      <HomeProjectsProject
        left
        label={
          <>
            MACHINE LEARNING / <br />
            CANCER DETECTION
          </>
        }
        text="TotemUV - The Tool to detect invisible skin damage"
        url="https://github.com/000alen/totemuv/"
      />

      {/* <HomeProjectsProject
        left
        label={
          <>
            CREATIVE DEVELOPMENT / <br />
            PORTFOLIO EXPLORATION
          </>
        }
        text="nChess - The higher-dimensional Chess Framework"
        url="https://github.com/000alen/nchess/"
      /> */}
    </section>
  );
}
