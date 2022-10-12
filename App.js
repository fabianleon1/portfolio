import React, { Component } from 'react';
import './App.css';



class Helloapp extends React.Component {

  toggleShow= ()=>{
    this.setState({show:!this.state.show})

  }

  state={
    show:true
  }

    render() {
      if(this.state.show){
      return (
        <div id="hola">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={ this.toggleShow.bind(this) }> Toggle show</button>
        
        </div>
  
  
      )
    } else {
      return <h1>
        No hay nada que mostrar
        <button onClick={this.toggleShow.bind(this) }>Regresar</button>

      </h1>
    }
  }
 
}


function App() {

  return (
    <div>This is my component:
      <Helloapp mytext="Holaaaaa" subtitle="Cunumi" />
      <Helloapp subtitle="Cunumi2" />
      <Helloapp subtitle="Cunumi3" />
     
    </div>

  )


}


export default App;
