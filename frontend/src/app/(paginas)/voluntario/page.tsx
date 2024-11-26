export default function PaginaVoluntario(){
    return (
        <section className="bg-white text-gray-800 p-8 rounded-lg shadow-md mt-10">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4 text-blue-500">Ajude-nos a Fazer a Diferença!</h2>
                <p className="mb-4 text-gray-700">
                    Voluntariar-se para ajudar na descarga do caminhão é um ato de amor pela comunidade. 
                    Além disso, você poderá retirar a cesta básica da sua família no mesmo dia, sem precisar esperar pela retirada geral.
                </p>
                <p className="mb-6 text-gray-700">
                    Preencha o formulário abaixo e participe dessa corrente solidária. Sua ajuda é muito importante!
                </p>

                <form className="max-w-lg mx-auto space-y-4">
                    {/* Nome */}
                    <div className="text-left">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                            Nome completo
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Digite seu nome"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Telefone */}
                    <div className="text-left">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                            Telefone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Digite seu telefone"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
}