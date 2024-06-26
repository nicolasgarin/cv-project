import { Link } from "react-scroll";
import useUserOptions from "../../context/UserOptionsContext";

export default function NavList() {
  const { lang } = useUserOptions();

  return (
    <div className="nav-bar flex flex-col gap-3 pr-20">
      <Link
        className="nav-link hover:cursor-pointer"
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <div className="nav-item">{lang == "es" ? "Sobre mi" : "About"}</div>
      </Link>
      <Link
        className="nav-link hover:cursor-pointer hover:text-cyan-300"
        activeClass="active"
        to="experience"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <div className="nav-item">
          {lang == "es" ? "Experiencia" : "Experience"}
        </div>
      </Link>
      <Link
        className="nav-link hover:cursor-pointer hover:text-cyan-300"
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <div className="nav-item">
          {lang == "es" ? "Proyectos" : "Projects"}
        </div>
      </Link>
      <Link
        className="nav-link hover:cursor-pointer hover:text-cyan-300"
        activeClass="active"
        to="techs"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <div className="nav-item">
          {lang == "es" ? "Tecnologías" : "Technologies"}
        </div>
      </Link>
    </div>
  );
}
