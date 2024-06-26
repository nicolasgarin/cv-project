import { IProyectos } from "../../@types/data"

const proyectos: IProyectos = [
  {
    nombre: "Pokedex",
    anio: 2021
  },
  {
    nombre: "Jap Landing page",
    anio: 2021
  },
  {
    nombre: "Flashcard App",
    anio: 2023
  },
  {
    nombre: "Hangman Game",
    anio: 2023
  },
  {
    nombre: "Project Tracker",
    anio: 2024
  }
]

export default function Projects() {
  return (
    <section id='projects'>
      <div>{proyectos.map((proyecto) => <div>{proyecto.nombre} - {proyecto.anio}</div>)}</div>
    </section>
  )
}
