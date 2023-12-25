export default class PlanetAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }

  mercuryAge() {
    this.mercuryAge = parseInt(this.earthAge / .24)
  }

  venusAge() {
    this.venusAge = parseInt(this.earthAge / .62)
  }

  marsAge() {
    this.marsAge = parseInt(this.earthAge / 1.88)
  }

  jupiterAge() {
    this.jupiterAge = parseInt(this.earthAge / 11.86)
  }
}