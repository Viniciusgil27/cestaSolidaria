import Image from 'next/image'
import Link from 'next/link'

export default function LogoFooter() {
    return (
        <Link href="/" className="flex items-center py-2">
            <Image src="/logo.png" height={60} width={60} alt="logo" />
        </Link>
    )
}