import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "92%", label: "faster digital experiences" },
  { value: "84%", label: "higher user engagement" },
  { value: "76%", label: "better conversion journeys" },
];

function App() {
  const heroRef = useRef(null);
  const visualRef = useRef(null);
  const headlineRef = useRef(null);
  const statsRef = useRef(null);
  const orbRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      gsap.set(".reveal", { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: { ease: "power3.out" }
      });

      intro
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 60, clipPath: "inset(100% 0 0 0)" },
          { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)", duration: 1.15 }
        )
        .fromTo(
          statsRef.current?.children,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.14 },
          "-=0.55"
        )
        .fromTo(
          ".hero-copy",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.75 },
          "-=0.4"
        );

      // Core assignment feature: visual movement is directly tied to scroll progress.
      gsap.to(visualRef.current, {
        x: 270,
        y: 270,
        rotate: 12,
        rotateX: -8,
        rotateY: 18,
        scale: 0.72,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.15,
          pin: true,
          anticipatePin: 1,
        },
      });

      gsap.to(orbRef.current, {
        x: -180,
        y: 170,
        scale: 1.5,
        opacity: 0.35,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".scroll-line", {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Small parallax on the UI elements.
      gsap.to(".ui-float-a", {
        y: -90,
        rotate: -8,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".ui-float-b", {
        y: 110,
        rotate: 10,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-[#070807] text-[#f5f7f5]">
      <div className="noise" />

      <header className="fixed left-0 right-0 top-0 z-40 px-5 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#top" className="text-sm font-black tracking-[0.35em]">
            ITZFIZZ<span className="text-[#b7ff55]">.</span>
          </a>

          <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.22em] text-white/50 sm:flex">
            <span>Digital</span>
            <span>Web</span>
            <span>Experience</span>
          </div>

          <a
            href="#about"
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 transition hover:border-[#b7ff55]/60 hover:text-[#b7ff55]"
          >
            Explore
          </a>
        </div>
      </header>

      <main id="top">
        <section
          ref={heroRef}
          className="hero relative flex min-h-screen items-center overflow-hidden"
        >
          <div className="grid-bg absolute inset-0 opacity-70" />

          <div
            ref={orbRef}
            className="absolute left-1/2 top-[35%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#b7ff55]/10 blur-[90px]"
          />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8 lg:px-12">
            <div className="grid min-h-[75vh] items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="hero-copy mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#b7ff55]">
                  Creative digital studio
                </p>

                <h1
                  ref={headlineRef}
                  className="max-w-3xl text-[clamp(3rem,8.7vw,8.4rem)] font-black leading-[0.86] tracking-[-0.065em]"
                >
                  W E L C O M E
                  <br />
                  <span className="text-white/25">I T Z F I Z Z</span>
                </h1>

                <p className="hero-copy mt-8 max-w-lg text-sm leading-7 text-white/50 sm:text-base">
                  We turn ideas into fast, memorable digital experiences.
                  Scroll to explore the interaction.
                </p>

                <div ref={statsRef} className="mt-10 grid max-w-xl grid-cols-3 gap-3 sm:gap-6">
                  {stats.map((stat) => (
                    <div
                      key={stat.value}
                      className="reveal border-l border-white/15 pl-3 sm:pl-5"
                    >
                      <div className="text-2xl font-bold tracking-tight sm:text-4xl">
                        {stat.value}
                      </div>
                      <div className="mt-2 max-w-[100px] text-[10px] uppercase leading-4 tracking-wider text-white/40 sm:text-xs">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative hidden h-[620px] lg:block">
                <div
                  ref={visualRef}
                  className="browser-card glow absolute left-[10%] top-[11%] h-[420px] w-[590px] rounded-[30px] border border-white/15 bg-[#10120f]/95 p-3 shadow-2xl"
                >
                  <div className="h-full overflow-hidden rounded-[23px] border border-white/10 bg-[#161a15]">
                    <div className="flex h-12 items-center gap-2 border-b border-white/10 px-5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <div className="ml-auto rounded-full border border-white/10 px-4 py-1 text-[9px] text-white/30">
                        itzfizz.digital
                      </div>
                    </div>

                    <div className="relative h-[calc(100%-48px)] overflow-hidden p-8">
                      <div className="absolute right-[-70px] top-[-70px] h-56 w-56 rounded-full bg-[#b7ff55]/15 blur-3xl" />
                      <div className="relative z-10">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-[#b7ff55]">
                          Build / Move / Grow
                        </p>
                        <h2 className="mt-7 max-w-md text-5xl font-black leading-[0.92] tracking-[-0.05em]">
                          Make your
                          <br />
                          <span className="text-white/25">digital move.</span>
                        </h2>

                        <div className="mt-10 flex gap-3">
                          <div className="rounded-full bg-[#b7ff55] px-5 py-2 text-[10px] font-bold uppercase tracking-wider text-black">
                            Start project
                          </div>
                          <div className="rounded-full border border-white/10 px-5 py-2 text-[10px] font-bold uppercase tracking-wider text-white/50">
                            View work
                          </div>
                        </div>

                        <div className="mt-12 grid grid-cols-3 gap-3">
                          {[1, 2, 3].map((item) => (
                            <div
                              key={item}
                              className="h-16 rounded-2xl border border-white/10 bg-white/[0.025]"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ui-float-a absolute left-0 top-16 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl">
                  <div className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                    Performance
                  </div>
                  <div className="mt-1 text-xl font-bold">+48.6%</div>
                </div>

                <div className="ui-float-b absolute bottom-20 right-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl">
                  <div className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                    Experience
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-xl font-bold">
                    <span className="h-2 w-2 rounded-full bg-[#b7ff55]" />
                    Smooth
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 lg:flex">
              <div className="relative h-14 w-px overflow-hidden bg-white/15">
                <div className="scroll-line h-full w-full origin-top scale-y-0 bg-[#b7ff55]" />
              </div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                Scroll to move
              </span>
            </div>
          </div>
        </section>

        <section id="about" className="relative border-t border-white/10 bg-[#0b0d0a] px-5 py-28 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b7ff55]">
                  Built for the web
                </p>
                <h2 className="mt-5 max-w-2xl text-4xl font-black tracking-[-0.04em] sm:text-6xl">
                  Smooth interactions.
                  <br />
                  <span className="text-white/25">Better experiences.</span>
                </h2>
              </div>

              <div className="max-w-xl lg:pt-12">
                <p className="text-base leading-8 text-white/50">
                  This section demonstrates the scroll transition continuing
                  beyond the hero. The animation is driven by scroll progress
                  with GSAP ScrollTrigger, while transforms keep motion smooth
                  and performant.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {["HTML", "CSS", "JavaScript", "GSAP", "React", "Tailwind"].map(
                    (tech) => (
                      <div
                        key={tech}
                        className="rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-5 text-sm font-semibold text-white/70"
                      >
                        {tech}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 px-5 py-8 text-center text-xs uppercase tracking-[0.25em] text-white/25">
          ITZFIZZ • Scroll-driven web experience
        </footer>
      </main>
    </div>
  );
}

export default App;