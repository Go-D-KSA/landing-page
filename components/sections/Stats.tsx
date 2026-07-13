"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { useLanguage } from "@/hooks/useLanguage";

function Stat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, value } = useCountUp(target);
  return <motion.div className="stat" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><strong ref={ref as React.RefObject<HTMLElement>}>{target % 1 ? value.toFixed(1) : Math.round(value).toLocaleString()}{suffix}</strong><span>{label}</span></motion.div>;
}

export default function Stats() {
  const { t } = useLanguage();
  return <section className="stats"><div className="container-shell stats-grid"><Stat target={8} suffix="M+" label={t("stats.riders")} /><Stat target={263} suffix="K+" label={t("stats.drivers")} /><Stat target={32} suffix="M+" label={t("stats.mobility")} /><Stat target={4.9} suffix="★" label={t("stats.experience")} /></div></section>;
}
