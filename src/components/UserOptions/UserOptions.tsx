import useUserOptions from "../../context/UserOptionsContext";
import esLogo from "../../assets/es.svg";
import enLogo from "../../assets/en.svg";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function UserOptions() {
  const { lang, toggleLang, theme, toggleTheme } = useUserOptions();
  return (
    <div id="user-options" className="p-4 fixed top-0 right-0">
      <div className="flex items-center justify-between gap-3">
        <div onClick={toggleLang}>
          <img
            className="h-6 w-6 hover:cursor-pointer"
            src={lang === "es" ? esLogo : enLogo}
            alt={lang === "es" ? "Bandera España" : "UK flag"}
          />
        </div>
        <div
          className="flex items-center justify-center h-6 w-6 bg-cyan-700 rounded-full border-2 border-white hover:cursor-pointer"
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <IoMoon className="fill-white" />
          ) : (
            <IoSunny className="fill-white" />
          )}
        </div>
      </div>
    </div>
  );
}
