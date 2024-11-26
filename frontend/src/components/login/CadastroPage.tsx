"use client";

import { useState } from "react";

export default function CadastroPage() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cep, setCep] = useState("");
  const [numeroCasa, setNumeroCasa] = useState("");
  const [pessoas1a12, setPessoas1a12] = useState(0);
  const [pessoas12a18, setPessoas12a18] = useState(0);
  const [pessoas18a60, setPessoas18a60] = useState(0);
  const [pessoasMais60, setPessoasMais60] = useState(0);
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      nome,
      telefone,
      rg,
      cpf,
      endereco,
      cep,
      numeroCasa,
      pessoas1a12,
      pessoas12a18,
      pessoas18a60,
      pessoasMais60,
      senha,
    });
  };

  return (
    <main className="flex flex-col justify-center w-max h-full bg-black border border-gray-300 rounded-lg shadow-lg p-8">
      <h1 className="text-2xl font-bold text-center text-slate-100 mb-6">Cadastro</h1>

      <form onSubmit={handleSubmit}>
        {/* Nome Completo */}
        <div className="mb-4">
          <label htmlFor="nome" className="block text-sm font-medium text-slate-100 mb-1">
            Nome Completo
          </label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome completo"
            className="w-full border border-gray-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Telefone */}
        <div className="mb-4">
          <label htmlFor="telefone" className="block text-sm font-medium text-slate-100 mb-1">
            Telefone
          </label>
          <input
            id="telefone"
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Digite seu telefone"
            className="w-full border border-gray-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* RG */}
        <div className="mb-4">
          <label htmlFor="rg" className="block text-sm font-medium text-slate-100 mb-1">
            RG
          </label>
          <input
            id="rg"
            type="text"
            value={rg}
            onChange={(e) => setRg(e.target.value)}
            placeholder="Digite seu RG"
            className="w-full border border-gray-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* CPF */}
        <div className="mb-4">
          <label htmlFor="cpf" className="block text-sm font-medium text-slate-100 mb-1">
            CPF
          </label>
          <input
            id="cpf"
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Digite seu CPF"
            className="w-full border border-gray-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Endereço */}
        <div className="mb-4">
          <label htmlFor="endereco" className="block text-sm font-medium text-slate-100 mb-1">
            Endereço
          </label>
          <input
            id="endereco"
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            placeholder="Digite seu endereço"
            className="w-full border border-gray-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* CEP */}
        <div className="mb-4">
          <label htmlFor="cep" className="block text-sm font-medium text-slate-100 mb-1">
            CEP
          </label>
          <input
            id="cep"
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            placeholder="Digite seu CEP"
            className="w-full border border-gray-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Número da Casa */}
        <div className="mb-4">
          <label htmlFor="numeroCasa" className="block text-sm font-medium text-slate-100 mb-1">
            Número da Casa
          </label>
          <input
            id="numeroCasa"
            type="text"
            value={numeroCasa}
            onChange={(e) => setNumeroCasa(e.target.value)}
            placeholder="Digite o número da sua casa"
            className="w-full border border-gray-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Quantas pessoas moram na casa */}
        <div className="mb-4">
          <label htmlFor="pessoas" className="block text-sm font-medium text-slate-100 mb-1">
            Quantas pessoas moram na casa?
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="pessoas1a12">1 a 12 anos</label>
              <input
                id="pessoas1a12"
                type="number"
                value={pessoas1a12}
                onChange={(e) => setPessoas1a12(parseInt(e.target.value))}
                min="0"
                max="12"
                className="w-full border border-gray-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="pessoas12a18">12 a 18 anos</label>
              <input
                id="pessoas12a18"
                type="number"
                value={pessoas12a18}
                onChange={(e) => setPessoas12a18(parseInt(e.target.value))}
                min="0"
                max="12"
                className="w-full border border-gray-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="pessoas18a60">18 a 60 anos</label>
              <input
                id="pessoas18a60"
                type="number"
                value={pessoas18a60}
                onChange={(e) => setPessoas18a60(parseInt(e.target.value))}
                min="0"
                max="12"
                className="w-full border border-gray-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="pessoasMais60">Mais de 60 anos</label>
              <input
                id="pessoasMais60"
                type="number"
                value={pessoasMais60}
                onChange={(e) => setPessoasMais60(parseInt(e.target.value))}
                min="0"
                max="12"
                className="w-full border border-gray-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Senha */}
        <div className="mb-6">
          <label htmlFor="senha" className="block text-sm font-medium text-slate-100 mb-1">
            Senha
          </label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Crie uma senha"
            className="w-full border border-gray-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Finalizar Cadastro
          </button>
      </form>
    </main>
  );
}
