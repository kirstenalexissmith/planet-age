export default class PlanetAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }

  mercuryAge() {
    this.mercuryAge = parseInt(this.earthAge / .24)
  }
}