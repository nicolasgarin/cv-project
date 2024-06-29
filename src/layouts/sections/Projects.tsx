import { IProyectos } from "../../@types/data";
import imgPokedex from "./../../assets/project-img/pokedex.png";
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";

const proyectos: IProyectos = [
  {
    nombre: "Pokedex",
    anio: 2021,
  },
  {
    nombre: "Jap Landing page",
    anio: 2021,
  },
  {
    nombre: "Wordle",
    anio: 2022,
  },
  {
    nombre: "Flashcard App",
    anio: 2023,
  },
  {
    nombre: "Hangman Game",
    anio: 2023,
  },
  {
    nombre: "Project Tracker",
    anio: 2024,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="flex items-center">
      <div className="flex flex-col">
        <h3 className="mb-3">Proyectos personales</h3>
        <p className="mb-4">
          Paralelamente a mi crecimiento y desarrollo profesional de manera
          privada, siempre he trabajado en aprender y adquirir conocimiento
          sobre nuevas tecnologías y frameworks, enfocándome en generar
          experiencia en la herramienta que más me gusta y anhelo trabajar de
          manera profesional, React.
        </p>
        <ScrollArea className="w-[51rem] whitespace-nowrap">
          <div className="flex w-max space-x-4 pb-8">
            {proyectos.map((proyecto) => (
              <div className="card glass">
                <figure>
                  <img className="h-32" src={imgPokedex} alt="car!" />
                </figure>
                <div className="card-body p-4">
                  <h2 className="card-title">{proyecto.nombre}</h2>
                  <p>Pokedex desarrollada con React</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}
