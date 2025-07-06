"use client";

export default function FloatingBlobs() {
  return (
    <>
      {/* Top Blob */}
      <div className="blob blob-top" />
      {/* Bottom Blob */}
      <div className="blob blob-bottom" />

      <style jsx>{`
        .blob {
          position: absolute;
          border-radius: 9999px;
          pointer-events: none;
          z-index: 1;
        }

        .blob-top {
          top: -5rem;
          left: -5rem;
          width: 18rem;
          height: 18rem;
          background-color: rgba(168, 85, 247, 0.3); /* purple */
          filter: blur(60px);
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }

        .blob-bottom {
          bottom: -5rem;
          right: -5rem;
          width: 20rem;
          height: 20rem;
          background-color: rgba(236, 72, 153, 0.25); /* pink */
          filter: blur(60px);
          animation: float 6s ease-in-out infinite;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </>
  );
}
