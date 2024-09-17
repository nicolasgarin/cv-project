import { BsBoxArrowUpRight } from "react-icons/bs";
import { useUserOptions } from "../../store/useUserOptionsStore";

export default function Experience() {
  const { lang } = useUserOptions();

  return (
    <section id="experience">
      <h2 className="mt-8 md:mt-0 text-center text-3xl text-orange-600 dark:text-sky-300 font-bold">
        {lang == "es" ? "Experiencia" : "Experience"}
      </h2>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical my-12">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
                className="text-orange-600 dark:text-sky-300"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-5">
            <time className="font-mono italic text-orange-600 dark:text-sky-300 font-bold">
              2024
            </time>
            <div className="text-lg font-black"></div>
            <ul className="text-balance">
              <li>
                {lang == "es"
                  ? "Jul - Desarrollador Semi Senior"
                  : "Jul - Semi Senior Developer"}
              </li>
              <li>May - Project Tracker App</li>
              <li>
                Feb -
                <a
                  target="_blank"
                  href="./certifications/meta_frontend_developer.pdf"
                  className="text-orange-600 dark:text-sky-300 hover:underline"
                >
                  Meta Front End Developer Certification{" "}
                  <BsBoxArrowUpRight className="inline h-4 w-4 ml-2 mb-1 fill-orange-600 dark:fill-sky-300" />
                </a>
              </li>
            </ul>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
                className="text-orange-600 dark:text-sky-300"
              />
            </svg>
          </div>
          <div className="timeline-end mb-5">
            <time className="font-mono italic text-orange-600 dark:text-sky-300 font-bold">
              2023
            </time>
            <ul className="text-balance">
              <li>
                {lang == "es"
                  ? "Oct - Proyectos Landing de Tailwind y Astro"
                  : "Oct - Tailwind and Astro Projects"}
              </li>
              <li>
                {lang == "es" ? "Abr" : "Apr"} -
                <a
                  target="_blank"
                  href="./certifications/liferay_cloud.png"
                  className="text-orange-600 dark:text-sky-300 hover:underline inline-flex items-center"
                >
                  Liferay Cloud Certification - Sao Paulo, Brasil
                  <BsBoxArrowUpRight className="inline h-4 w-4 ml-2 mb-1 fill-orange-600 dark:fill-sky-300" />
                </a>
              </li>
              <li>Mar - Flashcard App</li>
            </ul>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
                className="text-orange-600 dark:text-sky-300"
              />
            </svg>
          </div>
          <div className="timeline-start mb-5 md:text-end">
            <time className="font-mono italic text-orange-600 dark:text-sky-300 font-bold">
              2022
            </time>
            <ul className="text-balance">
              <li className="text-lg text-orange-600 dark:text-sky-300 font-bold">
                {lang == "es"
                  ? "Jun - Entrada a proyecto de cliente"
                  : "Jun - Client Project Entry"}
              </li>
              <li className="mb-2">
                {lang == "es"
                  ? "Proyecto de migración y mantenimiento de portal corporativo de importante empresa de telecomunicaciones en Uruguay"
                  : "Corporate portal migration and maintenance project for important telecommunications company in Uruguay"}
              </li>
              <li>Feb - { lang == "es" ? "Desarrollador Junior en Isa Software" : "Junior Developer at Isa Software"}</li>
              <li>Ene - Pokedex React App</li>
            </ul>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
                className="text-orange-600 dark:text-sky-300"
              />
            </svg>
          </div>
          <div className="timeline-end mb-5">
            <time className="font-mono italic text-orange-600 dark:text-sky-300 font-bold">
              2022 - { lang == "es" ? "Actualidad" : "Present"}
            </time>
            <div className="text-lg text-orange-600 dark:text-sky-300 font-bold">
              { lang == "es" ? "Desarrollador Frontend" : "Frontend Developer"} - Isa Software
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
                className="text-orange-600 dark:text-sky-300"
              />
            </svg>
          </div>
          <div className="timeline-start mb-5 md:text-end">
            <time className="font-mono italic text-orange-600 dark:text-sky-300 font-bold">
              2021
            </time>
            <div className="text-lg text-orange-600 dark:text-sky-300 font-bold">
              <a
                href="./certifications/jap.pdf"
                target="_blank"
                className="text-orange-600 dark:text-sky-300 hover:underline"
              >
                Jóvenes a programar
                <BsBoxArrowUpRight className="inline h-4 w-4 ml-2 mb-1 fill-orange-600 dark:fill-sky-300" />
              </a>
            </div>
            <div className="text-balance">
              { lang == "es" ? "Curso introductorio a la programación. Frontend: HTML, CSS, JavaScript, Bootstrap, Ruby, estructuras de datos y gestión de versiones (GitHub). Backend: Node Js, protocolos HTTP."
              : "Introduction to programming. Frontend: HTML, CSS, JavaScript, Bootstrap, Ruby, data structures and version control (GitHub). Backend: Node Js, HTTP protocols."}
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
                className="text-orange-600 dark:text-sky-300"
              />
            </svg>
          </div>
          <div className="timeline-end mb-5">
            <time className="font-mono italic text-orange-600 dark:text-sky-300 font-bold">
              2009 - 2022
            </time>
            <ul className="text-balance">
              <li>
                2018 - 2022 { lang == "es" ? "Subencargado en casa cambiaria" : "Office supervisor in exchange house"} - Avenida Servicios
                Financieros
              </li>
              <li>2014 - 2016 { lang == "es" ? "Operador en casa cambiaria" : "Office operator in exchange house"} - Global Exchange</li>
              <li>
                2012 - 2014 {lang == "es" ? "Supervisor sector cajas" : "Cashier supervisor"} - Macromercado Mayorista
              </li>
              <li>2009 - 2011 Cadete - Nodum Software</li>
            </ul>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
                className="text-orange-600 dark:text-sky-300"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end">
            <time className="font-mono italic text-orange-600 dark:text-sky-300 font-bold">
              2003 - 2008
            </time>
            <div className="text-lg text-orange-600 dark:text-sky-300 font-bold">
              Bachillerato en Ingeniería
            </div>
            Colegio Español Miguel de Cervantes Saavedra
          </div>
        </li>
      </ul>
    </section>
  );
}
