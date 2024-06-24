import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

export default function Sidebar() {
  return (
    <div id="sidebar">
      <div className="container">Hola
      <div className="nav-bar">
        <Link
          className="nav-item"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          About
        </Link>
        <Link
          className="nav-item"
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Experience
        </Link>
        <Link
          className="nav-item"
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Projects
        </Link>
        <Link
          className="nav-item"
          activeClass="active"
          to="techs"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Techs
        </Link>
      </div>
    </div>
    </div>
  );
}
