import React from "react";
import { HomeHeroTitleSplitted } from "./HomeHeroTitleSplitted";
import { Paragraph } from "./elements/Paragraph";
import { ScrollIndicator } from "./elements/ScrollIndicator";

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
              <Paragraph
                first="About"
                text="I am an aspiring Mathematician and developer based in San Francisco, with interest in Natural Language Understanding, Computer Algebra Systems, and Scientific Computing. I have competed in several hackathons and Olympiads and I am currently studying Mathematics & Computer Science at Minerva University."
              />
              <ScrollIndicator />
            </div>
          </div>
        </span>
      </div>
    </section>
  );
}
