
// // Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

// // Modifique a estrutura da função para que ela seja uma arrow function . (FEITO)

// // Modifique as concatenações para template literals . (FEITO)


// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   //console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);


// // Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente. 

// // Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); 
// // retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!". (FEITO)

// // Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . 
// // Spoiler: É possível realizar uma função que ordene qualquer array de números. (FEITO)

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// // // Seu código aqui.
// // // https://pt.stackoverflow.com/questions/9900/como-ordenar-um-array-por-valores

// function sortfunction(a, b){
//   return (a - b) // faz com que o array seja ordenado numericamente e de ordem crescente.
// }

// oddsAndEvens.sort(sortfunction);


// console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// //Parte II
/*const fatorialNumber = (number) => {
  let fatorial = number;
  for(let index = 1; index < number; index +=1){
    fatorial *= index
  }
  console.log(fatorial);
}
fatorialNumber(5);

function longestWord(string){
  
  const frase = string.split(' ');
  let maiorPalavra = frase[0];
  for(let index = 0; index < frase.length; index += 1){
    if(frase[index].length > maiorPalavra.length){
      maiorPalavra = frase[index];
    }
  }
  console.log(maiorPalavra);
}

longestWord('Antônio foi no banheiro e não sabemos o que entendeu');*/

const buttonClik = document.getElementById('clickButton');
let contagemDeClick = document.getElementById("contagem");
let contador = 0;

buttonClik.addEventListener('click', () => {
  contagemDeClick.innerHTML = contador += 1
})