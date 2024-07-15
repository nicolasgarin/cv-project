import useUserOptions from "../../context/UserOptionsContext";
import esLogo from "../../assets/es.svg";
import enLogo from "../../assets/en.svg";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

export default function UserOptions() {
  const { lang, toggleLang } = useUserOptions();
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
        <ThemeSwitch />

      </div>
    </div>
  );
}
