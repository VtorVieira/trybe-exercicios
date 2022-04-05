import './App.css';
import React from 'react';

const Tasks = (value) => {
  return (
    <li>{value}</li>
  );
}

const task = ['banana', 'maca', 'abacate'];

class App extends React.Component {
  render() {
    return (task.map((element) => Tasks(element)))
  }
}

export default App;
