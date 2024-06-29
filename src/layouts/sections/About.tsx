import foto from "../../assets/foto.jpg";
export default function About() {
  return (
    <section id="about" className="flex items-center">
      <div className="flex gap-20">
        <div className="text flex flex-col gap-4">
          <p>
            Tras casi 10 años trabajando en empleos donde desarrollé fuertes
            sentidos de responsabilidad, trbajo en equipo y adaptación constante, en 2020 encontré el campo donde mezclar estas habilidades
            con mi pasión por el aprendizaje continuo, la resolución creativa de problemas y los idiomas.
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
