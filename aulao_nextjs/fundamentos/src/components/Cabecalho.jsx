export default function Cabecalho(props) {//props é somente leitura
    return (
        <header>
            <h1>
                {/* Props é somente leitura, logo titulo não pode ser alterado. Quando for necessário alterar, usar Estado do Componente */}
                {props.titulo}
            </h1>
        </header>   
    )
}