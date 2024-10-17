import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
    return (
        <main className="flex items-center justify-center py-10 bg-white border border-gray-500 rounded-xl relative p-4 min-h-96 my-10 mx-auto w-full max-w-4xl">
            <h1 className="flex flex-col gap-20 container py-10 border border-gray-500 p-4 h-96 text-black">
                Home Page
            </h1>
        </main>
    )
    
}
