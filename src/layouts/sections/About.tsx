import foto from "../../assets/placeholder.svg";
export default function About() {
  return (
    <section id="about" className="flex align-center">
      <div className="flex gap-20">
        <div className="text">
          <p>
            Tras casi 10 años trabajando en empleos donde desarrollé fuertes
            sentidos de responsabilidad, trbajo en equipo y resolución de
            problemas, en 2020 encontré el campo donde mezclar estas habilidades
            con mi pasión por aprendizaje continuo, idiomas y desarrollo de
            ideas creativas
          </p>
          <p>
            Al día de hoy llevo más de 2 años trabajando profesionalmente como
            desarrollador frontend y creando paralelamente proyectos personales
            para aprender nuevas tecnologías y tendencias, especilalizandome
            actualmente en el mundo de React.
          </p>
        </div>
        <img className="rounded-full h-64" src={foto} />
      </div>
    </section>
  );
}
