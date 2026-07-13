"use client";

import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Logo } from "./Navbar";

function XIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-6.3L6.6 22H3.5l7.1-8.2L3 2h6.3l4.3 5.7L18.9 2Z" /></svg>;
}

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer>
      <div className="container-shell">
        <div className="footer-grid">
          <div className="footer-about"><Logo /><p>{t("footer.about")}</p></div>
          <div className="footer-col">
            <strong>{t("footer.company")}</strong>
            <Link href="/privacy">{t("footer.privacy")}</Link>
            <Link href="/terms">{t("footer.terms")}</Link>
            <a href="mailto:hello@god.sa">{t("footer.contact")}</a>
          </div>
          <div className="footer-col">
            <strong>{t("footer.follow")}</strong>
            <div className="socials">
              <a href="#" aria-label="Instagram"><Instagram /></a>
              <a href="#" aria-label="X"><XIcon /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Go D. {t("footer.rights")}</span>
          <span>{t("footer.location")}</span>
        </div>
      </div>
    </footer>
  );
}
