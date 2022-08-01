import React from "react";


// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

  const { min, max } = props; //destructuring (Javascript), uso de {} do lado esquerdo da expressao / do lado direito seria um objeto.

  const aleatorio = Math.ceil(Math.random() * (max - min) + min);
  return (
    <div>
      <h3>Valor aleatório gerado no intervalo abaixo</h3>
      <p>
        Entre {min} e {max}: {aleatorio}
      </p>
    </div>
  );
}
