import Logo from "../shared/Logo";
import LogoPrefeitura from "../shared/LogoPrefeitura";

export default function Footer() {
    return (
        <footer className="bg-black/90 text-white mt-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between py-10">
                {/* Bloco Contato no canto esquerdo */}
                <div className="flex flex-col gap-1 text-left">
                    <span className="text-2xl font-bold">Contato</span>
                    <span className="text-sm">viny.gil27@gmail.store</span>
                </div>
    
                {/* Bloco "Feito com ❤️" no canto direito */}
                <div className="flex flex-col md:flex-row items-center justify-end text-sm">
                    <div className="flex gap-1.5">
                        <span>Feito com</span>
                        <span>❤️</span>
                        <span>em {new Date().getFullYear()}</span>
                    </div>
                    <span className="hidden md:inline-block mx-2">-</span>
                    <span>Todos os direitos reservados</span>
                </div>
            </div>
        </footer>
    );
    
}