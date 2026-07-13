import Link from "next/link";

export const metadata = { title: "Terms of Service | Go D" };

export default function TermsPage() {
  return <main className="legal-page"><div className="legal-card"><Link href="/">← Back to home</Link><span className="tag">Legal</span><h1>Terms of Service</h1><p>Last updated: July 2026</p><p>This page is reserved for Go D&apos;s reviewed terms of service before launch.</p></div></main>;
}
