"use client";

import { BadgeCheck, CreditCard, ShieldCheck, type LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const badges: { key: string; Icon: LucideIcon }[] = [{ key: "tga", Icon: ShieldCheck }, { key: "nafath", Icon: BadgeCheck }, { key: "payments", Icon: CreditCard }];

export default function SafetyTrust() {
  const { t } = useLanguage();
  const section = useRef<HTMLElement>(null);
  useEffect(() => {
    let context: { revert: () => void } | undefined;
    void (async () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      context = gsap.context(() => gsap.from(".trust-badge", { scrollTrigger: { trigger: section.current, start: "top 70%" }, rotate: -90, scale: 0.65, opacity: 0, stagger: 0.12, duration: 0.8, ease: "back.out(1.4)" }), section);
    })();
    return () => context?.revert();
  }, []);
  return <section className="section safety" id="safety" ref={section}><div className="container-shell"><span className="tag">{t("safety.eyebrow")}</span><h2 className="title">{t("safety.title")}</h2><p className="intro">{t("safety.copy")}</p><div className="badges">{badges.map(({ key, Icon }) => <div className="trust-badge" key={key}><div className="badge-core"><Icon/><strong>{t(`safety.${key}.title`)}</strong><small>{t(`safety.${key}.copy`)}</small></div></div>)}</div></div></section>;
}
