import React from "react";
import { Crowd } from "./Crowd";
import { Anchor } from "./elements/Anchor";
import { Marquee } from "./elements/Marquee";

export function HomeContact() {
  return (
    <section className="home__contact pb-24" id="js-footer">
      <Marquee
        href="https://twitter.com/000alen"
        text="LET’S TALK — LET’S COLLABORATE — SAY HELLO — WANNA START SOMETHING?"
      />

      <div className="home__contact__center space-x-2 space-y-2">
        <Anchor href="https://twitter.com/000alen" text="Twitter" />
        <Anchor href="https://www.instagram.com/000alen/" text="Instagram" />
        <Anchor href="https://github.com/000alen" text="GitHub" />
        <Anchor href="https://www.linkedin.com/in/000alen/" text="LinkedIn" />
      </div>
    </section>
  );
}
