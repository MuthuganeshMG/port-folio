import React from "react";

const Technical_Skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "React JS", level: 90 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Node JS", level: 85 },
  { name: "Express JS", level: 75 },
  { name: "MongoDB", level: 80 },
];

const Soft_Skills = [
  { name: "Creativity", level: 90 },
  { name: "Problem Solving", level: 80 },
  { name: "Teamwork", level: 85 },
  { name: "Communication", level: 75 },
  { name: "Adaptability", level: 90 },
  { name: "Time Management", level: 85 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-12 bg-black text-white dark:bg-white dark:text-black shadow"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 transition duration-300 hover:scale-105">
          My Skills
        </h2>
        <p className="flex max-w-3xl text-center items-center justify-center mx-auto mb-8 text-lg text-gray-300 dark:text-gray-800">
          I possess a diverse skill set that encompasses both technical and
          professional abilities, enabling me to excel in various aspects of
          software development.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <div
            className="flex flex-col items-center w-full 
             bg-gradient-to-r from-black via-blue-400 to-black
             animate-gradient-x
             p-3 rounded-xl 
             border-r border-l border-blue-500 shadow-md
             dark:bg-gradient-to-l dark:from-blue-400 dark:via-neutral-500 dark:to-blue-400
             dark:border-r-2 dark:border-cyan-400
             hover:shadow-cyan-500 transition-shadow duration-300"
          >
            <h3
              className="text-2xl font-semibold mb-6 text-center lg:text-left
            transition duration-300 hover:scale-105"
            >
              Technical Skills
            </h3>
            <div className="grid gap-5 sm:grid-cols-2 w-full">
              {Technical_Skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-black text-white dark:bg-white dark:text-black p-5 rounded-2xl border-y dark:border-gray-700 shadow-md hover:shadow-xl 
                  transition duration-300 hover:scale-105"
                >
                  <div className="flex justify-between mb-2 transition duration-300 hover:scale-105">
                    <span className="text-base font-medium">{skill.name}</span>
                    <span className="text-sm font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-indigo-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional (Soft) Skills */}
          <div
            className="flex flex-col items-center w-full 
   bg-gradient-to-r from-gray-900 via-lime-200 to-gray-900 animate-gradient-x
   p-3 rounded-xl 
   border-l border-r border-neutral-500 shadow-md
   dark:bg-gradient-to-l dark:from-neutral-500 dark:via-blue-400 dark:to-neutral-500 
   hover:shadow-cyan-500 transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left transition duration-300  hover:scale-105">
              Professional Skills
            </h3>

            <div className="grid gap- sm:grid-cols-2 grid-cols-2 lg:grid-cols-3 w-full">
              {Soft_Skills.map((skill) => {
                const radius = 45; // circle radius
                const circumference = 2 * Math.PI * radius;
                const progress = ((100 - skill.level) / 100) * circumference;

                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center p-4 text-white 
            transition duration-300 hover:scale-105"
                  >
                    {/* Circular Progress */}
                    <svg className="w-28 h-28 transform -rotate-90">
                      <circle
                        cx="56"
                        cy="56"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-gray-300 dark:text-gray-200"
                        fill="transparent"
                      />
                      <circle
                        cx="56"
                        cy="56"
                        r={radius}
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={progress}
                        className=" transition-all duration-700"
                        fill="transparent"
                      />
                      {/* Gradient Definition */}
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="red" /> {/* pink-500 */}
                          <stop offset="50%" stopColor="#8b5cf6" />{" "}
                          {/* purple-500 */}
                          <stop offset="100%" stopColor="#06b6d4" />{" "}
                          {/* cyan-500 */}
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Percentage in Center */}
                    <span className="absolute text-lg font-semibold mt-10 transition duration-300 hover:scale-105">
                      {skill.level}%
                    </span>

                    {/* Skill Name */}
                    <p className="mt-3 text-base font-medium transition duration-300 hover:scale-110">{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
