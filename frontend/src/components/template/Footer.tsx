import Logo from "../shared/Logo";
import LogoPrefeitura from "../shared/LogoPrefeitura";

export default function Footer() {
    return (
        <footer className="flex flex-col bg-black/90 text-white mt-10">
            <div className="container flex flex-col py-10 gap-10">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left gap-5 md:gap-0">
                    <Logo />
                    <div className="flex flex-col gap-1">
                        <span className="text-2xl font-bold text-white pb-2">Sobre</span>
                        <span className="text-sm">Quem Somos</span>
                        <span className="text-sm">Não Sei oque lá</span>
                        <span className="text-sm">Termos de Uso</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-2xl font-bold text-white pb-2">Contato</span>
                        <span className="text-sm">viny.gil27@gmail.store</span>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-1.5 justify-between">
                    <div className="flex flex-col md:flex-row items-center gap-1.5 text-sm white">
                        <div className="flex gap-1.5">
                            <span>Feito com</span>
                            <span>❤️</span>
                            <span>em {new Date().getFullYear()}</span>
                        </div>
                        <span className="hidden md:inline-block">-</span>
                        <span>Todos os direitos reservados</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}