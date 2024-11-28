import DetalheUsuario from "@/components/detalheUsuario/DetalheUsuario"
import UsuarioNaoEncontrado from "@/components/detalheUsuario/UsuarioNaoEncontrado"


export default function PaginaDetalheUsuario() {


    return (
        <main className="flex flex-col justify-center w-full h-full  bg-black border border-gray-300 rounded-lg shadow-lg p-20">
            <DetalheUsuario />
        </main>
    )
}