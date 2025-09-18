import React, {useState } from "react";

export default function Projects() {
  const projects = [
    {
      image: "assets/Employee.jpg",
      title: "Employee Management System",
      desc: "A web application for managing employee records.",
      link: "https://github.com/MuthuganeshMG/Employee-Management.git",
    },
    {
      image: "assets/tb.png",
      title: "Ticket Booking System",
      desc: "Another sample MERN stack project with cart system.",
      link: "https://github.com/MuthuganeshMG/TicketApp.git",
    },
    {
      image: "assets/jewellery.jpg",
      title: "E-commerce Jewellery",
      desc: "Frontend e-commerce app for browsing and purchasing jewelry.",
      link: "https://github.com/MuthuganeshMG/Jewellery-app.git",
    },
    {
      image: "assets/books.jpg",
      title: "Book Store",
      desc: "Frontend book store app for browsing and purchasing books.",
      link: "https://github.com/MuthuganeshMG/Book-Store.git",
    },
    {
      image: "assets/car.jpg",
      title: "Car Rental",
      desc: "Frontend car rental app for browsing and booking cars.",
      link: "https://github.com/MuthuganeshMG/Car-Rental.git",
    },
    {
      image: "assets/qr.png",
      title: "QR Code Generator",
      desc: "A web app for generating QR codes from text.",
      link: "https://github.com/MuthuganeshMG/QR-Genrator.git",
    },
    {
      image: "assets/weather.png",
      title: "Weather App",
      desc: "A web app for checking the weather in different cities.",
      link: "https://github.com/MuthuganeshMG/WeatherApp.git",
    },
    // {
    //   image: "assets/tb.png",
    //   title: "Payments System",
    //   desc: "Integration with payment gateways for transactions.",
    //   link: "https://github.com/MuthuganeshMG/PaymentsSystem.git",
    // },
  ];

  const [current, setCurrent] = useState(0);
  const [previewStart, setPreviewStart] = useState(1); // start showing from 2nd project


  const nextSlide = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

    setPreviewStart((prev) => (prev + 1 >= projects.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

    setPreviewStart((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  // Get 3 preview cards
  const previewProjects = projects.slice(previewStart, previewStart + 3);
  while (previewProjects.length < 3) {
    previewProjects.push(...projects.slice(0, 3 - previewProjects.length));
  }

  return (
    <section
      id="projects"
      className="w-full h-[600px] dark:bg-white bg-gradient-to-r from-blue-300 via-gray-900 to-purple-300 animate-gradient-x
     py-12 shadow-2x dark:text-white flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="relative z-20 text-center max-w-3xl -mt-[460px]">
        <h2 className="text-3xl font-bold mb-4 transition duration-300 -mt-2 hover:scale-105">
          Projects
        </h2>
        <p className="text-lg text-gray-300 dark:text-gray-100 -mt-5">
          A showcase of my work across web development, featuring applications
          built with modern frameworks, intuitive interfaces, and practical
          problem-solving approaches.
        </p>
      </div>
      <div className="absolute mt-28 inset-0 w-full h-[500px] flex items-center justify-center overflow-hidden">
        {/* Fullscreen Background */}
        <div className="absolute inset-0 w-full overflow-hidden rounded-3xl p-5 ">
          <img
            src={projects[current].image}
            alt={projects[current].title}
            className="w-[800px] h-[450px] object-cover rounded-3xl border-blue-500 border-2 shadow-2x"
          />
          <video
            src={projects[current].image}
            alt={projects[current].title}
            className="w-[800px] h-[450px] object-cover rounded-3xl border-blue-500 border-2 shadow-2x"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80" />
        </div>


        {/* Content Overlay */}
        <div className="relative z-20 w-full max-w-7xl px-10 flex items-center justify-between">
          {/* Left: Project Info */}
          <div className="-mb-36 max-w-xl">
            <h2 className="text-4xl font-bold mb-4">
              {projects[current].title}
            </h2>
            <p className="dark:text-white text-red-500 text-lg mb-6">
              {projects[current].desc}
            </p>
            <a
              href={projects[current].link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-5 py-3 rounded-lg font-semibold shadow-lg
             transition-transform hover:scale-105 duration-500 hover:bg-gray-200 inline-block"
            >
              View Project
            </a>
          </div>

          {/* Right: Preview Cards (3 at a time) */}
          <div className="grid grid-cols-3 lg:gap-2 gap-20">
            {previewProjects.map((project, index) => (
              <div
                key={index}
                onClick={() =>
                  setCurrent((previewStart + index) % projects.length)
                }
                className=" lg:w-[180px] w-40 h-[280px] gap-10 mt-36  backdrop-blur-md rounded-2xl overflow-hidden shadow-lg
               cursor-pointer hover:scale-105 transition-transform duration-500"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover brightness-50 hover:border-blue-500 hover:border-2"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-center py-2">
                  <h3 className="text-sm font-semibold dark:text-white text-red-500">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-30">
          <button
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
