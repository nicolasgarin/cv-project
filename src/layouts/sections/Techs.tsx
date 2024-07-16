import { ITechs } from "../../@types/data";
import { ReactSVG } from "react-svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import useUserOptions from "../../context/UserOptionsContext";

const techs: ITechs = [
  {
    id: "git",
    name: "Git",
    imgSrc: "git",
    descrip: "Sistema de control de versiones",
    engDescrip: "Version control system",
    exp: 75,
    knowledge: 75,
  },
  {
    id: "html",
    name: "HTML 5",
    imgSrc: "html-5",
    descrip: "Lenguaje de marcado de hipertexto",
    engDescrip: "Markup language",
    exp: 100,
    knowledge: 100,
  },
  {
    id: "css",
    name: "Css 3",
    imgSrc: "css-3",
    descrip: "Lenguaje de hojas de estilo",
    engDescrip: "Style sheet language",
    exp: 100,
    knowledge: 100,
  },
  {
    id: "js",
    name: "Javascript",
    imgSrc: "javascript",
    descrip: "Lenguaje de programación",
    engDescrip: "Programming language",
    exp: 100,
    knowledge: 100,
  },
  {
    id: "python",
    name: "Python",
    imgSrc: "python",
    descrip: "Lenguaje de programación",
    engDescrip: "Programming language",
    exp: 25,
    knowledge: 50,
  },
  {
    id: "mysql",
    name: "Mysql",
    imgSrc: "mysql",
    descrip: "Sistema de gestión de bases de datos",
    engDescrip: "Database management system",
    exp: 25,
    knowledge: 75,
  },
  {
    id: "github",
    name: "Github",
    imgSrc: "github",
    descrip: "Plataforma de gestión de repositorios basado en git",
    engDescrip: "Repositories managment system based on git",
    exp: 100,
    knowledge: 80,
    hoverEffect: ["git"],
  },
  {
    id: "figma",
    name: "Figma",
    imgSrc: "figma",
    descrip: "Herramienta de diseño para la creación de prototipos",
    engDescrip: "Design tool for prototyping",
    exp: 75,
    knowledge: 75,
  },
  {
    id: "sass",
    name: "Sass",
    imgSrc: "sass",
    descrip: "Procesador de Css",
    engDescrip: "Css processor",
    exp: 100,
    knowledge: 100,
    hoverEffect: ["css"],
  },
  {
    id: "react",
    name: "React",
    imgSrc: "react",
    descrip: "Librería de Javascript para creación de interfaces de usuario y manejo de estados",
    engDescrip: "Javascript library for user interfaces creation and state handling",
    exp: 100,
    knowledge: 100,
  },
  {
    id: "ts",
    name: "Typescript",
    imgSrc: "typescript",
    descrip: "Extensión de Javascript para manejo de tipos",
    engDescrip: "Javascript extension for type handling",
    exp: 50,
    knowledge: 75,
    hoverEffect: ["js"],
  },
  {
    id: "jq",
    name: "JQuery",
    imgSrc: "jquery",
    descrip: "Librería de Javascript para el manejo de interacción con elementos HTML",
    engDescrip: "Javascript library for HTML elements interaction handling",
    exp: 100,
    knowledge: 100,
    hoverEffect: ["js"],
  },
  {
    id: "freemarker",
    name: "Freemarker",
    imgSrc: "freemarker",
    descrip: " Librería de Java para creación de plantillas",
    engDescrip: "Java library for templates creation",
    exp: 100,
    knowledge: 100,
    hoverEffect: ["java"],
  },
  {
    id: "clay",
    name: "Clay UI",
    imgSrc: "clay",
    descrip: "Librería de componentes y estilos basado en Bootstrap, creado para Liferay",
    engDescrip: "Library of components and styles based on Bootstrap, created for Liferay",
    exp: 100,
    knowledge: 100,
    hoverEffect: ["java", "bootst"],
  },
  {
    id: "vite",
    name: "Vite",
    imgSrc: "vite",
    descrip: "Herramienta de construcción de proyectos",
    engDescrip: "Project building tool",
    exp: 75,
    knowledge: 50,
    hoverEffect: ["js", "html", "react"],
  },
  {
    id: "bootst",
    name: "Bootstrap",
    imgSrc: "bootstrap",
    descrip: "Framework de css de reglas de estilos y componentes",
    engDescrip: "Css framework for style rules and components",
    exp: 100,
    knowledge: 100,
    hoverEffect: ["css", "html"],
  },
  {
    id: "tailwind",
    name: "Tailwind",
    imgSrc: "tailwind",
    descrip: "Framework de css enfocado en proveer clases de utilidad",
    engDescrip: "Css framework focused on providing utility classes",
    exp: 75,
    knowledge: 100,
    hoverEffect: ["css", "html", "js", "react"],
  },
  {
    id: "radix",
    name: "Radix",
    imgSrc: "radix",
    descrip: "Biblioteca de componentes de UI para React",
    engDescrip: "UI component library for React",
    exp: 50,
    knowledge: 100,
    hoverEffect: ["css", "html", "js", "react"],
  },
  {
    id: "next",
    name: "Next.js",
    imgSrc: "next-js",
    descrip: "Framework de React para crear paquetes SSR",
    engDescrip: "React framework for creating SSR packages",
    exp: 25,
    knowledge: 25,
    hoverEffect: ["js", "html", "react"],
  },
  {
    id: "liferay",
    name: "Liferay",
    imgSrc: "liferay",
    descrip: "CMS basado en Java",
    engDescrip: "Java based CMS",
    exp: 100,
    knowledge: 100,
    hoverEffect: ["java", "freemarker", "clay"],
  },
  {
    id: "vitest",
    name: "Vitest",
    imgSrc: "vitest",
    descrip: "Framework de testing basado en Vite",
    engDescrip: "Vite based testing framework",
    exp: 25,
    knowledge: 25,
    hoverEffect: ["js", "html", "vite", "react"],
  },
  {
    id: "bootswatch",
    name: "Bootswatch",
    imgSrc: "bootswatch",
    descrip: "Plugin de Bootstrap para generación de temas",
    engDescrip: "Bootstrap plugin for theme generation",
    exp: 25,
    knowledge: 100,
    hoverEffect: ["css", "html", "bootst"],
  },
  {
    id: "daisy",
    name: "DaisyUI",
    imgSrc: "daisyui",
    descrip: "Librería de componentes de Tailwind para frameworks de Javascript",
    engDescrip: "Tailwind based component library for Javascript frameworks",
    exp: 50,
    knowledge: 100,
    hoverEffect: ["css", "html", "js", "react", "tailwind"],
  },
  {
    id: "shadcn",
    name: "Shadcn/ui",
    imgSrc: "shadcn-ui",
    descrip: "Librería de componentes basado en Tailwind para React",
    engDescrip: "Tailwind based component library for React",
    exp: 50,
    knowledge: 100,
    hoverEffect: ["css", "html", "js", "react", "tailwind", "radix"],
  },
  {
    id: "astro",
    name: "Astro",
    imgSrc: "astro",
    descrip: "Framework de Javascript para creación de sitios estáticos optimizados",
    engDescrip: "Javascript framework for optimized static websites",
    exp: 25,
    knowledge: 50,
    hoverEffect: ["js"],
  }
];

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
}: ITechs) {
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
