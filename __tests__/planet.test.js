import PlanetAge from '../src/planet.js';

describe('PlanetAge', () => {
  let kirsten;
  let yearsPassed;
  let yearsUntil;

  beforeEach(() => {
    kirsten = new PlanetAge(26);
    yearsPassed = kirsten.yearsSincePastBday(19);
    yearsUntil = kirsten.yearsUntilFutureBday(40);
  })

  test('should create class object for planet ages', () => {
    expect(kirsten.earthAge).toBe(26);
  });

  test('should calculate users age in mercury years', () => {
    kirsten.mercuryAge();
    expect(kirsten.mercuryAge).toBe(108);
  })

  test('should calculate users age in venus years', () => {
    kirsten.venusAge();
    expect(kirsten.venusAge).toBe(41);
  })

  test('should calculate users age in mars years', () => {
    kirsten.marsAge();
    expect(kirsten.marsAge).toBe(13);
  })

  test('should calculate users age in jupiter years', () => {
    kirsten.jupiterAge();
    expect(kirsten.jupiterAge).toBe(2);
  })

  test('should determine how many years have passed since a past birthday ', () => {
    expect(yearsPassed.earth).toBe(7);
    expect(yearsPassed.mercury).toBe(29.17);
    expect(yearsPassed.venus).toBe(11.29);
    expect(yearsPassed.mars).toBe(3.72);
    expect(yearsPassed.jupiter).toBe(0.59)
  })

  test('should determine how many years until a future birthday', () => {
    expect(yearsUntil.earth).toBe(14);
    expect(yearsUntil.mercury).toBe(58.33);
    expect(yearsUntil.venus).toBe(22.58);
    expect(yearsUntil.mars).toBe(7.45);
    expect(yearsUntil.jupiter).toBe(1.18);
  })
})