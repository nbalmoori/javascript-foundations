class Skater {
  constructor(skater) {
    this.name = skater.name;
    this.skill = skater.skill;
    this.tricks = skater.tricks;
    this.money = skater.cash;
    this.frustration = 0;
    this.kickflip = 0;
    this.treflip = 0;
    this.bigSpin = 0;
  }
  practice(trick1) {
    if (!this.tricks[trick1]) {
      this.frustration += 1;
      this[trick1] += 1;
    }
    if (this[trick1] === 3) {
      this.tricks[trick1] = true;
      this.frustration = 0;
      return `I just learned to ${trick1}!!!`
    }
  }
}

module.exports = Skater;
