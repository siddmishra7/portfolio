'use client';

import { useEffect, useState } from 'react';
import FloatingBlobs from './Blobs';

const logos: Record<string, string> = {
  JavaScript: '/javascript.png',
  'React.js': '/react.png',
  'Next.js': '/nextjs.png',
  TypeScript: '/typescript.png',
  'Tailwind CSS': '/tailwind.svg',
  'Node.js': '/node.png',
};

export default function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const coreSkills = [
    { name: 'JavaScript', color: '#F0DB4F' },
    { name: 'React.js', color: '#61DAFB' },
    { name: 'Next.js', color: '#FFFFFF' },
  ];

  const learningSkills = [
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Tailwind CSS', color: '#38BDF8' },
    { name: 'Node.js', color: '#68A063' },
  ];

  return (
    <>
      <section id="skills" className={`skills-section ${animate ? 'animate' : ''}`}>
        <FloatingBlobs />
        <h2 className="skills-title">Skills</h2>

        {[{ title: 'Core Skills', items: coreSkills }, { title: 'Currently Learning', items: learningSkills }].map((group) => (
          <div key={group.title} className="skills-category">
            <h3 className="category-title">{group.title}</h3>
            <div className="skills-cards">
              {group.items.map((skill) => (
                <div key={skill.name} className="skill-card" style={{ borderColor: skill.color }}>
                  <img src={logos[skill.name]} alt={skill.name} className="skill-logo" />
                  <p>{skill.name}</p>
                  <span className="color-bubble" style={{ background: skill.color }} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <style>{`
        .skills-section {
          min-height: 100vh;
          background: transparent;
          color: #f0e8ff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 1.25rem;
          text-align: center;
          position: relative;
        }

        .skills-title {
          font-size: clamp(2.2rem, 6vw, 3.5rem);
          font-weight: 900;
          margin-bottom: 2rem;
          text-shadow: 0 0 15px rgba(255,255,255,0.2);
          opacity: 0;
          transform: translateY(-20px);
          transition: all 0.6s ease-out;
        }

        .animate .skills-title {
          opacity: 1;
          transform: translateY(0);
        }

        .skills-category {
          margin-top: 2.5rem;
          width: 100%;
          max-width: 1000px;
        }

        .category-title {
          font-size: clamp(1.4rem, 4.5vw, 2rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #00f3ff;
        }

        .skills-cards {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1.5rem;
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s ease;
        }

        .animate .skills-cards {
          opacity: 1;
          transform: translateY(0);
        }

        .skill-card {
          position: relative;
          width: clamp(140px, 42vw, 240px);
          height: clamp(100px, 24vw, 140px);
          border: 3px solid;
          border-radius: 1.5rem;
          background: linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          backdrop-filter: blur(14px);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          font-weight: 700;
          font-size: clamp(0.9rem, 2.5vw, 1.2rem);
          color: #ffffff;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(255,255,255,0.1);
        }

        .skill-card:hover {
          transform: rotate(1deg) scale(1.07);
          box-shadow: 0 20px 45px rgba(255, 255, 255, 0.2);
        }

        .skill-logo {
          width: clamp(32px, 6vw, 44px);
          height: clamp(32px, 6vw, 44px);
          margin-bottom: 0.75rem;
          filter: drop-shadow(0 0 6px rgba(255,255,255,0.4));
        }

        .color-bubble {
          position: absolute;
          width: 300%;
          height: 300%;
          top: -80%;
          left: -80%;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.05;
          z-index: 0;
          transition: opacity 0.3s ease;
        }

        .skill-card:hover .color-bubble {
          opacity: 0.15;
        }

        @media (max-width: 480px) {
          .skills-section {
            padding: 5rem 1rem;
          }

           .skills-title {
          
          margin-bottom: 0rem;
          
        }

          .skills-cards {
            gap: 1rem;
          }

          .skill-card {
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>
    </>
  );
}
