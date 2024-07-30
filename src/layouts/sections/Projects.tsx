import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";
import useData from "../../context/DataContext";
import useUserOptions from "../../context/UserOptionsContext";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function Projects() {
  const { projects } = useData();
  const { lang } = useUserOptions();

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
        <ScrollArea id="scrollarea" className="whitespace-nowrap">
          <div className="flex w-max space-x-4 pb-8">
            {projects.map((proyecto) => (
              <ProjectCard key={proyecto.id} proyecto={proyecto} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}
