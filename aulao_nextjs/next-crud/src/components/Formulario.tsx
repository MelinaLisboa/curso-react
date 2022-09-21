import { useState } from "react"
import Entrada from "./Entrada"
import Botao from "./Botao"
import Cliente from "../core/Cliente"

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void //função que não recebe parâmetro e não retorna nada
}

export default function Formulario(props: FormularioProps) {

    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return(
        <div>
            {id ? (
                <Entrada
                    somenteLeitura
                    texto="Código" 
                    valor={id}
                    className="mb-4"
                    />    
            ) : false}            
            <Entrada 
                texto="Nome" 
                valor={nome}
                valorMudou={setNome}
                className="mb-4"
            />
            <Entrada 
                texto="Idade" 
                valor={idade} 
                tipo="number"
                valorMudou={setIdade}
            />
            <div className="flex justify-end mt-7">
                <Botao cor="blue" className="mr-2" 
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="gray"
                onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}