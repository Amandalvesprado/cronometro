import React, { Component } from 'react';
import './estilo.css'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textofrase : ''
    };

    this.quebrabiscoito = this.quebrabiscoito.bind(this);

    this.frases = ["Não existem batalhas impossíveis para quem está disposto a nunca desistir.",
     "Algumas coisas ruins acontecem para aprendermos a ficar mais fortes. ",
    "Nunca é tarde para fazer o que ainda movimenta os seus sonhos.",
    " Gostaria que você soubesse que existe dentro de si uma força capaz de mudar sua vida.",
    "Quem tem luz própria jamais ficará na escuridão.",
    "Você atingirá o sucesso quando apresentar com orgulho as cicatrizes que adquiriu ao longo da sua jornada.",
    "Quanto mais fortes forem suas provações, maiores serão suas vitórias."];
  }

  quebrabiscoito(){
   let state = this.state;
   let numeroaleatroio = Math.floor(Math.random() * this.frases.length);
   state.textofrase = '"' + this.frases[numeroaleatroio] + '"';
   this.setState(state)
  }


  render(){
    return(
      <div className="container">
        
       <img src={require('./assest/biscoito.png')} className="img"/>
       <Botao nome="Abrir o biscoito" acaobtn = {this.quebrabiscoito}/>

       <h3 className="textodafrase">{this.state.textofrase} </h3>
      </div>
    );
  }
}
 
class Botao extends Component{
  render(){
    return(
<div>
  <button onClick={this.props.acaobtn} >{this.props.nome}</button>
</div>
    );
  }
}


export default App;


