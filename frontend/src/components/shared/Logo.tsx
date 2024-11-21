import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-3 container py-2">
            <Image src="/LogoAlternativa.png" height={70} width={70} alt="logo" />
        </Link>
    )
}
