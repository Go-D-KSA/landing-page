"use client";

import { motion } from "framer-motion";
import { BadgeDollarSign, CarFront, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const steps = [
  { number: "01", key: "step1", Icon: MapPin },
  { number: "02", key: "step2", Icon: BadgeDollarSign },
  { number: "03", key: "step3", Icon: CarFront },
] as const;

const reveal = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };

export default function HowItWorks() {
  const { t } = useLanguage();
  return (
    <section className="section how" id="how"><div className="container-shell">
      <motion.span className="tag" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>{t("howItWorks.eyebrow")}</motion.span>
      <motion.h2 className="title" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>{t("howItWorks.title")}</motion.h2>
      <motion.p className="intro" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>{t("howItWorks.intro")}</motion.p>
      <motion.div className="steps" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ visible: { transition: { staggerChildren: 0.11 } } }}>
        {steps.map(({ number, key, Icon }) => <motion.article className="step" variants={reveal} whileHover={{ y: -8, rotateX: 2 }} key={key}><span className="step-no">{number}</span><span className="step-icon"><Icon /></span><h3>{t(`howItWorks.${key}.title`)}</h3><p>{t(`howItWorks.${key}.copy`)}</p></motion.article>)}
      </motion.div>
    </div></section>
  );
}
