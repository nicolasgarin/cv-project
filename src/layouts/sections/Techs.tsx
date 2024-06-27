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

export default function Techs() {
  return (
    <section id="techs">
      <div className="flex flex-col justify-center h-full">
      <h3>Tecnologías</h3>
      <div className="flex flex-col gap-6">
        <div className="nivel-1 flex justify-around">
		<div className="ic flex flex-col">
            <img className="h-12" src={git} />
            <div>Git</div>
          </div>
          <div className="ic flex flex-col">
            <img className="h-12" src={html} />
            <div>HTML 5</div>
          </div>
          <div className="ic flex flex-col">
            <img className="h-12" src={css} />
            <div>Css 3</div>
          </div>
          <div className="ic flex flex-col">
            <img className="h-12" src={js} />
            <div>Javascript</div>
          </div>
          <div className="ic flex flex-col">
            <img className="h-12" src={python} />
            <div>Python</div>
          </div>
          <div className="ic flex flex-col">
            <img className="h-12" src={java} />
            <div>Java</div>
          </div>
		  <div className="ic flex flex-col">
            <img className="h-12" src={mysql} />
            <div>Mysql</div>
          </div>
        </div>
        <div className="nivel-2 flex justify-around">
		<div className="ic flex flex-col">
            <img className="h-12" src={github} />
            <div>Github</div>
          </div>
          <div className="ic flex flex-col">
            <img className="h-12" src={figma} />
            <div>Figma</div>
          </div>
          <div className="ic flex flex-col">
            <img className="h-12" src={sass} />
            <div>Sass</div>
          </div>
          <div className="ic flex flex-col">
            <img className="h-12" src={react} />
            <div>React</div>
          </div>
          <div className="ic flex flex-col">
            <img className="h-12" src={ts} />
            <div>Typescript</div>
          </div>
          <div className="ic flex flex-col">
            <img className="h-12" src={jq} />
            <div>Jquery</div>
          </div>
          <div className="ic flex flex-col">
            <img className="h-12" src={freemarker} />
            <div>Freemarker</div>
          </div>
          <div className="ic flex flex-col">
            <img className="h-12" src={clay} />
            <div>Clay UI</div>
          </div>
        </div>
        <div className="nivel-3 flex justify-around">
          <div className="ic flex flex-col">
            <img className="h-12" src={vite} />
            <div>Vite</div>
          </div>
          <div className="ic flex flex-col">
            <img className="h-12" src={bootstrap} />
            <div>Bootstrap</div>
          </div>
          <div className="ic flex flex-col">
            <img className="h-12" src={tailwind} />
            <div>Tailwind CSS</div>
          </div>
		  <div className="ic flex flex-col">
            <img className="h-12" src={radix} />
            <div>Radix</div>
          </div>
		  <div className="ic flex flex-col">
            <img className="h-12" src={nextjs} />
            <div>Next.js</div>
          </div>
          <div className="ic flex flex-col">
            <img className="h-12" src={liferay} />
            <div>Liferay</div>
          </div>
        </div>
        <div className="nivel-4 flex justify-around">
          <div className="ic flex flex-col">
            <img className="h-12" src={vitest} />
            <div>Vitest</div>
          </div>
          <div className="ic flex flex-col">
            <img className="h-12" src={bootswatch} />
            <div>Bootswatch</div>
          </div>
          <div className="ic flex flex-col">
            <img className="h-12" src={daisy} />
            <div>DaisyUI</div>
          </div>
          <div className="ic flex flex-col">
            <img className="h-12" src={shadcn} />
            <div>Shadcn/ui</div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
