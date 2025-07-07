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
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white flex flex-col items-center justify-center z-50 lg:hidden animate-fadeIn">
        {/* Floating Animated Blobs */}
        <div className="absolute top-[-5rem] left-[-5rem] w-[300px] h-[300px] bg-purple-500 opacity-30 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite] pointer-events-none z-0" />
        <div className="absolute bottom-[-5rem] right-[-5rem] w-[300px] h-[300px] bg-pink-500 opacity-30 rounded-full blur-2xl animate-[float_7s_ease-in-out_infinite] pointer-events-none z-0" />

        {/* Glass Panel with Glow and Border */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 m-1 shadow-2xl rounded-2xl px-8 py-10 text-center max-w-sm z-10 animate-[slideUp_0.8s_ease-out_forwards]">
          <div className="text-4xl mb-4 animate-pulse">🚧</div>
          <h1 className="text-2xl font-bold mb-3">Under Development</h1>
          <p className="text-base opacity-90">
            This website is currently being developed for mobile devices.<br />
            Please visit on a desktop or larger screen.
          </p>
          <button className="mt-6 px-6 py-2 rounded-full bg-white/20 hover:bg-white/30 transition duration-300 text-white font-medium">
            Back to Desktop
          </button>
        </div>
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
