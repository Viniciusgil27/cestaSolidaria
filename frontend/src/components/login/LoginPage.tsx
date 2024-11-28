"use client";

import { useState } from "react";
import LogoAlternativa from "../shared/LogoAlternativa";
import Link from "next/link"; // Importando o Link para usar em navegação

export default function LoginPage() {
    // Estado para os campos de login e senha
    const [login, setLogin] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    return (
        <main className="bg-black flex flex-col justify-center items-center h-max w-96 rounded-lg">
            <div className="flex flex-col justify-center my-6">
                <LogoAlternativa />
            </div>
            {/* Campo de Login */}
            <div className="mb-4">
                <label htmlFor="login" className="block text-sm font-medium text-slate-100 mb-1">
                    Login
                </label>
                <input
                    id="login"
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    placeholder="Digite seu login"
                    className="w-full border border-gray-300 rounded-lg p-3 mb-5 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            {/* Campo de Senha */}
            <div className="mb-6">
                <label htmlFor="senha" className="block text-sm font-medium text-slate-100 mb-1">
                    Senha
                </label>
                <input
                    id="senha"
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Digite sua senha"
                    className="w-full border border-gray-300 rounded-lg p-3 mb-8 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            {/* Botão de Login */}
            <button
                type="button"
                className="w-2/3 bg-blue-600 text-white rounded-lg py-3 mb-5 hover:bg-blue-700 transition"
            >
                Entrar
            </button>
            {/* Link para Cadastro */}
            <div className="mt-4 text-center text-slate-300 mb-8">
                <span>Não tem cadastro?</span>
                <div>
                    <Link href="/cadastro" className="text-blue-500 hover:underline">
                        Cadastre-se aqui
                    </Link>
                </div>
            </div>

        </main>
    );
}
