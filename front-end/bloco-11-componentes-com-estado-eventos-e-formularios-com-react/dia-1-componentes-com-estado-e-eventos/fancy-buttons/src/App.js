import "./App.css";
import React from 'react';
import Form from './Form';

class App extends React.Component {
  render() {
    return (<main><Form /></main>)
  }
  // constructor() {
  //   super()
  //   this.state = {
  //     numeroEventClick: 0,
  //     numeroEventClickEmMim: 0,
  //     numeroEventNaoClick: 0
  //   }
  //   this.eventClick = this.eventClick.bind(this);
  //   this.eventClickEmMim = this.eventClickEmMim.bind(this);
  //   this.eventNaoClick = this.eventNaoClick.bind(this);
  // }

  // eventClick() {
  //   console.log(this);
  //   const btn = document.getElementsByTagName('button')[0];
  //   this.setState((beforeState) => ({
  //     numeroEventClick: beforeState.numeroEventClick + 1
  //   }))
  //   if (this.state.numeroEventClick % 2 !== 0) {
  //     btn.className = 'colorGreen';
  //   } else {
  //     btn.className = '';
  //   }
  // }
  // eventClickEmMim() {
  //   this.setState((beforeState) => ({
  //     numeroEventClickEmMim: beforeState.numeroEventClickEmMim + 1
  //   }))
  // }
  // eventNaoClick() {
  //   this.setState((beforeState) => ({
  //     numeroEventNaoClick: beforeState.numeroEventNaoClick + 1
  //   }))
  // }

  // eventColor(num) {
  //   return num % 2 === 0 ? 'green' : 'white';
  // }

  // render() {

  //   return (
  //     <div>
  //       <button onClick={this.eventClick}>{this.state.numeroEventClick}</button>
  //       <button onClick={this.eventClickEmMim}>{this.state.numeroEventClickEmMim}</button>
  //       <button onClick={this.eventNaoClick}>{this.state.numeroEventNaoClick}</button>
  //     </div>
  //   )
  // }
}

export default App;
