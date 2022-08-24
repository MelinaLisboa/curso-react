import React from "react";
import { useState, useRef, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const mergeMel = function (s1, s2) {
  let result = "";

  while (s1.length > 0 || s2.length > 0) {
    if (s1.length > 0) {
      result += s1.slice(0, 1);
      s1 = s1.substring(1);
    }

    if (s2.length > 0) {
      result += s2.slice(0, 1);
      s2 = s2.substring(1);
    }
  }

  return result;
};

const merge = function (s1, s2) {
    return [...s1].map((e, i) => `${e}${s2[i] || ""}`).join("")
}

const UseRef = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const count = useRef(0); //retorna um objeto e sempre retorna a mesma referência do objeto. E é possível ter um estado dentro do objeto a partir do atributo 'current'
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);

  //o código abaixo não causa nova renderização na interface gráfica, logo, nao causa loop infinito, como no useState
  // count.current = count.current + 1;

  useEffect(
    function () {
      count.current = count.current + 1;
      myInput2.current.focus();
    },
    [value1]
  );

  useEffect(
    function () {
      count.current = count.current + 1;
      myInput1.current.focus();
    },
    [value2]
  );

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      {/* Neste exercício vamos controlar a qtde de vezes em que o componente é renderizado, ou seja, que algo foi alterado no componente */}
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{merge(value1, value2)} [</span>
          <span className="text red">{count.current}</span>
          {/* count é a referência para o objeto current */}
          <span className="text">]</span>
        </div>
        <input
          type="text"
          className="input"
          ref={myInput1}
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>

      <SectionTitle title="Exercício #02" />
      <div className="center">
        <input
          type="text"
          className="input"
          ref={myInput2}
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseRef;
