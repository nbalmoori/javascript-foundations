var Person = require('./person');
var Statue = require('./statue');


class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(victim) {
    var returnedVictim = this.statues[0]
    if(this.statues.length < 3) {
      this.statues.push(new Statue(victim.name))
    } else {
    returnedVictim = new Person(this.statues[0].name);
    this.statues.shift()
    this.statues.push(new Statue(victim.name))
    return returnedVictim
    }
  }
};





module.exports = Medusa
// module.exports = Person
