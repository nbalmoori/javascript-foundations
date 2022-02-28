class Golfer {
  constructor(golferObject) {
    this.name = golferObject.name;
    this.handicap = golferObject.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }
  calculateAvg(par) {
    return `I usually shoot a ${(par + this.handicap)} on average.`
  }
  playRound(golfCourse) {
    if (golfCourse.difficulty === "hard") {
      this.frustration += 500;
    }
    if (golfCourse.difficulty === "moderate") {
      this.frustration += 100;
    }
  }
  hitTheRange() {
    this.confidence += 10;
  }
  marvel(golfCourse) {
    return `I love the ${golfCourse.features[0]} and ${golfCourse.features[1]} on this course!`
  }
  whatYaShoot(score) {
    if (score > 0) {
      this.frustration += 20;
      return 'Doh!';
    }
    if (score === 0) {
      this.frustration -= 10;
      return 'Booyah!';
    }
    if (score < 0) {
      this.frustration = 0;
      return 'I AM THE GREATEST GOLFER ALIVE!';
    }
  }
}

module.exports = Golfer;
