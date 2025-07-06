"use client";

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };


    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsSubmitting(true); // Start loading

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const json = await res.json();

            if (res.ok) {
                setNotification({
                    message: `Message sent successfully. Thanks for contacting ${formData.name}`,
                    type: 'success',
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setNotification({ message: json.message || 'Something went wrong.', type: 'error' });
            }
        } catch {
            setNotification({ message: 'Network error. Please try again later.', type: 'error' });
        } finally {
            setIsSubmitting(false); // Stop loading
        }
    }


    // Auto-hide notification after 4 seconds
    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => setNotification(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [notification]);



    return (
        <section
            id="contact"
            className="relative h-screen  bg-transparent text-white py-20 px-6 md:px-12"
        >

            <FloatingBlobs />

            {/* Notification Banner */}
            {notification && (
                <div
                    className={`fixed flex gap-2 top-24 left-1/2 -translate-x-1/2 px-6 py-3 rounded shadow-lg text-white font-semibold z-50
            ${notification.type === "success" ? "bg-green-600" : "bg-red-600"}
          `}
                    role="alert"
                >
                    {notification.type === "success" ? <CircleCheck /> : <BanIcon />}  {notification.message}
                </div>
            )}


            <h2 className="text-4xl font-extrabold text-center mb-10 drop-shadow-lg">
                Get In Touch
            </h2>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="flex flex-col justify-center space-y-8">
                    <p className="text-lg max-w-md mx-auto md:mx-0">
                        Whether you want to say hello, ask a question, or collaborate, I’d love to hear from you!
                    </p>

                    <div className="space-y-4 text-center md:text-left">
                        <div>
                            <strong>Phone:</strong>{" "}
                            <Link href="tel:+1234567890" className="text-cyan-300 hover:underline">
                                +91 98993 21545
                            </Link>
                        </div>
                        <div>
                            <strong>Email:</strong>{" "}
                            <Link
                                href="mailto:your.email@example.com"
                                className="text-cyan-300 hover:underline"
                            >
                                siddmishralearning@gmail.com
                            </Link>
                        </div>

                        <div className="flex items-center mt-8 gap-4">
                            <span className="">Connect with me on Social Media:</span>


                            <div className="flex justify-center md:justify-end space-x-6 text-white ">
                                <Link
                                    href="https://github.com/siddmishra7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                                    title="GitHub profile"
                                >
                                    <Image src="/gitHub.png" alt="GitHub profile" width={50} height={50} className="bg-white rounded-full p-1" />
                                </Link>
                                <Link

                                    href="/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="X (Twitter)"
                                    className="transition-transform duration-300 ease-in-out hover:scale-110 "
                                    title="X Profile"
                                >
                                    <Image src="/xlogobg.png" alt="X profile" width={50} height={50} className="bg-white rounded-full p-2" />
                                </Link>

                                <Link

                                    href="/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                                    title="LinkedIn Profile"
                                >
                                    <Image src="/linkedinlogo.png" alt="LinkedIn profile" width={50} height={50} className="bg-white rounded-full " />

                                </Link>

                            </div>
                        </div>
                        {/* Footer/Credit */}
                        <div className="col-span-2 mt-12 text-center">
                            <p className="text-white text-md flex justify-center items-center gap-2">
                                Crafted with <Heart className="fill-red-500 animate-pulse ease-in-out duration-300" size={18} /> by <span className="font-semibold text-yellow-200">Siddharth Mishra</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-transparent border-white border-1 mt-5 w-[600px] h-fit bg-opacity-10 backdrop-blur-md rounded-2xl p-8 shadow-lg max-w-lg mx-auto"
                >
                    <div className="mb-2">
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

                    <div className="mb-6">
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
                        className="w-full py-3 bg-purple-500 hover:bg-purple-700 rounded-lg font-semibold text-white transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="animate-spin h-5 w-5" />
                                Sending...
                            </>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </form>

            </div>

            <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </section>
    );
}
