import "./Contador.css";
import React, { Component } from "react";

import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };

  //usando função arrow, o this sempre aponta para o objeto correto, ou seja, para a instância da classe, se tivesse usado função,  inc () {}, nao funcionaria. Função anonima, sendo atribuida a variavel inc
  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  //ou tb pode fazer conforme abaixo, usando construtor
  // constructor(props){
  //     super(props)

  //     this.state = {
  //         numero: props.numeroInicial
  //     }
  // }

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero}></Display>       
        <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
        <Botoes setDec={this.dec} setInc={this.inc}/>
      </div>
    );
  }
}

export default Contador;
