import Image from 'next/image'
export default function BoasVindas(){
    return(
        <section className="relative bg-blue-400 text-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center py-20 px-5">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl font-bold mb-4">Bem-vindo à Cesta Solidária</h1>
            <p className="text-lg mb-6">
            Aqui, trabalhamos para levar amor e apoio a quem mais precisa. Este espaço foi criado para facilitar o processo de cadastro e retirada de cestas básicas, ajudando nossa missão de servir à comunidade de forma organizada e eficiente.
            </p>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/logo.png"
              alt="Imagem solidária"
              width={300}
              height={100}
              className="mx-auto"
            />
          </div>
        </div>
      </section>
    )
}