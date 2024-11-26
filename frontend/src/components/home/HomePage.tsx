import Image from 'next/image'
import Link from 'next/link'
import Carrossel from './Carrossel';
import SobreNos from './SobreNos';
import BoasVindas from './BoasVindas';
import Instrucoes from './Instrucoes';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-100 flex-1">
          {/* Hero Section */}
            <BoasVindas/>
          {/* About Section */}
            <SobreNos/>    
          {/* Features Section */}
          <Instrucoes/>
          {/* Call to Action */}
          <section className="bg-blue-400 text-white text-center p-8 rounded-lg shadow-md my-10 mx-5">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4">Junte-se a Nós!</h2>
                <p className="mb-6">
                    Que tal nos ajudar a descarregar o caminhão de cestas básicas? 
                    Além de contribuir para a comunidade, você tem a vantagem de retirar sua cesta no mesmo dia. 
                    Faça parte desse movimento solidário!
                </p>
                {/* Link sem o <a> */}
                <Link
                    href="/voluntario"
                    className="bg-white text-blue-500 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
                >
                    Quero Ajudar
                </Link>
            </div>
        </section>
        </div>
      );
    
}
