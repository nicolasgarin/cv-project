import useUserOptions from "../../context/UserOptionsContext";
import "./UserOptions.scss";
import esLogo from "../../assets/es.svg";
import enLogo from "../../assets/en.svg";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function UserOptions() {
  const { lang, toggleLang, theme, toggleTheme } = useUserOptions();
  return (
    <div id="user-options">
      <div className="button-container flex items-center justify-between gap-3">
        <div className="lang-container" onClick={toggleLang}>
          <img
            className="lang-logo"
            src={lang === "es" ? esLogo : enLogo}
            alt={lang === "es" ? "Bandera España" : "UK flag"}
          />
        </div>
        <div
          className="theme-container flex items-center justify-center"
          onClick={toggleTheme}
        >
          {theme === "light" ? <IoMoon /> : <IoSunny />}
        </div>
      </div>
    </div>
  );
}
