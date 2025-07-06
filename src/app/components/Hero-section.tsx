'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import FloatingBlobs from './Blobs';


export default function Hero() {
    return (
        <section id="about" className="relative min-h-screen  bg-gradient-to-br bg-transparent flex items-center justify-center px-6 py-36">

             <FloatingBlobs />

            {/* Content */}
            <div className="relative z-10 max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-white text-center md:text-left"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
                        Hello, I&apos;m
                        <br />
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-nowrap">
                            <Typewriter
                                words={['Siddharth Mishra', 'a Web Developer', 'a Designer']}
                                loop={true}
                                cursor
                                cursorStyle="_"
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </h1>


                    <p className="mt-6 w-[630px] text-lg sm:text-xl text-gray-300">
                        I craft responsive websites and immersive digital experiences.<br />
                        Passionate about <span className="text-cyan-400 font-semibold">Computer Science</span> & innovation.
                        Always eager to learn new technologies and solve real-world problems.
                        I specialize in building fast, modern, and accessible web applications.<br />
                        Let’s create something <span className="text-pink-400 font-semibold">amazing</span> together.
                    </p>

                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        className="mt-8 inline-block px-8 py-3 bg-purple-600 hover:bg-pink-600 text-white rounded-lg font-semibold shadow-lg  transition duration-200"
                    >
                        Explore My Work
                    </motion.a>
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="md:w-1/2 flex justify-center"
                >
                    <Image
                        src="/coding.jpg"
                        alt="Siddharth Mishra"
                        width={320}
                        height={320}
                        className="rounded-full border-4 border-cyan-400 shadow-xl object-cover float-animation"
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

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
        </section>

    );


}
