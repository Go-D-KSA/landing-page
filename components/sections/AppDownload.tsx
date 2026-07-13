"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { StoreButton } from "./Hero";

export default function AppDownload() {
  const { t } = useLanguage();
  const section = useRef<HTMLElement>(null);
  useEffect(() => {
    let context: { revert: () => void } | undefined;
    void (async () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      context = gsap.context(() => gsap.from(".download-phone", { scrollTrigger: { trigger: section.current, start: "top 70%" }, y: -130, opacity: 0, duration: 1.1, ease: "bounce.out" }), section);
    })();
    return () => context?.revert();
  }, []);
  return <section className="section download" id="download" ref={section}><div className="container-shell download-layout"><div className="download-copy"><span className="tag">{t("download.eyebrow")}</span><h2 className="title">{t("download.title")}</h2><p className="intro">{t("download.copy")}</p><div className="store-actions"><StoreButton store="apple" href="#download" dark/><StoreButton store="google" href="#download" dark/></div><div className="qr-wrap"><span className="qr" role="img" aria-label={t("accessibility.qr")}/><small>{t("download.scan")}</small></div></div><div className="phone-scene" aria-hidden="true"><div className="download-phone"><div className="download-screen"><i className="island"/><div className="download-map"/><div className="app-sheet"><h3>{t("download.where")}</h3><div className="destination">{t("download.destination")}</div><div className="fare-choice"><span>{t("download.fixed")}</span><span>{t("download.bid")}</span></div></div></div></div><span className="notice notice-one">{t("download.accepted")}</span><span className="notice notice-two">{t("download.confirmed")}</span></div></div></section>;
}
