import FloatingBlobs from "./Blobs";

export default function EducationHero() {
  return (
    <>
      <section id="education" className="education-hero">
        <FloatingBlobs />
        <h2 className="education-title">Education</h2>

        <div className="education-cards">
          <div className="education-card pink">
            <h3>Bachelor of Technology in Robotics and Artificial Intelligence</h3>
            <p className="school">MDU University, 2024 - 2028</p>
            <p>
             Pursuing Bachelor of Technology in Robotics and AI, focusing on intelligent systems, automation, and machine learning.
            </p>
          </div>

          <div className="education-card indigo">
            <h3>Secondary School Certificate</h3>
            <p className="school">GBSSS, New Delhi, 2023 - 2024</p>
            <p>
              Pursued Senior Secondary Education with a focus on Physics, Chemistry, and Mathematics (PCM) under the CBSE curriculum. This phase deepened my analytical thinking and problem-solving skills.
            </p>
          </div>

          <div className="education-card purple">
            <h3>High School Certificate</h3>
            <p className="school">GBSSS, New Delhi, 2021 - 2022</p>
            <p>
              Completed my Secondary Education under the Central Board of Secondary Education (CBSE), where I built a strong academic foundation across core subjects.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .education-hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 3rem 2rem;
          background: transparent;
          color: white;
          text-align: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          position: relative;
        }

        .education-title {
          font-size: 3.5rem;
          font-weight: 900;
          margin-bottom: 4rem;
          text-shadow: 0 0 15px rgba(255,255,255,0.5);
          letter-spacing: 1.5px;
        }

        .education-cards {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 2.5rem;
          max-width: 1200px;
          width: 100%;
          justify-content: center;
          align-items: stretch;
        }

        .education-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-radius: 2rem;
          padding: 2.5rem;
          flex: 1 1 360px;
          max-width: 400px;
          box-shadow: 0 15px 30px rgba(0,0,0,0.25);
          transition: box-shadow 0.4s ease, transform 0.3s ease;
          text-align: left;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          cursor: pointer;
        }

        .education-card:hover {
          transform: translateY(-10px);
          border: solid white 1px;
        }

        .education-card h3 {
          font-size: 1.75rem;
          font-weight: 800;
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }

        .education-card .school {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          opacity: 0.8;
          font-style: italic;
        }

        .education-card p {
          font-size: 1.05rem;
          line-height: 1.6;
          opacity: 0.9;
          flex-grow: 1;
        }

        /* Hover shadow colors */
        .education-card.pink:hover {
          box-shadow: 0 0 30px 8px #ec4899;
        }
        .education-card.purple:hover {
          box-shadow: 0 0 30px 8px #8b5cf6;
        }
        .education-card.indigo:hover {
          box-shadow: 0 0 30px 8px #6366f1;
        }

        /* Responsive */

        @media (max-width: 1024px) {
          .education-cards {
            flex-wrap: wrap;
            justify-content: center;
          }
          .education-card {
            max-width: 45%;
            flex: 1 1 45%;
            margin-bottom: 2rem;
          }
        }

        @media (max-width: 600px) {
          .education-cards {
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }
          .education-card {
            max-width: 90%;
            flex: none;
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
