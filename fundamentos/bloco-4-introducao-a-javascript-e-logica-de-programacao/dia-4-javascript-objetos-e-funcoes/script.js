// let info = {
//   personagem: "Margarida",
//   origem: "Pato Donald",
//   nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
// };
// //Exercicio 1
// /*console.log("Bem-vinda, " + info.personagem);
//  */
// //Exercicio 2
// info["recorrente"] = "Sim"; //adicionado a propriedade recorrente com o valor 'sim'
/*
//console.log(info);

//Exercicio 3
for (let key in info) {
  console.log(key);
}

//Exercicio 4
for (let key in info) {
  console.log(info[key]);
}*/

//Exercicio 5 - feito de uma forma que consegui
/*let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

console.log(info.personagem + ' e ' + info2.personagem);
console.log(info.origem + ' e ' + info2.origem);
console.log(info.nota + ' e ' + info2.nota);
console.log("Ambos recorrentes");*/

//Exercicio 6
// let leitor = {
//   nome: "Julia",
//   sobrenome: "Pessoa",
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: "O Pior Dia de Todos",
//       autor: "Daniela Kopsch",
//       editora: "Tordesilhas",
//     },
//   ],
// };
//let nomeTitulo = leitor.livrosFavoritos[0];
//console.log("O livro favorito de " + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + nomeTitulo.titulo);

//Exercicio 7 e 8
// let leitor = {
//   nome: "Julia",
//   sobrenome: "Pessoa",
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: "O Pior Dia de Todos",
//       autor: "Daniela Kopsch",
//       editora: "Tordesilhas",
//     },
//     {
//       titulo: "Harry Potter e o Prisioneiro de Azkaban",
//       autor: "JK Rowling",
//       editora: "Rocco",
//     },
//   ],
// };
// console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos");

//Parte II - Exercicio 1
//consultado esse material https://github.com/brunoemferreira/js-palindromo/blob/main/palindromo.js
// function palindromo(palavra){
//     let palin = palavra.split("").reverse().join("");
//     if (palin === palavra) {
//         console.log("True");
//       } else {
//         console.log("False");
//       }
// }
// palindromo("desenvolvimento");

//Parte II - Exercicio 2
// function retornoArry(array){
//     let maior = 0;
//     for (let index = 0; index < array.length; index++) {
//         if(array[index] > maior){
//             maior = index;
//         }
//     }
//     console.log(maior);
// }
// let array = [2, 3, 6, 7, 10, 1];

// retornoArry(array)