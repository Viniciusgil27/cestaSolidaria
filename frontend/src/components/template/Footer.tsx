import LogoFooter from "../shared/LogoFooter";

export default function Footer() {
    return (
        <footer className="bg-black text-white mt-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-2">
                {/* Logo e Contato no lado esquerdo */}
                <div className="flex items-center gap-4">
                    <LogoFooter />
                    <div className="flex flex-col text-left ml-5">
                        <span className="text-lg font-bold">Contato</span>
                        <span className="text-sm">viny.gil27@gmail.store</span>
                    </div>
                </div>

                {/* Bloco "Feito com ❤️" no canto direito */}
                <div className="flex flex-col md:flex-row items-center justify-end text-sm mt-4 md:mt-0">
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
