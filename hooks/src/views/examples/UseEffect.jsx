import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calFatorial(num){
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calFatorial(n - 1) * n
}

function verifyPairOdd(num) {
    const n = parseInt(num)
    if(n % 2 === 0)
        return "Par";
    
    return "Ímpar";
}

const UseEffect = (props) => {

    //EX #01
    //quando eu altero number gera um efeito colateral em outro estado, ou sempre que gerar um efeito colateral dentro do componente
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)


    //primeiro parâmetro: função que será chamada quando for gerar este efeito colateral, segundo parâmetro (opcional): lista de dependências, do que dependo para calcular o fatorial? da alteração do number, logo number é passado no segundo parâmetro
    useEffect(function(){
        setFatorial(calFatorial(number))
    },[number])

    //setFatorial(calFatorial(number)) => isso nao pode, dá erro, não pode fazer dentro do corpo da funcão uma chamada de algo que vai alterar o estado, pq este trecho é responsável por renderizar o componente. Acaba por renderizar o componente de forma infinita


    useEffect(function(){
        if (fatorial > 1000000){
            document.title = "Eita!!!!"
        }
    },[fatorial])

    //Ex #02
    const [status, setStatus] = useState(false)

    useEffect(function(){
        setStatus(verifyPairOdd(number))
    },[number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

             <SectionTitle title="Exercício #01"/>
             <div className='center'>
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? "Não Existe" : fatorial}</span>
                </div>
                <input type="number" className="input" 
                value={number} 
                onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02"/>
            <div className="center">
               <span className="text">Status: </span>
                <span className="text red">{status}</span>               
            </div>
        </div>       
    )
}

export default UseEffect
