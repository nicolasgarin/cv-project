import foto from "../../assets/foto.jpg";
export default function About() {
  return (
    <section id="about" className="flex items-center justify-center">
      <div className="flex gap-10 items-center">
        <div className="text flex flex-col gap-4 max-w-[470px]">
          <p className="mb-8">
            Tras 10 años trabajando en empleos donde desarrollé fuertes
            sentidos de responsabilidad, trbajo en equipo y adaptación constante, en 2020 encontré el campo donde mezclar estas habilidades
            con mi pasión por el aprendizaje continuo, la resolución creativa de problemas y los idiomas.
          </p>
          <p>
            Al día de hoy llevo más de 2 años trabajando profesionalmente como
            desarrollador frontend y creando paralelamente proyectos personales
            para aprender nuevas tecnologías y tendencias, especilalizandome
            actualmente en el mundo de React.
          </p>
          <p>Tengo experiencia trabajando tanto en frontend como en backend, y amplio conocimiento en los conceptos
            y aplicación de metodologías ágiles, accesibilidad y diseño responsive.
          </p>
        </div>
        <img className="rounded-full h-64" src={foto} />
      </div>
    </section>
  );
}
