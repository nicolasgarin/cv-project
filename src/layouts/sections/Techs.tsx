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
  /*
  function addHoverEffect(elements: string[]) {
    for (var e in elements) {
      document.getElementById('#' + e).classList.add('effect')
    }
  }
  */

  return (
    <section id="techs" className="flex items-center">
      <div className="flex flex-col justify-center w-full">
        <h3>Tecnologías</h3>
        <div className="flex flex-col gap-6">
          <div className="nivel-1 flex justify-around">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div id="git" className="ic flex flex-col">
                    <ReactSVG src={git} />
                    <div className="text-center">Git</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-cyan-400">
                    <div
                      className="radial-progress text-primary"
                      style={{
                        "--value": 70,
                        "--size": "12rem",
                        "--thickness": "2px",
                      }}
                      role="progressbar"
                    ></div>
                  </p>
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
                <TooltipContent className="bg-slate-500">
                  <p className="text-black">eto es html</p>
                  <p className="text-black">eto es html</p>
                  <p className="text-black">eto es html</p>
                  <p className="text-black">eto es html</p>
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
                <TooltipContent>
                  <p className="text-cyan-400">Esto es git</p>
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
                <TooltipContent>
                  <p className="text-cyan-400">Esto es git</p>
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
                <TooltipContent>
                  <p className="text-cyan-400">Esto es git</p>
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
                <TooltipContent>
                  <p className="text-cyan-400">Esto es git</p>
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
                <TooltipContent>
                  <p className="text-cyan-400">Esto es git</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="nivel-2 flex justify-around">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div id="github" className="ic flex flex-col">
                    <ReactSVG src={github} />
                    <div className="text-center">Github</div>
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
                  <div className="ic flex flex-col">
                    <ReactSVG src={figma} />
                    <div className="text-center">Figma</div>
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
                  <div className="ic flex flex-col">
                    <ReactSVG src={sass} />
                    <div className="text-center">Sass</div>
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
                  <div className="ic flex flex-col">
                    <ReactSVG src={react} />
                    <div className="text-center">React</div>
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
                  <div className="ic flex flex-col">
                    <ReactSVG src={ts} />
                    <div className="text-center">Typescript</div>
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
                  <div className="ic flex flex-col">
                    <ReactSVG src={jq} />
                    <div className="text-center">Jquery</div>
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
                  <div id="freemarker" className="ic flex flex-col">
                    <ReactSVG src={freemarker} />
                    <div className="text-center">Freemarker</div>
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
                  <div id="clay" className="ic flex flex-col">
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
                  <div className="ic flex flex-col">
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
                  <div id="bootst" className="ic flex flex-col">
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
                  <div className="ic flex flex-col">
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
                  <div className="ic flex flex-col">
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
                  <div className="ic flex flex-col">
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
                  <div id="liferay" className="ic flex flex-col">
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
                  <div className="ic flex flex-col">
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
                  <div className="ic flex flex-col">
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
                  <div className="ic flex flex-col">
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
                  <div className="ic flex flex-col">
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
