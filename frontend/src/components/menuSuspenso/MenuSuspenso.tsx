"use client";

import { useState } from "react";

export default function MenuButton() {
    const [isOpen, setIsOpen] = useState(false);

    // Abre o menu quando o mouse entra no botão
    const handleMouseEnterButton = () => {
        setIsOpen(true);
    };

    // Fecha o menu quando o mouse sai do botão ou do menu
    const handleMouseLeaveMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block">
            {/* Evento de mouse no botão */}
            <button
                onMouseEnter={handleMouseEnterButton}
                
                className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
                Menu
            </button>
            
            {isOpen && (
                <div
                    className={`absolute z-10 bg-white shadow-md rounded-md mt-1 transform transition-transform duration-300 ease-in-out scale-100 opacity-100`}
                    onMouseLeave={handleMouseLeaveMenu} // Fecha o menu ao sair do menu
                >
                    <ul className="flex flex-col">
                        <li className="px-4 py-2 hover:bg-gray-200 text-black">
                            <a href="/">Home</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200 text-black">
                            <a href="/detalhe-usuario/">Detalhes do Usuário</a>
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
