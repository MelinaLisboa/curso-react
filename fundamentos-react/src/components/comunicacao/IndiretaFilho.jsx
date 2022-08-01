import React from "react";

//Comunicação Indireta -> Quando passa informação do filho para o pai
// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const min = 50
    const max = 70
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
    const gerarNerd = () => Math.random() > 0.5

    return (
        <div>
            <div>Filho</div>
            <button onClick={ e => props.quandoClicar('João', gerarIdade(), gerarNerd()) }>
                Fornecer informações
            </button>
        </div>
    )
}

// eslint-disable-next-line no-lone-blocks
{/* No codigo acima, usamos Arrow Function, mas tb pode ser conforme abaixo

<button onClick={
    function (e) {
        props.quandoClicar('João', 53, true)
    }
}>Fornecer informações</button> */}