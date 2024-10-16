import Image from 'next/image'
import Link from 'next/link'

export default function LogoPrefeitura() {
    return (
        <Link href="/" className="flex items-center gap-3 container">
            <Image src="/logo-prefeitura.png" width={180} height={0} alt="logo-prefeitura" className='max-w-full h-auto my-2'  />
        </Link>
    )
}
