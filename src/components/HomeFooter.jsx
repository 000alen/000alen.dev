import React from "react";

export function HomeFooter() {
  return (
    <footer className="home__footer" id="js-footer">
      <div className="home__footer__center">
        <div className="footer__links">
          <div className="link__flex">
            <div className="link__flex__inner">
              <a
                href="https://twitter.com/000alen"
                target="_blank"
                rel="noopener noreferrer"
                className="c-button"
              >
                <span className="c-link">
                  <span className="c-link__inner">
                    <span> Twitter </span>
                    <span className="c-link__animated"> Twitter </span>
                  </span>
                </span>
              </a>

              <a
                href="https://www.instagram.com/000alen/"
                target="_blank"
                rel="noopener noreferrer"
                className="c-button"
              >
                <span className="c-link">
                  <span className="c-link__inner">
                    <span> INSTAGRAM </span>
                    <span className="c-link__animated"> INSTAGRAM </span>
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="link__flex">
            <div className="link__flex__inner second">
              <a
                href="https://github.com/000alen"
                target="_blank"
                rel="noopener noreferrer"
                className="c-button"
              >
                <span className="c-link">
                  <span className="c-link__inner">
                    <span> GITHUB </span>
                    <span className="c-link__animated"> GITHUB </span>
                  </span>
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/000alen/"
                className="c-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="c-link">
                  <span className="c-link__inner">
                    <span> LINKEDIN </span>
                    <span className="c-link__animated"> LINKEDIN </span>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
