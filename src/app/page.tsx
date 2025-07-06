import Contact from "./components/Contact-section";
import EducationHero from "./components/Education-section";
import Hero from "./components/Hero-section";
import Projects from "./components/Project-section";
import RatingModal from "./components/Rating-modal";
import Skills from "./components/Skills-section";

export default function Home() {
  return (
    <div className="portfolio-wrapper relative overflow-hidden">

      {/* 🚫 Mobile Under Development Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white flex flex-col items-center justify-center z-50 lg:hidden">
        <div className="absolute top-[-5rem] left-[-5rem] w-[300px] h-[300px] bg-purple-500 opacity-30 rounded-full blur-3xl animate-float animation-delay-2000 pointer-events-none z-0" />
        <div className="absolute bottom-[-5rem] right-[-5rem] w-[300px] h-[300px] bg-pink-500 opacity-30 rounded-full blur-2xl animate-float animation-delay-4000 pointer-events-none z-0" />

        <h1 className="text-3xl font-bold mb-4 z-10">🚧 Under Development</h1>
        <p className="text-lg opacity-80 z-10 text-center px-6">
          This website is currently being developed for mobile devices.<br />
          Please visit on a desktop or larger screen.
        </p>
      </div>

      {/* 🌐 Main Site – Hidden on Mobile */}
      <div className="hidden lg:block relative z-10">
        <Hero />
        <EducationHero />
        <Skills />
        <Projects />
        <Contact />
      </div>
            {/* Rating modal always rendered */}
      <RatingModal />
    </div>
  );
}
