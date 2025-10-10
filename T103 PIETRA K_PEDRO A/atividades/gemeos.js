let idade1 = 10;
let idade2 = 15;

if (idade1 === idade2) {
  console.log("São gêmeas (mesma idade).");
} else if (Math.abs(idade1 - idade2) >= 5) {
  console.log("Uma é pelo menos 5 anos mais velha que a outra.");
} else {
  console.log("Não são gêmeas e nenhuma tem 5 anos a mais que a outra.");
}
