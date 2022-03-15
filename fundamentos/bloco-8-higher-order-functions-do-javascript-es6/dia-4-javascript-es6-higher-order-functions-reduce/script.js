const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// function reduceNames(arrays) {
//   // escreva seu código aqui
//   const recebendoBooks = arrays.reduce((acc, item, index) => {
//     return acc += item.author.name + ', ';
//   }, [])
//   return recebendoBooks;
// }

// console.log(reduceNames(books));

// const arrays = [
//   ['1', '2', '3'],
//   [true],
//   [4, 5, 6],
// ]

// const novoArray = arrays.reduce((acc,valor) => {
//   return acc.concat(valor)
// },[]);
// console.log(novoArray);

//const expectedResult = 43;

// function averageAge() {
//   // escreva seu código aqui
//   const media = books.reduce((acc, valor, index) => {
//     return acc  + (valor.releaseYear - valor.author.birthYear);
//   },0)
//   return media;
// }
// console.log(averageAge(books));