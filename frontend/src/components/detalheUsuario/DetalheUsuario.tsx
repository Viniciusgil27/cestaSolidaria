"use client";

import { useEffect, useState } from "react";

export default function DetalheUsuario() {
  const [usuario, setUsuario] = useState<any>(null);

  useEffect(() => {
    // Recupera os dados do localStorage
    const dadosUsuario = localStorage.getItem("usuarioCadastro");
    if (dadosUsuario) {
      setUsuario(JSON.parse(dadosUsuario));
    }
  }, []);

  if (!usuario) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Nenhum dado encontrado.</h1>
      </div>
    );
  }

  return (
    <main className="flex flex-col justify-center items-center w-full h-full bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Detalhes do Usuário</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <p className="text-lg font-medium mb-2">
          <strong>Nome:</strong> {usuario.nome}
        </p>
        <p className="text-lg font-medium mb-2">
          <strong>Telefone:</strong> {usuario.telefone}
        </p>
        <p className="text-lg font-medium mb-2">
          <strong>RG:</strong> {usuario.rg}
        </p>
        <p className="text-lg font-medium mb-2">
          <strong>CPF:</strong> {usuario.cpf}
        </p>
        <p className="text-lg font-medium mb-2">
          <strong>Endereço:</strong> {usuario.endereco}
        </p>
        <p className="text-lg font-medium mb-2">
          <strong>CEP:</strong> {usuario.cep}
        </p>
        <p className="text-lg font-medium mb-2">
          <strong>Número da Casa:</strong> {usuario.numeroCasa}
        </p>
        <p className="text-lg font-medium mb-2">
          <strong>Pessoas (1 a 12 anos):</strong> {usuario.pessoas1a12}
        </p>
        <p className="text-lg font-medium mb-2">
          <strong>Pessoas (12 a 18 anos):</strong> {usuario.pessoas12a18}
        </p>
        <p className="text-lg font-medium mb-2">
          <strong>Pessoas (18 a 60 anos):</strong> {usuario.pessoas18a60}
        </p>
        <p className="text-lg font-medium mb-2">
          <strong>Pessoas (60+ anos):</strong> {usuario.pessoasMais60}
        </p>
      </div>
    </main>
  );
}
