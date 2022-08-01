import React from "react";
import DiretaFilho from "./DiretaFilho";

//Comunicação Direta -> Quando passa informação do pai para o filho
// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <DiretaFilho nome="Junior" idade={20} nerd= {true}/>
            <DiretaFilho nome="Gabriel" idade={17} nerd= {false}/>
        </div>
    )
}