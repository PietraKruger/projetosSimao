let joao = 3;
let maria = 5;

// Troca sem variável temporária
joao = joao + maria; // joao agora é 8
maria = joao - maria; // maria agora é 3
joao = joao - maria; // joao agora é 5

console.log(joao, maria); // Deve imprimir 5, 3