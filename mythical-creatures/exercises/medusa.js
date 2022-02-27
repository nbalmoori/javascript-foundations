var Person = require('./person');
var Statue = require('./statue');


class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(victim) {
    if(this.statues.length < 3) {
      this.statues.push(new Statue(victim.name))
      } else {
        var returnedVictim = new Person(this.statues[0].name);
        returnedVictim.mood = "relieved"
        this.statues.shift()
        this.statues.push(new Statue(victim.name))
        return (returnedVictim)
    }
  }
};





module.exports = Medusa
// module.exports = Person
