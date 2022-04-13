import './App.css';
import React, { Component } from 'react';
import Pessoais from './Pessoais';

class App extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);
    this.removeCaracter = this.removeCaracter.bind(this);
    this.removeFocus = this.removeFocus.bind(this);
    this.alertMsg = this.alertMsg.bind(this);
    this.resetButton = this.resetButton.bind(this);
    this.onValueChange = this.onValueChange.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      resumo: '',
      cargo: '',
      descricao: '',
      countCargo: '',
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    if (name === 'nome') {
      this.setState({
        nome: target.value.toUpperCase()
      })
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  onValueChange({ target }) {
    this.setState({
      tipo: target.id
    });
  }

  removeCaracter({ target }) {
    const remove = target.value.normalize("NFD").replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');
    this.setState({
      endereco: remove,
    })
  }

  removeFocus({ target }) {
    console.log(isNaN(target.value))
    if (target.value[0] === '1') {
      console.log('to aqui', typeof target.value)
    }
  }

  alertMsg() {
    const { countCargo } = this.state
    if (countCargo < 1) alert('Preencha com cuidado esta informação.')
    this.setState(() => ({
      countCargo: 1
    }))
  }

  resetButton(event) {
    event.preventDefault();
    this.setState(() => ({
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      resumo: '',
      cargo: '',
      descricao: '',
      countCargo: '',
    }))
  }

  render() {
    return (
      <form>

        <Pessoais value={this.state}
          handleChange={this.handleChange}
          removeCaracter={this.removeCaracter}
          onValueChange={this.onValueChange}
          removeFocus={this.removeFocus}
          alertMsg={this.alertMsg}
          resetButton={this.resetButton}
        />
      </form>
    )
  }
}

export default App;
