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
  const [confirmarSenha, setConfirmarSenha] = useState("");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(senha == ""){
      alert("Teste");
      return;
    }
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem. Por favor, verifique.");
      return;
    }

    const usuario = {
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
    };
    // Salvando no localStorage
    localStorage.setItem("usuarioCadastro", JSON.stringify(usuario));

    alert("Cadastro salvo com sucesso!");
    
    window.location.href = "/home";


  };

  return (
    <main className="flex flex-col justify-center items-center h-full bg-white p-8 rounded-lg">
      <h1 className="text-2xl font-bold text-center text-black mb-6">
        Cadastro
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-3xl"
      >
        {/* Nome Completo */}
        <div className="sm:col-span-1">
          <label htmlFor="nome" className="block text-sm font-medium text-black">
            Nome Completo
          </label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome completo"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        {/* Telefone */}
        <div className="sm:col-span-1">
          <label
            htmlFor="telefone"
            className="block text-sm font-medium text-black"
          >
            Telefone
          </label>
          <input
            id="telefone"
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Digite seu telefone"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        {/* RG */}
        <div className="sm:col-span-1">
          <label htmlFor="rg" className="block text-sm font-medium text-black">
            RG
          </label>
          <input
            id="rg"
            type="text"
            value={rg}
            onChange={(e) => setRg(e.target.value)}
            placeholder="Digite seu RG"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        {/* CPF */}
        <div className="sm:col-span-1">
          <label htmlFor="cpf" className="block text-sm font-medium text-black">
            CPF
          </label>
          <input
            id="cpf"
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Digite seu CPF"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        {/* CEP */}
        <div className="sm:col-span-1">
          <label htmlFor="cep" className="block text-sm font-medium text-black">
            CEP
          </label>
          <input
            id="cep"
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            placeholder="Digite seu CEP"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        {/* Endereço */}
        <div className="sm:col-span-1">
          <label
            htmlFor="endereco"
            className="block text-sm font-medium text-black"
          >
            Endereço
          </label>
          <input
            id="endereco"
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            placeholder="Digite seu endereço"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        {/* Número da Casa */}
        <div className="sm:col-span-2">
          <label
            htmlFor="numeroCasa"
            className="block text-sm font-medium text-black"
          >
            Número da Casa
          </label>
          <input
            id="numeroCasa"
            type="text"
            value={numeroCasa}
            onChange={(e) => setNumeroCasa(e.target.value)}
            placeholder="Número da sua casa"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        {/* Pessoas */}
        <div className="sm:col-span-2 grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="pessoas1a12"
              className="block text-sm font-medium text-black"
            >
              1 a 12 anos
            </label>
            <input
              id="pessoas1a12"
              type="number"
              value={pessoas1a12}
              onChange={(e) => setPessoas1a12(parseInt(e.target.value))}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </div>
          <div>
            <label
              htmlFor="pessoas12a18"
              className="block text-sm font-medium text-black"
            >
              12 a 18 anos
            </label>
            <input
              id="pessoas12a18"
              type="number"
              value={pessoas12a18}
              onChange={(e) => setPessoas12a18(parseInt(e.target.value))}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </div>
        </div>
        <div className="sm:col-span-2 grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="pessoas18a60"
              className="block text-sm font-medium text-black"
            >
              18 a 60 anos
            </label>
            <input
              id="pessoas18a60"
              type="number"
              value={pessoas18a60}
              onChange={(e) => setPessoas18a60(parseInt(e.target.value))}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </div>
          <div>
            <label
              htmlFor="pessoasMais60"
              className="block text-sm font-medium text-black"
            >
              mais de 60 anos
            </label>
            <input
              id="pessoasMais60"
              type="number"
              value={pessoasMais60}
              onChange={(e) => setPessoasMais60(parseInt(e.target.value))}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </div>
        </div>

        {/* Senha */}
        <div className="sm:col-span-2">
          <label
            htmlFor="senha"
            className="block text-sm font-medium text-black"
          >
            Senha
          </label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Crie uma senha"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="confirmarSenha"
            className="block text-sm font-medium text-black"
          >
            Confirmar Senha
          </label>
          <input
            id="confirmarSenha"
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            placeholder="Confirme sua senha"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>
        <button
          type="submit"
          className="sm:col-span-2 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Finalizar Cadastro
        </button>
      </form>
    </main>
  );
}
