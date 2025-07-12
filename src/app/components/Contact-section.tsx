'use client';

import { BanIcon, CircleCheck, Heart, Loader2 } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import FloatingBlobs from "./Blobs";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const json = await res.json();

      if (res.ok) {
        setNotification({
          message: `Thanks for reaching out, ${formData.name}! Your message has been sent successfully.`,
          type: "success",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setNotification({
          message: json.message || "Something went wrong.",
          type: "error",
        });
      }
    } catch {
      setNotification({
        message: "Network error. Please try again later.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-transparent text-white pb-4 pt-20 px-6 md:px-12"
    >
      <FloatingBlobs />

     {/* Notification Banner */}
{notification && (
  <div
    className={`
      fixed top-24 left-1/2 -translate-x-1/2 
      max-w-[90%] sm:max-w-md w-full px-4 py-3 
      flex items-center gap-2 rounded-md shadow-lg 
      text-white text-sm sm:text-base font-medium z-50
      ${notification.type === "success" ? "bg-green-600" : "bg-red-600"}
      animate-slideIn
    `}
    role="alert"
  >
    {notification.type === "success" ? <CircleCheck /> : <BanIcon />}
    <span className="flex-1 break-words">{notification.message}</span>
  </div>
)}

      <h2 className="text-4xl font-extrabold text-center mb-10 drop-shadow-lg">
        Get In Touch
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <form
          onSubmit={handleSubmit}
          className="order-1 md:order-2 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-lg w-full"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-semibold">
              Name <span className="text-purple-400">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email <span className="text-purple-400">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-semibold">
              Message <span className="text-purple-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 placeholder-gray-400 text-black resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-purple-500 hover:bg-purple-700 rounded-lg font-semibold text-white transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin h-5 w-5" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        <div className="order-2 md:order-1 flex flex-col justify-center space-y-8 text-center md:text-left">
          <p className="text-lg max-w-md mx-auto md:mx-0">
            Whether you want to say hello, ask a question, or collaborate, I’d
            love to hear from you!
          </p>

          <div className="space-y-4">
            <div>
              <strong>Phone:</strong>{" "}
              <Link
                href="tel:9899321545"
                className="text-cyan-300 hover:underline"
              >
                +91 98993 21545
              </Link>
            </div>
            <div>
              <strong>Email:</strong>{" "}
              <Link
                href="mailto:siddmishralearning@gmail.com"
                className="text-cyan-300 hover:underline"
              >
                siddmishralearning@gmail.com
              </Link>
            </div>

            <div className="mt-8">
              <p className="mb-2">Connect with me on Social Media:</p>
              <div className="flex justify-center md:justify-start space-x-6">
                <Link
                  href="https://github.com/siddmishra7"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub profile"
                  className="transition-transform hover:scale-110"
                >
                  <Image
                    src="/gitHub.png"
                    alt="GitHub profile"
                    width={40}
                    height={40}
                    className="bg-white rounded-full p-1"
                  />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="X profile"
                  className="transition-transform hover:scale-110"
                >
                  <Image
                    src="/xlogobg.png"
                    alt="X profile"
                    width={40}
                    height={40}
                    className="bg-white rounded-full p-2"
                  />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn Profile"
                  className="transition-transform hover:scale-110"
                >
                  <Image
                    src="/linkedinlogo.png"
                    alt="LinkedIn profile"
                    width={40}
                    height={40}
                    className="bg-white rounded-full"
                  />
                </Link>
              </div>
            </div>

            <div className="pt-8 text-center md:text-left">
              <p className="text-md flex items-center justify-center md:justify-start gap-2">
                Crafted with{" "}
                <Heart className="fill-red-500 animate-pulse" size={18} /> by{" "}
                <span className="font-semibold text-yellow-200">
                  Siddharth Mishra
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
