import React, { Component } from "react";

class FieldHandleChange extends Component {
  render() {
    const { nome, idade, comidaFavorita, testandoReact, handleChange } = this.props
    return (
      <div>
        <fieldset>
          <legend>Nome</legend>
          <input value={nome} type="text" name="nome" onChange={handleChange}></input>
        </fieldset>
        <fieldset>
          <legend>Idade</legend>
          <input value={idade} type="number" name="idade" onChange={handleChange}></input>
        </fieldset>
        <input value={testandoReact} name="testandoReact" type="checkbox" onChange={handleChange}></input>
        <select value={comidaFavorita} name="comidaFavorita" onChange={handleChange}>
          <option value="banana">Banana</option>
          <option value="maca">Maca</option>
        </select>
      </div>
    )
  }
}

export default FieldHandleChange