import PlanetAge from '../src/planet.js';

describe('PlanetAge', () => {

  test('should create class object for planet ages', () => {
    const kirsten = new PlanetAge(26);
    expect(kirsten.earthAge).toBe(26);
  })

})