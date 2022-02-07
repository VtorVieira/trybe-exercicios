// let fatorial = 10;
// for (index = fatorial - 1; index >= 1; index -= 1) {
//     fatorial *= index;
// }
// console.log(fatorial);

// let word = 'trybe';
// let array = [];
// for(index = word.length - 1; index >= 0; index--){
//     array.push(word[index]);
// }
// console.log(array.join("")); //referência do join no https://github.com/Lucas-Dalbo/Exercicios_Trybe/pull/10

//Em andamento
let array = ['java','javascript', 'python', 'html', 'css'];
let max = 0;
for (let index = 0; index < array.length; index++) {
    if(array[index] > max){
        max = array[index];
    }
}
console.log(max);