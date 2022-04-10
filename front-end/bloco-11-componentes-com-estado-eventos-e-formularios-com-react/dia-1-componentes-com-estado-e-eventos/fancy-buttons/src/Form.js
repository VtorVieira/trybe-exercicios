import React, { Component } from "react";
import FieldHandleChange from "./FieldHandleChange";

class Form extends Component {

  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
      idade: 0,
      comidaFavorita: '',
      testandoReact: false
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <FieldHandleChange value={this.state.handle} handleChange={this.handleChange} />
        <input type="file" />
      </form>
    )
  }
}

export default Form;
