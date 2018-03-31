import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(){
    super()
    this.state={
      value : "",
      list : []
    }
    this.hadlechange= this.hadlechange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)    
  }

  hadlechange(e){
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    const list= this.state.list
    this.setState({list: list.concat(this.state.value),
                    value: ""}) 
  
  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>
            {this.state.list.map (lis=> <li>{lis}</li>)}
          </ul>
           <form onSubmit= {this.handleSubmit}>
             <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.value} onChange= {this.hadlechange} />
           </form>
        </div>
      </div>
    )
  }
}


export default App;
