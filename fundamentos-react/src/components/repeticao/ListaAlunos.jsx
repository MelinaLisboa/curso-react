import React from "react";
import alunos from "../../data/alunos"; //array de alunos

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
//   const li1 = (
//     <li>
//       {alunos[0].id} {alunos[0].nome} -> {alunos[0].nota}
//     </li>
//   );

//funciona sem a key, mas importante usar chave Única para otimizar a renderização, atualizaçao de dados
  const alunosLI = alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id}) {aluno.nome} -> {aluno.nota}
      </li>
    );
  });

  return (
    <div>
      <ul style={{listStyle: 'none'}}>
        {alunosLI}
      </ul>
    </div>
  );
};
