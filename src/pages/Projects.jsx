import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow, github } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        Over the years, I’ve developed a variety of projects ranging from web
        applications and mobile apps to interactive product configurators. Each
        one challenged me to push my creativity and technical skills further,
        blending design with functionality. Below, you’ll find a selection of my
        favorite projects, each with its own story, unique features, and lessons
        learned along the way.
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="flex flex-row gap-4 justify-center items-center">
              {project.thumbail && (
                <img
                  src={project.thumbail}
                  alt="threads"
                  className="h-48 shadow-lg rounded-2xl object-contain top-0"
                />
              )}
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex justify-between  font-poppins">
                <div className="flex items-center gap-2">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    View Project
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
