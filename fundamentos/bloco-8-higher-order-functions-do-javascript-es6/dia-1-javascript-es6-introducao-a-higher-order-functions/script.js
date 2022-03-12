
/*const newEmployees = (formato) => {
  const employees = {
    id1: formato('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: formato('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: formato('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const formato = (nome) => {
  const ajusteEmail = nome.replace(/ /g,"_").toLowerCase();
  return { 
    nomeCompleto: nome, 
    email: `${ajusteEmail}@tybe.com`
  }
}

console.log(newEmployees(formato));*/

/*const getRandomInt = (numeroSorteio, sorteio) => {
  const sortNumber = Math.floor(Math.random() * 5) + 1;
  return sorteio(numeroSorteio, sortNumber) ? 'Parabéns você ganhou' : 'Tente novamente';
}
// console.log(getRandomInt(1,5));

const sorteio = (numeroSorteio, num) => {
  return numeroSorteio === num;
}

console.log(getRandomInt(2, sorteio));*/

const checkFunction = (sorteado, numberBet) => {
  if (numberBet === sorteado) {
    console.log('Parabéns você ganhou!');
  }
  else {
    console.log('Tente novamente!')
  }
  // console.log(resultSort());
}
// console.log(checkFunction());
const resultSort = (numberBet, callback) => {
  let sorteado = Math.floor(Math.random() * 5 + 1);
  console.log(sorteado);
  callback(sorteado, numberBet)
}
resultSort(2, checkFunction);

// const numberChecker = (myNumber, number) => myNumber === number;
// //console.log(numberChecker(5,5));

// const lotteryResult = (myNumber, numberChecker) => {
//   const number = Math.floor((Math.random() * 5) + 1);

//   return numberChecker(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
// };

// console.log(lotteryResult(2, numberChecker));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const respostasGabarito = (righAnswers, studentAnswers, validaPontuacao) => {
  return validaPontuacao(righAnswers, studentAnswers);
}

const validaPontuacao = (righAnswers, studentAnswers) => {
  let contador = 0;
  for (let index = 0; index < righAnswers.length; index += 1) {
    if (righAnswers[index] === studentAnswers[index]) {
      contador += 1
    } else if (righAnswers[index] === 'N.A' || studentAnswers[index] === 'N.A') {
      contador += 0;
    } else {
      contador -= 0.5;
    } 
  }
  return contador;
}
console.log(respostasGabarito(RIGHT_ANSWERS, STUDENT_ANSWERS, validaPontuacao));