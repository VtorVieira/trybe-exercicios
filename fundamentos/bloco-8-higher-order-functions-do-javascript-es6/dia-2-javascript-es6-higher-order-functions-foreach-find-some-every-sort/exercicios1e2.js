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
// 1
/*function authorBornIn1947() {
  // escreva aqui o seu código
  const pessoa = books.find((element) => element.author.birthYear === 1947)
  return pessoa.author.name;
}
console.log(authorBornIn1947(books));

//2
function smallerName() {
  let nameBook = books[0].name;
  // escreva aqui o seu código
  books.forEach((element) => {
    if(element.name.length < nameBook.length){
      nameBook = element.name;
    }
  })
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
console.log(smallerName(books));

//3
function smallerName() {
  let book;
  // escreva aqui o seu código
  books.forEach((element) => {
    if(element.name.length === 26){
      book = element.name;
    }
  })
  // Variável nameBook que receberá o valor do menor nome;
  return book;
}
console.log(smallerName(books));

//4
function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return books.sort((a,b) => b.releaseYear - a.releaseYear);
}
console.log(booksOrderedByReleaseYearDesc(books))*/

// const expectedResult = false;

//5
// function everyoneWasBornOnSecXX() {
//   // escreva seu código aqui
//   return books.every((element) => element.author.birthYear > 1900 && element.author.birthYear < 2000)
// }
// console.log(everyoneWasBornOnSecXX(books));

// const expectedResult = true;

//6
// function someBookWasReleaseOnThe80s() {
//   // escreva seu código aqui
//   return books.some((element) => element.releaseYear >= 1980 && element.releaseYear < 1990)
// }
// console.log(someBookWasReleaseOnThe80s(books));

// const expectedResult = false;

//7 - Gabarito!
// function authorUnique() {
//   // escreva seu código aqui
//   return books.every((book) => !books.some((bookSome) =>
//   (bookSome.author.birthYear === book.author.birthYear)
//   && (bookSome.author.name !== book.author.name)));
// }
// console.log(authorUnique(books));