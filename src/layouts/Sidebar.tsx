import NavList from "../components/NavList/NavList";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { useUserOptions } from "../store/useUserOptionsStore";
export default function Sidebar() {
  const { lang } = useUserOptions();

  return (
    <div id="sidebar" className="fixed h-screen w-96">
      <div className="info-container flex flex-col justify-center h-screen">
        <div className="info mb-28">
          <h1 className="text-5xl">
            <span className="dark:text-sky-300 text-orange-600 font-bold">
              N
            </span>
            icolás{" "}
            <span className="dark:text-sky-300 text-orange-600 font-bold">
              G
            </span>
            arín
          </h1>
          <h2 className="text-2xl mt-2">
            {
                lang == "es"
                  ? "Desarrollador"
                  : "Full Stack"
              }
            <span className="dark:text-sky-300 text-orange-600 font-bold">
              {
                lang == "es"
                  ? "Full Stack"
                  : "Developer"
              }
            </span>
          </h2>
          <div className="flex gap-10 mt-5">
            <a
              href="https://github.com/nicolasgarin"
              aria-label={
                lang == "es"
                  ? "Enlace a cuenta de Github"
                  : "Github account link"
              }
            >
              <FaGithub className="h-6 w-6 fill-gray hover:fill-orange-600 dark:hover:fill-sky-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/nicol%C3%A1s-gar%C3%ADn-a90b55202/"
              aria-label={
                lang == "es"
                  ? "Enlace a cuenta de Linkedin"
                  : "Linkedin account link"
              }
            >
              <FaLinkedin className="h-6 w-6 fill-gray hover:fill-orange-600 dark:hover:fill-sky-300" />
            </a>
            <a
              href="#"
              aria-label={
                lang == "es"
                  ? "Descargar Curriculum Vitae"
                  : "Download Curriculum Vitae"
              }
            >
              <MdOutlineContactPage className="h-6 w-6 fill-gray hover:fill-orange-600 dark:hover:fill-sky-300" />
            </a>
            <a
              href="mailto:nicolas.garin11@gmail.com"
              aria-label={
                lang == "es"
                  ? "Descargar Curriculum Vitae"
                  : "Download Curriculum Vitae"
              }
            >
              <MdMailOutline className="h-6 w-6 fill-gray hover:fill-orange-600 dark:hover:fill-sky-300" />
            </a>
          </div>
        </div>
        <NavList />
      </div>
    </div>
  );
}
