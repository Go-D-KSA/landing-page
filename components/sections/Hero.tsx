"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { AppleStoreMark, GooglePlayMark } from "@/components/ui/StoreBrandMark";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), { ssr: false });

export function StoreButton({ store, href = "#download", dark = false }: { store: "apple" | "google"; href?: string; dark?: boolean }) {
  const { t } = useLanguage();
  const apple = store === "apple";
  return (
    <motion.a
      className={`store ${dark ? "store-dark" : ""}`}
      href={href}
      aria-label={apple ? "Download on the App Store" : "Get it on Google Play"}
      whileHover={{ y: -3, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
    >
      {apple ? <AppleStoreMark /> : <GooglePlayMark />}
      <span><small>{t(apple ? "store.applePrefix" : "store.googlePrefix")}</small><strong>{t(apple ? "store.apple" : "store.google")}</strong></span>
    </motion.a>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [canRender3D, setCanRender3D] = useState(false);
  const words = t("hero.tagline").split(/\s+/);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    setCanRender3D(Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl")));
  }, []);

  return (
    <section className="hero" id="top">
      {canRender3D && <div className="hero-canvas" aria-hidden="true"><HeroScene /></div>}
      <div className="hero-content">
        <motion.span className="kicker" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}><i />{t("hero.kicker")}</motion.span>
        <motion.h1 key={t("hero.tagline")} initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.085, delayChildren: 0.25 } } }}>
          {words.map((word, index) => (
            <motion.span className="word" key={`${word}-${index}`} variants={{ hidden: { opacity: 0, y: reduceMotion ? 0 : 50, rotateX: reduceMotion ? 0 : -70 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } } }}>{word}</motion.span>
          ))}
        </motion.h1>
        <motion.p className="hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>{t("hero.copy")}</motion.p>
        <motion.div className="store-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95 }}>
          <StoreButton store="apple" /><StoreButton store="google" />
        </motion.div>
      </div>
      <motion.div className="hero-phone" aria-hidden="true" initial={{ y: 120, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.9, duration: 1, ease: [0.16, 1, 0.3, 1] }}>
        <div className="phone-screen"><i className="island"/><div className="map"/><i className="route"/><div className="ride-panel"><small>{t("hero.offer")}</small><strong>{t("hero.currency")} 28</strong><div className="driver-mini"><i>AM</i>Ahmed · 4.9 ★</div><span className="phone-cta">{t("hero.choose")}</span></div></div>
      </motion.div>
      <a className="scroll-cue" href="#how" aria-label={t("accessibility.scroll")}><ChevronDown /></a>
    </section>
  );
}
