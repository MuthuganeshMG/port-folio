import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      `Hi, I'm Muthugansh 👋`,
      "MERN Stack Developer",
      "Frontend Specialist",
      "Backend Developer",
      "Problem Solver",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen text-center text-white dark:text-black overflow-hidden"
    >
 {/* 🔥 Background gradient with animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-200 to-purple-400 animate-gradient-x opacity-90 infinite duration-3000"></div>

      {/* 🔥 Extra animated shapes */}
      <div className="absolute w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-rose-800 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000 bottom-10 right-1/2"></div>
      <div className="absolute w-96 h-96 bg-orange-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000 top-40 right-10"></div>
      <div className="absolute w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000 bottom-10 left-1/2"></div>
      {/* Overlay for readability */}
      <div className="absolute inset-0 dark:bg-black/30 bg-black/80"></div>

      {/* Content */}
      <div className="relative w-4/5 md:w-3/5">
        <h1 className="text-2xl ms:text-3xl md:text-6xl font-bold">
          {text}
          <Cursor />
        </h1>
        <p className="mt-4 text-xl text-gray-300 dark:text-gray-900">
          MERN Stack Developer | Building modern web apps 🚀
        </p>
        <div className="flex flex-col items-center md:flex-row mt-10 space-y-4 md:space-y-0 md:space-x-6 justify-center">
          <a
            href="https://github.com/MuthuganeshMG"
            className="px-10 py-3 font-semibold rounded-2xl shadow-lg
            bg-gradient-to-r from-cyan-500 via-neutral-200 to-blue-600 text-black 
            hover:scale-105 transition-transform duration-300"
            >
              View My Work
            </a>

          <a
            href="https://drive.google.com/file/d/1AO29IYSDy-XWxVJX8QWIEo3cvB5_QuNE/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3 font-semibold rounded-2xl shadow-lg
            bg-gradient-to-r from-blue-600 via-neutral-200 to-cyan-500 text-black 
            hover:scale-105 transition-transform duration-300"
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
}

