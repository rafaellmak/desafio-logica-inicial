const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Obtém o nome do usuário e a quantidade de xp
rl.question("Digite o nome do herói: ", function(nomeDoUsuario) {
  rl.question("Digite a quantidade de experiência (xp) do herói: ", function(xp) {
    // Converte a entrada do usuário para um número
    xp = parseInt(xp);

    // Utiliza a estrutura de decisão switch case
    var nivelDoHeroi;

    switch (true) {
      case xp < 1000:
        nivelDoHeroi = "Ferro";
        break;
      case xp >= 1001 && xp <= 2000:
        nivelDoHeroi = "Bronze";
        break;
      case xp >= 2001 && xp <= 3000:
        nivelDoHeroi = "Prata";
        break;
      case xp >= 3001 && xp <= 4000:
        nivelDoHeroi = "Ouro";
        break;
      case xp >= 4001 && xp <= 5000:
        nivelDoHeroi = "Platina";
        break;
      case xp >= 5001 && xp <= 6000:
        nivelDoHeroi = "Ascendente";
        break;
      case xp >= 6001 && xp <= 7000:
        nivelDoHeroi = "Imortal";
        break;
      case xp >= 7001 && xp <= 8000:
        nivelDoHeroi = "Radiante";
        break;
      // Adicione mais casos conforme necessário para outros níveis
      default:
        nivelDoHeroi = "Nível não determinado";
    }

    // Imprime o resultado na tela
    console.log("Nome do Herói: " + nomeDoUsuario);
    console.log("Nível do Herói: " + nivelDoHeroi);

    // Fecha a interface readline
    rl.close();
  });
});
