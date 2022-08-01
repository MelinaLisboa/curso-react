import React from "react"; //para usar JSX é necessário o import do react

export default function Primeiro() { //export -> para que a funcao fique disponivel
    const msg = 'Seja bem vinde!'
    return (
        <div>
            <h2>Primeiro Componente</h2>
            <p>{ msg }</p>
        </div> 
    )//retornando um trecho JSX de uma função
}