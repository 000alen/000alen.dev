import React from "react";
import { HomeHeroTitleSplitted } from "./HomeHeroTitleSplitted";
import { HomeHeroParagraph } from "./HomeHeroParagraph";

export function HomeHero() {
  return (
    <section className="home__hero">
      <div className="hero__title">
        <h1 className="mobile">
          FULL <br />
          —— STACK <br />
          DEVELOPER
        </h1>
        <h1 className="hero__title__top overflow desktop">
          <div className="hero__title__top" title-overflow="true">
            <span
              className="hero__title__left"
              data-scroll=""
              data-scroll-direction="horizontal"
              data-scroll-position="top"
              data-scroll-speed="7"
            >
              <HomeHeroTitleSplitted text="FULL" />
            </span>

            <span className="hero__title__dash desktop">——</span>
            <span className="hero__title__dash tablet">——</span>

            <span
              className="hero__title__right"
              data-scroll=""
              data-scroll-direction="horizontal"
              data-scroll-position="top"
              data-scroll-speed="-7"
            >
              <HomeHeroTitleSplitted text="STACK" />
            </span>
          </div>
        </h1>
        <span className="hero__title__bottom overflow">
          <div className="hero__title__bottom">
            <h1 className="bottom__left desktop" title-overflow="true">
              <HomeHeroTitleSplitted text="DEVELOPER" />
            </h1>
            <div className="bottom__right">
              <HomeHeroParagraph
                first="About"
                text="I am a developer based in Santiago, Chile with interest in Natural Language Understanding, Machine Learning, Computer Algebra Systems, and Competitive Programming. I have competed in several hackathons and Olympiads and I am currently studying Computer Science at the Pontificia Universidad Catolica de Chile."
              />
            </div>
          </div>
        </span>
      </div>
    </section>
  );
}
