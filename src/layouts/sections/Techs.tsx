import { ITechs } from "../../@types/data";
import { ReactSVG } from "react-svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import useData from "../../context/DataContext";
import useUserOptions from "../../context/UserOptionsContext";

function toggleHoverEffect(elements: string[] | undefined) {
  if (elements === undefined) {
    return;
  } else {
  for (var e in elements) {
    console.log(document.getElementById(elements[e])!.classList);
    document.getElementById(elements[e])!.classList.toggle("effect");
  }
  }
}

function Tech({
  id,
  name,
  imgSrc,
  descrip,
  engDescrip,
  exp,
  knowledge,
  hoverEffect,
}: ITechs[number]) {
  const { lang } = useUserOptions();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div
            id={id}
            className="ic flex flex-col"
            onMouseEnter={() =>
               toggleHoverEffect(hoverEffect)
            }
            onMouseLeave={() =>
              toggleHoverEffect(hoverEffect)
            }
          >
            <ReactSVG
              src={window.location.origin + `/cv-project/logos/${imgSrc}.svg`}
            />
            <div className="text-center">{name}</div>
          </div>
        </TooltipTrigger>
        <TooltipContent className="flex flex-col items-center bg-slate-200 dark:bg-slate-800">
          <h4 className="font-bold text-orange-600 dark:text-sky-300">{name}</h4>
          <p className="mb-3 max-w-[12rem]">{lang == "es" ? descrip : engDescrip}</p>
          <div className="flex gap-4">
            <div
              className="radial-progress text-orange-600 dark:text-sky-300 "
              style={{ "--value": exp }}
              role="progressbar"
            >
              EXP
            </div>
            <div
              className="radial-progress text-primary"
              style={{ "--value": knowledge }}
              role="progressbar"
            >
              CON
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default function Techs() {
  const { techs } = useData();
  return (
    <section id="techs" className="flex items-center">
      <div className="flex flex-col justify-center w-full">
        <h2 className="text-center text-3xl text-orange-600 dark:text-sky-300 font-bold mb-10">
          Habilidades
        </h2>
        <p className="mb-10">
          Diferentes tecnologías, frameworks y librerías que he utilizado o
          aprendido
        </p>
        <div className="flex flex-col gap-10">
          <div className="nivel-1 flex justify-around">
            {techs.slice(0, 6).map((tech) => (
              <Tech
                key={tech.id}
                id={tech.id}
                name={tech.name}
                imgSrc={tech.imgSrc}
                descrip={tech.descrip}
                engDescrip={tech.engDescrip}
                exp={tech.exp}
                knowledge={tech.knowledge}
                hoverEffect={tech.hoverEffect}
              />
            ))}
          </div>
          <div className="nivel-2 flex justify-around">
            {techs.slice(6, 14).map((tech) => (
              <Tech
                key={tech.id}
                id={tech.id}
                name={tech.name}
                imgSrc={tech.imgSrc}
                descrip={tech.descrip}
                engDescrip={tech.engDescrip}
                exp={tech.exp}
                knowledge={tech.knowledge}
                hoverEffect={tech.hoverEffect}
              />
            ))}
          </div>
          <div className="nivel-3 flex justify-around">
          {techs.slice(14, 20).map((tech) => (
              <Tech
                key={tech.id}
                id={tech.id}
                name={tech.name}
                imgSrc={tech.imgSrc}
                descrip={tech.descrip}
                engDescrip={tech.engDescrip}
                exp={tech.exp}
                knowledge={tech.knowledge}
                hoverEffect={tech.hoverEffect}
              />
            ))}
          </div>
          <div className="nivel-4 flex justify-around">
          {techs.slice(20, 25).map((tech) => (
              <Tech
                key={tech.id}
                id={tech.id}
                name={tech.name}
                imgSrc={tech.imgSrc}
                descrip={tech.descrip}
                engDescrip={tech.engDescrip}
                exp={tech.exp}
                knowledge={tech.knowledge}
                hoverEffect={tech.hoverEffect}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
