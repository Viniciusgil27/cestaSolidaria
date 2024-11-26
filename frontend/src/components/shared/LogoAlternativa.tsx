import Image from 'next/image'
import Link from 'next/link'

export default function LogoAlternativa() {
    return (
        <Link href="/" className="flex items-center justify-center flex-1 py-2">
            <Image 
                src="/logoAlternativa.png" 
                alt="logo-alternativa"
                height={110} 
                width={110} 
                style={{ height: "auto", width: "auto" }} // Mantendo a proporção da imagem
            />
        </Link>
    )
}
