"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Only initialize smooth wheel scrolling on desktop pointer devices
    // On mobile touchscreens, native touch scrolling ensures zero gesture interference or lockup
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
