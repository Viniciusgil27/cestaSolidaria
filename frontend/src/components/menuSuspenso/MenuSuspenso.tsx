"use client";

import { useState } from "react";

export default function MenuButton() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Função para manter o menu aberto
    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    // Função para fechar o menu
    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div 
            className="relative inline-block" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <button 
                className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
                Menu
            </button>
            {isOpen && (
                <div className="absolute z-10 bg-white shadow-md rounded-md mt-1">
                    <ul className="flex flex-col">
                        <li className="px-4 py-2 hover:bg-gray-200 text-black">
                            <a href="/">Home</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200 text-black">
                            <a href="paginas/detalhes-usuario">Detalhes do Usuário</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200 text-black">
                            <a href="/informacoes">Informações</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
