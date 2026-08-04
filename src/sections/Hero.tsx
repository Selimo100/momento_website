import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DeviceFrame from "../components/DeviceFrame";
import FitText from "../components/FitText";
import phoneHome from "../assets/screens/iPhone_home.jpg";

function scrollTo(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* Weighted entrance — fast start, gentle settle. No spring, no overshoot. */
const entrance = [0.32, 0.72, 0, 1] as const;

const rise = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const typeY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-onyx"
      aria-labelledby="hero-heading"
    >
      {/* Horizon vignette */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(160,192,185,0.10), transparent)",
        }}
      />

      <div className="relative flex-1 flex flex-col max-w-[1400px] w-full mx-auto px-6 md:px-12 pt-[120px] pb-12">
        {" "}
        {/* Metadata row */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center gap-1.5 mb-12"
        >
          <motion.span
            variants={rise}
            transition={{ duration: 0.6, ease: entrance }}
            className="tag-ghost"
          >
            <span className="accent-dot" style={{ width: 6, height: 6 }} />
            Coming soon — iOS
          </motion.span>
          <motion.span
            variants={rise}
            transition={{ duration: 0.6, ease: entrance }}
            className="tag-ghost"
          >
            Local-first
          </motion.span>
          <motion.span
            variants={rise}
            transition={{ duration: 0.6, ease: entrance }}
            className="tag-ghost"
          >
            No backend
          </motion.span>
          <motion.span
            variants={rise}
            transition={{ duration: 0.6, ease: entrance }}
            className="tag-ghost"
          >
            2026
          </motion.span>
        </motion.div>
        {/* Monument headline */}
        <motion.div
          style={{ y: typeY }}
          className="relative flex-1 flex min-h-[520px] items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: entrance }}
            className="
      absolute
      left-1/2
      top-1/2
      w-[calc(100vw-1.5rem)]
      -translate-x-1/2
      -translate-y-1/2
      sm:w-[calc(100vw-2rem)]
      2xl:w-[min(97vw,2200px)]    "
          >
            <FitText
              as="h1"
              id="hero-heading"
              className="display display-fade-hero text-center select-none whitespace-nowrap"
              fitFactor={0.97}
              maxFontSize={900}
              maxHeightRatio={0.85}
              style={{ letterSpacing: "-0.055em" }}
            >
              Momento
            </FitText>
          </motion.div>

          {/* Phone anchored in front of the headline */}
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-[34%]">
            <motion.div
              style={{ y: phoneY }}
              initial={{ opacity: 0, y: 64, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.9, ease: entrance }}
            >
              <div className="scale-[0.5] sm:scale-[0.6] lg:scale-[0.72] xl:scale-[0.8] 2xl:scale-90">
                <DeviceFrame
                  src={phoneHome}
                  alt="The Momento app showing a list of saved moments"
                  width={264}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
        {/* Foot of the hero: statement left, actions right */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 mt-12 grid gap-6 md:grid-cols-2 md:items-end"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: 24,
          }}
        >
          <motion.p
            variants={rise}
            transition={{ duration: 0.7, ease: entrance, delay: 0.5 }}
            className="text-body max-w-[420px]"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            A local-first iOS app for building the moments you actually want to
            remember — stories, best shots, and albums exported straight to
            Apple Photos.
          </motion.p>

          <motion.div
            variants={rise}
            transition={{ duration: 0.7, ease: entrance, delay: 0.6 }}
            className="flex flex-wrap gap-1.5 md:justify-end"
          >
            <button
              onClick={() => scrollTo("features")}
              className="pill pill-accent cursor-pointer"
            >
              <span className="accent-dot" style={{ width: 6, height: 6 }} />
              Discover Momento
            </button>
            <button
              onClick={() => scrollTo("use-cases")}
              className="pill pill-on-dark cursor-pointer"
            >
              <span className="text-micro opacity-60">•</span>
              Use cases
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-3 left-1/2 -translate-x-1/2 mono text-micro"
        style={{ color: "var(--color-sage)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.35, 1, 0.35] }}
        transition={{ delay: 1.4, duration: 2.5, repeat: Infinity }}
      >
        Scroll
      </motion.div>
    </section>
  );
}
