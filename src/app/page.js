"use client";
import Navbar from "@/src/components/navbar/Navbar";
import "./page.css";
import Hero from "@/src/components/hero/Hero";
import BrandingVideo from "@/src/components/brandingVideo/BrandingVideo";
import { motion, useAnimation } from "framer-motion";
import HowItWorks from "@/src/components/howItWorks/HowItWorks";
import WhoWeInvest from "@/src/components/whoWeInvest/WhoWeInvest";
import Testimonials from "@/src/components/testimonials/Testimonials";
import WhatWeDo from "../components/whatWeDo/WhatWeDo";
import Footer from "../components/footer/Footer";
import OurDiff from "../components/our-difference/OurDiff";
export default function Home() {
  const controls = useAnimation();
  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />
      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--secondary-color)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{ amount: 0.4 }}
      >
        <OurDiff />
      </motion.div>
      <HowItWorks />
      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--primary-color)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{ amount: 0.4 }}
      >
        <WhoWeInvest />
      </motion.div>
      <Testimonials />
      <Footer />
    </motion.div>
  );
}
