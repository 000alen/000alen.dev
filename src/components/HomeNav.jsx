import React from "react";
import { Button } from "./elements/Button";

export function HomeNav() {
  return (
    <nav className="home__nav">
      <div className="home__nav__left">
        <div className="nav__name" nav-anim="true">
          <span>
            Alen <br />
            Rubilar
          </span>
        </div>
      </div>
      <div className="home__nav__right">
        <Button text="contact" />
      </div>
    </nav>
  );
}
