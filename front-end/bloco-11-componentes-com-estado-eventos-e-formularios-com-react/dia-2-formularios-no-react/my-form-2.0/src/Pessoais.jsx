import { Component } from "react";

class Pessoais extends Component {
  render() {
    const { value, handleChange, removeCaracter, removeFocus, onValueChange, alertMsg, resetButton } = this.props

    let error = undefined
    if (value.descricao.length > 120) error = " Texto muito grande"

    return (<div>
      <fieldset>
        <legend>Dados Pessoais</legend>
        <input onChange={handleChange} value={value.nome} name='nome' type='text' maxLength='40' placeholder='nome' required></input>
        <input onChange={handleChange} value={value.email} name='email' type='email' maxLength='50' placeholder='Email' required></input>
        <input onChange={handleChange} value={value.cpf} name='cpf' type='text' maxLength='11' placeholder='CPF' required></input>
        <input onChange={removeCaracter} value={value.endereco} name='endereco' type='text' maxLength='20' placeholder='Endereco' required></input>
        <input onBlur={removeFocus} onChange={handleChange} value={value.cidade} name='cidade' type='text' maxLength='28' placeholder='Cidade' required></input>
        <select onChange={handleChange} value={value.estado} name='estado' required>
          <option value='sp'>SP</option>
          <option value='ba'>BA</option>
          <option value='rj'>RJ</option>
        </select>
        <div>
          <input onChange={onValueChange} id='casa' name='tipo' type='radio' required></input>
          <label for='casa' >Casa</label>
          <input onChange={onValueChange} id='apartamento' name='tipo' type='radio' required></input>
          <label for='apartamento'>Apartamento</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Dados Último emprego</legend>
        <textarea onChange={handleChange} value={value.resumo} name='resumo' rows='2' cols='50' maxLength='1000' placeholder='Resumo' required></textarea>
        <textarea onMouseOver={alertMsg} onChange={handleChange} value={value.cargo} name='cargo' rows='2' cols='50' maxLength='40' placeholder='Cargo' required></textarea>
        <textarea onChange={handleChange} value={value.descricao} name='descricao' rows='2' cols='50' maxLength='500' placeholder='Descricao' required></textarea>
        <span>{error ? error : ''}</span>
      </fieldset>
      {/* <button onSubmit={sendButton}>Submit</button> */}
      <button onSubmit={resetButton}>Reset</button>
    </div>
    )
  }
}

export default Pessoais;
