var Skier = require('./Skier');

class Lift {
  constructor(passengerLimit) {
    this.inService = true;
    this.limit = passengerLimit;
    this.skiers = [];
    this.safetyBar = 'up';
  }
  admitSkier(name, hasLiftTicket) {
    if (!hasLiftTicket) {
      return `Sorry, ${name}. You need a lift ticket!`;
    }
    else if (this.limit > this.skiers.length) {
      var skier = new Skier(name, hasLiftTicket);
      this.skiers.push(skier);
    } else {
      return `Sorry, ${name}. Please wait for the next lift!`;
    }
  }
  startLift() {
    if (this.limit === this.skiers.length) {
      this.safetyBar = 'down';}
    if (this.limit - this.skiers.length === 1) {
      return `We still need 1 more skier!`;}
    if (this.limit > this.skiers.length) {
      return `We still need ${this.limit - this.skiers.length} more skiers!`
    }
  }
}

module.exports = Lift;
