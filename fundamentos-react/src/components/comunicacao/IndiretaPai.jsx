import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

//useState -> criar estado dentro do componente
//Comunicação Indireta -> Quando passa informação do filho para o pai
//O pai passa uma Função callback para o filho via props, chama a função no filho para passar informações pro pai
// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

   //destructuring
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    //uso de React Hooks, estado dentro do componente funcional, a partir da versão 16.8 do React

    function fornecerInformacoes(nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span>{idade}</span>
                <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar= {fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}