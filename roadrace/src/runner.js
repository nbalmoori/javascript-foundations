class Runner {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.milesRun = 0;
    this.fitness = 25;
    this.completedRaces = [];
  }
  runSomeMiles(milesRan) {
    this.milesRun += milesRan;
    this.fitness += milesRan;
  }
  stretch() {
    this.fitness += .5
  }
  runRace(race, raceMiles){
    this.completedRaces.push(race)
    this.runSomeMiles(raceMiles)
  }
}

module.exports = Runner;
