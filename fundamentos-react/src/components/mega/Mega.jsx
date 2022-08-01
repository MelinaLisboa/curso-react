import "./Mega.css";
import React, { useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [tamanho, setTamanho] = useState(props.tamanho || 6);
  const [surpresinha, setSurpresinha] = useState([]);

  function mudarTamanho(e) {
    e.target.value >= 6 ? setTamanho(e.target.value) : alert("ATENÇÃO: Tamanho mínimo: 6.");
  }

  function mudarSurpresinha(novoArray) {
    setSurpresinha(novoArray);
  }

  const gerarNumeros = () => {
    let aleatorio = 0;
    let result = [];

    while (result.length < tamanho) {
      aleatorio = Math.floor(Math.random() * 59 + 1);

      if (result.indexOf(aleatorio) === -1) {
        result.push(aleatorio);
      }
    }
    mudarSurpresinha(result);
  }

  return (
    <div className="Mega">
      <h2>Mega-sena: {surpresinha.sort((a, b) => a - b).join("-")}</h2>
      <div className="TamJogo">
          <label htmlFor="tamJogo">Tamanho: </label>
          <input id="tamJogo" value={tamanho} onChange={mudarTamanho} />
      </div>
      <button onClick={gerarNumeros}>Gerar</button>
    </div>
  );
};
