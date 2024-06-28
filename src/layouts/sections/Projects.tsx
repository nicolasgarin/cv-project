import { IProyectos } from "../../@types/data";

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
    <section id="projects">
      <div className="flex flex-col justify-center h-full">
        <h3 className="mb-3">Proyectos personales</h3>
        <p className="mb-4">
          Paralelamente a mi crecimiento y desarrollo profesional de manera
          privada, siempre he trabajado en aprender y adquirir conocimiento
          sobre nuevas tecnologías y frameworks, enfocándome en generar
          experiencia en la herramienta que más me gusta y anhelo trabajar de
          manera profesional, React.
        </p>
        <div className="grid grid-cols-4 gap-4">
          {proyectos.map((proyecto) => (
            <div>
              <div>{proyecto.nombre}</div>
              <div>{proyecto.anio}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
