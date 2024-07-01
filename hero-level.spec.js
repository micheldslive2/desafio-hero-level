const { HeroLevel } = require("./hero-level.method");
const { label } = require("./hero-level.mock");

describe("HeroLevel", () => {
  const hero = new HeroLevel();

  it(`should return "${label.ferro}" when less than 1.000`, () => {
    expect(hero.get(999)).toEqual(label.ferro);
  });
  it(`should return "${label.bronze}" when between 1.001 ~ 2.000`, () => {
    expect(hero.get(1500)).toEqual(label.bronze);
  });
  it(`should return "${label.prata}" when between 2.001 e 5.000`, () => {
    expect(hero.get(3000)).toEqual(label.prata);
  });
  it(`should return "${label.ouro}" when between 5.001 e 7.000`, () => {
    expect(hero.get(6000)).toEqual(label.ouro);
  });
  it(`should return "${label.platina}" when between 7.001 e 8.000`, () => {
    expect(hero.get(7500)).toEqual(label.platina);
  });
  it(`should return "${label.ascendente}" when between 8.001 e 9.000`, () => {
    expect(hero.get(8600)).toEqual(label.ascendente);
  });
  it(`should return "${label.imortal}" when between 9.001 e 10.000`, () => {
    expect(hero.get(9999)).toEqual(label.imortal);
  });
  it(`should return "${label.radiante}" when greater than or equal 10.001`, () => {
    expect(hero.get(10500)).toEqual(label.radiante);
  });
  it(`should return "${label.unknown}" when it does not satisfy any condition`, () => {
    expect(hero.get("michel")).toEqual(label.unknown);
  });
});
