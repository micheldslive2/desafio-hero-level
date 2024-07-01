const readline = require("readline");
const { HeroLevel } = require("./hero-level.method");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual é o seu nome? ", (name) => {
  rl.question("Qual é o seu nível? ", (level) => {
    const hero = new HeroLevel();

    console.log(
      `O Herói de nome **${name}** está no nível **${hero.get(Number(level))}**`
    );

    rl.close();
  });
});
