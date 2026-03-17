alert("Olá mundo");

const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

let chute = Number(prompt("Mini game número secreto!!"));
let tentativas = 1;

console.log(numeroAleatorio);

while (chute !== numeroAleatorio) {
  if (chute > numeroAleatorio) {
    chute = Number(
      prompt("O número que você digitou é MAIOR. Tente novamente!"),
    );
  } else {
    chute = Number(
      prompt("O número que você digitou é MENOR. Tente novamente!"),
    );
  }

  tentativas++;
}

alert(`Parabéns! Você acertou em ${tentativas} tentativas!`);
