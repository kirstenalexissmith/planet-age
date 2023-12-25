import PlanetAge from '../src/planet.js';

describe('PlanetAge', () => {
  let kirsten;

  beforeEach(() => {
    kirsten = new PlanetAge(26);
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
})