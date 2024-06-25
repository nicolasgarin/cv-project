import NavList from "../components/NavList/NavList";

export default function Sidebar() {
  return (
    <div id="sidebar">
      <div className="info-container">
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
