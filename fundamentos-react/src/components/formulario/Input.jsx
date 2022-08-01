import "./Input.css";
import React, { useState } from "react";


/* Componente controlado: + usado
Não é possível mudar o estado do componente a partir da interface.
A interface só muda quando o estado muda (valor) */

/* Quando um input nao tem o onChange, o ideal é marca-lo como readonly*/

/* O uso do undefined abaixo, mostra um componente nao controlado, componente não associado a nenhuma estado */

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e){
        setValor(e.target.value)
    }

    return(
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={valor} onChange={quandoMudar}/>
                <input value={valor} readOnly/>
                <input value={undefined} />
            </div>

        </div>
    )
}