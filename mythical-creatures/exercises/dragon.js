

class Dragon {
  constructor (name, rider, timesEaten, ishungry) {
    this.name = name;
    this.rider = rider;
    this.timesEaten = timesEaten || 0;
    this.hungry = true;
    }

  greet() {
    return `Hi, ${this.rider}!`
  };

  eat() {
    this.timesEaten += 1
    if (this.timesEaten >= 3) {
      return this.hungry = false
    }
  }
};

module.exports = Dragon;
