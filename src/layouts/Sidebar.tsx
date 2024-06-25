import NavList from "../components/NavList/NavList";

export default function Sidebar() {
  return (
    <div id="sidebar" className="fixed h-screen w-80 bg-cyan-300">
      <div className="info-container p-5 flex flex-col h-screen">
        <div className="info">
          Hola, mi nombre es Nicolás
          Soy un deasarrollador de front-end apasionado por la tecnología y el aprendizaje.
          Siempre al tanto de las nuevas tendencias en el mundo del desarrollo.
        </div>
        <NavList />
      </div>
    </div>
  );
}
