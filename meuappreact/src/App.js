import React, { Component } from 'react';
import './estilo.css'

class App extends Component{
 
  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botaoTXT: "INICIAR"
    };

    this.timer = null;
    this.iniciar =this.iniciar.bind(this);
    this.zerar = this.zerar.bind(this);
  }

  iniciar(){

  let state = this.state;

  if(this.timer !== null){
   clearInterval(this.timer);
   this.timer = null;
   state.botaoTXT = "INICIAR";
  }else{
    this.timer = setInterval(() =>{
    let state = this.state;
    state.numero += 0.1;
    this.setState(state);
      },100);
      state.botaoTXT = "PAUSAR"
    }
     this.setState(state);
  }

  zerar(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      }

      let state = this.state;
      state.numero = 0;
      state.botaoTXT= "INICIAR";
      this.setState(state);

  }

  render(){
    return(
      <div className="container">
        <h1 className="titulo">Cronometro!</h1>
        <img src = {require ('./assest/cronometro.png')} className= "img"/>
        <a className="Timer">{this.state.numero.toFixed(1)}</a>
       <div className="AreaBTN">
         <a className="Botaoini" onClick={this.iniciar}>{this.state.botaoTXT}</a>
         <a className="Botaoze" onClick={this.zerar}>ZERAR</a>
        </div> 
       
       
      </div>
    );
  }
}
 




export default App;


