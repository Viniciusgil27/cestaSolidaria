import Carrossel from "./Carrossel";

export default function SobreNos(){
    return(
        <section className="container mx-auto py-20 px-5">
        <h2 className="text-3xl font-bold text-center mb-8">Sobre Nós</h2>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <p className="text-gray-700 text-lg mb-4">
            O Cesta Solidária é uma iniciativa comunitária sem fins lucrativos, voltada para o apoio e auxílio das famílias de nossa região. 
            Nosso objetivo é fornecer cestas básicas para aqueles que enfrentam dificuldades financeiras, garantindo acesso a alimentos essenciais. 
            Trabalhamos em parceria com a Prefeitura, que nos disponibiliza as cestas, e contamos com a colaboração dos moradores locais, que ajudam a descarregar os caminhões e, 
            muitas vezes, a distribuir as cestas.
            </p>
            <p className="text-gray-700 text-lg mb-4">
            Acreditamos na força da solidariedade e no poder de uma comunidade unida. Além de fornecer cestas, procuramos criar um ambiente de apoio mútuo, onde cada gesto de ajuda faz a diferença para quem precisa. 
            Nosso compromisso é com a transparência, a eficiência e, principalmente, com o amor ao próximo.
            </p>
            <p className="text-gray-700 text-lg">
            Participe dessa corrente do bem! Ao se cadastrar, você não apenas recebe apoio, mas também pode ajudar a fortalecer nossa rede de solidariedade. Juntos, podemos fazer a diferença!
            </p>
          </div>
          <div className="lg:w-1/2">
            <Carrossel/>
          </div>
        </div>
      </section>
    )
}