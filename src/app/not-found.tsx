"use client"


import Link from 'next/link';
import Head from 'next/head';
import FloatingBlobs from './components/Blobs';

export default function Custom404() {
  return (
    <>
      <div className="container">
        <FloatingBlobs />
        <div className="glitch" data-text="404">404</div>
        <p className="subtitle">This page vanished into the void.</p>
        <Link href="/" passHref>
          <button className="home-btn">Return Home</button>
        </Link>
      </div>

      <style jsx>{`
        .container {
          height: 100vh;
          background: linear-gradient(
    180deg,
    #13001c 0%,
    #1d0030 25%,
    #280043 50%,
    #3b0077 75%,
    #2e065c 100%
  );
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          overflow: hidden;
          position: relative;
        }

        .glitch {
          font-size: 10rem;
          font-weight: 800;
          letter-spacing: 2px;
          position: relative;
          color: #fff;
          animation: flicker 2s infinite;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          overflow: hidden;
          color: #f0f;
          z-index: -1;
        }

        .glitch::before {
          animation: glitchTop 2s infinite linear;
          color: #0ff;
        }

        .glitch::after {
          animation: glitchBottom 2s infinite linear;
          color: #f00;
        }

        .subtitle {
          font-size: 1.5rem;
          margin-top: 1rem;
          color: #aaa;
        }

        .home-btn {
          margin-top: 2rem;
          padding: 0.75rem 1.5rem;
          background: #0070f3;
          border: none;
          border-radius: 5px;
          color: white;
          font-size: 1rem;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .home-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(0, 112, 243, 0.4);
        }

        @keyframes flicker {
          0%,
          100% {
            opacity: 1;
          }
          45% {
            opacity: 0.8;
          }
          50% {
            opacity: 0.4;
          }
          55% {
            opacity: 0.8;
          }
        }

        @keyframes glitchTop {
          0% {
            clip: rect(0, 9999px, 0, 0);
          }
          10% {
            clip: rect(10px, 9999px, 80px, 0);
            transform: translate(-2px, -2px);
          }
          20% {
            clip: rect(85px, 9999px, 140px, 0);
            transform: translate(2px, -1px);
          }
          30% {
            clip: rect(20px, 9999px, 60px, 0);
            transform: translate(-1px, 2px);
          }
          100% {
            clip: rect(0, 9999px, 0, 0);
            transform: none;
          }
        }

        @keyframes glitchBottom {
          0% {
            clip: rect(0, 9999px, 0, 0);
          }
          10% {
            clip: rect(60px, 9999px, 90px, 0);
            transform: translate(2px, 1px);
          }
          25% {
            clip: rect(90px, 9999px, 120px, 0);
            transform: translate(-3px, 0px);
          }
          40% {
            clip: rect(10px, 9999px, 50px, 0);
            transform: translate(1px, -1px);
          }
          100% {
            clip: rect(0, 9999px, 0, 0);
            transform: none;
          }
        }
      `}</style>
    </>
  );
}
