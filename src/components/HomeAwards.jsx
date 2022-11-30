import React from "react";

export function HomeAwards() {
  return (
    <section className="home__awards">
      <div className="home__awards__top">
        <h2 className="awards-title mobile">
          <span>AWARDS & </span>
          <br />
          <span>RECOGNITION</span>
        </h2>
        <h2 className="awards-title desktop">Awards</h2>
        <p className="awards-links">
          Winner of the biggest collegiate Hackathon &nbsp;
          <a
            href="https://calhacks.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            (CALHACKS)
          </a>
          , Winner of HackMIT's NITW challenge &nbsp;
          <a
            href="https://hackmit.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            (HACKMIT)
          </a>
        </p>
      </div>
      <div className="home__awards__bottom">
        <h2 className="awards-title desktop">&</h2>
        <h2 className="awards-title desktop">RECOGNITION</h2>
      </div>
    </section>
  );
}
