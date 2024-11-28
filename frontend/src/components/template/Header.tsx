import LoginHeader from "../login/LoginHeader";
import MenuHeader from "../menuSuspenso/MenuHeader";
import MenuSuspenso from "../menuSuspenso/MenuSuspenso";
import Logo from "../shared/Logo";
import LogoPrefeitura from "../shared/LogoPrefeitura";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <header className="flex items-center h-auto bg-black shadow">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div>
          <Logo />
        </div>
          <MenuHeader/>
        <div className="flex items-center">
          <LoginHeader />
        </div>
      </div>
    </header>
  );
}
