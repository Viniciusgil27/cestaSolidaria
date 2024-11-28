import Carrossel from "./Carrossel";

export default function SobreNos(){
    return(
        <section className="container mx-auto py-20 px-5">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Sobre Nós</h2>
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Somos a Comunidade Batista Alternativa de Vida, um grupo de pessoas que acreditam na morte e
            ressurreição de Jesus Cristo. Nosso compromisso é viver com simplicidade e em amor mútuo, ajudando
            aqueles que mais precisam. Acreditamos que nosso trabalho de apoio, como a distribuição de cestas
            básicas, reflete nossa missão de servir com dedicação e sem esperar nada em troca.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Nosso propósito é, acima de tudo, fazer a diferença na vida das pessoas e mostrar o verdadeiro
            significado de ajudar ao próximo com o coração aberto.
          </p>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <Carrossel/>
          </div>
        </div>
      </section>
    )
}