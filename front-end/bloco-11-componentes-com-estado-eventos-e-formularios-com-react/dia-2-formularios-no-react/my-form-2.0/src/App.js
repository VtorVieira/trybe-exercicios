import './App.css';
import React, { Component } from 'react';
// import Pessoais from './Pessoais';

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
    const { nome, email, cpf, endereco, cidade, estado, resumo, descricao, cargo } = this.state;
    console.log(descricao.length)
    let error = undefined
    if (descricao.length > 120) error = " Texto muito grande"

    return (
      <form>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <input onChange={this.handleChange} value={nome} name='nome' type='text' maxLength='40' placeholder='nome' required></input>
          <input onChange={this.handleChange} value={email} name='email' type='email' maxLength='50' placeholder='Email' required></input>
          <input onChange={this.handleChange} value={cpf} name='cpf' type='text' maxLength='11' placeholder='CPF' required></input>
          <input onChange={this.removeCaracter} value={endereco} name='endereco' type='text' maxLength='20' placeholder='Endereco' required></input>
          <input onBlur={this.removeFocus} onChange={this.handleChange} value={cidade} name='cidade' type='text' maxLength='28' placeholder='Cidade' required></input>
          <select onChange={this.handleChange} value={estado} name='estado' required>
            <option value='sp'>SP</option>
            <option value='ba'>BA</option>
            <option value='rj'>RJ</option>
          </select>
          <div>
            <input onChange={this.onValueChange} id='casa' name='tipo' type='radio' required></input>
            <label for='casa' >Casa</label>
            <input onChange={this.onValueChange} id='apartamento' name='tipo' type='radio' required></input>
            <label for='apartamento'>Apartamento</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Dados Último emprego</legend>
          <textarea onChange={this.handleChange} value={resumo} name='resumo' rows='2' cols='50' maxLength='1000' placeholder='Resumo' required></textarea>
          <textarea onMouseOver={this.alertMsg} onChange={this.handleChange} value={cargo} name='cargo' rows='2' cols='50' maxLength='40' placeholder='Cargo' required></textarea>
          <textarea onChange={this.handleChange} value={descricao} name='descricao' rows='2' cols='50' maxLength='500' placeholder='Descricao' required></textarea>
          <span>{error ? error : ''}</span>
        </fieldset>
        <button onSubmit={this.sendButton}>Submit</button>
        <button onSubmit={this.resetButton}>Reset</button>
        {/* <Pessoais value={this.state}
          onKeyUpValue={this.onKeyUpValue}
          removeCaracter={this.removeCaracter} onValueChange={this.onValueChange}
          removeFocus={this.removeFocus} alertMsg={this.alertMsg} resetButton={this.resetButton}
        /> */}
      </form>
    )
  }
}

export default App;
