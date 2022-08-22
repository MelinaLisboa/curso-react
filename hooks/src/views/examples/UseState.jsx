import React from 'react'
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

// useState: É um dos Tipos de HOOKS mais utilizados, criar um Estado detro do componente.

const UseState = (props) => {

    const [count, setCount] = useState(0)

    // ou
    //const count = array[0]
    //const setCount = array[1]

    //O estado não pode ser alterado diretamente (count = 100), para alterar o estado é necessário
    //chamar a função setCount()

    const [name, setName] = useState("Inicial")

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
                    <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
                    <button className="btn" onClick={() => setCount(1000)}>1000</button>
                {/* A linha  abaixo passa uma função como parâmetro para setCount e recebe um valor atual*/}
                    <button className="btn" onClick={() => setCount(current => current + 50)}>+50</button>
                </div>
            </div>
            {/* No exemplo abaixo vamos pegar informações do input e armazenar no estado de um componente funcional*/}
            <SectionTitle title="Exercício #02"/>
            {/* Caminho: gero um evanto na interface gráfica, a partir deste evento, eu altero o estado do componente, e o estado alterando, é feita uma atualização na interface gráfica*/}
            <input type="text" className="input" 
                value={name} onChange={e => setName(e.target.value)}/>
                <span className="text">{name}</span>
        </div>
    )
}

export default UseState
