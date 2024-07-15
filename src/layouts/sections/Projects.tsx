import { IProyectos } from "../../@types/data";
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import useUserOptions from "../../context/UserOptionsContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./../../components/ui/carousel"

const proyectos: IProyectos = [
  {
    id: "1",
    nombre: "Pokedex",
    anio: 2021,
    portada: "imgPokedex",
    galeria: ["imgPokedex", "imgPokedex2", "imgPokedex3"],
    tecnologias: ["react", "sass", "bootstrap"],
    descripcionCorta: "Pokedex creada con React",
    descripcionLarga:
      "Aplicación de Pokedex para buscar y analizar cada Pokemón, sus estadísticas, evoluciones y ataques. Creada con React, Typescript, Sass y React-Query.",
    urlRepo: "https://github.com/NicolasGarin/pokedex",
    urlDemo: "https://nicolasgarin.github.io/pokedex/",
  },
  {
    id: "2",
    nombre: "Jap Landing page",
    anio: 2021,
    portada: "imgJapLanding",
    galeria: ["imgPokedex", "imgPokedex2", "imgPokedex3"],
    tecnologias: ["html-5", "javascript", "css-3", "bootstrap"],
    descripcionCorta: "Proyecto ecommerce para JaP",
    descripcionLarga: "Pokedex",
    urlRepo: "https://github.com/NicolasGarin/pokedex",
    urlDemo: "https://nicolasgarin.github.io/pokedex/",
  },
  {
    id: "3",
    nombre: "Wordle",
    anio: 2022,
    portada: "imgPokedex",
    galeria: ["imgPokedex", "imgPokedex2", "imgPokedex3"],
    tecnologias: ["react", "ts", "sass"],
    descripcionCorta: "Pokedex",
    descripcionLarga: "Pokedex",
    urlRepo: "https://github.com/NicolasGarin/pokedex",
    urlDemo: "https://nicolasgarin.github.io/pokedex/",
  },
  {
    id: "4",
    nombre: "Flashcard App",
    anio: 2023,
    portada: "imgFlashcard",
    galeria: ["imgPokedex", "imgPokedex2", "imgPokedex3"],
    tecnologias: ["react", "sass", "bootstrap"],
    descripcionCorta: "Juego de preguntas y respuestas",
    descripcionLarga: "Pokedex",
    urlRepo: "https://github.com/NicolasGarin/pokedex",
    urlDemo: "https://nicolasgarin.github.io/pokedex/",
  },
  {
    id: "5",
    nombre: "Hangman Game",
    anio: 2023,
    portada: "imgHangman",
    galeria: ["imgPokedex", "imgPokedex2", "imgPokedex3"],
    tecnologias: ["react", "ts", "sass", "bootstrap"],
    descripcionCorta: "Juego del ahorcado",
    descripcionLarga: "Pokedex",
    urlRepo: "https://github.com/NicolasGarin/pokedex",
    urlDemo: "https://nicolasgarin.github.io/pokedex/",
  },
  {
    id: "6",
    nombre: "Project Tracker",
    anio: 2024,
    portada: "imgProjectTracker",
    galeria: ["poj-trac-1", "imgPokedex2", "imgPokedex3"],
    tecnologias: ["react", "ts", "sass", "bootstrap"],
    descripcionCorta: "Aplicación de seguimiento de proyectos",
    descripcionLarga: "Pokedex",
    urlRepo: "https://github.com/NicolasGarin/pokedex",
    urlDemo: "https://nicolasgarin.github.io/pokedex/",
  },
  {
    id: "7",
    nombre: "Project Tracker LP",
    anio: 2024,
    portada: "imgProjectTrackerLP",
    galeria: ["imgPokedex", "imgPokedex2", "imgPokedex3"],
    tecnologias: ["html", "js", "sass", "tailwind"],
    descripcionCorta: "Landing page para Project Tracker",
    descripcionLarga: "Pokedex",
    urlRepo: "https://github.com/NicolasGarin/pokedex",
    urlDemo: "https://nicolasgarin.github.io/pokedex/",
  },
];

export default function Projects() {
  const { lang } = useUserOptions();
  return (
    <section id="projects" className="flex items-center">
      <div className="flex flex-col w-full">
        <h2 className="text-center text-3xl text-orange-600 dark:text-sky-300 font-bold mb-10">
          Proyectos
        </h2>
        <p className="mb-10">
          Paralelamente a mi crecimiento y desarrollo profesional de manera
          privada, siempre he trabajado en aprender y adquirir conocimiento
          sobre nuevas tecnologías y frameworks, enfocándome en generar
          experiencia en la herramienta que más me gusta y anhelo trabajar de
          manera profesional, React.
        </p>
        <ScrollArea id="scrollarea" className="whitespace-nowrap">
          <div className="flex w-max space-x-4 pb-8">
            {proyectos.map((proyecto) => (
              <>
                <div className="card glass">
                  <figure>
                    <img
                      className="h-32"
                      src={window.location.origin + `/cv-project/${proyecto.portada}.png`}
                      alt="car!"
                    />
                  </figure>
                  <div className="card-body p-4">
                    <h2 className="card-title flex text-orange-600 dark:text-sky-300  justify-between">
                      {proyecto.nombre}
                      <button
                        onClick={() => {
                          if (document) {
                            (
                              document.getElementById(
                                proyecto.id
                              ) as HTMLFormElement
                            ).showModal();
                          }
                        }}
                      >
                        <BsBoxArrowUpRight className="w-5 h-5 hover:fill-orange-600 hover:dark:fill-sky-300" />
                      </button>
                    </h2>
                    <p>{proyecto.descripcionCorta}</p>
                    <div className="flex gap-5">
                      {proyecto.tecnologias.map((tech) => (
                        <img className="h-8" src={window.location.origin + `/cv-project/logos/${tech}.svg`} />
                      ))}
                    </div>
                  </div>
                </div>
                <dialog id={proyecto.id} className="modal">
                  <div className="modal-box bg-slate-200 dark:bg-slate-800">
                    <h3 className="font-bold text-xl flex justify-between">
                      <span>{proyecto.nombre}</span>{" "}
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost">
                          ✕
                        </button>
                      </form>
                    </h3>
                    <p className="flex justify-center py-4">

                    <Carousel className="w-full max-w-xs">
                      <CarouselContent>
                        {(proyecto.galeria).map((img, index) => (
                          <CarouselItem key={index}>
                            <div className="p-1">
                                <img className="" src={window.location.origin + `/cv-project/project-img/${img}.png`} alt={img} />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                    </p>
                    <p>{proyecto.anio}</p>
                    <p className="whitespace-pre-wrap py-4">{proyecto.descripcionLarga}</p>
                    <div className="flex justify-around">
                      <a className="flex flex-col items-center gap-1"
                        href={proyecto.urlRepo}
                        aria-label={
                          lang == "es"
                            ? "Enlace a cuenta de Github"
                            : "Github account link"
                        }
                      >
                        <FaGithub className="h-6 w-6 fill-gray" />
                        Repository
                      </a>
                      <a className="flex flex-col items-center gap-1"
                        href={proyecto.urlDemo}
                        aria-label={
                          lang == "es"
                            ? "Enlace a cuenta de Github"
                            : "Github account link"
                        }
                      >
                        <FaPlay className="h-6 w-6 fill-gray" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </>
            ))}
          </div>
          <ScrollBar orientation="horizontal"  />
        </ScrollArea>
      </div>
    </section>
  );
}
