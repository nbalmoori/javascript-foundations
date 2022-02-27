class Centaur {
  constructor(centaurObject) {
    this.name = centaurObject.name;
    this.breed = centaurObject.type;
    this.standing = true;
    this.timesRunOrShot = 0;
    this.cranky = false;
    this.layingDown = false;
  }

  shootBow() {
    this.timesRunOrShot += 1;
    if (this.timesRunOrShot > 2) {
      this.cranky = true}
    if (this.cranky || this.layingDown) {
      return 'NO!';
      } else {
      return 'Twang!!!'
    }
  }

  run() {
    this.timesRunOrShot += 1;
    if (this.timesRunOrShot > 2) {
      this.cranky = true}
    if (this.cranky || this.layingDown) {
      return 'NO!';
      } else {
      return 'Clop clop clop clop!!!';
    }
  }

  sleep() {
    if (this.standing) {
      return 'NO!'
    }
    if (this.layingDown) {
      this.cranky = false;
      this.timesRunOrShot = 0;
      return 'ZZZZ'
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.layingDown) {
      return 'Not while I\'m laying down!'
    } else {
    this.cranky = false;
    }
  }
};

module.exports = Centaur;
