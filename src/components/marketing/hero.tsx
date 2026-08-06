"use client";

import Image from "next/image";
import { SearchPanel } from "./search-panel";
import Balancer from "react-wrap-balancer";
import { motion } from "motion/react";
import { cn } from "@/utils";

const Hero = () => {
  return (
    <main className="bg-page px-4 py-6 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-[1200px] overflow-hidden">
        <HeroSection />
      </div>
    </main>
  );
};

export default Hero;

function HeroSection() {
  return (
    <section className="relative grid grid-cols-1 gap-10 px-6 pb-10 sm:px-10 lg:grid-cols-[1fr_minmax(340px,44%)] lg:gap-0 lg:px-14 lg:pb-10">
      {/* LEFT */}
      <div className="relative z-10 flex flex-col pt-4 lg:pt-8">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          <span className="h-px w-8 bg-primary" />
          Trusted pandits & astrologers
        </p>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-heading mt-8">
          <Balancer>
            {"Book a pandit".split(" ").map((word, index) => (
              <motion.span
                initial={{ filter: "blur(10px)", opacity: 0, y: 10 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="inline-block"
                key={index}
              >
                {word}&nbsp;
              </motion.span>
            ))}
            <br />
            {"- For your puja & sacred rituals"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  initial={{ filter: "blur(10px)", opacity: 0, y: 10 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (4 + index) * 0.05 }}
                  className={cn(
                    "inline-block",
                    word === "Performance" &&
                      "bg-linear-to-r from-primary via-blue-500 to-primary bg-size-[200%_100%] animate-[shimmer_3s_ease-in-out_infinite] text-transparent bg-clip-text",
                  )}
                  key={index}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
          </Balancer>
        </h1>

        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-foreground/70">
          Connect with experienced, verified pandits and astrologers for every
          occasion — from Griha Pravesh and weddings to havan, kundli matching,
          and personal consultations.
        </p>

        <div className="mt-auto pt-12 lg:pt-6">
          <SearchPanel />
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative min-h-[440px] lg:min-h-[600px]">
        <div className="absolute -top-6 right-0 h-[64%] w-[118%] overflow-hidden rounded-bl-[6rem] bg-gradient-to-br from-background via-primary/40 to-bafrom-background lg:-right-20 lg:w-[135%]">
          <svg
            className="absolute right-0 top-0 h-full w-full text-secondary-foreground/20"
            viewBox="0 0 300 300"
            fill="none"
          >
            <circle cx="180" cy="120" r="120" stroke="currentColor" />

            <circle
              cx="180"
              cy="120"
              r="90"
              stroke="currentColor"
              strokeDasharray="4 6"
            />
          </svg>
        </div>

        <div
          className="relative z-0 mx-auto h-full w-full max-w-md"
          style={{
            WebkitMaskImage:
              "radial-gradient(120% 100% at 50% 60%,#000 62%,transparent 92%)",
            maskImage:
              "radial-gradient(120% 100% at 50% 60%,#000 62%,transparent 92%)",
          }}
        >
          <Image
            src="/images/pandit-removebg-preview.png"
            alt="Pandit"
            fill
            // priority
            preload
            className="object-contain object-bottom"
            sizes="40vw"
          />
        </div>
      </div>
    </section>
  );
}
