import git from "../../assets/logos/git.svg";
import html from "../../assets/logos/html-5.svg";
import css from "../../assets/logos/css-3.svg";
import js from "../../assets/logos/javascript.svg";
import python from "../../assets/logos/python.svg";
import java from "../../assets/logos/java.svg";
import github from "../../assets/logos/github.svg";
import figma from "../../assets/logos/figma.svg";
import sass from "../../assets/logos/sass.svg";
import ts from "../../assets/logos/typescript.svg";
import react from "../../assets/logos/react.svg";
import jq from "../../assets/logos/jquery.svg";
import freemarker from "../../assets/logos/freemarker.svg";
import clay from "../../assets/logos/clay.svg";
import mysql from "../../assets/logos/mysql.svg";
import vite from "../../assets/logos/vite.svg";
import bootstrap from "../../assets/logos/bootstrap.svg";
import tailwind from "../../assets/logos/tailwind.svg";
import liferay from "../../assets/logos/liferay.svg";
import vitest from "../../assets/logos/vitest.svg";
import bootswatch from "../../assets/logos/bootswatch.svg";
import daisy from "../../assets/logos/daisyui.svg";
import shadcn from "../../assets/logos/shadcn-ui.svg";
import radix from "../../assets/logos/radix.svg";
import nextjs from "../../assets/logos/next-js.svg";
import { ReactSVG } from "react-svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

