let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
//Exercicio 1
/*console.log("Bem-vinda, " + info.personagem);
 */
//Exercicio 2
info["recorrente"] = "Sim"; //adicionado a propriedade recorrente com o valor 'sim'
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
let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};
let nomeTitulo = leitor.livrosFavoritos[0];
console.log("O livro favorito de " + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + nomeTitulo.titulo);