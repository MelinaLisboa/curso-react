import Layout from "../components/Layout";

//Integração Javascript/JSX
export default function Jsx() {
  //Código Javascript
  const a = 4;
  const b = 3;
  const obj = { nome: "Melina", idade: 39 };
  const titulo = <h1>JSX é um conceito central</h1>; //Armazenei em uma constante um trecho JSX

  function subTitulo() {
    return <h2>{"muito legal".toUpperCase()}</h2>;
  }

  return (
    <Layout titulo="Entendendo o JSX">
      <div>
        {titulo}
        {/* Use chaves para colocar código Jacascript dentro do JSX: */}
        {subTitulo()}
        {a * b}
        <h2>{Math.random()}</h2>
        <p>{JSON.stringify({ obj })}</p>
      </div>
    </Layout>
  );
}