export default function Techs() {
  function toggleHoverEffect(elements: string[]) {
    console.log(elements);
    for (var e in elements) {
      console.log(document.getElementById(elements[e])!.classList);

      document.getElementById(elements[e])!.classList.toggle("effect");
    }
  }

  return (
    <section id="techs" className="flex items-center">
      <div className="flex flex-col justify-center w-full">
        <h2 className="text-center text-3xl text-sky-300 font-bold mb-10">
          Habilidades
        </h2>
        <p>Diferentes tecnologías, frameworks y blabla que he utilizado o aprendido</p>
        <div className="flex flex-col gap-10">
          <div className="nivel-1 flex justify-around">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div id="git" className="ic flex flex-col">
                    <ReactSVG src={git} />
                    <div className="text-center">Git</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="flex flex-col items-center bg-slate-800">
                  <h4 className="font-bold text-sky-300">Git</h4>
                  <p className="mb-3">Sistema de control de versiones</p>
                  <div className="flex gap-4">
                    <div
                      className="radial-progress text-sky-300 "
                      style={{ "--value": 75 }}
                      role="progressbar"
                    >
                      EXP
                    </div>
                    <div
                      className="radial-progress text-secondary"
                      style={{ "--value": 75 }}
                      role="progressbar"
                    >
                      CON
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div id="html" className="ic flex flex-col">
                    <ReactSVG src={html} />
                    <div className="text-center">HTML 5</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="flex flex-col items-center bg-slate-800">
                  <h4 className="font-bold text-sky-300">HTML 5</h4>
                  <p className="mb-3">Lenguaje de marcado</p>
                  <div className="flex gap-4">
                    <div
                      className="radial-progress text-sky-300 "
                      style={{ "--value": 100 }}
                      role="progressbar"
                    >
                      EXP
                    </div>
                    <div
                      className="radial-progress text-secondary"
                      style={{ "--value": 100 }}
                      role="progressbar"
                    >
                      CON
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div id="css" className="ic flex flex-col">
                    <ReactSVG src={css} />
                    <div className="text-center">Css 3</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="flex flex-col items-center bg-slate-800">
                  <h4 className="font-bold text-sky-300">Css 3</h4>
                  <p className="mb-3">Lenguaje de hojas de estilo</p>
                  <div className="flex gap-4">
                    <div
                      className="radial-progress text-sky-300 "
                      style={{ "--value": 100 }}
                      role="progressbar"
                    >
                      EXP
                    </div>
                    <div
                      className="radial-progress text-secondary"
                      style={{ "--value": 100 }}
                      role="progressbar"
                    >
                      CON
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div id="js" className="ic flex flex-col">
                    <ReactSVG src={js} />
                    <div className="text-center">Javascript</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="flex flex-col items-center bg-slate-800">
                  <h4 className="font-bold text-sky-300">Javascript</h4>
                  <p className="mb-3">Lenguaje de programación</p>
                  <div className="flex gap-4">
                    <div
                      className="radial-progress text-sky-300 "
                      style={{ "--value": 100 }}
                      role="progressbar"
                    >
                      EXP
                    </div>
                    <div
                      className="radial-progress text-secondary"
                      style={{ "--value": 80 }}
                      role="progressbar"
                    >
                      CON
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="ic flex flex-col">
                    <ReactSVG src={python} />
                    <div className="text-center">Python</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="flex flex-col items-center bg-slate-800">
                  <h4 className="font-bold text-sky-300">Python</h4>
                  <p className="mb-3">Lenguaje de programación</p>
                  <div className="flex gap-4">
                    <div
                      className="radial-progress text-sky-300 "
                      style={{ "--value": 20 }}
                      role="progressbar"
                    >
                      EXP
                    </div>
                    <div
                      className="radial-progress text-secondary"
                      style={{ "--value": 40 }}
                      role="progressbar"
                    >
                      CON
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div id="java" className="ic flex flex-col">
                    <ReactSVG src={java} />
                    <div className="text-center">Java</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="flex flex-col items-center bg-slate-800">
                  <h4 className="font-bold text-sky-300">Java</h4>
                  <p className="mb-3">Lenguaje de programación</p>
                  <div className="flex gap-4">
                    <div
                      className="radial-progress text-sky-300 "
                      style={{ "--value": 50 }}
                      role="progressbar"
                    >
                      EXP
                    </div>
                    <div
                      className="radial-progress text-secondary"
                      style={{ "--value": 40 }}
                      role="progressbar"
                    >
                      CON
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="ic flex flex-col">
                    <ReactSVG src={mysql} />
                    <div className="text-center">Mysql</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="flex flex-col items-center bg-slate-800">
                  <h4 className="font-bold text-sky-300">Mysql</h4>
                  <p className="mb-3">Sistema de gestión de bases de datos</p>
                  <div className="flex gap-4">
                    <div
                      className="radial-progress text-sky-300 "
                      style={{ "--value": 25 }}
                      role="progressbar"
                    >
                      EXP
                    </div>
                    <div
                      className="radial-progress text-secondary"
                      style={{ "--value": 75 }}
                      role="progressbar"
                    >
                      CON
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="nivel-2 flex justify-around">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    id="github"
                    className="ic flex flex-col"
                    onMouseEnter={() => toggleHoverEffect(["git"])}
                    onMouseLeave={() => toggleHoverEffect(["git"])}
                  >
                    <ReactSVG src={github} />
                    <div className="text-center">Github</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="flex flex-col items-center bg-slate-800">
                  <h4 className="font-bold text-sky-300">Github</h4>
                  <p className="mb-3">Plataforma de gestión de repositorios <br /> basado en git</p>
                  <div className="flex gap-4">
                    <div
                      className="radial-progress text-sky-300 "
                      style={{ "--value": 50 }}
                      role="progressbar"
                    >
                      EXP
                    </div>
                    <div
                      className="radial-progress text-secondary"
                      style={{ "--value": 40 }}
                      role="progressbar"
                    >
                      CON
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div id="figma" className="ic flex flex-col">
                    <ReactSVG src={figma} />
                    <div className="text-center">Figma</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="flex flex-col items-center bg-slate-800">
                  <h4 className="font-bold text-sky-300">Figma</h4>
                  <p className="mb-3">Herramnienta de diseño</p>
                  <div className="flex gap-4">
                    <div
                      className="radial-progress text-sky-300 "
                      style={{ "--value": 75 }}
                      role="progressbar"
                    >
                      EXP
                    </div>
                    <div
                      className="radial-progress text-secondary"
                      style={{ "--value": 75 }}
                      role="progressbar"
                    >
                      CON
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    id="sass"
                    className="ic flex flex-col"
                    onMouseEnter={() => toggleHoverEffect(["css"])}
                    onMouseLeave={() => toggleHoverEffect(["css"])}
                  >
                    <ReactSVG src={sass} />
                    <div className="text-center">Sass</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="flex flex-col items-center bg-slate-800">
                  <h4 className="font-bold text-sky-300">Sass</h4>
                  <p className="mb-3">Procesador de Css</p>
                  <div className="flex gap-4">
                    <div
                      className="radial-progress text-sky-300 "
                      style={{ "--value": 100 }}
                      role="progressbar"
                    >
                      EXP
                    </div>
                    <div
                      className="radial-progress text-secondary"
                      style={{ "--value": 100 }}
                      role="progressbar"
                    >
                      CON
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    id="react"
                    className="ic flex flex-col"
                    onMouseEnter={() => toggleHoverEffect(["js", "html"])}
                    onMouseLeave={() => toggleHoverEffect(["js", "html"])}
                  >
                    <ReactSVG src={react} />
                    <div className="text-center">React</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="flex flex-col items-center bg-slate-800">
                  <h4 className="font-bold text-sky-300">React</h4>
                  <p className="mb-3">Librería de Javascript para crear interfaces <br/> de usuario y manejo de estados</p>
                  <div className="flex gap-4">
                    <div
                      className="radial-progress text-sky-300 "
                      style={{ "--value": 75 }}
                      role="progressbar"
                    >
                      EXP
                    </div>
                    <div
                      className="radial-progress text-secondary"
                      style={{ "--value": 90 }}
                      role="progressbar"
                    >
                      CON
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    id="ts"
                    className="ic flex flex-col"
                    onMouseEnter={() => toggleHoverEffect(["js"])}
                    onMouseLeave={() => toggleHoverEffect(["js"])}
                  >
                    <ReactSVG src={ts} />
                    <div className="text-center">Typescript</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="flex flex-col items-center bg-slate-800">
                  <h4 className="font-bold text-sky-300">Typescript</h4>
                  <p className="mb-3">Extensión de Javascript para manejo de tipos</p>
                  <div className="flex gap-4">
                    <div
                      className="radial-progress text-sky-300 "
                      style={{ "--value": 50 }}
                      role="progressbar"
                    >
                      EXP
                    </div>
                    <div
                      className="radial-progress text-secondary"
                      style={{ "--value": 50 }}
                      role="progressbar"
                    >
                      CON
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    id="jq"
                    className="ic flex flex-col"
                    onMouseEnter={() => toggleHoverEffect(["js"])}
                    onMouseLeave={() => toggleHoverEffect(["js"])}
                  >
                    <ReactSVG src={jq} />
                    <div className="text-center">Jquery</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="flex flex-col items-center bg-slate-800">
                  <h4 className="font-bold text-sky-300">JQuery</h4>
                  <p className="mb-3">Librería de Javascript que facilita la <br />interacción 
                  con elementos HTML</p>
                  <div className="flex gap-4">
                    <div
                      className="radial-progress text-sky-300 "
                      style={{ "--value": 100 }}
                      role="progressbar"
                    >
                      EXP
                    </div>
                    <div
                      className="radial-progress text-secondary"
                      style={{ "--value": 100 }}
                      role="progressbar"
                    >
                      CON
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    id="freemarker"
                    className="ic flex flex-col"
                    onMouseEnter={() => toggleHoverEffect(["java"])}
                    onMouseLeave={() => toggleHoverEffect(["java"])}
                  >
                    <ReactSVG src={freemarker} />
                    <div className="text-center">Freemarker</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="flex flex-col items-center bg-slate-800">
                  <h4 className="font-bold text-sky-300">Freemarker</h4>
                  <p className="mb-3">Librería de Java para creación de <br /> plantillas</p>
                  <div className="flex gap-4">
                    <div
                      className="radial-progress text-sky-300 "
                      style={{ "--value": 100 }}
                      role="progressbar"
                    >
                      EXP
                    </div>
                    <div
                      className="radial-progress text-secondary"
                      style={{ "--value": 100 }}
                      role="progressbar"
                    >
                      CON
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    id="clay"
                    className="ic flex flex-col"
                    onMouseEnter={() => toggleHoverEffect(["java"])}
                    onMouseLeave={() => toggleHoverEffect(["java"])}
                  >
                    <ReactSVG src={clay} />
                    <div className="text-center">Clay UI</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-cyan-400">Esto es git</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="nivel-3 flex justify-around">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    id="vite"
                    className="ic flex flex-col"
                    onMouseEnter={() =>
                      toggleHoverEffect(["js", "html", "react"])
                    }
                    onMouseLeave={() =>
                      toggleHoverEffect(["js", "html", "react"])
                    }
                  >
                    <ReactSVG src={vite} />
                    <div className="text-center">Vite</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-cyan-400">Esto es git</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    id="bootst"
                    className="ic flex flex-col"
                    onMouseEnter={() => toggleHoverEffect(["css", "html"])}
                    onMouseLeave={() => toggleHoverEffect(["css", "html"])}
                  >
                    <ReactSVG src={bootstrap} />
                    <div className="text-center">Bootstrap</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-cyan-400">Esto es git</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    id="tailwind"
                    className="ic flex flex-col"
                    onMouseEnter={() =>
                      toggleHoverEffect(["css", "html", "js", "react"])
                    }
                    onMouseLeave={() =>
                      toggleHoverEffect(["css", "html", "js", "react"])
                    }
                  >
                    <ReactSVG src={tailwind} />
                    <div className="text-center">Tailwind CSS</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-cyan-400">Esto es git</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    id="radix"
                    className="ic flex flex-col"
                    onMouseEnter={() =>
                      toggleHoverEffect(["css", "html", "js", "react"])
                    }
                    onMouseLeave={() =>
                      toggleHoverEffect(["css", "html", "js", "react"])
                    }
                  >
                    <ReactSVG src={radix} />
                    <div className="text-center">Radix</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-cyan-400">Esto es git</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    id="next"
                    className="ic flex flex-col"
                    onMouseEnter={() =>
                      toggleHoverEffect(["js", "html", "react"])
                    }
                    onMouseLeave={() =>
                      toggleHoverEffect(["js", "html", "react"])
                    }
                  >
                    <ReactSVG src={nextjs} />
                    <div className="text-center">Next.js</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-cyan-400">Esto es git</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    id="liferay"
                    className="ic flex flex-col"
                    onMouseEnter={() =>
                      toggleHoverEffect(["java", "freemarker", "clay"])
                    }
                    onMouseLeave={() =>
                      toggleHoverEffect(["java", "freemarker", "clay"])
                    }
                  >
                    <ReactSVG src={liferay} />
                    <div className="text-center">Liferay</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-cyan-400">Esto es git</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="nivel-4 flex justify-around">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    id="vitest"
                    className="ic flex flex-col"
                    onMouseEnter={() =>
                      toggleHoverEffect(["js", "html", "vite", "react"])
                    }
                    onMouseLeave={() =>
                      toggleHoverEffect(["js", "html", "vite", "react"])
                    }
                  >
                    <ReactSVG src={vitest} />
                    <div className="text-center">Vitest</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-cyan-400">Esto es git</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    id="bootswatch"
                    className="ic flex flex-col"
                    onMouseEnter={() =>
                      toggleHoverEffect(["css", "html", "bootst"])
                    }
                    onMouseLeave={() =>
                      toggleHoverEffect(["css", "html", "bootst"])
                    }
                  >
                    <ReactSVG src={bootswatch} />
                    <div className="text-center">Bootswatch</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-cyan-400">Esto es git</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    id="daisy"
                    className="ic flex flex-col"
                    onMouseEnter={() =>
                      toggleHoverEffect([
                        "css",
                        "html",
                        "js",
                        "react",
                        "tailwind",
                      ])
                    }
                    onMouseLeave={() =>
                      toggleHoverEffect([
                        "css",
                        "html",
                        "js",
                        "react",
                        "tailwind",
                      ])
                    }
                  >
                    <ReactSVG src={daisy} />
                    <div className="text-center">DaisyUI</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-cyan-400">Esto es git</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    id="shadcn"
                    className="ic flex flex-col"
                    onMouseEnter={() =>
                      toggleHoverEffect([
                        "css",
                        "html",
                        "js",
                        "react",
                        "tailwind",
                        "radix",
                      ])
                    }
                    onMouseLeave={() =>
                      toggleHoverEffect([
                        "css",
                        "html",
                        "js",
                        "react",
                        "tailwind",
                        "radix",
                      ])
                    }
                  >
                    <ReactSVG src={shadcn} />
                    <div className="text-center">Shadcn/ui</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-cyan-400">Esto es git</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </section>
  );
}
