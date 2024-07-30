import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";
import useData from "../../context/DataContext";
import useUserOptions from "../../context/UserOptionsContext";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { useState } from "react";
import { FilterOptions } from "../../@types/data";

export default function Projects() {
  const { projects } = useData();
  const { lang } = useUserOptions();
  const [filter, setFilter] = useState<FilterOptions>("all");

  return (
    <section id="projects" className="flex items-center">
      <div className="flex flex-col w-full">
        <h2 className="text-center text-3xl text-orange-600 dark:text-sky-300 font-bold mb-10">
          Proyectos
        </h2>
        {lang == "es" ? (
          <p className="mb-10">
            Paralelamente a mi crecimiento y desarrollo profesional de manera
            privada, siempre he trabajado en aprender y adquirir conocimiento
            sobre nuevas tecnologías y frameworks, enfocándome en generar
            experiencia en la herramienta que más me gusta y anhelo trabajar de
            manera profesional, React.
          </p>
        ) : (
          <p className="mb-10">
            Parallel to my professional growth and development, I have worked in
            the private sector, always learning and acquiring knowledge about
            new technologies and frameworks, focusing on generating experience
            in the tool that I most enjoy and dream of working professionally,
            React.
          </p>
        )}
        <div className="flex justify-end gap-5 mb-5">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              className="radio radio-warning dark:radio-info color-transparent"
              id="all"
              name="filter"
              value="all"
              checked={filter === "all"}
              onChange={() => setFilter("all")}
            />
            <label
              htmlFor="all"
              className="hover:cursor-pointer hover:text-orange-600 hover:dark:text-sky-300"
            >
              {lang == "es" ? "Todos" : "All"}
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              className="radio radio-warning dark:radio-info"
              id="webapp"
              name="filter"
              value="WebApp"
              checked={filter === "WebApp"}
              onChange={() => setFilter("WebApp")}
            />
            <label
              htmlFor="webapp"
              className="hover:cursor-pointer hover:text-orange-600 hover:dark:text-sky-300"
            >
              {lang == "es" ? "Aplicaciones Web" : "Web Apps"}
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              className="radio radio-warning dark:radio-info"
              id="landing"
              name="filter"
              value="Landing Page"
              checked={filter === "Landing Page"}
              onChange={() => setFilter("Landing Page")}
            />
            <label
              htmlFor="landing"
              className="hover:cursor-pointer hover:text-orange-600 hover:dark:text-sky-300"
            >
              Landing pages
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              className="radio radio-warning dark:radio-info"
              id="portfolio"
              name="filter"
              value="Portfolio"
              checked={filter === "Portfolio"}
              onChange={() => setFilter("Portfolio")}
            />
            <label
              htmlFor="portfolio"
              className="hover:cursor-pointer hover:text-orange-600 hover:dark:text-sky-300"
            >
              {lang == "es" ? "Portafolios" : "Portfolios"}
            </label>
          </div>
        </div>
        <ScrollArea id="scrollarea" className="whitespace-nowrap">
          <div className="flex w-max space-x-4 pb-8">
            {filter === "all" &&
              projects.map((proyecto) => (
                <ProjectCard key={proyecto.id} proyecto={proyecto} />
              ))}
            {filter === "WebApp" &&
              projects
                .filter((proyecto) => proyecto.tag === "WebApp")
                .map((proyecto) => (
                  <ProjectCard key={proyecto.id} proyecto={proyecto} />
                ))}
            {filter === "Landing Page" &&
              projects
                .filter((proyecto) => proyecto.tag === "Landing Page")
                .map((proyecto) => (
                  <ProjectCard key={proyecto.id} proyecto={proyecto} />
                ))}
            {filter === "Portfolio" &&
              projects
                .filter((proyecto) => proyecto.tag === "Portfolio")
                .map((proyecto) => (
                  <ProjectCard key={proyecto.id} proyecto={proyecto} />
                ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}
