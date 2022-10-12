import React from 'react'
import { connect } from 'react-redux'//responsável por conectar o componente ao Estado da aplicação

import Card from './Card'

// eslint-disable-next-line import/no-anonymous-default-export
const Media = props => {// = function Media(props)
    const { min, max } = props //destructuring
    return (
        <Card title="Média de Números" green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(min + max) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {//mapeia o Estado para dentro das propriedades do componente
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
} 

export default connect(mapStateToProps)(Media) //connect retorna uma função como resultado que tem Media como parâmetro