import "./App.css";
import React from "react";

//nao precisa do .js ou .jsx, ja entende que é um arquivo javascript
//nao há diferença entre .js e .jsx, apenas code complete da IDE, por padrao, usar .jsx
import MegaResposta from "./components/megaResposta/MegaResposta"
import Mega from "./components/mega/Mega"
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

//De 1 a 11 temos componentes baseados em Funções
//forma reduzida de funcao
// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <div className="App">
    <h1>Fundamentos React (Arrow)</h1>

    <div className="Cards">

      <Card titulo="#13.1 - Mega Resposta" color="#B9006E">
        <MegaResposta qtde={6}></MegaResposta>
      </Card>

      <Card titulo="#13 - Mega" color="#9b4679">
        <Mega tamanho={6}></Mega>
      </Card>

      <Card titulo="#12 - Contador" color="#424242">
        <Contador numeroInicial={10}></Contador>
      </Card>

      <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
        <Input></Input>
      </Card>

      <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="#09 - Comunicação Direta" color="#3A9AD9">
        <DiretaPai></DiretaPai>
      </Card>
      <Card titulo="#08 - Renderização Condicional" color="#982395">
        <ParOuImpar numero={20}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Fernando" }} />
        <UsuarioInfo usuario={{ nome: "Maria" }} />
        <UsuarioInfo usuario={{}} />
      </Card>
      <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
        <TabelaProdutos></TabelaProdutos>
      </Card>
      <Card titulo="#06 - Repetição" color="#FF4C65">
        <ListaAlunos></ListaAlunos>
      </Card>
      <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Maria" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>
      <Card titulo="#04 - Desafio Aleatorio Mega Sena" color="#FA6900">
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
      </Card>
      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>
      <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
        <ComParametro titulo="Situação aluno" aluno="Pedro" nota={5} />
        <ComParametro titulo="Situação aluno" aluno="Maria" nota={9.9} />
      </Card>
      <Card titulo="#01 - Fragmento" color="#588C73">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
