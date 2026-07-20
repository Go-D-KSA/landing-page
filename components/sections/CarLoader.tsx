"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { RideCar } from "@/components/ui/RideCar";

export default function CarLoader() {
  const [progress, setProgress] = useState(8);
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.classList.add("loading");
    const interval = window.setInterval(() => setProgress((value) => Math.min(value + Math.random() * 17, 92)), 120);
    const finish = () => {
      window.clearInterval(interval);
      setProgress(100);
      window.setTimeout(() => {
        setVisible(false);
        document.body.classList.remove("loading");
      }, reduceMotion ? 0 : 280);
    };
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    const fallback = window.setTimeout(finish, 1800);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(fallback);
      window.removeEventListener("load", finish);
      document.body.classList.remove("loading");
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div className="preloader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} aria-live="polite">
          <div className="loader">
            <div className="loader-road" aria-hidden="true">
              <i className="trail" />
              <span className="loader-car"><RideCar priority /></span>
            </div>
            <div className="loader-label"><span>Loading your ride...</span><span lang="ar" dir="rtl">جاري التحميل...</span></div>
            <div className="loader-progress"><motion.i animate={{ width: `${progress}%` }} /></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
