"use client";

import { useEffect, useState } from 'react';
import FloatingBlobs from './Blobs';

export default function Projects() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <section id="projects" className={`projects-section ${animate ? 'animate' : ''}`}>
<FloatingBlobs />
        <h2 className="projects-title">Projects</h2>

        <div className="projects-cards">
          {[
            {
              title: 'Portfolio Website',
              desc: 'Sleek and modern personal website built using React and Next.js with custom animations and responsive design.',
              link: 'https://github.com/yourusername/portfolio',
            },
            {
              title: 'Task Manager App',
              desc: 'Fully featured productivity tool with drag & drop, notifications, and task tracking. Built with React and Firebase.',
              link: 'https://github.com/yourusername/task-manager',
            },
            {
              title: 'Weather Dashboard',
              desc: 'Dynamic dashboard fetching live weather data with animated backgrounds and location-based UI.',
              link: 'https://github.com/yourusername/weather-dashboard',
            },
          ].map((project, index) => (
            <div key={index} className="project-card">
              <div className="glow-border" />
              <div className="shine" />
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Code
              </a>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .projects-section {
          height: 100vh;
          background:-transparent;
          color: #e0e0ff;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          position: relative; /* important */
        }

        .projects-title {
          font-size: 3.5rem;
          font-weight: 900;
          margin-bottom: 3rem;
          letter-spacing: 1.5px;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
          opacity: 0;
          transform: translateY(-20px);
          transition: all 0.6s ease-out;
        }

        .animate .projects-title {
          opacity: 1;
          transform: translateY(0);
        }

        .projects-cards {
          display: flex;
          gap: 2.5rem;
          flex-wrap: wrap;
          justify-content: center;
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s ease;
        }

        .animate .projects-cards {
          opacity: 1;
          transform: translateY(0);
        }

        .project-card {
          position: relative;
          background: linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03));
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(18px);
          border-radius: 1.5rem;
          padding: 2.5rem;
          width: 320px;
          max-width: 90vw;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
          color: #f0e8ff;
          text-align: left;
          transition: transform 0.3s ease, box-shadow 0.4s ease;
          overflow: hidden;
          cursor: pointer;
        }

        .project-card:hover {
          transform: rotateX(3deg) rotateY(-3deg) scale(1.03);
          border: solid 1px white;
          box-shadow: 0 30px 60px rgba(200, 100, 255, 0.5);
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 100%);
          transform: skewX(-20deg);
          transition: none;
          pointer-events: none;
        }

        .project-card:hover::before {
          animation: shine 1.2s ease forwards;
        }

        @keyframes shine {
          from { left: -75%; }
          to { left: 125%; }
        }

        .glow-border {
          position: absolute;
          top: -2px;
          left: -2px;
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          background: radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent 70%);
          z-index: -1;
          border-radius: 1.75rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .glow-border {
          opacity: 1;
          filter: blur(5px);
        }

        .project-card h3 {
          font-size: 1.6rem;
          font-weight: 800;
          margin-bottom: 0.75rem;
          color: #ffffff;
        }

        .project-card p {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.25rem;
          opacity: 0.9;
          color: #e1d8f7;
        }

        .project-link {
          font-weight: 600;
          font-size: 0.95rem;
          color: #fa71cd;
          text-decoration: none;
          border-bottom: 2px solid transparent;
          transition: border-color 0.3s ease, color 0.3s ease;
        }

        .project-link:hover {
          border-color: #fa71cd;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .projects-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 500px) {
          .project-card {
            padding: 1.75rem;
          }

          .project-card h3 {
            font-size: 1.3rem;
          }

          .project-card p {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </>
  );
}
