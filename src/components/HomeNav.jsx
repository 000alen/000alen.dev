import React from "react";
import { HomeNavAlen } from "./HomeNavAlen";
import { HomeNavButton } from "./HomeNavButton";

export function HomeNav() {
  return (
    <nav className="home__nav">
      <div className="home__nav__left">
        <HomeNavAlen />
      </div>
      <div className="home__nav__right">
        <HomeNavButton text="contact" />
      </div>
    </nav>
  );
}
