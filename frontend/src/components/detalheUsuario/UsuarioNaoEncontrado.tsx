import { IconDevicesPcOff } from '@tabler/icons-react'
import Link from 'next/link'

export interface UsuarioNaoEncontradoProps {
    semBotaVoltar?: boolean
}

export default function UsuarioNaoEncontrado(props: UsuarioNaoEncontradoProps) {
    return (
        <div className="flex-1 flex flex-col justify-center items-center text-orange-300">
            <IconDevicesPcOff size={180} stroke={0.5} />
            <span className="text-orange-300 font-light">Produto não encontrado</span>
            {!props.semBotaVoltar && (
                <Link href="/" className="button bg-orange-400 text-white mt-5">
                    Voltar
                </Link>
            )}
        </div>
    )
}
