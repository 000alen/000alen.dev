import React from "react";

export function HomeContact() {
  return (
    <section className="home__contact">
      <p className="home__contact__desc">
        Got a question, proposal or project, or want to work together on
        something? Feel free to reach out.
      </p>
      <div className="line-wrapper">
        <span className="home__projects__line left">
          <span></span>
        </span>
      </div>

      <div className="marquee">
        <a
          href="https://twitter.com/000alen"
          target="_blank"
          className="marquee__wrap"
        >
          <div className="marquee__inner">
            <span aria-hidden="true" className="inner-span">
              <span
                className="slide-up"
                data-content="LET’S TALK — LET’S COLLABORATE — SAY HELLO — WANNA START SOMETHING?"
                aria-hidden="true"
              ></span>
              LET’S TALK — LET’S COLLABORATE — SAY HELLO — WANNA START
              SOMETHING?
            </span>
            <span className="inner-span">
              <span
                className="slide-up"
                data-content="LET’S TALK — LET’S COLLABORATE — SAY HELLO — WANNA START SOMETHING?"
                aria-hidden="true"
              ></span>
              LET’S TALK — LET’S COLLABORATE — SAY HELLO — WANNA START
              SOMETHING?
            </span>
          </div>
        </a>
      </div>

      <div className="line-wrapper">
        <span className="home__projects__line right">
          <span></span>
        </span>
      </div>

      <div className="home__contact__email">
        <button className="email">000alen@ieee.org</button>
        <div className="to-copy">
          <span>Click To Copy</span>
        </div>
      </div>
    </section>
  );
}
