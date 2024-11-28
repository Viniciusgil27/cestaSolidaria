export default function MenuHeader() {
    return (
        <div className="flex mr-auto items-center gap-10 text-white font-bold h-14">
            {/* Link para Início */}
            <div>
                <a
                    href="/"
                    className="hover:text-blue-400 hover:translate-y-1 transition-all duration-200 block"
                >
                    Início
                </a>
            </div>

            {/* Link para Detalhe do Usuário */}
            <div>
                <a
                    href="/detalhe-usuario"
                    className="hover:text-blue-400 hover:translate-y-1 transition-all duration-200 block"
                >
                    Detalhe do Usuário
                </a>
            </div>

            {/* Link para Informações */}
            <div>
                <a
                    href="/informacoes"
                    className="hover:text-blue-400 hover:translate-y-1 transition-all duration-200 block"
                >
                    Informações
                </a>
            </div>

            {/* Link para Seja Voluntário */}
            <div>
                <a
                    href="/voluntario"
                    className="hover:text-blue-400 hover:translate-y-1 transition-all duration-200 block"
                >
                    Seja Voluntário
                </a>
            </div>
        </div>

    );
}