'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import FloatingBlobs from './Blobs';

export default function Hero() {
    return (
        <section
            id="about"
            className="relative min-h-screen bg-transparent flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-24 lg:ml-34"
        >
            <FloatingBlobs />

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-12">
                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-white text-center lg:text-left w-full lg:w-1/2"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                        Hello, I&apos;m
                        <br />
                        <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent whitespace-nowrap">
                            <Typewriter
                                words={['Siddharth Mishra', 'a Web Developer', 'a Designer']}
                                loop
                                cursor
                                cursorStyle="_"
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </h1>

                    <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                        I craft responsive websites and immersive digital experiences.
                        <br />
                        Passionate about <span className="text-cyan-400 font-semibold">Computer Science</span> & innovation.
                        Always eager to learn new technologies and solve real-world problems.
                        <br />
                        I specialize in building fast, modern, and accessible web applications.
                        <br />
                        Let’s create something <span className="text-pink-400 font-semibold">amazing</span> together.
                    </p>

                    <motion.a
                        href="/"
                        whileHover={{ scale: 1.05 }}
                        className="mt-8 inline-block px-5 py-2.5 bg-purple-600 hover:bg-pink-600 text-white rounded-lg font-semibold shadow-lg transition duration-200"
                    >
                        Download Resume
                    </motion.a>
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="w-full lg:w-1/2 flex justify-center"
                >
                    <Image
                        src="/coding.jpg"
                        alt="Siddharth Mishra"
                        width={300}
                        height={300}
                        className="rounded-full border-4 border-cyan-400 shadow-xl object-cover float-animation w-[220px] sm:w-[180px] md:w-[240px] lg:w-[300px] h-auto mt-6 md:mt-0"
                    />
                </motion.div>
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
                .float-animation {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}

