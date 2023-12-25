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

  yearsSincePastBday(pastBdayAge) {
    const yearsPassed = this.earthAge - pastBdayAge;
    return {
      earth: yearsPassed,
      mercury: parseInt(yearsPassed / 0.24),
      venus: parseInt(yearsPassed / 0.62),
      mars: parseFloat((yearsPassed / 1.88).toFixed(2)),
      jupiter: parseFloat((yearsPassed / 11.86).toFixed(2))
    }
  }

  yearsUntilFutureBday(futureBdayAge) {
    const yearsUntil = futureBdayAge - this.earthAge;
    return {
      earth: yearsUntil,
      mercury: parseInt(yearsUntil / 0.24),
      venus: parseInt(yearsUntil / 0.62),
      mars: parseFloat((yearsUntil / 1.88).toFixed(2)),
      jupiter: parseFloat((yearsUntil / 11.86).toFixed(2))
    }
  }
}