import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons'

const UseCallback = (props) => {

    const [count, setCount] = useState(0)

    const inc = useCallback(function (delta){
        setCount(curr => curr + delta) //passa uma função callback para o setCount
    }, [setCount]) //a dependência aqui é em relação ao setCount() e ele é criado uma única vez

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons inc={inc}/>                
            </div>
        </div>
    )
}

export default UseCallback
