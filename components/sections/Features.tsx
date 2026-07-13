"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  BadgeCheck,
  CalendarRange,
  CircleAlert,
  CreditCard,
  MapPin,
  UserRoundCheck,
  type LucideIcon,
} from "lucide-react";
import { useRef, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const features: { key: string; Icon: LucideIcon }[] = [
  { key: "card1", Icon: BadgeCheck },
  { key: "card2", Icon: CalendarRange },
  { key: "card3", Icon: UserRoundCheck },
  { key: "card4", Icon: MapPin },
  { key: "card5", Icon: CreditCard },
  { key: "card6", Icon: CircleAlert },
];

function FeatureCard({ item, index, active, onActive }: {
  item: { key: string; Icon: LucideIcon };
  index: number;
  active: boolean;
  onActive: (index: number) => void;
}) {
  const { t } = useLanguage();
  const card = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: card, offset: ["start 88%", "end 18%"] });
  const y = useTransform(scrollYProgress, [0, 0.2, 1], [56, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 1], [0.95, 1, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.2, 1], [6, 0, 0]);
  const style = reduceMotion ? undefined : { y, scale, rotateX };

  return (
    <div className="feature-chapter" ref={card}>
      <motion.article
        className="feature"
        style={style}
        data-active={active}
        onViewportEnter={() => onActive(index)}
        viewport={{ amount: 0.55 }}
      >
        <div className="feature-topline">
          <span className="feature-index">{String(index + 1).padStart(2, "0")} / 06</span>
          <span className="feature-status"><i /> Go D</span>
        </div>
        <span className="feature-icon"><item.Icon /></span>
        <div className="feature-copy">
          <h3>{t(`features.${item.key}.title`)}</h3>
          <p>{t(`features.${item.key}.copy`)}</p>
        </div>
        <div className="feature-route" aria-hidden="true"><i /><i /><i /></div>
      </motion.article>
    </div>
  );
}

function ProgressRail({ progress, active }: { progress: MotionValue<number>; active: number }) {
  return (
    <div className="feature-progress" aria-hidden="true">
      <div className="feature-progress-track"><motion.i style={{ scaleY: progress }} /></div>
      <div className="feature-progress-dots">
        {features.map((feature, index) => <span className={index <= active ? "active" : ""} key={feature.key} />)}
      </div>
    </div>
  );
}

export default function Features() {
  const { t } = useLanguage();
  const section = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: section, offset: ["start 12%", "end 88%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 28, restDelta: 0.001 });

  return (
    <section className="section features" id="features" ref={section}>
      <div className="container-shell feature-story">
        <div className="feature-intro">
          <span className="tag">{t("features.eyebrow")}</span>
          <h2 className="title">{t("features.title")}</h2>
          <p className="intro">{t("features.intro")}</p>
          <div className="feature-readout" aria-live="polite">
            <strong>{String(active + 1).padStart(2, "0")}</strong><span>— 06</span>
          </div>
          <ProgressRail progress={progress} active={active} />
        </div>
        <div className="feature-track">
          {features.map((item, index) => (
            <FeatureCard key={item.key} item={item} index={index} active={active === index} onActive={setActive} />
          ))}
        </div>
      </div>
    </section>
  );
}
