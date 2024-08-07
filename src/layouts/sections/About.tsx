import foto from "../../assets/foto.jpg";
import {useUserOptions} from "../../store/useUserOptionsStore";

export default function About() {
  const { lang } = useUserOptions();

  return (
    <section id="about" className="flex items-center justify-center">
      <div className="flex gap-10 items-center">
        <div className="text flex flex-col gap-4 max-w-[470px]">
          {lang == "es" ? (
            <p className="mb-4">
              Tras 10 años trabajando en empleos donde desarrollé fuertes
              sentidos de responsabilidad, trabajo en equipo y adaptación
              constante, en 2020 encontré el campo donde mezclar estas
              habilidades con mi pasión por el aprendizaje y la resolución
              creativa de problemas.
            </p>
          ) : (
            <p className="mb-4">
              After 10 years trabajando en empleos donde desarrollé fuertes
              sentidos de responsabilidad, trabajo en equipo y adaptación
              constante, en 2020 encontré el campo donde mezclar estas
              habilidades con mi pasión por el aprendizaje, la resolución
              creativa de problemas y los idiomas.
            </p>
          )}
          {lang == "es" ? (
            <p className="mb-4">
              Al día de hoy llevo más de 2 años trabajando profesionalmente como
              desarrollador frontend y creando paralelamente proyectos personales
              para aprender nuevas tecnologías y tendencias, especilalizandome
              actualmente en el ecosistema de React.
            </p>
          ) : (
            <p className="mb-4">
              Todey de hoy llevo más de 2 años trabajando profesionalmente como
              desarrollador frontend y creando paralelamente proyectos
              personales para aprender nuevas tecnologías y tendencias,
              especilalizandome actualmente en el ecosistema de React.
            </p>
          )}
          {lang == "es" ? (
            <p>
              Tengo experiencia trabajando tanto en frontend como en backend, y
              amplio conocimiento en los conceptos y aplicación de metodologías
              ágiles, accesibilidad y diseño responsive que las web modernas necesitan.
            </p>
          ) : (
            <p>
              I have experiencia trabajando tanto en frontend como en backend, y
              amplio conocimiento en los conceptos y aplicación de metodologías
              ágiles, accesibilidad y diseño responsive.
            </p>
          )}
        </div>
        <img className="rounded-full h-64" src={foto} />
      </div>
    </section>
  );
}
