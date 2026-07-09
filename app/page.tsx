import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { Specialties } from "@/components/Specialties";
import { Team } from "@/components/Team";
import { Technology } from "@/components/Technology";
import { Testimonials } from "@/components/Testimonials";

/** Renders the public landing page for HE Performance Platform. */
export default function Home() {
  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specialties />
        <HowItWorks />
        <Technology />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
