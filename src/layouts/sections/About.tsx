import foto from "../../assets/foto.jpg";
import { useUserOptions } from "../../store/useUserOptionsStore";

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
              desarrollador frontend y creando paralelamente proyectos
              personales para aprender nuevas tecnologías y tendencias,
              especilalizandome actualmente en el ecosistema de React.
            </p>
          ) : (
            <p className="mb-4">
              At the date, I have been working professionally as a frontend
              developer and in parallel creating personal projects to learn new
              technologies and trends,currently specializing myself in the React
              ecosystem.
            </p>
          )}
          {lang == "es" ? (
            <p>
              Mis mayores capacidades son la facilidad de adaptación y
              aprendizaje de cualquier tecnología que sea necesaria para
              potenciar mi desarrollo, así como el desenvolvimiento en equipos
              de trabajo colavorativos
            </p>
          ) : (
            <p>
              My greatest capabilities are the ease of adaptation and learning
              of any technology that is necessary to enhance my development, as
              well as development in collaborative work teams.
            </p>
          )}
        </div>
        <img className="rounded-full h-64" src={foto} />
      </div>
    </section>
  );
}
