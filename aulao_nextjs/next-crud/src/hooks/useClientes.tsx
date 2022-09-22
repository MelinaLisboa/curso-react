import { useState, useEffect } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from "./useTabelaouForm"

export default function useClientes() {

    const repo: ClienteRepositorio = new ColecaoCliente()

    const {tabelaVisivel, exibirTabela, exibirFormulario} = useTabelaOuForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
  
    useEffect(obterTodos, [])
  
    function obterTodos() {
      repo.obterTodos().then(clientes => {
        setClientes(clientes)
        exibirTabela()
      })
    }
  
    function inserirCliente() {
      setCliente(Cliente.vazio())
      exibirFormulario()
    }
  
    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }
  
    async function excluirCliente(cliente: Cliente) {
      await repo.excluir(cliente)
      obterTodos()
    }
  
    async function salvarCliente(cliente: Cliente) {
      await repo.salvar(cliente)
      obterTodos()
    }

    return {
        cliente,
        clientes,
        inserirCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela,
    }
}