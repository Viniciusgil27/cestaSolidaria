import Logo from "../shared/Logo";
import LogoPrefeitura from "../shared/LogoPrefeitura";
import TopBar from "./TopBar";

export default function Header() {
    return (
        <div className="bg-[#F7F6F9]">
            <TopBar/>
            <div className="po bg-white h-auto">
                <div className="relative max-h-full">
                    <LogoPrefeitura/>

                </div>
            </div>
        </div>
    )
}