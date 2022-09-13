import Cabecalho from "../components/Cabecalho";

// Dentro do componente exemplo há 2 instâncias do componente Cabeçalho, com passagem de propriedades
//personalizadas via props

export default function Exemplo() {
    return (
        <>
            <Cabecalho titulo="Next.js & React" />
            <Cabecalho titulo="Aprenda Next.js na prática"/>
        </>
    )
}