import { IProyectos } from "../../@types/data";
import imgPokedex from "./../../assets/project-img/pokedex.png";
import imgProjectTracker from "./../../assets/project-img/project-tracker.png";
import imgWordle from "./../../assets/project-img/project-tracker.png";
import imgHangman from "./../../assets/project-img/project-tracker.png";
import imgJapLanding from "./../../assets/project-img/proyecto-jap.png";
import imgFlashcard from "./../../assets/project-img/flashcard-game.png";
import imgProjectTrackerLP from "./../../assets/project-img/project-tracker-lp.png";
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";
import react from "../../assets/logos/react.svg";
import ts from "../../assets/logos/typescript.svg";
import sass from "../../assets/logos/sass.svg";
import { BsBoxArrowUpRight } from "react-icons/bs";

const proyectos: IProyectos = [
  {
    id: "1",
    nombre: "Pokedex",
    anio: 2021,
    img: "imgPokedex",
    tecnologias: ["react", "ts", "sass"],
    descripcionCorta: "Pokedex",
    descripcionLarga: "Pokedex",
    urlRepo: "https://github.com/NicolasGarin/pokedex",
    urlDemo: "https://nicolasgarin.github.io/pokedex/",
  },
  {
    id: "2",
    nombre: "Jap Landing page",
    anio: 2021,
    img: "imgJapLanding",
    tecnologias: ["react", "ts", "sass"],
    descripcionCorta: "Pokedex",
    descripcionLarga: "Pokedex",
    urlRepo: "https://github.com/NicolasGarin/pokedex",
    urlDemo: "https://nicolasgarin.github.io/pokedex/",
  },
  {
    id: "3",
    nombre: "Wordle",
    anio: 2022,
    img: "imgPokedex",
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
    img: "imgFlashcard",
    tecnologias: ["react", "ts", "sass"],
    descripcionCorta: "Pokedex",
    descripcionLarga: "Pokedex",
    urlRepo: "https://github.com/NicolasGarin/pokedex",
    urlDemo: "https://nicolasgarin.github.io/pokedex/",
  },
  {
    id: "5",
    nombre: "Hangman Game",
    anio: 2023,
    img: "imgHangman",
    tecnologias: ["react", "ts", "sass"],
    descripcionCorta: "Pokedex",
    descripcionLarga: "Pokedex",
    urlRepo: "https://github.com/NicolasGarin/pokedex",
    urlDemo: "https://nicolasgarin.github.io/pokedex/",
  },
  {
    id: "6",
    nombre: "Project Tracker",
    anio: 2024,
    img: "imgProjectTracker",
    tecnologias: ["react", "ts", "sass"],
    descripcionCorta: "Pokedex",
    descripcionLarga: "Pokedex",
    urlRepo: "https://github.com/NicolasGarin/pokedex",
    urlDemo: "https://nicolasgarin.github.io/pokedex/",
  },
  {
    id: "7",
    nombre: "Project Tracker LP",
    anio: 2024,
    img: "imgProjectTrackerLP",
    tecnologias: ["react", "ts", "sass"],
    descripcionCorta: "Pokedex",
    descripcionLarga: "Pokedex",
    urlRepo: "https://github.com/NicolasGarin/pokedex",
    urlDemo: "https://nicolasgarin.github.io/pokedex/",
  },
];

function imgSetter(string: string) {
  switch (string) {
    case "imgPokedex":
      return imgPokedex;
    case "imgJapLanding":
      return imgJapLanding;
    case "imgProjectTracker":
      return imgProjectTracker;
    case "imgProjectTrackerLP":
      return imgProjectTrackerLP;
    case "imgWordle":
      return imgWordle;
    case "imgFlashcard":
      return imgFlashcard;
    case "imgHangman":
      return imgHangman;
    default:
      return "";
  }
}

export default function Projects() {
  return (
    <section id="projects" className="flex items-center">
      <div className="flex flex-col w-full">
        <h2 className="text-center text-3xl text-sky-300 font-bold mb-10">
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
                      src={imgSetter(proyecto.img)}
                      alt="car!"
                    />
                  </figure>
                  <div className="card-body p-4">
                    <h2 className="card-title flex text-sky-300  justify-between">
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
                        <BsBoxArrowUpRight className="w-5 h-5 hover:fill-sky-300" />
                      </button>
                    </h2>
                    <p>Pokedex desarrollada con React</p>
                    <div className="flex gap-5">
                      <img className="h-8" src={react} />
                      <img className="h-8" src={ts} />
                      <img className="h-8" src={sass} />
                    </div>
                  </div>
                </div>
                <dialog id={proyecto.id} className="modal">
                  <div className="modal-box bg-black">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-lg">{proyecto.nombre}</h3>
                    <p className="py-4">
                      Press ESC key or click outside to close
                    </p>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}
