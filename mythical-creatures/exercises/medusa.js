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
    this.statues.push(new Statue(victim.name))
    this.statues.shift()
    return victim.name
    }
  }
};





module.exports = Medusa
// module.exports = Person
