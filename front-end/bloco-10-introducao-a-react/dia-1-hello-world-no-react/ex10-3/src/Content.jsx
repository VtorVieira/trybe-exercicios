import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class ContentReact extends React.Component {
  render() {
    return (
      <div>
        {conteudos.map((element) => (
          <div key={element.conteudo} className="card">
            <p> O conteudo é: {element.conteudo} </p>
            <p> Status: {element.status} </p>
            <p> Bloco: {element.bloco} </p>
          </div>
        ))}
      </div>
    )
  }
}

export default ContentReact;
