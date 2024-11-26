import Image from 'next/image'

export default function Instrucoes(){
    return(
        <section className="bg-white py-20">
            <div className="container mx-auto px-5">
              <h2 className="text-3xl font-bold text-center mb-8">Como Funciona</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <Image src="/register-icon.svg" alt="Cadastro" width={80} height={80} />
                  <h3 className="text-xl font-bold mt-4">Cadastro</h3>
                  <p className="text-gray-600">Cadastre-se no nosso sistema para garantir sua participação no programa.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Image src="/whatsapp-icon.svg" alt="Grupo de WhatsApp" width={80} height={80} />
                  <h3 className="text-xl font-bold mt-4">Grupo de WhatsApp</h3>
                  <p className="text-gray-600">Após o cadastro, você será adicionado ao nosso grupo de WhatsApp para receber informações sobre as datas e locais de retirada.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Image src="/delivery-icon.svg" alt="Atenção às Datas" width={80} height={80} />
                  <h3 className="text-xl font-bold mt-4">Datas de Retirada</h3>
                  <p className="text-gray-600">Fique atento às datas de retirada das cestas, que serão informadas com antecedência no grupo.</p>
                </div>
              </div>
            </div>
        </section>
    )
}
