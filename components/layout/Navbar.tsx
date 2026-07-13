"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function Logo() {
  return (
    <Link className="logo" href="/#top" aria-label="Go D home">
      <span className="logo-mark" aria-hidden="true" />
      Go D
    </Link>
  );
}

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();
  const cursorX = useMotionValue(-50);
  const cursorY = useMotionValue(-50);
  const glowX = useSpring(cursorX, { stiffness: 1000, damping: 65 });
  const glowY = useSpring(cursorY, { stiffness: 1000, damping: 65 });

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > window.innerHeight * 0.55);
    const pointer = (event: PointerEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("pointermove", pointer, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("pointermove", pointer);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <a className="skip" href="#main">{t("accessibility.skip")}</a>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner container-shell">
          <Logo />
          <nav className="nav-links" aria-label={t("accessibility.primaryNav")}>
            <a href="#how">{t("nav.how")}</a>
            <a href="#features">{t("nav.features")}</a>
            <a href="#drivers">{t("nav.drive")}</a>
            <a href="#safety">{t("nav.safety")}</a>
          </nav>
          <button className="language" type="button" onClick={toggleLanguage} aria-label={t("accessibility.language")}>
            <span className={language === "en" ? "active" : ""}>EN</span>
            <span className={language === "ar" ? "active" : ""}>عر</span>
          </button>
        </div>
      </header>
      <div className="page-progress" aria-hidden="true"><motion.i style={{ scaleY: progress }} /></div>
      <motion.i className="cursor" aria-hidden="true" style={{ x: cursorX, y: cursorY }} />
      <motion.i className="cursor-glow" aria-hidden="true" style={{ x: glowX, y: glowY }} />
    </>
  );
}
