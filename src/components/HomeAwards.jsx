import React from "react";

export function HomeAwards() {
  return (
    <section className="home__awards">
      <div className="home__awards__top">
        <h2 className="awards-title mobile">
          <span>AWARDS X </span>
          <br />
          <span>RECOGNITION</span>
        </h2>
        <h2 className="awards-title desktop">Awards</h2>
        <p className="awards-links">
          HackMIT 2021 NITW Challenge &nbsp;
          <a
            href="https://hackmit.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            (HACKMIT)
          </a>
          , Solve for Tomorrow 2020 &nbsp;
          <a
            href="https://solucionesparaelfuturo.cl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            (SOLVEFORTOMORROW)
          </a>
        </p>
      </div>
      <div className="home__awards__bottom">
        <h2 className="awards-title desktop">X</h2>
        <h2 className="awards-title desktop">RECOGNITION</h2>
      </div>
    </section>
  );
}
