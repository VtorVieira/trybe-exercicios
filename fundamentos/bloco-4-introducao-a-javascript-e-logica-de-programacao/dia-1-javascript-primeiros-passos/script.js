let salarioBruto = 5189.82;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
    salarioLiquido = salarioBruto - (salarioBruto * 0.08);
    console.log("Abaixo de " + salarioLiquido);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioLiquido = salarioBruto - (salarioBruto * 0.09);
    console.log("Abaixo de " + salarioLiquido);
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioLiquido = salarioBruto - (salarioBruto * 0.11);
    console.log("Salario liquido " + salarioLiquido);
    if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65) {
        salarioLiquido = salarioLiquido - (salarioLiquido * 0.075 - 142.80);
    } else if(salarioLiquido >= 2826.66 && salarioLiquido <= 3751.05){
        salarioLiquido = salarioLiquido - (salarioLiquido * 0.15 - 354.80);
    } else if(salarioLiquido >= 3751.06 && salarioLiquido <= 4664.68){
        salarioLiquido = salarioLiquido - (salarioLiquido * 0.225 - 636.13);
    }
    console.log("Atualizado salario liquido " + salarioLiquido);
} else if (salarioBruto >= 5189.82) {
    salarioLiquido = salarioBruto - (salarioBruto - 570.88);
    console.log("Salario liquido " + salarioLiquido);
    if(salarioLiquido > 4664.68){
        salarioLiquido = salarioLiquido - (salarioLiquido * 0.225 - 354.80);
    }
    console.log("Atualizado salario liquido " + salarioLiquido);
}