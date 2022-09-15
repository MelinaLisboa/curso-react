import Layout from "../../components/Layout";
import { useRouter } from 'next/router'

//NAVEGAÇÃO DINÂMICA: Muito usado em Next.js
// Navegação dinâmica, nome do arquivo com [], o nome do arquivo é o nome do parâmetro passado
//Se precisar passar Filial, por exemplo, cria uma pasta acima do aqruivo codigo, chamada [filial]
export default function ClientePorCodigo() {
    
    const router = useRouter()

    return(
        <Layout titulo="Navegação Dinâmica">
            <span>Código = {router.query.codigo}</span>
        </Layout>
    )
}