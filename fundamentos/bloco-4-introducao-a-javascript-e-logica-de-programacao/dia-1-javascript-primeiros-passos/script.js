
let peca = "CAVALO";
peca = peca.toLowerCase();
if(peca == "peao"){
    console.log("anda uma pra frente ou duas na primeira jogada")
} else if(peca == "torre"){
    console.log("anda quantas casas quiser pra frente ou para o lado");
} else if(peca == "cavalo"){
    console.log("anda em L");
} else if(peca == "bispo"){
    console.log("anda na diagonal");
} else if(peca == "rainha"){
    console.log("anda quantas casas quiser e para todas as direções");
} else if(peca == "rei"){
    console.log("anda uma casa para todas as direções");
} else{
    console.log("Peça invalida!");
}