import React from 'react'

// A declaração de um componente chamado Greeting .
class Greeting extends React.Component { // O componente Greeting herda da classe Component da biblioteca react .
  render() {
    return (<h1>Hello, {this.props.name} {this.props.lastName}</h1>)
  }
}

export default Greeting;