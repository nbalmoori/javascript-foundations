class Roadrace {
  constructor(roadraceObject) {
    this.name = roadraceObject.title;
    this.location = roadraceObject.city;
    this.participants = [];
  }
  setDistance(miles) {
    this.distance = miles
    return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`
  }
  registerParticipants(participant) {
    this.participants.push(participant)
  }
  completeRace(){
    for (var i = 0; i < this.participants.length; i++) {
      this.participants[i].completedRaces.push(this.name)
      this.participants[i].milesRun =+ this.distance
    }
  }
};

module.exports = Roadrace;
