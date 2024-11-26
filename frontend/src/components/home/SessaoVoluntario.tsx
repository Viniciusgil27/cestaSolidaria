export default function SessaoVoluntario(){
    return (
        <section className="bg-white text-gray-800 p-8 rounded-lg shadow-md mt-10">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4 text-green-600">Ajude-nos a Fazer a Diferença!</h2>
                <p className="mb-6 text-gray-700">
                    Deseja participar ativamente dessa corrente do bem? Preencha o formulário abaixo e se candidate como voluntário para ajudar na descarga do caminhão. Sua força e disposição são essenciais!
                </p>

                <form className="max-w-lg mx-auto space-y-4">
                    <div className="text-left">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                            Nome completo
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Digite seu nome"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>

                    <div className="text-left">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Digite seu e-mail"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>

                    <div className="text-left">
                        <label htmlFor="availability" className="block text-sm font-medium text-gray-600">
                            Disponibilidade
                        </label>
                        <textarea
                            id="availability"
                            name="availability"
                            placeholder="Conte-nos sobre sua disponibilidade (dias e horários)"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            rows={4}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white rounded-lg py-2 hover:bg-green-700 transition"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
}