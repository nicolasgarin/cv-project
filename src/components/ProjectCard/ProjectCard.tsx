import { IProyecto } from "../../@types/data";
import { BsBoxArrowUpRight } from "react-icons/bs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./../../components/ui/carousel";
import { FaGithub } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import useUserOptions from "../../context/UserOptionsContext";

export default function ProjectCard({ proyecto }: { proyecto: IProyecto }) {
  const { lang } = useUserOptions();

  return (
    <>
      <div className="card glass w-64">
        <figure
          className="card-image h-32"
          style={{
            backgroundImage: `url(${
              window.location.origin + `/cv-project/project-img/${proyecto.portada}.png`
            })`,
          }}
        >
          <span className="absolute left-[8px] top-[88px] rounded-lg px-2 py-1 bg-slate-300 dark:bg-slate-700">
            {proyecto.tag}
          </span>
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title flex text-orange-600 dark:text-sky-300  justify-between">
            {proyecto.nombre}
            <button
              onClick={() => {
                if (document) {
                  (
                    document.getElementById(proyecto.id) as HTMLFormElement
                  ).showModal();
                }
              }}
            >
              <BsBoxArrowUpRight className="w-5 h-5 hover:fill-orange-600 hover:dark:fill-sky-300" />
            </button>
          </h2>
          <p className="text-wrap text-sm h-12">{lang == "es" ? proyecto.descripcionCorta : proyecto.descripcionCortaEng}</p>
          <div className="flex gap-4">
            {proyecto.tecnologias.map((tech: string) => (
              <img
                className="h-6"
                src={window.location.origin + `/cv-project/logos/${tech}.svg`}
              />
            ))}
          </div>
        </div>
      </div>
      <dialog id={proyecto.id} className="modal">
        <div className="modal-box bg-slate-200 dark:bg-slate-800">
          <h3 className="font-bold text-xl flex justify-between">
            <span className="text-orange-600 dark:text-sky-300">
              {proyecto.nombre}
            </span>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost">✕</button>
            </form>
          </h3>
          <p className="flex justify-center py-4">
            <Carousel className="w-full max-w-[23rem]">
              <CarouselContent>
                {proyecto.galeria.map((img: string, index: number) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div
                        className="card-image h-[210px] w-[365px] rounded-lg"
                        style={{
                          backgroundImage: `url(${
                            window.location.origin +
                            `/cv-project/project-img/${img}.png`
                          })`,
                        }}
                      ></div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </p>
          <p>{proyecto.anio}</p>
          <p className="whitespace-pre-wrap pt-2 pb-4 text-sm">
            {lang == "es" ? proyecto.descripcionLarga : proyecto.descripcionLargaEng}
          </p>
          <div className="flex justify-around">
            <a
               className="modal-link flex flex-col items-center gap-1 hover:text-orange-600 dark:hover:text-sky-300"
              href={proyecto.urlRepo}
              aria-label={
                lang == "es"
                  ? "Enlace a cuenta de Github"
                  : "Github account link"
              }
              target="_blank"
            >
              <FaGithub className="h-6 w-6" />
              Repo
            </a>
            {proyecto.urlDemo ? (
              <a
                className="modal-link flex flex-col items-center gap-1 hover:text-orange-600 dark:hover:text-sky-300"
                href={proyecto.urlDemo}
                aria-label={
                  lang == "es"
                    ? "Enlace a cuenta de Github"
                    : "Github account link"
                }
                target="_blank"
              >
                <FaPlay className="h-6 w-6" />
                Demo
              </a>
            ) : (
              <div
              className="flex flex-col items-center gap-1 text-gray-300 dark:text-gray-600"
              aria-label={
                lang == "es"
                  ? "Enlace a cuenta de Github"
                  : "Github account link"
              }>
                <FaPlay className="h-6 w-6 fill-gray-300 dark:fill-gray-600" />
                Demo
              </div>
            )}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
