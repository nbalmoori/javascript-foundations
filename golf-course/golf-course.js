class GolfCourse {
  constructor(courseName, difficulty, openings, features) {
    this.name = courseName;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  }
  checkInGroup(group) {
    if (this.openings > group.length) {
      this.openings -= group.length;
      for (var i = 0; i < group.length; i++) {
        this.currentlyPlaying.unshift(group[i].name);
      }
      return 'You\'re checked in. Have fun!'
    } else {
      return 'Sorry, we are currently booked! Please come back later.'
    }
  }
}

module.exports = GolfCourse;
