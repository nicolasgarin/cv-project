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
//import bootstrap from "../../assets/logos/bootstrap.svg";

export default function Techs() {
    return (
      <section id='techs'>
        <h3>Tecnologías y habilidades</h3>
        <h4>Tecnologías</h4>
        <div className="flex flex-col">
          <div className="nivel-1 flex justify-around">
            <div className="flex flex-col">
                <img className="h-12" src={git} />
                <div>Git</div>
            </div>
            <div className="flex flex-col">
                <img className="h-12" src={html} />
                <div>HTML 5</div>
            </div>
            <div className="flex flex-col">
                <img className="h-12" src={css} />
                <div>Css 3</div>
            </div>
            <div className="flex flex-col">
                <img className="h-12" src={js} />
                <div>Javascript</div>
            </div>
            <div className="flex flex-col">
                <img className="h-12" src={python} />
                <div>Python</div>
            </div>
            <div className="flex flex-col">
                <img className="h-12" src={java} />
                <div>Java</div>
            </div>
          </div>
          <div className="nivel-2 flex justify-around">
          <div className="flex flex-col">
                <img className="h-12" src={github} />
                <div>Github</div>
            </div>
            <div className="flex flex-col">
                <img className="h-12" src={figma} />
                <div>Figma</div>
            </div>
            <div className="flex flex-col">
                <img className="h-12" src={sass} />
                <div>Sass</div>
            </div>
            <div className="flex flex-col">
                <img className="h-12" src={react} />
                <div>React</div>
            </div>
            <div className="flex flex-col">
                <img className="h-12" src={ts} />
                <div>Typescript</div>
            </div>
            <div className="flex flex-col">
                <img className="h-12" src={jq} />
                <div>Jquery</div>
            </div>
            <div className="flex flex-col">
                <img className="h-12" src={freemarker} />
                <div>Freemarker</div>
            </div>
            <div className="flex flex-col">
                <img className="h-12" src={clay} />
                <div>Clay UI</div>
            </div>
          </div>
          <div className="nivel-3"></div>
          <div className="nivel-4"></div>
        </div>
        </section>
    )
  }
  
