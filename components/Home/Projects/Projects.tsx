"use client";
import React, { useEffect, useState } from "react";

interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  // Obtener los proyectos desde la API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error al obtener los proyectos:", error);
      }
    };

    fetchProjects();
  }, []);

  let count = 0;
  let delay = 0;

  return (
    <div className="container mx-auto py-8" id="projects">
      <h1 className="text-4xl font-bold text-center mb-8">
        Proyectos realizados
      </h1>
      <div className="mt-20 w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(
          (project) => (
            count++,
            delay += 100,
            (
              <div
                key={project._id}
                className="bg-[#fcf6fa] shadow-lg rounded-lg p-6"
                data-aos={count % 2 === 0 ? "flip-right" : "flip-left"}
                data-aos-anchor-placement="top-center"
                data-aos-delay={delay}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h2 className="text-2xl font-semibold mt-4">{project.title}</h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-blue-500 hover:underline"
                >
                  Ver más
                </a>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
