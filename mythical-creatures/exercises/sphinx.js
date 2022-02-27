class Sphinx {
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;
  }
  collectRiddle(riddle) {
    this.riddles.push(riddle)
    if (this.riddles.length > 3) {
      this.riddles.shift();
    }
  }
  attemptAnswer(answer) {
    var correctAnswer = 0
    var originalRidddlesLength = this.riddles.length
    for (var i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer === answer) {
        correctAnswer += 1;
        this.riddles.splice(i, 1);
      }
    }
    if (correctAnswer === 0) {
      this.heroesEaten += 1;
    }
    else if (correctAnswer === originalRidddlesLength) {
      return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
    }
    else {
      return 'That wasn\'t that hard, I bet you don\'t get the next one';
    }
  }
}

module.exports = Sphinx;
