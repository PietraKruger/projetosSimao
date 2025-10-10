let idade = 12;
let comAdulto = true;

// Verificação se pode assistir ao filme
let podeAssistir = (idade >= 14) || (idade >= 12 && comAdulto);

console.log(podeAssistir); // Deve imprimir true ou false dependendo das condições