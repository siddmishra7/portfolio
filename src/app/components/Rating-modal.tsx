'use client';

import { useEffect, useState } from 'react';
import { CircleCheck, Star, X } from 'lucide-react';
import clsx from 'clsx';

export default function RatingModal() {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [comment, setComment] = useState('');
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const [thankYou, setThankYou] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('user-rating');
    if (stored) {
      setAlreadySubmitted(true);
      return;
    }

    const triggerModal = () => {
      setShow(true);
      cleanup();
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= docHeight - 10) {
        triggerModal();
      }
    };

    const timer = setTimeout(triggerModal, 10000);
    window.addEventListener('scroll', handleScroll);

    const cleanup = () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };

    return cleanup;
  }, []);

  const handleSubmit = () => {
    if (!rating) return;

    localStorage.setItem('user-rating', String(rating));
    localStorage.setItem('user-comment', comment);

    setAlreadySubmitted(true);
    setShow(false);
    setThankYou(true);

    setTimeout(() => setThankYou(false), 3000); // hide after 3s
  };

  if (!show || alreadySubmitted) return thankYou ? (
    <div className="fixed flex gap-2 bottom-6 right-6 z-50 bg-green-700  text-white px-4 py-2 rounded-lg shadow-lg">
      <CircleCheck/> Thanks for your feedback!
    </div>
  ) : null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-gray-700 rounded-lg shadow-xl w-full max-w-md p-6 relative text-white">
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 cursor-pointer text-gray-300 hover:text-red-500"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        <h2 className="text-xl font-semibold mb-4">Rate This Portfolio</h2>

        <div className="flex justify-center mb-4">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              onClick={() => setRating(n)}
              onMouseEnter={() => setHovered(n)}
              onMouseLeave={() => setHovered(0)}
              className="transition-transform hover:scale-110"
              type="button"
            >
              <Star
                size={30}
                className={(rating || hovered) >= n ? 'fill-yellow-400 text-yellow-400' : 'text-gray-500'}
              />
            </button>
          ))}
        </div>

        <textarea
          placeholder="Your feedback (optional)"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={3}
          className="w-full border border-gray-500 bg-gray-800 text-white rounded-md p-2 mb-4 focus:ring-cyan-400 focus:outline-none"
        />

        <button
          onClick={handleSubmit}
          disabled={!rating}
          className={clsx(
            'w-full py-2 rounded-md transition font-semibold',
            rating
              ? 'bg-cyan-600 hover:bg-cyan-700 text-white cursor-pointer'
              : 'bg-gray-400 text-gray-700 cursor-not-allowed'
          )}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
