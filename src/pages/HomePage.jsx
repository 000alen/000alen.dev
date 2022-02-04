import React, { useEffect } from "react";

import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import each from "lodash/each";
import { copyText } from "../utils";
import { HomeNav } from "../components/HomeNav";
import { HomeHero } from "../components/HomeHero";
import { HomeProjects } from "../components/HomeProjects";
import { HomeStack } from "../components/HomeStack";
import { HomeAwards } from "../components/HomeAwards";
import { HomeContact } from "../components/HomeContact";
import { HomeFooter } from "../components/HomeFooter";

export function HomePage() {
  useEffect(() => {
    const toContactButtons = document.querySelectorAll(".contact-scroll");
    const footer = document.getElementById("js-footer");
    const scrollEl = document.querySelector("[data-scroll-container]");
    const emailButton = document.querySelector("button.email");
    const toCopyText = document.querySelector(".to-copy span");

    gsap.registerPlugin(ScrollTrigger);

    const locomotive = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.06,
      tablet: {
        breakpoint: 768,
      },
    });

    setTimeout(() => {
      locomotive.update();
    }, 1000);

    locomotive.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(locomotive.el, {
      scrollTop(value) {
        return arguments.length
          ? locomotive.scrollTo(value, 0, 0)
          : locomotive.scroll.instance.scroll.y;
      },

      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    const homeActions = () => {
      each(toContactButtons, (button) => {
        button.onclick = () => {
          locomotive.scrollTo(footer);
        };
      });
      emailButton.addEventListener("click", (e) => {
        copyText(e);
        toCopyText.textContent = "copied";
        setTimeout(() => {
          toCopyText.textContent = "Click To Copy";
        }, 2000);
      });
    };

    const homeIntro = () => {
      const tl = gsap.timeline();
      gsap.to(scrollEl, {
        autoAlpha: 1,
      });
      tl.from(".home__nav", {
        duration: 0.5,
        delay: 0.3,
        opacity: 0,
        yPercent: -100,
        ease: "power4.out",
      })
        .from(".hero__title [title-overflow]", {
          duration: 0.7,
          yPercent: 100,
          stagger: {
            amount: 0.2,
          },
          ease: "power4.out",
        })
        .from(
          ".hero__title .bottom__right",
          {
            duration: 1,
            yPercent: 100,
            opacity: 0,
            ease: "power4.out",
          },
          "<20%"
        )
        .set(".hero__title .overflow", { overflow: "unset" })
        .from(
          ".hero__title .mobile",
          {
            duration: 0.7,
            yPercent: 100,
            stagger: {
              amount: 0.2,
            },
            ease: "power4.out",
          },
          "-=1.4"
        );
    };

    const homeAnimations = () => {
      gsap.to(".home__projects__line", { autoAlpha: 1 });
      gsap.utils.toArray(".home__projects__line").forEach((el) => {
        const line = el.querySelector("span");
        gsap.from(line, {
          duration: 1.5,
          scrollTrigger: {
            trigger: el,
            scroller: "[data-scroll-container]",
          },
          scaleX: 0,
        });
      });
      if (window.innerWidth <= 768) {
        gsap.utils.toArray(".home__projects__project").forEach((el) => {
          const text = el.querySelector(".title__main");
          const link = el.querySelector(".project__link");
          gsap.from([text, link], {
            scrollTrigger: {
              trigger: el,
              scroller: "[data-scroll-container]",
            },
            duration: 1.5,
            yPercent: 100,
            stagger: {
              amount: 0.2,
            },
            ease: "power4.out",
          });
        });
        const awardsTl = gsap.timeline({
          defaults: {
            ease: "power1.out",
          },
          scrollTrigger: {
            trigger: ".home__awards__top",
            scroller: "[data-scroll-container]",
          },
        });
        awardsTl
          .from(".awards-title.mobile span", {
            duration: 1,
            opacity: 0,
            yPercent: 100,
            stagger: {
              amount: 0.2,
            },
          })
          .from(
            ".home__awards .awards-links",
            {
              duration: 0.7,
              yPercent: 60,
              opacity: 0,
            },
            "-=1"
          );
      } else {
        const awardsTl = gsap.timeline({
          defaults: {
            ease: "power1.out",
          },
          scrollTrigger: {
            trigger: ".home__awards__top",
            scroller: "[data-scroll-container]",
          },
        });
        awardsTl
          .from(".awards-title.desktop", {
            duration: 1,
            opacity: 0,
            yPercent: 100,
            stagger: {
              amount: 0.2,
            },
          })
          .from(
            ".home__awards .awards-links",
            {
              duration: 0.5,
              yPercent: 100,
              opacity: 0,
            },
            "-=1"
          );
      }
    };

    const heroTextAnimation = () => {
      gsap.to(".hero__title__dash.desktop", {
        scrollTrigger: {
          trigger: ".hero__title",
          scroller: "[data-scroll-container]",
          scrub: true,
          start: "-8% 9%",
          end: "110% 20%",
        },
        scaleX: 4,
        ease: "none",
      });
    };

    heroTextAnimation();
    homeIntro();
    homeAnimations();
    homeActions();
  }, []);

  return (
    <main className="home" data-scroll-container>
      <HomeNav />
      <HomeHero />
      <HomeProjects />
      <HomeStack />
      <HomeAwards />
      <HomeContact />
      <HomeFooter />
    </main>
  );
}
