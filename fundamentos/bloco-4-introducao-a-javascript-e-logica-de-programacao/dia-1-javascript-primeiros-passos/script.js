const valorCusto = 9;
const valorVenda = -1;

let valorCustoTotal = valorCusto * 0.2;
let lucro = valorVenda - valorCustoTotal

if(valorCusto < 0 || valorVenda < 0){
    console.log("Valores Invalidos")
}