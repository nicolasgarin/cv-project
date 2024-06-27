import bootstrap from "../../assets/logos/bootstrap.svg";

export default function Techs() {
    return (
      <section id='techs'>
        <h3>Tecnologías y habilidades</h3>
        <h4>Tecnologías</h4>
        <div className="flex">
            <div className="flex flex-column justify-center">
                <img className="h-12" src={bootstrap} />
                <div>Bootstrap</div>
            </div>
        </div>
        </section>
    )
  }
  
