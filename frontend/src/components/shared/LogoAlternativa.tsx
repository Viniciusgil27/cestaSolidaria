import Image from 'next/image'
import Link from 'next/link'

export default function LogoAlternativa() {
    return (
        <Link href="/" className="flex items-center justify-center gap-3 container py-2">
            <Image src="/logoAlternativa.png" height={150} width={150} alt="logo-alternativa" />
        </Link>
    )
}
