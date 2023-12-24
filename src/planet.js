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
}