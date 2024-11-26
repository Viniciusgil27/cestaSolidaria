import Link from 'next/link';

export default function LoginHeader() {
  return (
    <div className="flex items-center space-x-4">
      {/* Botão de Login */}
      <Link href="/login" className="px-6 py-2 text-white bg-transparent border-2 border-white rounded-full text-sm hover:bg-white hover:text-black transition-all duration-200">
          Fazer Login
      </Link>
    </div>
  );
}
