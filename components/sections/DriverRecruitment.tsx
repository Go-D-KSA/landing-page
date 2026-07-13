"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { RideCar } from "@/components/ui/RideCar";

export default function DriverRecruitment() {
  const { t } = useLanguage();
  const section = useRef<HTMLElement>(null);
  useEffect(() => {
    let context: { revert: () => void } | undefined;
    void (async () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      context = gsap.context(() => gsap.from(".earnings", { scrollTrigger: { trigger: section.current, start: "top 65%" }, rotateY: -35, x: 100, opacity: 0, duration: 1, ease: "power3.out" }), section);
    })();
    return () => context?.revert();
  }, []);

  return <section className="section drivers" id="drivers" ref={section}><div className="container-shell driver-layout"><div className="driver-copy"><span className="tag">{t("driver.eyebrow")}</span><h2 className="title">{t("driver.title")}</h2><p>{t("driver.copy")}</p><div className="pills"><span className="pill">{t("driver.commission")}</span><span className="pill">{t("driver.payouts")}</span><span className="pill">{t("driver.welfare")}</span></div><a className="primary" href="mailto:drivers@god.sa?subject=Go%20D%20driver%20registration"><span>{t("driver.cta")}</span><ArrowRight /></a></div><div className="earnings-scene"><div className="earnings"><div className="earnings-top"><span>{t("driver.week")}</span><span>Go D Driver</span></div><strong>{t("driver.currency")} 2,840</strong><small>{t("driver.estimate")}</small><div className="bars"><i className="h-[42%]"/><i className="h-[67%]"/><i className="h-[55%]"/><i className="h-[86%]"/><i className="h-[72%]"/><i className="h-full"/></div></div><div className="road" aria-hidden="true"><span className="road-car"><RideCar /></span></div></div></div></section>;
}
