import { Link } from "react-scroll";

export default function NavList() {
  return (
    <div className="nav-bar flex flex-col">
      <Link
        className="nav-link hover:cursor-pointer"
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <div className="nav-item">Sobre mi</div>
      </Link>
      <Link
        className="nav-link hover:cursor-pointer"
        activeClass="active"
        to="experience"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <div className="nav-item">Experiencia</div>
      </Link>
      <Link
        className="nav-link hover:cursor-pointer"
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <div className="nav-item">Proyectos</div>
      </Link>
      <Link
        className="nav-link hover:cursor-pointer"
        activeClass="active"
        to="techs"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <div className="nav-item">Tecnologías</div>
      </Link>
    </div>
  );
}
