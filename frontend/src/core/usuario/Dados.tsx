import Endereco from "./Endereco"

export default interface Dados{
    id: number
    nome: string
    cpf: string
    parentes: string
    telefone: string
    endereco: Endereco
}