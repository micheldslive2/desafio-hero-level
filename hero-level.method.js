const { label } = require("./hero-level.mock");

class Hero {
  /*** @param {Number} hero */
  get(hero) {
    throw new Error(`This ${hero} method should be overridden!`);
  }
}

class FerroHero extends Hero {
  /*** @param {Number} hero */
  get(hero) {
    return hero < 1000 ? label.ferro : null;
  }
}

class BronzeHero extends Hero {
  /*** @param {Number} hero */
  get(hero) {
    return hero >= 1000 && hero <= 2000 ? label.bronze : null;
  }
}

class PrataHero extends Hero {
  /*** @param {Number} hero */
  get(hero) {
    return hero >= 2001 && hero <= 5000 ? label.prata : null;
  }
}

class OuroHero extends Hero {
  /*** @param {Number} hero */
  get(hero) {
    return hero >= 5001 && hero <= 7000 ? label.ouro : null;
  }
}

class PlatinaHero extends Hero {
  /*** @param {Number} hero */
  get(hero) {
    return hero >= 7001 && hero <= 8000 ? label.platina : null;
  }
}

class AscendenteHero extends Hero {
  /*** @param {Number} hero */
  get(hero) {
    return hero >= 8001 && hero <= 9000 ? label.ascendente : null;
  }
}

class ImortalHero extends Hero {
  /*** @param {Number} hero */
  get(hero) {
    return hero >= 9001 && hero <= 10000 ? label.imortal : null;
  }
}

class RadianteHero extends Hero {
  /*** @param {Number} hero */
  get(hero) {
    return hero >= 10001 ? label.radiante : null;
  }
}

class HeroLevel {
  #heros;
  constructor() {
    this.#heros = [
      new FerroHero(),
      new BronzeHero(),
      new PrataHero(),
      new OuroHero(),
      new PlatinaHero(),
      new AscendenteHero(),
      new ImortalHero(),
      new RadianteHero(),
    ];
  }

  /*** @param {Number} level */
  get(level) {
    for (let hero of this.#heros) {
      const response = hero.get(level);
      if (response) return response;
    }
    return label.unknown;
  }
}

module.exports = { HeroLevel };
