import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ImpactStats } from "./components/ImpactStats";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { About } from "./components/About";
import { CaseStudy } from "./components/CaseStudy";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <ImpactStats />
      <FeaturedProjects />
      <About />
      <CaseStudy />
      <Footer />
    </div>
  );
}
