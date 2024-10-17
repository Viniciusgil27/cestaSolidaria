import MenuSuspenso from "../menuSuspenso/MenuSuspenso";
import Logo from "../shared/Logo";
import LogoPrefeitura from "../shared/LogoPrefeitura";
import TopBar from "./TopBar";

export default function Header() {
return (
    <header className="flex items-center h-20 bg-white shadow">
        <div className="container mx-auto flex justify-between items-center px-4">
            <Logo />
            <MenuSuspenso />
        </div>
    </header>
)

}