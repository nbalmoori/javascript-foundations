const Direwolf = require('../exercises/direwolf');

class Stark {
  constructor(starkObject) {
    this.name = starkObject.name;
    this.location = starkObject.area || 'Winterfell';
    this.safe = false;
  }
  sayHouseWords(){
    if (!this.safe) {
      return 'Winter is Coming';
    }
    if (this.safe) {
      return 'The North Remembers';
    }
  }
  callDirewolf(name, home) {
    var calledDirewolf = new Direwolf(name, this.location);
    calledDirewolf.protect(this)
    return calledDirewolf
  }
}

module.exports = Stark
