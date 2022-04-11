import './App.css';
import React, { Component } from 'react';
// import Pessoais from './Pessoais';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  submitted: false,
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE;
  }

  handleChange = event => {
    let { name, value } = event.target;

    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAddress(value);

    this.updateState(name, value);
  }

  onBlurHandler = event => {
    let { name, value } = event.target
    if (name === 'city') value = value.match(/^\d/) ? '' : value;
    this.updateState(name, value);
  }

  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
      formError: {
        ...state.formError,
        [name]: this.validateField(name, value)
      }
    }));
  }

  validateAddress = address => address.replace(/[^\w\s]/gi, '')

  handleSubmit = event => {
    event.preventDefault();
  }

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
        return isValid ? '' : ' is invalid';
      default:
        break;
    }
    return '';
  }

  resetForm = () => { this.setState(INITIAL_STATE) };

  sendForm = () => { this.setState({ submitted: true }) };

  render() {
    const { nome, email, cpf, endereco, cidade, estado, resumo, descricao, cargo } = this.state;

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
        </fieldset>
        <button onSubmit={this.handleSubmit}>Submit</button>
        <button onClick={this.resetButton}>Reset</button>
        {/* <Pessoais value={this.state}
          onKeyUpValue={this.onKeyUpValue}
          removeCaracter={this.removeCaracter} onValueChange={this.onValueChange}
          removeFocus={this.removeFocus} alertMsg={this.alertMsg} resetButton={this.resetButton}
        /> */}
      </form>
    );
  }
}

export default App;
