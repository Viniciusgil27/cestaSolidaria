"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const banners = [
  "/banner1.jfif",
  "/banner2.jfif",
  "/banner3.jfif",
  "/banner4.jfif",
  "/banner5.jfif",
];

export default function Carrossel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Alterar o índice da imagem automaticamente a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Imagens */}
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={banner}
            alt={`Banner ${index + 1}`}
            layout="fill"
            objectFit="cover"
            priority={index === currentIndex} // Carregar a imagem visível primeiro
          />
        </div>
      ))}

      {/* Botões de Navegação */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? banners.length - 1 : prevIndex - 1
          )
        }
      >
        ◀
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)
        }
      >
        ▶
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
