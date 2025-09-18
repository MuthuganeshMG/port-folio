import React from "react";
import { Briefcase, GraduationCap, User, Brain } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center p-6 sm:p-10 bg-gray-950 text-white dark:bg-white dark:text-black"
    >
      {/* Header */}
      <div className="flex flex-col items-center mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          About Me
        </h2>
        <p className="max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed">
          I’m a passionate&nbsp;
          <span className="font-bold text-yellow-400 dark:text-red-600">
            MERN Stack Developer
          </span>&nbsp;
          skilled in building scalable, responsive web applications. With a
          strong focus on clean code and intuitive design, I enjoy turning ideas
          into seamless digital experiences while constantly learning and
          adapting to new technologies.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 w-full max-w-6xl">
        {/* Profile Image */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="assets/img.jpg"
              alt="about-img"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating Icons */}
          <div 
          className="absolute -top-4 -right-4
           bg-black dark:bg-white shadow-lg rounded-full 
           border-x-2 border-cyan-700
            p-2 md:p-3">
            <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
          </div>
          <div 
          className="absolute -bottom-4 -left-4 
           bg-black dark:bg-white shadow-lg rounded-full  
           border-x-2 border-red-700
            p-2 md:p-3">
            <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
          </div>
        </div>  

        {/* Info Section */}
        <div className="flex flex-col justify-center">
          {/* Name + Education */}
          <div className="flex flex-col items-start mb-8 space-y-3">
            <h2 className="flex items-center text-xl sm:text-2xl font-bold">
              <User className="h-6 w-6 mr-2 text-yellow-400 dark:text-red-600" />
              MuthuGanesh M
            </h2>
            <h4 className="flex items-center font-semibold text-sm sm:text-base">
              <GraduationCap className="h-6 w-6 mr-2 text-yellow-400 dark:text-red-600" />
              B.E Mechanical Engineering
            </h4>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-500 dark:bg-white rounded-lg p-4 border-y-2 border-gray-400 shadow-md">
              <h3 className="font-semibold">Role</h3>
              <p>
                <span className="font-bold text-yellow-400 dark:text-red-600">
                  MERN
                </span>{" "}
                Full Stack Developer
              </p>
            </div>
            <div className="bg-gray-500 dark:bg-white rounded-lg p-4 border-y-2 border-gray-400 shadow-md">
              <h3 className="font-semibold">College</h3>
              <p>
                <span className="font-bold text-yellow-400 dark:text-red-600">
                  King
                </span>{" "}
                College of Technology
              </p>
            </div>
            <div className="bg-gray-500 dark:bg-white rounded-lg p-4 border-y-2 border-gray-400 shadow-md">
              <h3 className="font-semibold">Personality</h3>
              <p>
                Detail-oriented and committed to writing clean, maintainable
                code.
              </p>
            </div>
            <div className="bg-gray-500 dark:bg-white rounded-lg p-4 border-y-2 border-gray-400 shadow-md">
              <h3 className="font-semibold">Interests</h3>
              <p>
                Learning updated tech stacks to become a fluent developer.
              </p>
            </div>
          </div>

          {/* Goal */}
          <div className="mt-8 p-4 rounded-lg border-y-2 border-gray-400 shadow-md">
            <div className="flex items-center space-x-3 mb-4">
              <Brain className="h-6 w-6 text-yellow-400 dark:text-red-600" />
              <h3 className="text-lg sm:text-xl font-bold">Goal</h3>
            </div>
            <p className="mb-4 text-sm sm:text-base">
              To craft intuitive and responsive web applications that improve
              everyday user experiences through thoughtful design and clean
              code.
            </p>
            <p className="text-sm sm:text-base">
              To grow into a full-stack developer by mastering backend
              technologies while staying rooted in UI/UX principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
