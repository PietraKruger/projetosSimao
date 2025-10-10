let numeroSecreto = 7;
let chute = 6;

if (chute === numeroSecreto) {
    console.log("Acertou!");
} else if (Math.abs(chute - numeroSecreto) === 1) {
    console.log("Quase acertou!");
} else {
    console.log("Errou!");
}