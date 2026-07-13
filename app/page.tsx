import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CarLoader from "@/components/sections/CarLoader";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";
import DriverRecruitment from "@/components/sections/DriverRecruitment";
import AppDownload from "@/components/sections/AppDownload";
import SafetyTrust from "@/components/sections/SafetyTrust";

export default function HomePage() {
  return <><CarLoader/><Navbar/><main id="main"><Hero/><HowItWorks/><Features/><Stats/><DriverRecruitment/><AppDownload/><SafetyTrust/></main><Footer/></>;
}
